use crate::config::Profile;
use anyhow::{anyhow, Result};
use aws_credential_types::Credentials;
use aws_sdk_s3::presigning::PresigningConfig;
use aws_sdk_s3::types::{Delete, ObjectIdentifier};
use aws_sdk_s3::Client;
use aws_smithy_runtime_api::client::http::SharedHttpClient;
use aws_smithy_types::body::SdkBody;
use aws_smithy_types::byte_stream::ByteStream;
use serde::{Deserialize, Serialize};
use std::path::{Path, PathBuf};
use std::pin::Pin;
use std::sync::Arc;
use std::task::{Context, Poll};
use std::time::Duration;
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

async fn download_prefix_all(
    client: &Client,
    bucket: &str,
    prefix: &str,
    local_dir: &str,
) -> Result<u64> {
    let mut count = 0u64;
    let mut token: Option<String> = None;
    loop {
        let mut req = client.list_objects_v2().bucket(bucket).prefix(prefix);
        if let Some(t) = &token {
            req = req.continuation_token(t);
        }
        let out = req.send().await.map_err(|e| anyhow!("列出对象失败: {e}"))?;
        for obj in out.contents() {
            if let Some(k) = obj.key() {
                let dest = Path::new(local_dir).join(k);
                if let Some(parent) = dest.parent() {
                    std::fs::create_dir_all(parent)?;
                }
                let body = client
                    .get_object()
                    .bucket(bucket)
                    .key(k)
                    .send()
                    .await
                    .map_err(|e| anyhow!("下载 {k} 失败: {e}"))?;
                let bytes = body.body.collect().await?.into_bytes();
                std::fs::write(&dest, bytes)?;
                count += 1;
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
        if item.is_dir {
            count += download_prefix_all(&client, bucket, &item.key, local_dir).await?;
        } else {
            let dest = Path::new(local_dir).join(&item.key);
            if let Some(parent) = dest.parent() {
                std::fs::create_dir_all(parent)?;
            }
            let out = client
                .get_object()
                .bucket(bucket)
                .key(&item.key)
                .send()
                .await
                .map_err(|e| anyhow!("下载 {} 失败: {e}", item.key))?;
            let bytes = out.body.collect().await?.into_bytes();
            std::fs::write(&dest, bytes)?;
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
        .map_err(|e| anyhow!("列出 Bucket 失败: {e}"))?;
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
) -> Result<ObjectList> {    let client = build_client(p).await?;
    let mut req = client
        .list_objects_v2()
        .bucket(bucket)
        .prefix(prefix)
        .delimiter("/");
    if let Some(t) = continuation_token {
        req = req.continuation_token(t);
    }
    let out = req
        .send()
        .await
        .map_err(|e| anyhow!("列出对象失败: {e}"))?;

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
                .map_err(|e| anyhow!("搜索对象失败: {e}"))?;

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
            .map_err(|e| anyhow!("搜索对象失败: {e}"))?;

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
        .map_err(|e| anyhow!("读取对象失败: {e}"))?;
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
        .map_err(|e| anyhow!("保存对象失败: {e}"))?;
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

pub async fn upload_file(
    app: &AppHandle,
    p: &Profile,
    bucket: &str,
    key: &str,
    local_path: &str,
    task_id: &str,
) -> Result<()> {
    let client = build_client(p).await?;
    let meta = std::fs::metadata(local_path).map_err(|e| anyhow!("读取本地文件失败: {e}"))?;
    let total = meta.len();
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
        .map_err(|e| anyhow!("上传失败: {e}"))?;
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
            .map_err(|e| anyhow!("上传失败: {e}"))?;
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
    let client = build_client(p).await?;
    let head = client
        .head_object()
        .bucket(bucket)
        .key(key)
        .send()
        .await
        .map_err(|e| anyhow!("获取对象信息失败: {e}"))?;
    let total = head.content_length().unwrap_or(0) as u64;
    let out = client
        .get_object()
        .bucket(bucket)
        .key(key)
        .send()
        .await
        .map_err(|e| anyhow!("下载失败: {e}"))?;
    if let Some(parent) = std::path::Path::new(local_path).parent() {
        std::fs::create_dir_all(parent)?;
    }
    let mut file = tokio::fs::File::create(local_path)
        .await
        .map_err(|e| anyhow!("创建本地文件失败: {e}"))?;
    let mut stream = out.body;
    let mut received: u64 = 0;
    while let Some(chunk) = stream.next().await {
        let chunk = chunk.map_err(|e| anyhow!("读取下载流失败: {e}"))?;
        use tokio::io::AsyncWriteExt;
        file.write_all(&chunk).await.map_err(|e| anyhow!("写入文件失败: {e}"))?;
        received += chunk.len() as u64;
        let p = if total > 0 {
            (received as f64 / total as f64 * 100.0).min(100.0)
        } else {
            0.0
        };
        emit_progress(app, task_id, "download", p, received, total);
    }
    use tokio::io::AsyncWriteExt;
    file.flush().await?;
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
        .map_err(|e| anyhow!("删除失败: {e}"))?;
    Ok(())
}

pub async fn delete_prefix(p: &Profile, bucket: &str, prefix: &str) -> Result<u64> {
    let client = build_client(p).await?;
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

pub async fn rename_object(p: &Profile, bucket: &str, old_key: &str, new_key: &str) -> Result<()> {
    let client = build_client(p).await?;
    client
        .copy_object()
        .bucket(bucket)
        .copy_source(format!("{bucket}/{old_key}"))
        .key(new_key)
        .send()
        .await
        .map_err(|e| anyhow!("复制失败: {e}"))?;
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
        .map_err(|e| anyhow!("创建文件夹失败: {e}"))?;
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
        .map_err(|e| anyhow!("删除 Bucket 失败: {e}"))?;
    Ok(())
}
