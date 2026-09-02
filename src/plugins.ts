import { reactive } from "vue";
import { api } from "./api";
import { settings, saveSettings } from "./settings";
import { logError } from "./logs";
import type { PluginInfo } from "./types";

export interface PluginPreviewInfo {
  ext: string;
  name: string;
  contentType: string | null;
  size: number | null;
}

export interface PluginRenderCtx {
  baseUrl: string;
  ext: string;
  name: string;
  contentType: string | null;
  size: number | null;
  dark: boolean;
  editable: boolean;
  fetchObject: () => Promise<ArrayBuffer>;
  fetchText: () => Promise<string>;
}

export interface PluginHandle {
  dispose: () => void;
  setEditable?: (on: boolean) => void;
  getContent?: () => Promise<Uint8Array | ArrayBuffer>;
}

export interface PluginRenderer {
  id: string;
  name: string;
  version: string;
  canPreview: (info: PluginPreviewInfo) => boolean;
  render: (container: HTMLElement, ctx: PluginRenderCtx) => PluginHandle | null;
}

interface HostGlobal {
  register: (p: unknown) => void;
}

declare global {
  interface Window {
    __s3viewer?: HostGlobal;
  }
}

export const plugins = reactive<{
  installed: PluginInfo[];
  loaded: Record<string, PluginRenderer>;
}>({
  installed: [],
  loaded: {},
});

export const pluginBaseUrls: Record<string, string> = {};

const scriptTags: Record<string, HTMLScriptElement> = {};
const loadingTasks: Record<string, Promise<PluginRenderer | null>> = {};
const loadingIds = new Set<string>();

const host: HostGlobal = {
  register(p) {
    const r = p as PluginRenderer;
    if (
      r &&
      typeof r.id === "string" &&
      typeof r.canPreview === "function" &&
      typeof r.render === "function"
    ) {
      plugins.loaded[r.id] = r;
    } else {
      logError("plugin", "invalid plugin registration: " + String((r as any)?.id));
    }
  },
};
window.__s3viewer = host;

export function isPluginEnabled(id: string): boolean {
  return settings.enabledPlugins.includes(id);
}

export function setPluginEnabled(id: string, on: boolean) {
  const cur = new Set(settings.enabledPlugins);
  if (on) {
    cur.add(id);
  } else {
    cur.delete(id);
  }
  settings.enabledPlugins = [...cur];
  saveSettings();
}

export function getPluginBaseUrl(id: string): string {
  return pluginBaseUrls[id] ?? "";
}

export async function refreshPlugins() {
  try {
    plugins.installed = await api.listPlugins();
    for (const p of plugins.installed) {
      if (!pluginBaseUrls[p.id]) {
        try {
          const base = await api.pluginUrl(p.id, "");
          pluginBaseUrls[p.id] = base.replace(/\/+$/, "");
        } catch {
          pluginBaseUrls[p.id] = "";
        }
      }
    }
  } catch (e) {
    logError("plugins", String(e));
  }
}

export function unloadPlugin(id: string) {
  delete plugins.loaded[id];
  delete pluginBaseUrls[id];
  scriptTags[id]?.remove();
  delete scriptTags[id];
}

async function ensureLoaded(info: PluginInfo): Promise<PluginRenderer | null> {
  if (plugins.loaded[info.id]) {
    return plugins.loaded[info.id];
  }
  if (loadingIds.has(info.id)) {
    return loadingTasks[info.id];
  }
  loadingIds.add(info.id);
  const task = (async () => {
    try {
      const url = await api.pluginUrl(info.id, info.entry);
      await new Promise<void>((resolve, reject) => {
        const s = document.createElement("script");
        s.src = url;
        s.async = true;
        if (info.module) {
          s.type = "module";
        }
        s.onload = () => resolve();
        s.onerror = () =>
          reject(new Error(`plugin script load failed: ${info.id}`));
        document.head.appendChild(s);
        scriptTags[info.id] = s;
      });
    } catch (e) {
      logError("plugin", String(e));
      return null;
    }
    return plugins.loaded[info.id] ?? null;
  })();
  loadingTasks[info.id] = task;
  const r = await task;
  loadingIds.delete(info.id);
  delete loadingTasks[info.id];
  return r;
}

export async function findRenderer(
  info: PluginPreviewInfo
): Promise<PluginRenderer | null> {
  for (const p of plugins.installed) {
    if (!isPluginEnabled(p.id)) {
      continue;
    }
    const r = await ensureLoaded(p);
    if (!r) {
      continue;
    }
    let claimed = false;
    try {
      claimed = !!r.canPreview(info);
    } catch (e) {
      logError("plugin", `canPreview failed (${p.id}): ${String(e)}`);
      claimed = false;
    }
    if (claimed) {
      return r;
    }
  }
  return null;
}
