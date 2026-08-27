use anyhow::{Context, Result};
use serde::{Deserialize, Serialize};
use std::path::PathBuf;
use std::sync::Mutex;

const KEYRING_SERVICE: &str = "com.s3viewer.desktop";

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Profile {
    pub id: String,
    pub name: String,
    pub endpoint: Option<String>,
    pub region: String,
    pub access_key: String,
    pub secret_key: String,
    pub path_style: bool,
    #[serde(default)]
    pub tls_skip_verify: bool,
    #[serde(default)]
    pub ca_cert_pem: Option<String>,
}

#[derive(Serialize, Deserialize)]
struct StoredSecrets {
    access_key: String,
    secret_key: String,
}

#[derive(Serialize, Deserialize)]
struct StoredProfile {
    id: String,
    name: String,
    endpoint: Option<String>,
    region: String,
    path_style: bool,
    #[serde(default)]
    tls_skip_verify: bool,
    #[serde(default)]
    ca_cert_pem: Option<String>,
    #[serde(default, skip_serializing_if = "Option::is_none")]
    access_key: Option<String>,
    #[serde(default, skip_serializing_if = "Option::is_none")]
    secret_key: Option<String>,
}

impl StoredProfile {
    fn from_profile(p: &Profile) -> Self {
        StoredProfile {
            id: p.id.clone(),
            name: p.name.clone(),
            endpoint: p.endpoint.clone(),
            region: p.region.clone(),
            path_style: p.path_style,
            tls_skip_verify: p.tls_skip_verify,
            ca_cert_pem: p.ca_cert_pem.clone(),
            access_key: None,
            secret_key: None,
        }
    }
}

#[derive(Deserialize)]
struct LegacyConfig {
    profiles: Vec<StoredProfile>,
}

pub struct ConfigState {
    pub inner: Mutex<Config>,
    pub path: PathBuf,
}

#[derive(Debug, Clone, Serialize, Deserialize, Default)]
pub struct Config {
    pub profiles: Vec<Profile>,
}

impl Profile {
    pub fn has_ca_cert(&self) -> bool {
        self.ca_cert_pem
            .as_deref()
            .map(|s| !s.trim().is_empty())
            .unwrap_or(false)
    }
}

fn keyring_entry(id: &str) -> Result<keyring::Entry> {
    keyring::Entry::new(KEYRING_SERVICE, id).context("open keyring entry")
}

pub fn store_secret(id: &str, access_key: &str, secret_key: &str) -> Result<()> {
    if access_key.is_empty() && secret_key.is_empty() {
        delete_secret(id);
        return Ok(());
    }
    let payload = serde_json::to_string(&StoredSecrets {
        access_key: access_key.to_string(),
        secret_key: secret_key.to_string(),
    })
    .context("encode secrets")?;
    keyring_entry(id)?
        .set_password(&payload)
        .map_err(|e| anyhow::anyhow!("store secrets in OS keychain: {e}"))
}

pub fn load_secret(id: &str) -> Option<(String, String)> {
    let entry = keyring_entry(id).ok()?;
    let raw = entry.get_password().ok()?;
    let parsed: StoredSecrets = serde_json::from_str(&raw).ok()?;
    Some((parsed.access_key, parsed.secret_key))
}

pub fn delete_secret(id: &str) {
    if let Ok(entry) = keyring_entry(id) {
        let _ = entry.delete_credential();
    }
}

impl Config {
    pub fn load(path: &std::path::Path) -> Result<Self> {
        if !path.exists() {
            return Ok(Config::default());
        }
        let bytes = std::fs::read(path).context("read config file")?;
        let plain = decrypt(&bytes)?;
        let stored: Vec<StoredProfile> = match serde_json::from_slice(&plain) {
            Ok(v) => v,
            Err(e) => {
                let legacy: LegacyConfig = serde_json::from_slice(&plain)
                    .map_err(|_| e)
                    .context("parse config")?;
                legacy.profiles
            }
        };
        let profiles = stored
            .into_iter()
            .map(|sp| {
                let (access_key, secret_key) = match load_secret(&sp.id) {
                    Some(s) => s,
                    None => (
                        sp.access_key.clone().unwrap_or_default(),
                        sp.secret_key.clone().unwrap_or_default(),
                    ),
                };
                Profile {
                    id: sp.id,
                    name: sp.name,
                    endpoint: sp.endpoint,
                    region: sp.region,
                    access_key,
                    secret_key,
                    path_style: sp.path_style,
                    tls_skip_verify: sp.tls_skip_verify,
                    ca_cert_pem: sp.ca_cert_pem,
                }
            })
            .collect();
        Ok(Config { profiles })
    }

