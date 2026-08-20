<script setup lang="ts">
import { toasts } from "../toast";
import type { Toast } from "../toast";

function dismiss(id: number) {
  const i = toasts.items.findIndex((x) => x.id === id);
  if (i >= 0) toasts.items.splice(i, 1);
}

function onAction(t: Toast) {
  t.action?.onClick();
  dismiss(t.id);
}
</script>

<template>
  <div class="pointer-events-none fixed bottom-4 left-1/2 z-[70] flex -translate-x-1/2 flex-col items-center gap-2">
    <div
      v-for="toast in toasts.items"
      :key="toast.id"
      class="pointer-events-auto flex max-w-lg items-center gap-3 rounded-lg px-4 py-2.5 text-sm text-white shadow-lg"
      :class="{
        'bg-green-600': toast.type === 'success',
        'bg-red-600': toast.type === 'error',
        'bg-blue-600': toast.type === 'info',
      }"
    >
      <span class="min-w-0">{{ toast.message }}</span>
      <button
        v-if="toast.action"
        class="shrink-0 rounded-md bg-white/20 px-2.5 py-1 text-xs font-semibold text-white ring-1 ring-white/30 transition hover:bg-white/30"
        @click.stop="onAction(toast)"
      >{{ toast.action.label }}</button>
    </div>
  </div>
</template>
