<script setup lang="ts">
import { ref, onMounted } from "vue";
import { writeText } from "@tauri-apps/plugin-clipboard-manager";
import { api } from "../api";
import { t } from "../i18n";
import type { Profile, PresignResult } from "../types";

const props = defineProps<{
  profile: Profile;
  bucket: string;
  keyName: string;
}>();

const emit = defineEmits<{ close: [] }>();

const expires = ref(3600);
const result = ref<PresignResult | null>(null);
const loading = ref(false);
const error = ref("");
const copied = ref(false);

async function generate() {
  loading.value = true;
  error.value = "";
  try {
    result.value = await api.presign(
      props.profile.id,
      props.bucket,
      props.keyName,
      expires.value,
      "GET"
    );
  } catch (e) {
    error.value = String(e);
  } finally {
    loading.value = false;
  }
}

async function copy() {
  if (!result.value) return;
  try {
    await writeText(result.value.url);
    copied.value = true;
    setTimeout(() => (copied.value = false), 1500);
  } catch (e) {
    error.value = String(e);
  }
}

onMounted(generate);
</script>

<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/40" @click.self="emit('close')">
    <div class="w-[640px] rounded-lg bg-white p-5 shadow-xl dark:bg-slate-800 dark:text-slate-100">
      <div class="mb-4 flex items-center justify-between">
        <h3 class="text-base font-semibold">{{ t("shareTitle") }}</h3>
        <button class="rounded-md border border-slate-300 px-3 py-1 text-sm hover:bg-slate-50 dark:border-slate-600 dark:hover:bg-slate-700" @click="emit('close')">{{ t("close") }}</button>
      </div>

      <div class="mb-3 rounded-md bg-slate-50 px-3 py-2 text-sm dark:bg-slate-700">
        <span class="text-slate-500 dark:text-slate-400">{{ t("object") }}</span> {{ bucket }}/{{ keyName }}
      </div>

      <div class="flex items-center gap-3">
        <label class="text-sm text-slate-600 dark:text-slate-300">{{ t("expirySec") }}</label>
        <input v-model.number="expires" type="number" min="60" class="w-32 rounded-md border border-slate-300 px-3 py-1.5 text-sm dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100" />
        <select v-model.number="expires" class="rounded-md border border-slate-300 px-2 py-1.5 text-sm dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100">
          <option :value="300">{{ t("opt5m") }}</option>
          <option :value="3600">{{ t("opt1h") }}</option>
          <option :value="86400">{{ t("opt24h") }}</option>
          <option :value="604800">{{ t("opt7d") }}</option>
        </select>
        <button class="rounded-md bg-blue-600 px-4 py-1.5 text-sm font-medium text-white hover:bg-blue-700" :disabled="loading" @click="generate">
          {{ loading ? t("generating") : t("generate") }}
        </button>
      </div>

      <p v-if="error" class="mt-3 text-sm text-red-600">{{ error }}</p>

      <div v-if="result" class="mt-4">
        <div class="flex items-center gap-2 rounded-md border border-slate-200 p-2 dark:border-slate-600">
          <input :value="result.url" readonly class="min-w-0 flex-1 bg-transparent text-xs text-slate-700 dark:text-slate-200" />
          <button class="shrink-0 rounded-md bg-slate-100 px-3 py-1.5 text-xs hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600" @click="copy">
            {{ copied ? t("copied") : t("copy") }}
          </button>
        </div>
        <p class="mt-2 text-xs text-slate-500 dark:text-slate-400">
          {{ t("expiresHint", { time: new Date(result.expires_at * 1000).toLocaleString() }) }}
        </p>
      </div>
    </div>
  </div>
</template>