    pub fn save(&self, path: &std::path::Path) -> Result<()> {
        let mut stored = Vec::with_capacity(self.profiles.len());
        for p in &self.profiles {
            let mut sp = StoredProfile::from_profile(p);
            if !p.access_key.is_empty() || !p.secret_key.is_empty() {
                if store_secret(&p.id, &p.access_key, &p.secret_key).is_err() {
                    sp.access_key = Some(p.access_key.clone());
                    sp.secret_key = Some(p.secret_key.clone());
                }
            }
            stored.push(sp);
        }
        let json = serde_json::to_vec_pretty(&stored).context("serialize config")?;
        let enc = encrypt(&json)?;
        write_file_private(path, &enc).context("write config file")?;
        Ok(())
    }
}

fn write_file_private(path: &std::path::Path, data: &[u8]) -> Result<()> {
    #[cfg(unix)]
    {
        use std::io::Write;
        use std::os::unix::fs::OpenOptionsExt;
        let mut f = std::fs::OpenOptions::new()
            .write(true)
            .create(true)
            .truncate(true)
            .mode(0o600)
            .open(path)?;
        f.write_all(data)?;
    }
    #[cfg(not(unix))]
    {
        std::fs::write(path, data)?;
    }
    Ok(())
}

pub fn encrypt(plain: &[u8]) -> Result<Vec<u8>> {
    #[cfg(windows)]
    {
        dpapi_encrypt(plain)
    }
    #[cfg(not(windows))]
    {
        Ok(plain.to_vec())
    }
}

pub fn decrypt(cipher: &[u8]) -> Result<Vec<u8>> {
    #[cfg(windows)]
    {
        dpapi_decrypt(cipher)
    }
    #[cfg(not(windows))]
    {
        Ok(cipher.to_vec())
    }
}

#[cfg(windows)]
fn dpapi_encrypt(plain: &[u8]) -> Result<Vec<u8>> {
    use windows_sys::Win32::Foundation::LocalFree;
    use windows_sys::Win32::Security::Cryptography::{
        CryptProtectData, CRYPT_INTEGER_BLOB, CRYPTPROTECT_UI_FORBIDDEN,
    };

    let in_blob = CRYPT_INTEGER_BLOB {
        cbData: plain.len() as u32,
        pbData: plain.as_ptr() as *mut u8,
    };
    let mut out_blob = CRYPT_INTEGER_BLOB {
        cbData: 0,
        pbData: std::ptr::null_mut(),
    };
    let ok = unsafe {
        CryptProtectData(
            &in_blob,
            std::ptr::null(),
            std::ptr::null(),
            std::ptr::null(),
            std::ptr::null(),
            CRYPTPROTECT_UI_FORBIDDEN,
            &mut out_blob,
        )
    };
    if ok == 0 {
        return Err(anyhow::anyhow!("CryptProtectData failed"));
    }
    let data =
        unsafe { std::slice::from_raw_parts(out_blob.pbData, out_blob.cbData as usize) }.to_vec();
    unsafe {
        LocalFree(out_blob.pbData as *mut _);
    }
    Ok(data)
}

#[cfg(windows)]
fn dpapi_decrypt(cipher: &[u8]) -> Result<Vec<u8>> {
    use windows_sys::Win32::Foundation::LocalFree;
    use windows_sys::Win32::Security::Cryptography::{
        CryptUnprotectData, CRYPT_INTEGER_BLOB, CRYPTPROTECT_UI_FORBIDDEN,
    };

    let in_blob = CRYPT_INTEGER_BLOB {
        cbData: cipher.len() as u32,
        pbData: cipher.as_ptr() as *mut u8,
    };
    let mut out_blob = CRYPT_INTEGER_BLOB {
        cbData: 0,
        pbData: std::ptr::null_mut(),
    };
    let ok = unsafe {
        CryptUnprotectData(
            &in_blob,
            std::ptr::null_mut(),
            std::ptr::null(),
            std::ptr::null(),
            std::ptr::null(),
            CRYPTPROTECT_UI_FORBIDDEN,
            &mut out_blob,
        )
    };
    if ok == 0 {
        return Err(anyhow::anyhow!("CryptUnprotectData failed"));
    }
    let data =
        unsafe { std::slice::from_raw_parts(out_blob.pbData, out_blob.cbData as usize) }.to_vec();
    unsafe {
        LocalFree(out_blob.pbData as *mut _);
    }
    Ok(data)
}
