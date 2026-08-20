import { invoke } from "@tauri-apps/api/core";
import type {
  Profile,
  BucketInfo,
  ObjectList,
  Preview,
  PresignResult,
  DownloadItem,
} from "./types";

export const api = {
  listProfiles: () => invoke<Profile[]>("list_profiles"),
  saveProfile: (profile: Profile) =>
    invoke<Profile[]>("save_profile", { profile }),
  deleteProfile: (id: string) =>
    invoke<Profile[]>("delete_profile", { id }),

  listBuckets: (profileId: string) =>
    invoke<BucketInfo[]>("list_buckets", { profileId }),

  listObjects: (
    profileId: string,
    bucket: string,
    prefix: string,
    continuationToken: string | null
  ) =>
    invoke<ObjectList>("list_objects", {
      profileId,
      bucket,
      prefix,
      continuationToken,
    }),

  searchObjects: (
    profileId: string,
    bucket: string,
    prefix: string,
    query: string
  ) =>
    invoke<ObjectList>("search_objects", {
      profileId,
      bucket,
      prefix,
      query,
    }),

  getPreview: (profileId: string, bucket: string, key: string) =>
    invoke<Preview>("get_preview", { profileId, bucket, key }),

  presign: (
    profileId: string,
    bucket: string,
    key: string,
    expiresSecs: number,
    method?: string
  ) =>
    invoke<PresignResult>("presign", {
      profileId,
      bucket,
      key,
      expiresSecs,
      method,
    }),

  uploadFile: (
    profileId: string,
    bucket: string,
    key: string,
    localPath: string,
    taskId: string
  ) => invoke<void>("upload_file", { profileId, bucket, key, localPath, taskId }),

  downloadObject: (
    profileId: string,
    bucket: string,
    key: string,
    localPath: string,
    taskId: string
  ) => invoke<void>("download_object", { profileId, bucket, key, localPath, taskId }),

  downloadSelected: (
    profileId: string,
    bucket: string,
    items: DownloadItem[],
    localDir: string
  ) => invoke<number>("download_selected", { profileId, bucket, items, localDir }),

  deleteObject: (profileId: string, bucket: string, key: string) =>
    invoke<void>("delete_object", { profileId, bucket, key }),

  deletePrefix: (profileId: string, bucket: string, prefix: string) =>
    invoke<number>("delete_prefix", { profileId, bucket, prefix }),

  renameObject: (
    profileId: string,
    bucket: string,
    oldKey: string,
    newKey: string
  ) => invoke<void>("rename_object", { profileId, bucket, oldKey, newKey }),

  createFolder: (profileId: string, bucket: string, prefix: string) =>
    invoke<void>("create_folder", { profileId, bucket, prefix }),

  createBucket: (profileId: string, name: string, region: string) =>
    invoke<void>("create_bucket", { profileId, name, region }),

  deleteBucket: (profileId: string, name: string) =>
    invoke<void>("delete_bucket", { profileId, name }),

  writeExportFile: (path: string, content: string) =>
    invoke<void>("write_export_file", { path, content }),

  readTextFile: (path: string) => invoke<string>("read_text_file", { path }),

  importProfiles: (profiles: Profile[]) =>
    invoke<Profile[]>("import_profiles", { profiles }),

  openPath: (path: string) => invoke<void>("open_path", { path }),
};
