<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed, watch } from "vue";
import { open, save } from "@tauri-apps/plugin-dialog";
import { getCurrentWebview } from "@tauri-apps/api/webview";
import { api } from "../api";
import { formatSize, formatDate, fileIcon } from "../utils";
import { logError, logSuccess } from "../logs";
import { t } from "../i18n";
import { askConfirm } from "../confirm";
import { onBack, onForward } from "../navbus";
import { settings } from "../settings";
import { addTransfer, patchTransfer } from "../transfers";
import { pushToast } from "../toast";
import type { Profile, BucketInfo, ObjectEntry, DownloadItem } from "../types";
import PreviewModal from "./PreviewModal.vue";
import ShareModal from "./ShareModal.vue";

const props = defineProps<{
  profile: Profile;
  profiles: Profile[];
  active?: boolean;
  initialBucket?: string;
  initialPrefix?: string;
}>();

const emit = defineEmits<{
  refreshProfiles: [];
  editProfile: [];
  openNewTab: [payload: { profile: Profile; bucket: string | null; prefix: string }];
}>();

const buckets = ref<BucketInfo[]>([]);
const selectedBucket = ref<string | null>(null);
const prefix = ref("");
const entries = ref<ObjectEntry[]>([]);
const loading = ref(false);
const loadingBuckets = ref(false);
const error = ref("");
const nextToken = ref<string | null>(null);
const isTruncated = ref(false);

const breadcrumbs = computed(() => {
  const parts = prefix.value.split("/").filter((p) => p.length);
  return parts;
});

const previewTarget = ref<ObjectEntry | null>(null);
const shareTarget = ref<ObjectEntry | null>(null);
const renameTarget = ref<ObjectEntry | null>(null);
const renameNewKey = ref("");
const showNewFolder = ref(false);
const newFolderName = ref("");
const showCreateBucket = ref(false);
const newBucketName = ref("");
const newBucketRegion = ref(props.profile.region);
const busy = ref("");
const dragOver = ref(false);
const selected = ref<string[]>([]);
const searchQuery = ref("");
const searchResults = ref<ObjectEntry[] | null>(null);
const searching = ref(false);
const searchExpanded = ref(false);
const searchInputEl = ref<HTMLInputElement | null>(null);
let searchTimer: number | undefined;

watch(searchExpanded, (v) => {
  if (v) {
    window.setTimeout(() => searchInputEl.value?.focus(), 30);
  }
});

function collapseSearch() {
  clearSearch();
  searchExpanded.value = false;
}

const displayEntries = computed(() => searchResults.value ?? entries.value);

const selectedCount = computed(() => selected.value.length);
const allChecked = computed(
  () =>
    displayEntries.value.length > 0 &&
    displayEntries.value.every((e) => selected.value.includes(e.key))
);

watch(searchQuery, () => {
  if (searchTimer) window.clearTimeout(searchTimer);
  searchTimer = window.setTimeout(() => {
    runSearch();
  }, 400);
});

async function runSearch() {
  const q = searchQuery.value.trim();
  if (!q || !selectedBucket.value) {
    searchResults.value = null;
    searching.value = false;
    return;
  }
  searching.value = true;
  try {
    const res = await api.searchObjects(
      props.profile.id,
      selectedBucket.value,
      prefix.value,
      q
    );
    searchResults.value = res.entries;
  } catch (e) {
    error.value = String(e);
    searchResults.value = null;
  } finally {
    searching.value = false;
  }
}

function clearSearch() {
  if (searchTimer) window.clearTimeout(searchTimer);
  searchQuery.value = "";
  searchResults.value = null;
}

function isSelected(key: string) {
  return selected.value.includes(key);
}

function toggleSelect(key: string) {
  if (isSelected(key)) {
    selected.value = selected.value.filter((k) => k !== key);
  } else {
    selected.value = [...selected.value, key];
  }
}

function toggleAll() {
  if (allChecked.value) {
    selected.value = [];
  } else {
    selected.value = displayEntries.value.map((e) => e.key);
  }
}

function clearSelection() {
  selected.value = [];
}

