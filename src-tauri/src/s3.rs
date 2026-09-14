use crate::config::Profile;
use crate::resume;
use anyhow::{anyhow, Result};
use aws_credential_types::Credentials;
use aws_sdk_s3::config::RequestChecksumCalculation;
use aws_sdk_s3::presigning::PresigningConfig;
use aws_sdk_s3::types::{CompletedMultipartUpload, CompletedPart, Delete, ObjectIdentifier};
use aws_sdk_s3::Client;
use aws_smithy_runtime_api::client::http::SharedHttpClient;
use aws_smithy_types::body::SdkBody;
use aws_smithy_types::byte_stream::ByteStream;
use serde::{Deserialize, Serialize};
use std::collections::BTreeMap;
use std::path::{Path, PathBuf};
use std::pin::Pin;
use std::sync::Arc;
use std::task::{Context, Poll};
use std::time::{Duration, UNIX_EPOCH};
use tauri::{AppHandle, Emitter};
use tokio::io::AsyncRead;

fn emit_progress(
    app: &AppHandle,
    task_id: &str,
    kind: &str,
    progress: f64,
    bytes: u64,
    total: u64,
) {
    let _ = app.emit(
        "transfer://progress",
        serde_json::json!({
            "taskId": task_id,
            "type": kind,
            "progress": progress,
            "bytes": bytes,
            "total": total
        }),
    );
}

/// Extract a readable description from an SDK error. `SdkError::ServiceError`
/// only `Display`s as "service error", so dig into the typed error + HTTP status.
fn sdk_err<E>(
    e: aws_smithy_runtime_api::client::result::SdkError<
        E,
        aws_smithy_runtime_api::client::orchestrator::HttpResponse,
    >,
) -> String
where
    E: std::fmt::Display + aws_smithy_types::error::metadata::ProvideErrorMetadata,
{
    use aws_smithy_types::error::metadata::ProvideErrorMetadata;
    match e {
        aws_smithy_runtime_api::client::result::SdkError::ServiceError(ctx) => {
            let status = ctx.raw().status();
            let code = ProvideErrorMetadata::code(ctx.err()).unwrap_or("unknown");
            let msg = ProvideErrorMetadata::message(ctx.err()).unwrap_or("");
            format!("HTTP {status} [code={code}] {msg}")
        }
        other => other.to_string(),
    }
}

struct ProgressUploadBody {
    file: tokio::fs::File,
    total: u64,
    sent: u64,
    done: bool,
    app: AppHandle,
    task_id: String,
    /// Progress base percentage (already uploaded before this file in a batch).
    base: f64,
    /// Percentage range this file contributes to the batch progress.
    span: f64,
    /// Total bytes of the whole batch (for progress reporting).
    total_bytes: u64,
    /// Bytes uploaded before this file in the batch (for progress reporting).
    sent_before: u64,
}

impl http_body::Body for ProgressUploadBody {
    type Data = bytes::Bytes;
    type Error = std::io::Error;

    fn poll_frame(
        mut self: Pin<&mut Self>,
        cx: &mut Context<'_>,
    ) -> Poll<Option<Result<http_body::Frame<Self::Data>, Self::Error>>> {
        if self.done {
            return Poll::Ready(None);
        }
        let mut buf = [0u8; 64 * 1024];
        let mut rbuf = tokio::io::ReadBuf::new(&mut buf);
        match Pin::new(&mut self.file).poll_read(cx, &mut rbuf) {
            Poll::Ready(Ok(())) => {
                let n = rbuf.filled().len();
                if n == 0 {
                    self.done = true;
                    return Poll::Ready(None);
                }
                self.sent += n as u64;
                let p = if self.total > 0 {
                    (self.base + (self.sent as f64 / self.total as f64) * self.span).min(100.0)
                } else {
                    self.base
                };
                emit_progress(
                    &self.app,
                    &self.task_id,
                    "upload",
                    p,
                    self.sent_before + self.sent,
                    self.total_bytes,
                );
                Poll::Ready(Some(Ok(http_body::Frame::data(bytes::Bytes::copy_from_slice(
                    rbuf.filled(),
                )))))
            }
            Poll::Ready(Err(e)) => Poll::Ready(Some(Err(e))),
            Poll::Pending => Poll::Pending,
        }
    }

    fn is_end_stream(&self) -> bool {
        self.done
    }

    fn size_hint(&self) -> http_body::SizeHint {
        let mut h = http_body::SizeHint::new();
        h.set_upper(self.total);
        h.set_lower(self.total);
        h
    }
}

async fn build_client(p: &Profile) -> Result<Client> {
    let creds = Credentials::new(&p.access_key, &p.secret_key, None, None, "s3viewer");
    let mut loader = aws_config::ConfigLoader::default()
        .region(aws_config::Region::new(p.region.clone()))
        .credentials_provider(creds);
    if let Some(ep) = &p.endpoint {
        let ep = ep.trim();
        if !ep.is_empty() {
            loader = loader.endpoint_url(ep);
        }
    }
    let cfg = loader.load().await;
    let mut builder = aws_sdk_s3::config::Builder::from(&cfg);
    builder = builder.force_path_style(p.path_style);
    builder =
        builder.request_checksum_calculation(RequestChecksumCalculation::WhenRequired);
    if p.tls_skip_verify || p.has_ca_cert() {
        builder = builder.http_client(build_tls_client(p)?);
    }
    Ok(Client::from_conf(builder.build()))
}

fn build_tls_client(p: &Profile) -> Result<SharedHttpClient> {
    use aws_smithy_http_client::hyper_014::HyperClientBuilder;

    if p.tls_skip_verify {
        let tls = rustls::ClientConfig::builder()
            .with_safe_defaults()
            .with_custom_certificate_verifier(Arc::new(NoVerifyVerifier))
            .with_no_client_auth();
        let https = hyper_rustls::HttpsConnectorBuilder::new()
            .with_tls_config(tls)
            .https_or_http()
            .enable_http1()
            .build();
        return Ok(HyperClientBuilder::new().build(https));
    }

    // CA certificate mode
    let mut roots = rustls::RootCertStore::empty();
    if let Some(pem) = p.ca_cert_pem.as_deref() {
        use rustls_pki_types::pem::PemObject;
        for cert in rustls_pki_types::CertificateDer::pem_slice_iter(pem.as_bytes()) {
            let cert = cert.map_err(|e| anyhow!("解析 CA 证书失败: {e}"))?;
            roots
                .add(&rustls::Certificate(cert.as_ref().to_vec()))
                .map_err(|e| anyhow!("添加 CA 证书失败: {e}"))?;
        }
    }
    let tls = rustls::ClientConfig::builder()
        .with_safe_defaults()
        .with_root_certificates(roots)
        .with_no_client_auth();
    let https = hyper_rustls::HttpsConnectorBuilder::new()
        .with_tls_config(tls)
        .https_or_http()
        .enable_http1()
        .build();
    Ok(HyperClientBuilder::new().build(https))
}

