import { reactive, watch } from "vue";

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
  /** Profile id used to retry/resume a failed transfer. */
  profileId?: string;
  /** True when the transfer can be resumed (single-file upload/download). */
  retryable?: boolean;
  /** Bytes transferred so far (for rate display). */
  bytes: number;
  /** Total bytes of the transfer (for rate display). */
  total: number;
  /** Transfer rate in bytes/second. */
  speed: number;
  time: number;
  /** True when the task was restored after a restart and can be resumed. */
  interrupted?: boolean;
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
  profileId?: string;
  retryable?: boolean;
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
    profileId: t.profileId,
    retryable: t.retryable,
    bytes: 0,
    total: 0,
    speed: 0,
    time: Date.now(),
  });
  return id;
}

export function patchTransfer(id: string, patch: Partial<TransferTask>) {
  const t = transfers.tasks.find((x) => x.id === id);
  if (t) {
    Object.assign(t, patch);
    if (patch.status === "done" || patch.status === "error") {
      speedTrack.delete(id);
      lastWrite.delete(id);
    }
  }
}

const speedTrack = new Map<string, { t: number; b: number; s: number }>();
const lastWrite = new Map<string, number>();

/** Minimum interval between UI updates so the rate display stays steady. */
const UI_INTERVAL = 250;

/** Update a running transfer from backend progress events and compute speed. */
export function patchTransferProgress(
  id: string,
  progress: number,
  bytes: number,
  total: number
) {
  const t = transfers.tasks.find((x) => x.id === id);
  if (!t) return;
  const now = Date.now();
  const prev = speedTrack.get(id);
  let speed = prev?.s ?? 0;
  if (prev && now > prev.t && bytes >= prev.b) {
    const dt = (now - prev.t) / 1000;
    if (dt > 0) {
      const inst = (bytes - prev.b) / dt;
      speed = prev.s > 0 ? inst * 0.4 + prev.s * 0.6 : inst;
    }
  }
  speedTrack.set(id, { t: now, b: bytes, s: speed });
  // Throttle reactive writes; always surface the final 100% event.
  const last = lastWrite.get(id);
  if (last !== undefined && now - last < UI_INTERVAL && progress < 100) return;
  lastWrite.set(id, now);
  Object.assign(t, { progress, bytes, total, speed });
}

export function resetTransferProgress(id: string) {
  speedTrack.delete(id);
  lastWrite.delete(id);
  const t = transfers.tasks.find((x) => x.id === id);
  if (t) {
    t.status = "running";
    t.progress = 0;
    t.bytes = 0;
    t.speed = 0;
    t.error = undefined;
    t.interrupted = false;
  }
}

export function finalizeTransfer(id: string) {
  speedTrack.delete(id);
  lastWrite.delete(id);
}

export function removeTransfer(id: string) {
  speedTrack.delete(id);
  lastWrite.delete(id);
  transfers.tasks = transfers.tasks.filter((x) => x.id !== id);
}

export function clearFinishedTransfers() {
  const running = transfers.tasks.filter((x) => x.status === "running");
  const runningIds = new Set(running.map((x) => x.id));
  for (const key of [...speedTrack.keys()]) {
    if (!runningIds.has(key)) speedTrack.delete(key);
  }
  for (const key of [...lastWrite.keys()]) {
    if (!runningIds.has(key)) lastWrite.delete(key);
  }
  transfers.tasks = running;
}

export function runningTransferCount(): number {
  return transfers.tasks.filter((x) => x.status === "running").length;
}

const STORAGE_KEY = "s3viewer.transfers";

/** Restore transfers persisted before a restart; interrupted ones become resumable. */
function loadTransfers() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const list = JSON.parse(raw);
    if (!Array.isArray(list)) return;
    const now = Date.now();
    const tasks: TransferTask[] = [];
    for (const t of list) {
      if (!t || typeof t !== "object" || typeof t.id !== "string") continue;
      const wasRunning = t.status === "running";
      tasks.push({
        id: t.id,
        type: t.type === "download" ? "download" : "upload",
        name: typeof t.name === "string" ? t.name : "file",
        bucket: typeof t.bucket === "string" ? t.bucket : "",
        key: typeof t.key === "string" ? t.key : "",
        status: wasRunning ? "error" : t.status === "done" ? "done" : "error",
        progress: wasRunning ? 0 : typeof t.progress === "number" ? t.progress : 0,
        error: wasRunning ? undefined : typeof t.error === "string" ? t.error : undefined,
        path: typeof t.path === "string" ? t.path : undefined,
        profileId: typeof t.profileId === "string" ? t.profileId : undefined,
        retryable: t.retryable === true,
        bytes: 0,
        total: typeof t.total === "number" && isFinite(t.total) ? t.total : 0,
        speed: 0,
        time: typeof t.time === "number" ? t.time : now,
        interrupted: wasRunning,
      });
    }
    transfers.tasks = tasks;
  } catch {
    // ignore corrupted storage
  }
}

function saveTransfers() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(transfers.tasks));
  } catch {
    // ignore quota/availability issues
  }
}

loadTransfers();
watch(
  () => transfers.tasks,
  () => saveTransfers(),
  { deep: true }
);
