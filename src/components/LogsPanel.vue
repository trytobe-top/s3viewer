<script setup lang="ts">
import { logs, clearLogs } from "../logs";
import { t } from "../i18n";

function levelLabel(l: string) {
  if (l === "error") return t("failed");
  if (l === "success") return t("success");
  return t("info");
}

function levelClass(l: string) {
  if (l === "error") return "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300";
  if (l === "success") return "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300";
  return "bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300";
}
</script>

<template>
  <div class="flex h-full flex-col bg-white dark:bg-slate-800 dark:text-slate-100">
    <div class="flex items-center justify-between border-b border-slate-200 px-4 py-2.5 dark:border-slate-700">
      <div class="flex items-center gap-2">
        <span class="text-sm font-semibold">{{ t("logTitle") }}</span>
        <span class="text-xs text-slate-400">{{ t("logCount", { n: logs.entries.length }) }}</span>
      </div>
      <button class="rounded-md border border-slate-300 px-3 py-1.5 text-sm hover:bg-slate-50 dark:border-slate-600 dark:hover:bg-slate-700" @click="clearLogs">{{ t("clear") }}</button>
    </div>

    <div class="min-h-0 flex-1 overflow-auto">
      <table class="w-full text-sm">
        <thead class="sticky top-0 bg-slate-50 text-left text-xs text-slate-500 dark:bg-slate-700 dark:text-slate-400">
          <tr>
            <th class="w-48 px-4 py-2 font-medium">{{ t("colDate") }}</th>
            <th class="w-24 px-3 py-2 font-medium">{{ t("colLevel") }}</th>
            <th class="w-28 px-3 py-2 font-medium">{{ t("colSource") }}</th>
            <th class="px-3 py-2 font-medium">{{ t("colOperation") }}</th>
          </tr>
        </thead>
        <tbody v-if="!logs.entries.length">
          <tr><td colspan="4" class="px-4 py-10 text-center text-slate-400">{{ t("noLogs") }}</td></tr>
        </tbody>
        <tbody v-else>
          <tr v-for="log in logs.entries" :key="log.id" class="border-t border-slate-100 dark:border-slate-700">
            <td class="px-4 py-2 font-mono text-xs text-slate-500 dark:text-slate-400">{{ log.time }}</td>
            <td class="px-3 py-2">
              <span class="rounded px-1.5 py-0.5 text-xs font-medium" :class="levelClass(log.level)">{{ levelLabel(log.level) }}</span>
            </td>
            <td class="px-3 py-2 text-xs text-slate-500 dark:text-slate-400">{{ t("src_" + log.source) }}</td>
            <td class="px-3 py-2 break-words text-slate-700 dark:text-slate-200">{{ log.message }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