#[derive(Debug)]
struct NoVerifyVerifier;

impl rustls::client::ServerCertVerifier for NoVerifyVerifier {
    fn verify_server_cert(
        &self,
        _end_entity: &rustls::Certificate,
        _intermediates: &[rustls::Certificate],
        _server_name: &rustls::ServerName,
        _scts: &mut dyn Iterator<Item = &[u8]>,
        _ocsp_response: &[u8],
        _now: std::time::SystemTime,
    ) -> Result<rustls::client::ServerCertVerified, rustls::Error> {
        Ok(rustls::client::ServerCertVerified::assertion())
    }

    fn verify_tls12_signature(
        &self,
        _message: &[u8],
        _cert: &rustls::Certificate,
        _dss: &rustls::DigitallySignedStruct,
    ) -> Result<rustls::client::HandshakeSignatureValid, rustls::Error> {
        Ok(rustls::client::HandshakeSignatureValid::assertion())
    }

    fn verify_tls13_signature(
        &self,
        _message: &[u8],
        _cert: &rustls::Certificate,
        _dss: &rustls::DigitallySignedStruct,
    ) -> Result<rustls::client::HandshakeSignatureValid, rustls::Error> {
        Ok(rustls::client::HandshakeSignatureValid::assertion())
    }

    fn supported_verify_schemes(&self) -> Vec<rustls::SignatureScheme> {
        vec![
            rustls::SignatureScheme::RSA_PKCS1_SHA256,
            rustls::SignatureScheme::RSA_PKCS1_SHA384,
            rustls::SignatureScheme::RSA_PKCS1_SHA512,
            rustls::SignatureScheme::ECDSA_NISTP256_SHA256,
            rustls::SignatureScheme::ECDSA_NISTP384_SHA384,
            rustls::SignatureScheme::ECDSA_NISTP521_SHA512,
            rustls::SignatureScheme::RSA_PSS_SHA256,
            rustls::SignatureScheme::RSA_PSS_SHA384,
            rustls::SignatureScheme::RSA_PSS_SHA512,
            rustls::SignatureScheme::ED25519,
        ]
    }
}

#[derive(Debug, Serialize)]
pub struct BucketInfo {
    pub name: String,
    pub created: Option<String>,
}

#[derive(Debug, Serialize)]
pub struct ObjectEntry {
    pub key: String,
    pub size: Option<i64>,
    pub last_modified: Option<String>,
    pub is_dir: bool,
}

#[derive(Debug, Serialize)]
pub struct ObjectList {
    pub entries: Vec<ObjectEntry>,
    pub is_truncated: bool,
    pub next_token: Option<String>,
}

#[derive(Debug, Clone, Deserialize)]
pub struct DownloadItem {
    pub key: String,
    pub is_dir: bool,
}

/// Build a valid local filesystem path from an S3 key under `local_dir`.
/// Windows forbids several characters in file/directory names, and S3 keys
/// regularly contain them (`: * ? " < > |`); those are replaced so the
/// download does not die with ERROR_DIRECTORY / ERROR_INVALID_NAME.
fn safe_local_path(local_dir: &str, key: &str) -> PathBuf {
    let mut out = PathBuf::from(local_dir);
    for comp in key.split('/') {
        if comp.is_empty() || comp == "." {
            continue;
        }
        let safe = sanitize_component(comp);
        if safe.is_empty() {
            continue;
        }
        out.push(safe);
    }
    out
}

/// Replace characters that are not allowed in a single Windows path component.
fn sanitize_component(comp: &str) -> String {
    #[cfg(windows)]
    {
        let mut s: String = comp
            .chars()
            .map(|c| match c {
                '<' | '>' | ':' | '"' | '|' | '?' | '*' => '_',
                _ => c,
            })
            .collect();
        while s.ends_with('.') || s.ends_with(' ') {
            s.pop();
        }
        if s.is_empty() {
            s.push('_');
        }
        s
    }
    #[cfg(not(windows))]
    {
        comp.to_string()
    }
}

/// True when a key is a "folder marker" object (ends with `/`). Such objects
/// carry no content; their purpose is to materialise the directory itself.
fn is_dir_marker(key: &str) -> bool {
    key.ends_with('/')
}

/// Create `parent`, tolerating the case where a file/dir of the same name
/// already exists (S3 allows a key `a` and a nested `a/b` to coexist).
/// If a plain *file* occupies the path, remove it so the directory can be made.
fn ensure_dir(parent: &std::path::Path) -> Result<()> {
    if parent.is_dir() {
        return Ok(());
    }
    if parent.exists() {
        // A file occupies the path we need as a directory; drop it so nested
        // content can be written (avoids ERROR_PATH_NOT_FOUND further down).
        std::fs::remove_file(parent)?;
    }
    std::fs::create_dir_all(parent).map_err(|e| e.into())
}

/// Write `bytes` to `dest`, tolerating the case where `dest` already exists
/// as a directory (a folder-marker that must be kept as a dir).
fn write_file(dest: &std::path::Path, bytes: &[u8]) -> Result<()> {
    if dest.is_dir() {
        return Ok(());
    }
    if dest.exists() {
        std::fs::remove_file(dest)?;
    }
    std::fs::write(dest, bytes).map_err(|e| e.into())
}

/// Collect the object keys under `prefix` (paginated) that carry actual content.
async fn list_all_keys(
    client: &Client,
    bucket: &str,
    prefix: &str,
) -> Result<Vec<String>> {
    let mut keys = Vec::new();
    let mut token: Option<String> = None;
    loop {
        let mut req = client.list_objects_v2().bucket(bucket).prefix(prefix);
        if let Some(t) = &token {
            req = req.continuation_token(t);
        }
        let out = req.send().await.map_err(|e| anyhow!("列出对象失败: {}", sdk_err(e)))?;
        for obj in out.contents() {
            if let Some(k) = obj.key() {
                keys.push(k.to_string());
            }
        }
        if !out.is_truncated().unwrap_or(false) {
            break;
        }
        token = out.next_continuation_token().map(|s| s.to_string());
        if token.is_none() {
            break;
        }
    }
    Ok(keys)
}