async function downloadSelected() {
  if (!selectedBucket.value || !selected.value.length) return;
  const dir = await pickDownloadDir();
  if (!dir) return;
  const items: DownloadItem[] = selected.value
    .map((k) => {
      const e = displayEntries.value.find((x) => x.key === k);
      return e ? { key: e.key, is_dir: e.is_dir } : null;
    })
    .filter((x): x is DownloadItem => x !== null);
  if (!items.length) return;
  const taskId = addTransfer({
    type: "download",
    name: t("downloadSelected", { n: items.length }),
    bucket: selectedBucket.value,
    key: "",
    path: dir,
  });
  busy.value = `${t("download")} ${items.length} ${t("items")}...`;
  try {
    const n = await api.downloadSelected(
      props.profile.id,
      selectedBucket.value,
      items,
      dir
    );
    patchTransfer(taskId, { status: "done", progress: 100 });
    pushToast("success", t("multiDownloadDone", { n }), 4000, openAction(dir));
    logSuccess("download", t("logMultiDownloaded", { n, dir }));
  } catch (e) {
    error.value = String(e);
    patchTransfer(taskId, { status: "error", error: String(e) });
    pushToast("error", t("transferError", { kind: t("downloadKind"), msg: String(e) }));
    logError("download", t("logMultiDownloadFailed", { msg: String(e) }));
  } finally {
    busy.value = "";
    clearSelection();
  }
}

async function loadBuckets() {
  loadingBuckets.value = true;
  error.value = "";
  try {
    buckets.value = await api.listBuckets(props.profile.id);
    logSuccess("connection", t("logConnected", { name: props.profile.name, n: buckets.value.length }));
  } catch (e) {
    error.value = String(e);
    logError("connection", t("logConnFailed", { name: props.profile.name, msg: String(e) }));
  } finally {
    loadingBuckets.value = false;
  }
}

async function loadObjects(cont = false) {
  if (!selectedBucket.value) return;
  loading.value = true;
  error.value = "";
  try {
    const res = await api.listObjects(
      props.profile.id,
      selectedBucket.value,
      prefix.value,
      cont ? nextToken.value : null
    );
    if (cont) {
      entries.value = entries.value.concat(res.entries);
    } else {
      entries.value = res.entries;
    }
    isTruncated.value = res.is_truncated;
    nextToken.value = res.next_token;
  } catch (e) {
    error.value = String(e);
    logError("browse", t("logListFailed", { bucket: selectedBucket.value, prefix: prefix.value || "/", msg: String(e) }));
  } finally {
    loading.value = false;
  }
}

function openBucket(name: string) {
  pushNav(name, "");
}

const addressInput = ref("");

function syncAddress() {
  const b = selectedBucket.value;
  addressInput.value = b ? `s3://${b}${prefix.value ? "/" + prefix.value : ""}` : "";
}

watch([selectedBucket, prefix], syncAddress, { immediate: true });

interface NavLoc {
  bucket: string;
  prefix: string;
}

const navHistory = ref<NavLoc[]>([]);
const navIndex = ref(-1);

function loadLocation(loc: NavLoc) {
  selectedBucket.value = loc.bucket;
  prefix.value = loc.prefix;
  entries.value = [];
  loadObjects();
}

function pushNav(bucket: string, prefix: string) {
  clearSearch();
  navHistory.value = navHistory.value.slice(0, navIndex.value + 1);
  navHistory.value.push({ bucket, prefix });
  navIndex.value = navHistory.value.length - 1;
  loadLocation({ bucket, prefix });
}

function goBack() {
  if (navIndex.value > 0) {
    navIndex.value--;
    loadLocation(navHistory.value[navIndex.value]);
  }
}

function goForward() {
  if (navIndex.value < navHistory.value.length - 1) {
    navIndex.value++;
    loadLocation(navHistory.value[navIndex.value]);
  }
}

