<script setup lang="ts">
import { ref, shallowRef, computed, onMounted, onBeforeUnmount, nextTick } from "vue";
import * as pdfjs from "pdfjs-dist";
import PdfWorker from "pdfjs-dist/build/pdf.worker.min.mjs?worker";
import { api } from "../api";
import { writeText } from "@tauri-apps/plugin-clipboard-manager";
import { formatSize, fileIcon } from "../utils";
import { t } from "../i18n";
import { settings } from "../settings";
import { pushToast } from "../toast";
import { findRenderer, getPluginBaseUrl } from "../plugins";
import type { PluginHandle, PluginRenderer } from "../plugins";
import type { EditorView } from "@codemirror/view";
import type { Profile, Preview } from "../types";

// 用 Vite 的 ?worker 直接创建真实 Worker，避免 dev 下 ?url 指向 node_modules
// 原始路径 + pdf.js "fake worker" 动态 import 失败的坑；也让 dev/prod 一致。
pdfjs.GlobalWorkerOptions.workerPort = new PdfWorker();

const props = defineProps<{
  profile: Profile;
  bucket: string;
  keyName: string;
  size: number | null;
}>();

const emit = defineEmits<{ close: []; download: []; saved: [] }>();

const textLimit = computed(() =>
  Math.max(0.1, settings.previewTextLimitMb) * 1024 * 1024
);
const imageLimit = computed(() =>
  Math.max(0.1, settings.previewImageLimitMb) * 1024 * 1024
);
const pdfLimit = computed(() =>
  Math.max(0.1, settings.previewPdfLimitMb) * 1024 * 1024
);

const TEXT_EXTS = new Set([
  "txt", "log", "md", "markdown", "json", "jsonl", "ndjson", "xml", "yml",
  "yaml", "csv", "tsv", "ini", "conf", "cfg", "config", "env", "properties",
  "toml", "sh", "bash", "zsh", "fish", "bat", "cmd", "ps1", "py", "js",
  "mjs", "cjs", "ts", "tsx", "jsx", "vue", "html", "htm", "css", "scss",
  "sass", "less", "sql", "java", "kt", "kts", "c", "h", "cpp", "cc", "hpp",
  "hxx", "cxx", "rs", "go", "rb", "php", "pl", "pm", "lua", "swift", "m",
  "scala", "groovy", "gradle", "r", "ipynb", "dart", "ex", "exs", "erl",
  "hs", "clj", "cljs", "vim", "dockerfile", "makefile", "gitignore", "lock",
  "svg", "graphql", "proto", "srt", "vtt", "nfo", "license", "readme", "sass",
  "nc", "gcode", "tap",
]);

const IMAGE_EXTS: Record<string, string> = {
  png: "image/png",
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  gif: "image/gif",
  webp: "image/webp",
  bmp: "image/bmp",
  ico: "image/x-icon",
  svg: "image/svg+xml",
  avif: "image/avif",
  tiff: "image/tiff",
  tif: "image/tiff",
};

const TEXT_MIME: Record<string, string> = {
  json: "application/json",
  xml: "application/xml",
  yml: "application/yaml",
  yaml: "application/yaml",
  csv: "text/csv",
  html: "text/html",
  htm: "text/html",
  md: "text/markdown",
  svg: "image/svg+xml",
};

const preview = ref<Preview | null>(null);
const loading = ref(true);
const error = ref("");
const blocked = ref("");
const tooLarge = ref(false);
const copied = ref(false);
const cmHost = ref<HTMLDivElement | null>(null);
const cmError = ref(false);
let cmView: EditorView | null = null;
const pluginRenderer = ref<PluginRenderer | null>(null);
const pluginHost = ref<HTMLDivElement | null>(null);
let pluginHandle: PluginHandle | null = null;
const editing = ref(false);
const saving = ref(false);
const canEdit = ref(false);

function destroyCm() {
  cmView?.destroy();
  cmView = null;
}

