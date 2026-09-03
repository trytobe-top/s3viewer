mod config;
mod plugins;
mod s3;

use base64::Engine;
use config::{Config, ConfigState, Profile};
use serde::Serialize;
use std::sync::Mutex;
use tauri::{Manager, State};

use plugins::{InstalledPlugin, PluginState, RemotePlugin};

#[derive(Debug, Serialize)]
struct Preview {
    content_base64: String,
    content_type: Option<String>,
    size: i64,
    name: String,
}

#[derive(Debug, Serialize)]
struct PresignResult {
    url: String,
    expires_at: u64,
}

fn get_profile(state: &State<ConfigState>, id: &str) -> Result<Profile, String> {
    let guard = state.inner.lock().map_err(|e| e.to_string())?;
    guard
        .profiles
        .iter()
        .find(|p| p.id == id)
        .cloned()
        .ok_or_else(|| format!("未找到连接: {id}"))
}

fn save_config(state: &State<ConfigState>, cfg: &Config) -> Result<(), String> {
    cfg.save(&state.path).map_err(|e| e.to_string())
}

#[tauri::command]
async fn list_profiles(state: State<'_, ConfigState>) -> Result<Vec<Profile>, String> {
    let guard = state.inner.lock().map_err(|e| e.to_string())?;
    Ok(guard.profiles.clone())
}

#[tauri::command]
async fn save_profile(
    state: State<'_, ConfigState>,
    profile: Profile,
) -> Result<Vec<Profile>, String> {
    let mut guard = state.inner.lock().map_err(|e| e.to_string())?;
    if let Some(existing) = guard.profiles.iter_mut().find(|p| p.id == profile.id) {
        *existing = profile;
    } else {
        guard.profiles.push(profile);
    }
    let snapshot = guard.profiles.clone();
    save_config(&state, &guard)?;
    Ok(snapshot)
}

#[tauri::command]
async fn delete_profile(
    state: State<'_, ConfigState>,
    id: String,
) -> Result<Vec<Profile>, String> {
    let mut guard = state.inner.lock().map_err(|e| e.to_string())?;
    guard.profiles.retain(|p| p.id != id);
    config::delete_secret(&id);
    let snapshot = guard.profiles.clone();
    save_config(&state, &guard)?;
    Ok(snapshot)
}

#[tauri::command]
async fn list_buckets(
    state: State<'_, ConfigState>,
    profile_id: String,
) -> Result<Vec<s3::BucketInfo>, String> {
    let p = get_profile(&state, &profile_id)?;
    s3::list_buckets(&p).await.map_err(|e| e.to_string())
}

#[tauri::command]
async fn list_objects(
    state: State<'_, ConfigState>,
    profile_id: String,
    bucket: String,
    prefix: String,
    continuation_token: Option<String>,
) -> Result<s3::ObjectList, String> {
    let p = get_profile(&state, &profile_id)?;
    s3::list_objects(&p, &bucket, &prefix, continuation_token)
        .await
        .map_err(|e| e.to_string())
}
#[tauri::command]
async fn get_preview(
    state: State<'_, ConfigState>,
    profile_id: String,
    bucket: String,
    key: String,
) -> Result<Preview, String> {
    let p = get_profile(&state, &profile_id)?;
    let (bytes, content_type) = s3::get_object_preview(&p, &bucket, &key)
        .await
        .map_err(|e| e.to_string())?;
    let name = key.rsplit('/').next().unwrap_or(&key).to_string();
    Ok(Preview {
        content_base64: base64::engine::general_purpose::STANDARD.encode(&bytes),
        content_type,
        size: bytes.len() as i64,
        name,
    })
}

#[tauri::command]
async fn search_objects(
    state: State<'_, ConfigState>,
    profile_id: String,
    bucket: String,
    prefix: String,
    query: String,
    deep: bool,
) -> Result<s3::ObjectList, String> {
    let p = get_profile(&state, &profile_id)?;
    s3::search_objects(&p, &bucket, &prefix, &query, deep)
        .await
        .map_err(|e| e.to_string())
}

