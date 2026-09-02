import { reactive } from "vue";

export type Locale = "en" | "zh";
export type Theme = "light" | "dark";

const STORAGE_KEY = "s3viewer.settings";

function load(): {
  locale: Locale;
  theme: Theme;
  downloadDir: string;
  previewTextLimitMb: number;
  previewImageLimitMb: number;
  previewPdfLimitMb: number;
  openDevToolsOnStart: boolean;
  showLogCountBadge: boolean;
  enabledPlugins: string[];
} {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const p = JSON.parse(raw);
      return {
        locale: p.locale === "zh" ? "zh" : "en",
        theme: p.theme === "dark" ? "dark" : "light",
        downloadDir: typeof p.downloadDir === "string" ? p.downloadDir : "",
        previewTextLimitMb: num(p.previewTextLimitMb, 1),
        previewImageLimitMb: num(p.previewImageLimitMb, 8),
        previewPdfLimitMb: num(p.previewPdfLimitMb, 10),
        openDevToolsOnStart: !!p.openDevToolsOnStart,
        showLogCountBadge: p.showLogCountBadge === true,
        enabledPlugins: strArray(p.enabledPlugins),
      };
    }
  } catch {
    // ignore
  }
  return {
    locale: "en",
    theme: "light",
    downloadDir: "",
    previewTextLimitMb: 1,
    previewImageLimitMb: 8,
    previewPdfLimitMb: 10,
    openDevToolsOnStart: false,
    showLogCountBadge: false,
    enabledPlugins: [],
  };
}

function num(v: unknown, d: number): number {
  return typeof v === "number" && isFinite(v) && v > 0 ? v : d;
}

function strArray(v: unknown): string[] {
  return Array.isArray(v) && v.every((x) => typeof x === "string") ? v : [];
}

export const settings = reactive<{
  locale: Locale;
  theme: Theme;
  downloadDir: string;
  previewTextLimitMb: number;
  previewImageLimitMb: number;
  previewPdfLimitMb: number;
  openDevToolsOnStart: boolean;
  showLogCountBadge: boolean;
  enabledPlugins: string[];
}>(load());

export function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
}

export function saveSettings() {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        locale: settings.locale,
        theme: settings.theme,
        downloadDir: settings.downloadDir,
        previewTextLimitMb: settings.previewTextLimitMb,
        previewImageLimitMb: settings.previewImageLimitMb,
        previewPdfLimitMb: settings.previewPdfLimitMb,
        openDevToolsOnStart: settings.openDevToolsOnStart,
        showLogCountBadge: settings.showLogCountBadge,
        enabledPlugins: settings.enabledPlugins,
      })
    );
  } catch {
    // ignore
  }
  applyTheme(settings.theme);
}

export function initSettings() {
  applyTheme(settings.theme);
  document.documentElement.lang = settings.locale;
}