function destroyPlugin() {
  pluginRenderer.value = null;
  if (pluginHandle) {
    try {
      pluginHandle.dispose();
    } catch (e) {
      console.error("plugin dispose failed", e);
    }
    pluginHandle = null;
  }
}

function base64ToArrayBuffer(b64: string): ArrayBuffer {
  const bin = atob(b64);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return bytes.buffer;
}

async function mountCm() {
  let host = cmHost.value;
  if (!host) {
    await nextTick();
    host = cmHost.value;
  }
  if (!host || !preview.value) {
    // 容器不可用时不要静默留空白，直接回退到 <pre>
    cmError.value = true;
    return;
  }
  try {
    const { createReadOnlyEditor } = await import("../cm");
    cmView = createReadOnlyEditor(
      host,
      textContent.value,
      extension.value,
      settings.theme === "dark"
    );
    canEdit.value = true;
    // 容器在挂载瞬间高度可能为 0（布局未稳定），循环强制重新测量
    let tries = 0;
    const ensureLayout = () => {
      if (!cmView) return;
      if (host.clientHeight === 0 && tries < 10) {
        tries++;
        requestAnimationFrame(() => {
          cmView?.requestMeasure();
          ensureLayout();
        });
      } else {
        cmView.requestMeasure();
      }
    };
    requestAnimationFrame(ensureLayout);
    // 兜底：若 CM 长时间没有渲染出文本（内容为空/渲染异常），回退到 <pre>
    window.setTimeout(() => {
      if (cmView && textContent.value.length > 0) {
        const rendered = host.querySelector(".cm-content")?.textContent ?? "";
        if (rendered.trim().length === 0) {
          destroyCm();
          cmError.value = true;
        }
      }
    }, 1500);
  } catch (e) {
    console.error("CodeMirror mount failed", e);
    cmError.value = true;
  }
}

async function copyText() {
  if (!preview.value) return;
  try {
    await writeText(textContent.value);
    copied.value = true;
    setTimeout(() => (copied.value = false), 1500);
  } catch (e) {
    error.value = String(e);
  }
}

async function applyEditable(on: boolean) {
  if (pluginHandle?.setEditable) {
    try {
      pluginHandle.setEditable(on);
    } catch (e) {
      console.error("plugin setEditable failed", e);
    }
  }
  if (cmView) {
    const { setCmEditable } = await import("../cm");
    setCmEditable(cmView, on);
  }
}

function toggleEdit() {
  const on = !editing.value;
  editing.value = on;
  applyEditable(on);
}

function bytesToBase64(bytes: Uint8Array): string {
  let bin = "";
  for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
  return btoa(bin);
}

async function save() {
  if (!preview.value || saving.value) return;
  let bytes: Uint8Array;
  try {
    if (pluginHandle?.getContent) {
      const b = await pluginHandle.getContent();
      bytes = b instanceof Uint8Array ? b : new Uint8Array(b);
    } else if (cmView) {
      const { getCmText } = await import("../cm");
      bytes = new TextEncoder().encode(getCmText(cmView));
    } else {
      return;
    }
  } catch (e) {
    error.value = String(e);
    return;
  }
  saving.value = true;
  try {
    await api.saveObject(
      props.profile.id,
      props.bucket,
      props.keyName,
      bytesToBase64(bytes),
      preview.value.content_type
    );
    pushToast("success", t("saveDone"));
    emit("saved");
    editing.value = false;
    applyEditable(false);
  } catch (e) {
    error.value = String(e);
    pushToast("error", t("saveFailed", { msg: String(e) }));
  } finally {
    saving.value = false;
  }
}

const extension = computed(() => {
  const name = props.keyName.split("/").pop() || "";
  const i = name.lastIndexOf(".");
  return i >= 0 ? name.slice(i + 1).toLowerCase() : "";
});

const isImageByExt = computed(() => extension.value in IMAGE_EXTS);
const isTextByExt = computed(() => {
  const ext = extension.value;
  return ext.length ? TEXT_EXTS.has(ext) : false;
});