async fn download_prefix_all(
    client: &Client,
    bucket: &str,
    prefix: &str,
    local_dir: &str,
) -> Result<u64> {
    let keys = list_all_keys(client, bucket, prefix).await?;
    // Download only the content under the selected prefix; strip the prefix so
    // the local tree starts at the selected folder instead of recreating the
    // full S3 key path.
    let local_for = |k: &str| safe_local_path(local_dir, k.strip_prefix(prefix).unwrap_or(k));
    // First pass: create every directory (parents + folder markers) so nested
    // files never hit a missing/invalid path, regardless of list ordering.
    let mut dirs: Vec<PathBuf> = Vec::new();
    for k in &keys {
        if is_dir_marker(k) {
            dirs.push(local_for(k).parent().unwrap_or(Path::new(local_dir)).to_path_buf());
        } else {
            let dest = local_for(k);
            if let Some(parent) = dest.parent() {
                dirs.push(parent.to_path_buf());
            }
        }
    }
    for d in dirs {
        ensure_dir(&d)?;
    }
    // Second pass: download file contents.
    let mut count = 0u64;
    for k in &keys {
        if is_dir_marker(k) {
            continue;
        }
        let dest = local_for(k);
        if dest.is_dir() {
            // Key collides with an already-created directory; skip it.
            continue;
        }
        let body = client
            .get_object()
            .bucket(bucket)
            .key(k)
            .send()
            .await
            .map_err(|e| anyhow!("下载 {k} 失败: {}", sdk_err(e)))?;
        let bytes = body.body.collect().await?.into_bytes();
        write_file(&dest, &bytes)?;
        count += 1;
    }
    Ok(count)
}

pub async fn download_selected(
    p: &Profile,
    bucket: &str,
    items: &[DownloadItem],
    local_dir: &str,
) -> Result<u64> {
    let client = build_client(p).await?;
    let mut count = 0u64;
    for item in items {
        if item.is_dir || is_dir_marker(&item.key) {
            // For a selected folder, put its contents directly under the chosen
            // local dir (folder name becomes the top-level directory) instead of
            // recreating the whole S3 key path.
            let name = item
                .key
                .trim_end_matches('/')
                .rsplit('/')
                .next()
                .filter(|s| !s.is_empty())
                .unwrap_or("folder");
            let local_target = Path::new(local_dir).join(name);
            if is_dir_marker(&item.key) {
                ensure_dir(&local_target)?;
            }
            count += download_prefix_all(&client, bucket, &item.key, &local_target.to_string_lossy()).await?;
        } else {
            let dest = safe_local_path(local_dir, &item.key);
            if let Some(parent) = dest.parent() {
                ensure_dir(parent)?;
            }
            let out = client
                .get_object()
                .bucket(bucket)
                .key(&item.key)
                .send()
                .await
                .map_err(|e| anyhow!("下载 {} 失败: {}", item.key, sdk_err(e)))?;
            let bytes = out.body.collect().await?.into_bytes();
            write_file(&dest, &bytes)?;
            count += 1;
        }
    }
    Ok(count)
}

pub async fn list_buckets(p: &Profile) -> Result<Vec<BucketInfo>> {
    let client = build_client(p).await?;
    let out = client
        .list_buckets()
        .send()
        .await
        .map_err(|e| anyhow!("列出 Bucket 失败: {}", sdk_err(e)))?;
    let mut buckets = Vec::new();
    for b in out.buckets() {
        buckets.push(BucketInfo {
            name: b.name().unwrap_or("").to_string(),
            created: b.creation_date().map(|d| {
                d.fmt(aws_smithy_types::date_time::Format::DateTime)
                    .ok()
                    .unwrap_or_default()
            }),
        });
    }
    Ok(buckets)
}

pub async fn list_objects(
    p: &Profile,
    bucket: &str,
    prefix: &str,
    continuation_token: Option<String>,
    max_keys: Option<i32>,
) -> Result<ObjectList> {    let client = build_client(p).await?;
    let mut req = client
        .list_objects_v2()
        .bucket(bucket)
        .prefix(prefix)
        .delimiter("/")
        .max_keys(max_keys.unwrap_or(1000));
    if let Some(t) = continuation_token {
        req = req.continuation_token(t);
    }
    let out = req
        .send()
        .await
        .map_err(|e| anyhow!("列出对象失败: {}", sdk_err(e)))?;

    let mut entries = Vec::new();
    for cp in out.common_prefixes() {
        if let Some(pfx) = cp.prefix() {
            if !pfx.is_empty() && pfx != prefix {
                entries.push(ObjectEntry {
                    key: pfx.to_string(),
                    size: None,
                    last_modified: None,
                    is_dir: true,
                });
            }
        }
    }
    for obj in out.contents() {
        if let Some(key) = obj.key() {
            if key == prefix {
                continue;
            }
            entries.push(ObjectEntry {
                key: key.to_string(),
                size: obj.size(),
                last_modified: obj.last_modified().map(|d| {
                    format!(
                        "{}",
                        d.fmt(aws_smithy_types::date_time::Format::DateTime)
                            .unwrap_or_default()
                    )
                }),
                is_dir: false,
            });
        }
    }

    Ok(ObjectList {
        entries,
        is_truncated: out.is_truncated().unwrap_or(false),
        next_token: out.next_continuation_token().map(|s| s.to_string()),
    })
}

