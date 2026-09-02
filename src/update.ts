import { reactive } from "vue";
import { getVersion } from "@tauri-apps/api/app";
import { invoke } from "@tauri-apps/api/core";

const REPO = "trytobe-top/s3viewer";
const API = `https://api.github.com/repos/${REPO}/releases/latest`;
const RELEASES_PAGE = `https://github.com/${REPO}/releases`;

export const updateState = reactive<{
  checking: boolean;
  checked: boolean;
  error: string;
  current: string;
  latest: string;
  hasUpdate: boolean;
  downloadUrl: string;
  releaseUrl: string;
}>({
  checking: false,
  checked: false,
  error: "",
  current: "",
  latest: "",
  hasUpdate: false,
  downloadUrl: "",
  releaseUrl: "",
});

export function compareVersions(a: string, b: string): number {
  const pa = a
    .replace(/^v/i, "")
    .split(/[.\-]/)
    .map((s) => parseInt(s, 10) || 0);
  const pb = b
    .replace(/^v/i, "")
    .split(/[.\-]/)
    .map((s) => parseInt(s, 10) || 0);
  for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
    const x = pa[i] ?? 0;
    const y = pb[i] ?? 0;
    if (x !== y) return x < y ? -1 : 1;
  }
  return 0;
}

interface Asset {
  name: string;
  browser_download_url: string;
}

function detectPlatform(): {
  platform: "windows" | "macos" | "linux";
  arch: "arm64" | "x64";
} {
  const ua = navigator.userAgent;
  let platform: "windows" | "macos" | "linux" = "linux";
  if (/Windows/i.test(ua)) {
    platform = "windows";
  } else if (/Macintosh|Mac OS X|iPhone|iPad/i.test(ua)) {
    platform = "macos";
  }
  return { platform, arch: /arm|aarch64/i.test(ua) ? "arm64" : "x64" };
}

function pickAsset(assets: Asset[], platform: string, arch: string): string {
  const arm = arch === "arm64";
  if (platform === "windows") {
    return (
      assets.find((a) => /setup\.exe$/i.test(a.name))?.browser_download_url ||
      assets.find((a) => /\.msi$/i.test(a.name))?.browser_download_url ||
      assets.find((a) => /\.exe$/i.test(a.name))?.browser_download_url ||
      ""
    );
  }
  if (platform === "macos") {
    return (
      assets.find(
        (a) =>
          /\.dmg$/i.test(a.name) &&
          (arm
            ? /aarch64|arm64/i.test(a.name)
            : /x64|x86_64|amd64/i.test(a.name))
      )?.browser_download_url ||
      assets.find((a) => /\.dmg$/i.test(a.name))?.browser_download_url ||
      ""
    );
  }
  return (
    assets.find((a) => /\.appimage$/i.test(a.name))?.browser_download_url ||
    assets.find((a) => /\.deb$/i.test(a.name))?.browser_download_url ||
    assets.find((a) => /\.rpm$/i.test(a.name))?.browser_download_url ||
    ""
  );
}

export async function checkForUpdates() {
  updateState.checking = true;
  updateState.error = "";
  try {
    if (!updateState.current) {
      updateState.current = await getVersion();
    }
    const res = await fetch(API, {
      headers: { Accept: "application/vnd.github+json" },
      signal: AbortSignal.timeout(10000),
    });
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }
    const data = await res.json();
    const tag = String(data.tag_name || "").replace(/^v/i, "");
    const assets: Asset[] = Array.isArray(data.assets) ? data.assets : [];
    const { platform, arch } = detectPlatform();
    updateState.latest = tag;
    updateState.releaseUrl =
      data.html_url || `${RELEASES_PAGE}/tag/${data.tag_name}`;
    updateState.downloadUrl =
      pickAsset(assets, platform, arch) || updateState.releaseUrl;
    updateState.hasUpdate = compareVersions(tag, updateState.current) > 0;
    updateState.checked = true;
  } catch (e) {
    updateState.error = e instanceof Error ? e.message : String(e);
  } finally {
    updateState.checking = false;
  }
}

export async function downloadUpdate() {
  const url = updateState.downloadUrl || updateState.releaseUrl;
  if (!url) return;
  try {
    await invoke("open_url", { url });
  } catch (e) {
    window.open(url, "_blank");
  }
}