const isImage = computed(() => {
  const ct = preview.value?.content_type ?? "";
  return ct.startsWith("image/") || isImageByExt.value;
});

const isText = computed(() => {
  const ct = preview.value?.content_type ?? "";
  const textish =
    ct.startsWith("text/") ||
    ct.includes("json") ||
    ct.includes("xml") ||
    ct.includes("yaml") ||
    ct.includes("javascript") ||
    ct.includes("html") ||
    ct.includes("csv") ||
    ct.includes("x-") ||
    !ct;
  return textish || isTextByExt.value;
});

const isPdfByExt = computed(() => extension.value === "pdf");

const isPdf = computed(() => {
  const ct = preview.value?.content_type ?? "";
  return ct === "application/pdf" || isPdfByExt.value;
});

// 注意：pdf.js 对象必须用 shallowRef 存，不能用 ref。
// ref 会把值深包装成 reactive Proxy，而 pdf.js 的类使用了 JS 私有字段
// （#port / #pagesNumber 等），私有字段无法穿透 Proxy，会抛出
// "Cannot read private member X from an object whose class did not declare it"。
const pdfDoc = shallowRef<any>(null);
const pdfLoadTask = shallowRef<any>(null);
const pdfPageNum = ref(1);
const pdfPageCount = ref(0);
const pdfScale = ref(1.2);
const pdfRendering = ref(false);
const pdfError = ref("");
const pdfCanvas = ref<HTMLCanvasElement | null>(null);
let renderTask: any = null;

async function renderPdfPage() {
  if (!pdfDoc.value) return;
  if (!(await waitForCanvas())) return;
  if (renderTask) {
    renderTask.cancel();
    renderTask = null;
  }
  pdfRendering.value = true;
  pdfError.value = "";
  try {
    const page = await pdfDoc.value.getPage(pdfPageNum.value);
    const viewport = page.getViewport({ scale: pdfScale.value });
    const canvas = pdfCanvas.value!;
    canvas.width = viewport.width;
    canvas.height = viewport.height;
    const ctx = canvas.getContext("2d")!;
    const task = page.render({ canvasContext: ctx, viewport });
    renderTask = task;
    await task.promise;
  } catch (e: any) {
    if (e?.name !== "RenderingCancelledException") {
      pdfError.value = String(e);
    }
  } finally {
    renderTask = null;
    pdfRendering.value = false;
  }
}

async function waitForCanvas(): Promise<boolean> {
  for (let i = 0; i < 20; i++) {
    if (pdfCanvas.value) return true;
    await new Promise((r) => setTimeout(r, 50));
  }
  return false;
}

async function loadPdf(b64: string) {
  pdfError.value = "";
  try {
    const binary = atob(b64);
    const len = binary.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) bytes[i] = binary.charCodeAt(i);
    pdfLoadTask.value?.destroy();
    pdfLoadTask.value = pdfjs.getDocument({ data: bytes });
    pdfDoc.value = await pdfLoadTask.value.promise;
    pdfPageCount.value = pdfDoc.value.numPages;
    pdfPageNum.value = 1;
    await renderPdfPage();
  } catch (e) {
    pdfError.value = String(e);
  }
}

function goPage(n: number) {
  if (n < 1 || n > pdfPageCount.value) return;
  pdfPageNum.value = n;
  renderPdfPage();
}

function zoom(delta: number) {
  pdfScale.value = Math.min(5, Math.max(0.3, pdfScale.value + delta));
  renderPdfPage();
}

function fitWidth() {
  const container = pdfCanvas.value?.parentElement;
  const containerWidth = container?.clientWidth || 800;
  if (!pdfDoc.value) return;
  pdfDoc.value.getPage(pdfPageNum.value).then((page: any) => {
    const vp = page.getViewport({ scale: 1 });
    pdfScale.value = containerWidth / vp.width;
    renderPdfPage();
  });
}

