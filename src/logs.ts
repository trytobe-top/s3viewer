import { reactive } from "vue";

export type LogLevel = "error" | "info" | "success";

export interface LogEntry {
  id: number;
  time: string;
  level: LogLevel;
  source: string;
  message: string;
}

interface LogState {
  entries: LogEntry[];
}

export const logs = reactive<LogState>({ entries: [] });

let nextId = 1;

function push(level: LogLevel, source: string, message: string) {
  logs.entries.unshift({
    id: nextId++,
    time: new Date().toLocaleString(),
    level,
    source,
    message,
  });
  if (logs.entries.length > 500) logs.entries.pop();
}

export function logError(source: string, message: string) {
  push("error", source, message);
}

export function logInfo(source: string, message: string) {
  push("info", source, message);
}

export function logSuccess(source: string, message: string) {
  push("success", source, message);
}

export function clearLogs() {
  logs.entries.splice(0);
}