pub async fn search_objects(
    p: &Profile,
    bucket: &str,
    prefix: &str,
    query: &str,
    deep: bool,
) -> Result<ObjectList> {
    use std::collections::HashSet;

    let client = build_client(p).await?;
    let q = query.to_lowercase();
    let limit = 500u32;

    if !deep {
        // shallow search: only the current folder level
        let mut entries: Vec<ObjectEntry> = Vec::new();
        let mut token: Option<String> = None;
        loop {
            let mut req = client
                .list_objects_v2()
                .bucket(bucket)
                .prefix(prefix)
                .delimiter("/");
            if let Some(t) = &token {
                req = req.continuation_token(t);
            }
            let out = req
                .send()
                .await
                .map_err(|e| anyhow!("搜索对象失败: {}", sdk_err(e)))?;

            for cp in out.common_prefixes() {
                if entries.len() as u32 >= limit {
                    break;
                }
                if let Some(pfx) = cp.prefix() {
                    if pfx.is_empty() || pfx == prefix {
                        continue;
                    }
                    let base = pfx
                        .trim_end_matches('/')
                        .split('/')
                        .filter(|s| !s.is_empty())
                        .last()
                        .unwrap_or(pfx);
                    if base.to_lowercase().contains(&q) {
                        entries.push(ObjectEntry {
                            key: pfx.to_string(),
                            size: None,
                            last_modified: None,
                            is_dir: true,
                        });
                    }
                }
            }
            for obj in out.contents() {
                if entries.len() as u32 >= limit {
                    break;
                }
                if let Some(key) = obj.key() {
                    if key == prefix {
                        continue;
                    }
                    let base = key
                        .split('/')
                        .filter(|s| !s.is_empty())
                        .last()
                        .unwrap_or(key);
                    if base.to_lowercase().contains(&q) {
                        entries.push(ObjectEntry {
                            key: key.to_string(),
                            size: obj.size(),
                            last_modified: obj.last_modified().map(|d| {
                                format!(
                                    "{}",
                                    d.fmt(aws_smithy_types::date_time::Format::DateTime)
                                        .unwrap_or_default()
                                )
                            }),
                            is_dir: false,
                        });
                    }
                }
            }
            if !out.is_truncated().unwrap_or(false) || entries.len() as u32 >= limit {
                break;
            }
            token = out.next_continuation_token().map(|s| s.to_string());
            if token.is_none() {
                break;
            }
        }
        entries.sort_by(|a, b| a.key.cmp(&b.key));
        return Ok(ObjectList {
            entries,
            is_truncated: false,
            next_token: None,
        });
    }

    // deep search: recursively into all subfolders
    let mut token: Option<String> = None;
    let mut entries: Vec<ObjectEntry> = Vec::new();
    let mut folders: HashSet<String> = HashSet::new();

    loop {
        let mut req = client.list_objects_v2().bucket(bucket).prefix(prefix);
        if let Some(t) = &token {
            req = req.continuation_token(t);
        }
        let out = req
            .send()
            .await
            .map_err(|e| anyhow!("搜索对象失败: {}", sdk_err(e)))?;

        for obj in out.contents() {
            if entries.len() as u32 >= limit {
                break;
            }
            if let Some(key) = obj.key() {
                let base = key
                    .split('/')
                    .filter(|s| !s.is_empty())
                    .last()
                    .unwrap_or(key);
                if base.to_lowercase().contains(&q) {
                    entries.push(ObjectEntry {
                        key: key.to_string(),
                        size: obj.size(),
                        last_modified: obj.last_modified().map(|d| {
                            format!(
                                "{}",
                                d.fmt(aws_smithy_types::date_time::Format::DateTime)
                                    .unwrap_or_default()
                            )
                        }),
                        is_dir: false,
                    });
                }
                let segs: Vec<&str> = key.split('/').filter(|s| !s.is_empty()).collect();
                for i in 0..segs.len().saturating_sub(1) {
                    if segs[i].to_lowercase().contains(&q) {
                        folders.insert(segs[..=i].join("/") + "/");
                    }
                }
            }
        }
        if !out.is_truncated().unwrap_or(false) || entries.len() as u32 >= limit {
            break;
        }
        token = out.next_continuation_token().map(|s| s.to_string());
        if token.is_none() {
            break;
        }
    }

    for k in folders {
        entries.push(ObjectEntry {
            key: k,
            size: None,
            last_modified: None,
            is_dir: true,
        });
    }
    entries.sort_by(|a, b| a.key.cmp(&b.key));
    Ok(ObjectList {
        entries,
        is_truncated: false,
        next_token: None,
    })
}

pub async fn get_object_preview(
    p: &Profile,
    bucket: &str,
    key: &str,
) -> Result<(Vec<u8>, Option<String>)> {
    let client = build_client(p).await?;
    let out = client
        .get_object()
        .bucket(bucket)
        .key(key)
        .send()
        .await
        .map_err(|e| anyhow!("读取对象失败: {}", sdk_err(e)))?;
    let ct = out.content_type().map(|s| s.to_string());
    let body = out.body.collect().await?;
    let bytes = body.into_bytes();
    Ok((bytes.to_vec(), ct))
}

pub async fn put_object(
    p: &Profile,
    bucket: &str,
    key: &str,
    bytes: Vec<u8>,
    content_type: Option<&str>,
) -> Result<()> {
    let client = build_client(p).await?;
    let mut req = client.put_object().bucket(bucket).key(key).body(bytes.into());
    if let Some(ct) = content_type {
        req = req.content_type(ct);
    }
    req.send()
        .await
        .map_err(|e| anyhow!("保存对象失败: {}", sdk_err(e)))?;
    Ok(())
}

pub async fn presign_url(
    p: &Profile,
    bucket: &str,
    key: &str,
    expires_secs: u64,
    method: &str,
) -> Result<String> {    let client = build_client(p).await?;
    let cfg = PresigningConfig::expires_in(Duration::from_secs(expires_secs))?;
    let uri = match method {
        "PUT" => {
            client
                .put_object()
                .bucket(bucket)
                .key(key)
                .presigned(cfg)
                .await?
        }
        _ => {
            client
                .get_object()
                .bucket(bucket)
                .key(key)
                .presigned(cfg)
                .await?
        }
    };
    Ok(uri.uri().to_string())
}

const MULTIPART_THRESHOLD: u64 = 5 * 1024 * 1024; // 5 MiB
// Large parts keep the part count low, which reduces how often flaky
// S3-compatible servers lose multipart upload state mid-transfer.
const MULTIPART_PART_SIZE: u64 = 64 * 1024 * 1024; // 64 MiB
/// Attempts per part before treating the upload as lost.
const PART_UPLOAD_RETRIES: u32 = 3;
/// Attempts for the final CompleteMultipartUpload call.
const COMPLETE_RETRIES: u32 = 3;
/// Times we restart the whole multipart upload with a fresh UploadId.
const MAX_UPLOAD_RESTARTS: u32 = 2;

fn file_fingerprint(local_path: &str) -> Result<(u64, u64)> {
    let meta = std::fs::metadata(local_path).map_err(|e| anyhow!("读取本地文件失败: {e}"))?;
    let mtime = meta
        .modified()
        .ok()
        .and_then(|m| m.duration_since(UNIX_EPOCH).ok())
        .map(|d| d.as_secs())
        .unwrap_or(0);
    Ok((meta.len(), mtime))
}

