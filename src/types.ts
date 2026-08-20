export interface Profile {
  id: string;
  name: string;
  endpoint: string | null;
  region: string;
  access_key: string;
  secret_key: string;
  path_style: boolean;
  tls_skip_verify: boolean;
  ca_cert_pem: string | null;
}

export interface BucketInfo {
  name: string;
  created: string | null;
}

export interface ObjectEntry {
  key: string;
  size: number | null;
  last_modified: string | null;
  is_dir: boolean;
}

export interface ObjectList {
  entries: ObjectEntry[];
  is_truncated: boolean;
  next_token: string | null;
}

export interface Preview {
  content_base64: string;
  content_type: string | null;
  size: number;
  name: string;
}

export interface PresignResult {
  url: string;
  expires_at: number;
}

export interface DownloadItem {
  key: string;
  is_dir: boolean;
}
