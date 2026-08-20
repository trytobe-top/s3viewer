<script setup lang="ts">
import { open } from "@tauri-apps/plugin-dialog";
import { transfers, removeTransfer, clearFinishedTransfers } from "../transfers";
import { settings, saveSettings } from "../settings";
import { api } from "../api";
import { pushToast } from "../toast";
import { t } from "../i18n";

async function chooseDir() {
  const dir = await open({ directory: true });
  if (dir && typeof dir === "string") {
    settings.downloadDir = dir;
    saveSettings();
  }
}

function clearDir() {
  settings.downloadDir = "";
  saveSettings();
}

async function openPath(path: string) {
  try {
    await api.openPath(path);
  } catch (e) {
    pushToast("error", t("openFailed", { msg: String(e) }));
  }
}

function statusLabel(s: string) {
  if (s === "running") return t("statusRunning");
  if (s === "done") return t("statusDone");
  return t("statusError");
}

function statusPillClass(s: string) {
  if (s === "running") return "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300";
  if (s === "done") return "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300";
  return "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300";
}

function progressClass(s: string) {
  if (s === "error") return "bg-red-500";
  if (s === "done") return "bg-green-500";
  return "bg-blue-500";
}

function formatDate(ts: number) {
  return new Date(ts).toLocaleString();
}

function taskSubline(task: { path?: string; bucket: string; key: string }) {
  if (task.path) return task.path;
  return task.key ? `${task.bucket}/${task.key}` : task.bucket;
}
</script>

<template>
  <div class="flex h-full flex-col bg-white dark:bg-slate-800 dark:text-slate-100">
    <div class="flex items-center gap-2 border-b border-slate-200 px-4 py-2.5 dark:border-slate-700">
      <span class="shrink-0 text-sm font-medium">{{ t("downloadDir") }}</span>
      <span class="min-w-0 flex-1 truncate rounded bg-slate-50 px-2 py-1 font-mono text-xs text-slate-600 dark:bg-slate-900 dark:text-slate-300">
        {{ settings.downloadDir || t("downloadDirNone") }}
      </span>
      <button class="shrink-0 rounded-md bg-blue-600 px-3 py-1.5 text-sm text-white hover:bg-blue-700" @click="chooseDir">{{ t("chooseDir") }}</button>
      <button v-if="settings.downloadDir" class="shrink-0 rounded-md border border-slate-300 px-3 py-1.5 text-sm hover:bg-slate-50 dark:border-slate-600 dark:hover:bg-slate-700" @click="clearDir">{{ t("clearDir") }}</button>
      <button class="shrink-0 rounded-md border border-slate-300 px-3 py-1.5 text-sm hover:bg-slate-50 dark:border-slate-600 dark:hover:bg-slate-700" @click="clearFinishedTransfers">{{ t("clearFinished") }}</button>
    </div>

    <div class="min-h-0 flex-1 overflow-auto">
      <table class="w-full text-sm">
        <thead class="sticky top-0 bg-slate-50 text-left text-xs text-slate-500 dark:bg-slate-700 dark:text-slate-400">
          <tr>
            <th class="px-4 py-2 font-medium">{{ t("name") }}</th>
            <th class="px-3 py-2 font-medium">{{ t("colPath") }}</th>
            <th class="px-3 py-2 font-medium">{{ t("colType") }}</th>
            <th class="px-3 py-2 font-medium">{{ t("colStatus") }}</th>
            <th class="w-44 px-3 py-2 font-medium">{{ t("colProgress") }}</th>
            <th class="w-48 px-3 py-2 font-medium">{{ t("colDate") }}</th>
            <th class="w-28 px-3 py-2 font-medium">{{ t("actions") }}</th>
          </tr>
        </thead>
        <tbody v-if="!transfers.tasks.length">
          <tr><td colspan="7" class="px-4 py-10 text-center text-slate-400">{{ t("noTransfers") }}</td></tr>
        </tbody>
        <tbody v-else>
          <tr v-for="task in transfers.tasks" :key="task.id" class="border-t border-slate-100 dark:border-slate-700">
            <td class="px-4 py-2">
              <div class="flex items-center gap-2">
                <span class="text-base">{{ task.type === "upload" ? "⬆️" : "⬇️" }}</span>
                <span class="max-w-[200px] truncate font-medium">{{ task.name }}</span>
              </div>
              <div v-if="task.status === 'error' && task.error" class="mt-0.5 max-w-[300px] truncate text-xs text-red-500" :title="task.error">{{ task.error }}</div>
            </td>
            <td class="max-w-[240px] truncate px-3 py-2 font-mono text-xs text-slate-500 dark:text-slate-400">{{ taskSubline(task) }}</td>
            <td class="px-3 py-2 text-xs text-slate-500 dark:text-slate-400">{{ task.type === "upload" ? t("upload") : t("download") }}</td>
            <td class="px-3 py-2">
              <span class="rounded px-2 py-0.5 text-xs font-medium" :class="statusPillClass(task.status)">{{ statusLabel(task.status) }}</span>
            </td>
            <td class="px-3 py-2">
              <div class="flex items-center gap-2">
                <div class="h-1.5 flex-1 overflow-hidden rounded bg-slate-100 dark:bg-slate-700">
                  <div
                    class="h-full rounded transition-all"
                    :class="progressClass(task.status)"
                    :style="{ width: (task.status === 'running' ? Math.max(task.progress, 2) : 100) + '%' }"
                  ></div>
                </div>
                <span class="w-9 shrink-0 text-right text-xs tabular-nums text-slate-400">
                  {{ task.status === "running" ? Math.round(task.progress) + "%" : task.status === "error" ? "!" : "100%" }}
                </span>
              </div>
            </td>
            <td class="px-3 py-2 text-xs text-slate-500 dark:text-slate-400">{{ formatDate(task.time) }}</td>
            <td class="px-3 py-2">
              <div class="flex items-center gap-1.5">
                <button
                  v-if="task.status === 'done' && task.path"
                  class="rounded-md bg-blue-600 px-2 py-1 text-xs font-medium text-white hover:bg-blue-700"
                  :title="t('openAction')"
                  @click="openPath(task.path)"
                >{{ t("openAction") }}</button>
                <button class="rounded px-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-700" :title="t('delete')" @click="removeTransfer(task.id)">✕</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
