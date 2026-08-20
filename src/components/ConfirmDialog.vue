<script setup lang="ts">
import { confirmState, resolveConfirm } from "../confirm";
import { t } from "../i18n";
</script>

<template>
  <div v-if="confirmState.show" class="fixed inset-0 z-[60] flex items-center justify-center bg-black/40" @click.self="resolveConfirm(false)">
    <div class="w-[400px] rounded-lg bg-white p-5 shadow-xl dark:bg-slate-800 dark:text-slate-100">
      <h3 class="mb-3 text-base font-semibold">{{ t("confirmTitle") }}</h3>
      <p class="break-words text-sm text-slate-700 dark:text-slate-300">{{ confirmState.message }}</p>
      <div class="mt-5 flex justify-end gap-2">
        <button class="rounded-md border border-slate-300 px-4 py-2 text-sm hover:bg-slate-50 dark:border-slate-600 dark:hover:bg-slate-700" @click="resolveConfirm(false)">{{ t("cancel") }}</button>
        <button class="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 dark:bg-red-800 dark:hover:bg-red-700" @click="resolveConfirm(true)">{{ t("ok") }}</button>
      </div>
    </div>
  </div>
</template>