#[tauri::command]
async fn presign(
    state: State<'_, ConfigState>,
    profile_id: String,
    bucket: String,
    key: String,
    expires_secs: u64,
    method: Option<String>,
) -> Result<PresignResult, String> {
    let p = get_profile(&state, &profile_id)?;
    let m = method.unwrap_or_else(|| "GET".to_string());
    let url = s3::presign_url(&p, &bucket, &key, expires_secs, &m)
        .await
        .map_err(|e| e.to_string())?;
    let now = std::time::SystemTime::now()
        .duration_since(std::time::UNIX_EPOCH)
        .map(|d| d.as_secs())
        .unwrap_or(0);
    Ok(PresignResult {
        url,
        expires_at: now + expires_secs,
    })
}

#[tauri::command]
async fn upload_file(
    app: tauri::AppHandle,
    state: State<'_, ConfigState>,
    profile_id: String,
    bucket: String,
    key: String,
    local_path: String,
    task_id: String,
) -> Result<(), String> {
    let p = get_profile(&state, &profile_id)?;
    s3::upload_file(&app, &p, &bucket, &key, &local_path, &task_id)
        .await
        .map_err(|e| e.to_string())
}

#[tauri::command]
async fn upload_folder(
    app: tauri::AppHandle,
    state: State<'_, ConfigState>,
    profile_id: String,
    bucket: String,
    prefix: String,
    local_dir: String,
    task_id: String,
) -> Result<u64, String> {
    let p = get_profile(&state, &profile_id)?;
    s3::upload_folder(&app, &p, &bucket, &prefix, &local_dir, &task_id)
        .await
        .map_err(|e| e.to_string())
}

#[tauri::command]
fn path_kind(path: String) -> Result<String, String> {
    Ok(s3::path_kind(&path))
}

#[tauri::command]
async fn download_object(
    app: tauri::AppHandle,
    state: State<'_, ConfigState>,
    profile_id: String,
    bucket: String,
    key: String,
    local_path: String,
    task_id: String,
) -> Result<(), String> {
    let p = get_profile(&state, &profile_id)?;
    s3::download_object(&app, &p, &bucket, &key, &local_path, &task_id)
        .await
        .map_err(|e| e.to_string())
}

#[tauri::command]
async fn download_selected(
    state: State<'_, ConfigState>,
    profile_id: String,
    bucket: String,
    items: Vec<s3::DownloadItem>,
    local_dir: String,
) -> Result<u64, String> {
    let p = get_profile(&state, &profile_id)?;
    s3::download_selected(&p, &bucket, &items, &local_dir)
        .await
        .map_err(|e| e.to_string())
}

#[tauri::command]
async fn save_object(
    state: State<'_, ConfigState>,
    profile_id: String,
    bucket: String,
    key: String,
    content_base64: String,
    content_type: Option<String>,
) -> Result<(), String> {
    let bytes = base64::engine::general_purpose::STANDARD
        .decode(&content_base64)
        .map_err(|e| format!("base64 decode: {e}"))?;
    let p = get_profile(&state, &profile_id)?;
    s3::put_object(&p, &bucket, &key, bytes, content_type.as_deref())
        .await
        .map_err(|e| e.to_string())
}

#[tauri::command]
async fn delete_object(
    state: State<'_, ConfigState>,
    profile_id: String,
    bucket: String,
    key: String,
) -> Result<(), String> {
    let p = get_profile(&state, &profile_id)?;
    s3::delete_object(&p, &bucket, &key)
        .await
        .map_err(|e| e.to_string())
}