onBeforeUnmount(() => {
  destroyCm();
  destroyPlugin();
  pdfLoadTask.value?.destroy();
  if (renderTask) renderTask.cancel();
});

function mimeForDataUrl(): string {
  const ct = preview.value?.content_type ?? "";
  if (ct && ct !== "application/octet-stream") return ct;
  const ext = extension.value;
  if (ext in IMAGE_EXTS) return IMAGE_EXTS[ext];
  if (ext in TEXT_MIME) return TEXT_MIME[ext];
  return ct || "text/plain";
}

const dataUrl = computed(() => {
  if (!preview.value) return "";
  return `data:${mimeForDataUrl()};base64,${preview.value.content_base64}`;
});

const textContent = computed(() => {
  if (!preview.value) return "";
  return decodeURIComponent(escape(atob(preview.value.content_base64)));
});

async function load(force = false) {
  destroyCm();
  destroyPlugin();
  cmError.value = false;
  loading.value = true;
  error.value = "";
  blocked.value = "";
  editing.value = false;
  saving.value = false;
  canEdit.value = false;

  const fileName = props.keyName.split("/").pop() || props.keyName;
  const previewInfo = {
    ext: extension.value,
    name: fileName,
    contentType: null as string | null,
    size: props.size,
  };

  if (!isPdfByExt.value && !isImageByExt.value) {
    let renderer: PluginRenderer | null = null;
    try {
      renderer = await findRenderer(previewInfo);
    } catch (e) {
      console.error("findRenderer failed", e);
    }
    if (renderer) {
      try {
        preview.value = await api.getPreview(
          props.profile.id,
          props.bucket,
          props.keyName
        );
        pluginRenderer.value = renderer;
        loading.value = false;
        await nextTick();
        const hostEl = pluginHost.value;
        if (!hostEl) throw new Error("plugin host missing");
        const b64 = preview.value.content_base64;
        pluginHandle =
          renderer.render(hostEl, {
            baseUrl: getPluginBaseUrl(renderer.id),
            ext: extension.value,
            name: fileName,
            contentType: preview.value.content_type,
            size: props.size,
            dark: settings.theme === "dark",
            editable: false,
            fetchObject: () => Promise.resolve(base64ToArrayBuffer(b64)),
            fetchText: () => Promise.resolve(textContent.value),
          }) ?? null;
        canEdit.value = !!pluginHandle?.setEditable;
      } catch (e) {
        pluginRenderer.value = null;
        pluginHandle = null;
        error.value = String(e);
      } finally {
        loading.value = false;
      }
      return;
    }
  }

  if (!force) {
    const kindLimit = isPdfByExt.value
      ? pdfLimit.value
      : isImageByExt.value
        ? imageLimit.value
        : textLimit.value;
    const tooBig = props.size != null && props.size > kindLimit;
    if (tooBig) {
      tooLarge.value = true;
      blocked.value = isPdfByExt.value
        ? t("tooLargePdf", {
            size: formatSize(props.size),
            limit: formatSize(pdfLimit.value),
          })
        : isImageByExt.value
          ? t("tooLargeImage", { size: formatSize(props.size) })
          : t("tooLargeText", {
              size: formatSize(props.size),
              limit: formatSize(textLimit.value),
            });
      loading.value = false;
      return;
    }
  }

  try {
    preview.value = await api.getPreview(props.profile.id, props.bucket, props.keyName);
    // 拿到真实 content-type 后再判断一次大小（针对未按扩展名识别的情况）
    if (!force) {
      const isRealPdf =
        preview.value.content_type === "application/pdf" || isPdfByExt.value;
      const realLimit = isRealPdf
        ? pdfLimit.value
        : preview.value.content_type?.startsWith("image/")
          ? imageLimit.value
          : textLimit.value;
      const realTooBig = props.size != null && props.size > realLimit;
      if (realTooBig && preview.value.content_type !== "application/octet-stream") {
        tooLarge.value = true;
        blocked.value = isRealPdf
          ? t("tooLargePdf", {
              size: formatSize(props.size),
              limit: formatSize(pdfLimit.value),
            })
          : t("tooLargeImage", { size: formatSize(props.size) });
        preview.value = null;
        return;
      }
    }
    loading.value = false;
    const looksPdf =
      preview.value.content_type === "application/pdf" || isPdfByExt.value;
    if (looksPdf) {
      await nextTick();
      await loadPdf(preview.value.content_base64);
    } else if (isText.value) {
      await nextTick();
      await mountCm();
    }
  } catch (e) {
    error.value = String(e);
  } finally {
    loading.value = false;
  }
}

