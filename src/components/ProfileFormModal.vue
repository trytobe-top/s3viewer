<script setup lang="ts">
import { ref, reactive, watch } from "vue";
import { api } from "../api";
import { newId } from "../utils";
import { logSuccess, logError } from "../logs";
import { t } from "../i18n";
import { askConfirm } from "../confirm";
import type { Profile } from "../types";

const props = defineProps<{
  profile: Profile | null;
  mode: "add" | "edit";
}>();

const emit = defineEmits<{
  saved: [];
  deleted: [id: string];
  close: [];
}>();

const form = reactive({
  name: "",
  endpoint: "",
  region: "us-east-1",
  access_key: "",
  secret_key: "",
  path_style: false,
  tls_skip_verify: false,
  ca_cert_pem: "",
});
const saving = ref(false);
const error = ref("");
const deleting = ref(false);
const showSecret = ref(false);

watch(
  () => props.profile,
  (p) => {
    if (p) {
      form.name = p.name;
      form.endpoint = p.endpoint ?? "";
      form.region = p.region;
      form.access_key = p.access_key;
      form.secret_key = p.secret_key;
      form.path_style = p.path_style;
      form.tls_skip_verify = p.tls_skip_verify ?? false;
      form.ca_cert_pem = p.ca_cert_pem ?? "";
    }
  },
  { immediate: true }
);

async function save() {
  error.value = "";
  if (!form.name.trim() || !form.access_key.trim() || !form.secret_key.trim()) {
    error.value = t("requiredError");
    return;
  }
  saving.value = true;
  try {
    const profile: Profile = {
      id: props.profile?.id ?? newId(),
      name: form.name.trim(),
      endpoint: form.endpoint.trim() || null,
      region: form.region.trim() || "us-east-1",
      access_key: form.access_key.trim(),
      secret_key: form.secret_key.trim(),
      path_style: form.path_style,
      tls_skip_verify: form.tls_skip_verify,
      ca_cert_pem: form.ca_cert_pem.trim() || null,
    };
    await api.saveProfile(profile);
    logSuccess("connection", t("logConnSaved", { action: props.mode === "add" ? t("actionAdded") : t("actionEdited"), name: profile.name }));
    emit("saved");
  } catch (e) {
    error.value = String(e);
    logError("connection", t("logConnSaveFailed", { name: form.name, msg: String(e) }));
  } finally {
    saving.value = false;
  }
}

async function del() {
  if (!props.profile) return;
  if (!(await askConfirm(t("confirmDeleteConn", { name: props.profile.name })))) return;
  deleting.value = true;
  try {
    await api.deleteProfile(props.profile.id);
    logSuccess("connection", t("logConnDeleted", { name: props.profile.name }));
    emit("deleted", props.profile.id);
  } catch (e) {
    error.value = String(e);
    logError("connection", t("logConnDeleteFailed", { name: props.profile.name, msg: String(e) }));
  } finally {
    deleting.value = false;
  }
}
</script>

<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/40" @click.self="emit('close')">
    <div class="w-[480px] rounded-lg bg-white p-5 shadow-xl dark:bg-slate-800 dark:text-slate-100">
      <h2 class="mb-4 text-lg font-semibold">
        {{ mode === "add" ? t("newConn") : t("editConnTitle") }}
      </h2>

      <div class="space-y-3">
        <label class="block">
          <span class="mb-1 block text-sm font-medium">{{ t("name") }}</span>
          <input v-model="form.name" class="w-full rounded-md border border-slate-300 px-3 py-2 text-sm dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100" :placeholder="t('placeholderName')" />
        </label>

        <label class="block">
          <span class="mb-1 block text-sm font-medium">{{ t("endpointLabel") }}</span>
          <input v-model="form.endpoint" class="w-full rounded-md border border-slate-300 px-3 py-2 text-sm dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100" :placeholder="t('placeholderEndpoint')" />
        </label>

        <div class="grid grid-cols-2 gap-3">
          <label class="block">
            <span class="mb-1 block text-sm font-medium">{{ t("region") }}</span>
            <input v-model="form.region" class="w-full rounded-md border border-slate-300 px-3 py-2 text-sm dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100" placeholder="us-east-1" />
          </label>
          <label class="flex items-end gap-2 pb-2">
            <input v-model="form.path_style" type="checkbox" class="h-4 w-4" />
            <span class="text-sm">{{ t("pathStyle") }}</span>
          </label>
        </div>

        <label class="block">
          <span class="mb-1 block text-sm font-medium">{{ t("accessKey") }}</span>
          <input v-model="form.access_key" class="w-full rounded-md border border-slate-300 px-3 py-2 text-sm dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100" />
        </label>

        <label class="block">
          <span class="mb-1 block text-sm font-medium">{{ t("secretKey") }}</span>
          <div class="relative">
            <input v-model="form.secret_key" :type="showSecret ? 'text' : 'password'" class="w-full rounded-md border border-slate-300 py-2 pl-3 pr-10 text-sm dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100" />
            <button
              type="button"
              class="absolute right-1 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-700"
              :title="showSecret ? t('hide') : t('show')"
              @click="showSecret = !showSecret"
            >
              <span v-if="!showSecret" class="text-base leading-none">👁</span>
              <span v-else class="text-base leading-none">🙈</span>
            </button>
          </div>
        </label>

        <label class="flex items-center gap-2">
          <input v-model="form.tls_skip_verify" type="checkbox" class="h-4 w-4" />
          <span class="text-sm font-medium">{{ t("skipVerify") }}</span>
        </label>

        <label class="block" v-if="!form.tls_skip_verify">
          <span class="mb-1 block text-sm font-medium">
            {{ t("caCert") }}
          </span>
          <textarea
            v-model="form.ca_cert_pem"
            rows="3"
            class="w-full rounded-md border border-slate-300 px-3 py-2 font-mono text-xs dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100"
            placeholder="-----BEGIN CERTIFICATE-----\n...\n-----END CERTIFICATE-----"
          ></textarea>
        </label>
      </div>

      <p v-if="error" class="mt-3 text-sm text-red-600">{{ error }}</p>

      <div class="mt-5 flex items-center justify-between">
        <button
          v-if="mode === 'edit'"
          class="rounded-md bg-red-600 px-3 py-2 text-sm font-medium text-white hover:bg-red-700 disabled:opacity-50 dark:bg-red-800 dark:hover:bg-red-700"
          :disabled="deleting"
          @click="del"
        >
          {{ deleting ? t("deleting") : t("delete") }}
        </button>
        <div v-else></div>
        <div class="flex gap-2">
          <button class="rounded-md border border-slate-300 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-700" @click="emit('close')">{{ t("cancel") }}</button>
          <button class="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50" :disabled="saving" @click="save">
            {{ saving ? t("saving") : t("save") }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