async fn abort_upload(client: &Client, bucket: &str, key: &str, upload_id: &str) {
    let _ = client
        .abort_multipart_upload()
        .bucket(bucket)
        .key(key)
        .upload_id(upload_id)
        .send()
        .await;
}

async fn list_completed_parts(
    client: &Client,
    bucket: &str,
    key: &str,
    upload_id: &str,
) -> BTreeMap<i32, String> {
    let mut parts = BTreeMap::new();
    let mut marker: Option<String> = None;
    loop {
        let mut req = client
            .list_parts()
            .bucket(bucket)
            .key(key)
            .upload_id(upload_id);
        if let Some(m) = &marker {
            req = req.part_number_marker(m);
        }
        let out = match req.send().await {
            Ok(o) => o,
            Err(_) => break,
        };
        for p in out.parts() {
            if let (Some(num), Some(etag)) = (p.part_number(), p.e_tag()) {
                parts.insert(num, etag.to_string());
            }
        }
        if !out.is_truncated().unwrap_or(false) {
            break;
        }
        marker = out.next_part_number_marker().map(|s| s.to_string());
        if marker.is_none() {
            break;
        }
    }
    parts
}

/// True when the error means the server no longer has this multipart upload
/// intact (it was aborted, expired, or lost/corrupted a part). Such errors are
/// only recoverable by starting a fresh multipart upload.
fn is_upload_lost(msg: &str) -> bool {
    msg.contains("NoSuchUpload")
        || msg.contains("NoSuchKey")
        || msg.contains("InvalidPart")
        || msg.contains("InvalidPartOrder")
}

/// True for auth/config errors that re-uploading everything would not fix.
fn is_auth_or_config_error(msg: &str) -> bool {
    let s = msg.to_lowercase();
    s.contains("accessdenied")
        || s.contains("access denied")
        || s.contains("signaturedoesnotmatch")
        || s.contains("invalidaccesskey")
        || s.contains("expiredtoken")
        || s.contains("invalidsecuritytoken")
        || s.contains("invalidbucketname")
}

async fn create_upload(
    app: &AppHandle,
    client: &Client,
    p: &Profile,
    bucket: &str,
    key: &str,
    local_path: &str,
    total: u64,
    mtime: u64,
) -> Result<String> {
    let create = client
        .create_multipart_upload()
        .bucket(bucket)
        .key(key)
        .send()
        .await
        .map_err(|e| anyhow!("创建分段上传失败: {}", sdk_err(e)))?;
    let uid = create
        .upload_id()
        .ok_or_else(|| anyhow!("服务端未返回 UploadId"))?
        .to_string();
    resume::set_upload(
        app,
        &resume::UploadResume {
            profile_id: p.id.clone(),
            bucket: bucket.to_string(),
            key: key.to_string(),
            local_path: local_path.to_string(),
            size: total,
            mtime,
            upload_id: uid.clone(),
            part_size: MULTIPART_PART_SIZE,
            completed_parts: Vec::new(),
        },
    );
    Ok(uid)
}

/// Check whether the server can actually assemble a multipart upload by doing
/// a tiny throwaway create/upload/complete cycle. Servers with broken
/// multipart assembly (e.g. some S3 gateways) fail here while still accepting
/// plain PUTs, so large uploads can skip multipart and use a single PUT
/// instead of wasting a full multipart pass.
async fn multipart_completion_works(client: &Client, bucket: &str) -> bool {
    let suffix = std::time::SystemTime::now()
        .duration_since(UNIX_EPOCH)
        .map(|d| d.subsec_nanos())
        .unwrap_or(0);
    let key = format!(".s3viewer-probe-{}-{suffix}", std::process::id());
    let res = async {
        let create = client
            .create_multipart_upload()
            .bucket(bucket)
            .key(&key)
            .send()
            .await
            .map_err(|e| sdk_err(e))?;
        let upload_id = create
            .upload_id()
            .ok_or_else(|| "服务端未返回 UploadId".to_string())?
            .to_string();
        let part = client
            .upload_part()
            .bucket(bucket)
            .key(&key)
            .upload_id(&upload_id)
            .part_number(1)
            .body(ByteStream::from(vec![0u8; 1024]))
            .send()
            .await
            .map_err(|e| sdk_err(e))?;
        let etag = part.e_tag().ok_or_else(|| "服务端未返回 ETag".to_string())?.to_string();
        let comp = CompletedMultipartUpload::builder()
            .set_parts(Some(vec![
                CompletedPart::builder().part_number(1).e_tag(&etag).build(),
            ]))
            .build();
        client
            .complete_multipart_upload()
            .bucket(bucket)
            .key(&key)
            .upload_id(&upload_id)
            .multipart_upload(comp)
            .send()
            .await
            .map_err(|e| sdk_err(e))?;
        Ok::<(), String>(())
    }
    .await;
    let _ = client.delete_object().bucket(bucket).key(&key).send().await;
    res.is_ok()
}

/// Upload a whole file with one plain PutObject request. Used as a fallback
/// when multipart completion consistently fails on a server whose multipart
/// assembly is broken: a single PUT bypasses multipart entirely.
async fn put_object_single(
    app: &AppHandle,
    client: &Client,
    bucket: &str,
    key: &str,
    local_path: &str,
    total: u64,
    task_id: &str,
) -> Result<()> {
    let file = tokio::fs::File::open(local_path)
        .await
        .map_err(|e| anyhow!("打开本地文件失败: {e}"))?;
    let body = ByteStream::new(SdkBody::from_body_1_x(ProgressUploadBody {
        file,
        total,
        sent: 0,
        done: false,
        app: app.clone(),
        task_id: task_id.to_string(),
        base: 0.0,
        span: 100.0,
        total_bytes: total,
        sent_before: 0,
    }));
    client
        .put_object()
        .bucket(bucket)
        .key(key)
        .body(body)
        .send()
        .await
        .map_err(|e| anyhow!("普通上传失败: {}", sdk_err(e)))?;
    Ok(())
}

