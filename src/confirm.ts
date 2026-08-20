import { reactive } from "vue";

export const confirmState = reactive<{
  show: boolean;
  message: string;
  resolve: ((v: boolean) => void) | null;
}>({
  show: false,
  message: "",
  resolve: null,
});

export function askConfirm(message: string): Promise<boolean> {
  confirmState.message = message;
  confirmState.show = true;
  return new Promise((res) => {
    confirmState.resolve = res;
  });
}

export function resolveConfirm(v: boolean) {
  confirmState.show = false;
  if (confirmState.resolve) {
    confirmState.resolve(v);
    confirmState.resolve = null;
  }
}
