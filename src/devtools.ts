import { invoke } from "@tauri-apps/api/core";

export async function openDevTools() {
  try {
    await invoke("open_devtools");
  } catch (e) {
    console.error("openDevTools failed:", e);
  }
}