async fn multipart_upload(
    app: &AppHandle,
    client: &Client,
    p: &Profile,
    bucket: &str,
    key: &str,
    local_path: &str,
    total: u64,
    mtime: u64,
    task_id: &str,
) -> Result<()> {
    // If the same target has a leftover upload but the file changed, abort it.
    if let Some(stale) = resume::find_upload_by_target(app, &p.id, bucket, key, local_path) {
        if stale.size != total || stale.mtime != mtime {
            abort_upload(client, bucket, key, &stale.upload_id).await;
            resume::clear_upload(app, &p.id, bucket, key, local_path);
        }
    }

    let mut upload_id = if let Some(r) =
        resume::find_upload(app, &p.id, bucket, key, local_path, total, mtime)
    {
        if r.part_size == MULTIPART_PART_SIZE {
            r.upload_id
        } else {
            // The recorded part layout no longer matches the current part size;
            // resuming it would overwrite parts with misaligned offsets, so abort
            // the stale upload and start over.
            abort_upload(client, bucket, key, &r.upload_id).await;
            resume::clear_upload(app, &p.id, bucket, key, local_path);
            create_upload(app, client, p, bucket, key, local_path, total, mtime).await?
        }
    } else {
        create_upload(app, client, p, bucket, key, local_path, total, mtime).await?
    };
    let mut completed = list_completed_parts(client, bucket, key, &upload_id).await;

    // Some S3-compatible servers drop the multipart upload state mid-transfer
    // (UploadPart then returns 404 NoSuchKey/NoSuchUpload). Retry each part a
    // few times; if the upload is really gone, transparently start a fresh one
    // instead of making the user click retry repeatedly.
    let mut fresh_starts: u32 = 0;
    'upload: loop {
        let num_parts = (total + MULTIPART_PART_SIZE - 1) / MULTIPART_PART_SIZE;

        // Bytes already uploaded so resumed progress starts from the right place.
        let mut sent_before: u64 = 0;
        for num in completed.keys() {
            let offset = (*num as u64 - 1) * MULTIPART_PART_SIZE;
            sent_before += MULTIPART_PART_SIZE.min(total.saturating_sub(offset));
        }
        emit_progress(
            app,
            task_id,
            "upload",
            (sent_before as f64 / total as f64 * 100.0).min(100.0),
            sent_before,
            total,
        );

        let mut part_number = 1i32;
        while part_number <= num_parts as i32 {
            let offset = (part_number as u64 - 1) * MULTIPART_PART_SIZE;
            let part_len = MULTIPART_PART_SIZE.min(total - offset);

            if completed.contains_key(&part_number) {
                part_number += 1;
                continue;
            }

            let mut etag: Option<String> = None;
            let mut last_msg = String::new();
            let mut upload_lost = false;
            for attempt in 0..PART_UPLOAD_RETRIES {
                let mut file = tokio::fs::File::open(local_path)
                    .await
                    .map_err(|e| anyhow!("打开本地文件失败: {e}"))?;
                use tokio::io::AsyncSeekExt;
                file.seek(std::io::SeekFrom::Start(offset))
                    .await
                    .map_err(|e| anyhow!("定位文件失败: {e}"))?;

                let base = (sent_before as f64 / total as f64) * 100.0;
                let span = (part_len as f64 / total as f64) * 100.0;
                let body = ByteStream::new(SdkBody::from_body_1_x(ProgressUploadBody {
                    file,
                    total: part_len,
                    sent: 0,
                    done: false,
                    app: app.clone(),
                    task_id: task_id.to_string(),
                    base,
                    span,
                    total_bytes: total,
                    sent_before,
                }));

                match client
                    .upload_part()
                    .bucket(bucket)
                    .key(key)
                    .upload_id(&upload_id)
                    .part_number(part_number)
                    .body(body)
                    .send()
                    .await
                {
                    Ok(resp) => {
                        etag = Some(resp.e_tag().unwrap_or_default().to_string());
                        break;
                    }
                    Err(e) => {
                        last_msg = sdk_err(e);
                        upload_lost = upload_lost || is_upload_lost(&last_msg);
                        tokio::time::sleep(Duration::from_millis(300 * (attempt as u64 + 1)))
                            .await;
                    }
                }
            }

            let Some(etag) = etag else {
                // The server keeps losing the multipart upload; restart from
                // scratch a few times before falling back to a plain PUT.
                if upload_lost && fresh_starts < MAX_UPLOAD_RESTARTS {
                    fresh_starts += 1;
                    abort_upload(client, bucket, key, &upload_id).await;
                    upload_id =
                        create_upload(app, client, p, bucket, key, local_path, total, mtime)
                            .await?;
                    completed = BTreeMap::new();
                    continue 'upload;
                }
                if upload_lost && !is_auth_or_config_error(&last_msg) {
                    abort_upload(client, bucket, key, &upload_id).await;
                    resume::clear_upload(app, &p.id, bucket, key, local_path);
                    emit_progress(app, task_id, "upload", 0.0, 0, total);
                    if let Ok(()) =
                        put_object_single(app, client, bucket, key, local_path, total, task_id)
                            .await
                    {
                        return Ok(());
                    }
                }
                return Err(anyhow!("上传分片 {part_number} 失败: {last_msg}"));
            };

            completed.insert(part_number, etag);
            sent_before += part_len;

            // Persist so an interrupted transfer skips already-uploaded parts.
            let done: Vec<i32> = completed.keys().copied().collect();
            resume::set_upload(
                app,
                &resume::UploadResume {
                    profile_id: p.id.clone(),
                    bucket: bucket.to_string(),
                    key: key.to_string(),
                    local_path: local_path.to_string(),
                    size: total,
                    mtime,
                    upload_id: upload_id.clone(),
                    part_size: MULTIPART_PART_SIZE,
                    completed_parts: done,
                },
            );

            part_number += 1;
        }

        // All parts are uploaded; assemble them into the final object.
        let mut parts = Vec::with_capacity(completed.len());
        for (num, etag) in &completed {
            parts.push(
                CompletedPart::builder()
                    .part_number(*num)
                    .e_tag(etag)
                    .build(),
            );
        }
        let comp = CompletedMultipartUpload::builder()
            .set_parts(Some(parts))
            .build();
        // Clear the resume entry before completing; if the response to a previous
        // complete was lost the server reports NoSuchUpload, which we treat as done.
        resume::clear_upload(app, &p.id, bucket, key, local_path);

        let mut complete_msg = String::new();
        let mut complete_ok = false;
        for attempt in 0..COMPLETE_RETRIES {
            let res = client
                .complete_multipart_upload()
                .bucket(bucket)
                .key(key)
                .upload_id(&upload_id)
                .multipart_upload(comp.clone())
                .send()
                .await;
            match res {
                Ok(_) => {
                    complete_ok = true;
                    break;
                }
                Err(e) => {
                    let msg = format!("{}", sdk_err(e));
                    if msg.contains("NoSuchUpload") {
                        complete_ok = true;
                        break;
                    }
                    complete_msg = msg;
                    if is_upload_lost(&complete_msg) {
                        break; // upload state is gone/corrupted; retrying won't help
                    }
                    tokio::time::sleep(Duration::from_millis(300 * (attempt as u64 + 1))).await;
                }
            }
        }

        if complete_ok {
            return Ok(());
        }

        // Some servers assemble the object but still return an error (or the
        // success response is lost). If the object now exists with the expected
        // size, the upload actually succeeded.
        let head_ok = client
            .head_object()
            .bucket(bucket)
            .key(key)
            .send()
            .await
            .map(|h| h.content_length().unwrap_or(-1) as u64 == total)
            .unwrap_or(false);
        if head_ok {
            return Ok(());
        }

        // Completion failed and the object is not there. Retrying the whole
        // multipart upload would just fail at the same assembly step, so fall
        // back to a plain single-object PUT which bypasses multipart entirely.
        if !is_auth_or_config_error(&complete_msg) {
            abort_upload(client, bucket, key, &upload_id).await;
            emit_progress(app, task_id, "upload", 0.0, 0, total);
            return match put_object_single(
                app, client, bucket, key, local_path, total, task_id,
            )
            .await
            {
                Ok(()) => Ok(()),
                Err(e) => Err(anyhow!("完成上传失败: {complete_msg}；改用普通上传也失败: {e}")),
            };
        }
        return Err(anyhow!("完成上传失败: {complete_msg}"));
    }
}

