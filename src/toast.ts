import { reactive } from "vue";

export type ToastType = "success" | "error" | "info";

export interface Toast {
  id: number;
  type: ToastType;
  message: string;
  action?: { label: string; onClick: () => void };
}

export const toasts = reactive<{ items: Toast[] }>({ items: [] });

let seq = 0;

export function pushToast(
  type: ToastType,
  message: string,
  duration = 4000,
  action?: { label: string; onClick: () => void }
) {
  const id = Date.now() + seq++;
  toasts.items.push({ id, type, message, action });
  setTimeout(() => {
    const i = toasts.items.findIndex((x) => x.id === id);
    if (i >= 0) toasts.items.splice(i, 1);
  }, duration);
}
