use anyhow::{bail, Context, Result};
use serde::{Deserialize, Serialize};
use std::path::{Path, PathBuf};

pub const PLUGIN_SCHEME: &str = "s3v-plugin";

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PluginManifest {
    pub id: String,
    pub name: String,
    pub version: String,
    #[serde(default)]
    pub description: String,
    #[serde(default)]
    pub description_zh: String,
    pub entry: String,
    #[serde(default)]
    pub module: bool,
    #[serde(default)]
    pub homepage: Option<String>,
}

#[derive(Debug, Clone, Serialize)]
pub struct InstalledPlugin {
    pub id: String,
    pub name: String,
    pub version: String,
    pub description: String,
    #[serde(skip_serializing_if = "String::is_empty")]
    pub description_zh: String,
    pub entry: String,
    pub module: bool,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub homepage: Option<String>,
    pub dir: String,
}

pub struct PluginState {
    pub root: PathBuf,
}

#[derive(Debug, Clone, Serialize)]
pub struct RemotePlugin {
    pub id: String,
    pub version: String,
    pub size: u64,
    pub url: String,
    pub tag: String,
}

#[derive(Deserialize)]
struct GithubRelease {
    tag_name: String,
    assets: Vec<GithubAsset>,
}

#[derive(Deserialize)]
struct GithubAsset {
    name: String,
    size: u64,
    browser_download_url: String,
}

pub fn plugin_registry_url() -> &'static str {
    "https://api.github.com/repos/trytobe-top/s3viewer/releases"
}

fn parse_plugin_asset(name: &str) -> Option<(String, String)> {
    let stem = name.strip_suffix(".zip")?;
    let stem = stem.strip_prefix("plugin-").unwrap_or(stem);
    let idx = stem.rfind('-')?;
    let id = &stem[..idx];
    let version = &stem[idx + 1..];
    if !valid_plugin_id(id) || version.is_empty() {
        return None;
    }
    if version
        .chars()
        .all(|c| c.is_ascii_alphanumeric() || c == '.' || c == '-')
    {
        Some((id.to_string(), version.to_string()))
    } else {
        None
    }
}

fn http_client() -> Result<reqwest::Client, String> {
    reqwest::Client::builder()
        .user_agent("s3viewer")
        .timeout(std::time::Duration::from_secs(30))
        .build()
        .map_err(|e| format!("初始化网络客户端失败: {e}"))
}

pub async fn list_remote(registry: &str) -> Result<Vec<RemotePlugin>, String> {
    let client = http_client()?;
    let resp = client
        .get(registry)
        .send()
        .await
        .map_err(|e| format!("请求插件仓库失败: {e}"))?;
    if !resp.status().is_success() {
        return Err(format!("插件仓库返回 HTTP {}", resp.status()));
    }
    let releases: Vec<GithubRelease> = resp
        .json()
        .await
        .map_err(|e| format!("解析插件列表失败: {e}"))?;
    let mut out = Vec::new();
    for rel in &releases {
        for a in &rel.assets {
            if let Some((id, version)) = parse_plugin_asset(&a.name) {
                out.push(RemotePlugin {
                    id,
                    version,
                    size: a.size,
                    url: a.browser_download_url.clone(),
                    tag: rel.tag_name.clone(),
                });
            }
        }
    }
    out.sort_by(|a, b| {
        a.id.cmp(&b.id).then_with(|| b.version.cmp(&a.version))
    });
    out.dedup_by(|a, b| a.id == b.id);
    Ok(out)
}

pub async fn download_and_install(root: &Path, url: &str) -> Result<InstalledPlugin, String> {
    let client = http_client()?;
    let resp = client
        .get(url)
        .send()
        .await
        .map_err(|e| format!("下载插件失败: {e}"))?;
    if !resp.status().is_success() {
        return Err(format!("下载插件返回 HTTP {}", resp.status()));
    }
    let bytes = resp
        .bytes()
        .await
        .map_err(|e| format!("读取插件内容失败: {e}"))?;
    std::fs::create_dir_all(root).map_err(|e| format!("创建插件目录失败: {e}"))?;
    let tmp = root.join(format!(".download-{}.zip", std::process::id()));
    std::fs::write(&tmp, &bytes).map_err(|e| format!("写入临时文件失败: {e}"))?;
    let result = install(root, &tmp.to_string_lossy());
    let _ = std::fs::remove_file(&tmp);
    result.map_err(|e| e.to_string())
}