#[tauri::command]
async fn delete_prefix(
    state: State<'_, ConfigState>,
    profile_id: String,
    bucket: String,
    prefix: String,
) -> Result<u64, String> {
    let p = get_profile(&state, &profile_id)?;
    s3::delete_prefix(&p, &bucket, &prefix)
        .await
        .map_err(|e| e.to_string())
}

#[tauri::command]
async fn rename_object(
    state: State<'_, ConfigState>,
    profile_id: String,
    bucket: String,
    old_key: String,
    new_key: String,
) -> Result<(), String> {
    let p = get_profile(&state, &profile_id)?;
    s3::rename_object(&p, &bucket, &old_key, &new_key)
        .await
        .map_err(|e| e.to_string())
}

#[tauri::command]
async fn create_folder(
    state: State<'_, ConfigState>,
    profile_id: String,
    bucket: String,
    prefix: String,
) -> Result<(), String> {
    let p = get_profile(&state, &profile_id)?;
    s3::create_folder(&p, &bucket, &prefix)
        .await
        .map_err(|e| e.to_string())
}

#[tauri::command]
async fn create_bucket(
    state: State<'_, ConfigState>,
    profile_id: String,
    name: String,
    region: String,
) -> Result<(), String> {
    let p = get_profile(&state, &profile_id)?;
    s3::create_bucket(&p, &name, &region)
        .await
        .map_err(|e| e.to_string())
}

#[tauri::command]
async fn delete_bucket(
    state: State<'_, ConfigState>,
    profile_id: String,
    name: String,
) -> Result<(), String> {
    let p = get_profile(&state, &profile_id)?;
    s3::delete_bucket(&p, &name)
        .await
        .map_err(|e| e.to_string())
}

#[tauri::command]
async fn write_export_file(path: String, content: String) -> Result<(), String> {
    if let Some(parent) = std::path::Path::new(&path).parent() {
        std::fs::create_dir_all(parent).map_err(|e| format!("创建目录失败: {e}"))?;
    }
    std::fs::write(&path, content).map_err(|e| format!("写入文件失败: {e}"))
}

#[tauri::command]
async fn read_text_file(path: String) -> Result<String, String> {
    std::fs::read_to_string(&path).map_err(|e| format!("读取文件失败: {e}"))
}

/// Open a downloaded file/folder with the OS default handler (file explorer / default app).
#[tauri::command]
fn open_path(path: String) -> Result<(), String> {
    let p = std::path::Path::new(&path);
    if !p.exists() {
        return Err(format!("路径不存在: {path}"));
    }
    #[cfg(target_os = "windows")]
    let res = std::process::Command::new("explorer")
        .arg(&path)
        .spawn()
        .map(|_| ())
        .map_err(|e| format!("打开失败: {e}"));
    #[cfg(target_os = "macos")]
    let res = std::process::Command::new("open")
        .arg(&path)
        .spawn()
        .map(|_| ())
        .map_err(|e| format!("打开失败: {e}"));
    #[cfg(target_os = "linux")]
    let res = std::process::Command::new("xdg-open")
        .arg(&path)
        .spawn()
        .map(|_| ())
        .map_err(|e| format!("打开失败: {e}"));
    res
}

/// Open a URL in the OS default browser.
#[tauri::command]
fn open_url(url: String) -> Result<(), String> {
    if !url.starts_with("https://") && !url.starts_with("http://") {
        return Err(format!("无效的 URL: {url}"));
    }
    #[cfg(target_os = "windows")]
    let res = std::process::Command::new("cmd")
        .args(["/C", "start", "", &url])
        .spawn()
        .map(|_| ())
        .map_err(|e| format!("打开失败: {e}"));
    #[cfg(target_os = "macos")]
    let res = std::process::Command::new("open")
        .arg(&url)
        .spawn()
        .map(|_| ())
        .map_err(|e| format!("打开失败: {e}"));
    #[cfg(target_os = "linux")]
    let res = std::process::Command::new("xdg-open")
        .arg(&url)
        .spawn()
        .map(|_| ())
        .map_err(|e| format!("打开失败: {e}"));
    res
}