function navigateToAddress() {
  const raw = addressInput.value.trim();
  if (!raw) return;
  let addr = raw.replace(/^s3:\/\//i, "");
  addr = addr.replace(/^\/+/, "");
  const parts = addr.split("/").filter((p) => p.length);
  const bucket = parts[0];
  if (!bucket) return;
  const pf = parts.length > 1 ? parts.slice(1).join("/") + "/" : "";
  pushNav(bucket, pf);
  if (!buckets.value.some((b) => b.name === bucket)) loadBuckets();
}

function navigateTo(index: number) {
  if (!selectedBucket.value) return;
  if (index === -1) {
    pushNav(selectedBucket.value, "");
  } else {
    const parts = prefix.value.split("/").filter((p) => p.length);
    pushNav(selectedBucket.value, parts.slice(0, index + 1).join("/") + "/");
  }
}

function openEntry(e: ObjectEntry) {
  if (e.is_dir) {
    if (selectedBucket.value) pushNav(selectedBucket.value, e.key);
  } else {
    previewTarget.value = e;
  }
}
async function openLocalPath(path: string) {
  try {
    await api.openPath(path);
  } catch (e) {
    pushToast("error", t("openFailed", { msg: String(e) }));
  }
}

function openAction(path: string) {
  return { label: t("openAction"), onClick: () => openLocalPath(path) };
}

async function upload() {
  if (!selectedBucket.value) return;
  const files = await open({ multiple: true });
  if (!files) return;
  const list = (Array.isArray(files) ? files : [files]).filter(
    (x): x is string => typeof x === "string"
  );
  if (!list.length) return;
  await uploadFiles(list);
}

async function uploadFiles(paths: string[]) {
  if (!selectedBucket.value || !paths.length) return;
  const bucket = selectedBucket.value;
  busy.value = `${t("upload")} ${paths.length} ${t("items")}...`;
  let ok = 0;
  let fail = 0;
  for (const file of paths) {
    const name = file.split(/[\\/]/).pop() || "file";
    const key = prefix.value + name;
    const taskId = addTransfer({
      type: "upload",
      name,
      bucket,
      key,
      path: file,
    });
    try {
      await api.uploadFile(props.profile.id, bucket, key, file, taskId);
      patchTransfer(taskId, { status: "done", progress: 100 });
      ok++;
      logSuccess("upload", t("logUploaded", { name, bucket, key }));
    } catch (e) {
      fail++;
      patchTransfer(taskId, { status: "error", error: String(e) });
      logError("upload", t("logUploadFailed", { name, msg: String(e) }));
    }
  }
  if (fail === 0 && ok > 0) {
    if (ok === 1) {
      const nm = paths[0].split(/[\\/]/).pop() || "file";
      pushToast("success", t("uploadDone", { name: nm }), 4000, openAction(paths[0]));
    } else {
      pushToast("success", t("uploadMultiDone", { n: ok }), 4000);
    }
  } else if (ok === 0) {
    pushToast("error", t("uploadMultiFailed", { n: fail }));
  } else {
    pushToast("error", t("uploadPartial", { ok, fail }));
  }
  busy.value = "";
  await loadObjects();
}

function joinDownloadPath(dir: string, key: string): string {
  const d = dir.replace(/[\\/]+$/, "");
  const rel = key.split("/").join("\\");
  return `${d}\\${rel}`;
}

async function pickDownloadDir(): Promise<string | null> {
  if (settings.downloadDir) return settings.downloadDir;
  const dir = await open({ directory: true });
  return dir && typeof dir === "string" ? dir : null;
}

async function download(e: ObjectEntry) {
  const name = e.key.split("/").pop() || e.key;
  let dest: string;
  if (settings.downloadDir) {
    dest = joinDownloadPath(settings.downloadDir, e.key);
  } else {
    const picked = await save({ defaultPath: name });
    if (!picked || typeof picked !== "string") return;
    dest = picked;
  }
  const taskId = addTransfer({
    type: "download",
    name,
    bucket: selectedBucket.value ?? "",
    key: e.key,
    path: dest,
  });
  busy.value = `${t("download")} ${name}...`;
  try {
    await api.downloadObject(props.profile.id, selectedBucket.value!, e.key, dest, taskId);
    patchTransfer(taskId, { status: "done", progress: 100 });
    pushToast("success", t("downloadDone", { name }), 4000, openAction(dest));
    logSuccess("download", t("logDownloadedTo", { name: e.key, path: dest }));
  } catch (err) {
    error.value = String(err);
    patchTransfer(taskId, { status: "error", error: String(err) });
    pushToast("error", t("transferError", { kind: t("downloadKind"), msg: String(err) }));
    logError("download", t("logDownloadFailed", { key: e.key, msg: String(err) }));
  } finally {
    busy.value = "";
  }
}

async function downloadFolder(e: ObjectEntry) {
  if (!selectedBucket.value) return;
  const dir = await pickDownloadDir();
  if (!dir) return;
  const taskId = addTransfer({
    type: "download",
    name: e.key,
    bucket: selectedBucket.value,
    key: e.key,
    path: dir,
  });
  busy.value = `${t("download")} ${e.key}...`;
  try {
    const n = await api.downloadSelected(props.profile.id, selectedBucket.value, [
      { key: e.key, is_dir: true },
    ], dir);
    patchTransfer(taskId, { status: "done", progress: 100 });
    pushToast("success", t("multiDownloadDone", { n }), 4000, openAction(dir));
    logSuccess("download", t("logMultiDownloaded", { n, dir }));
  } catch (err) {
    error.value = String(err);
    patchTransfer(taskId, { status: "error", error: String(err) });
    pushToast("error", t("transferError", { kind: t("downloadKind"), msg: String(err) }));
    logError("download", t("logMultiDownloadFailed", { msg: String(err) }));
  } finally {
    busy.value = "";
  }
}

async function doDelete(e: ObjectEntry) {
  if (!selectedBucket.value) return;
  const label = e.key.split("/").pop() || e.key;
  const msg = e.is_dir
    ? t("confirmDeletePrefix", { name: label })
    : t("confirmDelete", { name: label });
  if (!(await askConfirm(msg))) return;
  try {
    if (e.is_dir) {
      await api.deletePrefix(props.profile.id, selectedBucket.value, e.key);
    } else {
      await api.deleteObject(props.profile.id, selectedBucket.value, e.key);
    }
    logSuccess("delete", t("logDeleted", { key: e.key }));
    await loadObjects();
  } catch (err) {
    error.value = String(err);
    logError("delete", t("logDeleteFailed", { key: e.key, msg: String(err) }));
  }
}

async function doRename() {
  if (!renameTarget.value || !selectedBucket.value) return;
  if (!renameNewKey.value.trim()) return;
  const oldKey = renameTarget.value.key;
  try {
    await api.renameObject(
      props.profile.id,
      selectedBucket.value,
      oldKey,
      renameNewKey.value.trim()
    );
    renameTarget.value = null;
    logSuccess("rename", t("logRenamed", { old: oldKey, new: renameNewKey.value.trim() }));
    await loadObjects();
  } catch (err) {
    error.value = String(err);
    logError("rename", t("logRenameFailed", { key: oldKey, msg: String(err) }));
  }
}

async function createFolder() {
  if (!selectedBucket.value || !newFolderName.value.trim()) return;
  const name = newFolderName.value.trim();
  try {
    await api.createFolder(props.profile.id, selectedBucket.value, prefix.value + name);
    newFolderName.value = "";
    showNewFolder.value = false;
    logSuccess("newFolder", t("logFolderCreated", { path: prefix.value + name }));
    await loadObjects();
  } catch (err) {
    error.value = String(err);
    logError("newFolder", t("logFolderFailed", { msg: String(err) }));
  }
}

async function createBucket() {
  if (!newBucketName.value.trim()) return;
  const name = newBucketName.value.trim();
  try {
    await api.createBucket(props.profile.id, name, newBucketRegion.value);
    newBucketName.value = "";
    showCreateBucket.value = false;
    logSuccess("bucket", t("logBucketCreated", { name }));
    await loadBuckets();
  } catch (err) {
    error.value = String(err);
    logError("bucket", t("logBucketCreateFailed", { msg: String(err) }));
  }
}

async function deleteBucket() {
  if (!selectedBucket.value) return;
  const name = selectedBucket.value;
  if (!(await askConfirm(t("confirmDeleteBucket", { name })))) return;
  try {
    await api.deleteBucket(props.profile.id, name);
    selectedBucket.value = null;
    prefix.value = "";
    entries.value = [];
    logSuccess("bucket", t("logBucketDeleted", { name }));
    await loadBuckets();
  } catch (err) {
    error.value = String(err);
    logError("bucket", t("logBucketDeleteFailed", { name, msg: String(err) }));
  }
}

interface CtxItem {
  label: string;
  run: () => void;
}

const ctx = ref<{ x: number; y: number; entry: ObjectEntry } | null>(null);

function closeCtx() {
  ctx.value = null;
}

function onContextMenu(e: MouseEvent, entry: ObjectEntry) {
  const w = window.innerWidth;
  const h = window.innerHeight;
  ctx.value = {
    x: Math.min(e.clientX, w - 200),
    y: Math.min(e.clientY, h - 260),
    entry,
  };
}

function openInNewTab() {
  const bucket = selectedBucket.value;
  emit("openNewTab", {
    profile: props.profile,
    bucket,
    prefix: bucket ? prefix.value : "",
  });
  closeCtx();
}

const ctxItems = computed<CtxItem[]>(() => {
  if (!ctx.value) return [];
  const e = ctx.value.entry;
  const items: CtxItem[] = [];
  if (e.is_dir) {
    items.push({ label: t("openAction"), run: () => openEntry(e) });
  } else {
    items.push({
      label: t("preview"),
      run: () => {
        previewTarget.value = e;
        closeCtx();
      },
    });
  }
  items.push({
    label: t("download"),
    run: () => {
      download(e);
      closeCtx();
    },
  });
  if (!e.is_dir) {
    items.push({
      label: t("share"),
      run: () => {
        shareTarget.value = e;
        closeCtx();
      },
    });
  }
  items.push({
    label: t("rename"),
    run: () => {
      renameTarget.value = e;
      renameNewKey.value = e.key;
      closeCtx();
    },
  });
  items.push({
    label: t("delete"),
    run: () => {
      doDelete(e);
      closeCtx();
    },
  });
  items.push({ label: t("openInNewTab"), run: openInNewTab });
  return items;
});

onMounted(async () => {
  await loadBuckets();
  if (
    props.initialBucket &&
    buckets.value.some((b) => b.name === props.initialBucket)
  ) {
    pushNav(props.initialBucket, props.initialPrefix || "");
  }
  offBack = onBack(() => {
    if (props.active) goBack();
  });
  offForward = onForward(() => {
    if (props.active) goForward();
  });
  getCurrentWebview()
    .onDragDropEvent((event) => {
      const e = event.payload;
      if (!props.active || !selectedBucket.value) return;
      if (e.type === "over") {
        dragOver.value = dropzoneHit(
          e.position.x / window.devicePixelRatio,
          e.position.y / window.devicePixelRatio
        );
      } else if (e.type === "leave") {
        dragOver.value = false;
      } else if (e.type === "drop") {
        const hit = dropzoneHit(
          e.position.x / window.devicePixelRatio,
          e.position.y / window.devicePixelRatio
        );
        dragOver.value = false;
        if (hit && e.paths.length) {
          uploadFiles(e.paths);
        }
      }
    })
    .then((fn) => {
      unlistenDrag = fn;
    })
    .catch(() => {
      /* drag-drop events unavailable; ignore */
    });
});

let offBack: (() => void) | undefined;
let offForward: (() => void) | undefined;
let unlistenDrag: (() => void) | undefined;

function dropzoneHit(x: number, y: number): boolean {
  const el = document.elementFromPoint(x, y);
  return !!el?.closest("[data-dropzone]");
}

onBeforeUnmount(() => {
  offBack?.();
  offForward?.();
  unlistenDrag?.();
});
</script>

<template>
  <div class="flex h-full min-h-0">
    <aside class="flex w-60 shrink-0 flex-col border-r border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800">
      <div class="flex items-center justify-between border-b border-slate-200 px-3 py-2 dark:border-slate-700">
        <span class="text-sm font-semibold">{{ t("buckets") }}</span>
        <button
          class="rounded border border-slate-300 px-1.5 text-xs hover:bg-slate-50 dark:border-slate-600 dark:hover:bg-slate-700"
          :title="t('newBucket')"
          @click="showCreateBucket = true"
        >+</button>
      </div>
      <div class="min-h-0 flex-1 overflow-auto">
        <div
          v-for="b in buckets"
          :key="b.name"
          class="cursor-pointer px-3 py-1.5 text-sm"
          :class="selectedBucket === b.name ? 'bg-blue-50 font-medium text-blue-700 dark:bg-blue-900/40 dark:text-blue-300' : 'hover:bg-slate-50 dark:hover:bg-slate-700'"
          @click="openBucket(b.name)"
        >
          🪣 {{ b.name }}
        </div>
        <div v-if="loadingBuckets" class="px-3 py-4 text-center text-xs text-slate-400">{{ t("loading") }}</div>
        <div v-else-if="!buckets.length" class="px-3 py-4 text-center text-xs text-slate-400">
          {{ t("noBuckets") }}
        </div>
      </div>
    </aside>

    <section data-dropzone class="relative flex min-w-0 flex-1 flex-col">
      <div
        v-if="dragOver"
        class="pointer-events-none absolute inset-0 z-20 m-3 flex items-center justify-center rounded-lg border-2 border-dashed border-blue-500 bg-blue-50/80 text-sm font-medium text-blue-600 dark:border-blue-400 dark:bg-blue-900/40 dark:text-blue-300"
      >{{ t("dropHint") }}</div>
      <div v-if="selectedBucket" class="border-b border-slate-200 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-800">
        <div class="mb-2 flex items-center gap-2 rounded-md border border-slate-200 bg-slate-50 px-2 py-1 dark:border-slate-600 dark:bg-slate-900">
          <span class="text-slate-400">🔗</span>
          <input
            v-model="addressInput"
            class="min-w-0 flex-1 bg-transparent font-mono text-sm text-slate-700 outline-none dark:text-slate-200"
            :placeholder="'s3://' + selectedBucket + '/'"
            spellcheck="false"
            @keyup.enter="navigateToAddress"
            @keyup.esc="syncAddress"
          />
          <button
            class="shrink-0 rounded px-1.5 text-base leading-none text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700"
            :title="t('searchPlaceholder')"
            @click="searchExpanded = !searchExpanded"
          >🔍</button>
          <template v-if="searchExpanded">
            <input
              ref="searchInputEl"
              v-model="searchQuery"
              class="w-52 shrink-0 border-l border-slate-200 pl-2 bg-transparent text-sm text-slate-700 outline-none dark:border-slate-600 dark:text-slate-200"
              :placeholder="t('searchPlaceholder')"
              spellcheck="false"
              @keyup.esc="collapseSearch"
            />
            <button class="shrink-0 rounded px-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200" @click="collapseSearch">✕</button>
          </template>
        </div>
        <div v-if="searchResults !== null" class="mb-2 flex items-center gap-2 rounded-md bg-blue-50 px-2 py-1 text-xs text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
          <span>{{ searching ? t("searching") : t("searchResults", { q: searchQuery.trim(), n: searchResults.length }) }}</span>
          <button class="ml-auto rounded px-1 hover:bg-blue-100 dark:hover:bg-blue-900/60" @click="clearSearch">{{ t("clearSearch") }}</button>
        </div>
        <div class="mb-2 flex items-center gap-2">
          <nav class="flex min-w-0 items-center gap-1 text-sm">
            <button
              class="rounded p-1 text-slate-600 hover:bg-slate-100 disabled:opacity-30 dark:text-slate-300 dark:hover:bg-slate-700"
              :disabled="navIndex <= 0"
              :title="t('back')"
              @click="goBack"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
            </button>
            <button
              class="rounded p-1 text-slate-600 hover:bg-slate-100 disabled:opacity-30 dark:text-slate-300 dark:hover:bg-slate-700"
              :disabled="navIndex >= navHistory.length - 1"
              :title="t('forward')"
              @click="goForward"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
            <button class="font-medium text-blue-600 hover:underline" @click="navigateTo(-1)">
              {{ selectedBucket }}
            </button>
            <template v-for="(c, i) in breadcrumbs" :key="i">
              <span class="text-slate-400">/</span>
              <button class="hover:underline" @click="navigateTo(i)">{{ c }}</button>
            </template>
          </nav>
          <div class="ml-auto flex items-center gap-2">
            <template v-if="selectedCount">
              <button class="rounded-md bg-green-600 px-2.5 py-1 text-xs font-medium text-white hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600" @click="downloadSelected">{{ t("downloadSelected", { n: selectedCount }) }}</button>
              <button class="rounded-md border border-slate-300 px-2.5 py-1 text-xs hover:bg-slate-50 dark:border-slate-600 dark:hover:bg-slate-700" @click="clearSelection">{{ t("cancelSelection") }}</button>
            </template>
            <button class="rounded-md border border-slate-300 px-2.5 py-1 text-xs hover:bg-slate-50 dark:border-slate-600 dark:hover:bg-slate-700" @click="loadObjects()">{{ t("refresh") }}</button>
            <button class="rounded-md border border-slate-300 px-2.5 py-1 text-xs hover:bg-slate-50 dark:border-slate-600 dark:hover:bg-slate-700" @click="showNewFolder = true">{{ t("newFolder") }}</button>
            <button class="rounded-md bg-blue-600 px-2.5 py-1 text-xs font-medium text-white hover:bg-blue-700" :title="t('uploadBtnHint')" @click="upload">{{ t("upload") }}</button>
            <button class="rounded-md border border-red-200 px-2.5 py-1 text-xs text-red-500/90 hover:bg-red-50 dark:border-red-900/70 dark:text-red-400/80 dark:hover:bg-red-950/30" @click="deleteBucket">{{ t("deleteBucket") }}</button>
          </div>
        </div>

        <div v-if="showNewFolder" class="flex items-center gap-2">
          <input v-model="newFolderName" class="flex-1 rounded-md border border-slate-300 px-2 py-1 text-sm dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100" :placeholder="t('folderName')" @keyup.enter="createFolder" />
          <button class="rounded-md bg-blue-600 px-2 py-1 text-xs text-white hover:bg-blue-700" @click="createFolder">{{ t("create") }}</button>
          <button class="rounded-md border border-slate-300 px-2 py-1 text-xs hover:bg-slate-50 dark:border-slate-600 dark:hover:bg-slate-700" @click="showNewFolder = false">{{ t("cancel") }}</button>
        </div>
      </div>

      <div v-else class="border-b border-slate-200 bg-white px-3 py-2 text-sm text-slate-400 dark:border-slate-700 dark:bg-slate-800">
        {{ t("selectBucket") }}
      </div>

      <div v-if="selectedBucket" class="flex items-center gap-3 border-b border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-500 dark:border-slate-700 dark:bg-slate-800">
        <span class="flex items-center gap-1.5">📄 {{ t("objectCount", { n: displayEntries.length }) }}</span>
        <span v-if="isTruncated" class="text-amber-600 dark:text-amber-400">{{ t("truncatedHint") }}</span>
        <span v-if="selectedCount" class="ml-auto font-medium text-blue-600">{{ t("selectedCount", { n: selectedCount }) }}</span>
      </div>

      <div class="flex-1 overflow-auto bg-white dark:bg-slate-800">
        <table class="w-full text-sm">
          <thead class="sticky top-0 bg-slate-50 text-left text-xs text-slate-500 dark:bg-slate-700 dark:text-slate-400">
            <tr>
              <th class="w-8 px-3 py-2">
                <input type="checkbox" class="h-3.5 w-3.5" :checked="allChecked" @change="toggleAll" />
              </th>
              <th class="px-3 py-2 font-medium">{{ t("name") }}</th>
              <th class="w-32 px-3 py-2 font-medium">{{ t("size") }}</th>
              <th class="w-44 px-3 py-2 font-medium">{{ t("lastModified") }}</th>
              <th class="w-44 px-3 py-2 font-medium">{{ t("actions") }}</th>
            </tr>
          </thead>
          <tbody v-if="loading || searching">
            <tr>
              <td colspan="5" class="px-3 py-8 text-center text-slate-400">{{ searching ? t("searching") : t("loading") }}</td>
            </tr>
          </tbody>
          <tbody v-else>
            <tr
              v-for="e in displayEntries"
              :key="e.key"
              class="border-t border-slate-100 hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-700/50"
              @contextmenu.prevent="onContextMenu($event, e)"
            >
              <td class="px-3 py-2">
                <input type="checkbox" class="h-3.5 w-3.5" :checked="isSelected(e.key)" @click.stop @change="toggleSelect(e.key)" />
              </td>
              <td class="cursor-pointer px-3 py-2" @click="openEntry(e)">
                <span class="flex items-center gap-2">
                  <span>{{ e.is_dir ? "📁" : fileIcon(e.key) }}</span>
                  <span class="truncate">{{ e.key.split("/").filter(Boolean).pop() }}</span>
                </span>
              </td>
              <td class="px-3 py-2 text-slate-500">{{ e.is_dir ? "-" : formatSize(e.size) }}</td>
              <td class="px-3 py-2 text-slate-500">{{ e.is_dir ? "-" : formatDate(e.last_modified) }}</td>
              <td class="px-3 py-2">
                <div v-if="!e.is_dir" class="flex items-center gap-1.5 text-base leading-none">
                  <button class="rounded p-0.5 hover:bg-slate-100 dark:hover:bg-slate-700" :title="t('preview')" @click.stop="previewTarget = e">👁</button>
                  <button class="rounded p-0.5 hover:bg-slate-100 dark:hover:bg-slate-700" :title="t('download')" @click.stop="download(e)">⬇️</button>
                  <button class="rounded p-0.5 hover:bg-slate-100 dark:hover:bg-slate-700" :title="t('share')" @click.stop="shareTarget = e">🔗</button>
                  <button class="rounded p-0.5 hover:bg-slate-100 dark:hover:bg-slate-700" :title="t('rename')" @click.stop="renameTarget = e; renameNewKey = e.key">✏️</button>
                  <button class="rounded p-0.5 hover:bg-red-50 dark:hover:bg-red-950/40" :title="t('delete')" @click.stop="doDelete(e)">🗑️</button>
                </div>
                <div v-else class="flex items-center gap-1.5 text-base leading-none">
                  <button class="rounded p-0.5 hover:bg-slate-100 dark:hover:bg-slate-700" :title="t('download')" @click.stop="downloadFolder(e)">⬇️</button>
                  <button class="rounded p-0.5 hover:bg-slate-100 dark:hover:bg-slate-700" :title="t('rename')" @click.stop="renameTarget = e; renameNewKey = e.key">✏️</button>
                  <button class="rounded p-0.5 hover:bg-red-50 dark:hover:bg-red-950/40" :title="t('delete')" @click.stop="doDelete(e)">🗑️</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div v-if="!displayEntries.length && !loading && !loadingBuckets && !searching" class="py-10 text-center text-sm text-slate-400">
          {{ searchResults !== null ? t("searchEmpty") : t("emptyDir") }}
        </div>
      </div>

      <div v-if="isTruncated" class="border-t border-slate-200 bg-white p-2 text-center dark:border-slate-700 dark:bg-slate-800">
        <button class="rounded-md border border-slate-300 px-3 py-1 text-sm hover:bg-slate-50 dark:border-slate-600 dark:hover:bg-slate-700" @click="loadObjects(true)">{{ t("loadMore") }}</button>
      </div>
    </section>

    <div v-if="busy" class="pointer-events-none fixed inset-0 z-40 flex items-center justify-center bg-black/10">
      <div class="rounded-lg bg-white px-5 py-3 text-sm shadow-lg dark:bg-slate-800 dark:text-slate-100">{{ busy }}</div>
    </div>

    <p v-if="error" class="fixed bottom-2 left-1/2 z-50 max-w-xl -translate-x-1/2 rounded-md bg-red-600 px-4 py-2 text-sm text-white shadow-lg">{{ error }}</p>

    <div v-if="renameTarget" class="fixed inset-0 z-50 flex items-center justify-center bg-black/40" @click.self="renameTarget = null">
      <div class="w-96 rounded-lg bg-white p-5 shadow-xl dark:bg-slate-800 dark:text-slate-100">
        <h3 class="mb-3 text-base font-semibold">{{ t("rename") }}</h3>
        <input v-model="renameNewKey" class="w-full rounded-md border border-slate-300 px-3 py-2 text-sm dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100" />
        <div class="mt-4 flex justify-end gap-2">
          <button class="rounded-md border border-slate-300 px-4 py-2 text-sm hover:bg-slate-50 dark:border-slate-600 dark:hover:bg-slate-700" @click="renameTarget = null">{{ t("cancel") }}</button>
          <button class="rounded-md bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700" @click="doRename">{{ t("ok") }}</button>
        </div>
      </div>
    </div>

    <div v-if="showCreateBucket" class="fixed inset-0 z-50 flex items-center justify-center bg-black/40" @click.self="showCreateBucket = false">
      <div class="w-96 rounded-lg bg-white p-5 shadow-xl dark:bg-slate-800 dark:text-slate-100">
        <h3 class="mb-3 text-base font-semibold">{{ t("newBucket") }}</h3>
        <input v-model="newBucketName" class="w-full rounded-md border border-slate-300 px-3 py-2 text-sm dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100" :placeholder="t('bucketName')" />
        <input v-model="newBucketRegion" class="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100" :placeholder="t('region')" />
        <div class="mt-4 flex justify-end gap-2">
          <button class="rounded-md border border-slate-300 px-4 py-2 text-sm hover:bg-slate-50 dark:border-slate-600 dark:hover:bg-slate-700" @click="showCreateBucket = false">{{ t("cancel") }}</button>
          <button class="rounded-md bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700" @click="createBucket">{{ t("create") }}</button>
        </div>
      </div>
    </div>

    <div v-if="ctx" class="fixed inset-0 z-40" @click="closeCtx" @contextmenu.prevent="closeCtx"></div>
    <div
      v-if="ctx"
      class="fixed z-50 w-44 rounded-md border border-slate-200 bg-white py-1 shadow-lg dark:border-slate-600 dark:bg-slate-800"
      :style="{ left: ctx.x + 'px', top: ctx.y + 'px' }"
    >
      <button
        v-for="item in ctxItems"
        :key="item.label"
        class="flex w-full items-center px-3 py-1.5 text-left text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-700"
        :class="item.label === t('delete') ? 'text-red-600 dark:text-red-400' : ''"
        @click="item.run()"
      >{{ item.label }}</button>
    </div>

    <PreviewModal
      v-if="previewTarget"
      :profile="profile"
      :bucket="selectedBucket!"
      :key-name="previewTarget.key"
      :size="previewTarget.size"
      @close="previewTarget = null"
      @download="download(previewTarget!)"
    />

    <ShareModal
      v-if="shareTarget"
      :profile="profile"
      :bucket="selectedBucket!"
      :key-name="shareTarget.key"
      @close="shareTarget = null"
    />
  </div>
</template>
