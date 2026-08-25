<script setup lang="ts">
import { ref } from "vue";
import { api } from "../api";
import { logSuccess, logError } from "../logs";
import { t } from "../i18n";
import { askConfirm } from "../confirm";
import type { Profile } from "../types";

const props = defineProps<{
  profiles: Profile[];
  openProfileIds: string[];
}>();

const emit = defineEmits<{
  open: [p: Profile];
  edit: [p: Profile];
  new: [];
  deleted: [id: string];
  export: [];
  import: [];
  close: [];
}>();

const deletingId = ref<string | null>(null);

function isOpen(id: string) {
  return props.openProfileIds.includes(id);
}

async function remove(p: Profile) {
  if (!(await askConfirm(t("confirmDeleteConn", { name: p.name })))) return;
  deletingId.value = p.id;
  try {
    await api.deleteProfile(p.id);
    logSuccess("connection", t("logConnDeleted", { name: p.name }));
    emit("deleted", p.id);
  } catch (e) {
    logError("connection", t("logConnDeleteFailed", { name: p.name, msg: String(e) }));
  } finally {
    deletingId.value = null;
  }
}
</script>

<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/40" @click.self="emit('close')">
    <div class="flex h-[70vh] w-[720px] flex-col rounded-lg bg-white shadow-xl dark:bg-slate-800 dark:text-slate-100">
      <div class="flex items-center justify-between border-b border-slate-200 px-5 py-3 dark:border-slate-700">
        <div class="flex items-center gap-2">
          <span class="text-lg font-semibold">{{ t("managerTitle") }}</span>
          <span class="text-sm text-slate-400">{{ t("total", { n: profiles.length }) }}</span>
        </div>
        <div class="flex shrink-0 items-center gap-2">
          <button
            class="whitespace-nowrap rounded-md border border-slate-300 px-3 py-1.5 text-sm hover:bg-slate-50 dark:border-slate-600 dark:hover:bg-slate-700"
            @click="emit('export')"
          >📤 {{ t("exportShort") }}</button>
          <button
            class="whitespace-nowrap rounded-md border border-slate-300 px-3 py-1.5 text-sm hover:bg-slate-50 dark:border-slate-600 dark:hover:bg-slate-700"
            @click="emit('import')"
          >📥 {{ t("importShort") }}</button>
          <button
            class="whitespace-nowrap rounded-md bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700"
            @click="emit('new')"
          >{{ t("addConnection") }}</button>
          <button class="whitespace-nowrap rounded-md border border-slate-300 px-3 py-1.5 text-sm hover:bg-slate-50 dark:border-slate-600 dark:hover:bg-slate-700" @click="emit('close')">{{ t("close") }}</button>
        </div>
      </div>

      <div class="min-h-0 flex-1 overflow-auto">
        <table class="w-full text-sm">
          <thead class="sticky top-0 bg-slate-50 text-left text-xs text-slate-500 dark:bg-slate-700 dark:text-slate-400">
            <tr>
              <th class="px-5 py-2 font-medium">{{ t("name") }}</th>
              <th class="px-3 py-2 font-medium">{{ t("endpoint") }}</th>
              <th class="px-3 py-2 font-medium">{{ t("region") }}</th>
              <th class="px-3 py-2 font-medium">{{ t("status") }}</th>
              <th class="px-3 py-2 font-medium">{{ t("actions") }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="!profiles.length">
              <td colspan="5" class="px-5 py-10 text-center text-slate-400">{{ t("noConnections") }}</td>
            </tr>
            <tr v-for="p in profiles" :key="p.id" class="border-t border-slate-100 hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-700/50">
              <td class="px-5 py-2.5 font-medium text-slate-800 dark:text-slate-100">{{ p.name }}</td>
              <td class="max-w-40 truncate px-3 py-2.5 text-slate-500">{{ p.endpoint || "AWS" }}</td>
              <td class="px-3 py-2.5 text-slate-500">{{ p.region }}</td>
              <td class="px-3 py-2.5">
                <span v-if="isOpen(p.id)" class="text-xs text-blue-600 dark:text-blue-400">{{ t("open") }}</span>
                <span v-else class="text-xs text-slate-400">{{ t("notOpen") }}</span>
              </td>
              <td class="px-3 py-2.5">
                <div class="flex items-center gap-1.5 text-xs">
                  <button class="rounded border border-slate-300 px-2 py-0.5 hover:bg-slate-100 dark:border-slate-600 dark:hover:bg-slate-700" @click="emit('open', p)">{{ t("openAction") }}</button>
                  <button class="rounded border border-slate-300 px-2 py-0.5 hover:bg-slate-100 dark:border-slate-600 dark:hover:bg-slate-700" @click="emit('edit', p)">{{ t("edit") }}</button>
                  <button class="rounded border border-red-200 px-2 py-0.5 text-red-500/90 hover:bg-red-50 disabled:opacity-50 dark:border-red-900/70 dark:text-red-400/80 dark:hover:bg-red-950/30" :disabled="deletingId === p.id" @click="remove(p)">
                    {{ deletingId === p.id ? t("deleting") : t("delete") }}
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
