<script setup lang="ts">
import { onMounted, ref } from "vue";
import { open } from "@tauri-apps/plugin-dialog";
import { api } from "../api";
import { t } from "../i18n";
import { pushToast } from "../toast";
import { logError } from "../logs";
import { settings } from "../settings";
import {
  plugins,
  refreshPlugins,
  isPluginEnabled,
  setPluginEnabled,
  unloadPlugin,
} from "../plugins";
import type { PluginInfo, RemotePlugin } from "../types";

const busy = ref(false);
const remote = ref<RemotePlugin[]>([]);
const remoteLoading = ref(false);
const remoteError = ref("");
const remoteQuery = ref("");
const installingUrl = ref("");

function pluginDesc(p: PluginInfo): string {
  if (settings.locale === "zh" && p.description_zh) {
    return p.description_zh;
  }
  return p.description;
}

function formatSize(n: number): string {
  if (n >= 1024 * 1024) return (n / 1024 / 1024).toFixed(1) + " MB";
  if (n >= 1024) return (n / 1024).toFixed(0) + " KB";
  return n + " B";
}

function installedInfo(id: string): PluginInfo | undefined {
  return plugins.installed.find((p) => p.id === id);
}

const filteredRemote = () => {
  const q = remoteQuery.value.trim().toLowerCase();
  if (!q) return remote.value;
  return remote.value.filter(
    (p) => p.id.toLowerCase().includes(q) || p.version.toLowerCase().includes(q)
  );
};

async function loadRemote() {
  remoteLoading.value = true;
  remoteError.value = "";
  try {
    remote.value = await api.listRemotePlugins();
  } catch (e) {
    remoteError.value = String(e);
    remote.value = [];
  } finally {
    remoteLoading.value = false;
  }
}

async function installRemote(p: RemotePlugin) {
  installingUrl.value = p.url;
  try {
    const info = await api.downloadPlugin(p.url);
    await refreshPlugins();
    await loadRemote();
    pushToast("success", t("pluginInstalled", { name: info.name }));
  } catch (e) {
    pushToast("error", t("pluginInstallFailed", { msg: String(e) }));
  } finally {
    installingUrl.value = "";
  }
}

onMounted(() => {
  refreshPlugins();
  loadRemote();
});

async function doInstall(src: string) {
  busy.value = true;
  try {
    const info = await api.installPlugin(src);
    await refreshPlugins();
    pushToast("success", t("pluginInstalled", { name: info.name }));
  } catch (e) {
    pushToast("error", t("pluginInstallFailed", { msg: String(e) }));
  } finally {
    busy.value = false;
  }
}

async function installFromZip() {
  const file = await open({
    multiple: false,
    directory: false,
    filters: [{ name: "Plugin ZIP", extensions: ["zip"] }],
  });
  if (!file || typeof file !== "string") return;
  await doInstall(file);
}

async function installFromDir() {
  const file = await open({ multiple: false, directory: true });
  if (!file || typeof file !== "string") return;
  await doInstall(file);
}

async function uninstall(id: string) {
  try {
    await api.uninstallPlugin(id);
    unloadPlugin(id);
    await refreshPlugins();
    pushToast("success", t("pluginUninstalled"));
  } catch (e) {
    pushToast("error", String(e));
  }
}

async function openDir() {
  try {
    const dir = await api.pluginDir();
    await api.openPath(dir);
  } catch (e) {
    logError("plugins", String(e));
  }
}

function onToggle(id: string, on: boolean) {
  setPluginEnabled(id, on);
}
</script>

