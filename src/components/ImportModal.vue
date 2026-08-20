<script setup lang="ts">
import { ref } from "vue";
import { open } from "@tauri-apps/plugin-dialog";
import { api } from "../api";
import { t } from "../i18n";
import { pushToast } from "../toast";
import { newId } from "../utils";
import type { Profile } from "../types";

const props = defineProps<{
  profiles: Profile[];
}>();

const emit = defineEmits<{ close: []; imported: [] }>();

const pending = ref<Profile[]>([]);
const importing = ref(false);
const error = ref("");

function parseImport(text: string): Profile[] {
  const data = JSON.parse(text);
  const arr = Array.isArray(data) ? data : data?.profiles;
  if (!Array.isArray(arr)) throw new Error("invalid format");
  return arr.map((p) => {
    if (
      !p ||
      typeof p.name !== "string" ||
      typeof p.access_key !== "string" ||
      typeof p.secret_key !== "string"
    ) {
      throw new Error("invalid profile");
    }
    return {
      id: typeof p.id === "string" && p.id ? p.id : newId(),
      name: p.name,
      endpoint: typeof p.endpoint === "string" && p.endpoint ? p.endpoint : null,
      region: typeof p.region === "string" && p.region ? p.region : "us-east-1",
      access_key: p.access_key,
      secret_key: p.secret_key,
      path_style: !!p.path_style,
      tls_skip_verify: !!p.tls_skip_verify,
      ca_cert_pem: typeof p.ca_cert_pem === "string" ? p.ca_cert_pem : null,
    };
  });
}

function applyParsed(list: Profile[]) {
  pending.value = list;
  error.value = "";
  if (!list.length) pushToast("info", t("noProfilesFound"));
}

async function fromFile() {
  const file = await open({
    multiple: false,
    filters: [{ name: "JSON", extensions: ["json", "txt"] }],
  });
  if (!file || typeof file !== "string") return;
  try {
    const text = await api.readTextFile(file);
    applyParsed(parseImport(text));
  } catch (e) {
    error.value = String(e);
    pushToast("error", t("importFailed", { msg: String(e) }));
  }
}

async function fromClipboard() {
  try {
    const text = await navigator.clipboard.readText();
    applyParsed(parseImport(text));
  } catch (e) {
    error.value = String(e);
    pushToast("error", t("importFailed", { msg: String(e) }));
  }
}

function isNew(id: string) {
  return !props.profiles.some((p) => p.id === id);
}

async function doImport() {
  if (!pending.value.length) return;
  importing.value = true;
  try {
    await api.importProfiles(pending.value);
    pushToast("success", t("importDone", { n: pending.value.length }));
    emit("imported");
    emit("close");
  } catch (e) {
    error.value = String(e);
    pushToast("error", t("importFailed", { msg: String(e) }));
  } finally {
    importing.value = false;
  }
}
</script>

<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/40" @click.self="emit('close')">
    <div class="flex h-[70vh] w-[560px] flex-col rounded-lg bg-white shadow-xl dark:bg-slate-800 dark:text-slate-100">
      <div class="flex items-center justify-between border-b border-slate-200 px-5 py-3 dark:border-slate-700">
        <span class="text-lg font-semibold">{{ t("importConfig") }}</span>
        <button class="rounded-md border border-slate-300 px-3 py-1.5 text-sm hover:bg-slate-50 dark:border-slate-600 dark:hover:bg-slate-700" @click="emit('close')">{{ t("close") }}</button>
      </div>

      <div class="flex items-center gap-2 border-b border-slate-200 px-5 py-3 dark:border-slate-700">
        <button class="rounded-md border border-slate-300 px-3 py-1.5 text-sm hover:bg-slate-50 dark:border-slate-600 dark:hover:bg-slate-700" @click="fromFile">📁 {{ t("importFromFile") }}</button>
        <button class="rounded-md border border-slate-300 px-3 py-1.5 text-sm hover:bg-slate-50 dark:border-slate-600 dark:hover:bg-slate-700" @click="fromClipboard">📋 {{ t("importFromClipboard") }}</button>
        <span class="ml-auto text-xs text-slate-400">{{ t("importHint") }}</span>
      </div>

      <p v-if="error" class="border-b border-slate-200 px-5 py-2 text-sm text-red-600 dark:border-slate-700">{{ error }}</p>

      <div class="flex items-center gap-2 border-b border-slate-200 px-5 py-2 dark:border-slate-700">
        <span class="text-sm font-medium">{{ t("importParsed", { n: pending.length }) }}</span>
        <button v-if="pending.length" class="ml-auto text-xs text-slate-400 hover:text-red-500" @click="pending = []">{{ t("clear") }}</button>
      </div>

      <div class="min-h-0 flex-1 overflow-auto">
        <div v-if="!pending.length" class="py-16 text-center text-sm text-slate-400">{{ t("importEmpty") }}</div>
        <div
          v-for="p in pending"
          :key="p.id"
          class="flex items-center gap-3 border-b border-slate-100 px-5 py-2.5 dark:border-slate-700"
        >
          <span class="min-w-0 flex-1">
            <span class="block truncate text-sm font-medium">{{ p.name }}</span>
            <span class="block truncate text-xs text-slate-400">{{ p.endpoint || "AWS" }} · {{ p.region }}</span>
          </span>
          <span
            class="rounded px-2 py-0.5 text-xs font-medium"
            :class="isNew(p.id) ? 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300' : 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300'"
          >{{ isNew(p.id) ? t("importNew") : t("importUpdate") }}</span>
        </div>
      </div>

      <div class="flex items-center justify-end gap-2 border-t border-slate-200 px-5 py-3 dark:border-slate-700">
        <button class="rounded-md border border-slate-300 px-4 py-2 text-sm hover:bg-slate-50 dark:border-slate-600 dark:hover:bg-slate-700" @click="emit('close')">{{ t("cancel") }}</button>
        <button class="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50" :disabled="importing || !pending.length" @click="doImport">
          {{ importing ? t("importing") : t("importButton") }}
        </button>
      </div>
    </div>
  </div>
</template>