pub async fn upload_file(
    app: &AppHandle,
    p: &Profile,
    bucket: &str,
    key: &str,
    local_path: &str,
    task_id: &str,
) -> Result<()> {
    let client = build_client(p).await?;
    let (total, mtime) = file_fingerprint(local_path)?;
    if total >= MULTIPART_THRESHOLD {
        if multipart_completion_works(&client, bucket).await {
            return multipart_upload(
                app,
                &client,
                p,
                bucket,
                key,
                local_path,
                total,
                mtime,
                task_id,
            )
            .await;
        }
        // This server can't assemble multipart uploads (completion fails even
        // for a tiny probe), so skip straight to a single-object PUT and avoid
        // wasting a full multipart pass.
        if let Some(stale) = resume::find_upload_by_target(app, &p.id, bucket, key, local_path) {
            abort_upload(&client, bucket, key, &stale.upload_id).await;
            resume::clear_upload(app, &p.id, bucket, key, local_path);
        }
        emit_progress(app, task_id, "upload", 0.0, 0, total);
        return put_object_single(app, &client, bucket, key, local_path, total, task_id).await;
    }
    let file = tokio::fs::File::open(local_path)
        .await
        .map_err(|e| anyhow!("打开本地文件失败: {e}"))?;
    let body = ByteStream::new(SdkBody::from_body_1_x(ProgressUploadBody {
        file,
        total,
        sent: 0,
        done: false,
        app: app.clone(),
        task_id: task_id.to_string(),
        base: 0.0,
        span: 100.0,
        total_bytes: total,
        sent_before: 0,
    }));
    client
        .put_object()
        .bucket(bucket)
        .key(key)
        .body(body)
        .send()
        .await
        .map_err(|e| anyhow!("上传失败: {}", sdk_err(e)))?;
    Ok(())
}

fn collect_files(dir: &Path, out: &mut Vec<PathBuf>) -> Result<()> {
    for entry in std::fs::read_dir(dir)? {
        let entry = entry?;
        let path = entry.path();
        if path.is_dir() {
            collect_files(&path, out)?;
        } else if path.is_file() {
            out.push(path);
        }
    }
    Ok(())
}

pub async fn upload_folder(
    app: &AppHandle,
    p: &Profile,
    bucket: &str,
    prefix: &str,
    local_dir: &str,
    task_id: &str,
) -> Result<u64> {
    let client = build_client(p).await?;
    let root = Path::new(local_dir);
    let mut files: Vec<PathBuf> = Vec::new();
    collect_files(root, &mut files)?;
    if files.is_empty() {
        return Ok(0);
    }
    let total_bytes: u64 = files
        .iter()
        .map(|f| std::fs::metadata(f).map(|m| m.len()).unwrap_or(0))
        .sum();
    let mut sent_before: u64 = 0;
    let mut count = 0u64;
    for path in &files {
        let meta = std::fs::metadata(path).map_err(|e| anyhow!("读取本地文件失败: {e}"))?;
        let total = meta.len();
        let rel = path
            .strip_prefix(root)
            .map_err(|_| anyhow!("计算相对路径失败"))?;
        let rel_str = rel.to_string_lossy().replace('\\', "/");
        let key = format!("{prefix}{rel_str}");
        let file = tokio::fs::File::open(path)
            .await
            .map_err(|e| anyhow!("打开本地文件失败: {e}"))?;
        let base = if total_bytes > 0 {
            (sent_before as f64 / total_bytes as f64) * 100.0
        } else {
            0.0
        };
        let span = if total_bytes > 0 {
            (total as f64 / total_bytes as f64) * 100.0
        } else {
            100.0
        };
        let body = ByteStream::new(SdkBody::from_body_1_x(ProgressUploadBody {
            file,
            total,
            sent: 0,
            done: false,
            app: app.clone(),
            task_id: task_id.to_string(),
            base,
            span,
            total_bytes,
            sent_before,
        }));
        client
            .put_object()
            .bucket(bucket)
            .key(&key)
            .body(body)
            .send()
            .await
            .map_err(|e| anyhow!("上传失败: {}", sdk_err(e)))?;
        sent_before += total;
        count += 1;
    }
    Ok(count)
}

pub fn path_kind(path: &str) -> String {
    let p = Path::new(path);
    if p.is_dir() {
        "dir".to_string()
    } else if p.is_file() {
        "file".to_string()
    } else {
        "missing".to_string()
    }
}