pub fn valid_plugin_id(id: &str) -> bool {
    !id.is_empty()
        && id.len() <= 64
        && id
            .chars()
            .all(|c| c.is_ascii_alphanumeric() || c == '-' || c == '_')
}

fn read_manifest(dir: &Path) -> Result<PluginManifest> {
    let path = dir.join("manifest.json");
    let raw =
        std::fs::read_to_string(&path).with_context(|| format!("read {}", path.display()))?;
    let m: PluginManifest = serde_json::from_str(&raw)
        .with_context(|| format!("parse {}", path.display()))?;
    if !valid_plugin_id(&m.id) {
        bail!("invalid plugin id in manifest: {}", m.id);
    }
    if m.entry.contains("..") || m.entry.starts_with('/') || m.entry.starts_with('\\') {
        bail!("invalid plugin entry: {}", m.entry);
    }
    Ok(m)
}

impl InstalledPlugin {
    fn from_manifest(m: &PluginManifest, dir: &str) -> Self {
        InstalledPlugin {
            id: m.id.clone(),
            name: m.name.clone(),
            version: m.version.clone(),
            description: m.description.clone(),
            description_zh: m.description_zh.clone(),
            entry: m.entry.clone(),
            module: m.module,
            homepage: m.homepage.clone(),
            dir: dir.to_string(),
        }
    }
}

pub fn list_installed(root: &Path) -> Vec<InstalledPlugin> {
    let mut out = Vec::new();
    if let Ok(entries) = std::fs::read_dir(root) {
        for e in entries.flatten() {
            let p = e.path();
            if !p.is_dir() {
                continue;
            }
            let name = e.file_name().to_string_lossy().to_string();
            if name.starts_with('.') || !valid_plugin_id(&name) {
                continue;
            }
            if let Ok(m) = read_manifest(&p) {
                out.push(InstalledPlugin::from_manifest(&m, &name));
            }
        }
    }
    out.sort_by(|a, b| a.id.cmp(&b.id));
    out
}

fn copy_dir_all(src: &Path, dst: &Path) -> Result<()> {
    std::fs::create_dir_all(dst)?;
    for entry in std::fs::read_dir(src)? {
        let entry = entry?;
        let from = entry.path();
        let to = dst.join(entry.file_name());
        if from.is_dir() {
            copy_dir_all(&from, &to)?;
        } else {
            std::fs::copy(&from, &to)?;
        }
    }
    Ok(())
}

fn find_manifest_dir(staging: &Path) -> Result<PathBuf> {
    if staging.join("manifest.json").is_file() {
        return Ok(staging.to_path_buf());
    }
    let mut candidates = Vec::new();
    if let Ok(entries) = std::fs::read_dir(staging) {
        for e in entries.flatten() {
            let p = e.path();
            if p.is_dir() && p.join("manifest.json").is_file() {
                candidates.push(p);
            }
        }
    }
    if candidates.len() == 1 {
        return Ok(candidates.remove(0));
    }
    bail!("插件包中找不到 manifest.json（根目录或唯一子目录）");
}

pub fn install(root: &Path, src: &str) -> Result<InstalledPlugin> {
    let src_path = Path::new(src);
    if !src_path.exists() {
        bail!("源路径不存在: {src}");
    }
    std::fs::create_dir_all(root)?;
    let staging = root.join(format!(".staging-{}", std::process::id()));
    let _ = std::fs::remove_dir_all(&staging);
    let install_result = (|| -> Result<InstalledPlugin> {
        if src_path.is_dir() {
            copy_dir_all(src_path, &staging)?;
        } else {
            let file = std::fs::File::open(src_path)
                .with_context(|| format!("open {src}"))?;
            let mut archive = zip::ZipArchive::new(file).context("open zip")?;
            archive.extract(&staging).context("extract zip")?;
        }
        let manifest_dir = find_manifest_dir(&staging)?;
        let manifest = read_manifest(&manifest_dir)?;
        let dest = root.join(&manifest.id);
        if dest.exists() {
            std::fs::remove_dir_all(&dest).context("replace old plugin")?;
        }
        if manifest_dir == staging {
            std::fs::rename(&staging, &dest)?;
        } else {
            std::fs::rename(&manifest_dir, &dest)?;
        }
        Ok(InstalledPlugin::from_manifest(&manifest, &manifest.id))
    })();
    let _ = std::fs::remove_dir_all(&staging);
    install_result
}