<template>
  <div class="h-full overflow-auto bg-slate-100 p-6 dark:bg-slate-900">
    <div class="mx-auto max-w-3xl space-y-4">
      <div class="flex items-center justify-between">
        <h1 class="text-lg font-semibold">🧩 {{ t("plugins") }}</h1>
        <div class="flex items-center gap-2">
          <button
            class="rounded-md border border-slate-300 px-3 py-1.5 text-sm text-slate-700 hover:bg-white dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-700"
            @click="openDir"
          >{{ t("pluginOpenDir") }}</button>
          <button
            class="rounded-md border border-slate-300 px-3 py-1.5 text-sm text-slate-700 hover:bg-white dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-700"
            :disabled="busy"
            @click="installFromDir"
          >{{ t("pluginInstallDir") }}</button>
          <button
            class="rounded-md bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50"
            :disabled="busy"
            @click="installFromZip"
          >{{ t("pluginInstallZip") }}</button>
        </div>
      </div>

      <div
        v-for="p in plugins.installed"
        :key="p.id"
        class="flex items-start justify-between gap-4 rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800"
      >
        <div class="min-w-0">
          <div class="flex items-center gap-2">
            <span class="font-medium">{{ p.name }}</span>
            <span class="rounded bg-slate-100 px-1.5 py-0.5 text-xs text-slate-500 dark:bg-slate-700 dark:text-slate-300">{{ p.version }}</span>
          </div>
          <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">{{ pluginDesc(p) }}</p>
          <a
            v-if="p.homepage"
            :href="p.homepage"
            class="mt-1 inline-block text-xs text-blue-600 hover:underline dark:text-blue-400"
            target="_blank"
            rel="noreferrer"
          >{{ p.homepage }}</a>
        </div>
        <div class="flex shrink-0 items-center gap-3">
          <label class="flex cursor-pointer items-center gap-2 text-sm">
            <input
              type="checkbox"
              class="h-4 w-4 accent-blue-600"
              :checked="isPluginEnabled(p.id)"
              @change="onToggle(p.id, ($event.target as HTMLInputElement).checked)"
            />
            {{ t("pluginEnabled") }}
          </label>
          <button
            class="rounded-md border border-red-200 px-2.5 py-1 text-sm text-red-600 hover:bg-red-50 dark:border-red-800 dark:text-red-400 dark:hover:bg-red-900/30"
            @click="uninstall(p.id)"
          >{{ t("pluginUninstall") }}</button>
        </div>
      </div>

      <div
        v-if="!plugins.installed.length"
        class="rounded-lg border border-dashed border-slate-300 p-8 text-center text-slate-400 dark:border-slate-600"
      >
        <div class="text-4xl">🧩</div>
        <p class="mt-2">{{ t("pluginEmpty") }}</p>
        <p class="mt-1 text-xs">{{ t("pluginEmptyHint") }}</p>
      </div>

      <section class="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800">
        <div class="flex items-center justify-between gap-2">
          <h2 class="text-sm font-semibold">🌐 {{ t("availablePlugins") }}</h2>
          <div class="flex items-center gap-2">
            <input
              v-model="remoteQuery"
              type="text"
              class="rounded-md border border-slate-300 px-3 py-1.5 text-sm outline-none focus:border-blue-400 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-100"
              :placeholder="t('pluginSearch')"
            />
            <button
              class="rounded-md border border-slate-300 px-3 py-1.5 text-sm text-slate-700 hover:bg-white dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-700"
              :disabled="remoteLoading"
              @click="loadRemote"
            >{{ t("pluginRefresh") }}</button>
          </div>
        </div>

        <div v-if="remoteLoading" class="mt-3 text-sm text-slate-400">{{ t("loading") }}</div>
        <div v-else-if="remoteError" class="mt-3 text-sm text-red-600">{{ t("pluginRemoteFailed", { msg: remoteError }) }}</div>

        <div v-else-if="!filteredRemote().length" class="mt-3 text-sm text-slate-400">{{ t("pluginRemoteEmpty") }}</div>

        <div v-else class="mt-3 space-y-2">
          <div
            v-for="p in filteredRemote()"
            :key="p.id"
            class="flex items-center justify-between gap-3 rounded-md border border-slate-100 px-3 py-2 dark:border-slate-700"
          >
            <div class="min-w-0">
              <div class="flex items-center gap-2">
                <span class="font-medium">{{ p.id }}</span>
                <span class="rounded bg-slate-100 px-1.5 py-0.5 text-xs text-slate-500 dark:bg-slate-700 dark:text-slate-300">{{ p.version }}</span>
                <span class="text-xs text-slate-400">{{ formatSize(p.size) }}</span>
                <span class="text-xs text-slate-400">· {{ p.tag }}</span>
              </div>
            </div>
            <div class="shrink-0">
              <template v-if="installedInfo(p.id)">
                <span v-if="installedInfo(p.id)!.version === p.version" class="text-xs text-green-600 dark:text-green-400">{{ t("pluginInstalledBadge") }}</span>
                <button
                  v-else
                  class="rounded-md border border-blue-300 px-2.5 py-1 text-xs text-blue-700 hover:bg-blue-50 dark:border-blue-500 dark:text-blue-300 dark:hover:bg-blue-900/30"
                  :disabled="installingUrl === p.url"
                  @click="installRemote(p)"
                >{{ t("pluginUpdate") }}</button>
              </template>
              <button
                v-else
                class="rounded-md bg-blue-600 px-2.5 py-1 text-xs font-medium text-white hover:bg-blue-700 disabled:opacity-50"
                :disabled="installingUrl === p.url"
                @click="installRemote(p)"
              >{{ installingUrl === p.url ? t("pluginInstalling") : t("pluginInstall") }}</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