function forceOpen() {
  tooLarge.value = false;
  blocked.value = "";
  load(true);
}

onMounted(load);
</script>

<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50" @click.self="emit('close')">
    <div class="flex h-[85vh] w-[80vw] flex-col rounded-lg bg-white shadow-2xl dark:bg-slate-800 dark:text-slate-100">
      <div class="flex items-center justify-between border-b border-slate-200 px-4 py-3 dark:border-slate-700">
        <div class="min-w-0">
          <div class="flex items-center gap-2 truncate font-semibold">
            <span>{{ fileIcon(keyName) }}</span>
            <span class="truncate">{{ keyName.split("/").pop() }}</span>
          </div>
          <div v-if="preview" class="text-xs text-slate-500 dark:text-slate-400">
            {{ mimeForDataUrl() }} · {{ formatSize(preview.size) }}
          </div>
          <div v-else-if="props.size != null" class="text-xs text-slate-500 dark:text-slate-400">{{ formatSize(props.size) }}</div>
        </div>
        <div class="flex items-center gap-2">
          <button
            v-if="preview && isText"
            class="rounded-md border border-slate-300 px-3 py-1 text-sm hover:bg-slate-50 dark:border-slate-600 dark:hover:bg-slate-700"
            @click="copyText"
          >{{ copied ? t("copied") : t("copy") }}</button>
          <button
            v-if="preview"
            class="rounded-md bg-blue-600 px-3 py-1 text-sm text-white hover:bg-blue-700"
            @click="emit('download')"
          >{{ t("download") }}</button>
          <template v-if="preview && canEdit">
            <button
              v-if="!editing"
              class="rounded-md border border-amber-300 bg-amber-50 px-3 py-1 text-sm text-amber-700 hover:bg-amber-100 dark:border-amber-600 dark:bg-amber-900/30 dark:text-amber-300 dark:hover:bg-amber-900/60"
              @click="toggleEdit"
            >✏️ {{ t("edit") }}</button>
            <button
              v-else
              class="rounded-md border border-slate-300 px-3 py-1 text-sm hover:bg-slate-50 dark:border-slate-600 dark:hover:bg-slate-700"
              :disabled="saving"
              @click="toggleEdit"
            >{{ t("cancel") }}</button>
            <button
              v-if="editing"
              class="rounded-md bg-green-600 px-3 py-1 text-sm text-white hover:bg-green-700 disabled:opacity-50"
              :disabled="saving"
              @click="save"
            >{{ saving ? t("saving") : t("save") }}</button>
          </template>
          <button class="rounded-md border border-slate-300 px-3 py-1 text-sm hover:bg-slate-50 dark:border-slate-600 dark:hover:bg-slate-700" @click="emit('close')">{{ t("close") }}</button>
        </div>
      </div>

      <div v-if="preview && isPdf && pdfPageCount" class="flex items-center gap-2 border-b border-slate-200 px-4 py-1.5 text-sm dark:border-slate-700">
        <button class="rounded px-2 py-0.5 hover:bg-slate-100 disabled:opacity-30 dark:hover:bg-slate-700" :disabled="pdfPageNum <= 1" @click="goPage(pdfPageNum - 1)">◀</button>
        <span class="min-w-24 text-center text-xs text-slate-600 dark:text-slate-300">{{ t("pdfPage", { n: pdfPageNum, total: pdfPageCount }) }}</span>
        <button class="rounded px-2 py-0.5 hover:bg-slate-100 disabled:opacity-30 dark:hover:bg-slate-700" :disabled="pdfPageNum >= pdfPageCount" @click="goPage(pdfPageNum + 1)">▶</button>
        <div class="flex-1"></div>
        <button class="rounded px-2 py-0.5 hover:bg-slate-100 dark:hover:bg-slate-700" :title="t('pdfZoomOut')" @click="zoom(-0.25)">−</button>
        <span class="text-xs text-slate-500 dark:text-slate-400">{{ Math.round(pdfScale * 100) }}%</span>
        <button class="rounded px-2 py-0.5 hover:bg-slate-100 dark:hover:bg-slate-700" :title="t('pdfZoomIn')" @click="zoom(0.25)">+</button>
        <button class="rounded px-2 py-0.5 hover:bg-slate-100 dark:hover:bg-slate-700" :title="t('pdfFit')" @click="fitWidth">⤢</button>
      </div>

      <div class="min-h-0 flex-1 overflow-auto bg-slate-50 p-4 dark:bg-slate-900">
        <div v-if="loading" class="flex h-full items-center justify-center text-slate-400">{{ t("loading") }}</div>
        <div v-else-if="error" class="flex h-full items-center justify-center text-red-600">{{ error }}</div>

        <div v-else-if="blocked" class="flex h-full flex-col items-center justify-center gap-3 text-slate-500 dark:text-slate-400">
          <span class="text-4xl">📦</span>
          <p class="max-w-md text-center">{{ blocked }}</p>
          <p class="max-w-md text-center text-xs text-slate-400 dark:text-slate-500">{{ t("tooLargeHint") }}</p>
          <div class="flex gap-2">
            <button class="rounded-md bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700" @click="emit('download')">{{ t("download") }}</button>
            <button class="rounded-md border border-blue-300 bg-blue-50 px-4 py-2 text-sm text-blue-700 hover:bg-blue-100 dark:border-blue-500 dark:bg-blue-900/40 dark:text-blue-300 dark:hover:bg-blue-900/70" @click="forceOpen">{{ t("previewAnyway") }}</button>
            <button class="rounded-md border border-slate-300 px-4 py-2 text-sm hover:bg-slate-50 dark:border-slate-600 dark:hover:bg-slate-700" @click="emit('close')">{{ t("close") }}</button>
          </div>
        </div>

        <template v-else-if="preview">
          <div v-if="isImage" class="flex h-full items-center justify-center">
            <img :src="dataUrl" class="max-h-full max-w-full object-contain" :alt="keyName" />
          </div>
          <div
            v-else-if="pluginRenderer"
            ref="pluginHost"
            class="relative h-full min-h-[240px] overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700"
          ></div>
          <div v-else-if="isText" class="h-full min-h-[240px]">
            <div
              v-if="!cmError"
              ref="cmHost"
              class="h-full overflow-hidden rounded-lg border border-slate-200 dark:border-slate-700"
            ></div>
            <pre v-else class="h-full overflow-auto whitespace-pre-wrap rounded-lg border border-slate-200 bg-white p-4 text-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100">{{ textContent }}</pre>
          </div>
          <div v-else-if="isPdf" class="flex min-h-full flex-col items-center justify-start gap-3">
            <canvas ref="pdfCanvas" class="max-w-full rounded shadow-lg"></canvas>
            <div v-if="pdfRendering" class="py-4 text-xs text-slate-400">{{ t("loading") }}</div>
            <div v-if="pdfError" class="text-sm text-red-600">{{ pdfError }}</div>
          </div>
          <div v-else class="flex h-full flex-col items-center justify-center gap-2 text-slate-500 dark:text-slate-400">
            <span class="text-4xl">🧾</span>
            <p>{{ t("cannotPreview", { type: preview.content_type || t("unknownType"), size: formatSize(preview.size) }) }}</p>
            <p class="text-xs text-slate-400">{{ t("useDownload") }}</p>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
