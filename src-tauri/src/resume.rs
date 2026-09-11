use anyhow::{Context, Result};
use serde::{Deserialize, Serialize};
use std::path::PathBuf;
use tauri::Manager;

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
    if let Ok(bytes) = serde_json::to_vec(reg) {
        let _ = std::fs::write(path, bytes);
    }
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
    load(app).uploads.into_iter().find(|u| {
        u.profile_id == profile_id
            && u.bucket == bucket
            && u.key == key
            && u.local_path == local_path
            && u.size == size
            && u.mtime == mtime
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
    load(app).uploads.into_iter().find(|u| {
        u.profile_id == profile_id
            && u.bucket == bucket
            && u.key == key
            && u.local_path == local_path
    })
}

pub fn set_upload(app: &tauri::AppHandle, resume: &UploadResume) {
    let mut reg = load(app);
    reg.uploads.retain(|u| {
        !(u.profile_id == resume.profile_id
            && u.bucket == resume.bucket
            && u.key == resume.key
            && u.local_path == resume.local_path)
    });
    reg.uploads.push(resume.clone());
    save(app, &reg);
}

pub fn clear_upload(
    app: &tauri::AppHandle,
    profile_id: &str,
    bucket: &str,
    key: &str,
    local_path: &str,
) {
    let mut reg = load(app);
    reg.uploads.retain(|u| {
        !(u.profile_id == profile_id
            && u.bucket == bucket
            && u.key == key
            && u.local_path == local_path)
    });
    save(app, &reg);
}
