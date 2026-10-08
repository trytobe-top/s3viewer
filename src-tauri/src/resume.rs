use anyhow::{Context, Result};
use serde::{Deserialize, Serialize};
use std::path::PathBuf;
use std::sync::Mutex;
use tauri::Manager;

/// Guards every read-modify-write cycle on `resume.json`. Multipart uploads to
/// different targets can run concurrently; without this lock two `set_upload`
/// calls could both read the same registry and the last writer would silently
/// drop the other target's resume entry.
static REGISTRY_LOCK: Mutex<()> = Mutex::new(());

/// Persisted state for an in-progress S3 multipart upload, keyed by the
/// local file so an interrupted upload can be resumed later.
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct UploadResume {
    pub profile_id: String,
    pub bucket: String,
    pub key: String,
    pub local_path: String,
    pub size: u64,
    pub mtime: u64,
    pub upload_id: String,
    pub part_size: u64,
    pub completed_parts: Vec<i32>,
}

#[derive(Debug, Default, Serialize, Deserialize)]
struct Registry {
    uploads: Vec<UploadResume>,
}

fn registry_path(app: &tauri::AppHandle) -> Result<PathBuf> {
    let dir = app
        .path()
        .app_data_dir()
        .context("resolve app data dir")?;
    std::fs::create_dir_all(&dir).context("create app data dir")?;
    Ok(dir.join("resume.json"))
}

fn load(app: &tauri::AppHandle) -> Registry {
    let Ok(path) = registry_path(app) else {
        return Registry::default();
    };
    std::fs::read(&path)
        .ok()
        .and_then(|b| serde_json::from_slice(&b).ok())
        .unwrap_or_default()
}

fn save(app: &tauri::AppHandle, reg: &Registry) {
    let Ok(path) = registry_path(app) else {
        return;
    };
    let Ok(bytes) = serde_json::to_vec(reg) else {
        return;
    };
    // Write to a temp file and rename so a crash mid-write never corrupts the
    // resume state (rename replaces the destination atomically on Windows).
    let tmp = path.with_extension("json.tmp");
    if std::fs::write(&tmp, bytes).is_ok() {
        let _ = std::fs::rename(&tmp, &path);
    }
}

/// Load the registry, run `f` on it, and persist the result. Every read and
/// mutation of `resume.json` goes through here so concurrent uploads never
/// lose each other's entries or see a half-written file.
fn with_registry<T>(app: &tauri::AppHandle, f: impl FnOnce(&mut Registry) -> T) -> T {
    let _guard = match REGISTRY_LOCK.lock() {
        Ok(g) => g,
        Err(e) => e.into_inner(),
    };
    let mut reg = load(app);
    let out = f(&mut reg);
    save(app, &reg);
    out
}

pub fn find_upload(
    app: &tauri::AppHandle,
    profile_id: &str,
    bucket: &str,
    key: &str,
    local_path: &str,
    size: u64,
    mtime: u64,
) -> Option<UploadResume> {
    with_registry(app, |reg| {
        reg.uploads.iter().find(|u| {
            u.profile_id == profile_id
                && u.bucket == bucket
                && u.key == key
                && u.local_path == local_path
                && u.size == size
                && u.mtime == mtime
        }).cloned()
    })
}

/// Find any existing resume entry for the same target regardless of file
/// fingerprint (used to abort stale uploads when the file changed).
pub fn find_upload_by_target(
    app: &tauri::AppHandle,
    profile_id: &str,
    bucket: &str,
    key: &str,
    local_path: &str,
) -> Option<UploadResume> {
    with_registry(app, |reg| {
        reg.uploads.iter().find(|u| {
            u.profile_id == profile_id
                && u.bucket == bucket
                && u.key == key
                && u.local_path == local_path
        }).cloned()
    })
}

pub fn set_upload(app: &tauri::AppHandle, resume: &UploadResume) {
    with_registry(app, |reg| {
        reg.uploads.retain(|u| {
            !(u.profile_id == resume.profile_id
                && u.bucket == resume.bucket
                && u.key == resume.key
                && u.local_path == resume.local_path)
        });
        reg.uploads.push(resume.clone());
    });
}

pub fn clear_upload(
    app: &tauri::AppHandle,
    profile_id: &str,
    bucket: &str,
    key: &str,
    local_path: &str,
) {
    with_registry(app, |reg| {
        reg.uploads.retain(|u| {
            !(u.profile_id == profile_id
                && u.bucket == bucket
                && u.key == key
                && u.local_path == local_path)
        });
    });
}
