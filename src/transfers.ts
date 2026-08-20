import { reactive } from "vue";

export type TransferType = "upload" | "download";
export type TransferStatus = "running" | "done" | "error";

export interface TransferTask {
  id: string;
  type: TransferType;
  name: string;
  bucket: string;
  key: string;
  status: TransferStatus;
  progress: number;
  error?: string;
  /** Local path of the downloaded file/folder (downloads only). */
  path?: string;
  time: number;
}

interface TransfersState {
  tasks: TransferTask[];
}

export const transfers = reactive<TransfersState>({ tasks: [] });

let seq = 0;

export function addTransfer(t: {
  type: TransferType;
  name: string;
  bucket: string;
  key: string;
  path?: string;
}): string {
  const id = "t" + Date.now().toString(36) + (seq++).toString(36);
  transfers.tasks.unshift({
    id,
    type: t.type,
    name: t.name,
    bucket: t.bucket,
    key: t.key,
    status: "running",
    progress: 0,
    path: t.path,
    time: Date.now(),
  });
  return id;
}

export function patchTransfer(id: string, patch: Partial<TransferTask>) {
  const t = transfers.tasks.find((x) => x.id === id);
  if (t) Object.assign(t, patch);
}

export function removeTransfer(id: string) {
  transfers.tasks = transfers.tasks.filter((x) => x.id !== id);
}

export function clearFinishedTransfers() {
  transfers.tasks = transfers.tasks.filter((x) => x.status === "running");
}

export function runningTransferCount(): number {
  return transfers.tasks.filter((x) => x.status === "running").length;
}