pub async fn download_object(
    app: &AppHandle,
    p: &Profile,
    bucket: &str,
    key: &str,
    local_path: &str,
    task_id: &str,
) -> Result<()> {
    use tokio::io::AsyncWriteExt;
    let client = build_client(p).await?;
    let head = client
        .head_object()
        .bucket(bucket)
        .key(key)
        .send()
        .await
        .map_err(|e| anyhow!("获取对象信息失败: {}", sdk_err(e)))?;
    let total = head.content_length().unwrap_or(0) as u64;
    if let Some(parent) = std::path::Path::new(local_path).parent() {
        std::fs::create_dir_all(parent)?;
    }

    let part_path = format!("{local_path}.part");
    let mut start: u64 = std::fs::metadata(&part_path)
        .map(|m| m.len())
        .unwrap_or(0);
    if start > 0 {
        if start > total {
            // The remote object changed (became smaller); restart from scratch.
            let _ = std::fs::remove_file(&part_path);
            start = 0;
        } else if start == total {
            std::fs::rename(&part_path, local_path)
                .map_err(|e| anyhow!("完成下载文件失败: {e}"))?;
            emit_progress(app, task_id, "download", 100.0, total, total);
            return Ok(());
        }
    }

    let mut req = client.get_object().bucket(bucket).key(key);
    if start > 0 {
        req = req.range(format!("bytes={start}-"));
    }
    let out = req
        .send()
        .await
        .map_err(|e| anyhow!("下载失败: {}", sdk_err(e)))?;

    let mut file = if start > 0 {
        tokio::fs::OpenOptions::new()
            .append(true)
            .open(&part_path)
            .await
            .map_err(|e| anyhow!("打开续传文件失败: {e}"))?
    } else {
        tokio::fs::File::create(&part_path)
            .await
            .map_err(|e| anyhow!("创建下载文件失败: {e}"))?
    };
    let mut stream = out.body;
    let mut received: u64 = start;
    emit_progress(
        app,
        task_id,
        "download",
        (received as f64 / total as f64 * 100.0).min(100.0),
        received,
        total,
    );
    while let Some(chunk) = stream.next().await {
        let chunk = chunk.map_err(|e| anyhow!("读取下载流失败: {e}"))?;
        file.write_all(&chunk).await.map_err(|e| anyhow!("写入文件失败: {e}"))?;
        received += chunk.len() as u64;
        let p = if total > 0 {
            (received as f64 / total as f64 * 100.0).min(100.0)
        } else {
            0.0
        };
        emit_progress(app, task_id, "download", p, received, total);
    }
    file.flush().await?;
    std::fs::rename(&part_path, local_path).map_err(|e| anyhow!("完成下载文件失败: {e}"))?;
    Ok(())
}

pub async fn delete_object(p: &Profile, bucket: &str, key: &str) -> Result<()> {
    let client = build_client(p).await?;
    client
        .delete_object()
        .bucket(bucket)
        .key(key)
        .send()
        .await
        .map_err(|e| anyhow!("删除失败: {}", sdk_err(e)))?;
    Ok(())
}

async fn delete_prefix_with_client(client: &Client, bucket: &str, prefix: &str) -> Result<u64> {
    let mut deleted = 0u64;
    let mut token: Option<String> = None;
    loop {
        let mut req = client.list_objects_v2().bucket(bucket).prefix(prefix);
        if let Some(t) = &token {
            req = req.continuation_token(t);
        }
        let out = req.send().await?;
        let mut keys: Vec<ObjectIdentifier> = Vec::new();
        for o in out.contents() {
            if let Some(k) = o.key() {
                keys.push(
                    ObjectIdentifier::builder()
                        .key(k)
                        .build()
                        .map_err(|e| anyhow!("build identifier: {e}"))?,
                );
            }
        }
        if !keys.is_empty() {
            let del = Delete::builder()
                .set_objects(Some(keys))
                .build()
                .map_err(|e| anyhow!("build delete: {e}"))?;
            let res = client
                .delete_objects()
                .bucket(bucket)
                .delete(del)
                .send()
                .await?;
            deleted += res.deleted().len() as u64;
        }
        if !out.is_truncated().unwrap_or(false) {
            break;
        }
        token = out.next_continuation_token().map(|s| s.to_string());
        if token.is_none() {
            break;
        }
    }
    Ok(deleted)
}

pub async fn delete_prefix(p: &Profile, bucket: &str, prefix: &str) -> Result<u64> {
    let client = build_client(p).await?;
    delete_prefix_with_client(&client, bucket, prefix).await
}

pub async fn delete_selected(p: &Profile, bucket: &str, items: &[DownloadItem]) -> Result<u64> {
    let client = build_client(p).await?;
    let mut deleted = 0u64;
    for item in items {
        if item.is_dir {
            deleted += delete_prefix_with_client(&client, bucket, &item.key).await?;
        } else {
            client
                .delete_object()
                .bucket(bucket)
                .key(&item.key)
                .send()
                .await
                .map_err(|e| anyhow!("删除失败: {}", sdk_err(e)))?;
            deleted += 1;
        }
    }
    Ok(deleted)
}

pub async fn rename_object(p: &Profile, bucket: &str, old_key: &str, new_key: &str) -> Result<()> {
    let client = build_client(p).await?;
    client
        .copy_object()
        .bucket(bucket)
        .copy_source(format!("{bucket}/{old_key}"))
        .key(new_key)
        .send()
        .await
        .map_err(|e| anyhow!("复制失败: {}", sdk_err(e)))?;
    client
        .delete_object()
        .bucket(bucket)
        .key(old_key)
        .send()
        .await?;
    Ok(())
}

pub async fn create_folder(p: &Profile, bucket: &str, prefix: &str) -> Result<()> {
    let client = build_client(p).await?;
    let mut key = prefix.to_string();
    if !key.ends_with('/') {
        key.push('/');
    }
    client
        .put_object()
        .bucket(bucket)
        .key(&key)
        .body(ByteStream::from(Vec::new()))
        .send()
        .await
        .map_err(|e| anyhow!("创建文件夹失败: {}", sdk_err(e)))?;
    Ok(())
}

pub async fn create_bucket(p: &Profile, name: &str, region: &str) -> Result<()> {
    let client = build_client(p).await?;
    let region_name = if region.trim().is_empty() {
        p.region.clone()
    } else {
        region.to_string()
    };
    let _ = client
        .create_bucket()
        .bucket(name)
        .create_bucket_configuration(
            aws_sdk_s3::types::CreateBucketConfiguration::builder()
                .location_constraint(aws_sdk_s3::types::BucketLocationConstraint::from(
                    region_name.as_str(),
                ))
                .build(),
        )
        .send()
        .await;
    Ok(())
}

pub async fn delete_bucket(p: &Profile, name: &str) -> Result<()> {
    let client = build_client(p).await?;
    client
        .delete_bucket()
        .bucket(name)
        .send()
        .await
        .map_err(|e| anyhow!("删除 Bucket 失败: {}", sdk_err(e)))?;
    Ok(())
}