#[tauri::command]
async fn open_devtools(window: tauri::WebviewWindow) -> Result<(), String> {
    window.open_devtools();
    Ok(())
}

#[tauri::command]
async fn import_profiles(
    state: State<'_, ConfigState>,
    profiles: Vec<Profile>,
) -> Result<Vec<Profile>, String> {
    let mut guard = state.inner.lock().map_err(|e| e.to_string())?;
    for prof in profiles {
        if let Some(existing) = guard.profiles.iter_mut().find(|p| p.id == prof.id) {
            *existing = prof;
        } else {
            guard.profiles.push(prof);
        }
    }
    let snapshot = guard.profiles.clone();
    save_config(&state, &guard)?;
    Ok(snapshot)
}

#[tauri::command]
async fn list_plugins(state: State<'_, PluginState>) -> Result<Vec<InstalledPlugin>, String> {
    Ok(plugins::list_installed(&state.root))
}

#[tauri::command]
async fn install_plugin(
    state: State<'_, PluginState>,
    src: String,
) -> Result<InstalledPlugin, String> {
    plugins::install(&state.root, &src).map_err(|e| e.to_string())
}

#[tauri::command]
async fn uninstall_plugin(state: State<'_, PluginState>, id: String) -> Result<(), String> {
    plugins::uninstall(&state.root, &id).map_err(|e| e.to_string())
}

#[tauri::command]
fn plugin_url(id: String, path: String) -> Result<String, String> {
    if !plugins::valid_plugin_id(&id) {
        return Err(format!("invalid plugin id: {id}"));
    }
    let encoded = plugins::encode_plugin_path(&path);
    let base = plugins::plugin_base_url();
    let url = format!("{base}/{id}/{encoded}");
    Ok(url.trim_end_matches('/').to_string())
}

#[tauri::command]
fn plugin_dir(state: State<PluginState>) -> Result<String, String> {
    Ok(state.root.to_string_lossy().to_string())
}

#[tauri::command]
async fn list_remote_plugins() -> Result<Vec<RemotePlugin>, String> {
    plugins::list_remote(plugins::plugin_registry_url()).await
}

#[tauri::command]
async fn download_plugin(
    state: State<'_, PluginState>,
    url: String,
) -> Result<InstalledPlugin, String> {
    plugins::download_and_install(&state.root, &url).await
}

pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_dialog::init())
        .plugin(tauri_plugin_clipboard_manager::init())
        .register_uri_scheme_protocol(plugins::PLUGIN_SCHEME, |ctx, request| {
            let state = ctx.app_handle().state::<PluginState>();
            plugins::handle_request(&state.root, request.uri().path(), request.method().as_str())
        })
        .setup(|app| {
            let dir = app.path().app_config_dir()?;
            std::fs::create_dir_all(&dir)?;
            let plugins_root = dir.join("plugins");
            std::fs::create_dir_all(&plugins_root)?;
            let path = dir.join("profiles.enc");
            let cfg = Config::load(&path).map_err(|e| format!("load config: {e}"))?;
            app.manage(ConfigState {
                inner: Mutex::new(cfg),
                path,
            });
            app.manage(PluginState { root: plugins_root });
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![
            list_profiles,
            save_profile,
            delete_profile,
            list_buckets,
            list_objects,
            get_preview,
            search_objects,
            presign,
            upload_file,
            upload_folder,
            path_kind,
            download_object,
            download_selected,
            delete_object,
            delete_prefix,
            rename_object,
            create_folder,
            create_bucket,
            delete_bucket,
            write_export_file,
            read_text_file,
            import_profiles,
            open_devtools,
            open_path,
            open_url,
            list_plugins,
            install_plugin,
            uninstall_plugin,
            plugin_url,
            plugin_dir,
            save_object,
            list_remote_plugins,
            download_plugin,
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