pub fn uninstall(root: &Path, id: &str) -> Result<()> {
    if !valid_plugin_id(id) {
        bail!("invalid plugin id: {id}");
    }
    let dir = root.join(id);
    if !dir.is_dir() {
        bail!("插件不存在: {id}");
    }
    std::fs::remove_dir_all(&dir).context("remove plugin dir")?;
    Ok(())
}

fn percent_decode(s: &str) -> String {
    let bytes = s.as_bytes();
    let mut out = Vec::with_capacity(bytes.len());
    let mut i = 0;
    while i < bytes.len() {
        if bytes[i] == b'%' && i + 2 < bytes.len() {
            if let Ok(v) = u8::from_str_radix(&s[i + 1..i + 3], 16) {
                out.push(v);
                i += 3;
                continue;
            }
        }
        out.push(bytes[i]);
        i += 1;
    }
    String::from_utf8_lossy(&out).to_string()
}

fn mime_for(path: &Path) -> &'static str {
    match path
        .extension()
        .and_then(|e| e.to_str())
        .map(|e| e.to_ascii_lowercase())
        .as_deref()
    {
        Some("js") | Some("mjs") | Some("cjs") => "text/javascript",
        Some("css") => "text/css",
        Some("html") | Some("htm") => "text/html",
        Some("json") | Some("map") => "application/json",
        Some("wasm") => "application/wasm",
        Some("png") => "image/png",
        Some("jpg") | Some("jpeg") => "image/jpeg",
        Some("gif") => "image/gif",
        Some("svg") => "image/svg+xml",
        Some("ico") => "image/x-icon",
        Some("ttf") => "font/ttf",
        Some("woff") => "font/woff",
        Some("woff2") => "font/woff2",
        _ => "application/octet-stream",
    }
}

fn not_found() -> tauri::http::Response<std::borrow::Cow<'static, [u8]>> {
    tauri::http::Response::builder()
        .status(404)
        .header("Access-Control-Allow-Origin", "*")
        .body(Vec::new().into())
        .unwrap()
}

/// Serve plugin files: `/<plugin-id>/<relative-path>` under the plugins root.
pub fn handle_request(
    root: &Path,
    uri_path: &str,
    method: &str,
) -> tauri::http::Response<std::borrow::Cow<'static, [u8]>> {
    if method != "GET" && method != "HEAD" {
        return not_found();
    }
    let decoded = percent_decode(uri_path.trim_start_matches('/'));
    let decoded = decoded.replace('\\', "/");
    let segments: Vec<&str> = decoded.split('/').filter(|s| !s.is_empty()).collect();
    let (id, rest) = match segments.split_first() {
        Some((first, tail)) => (*first, tail.join("/")),
        None => return not_found(),
    };
    if !valid_plugin_id(id) || rest.is_empty() {
        return not_found();
    }
    let full = root.join(id).join(&rest);
    let root_canon = match std::fs::canonicalize(root) {
        Ok(v) => v,
        Err(_) => return not_found(),
    };
    let full_canon = match std::fs::canonicalize(&full) {
        Ok(v) => v,
        Err(_) => return not_found(),
    };
    if !full_canon.starts_with(&root_canon) || !full_canon.is_file() {
        return not_found();
    }
    let mime = mime_for(&full_canon);
    let builder = tauri::http::Response::builder()
        .status(200)
        .header("Content-Type", mime)
        .header("Access-Control-Allow-Origin", "*")
        .header("Cache-Control", "no-cache");
    if method == "HEAD" {
        return builder.body(Vec::new().into()).unwrap();
    }
    match std::fs::read(&full_canon) {
        Ok(bytes) => builder.body(bytes.into()).unwrap(),
        Err(_) => not_found(),
    }
}

pub fn plugin_base_url() -> String {
    if cfg!(windows) {
        format!("http://{PLUGIN_SCHEME}.localhost")
    } else {
        format!("{PLUGIN_SCHEME}://localhost")
    }
}

/// Percent-encode each path segment, keeping `/` separators intact.
pub fn encode_plugin_path(path: &str) -> String {
    let mut out = String::new();
    for &b in path.trim_start_matches(['/', '\\']).as_bytes() {
        match b {
            b'A'..=b'Z' | b'a'..=b'z' | b'0'..=b'9' | b'-' | b'_' | b'.' | b'~' | b'/' => {
                out.push(b as char)
            }
            _ => out.push_str(&format!("%{b:02X}")),
        }
    }
    out
}
