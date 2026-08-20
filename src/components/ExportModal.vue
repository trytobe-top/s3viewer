<script setup lang="ts">
import { ref, computed } from "vue";
import { save } from "@tauri-apps/plugin-dialog";
import { api } from "../api";
import { t } from "../i18n";
import { pushToast } from "../toast";
import type { Profile } from "../types";

const props = defineProps<{
  profiles: Profile[];
}>();

const emit = defineEmits<{ close: [] }>();

const selected = ref<string[]>([]);
const exporting = ref(false);

const allSelected = computed(
  () =>
    props.profiles.length > 0 &&
    props.profiles.every((p) => selected.value.includes(p.id))
);

function isSelected(id: string) {
  return selected.value.includes(id);
}

function toggle(id: string) {
  if (isSelected(id)) {
    selected.value = selected.value.filter((x) => x !== id);
  } else {
    selected.value = [...selected.value, id];
  }
}

function toggleAll() {
  if (allSelected.value) selected.value = [];
  else selected.value = props.profiles.map((p) => p.id);
}

async function doExport() {
  const chosen = props.profiles.filter((p) => selected.value.includes(p.id));
  if (!chosen.length) {
    pushToast("info", t("noProfileSelected"));
    return;
  }
  const path = await save({
    defaultPath: "s3-profiles.json",
    filters: [{ name: "JSON", extensions: ["json"] }],
  });
  if (!path || typeof path !== "string") return;
  exporting.value = true;
  try {
    await api.writeExportFile(path, buildJson(chosen));
    pushToast("success", t("exportDone", { n: chosen.length, path }));
    emit("close");
  } catch (e) {
    pushToast("error", t("exportFailed", { msg: String(e) }));
  } finally {
    exporting.value = false;
  }
}

function buildJson(chosen: Profile[]): string {
  const data = {
    version: 1,
    exportedAt: new Date().toISOString(),
    profiles: chosen,
  };
  return JSON.stringify(data, null, 2);
}

async function copyToClipboard() {
  const chosen = props.profiles.filter((p) => selected.value.includes(p.id));
  if (!chosen.length) {
    pushToast("info", t("noProfileSelected"));
    return;
  }
  try {
    await navigator.clipboard.writeText(buildJson(chosen));
    pushToast("success", t("configCopied", { n: chosen.length }));
  } catch (e) {
    pushToast("error", t("exportFailed", { msg: String(e) }));
  }
}
</script>

<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/40" @click.self="emit('close')">
    <div class="flex h-[70vh] w-[560px] flex-col rounded-lg bg-white shadow-xl dark:bg-slate-800 dark:text-slate-100">
      <div class="flex items-center justify-between border-b border-slate-200 px-5 py-3 dark:border-slate-700">
        <div class="flex items-center gap-2">
          <span class="text-lg font-semibold">{{ t("exportConfig") }}</span>
          <span class="text-sm text-slate-400">{{ t("total", { n: props.profiles.length }) }}</span>
        </div>
        <button class="rounded-md border border-slate-300 px-3 py-1.5 text-sm hover:bg-slate-50 dark:border-slate-600 dark:hover:bg-slate-700" @click="emit('close')">{{ t("close") }}</button>
      </div>

      <p class="border-b border-slate-200 px-5 py-2 text-xs text-amber-600 dark:border-slate-700 dark:text-amber-400">
        ⚠️ {{ t("exportSecretsHint") }}
      </p>

      <div class="flex items-center gap-2 border-b border-slate-200 px-5 py-2 dark:border-slate-700">
        <input type="checkbox" class="h-4 w-4" :checked="allSelected" @change="toggleAll" />
        <span class="text-sm">{{ t("selectAll") }}</span>
      </div>

      <div class="min-h-0 flex-1 overflow-auto">
        <div v-if="!props.profiles.length" class="py-16 text-center text-sm text-slate-400">{{ t("noConnections") }}</div>
        <label
          v-for="p in props.profiles"
          :key="p.id"
          class="flex cursor-pointer items-center gap-3 border-b border-slate-100 px-5 py-2.5 hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-700/50"
        >
          <input type="checkbox" class="h-4 w-4" :checked="isSelected(p.id)" @change="toggle(p.id)" />
          <span class="min-w-0 flex-1">
            <span class="block truncate text-sm font-medium">{{ p.name }}</span>
            <span class="block truncate text-xs text-slate-400">{{ p.endpoint || "AWS" }} · {{ p.region }}</span>
          </span>
        </label>
      </div>

      <div class="flex items-center justify-end gap-2 border-t border-slate-200 px-5 py-3 dark:border-slate-700">
        <span class="mr-auto text-sm text-slate-400">{{ t("selectedCount", { n: selected.length }) }}</span>
        <button class="rounded-md border border-slate-300 px-4 py-2 text-sm hover:bg-slate-50 dark:border-slate-600 dark:hover:bg-slate-700" @click="copyToClipboard">{{ t("copyConfig") }}</button>
        <button class="rounded-md border border-slate-300 px-4 py-2 text-sm hover:bg-slate-50 dark:border-slate-600 dark:hover:bg-slate-700" @click="emit('close')">{{ t("cancel") }}</button>
        <button class="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50" :disabled="exporting" @click="doExport">
          {{ exporting ? t("exporting") : t("exportButton") }}
        </button>
      </div>
    </div>
  </div>
</template>
