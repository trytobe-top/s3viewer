<script setup lang="ts">
import { onMounted } from "vue";
import { open } from "@tauri-apps/plugin-dialog";
import { settings, saveSettings, applyTheme } from "../settings";
import { t, changeLocale } from "../i18n";
import { openDevTools } from "../devtools";
import { updateState, checkForUpdates, downloadUpdate } from "../update";

onMounted(() => {
  if (!updateState.checked && !updateState.checking) {
    checkForUpdates();
  }
});

function setLanguage(locale: "en" | "zh") {
  changeLocale(locale);
}

function setTheme(theme: "light" | "dark") {
  settings.theme = theme;
  saveSettings();
  applyTheme(theme);
}

async function chooseDir() {
  const dir = await open({ directory: true });
  if (dir && typeof dir === "string") {
    settings.downloadDir = dir;
    saveSettings();
  }
}

function clearDir() {
  settings.downloadDir = "";
  saveSettings();
}
</script>

<template>
  <div class="h-full overflow-auto bg-slate-50 p-6 dark:bg-slate-900 dark:text-slate-100">
    <div class="mx-auto max-w-2xl">
      <h2 class="text-xl font-semibold text-slate-800 dark:text-slate-100">{{ t("settings") }}</h2>
      <p class="mb-6 mt-1 text-sm text-slate-500 dark:text-slate-400">{{ t("settingsHint") }}</p>

      <!-- Appearance -->
      <section class="mb-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 class="mb-4 flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
          <span class="flex h-6 w-6 items-center justify-center rounded-md bg-blue-50 text-sm dark:bg-blue-900/40">🎨</span>
          {{ t("settingsAppearance") }}
        </h3>
        <div class="space-y-4">
          <div>
            <div class="mb-2 text-sm font-medium text-slate-600 dark:text-slate-300">{{ t("name") }}</div>
            <div class="grid grid-cols-2 gap-2">
              <button
                class="rounded-md border px-4 py-2 text-sm"
                :class="settings.locale === 'en' ? 'border-blue-600 bg-blue-50 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300' : 'border-slate-300 hover:bg-slate-50 dark:border-slate-600 dark:hover:bg-slate-700'"
                @click="setLanguage('en')"
              >English</button>
              <button
                class="rounded-md border px-4 py-2 text-sm"
                :class="settings.locale === 'zh' ? 'border-blue-600 bg-blue-50 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300' : 'border-slate-300 hover:bg-slate-50 dark:border-slate-600 dark:hover:bg-slate-700'"
                @click="setLanguage('zh')"
              >中文</button>
            </div>
          </div>
          <div>
            <div class="mb-2 text-sm font-medium text-slate-600 dark:text-slate-300">Theme</div>
            <div class="grid grid-cols-2 gap-2">
              <button
                class="rounded-md border px-4 py-2 text-sm"
                :class="settings.theme === 'light' ? 'border-blue-600 bg-blue-50 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300' : 'border-slate-300 hover:bg-slate-50 dark:border-slate-600 dark:hover:bg-slate-700'"
                @click="setTheme('light')"
              >☀️ Light</button>
              <button
                class="rounded-md border px-4 py-2 text-sm"
                :class="settings.theme === 'dark' ? 'border-blue-600 bg-blue-50 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300' : 'border-slate-300 hover:bg-slate-50 dark:border-slate-600 dark:hover:bg-slate-700'"
                @click="setTheme('dark')"
              >🌙 Dark</button>
            </div>
          </div>
        </div>
      </section>

      <!-- Download -->
      <section class="mb-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 class="mb-4 flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
          <span class="flex h-6 w-6 items-center justify-center rounded-md bg-blue-50 text-sm dark:bg-blue-900/40">⬇️</span>
          {{ t("downloadKind") }}
        </h3>
        <div>
          <div class="mb-2 text-sm font-medium text-slate-600 dark:text-slate-300">{{ t("downloadDir") }}</div>
          <div class="flex items-center gap-2">
            <span class="min-w-0 flex-1 truncate rounded-md border border-slate-300 bg-slate-50 px-2 py-1.5 font-mono text-xs text-slate-600 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-300">
              {{ settings.downloadDir || t("downloadDirNone") }}
            </span>
            <button class="shrink-0 rounded-md bg-blue-600 px-3 py-1.5 text-sm text-white hover:bg-blue-700" @click="chooseDir">{{ t("chooseDir") }}</button>
            <button v-if="settings.downloadDir" class="shrink-0 rounded-md border border-slate-300 px-3 py-1.5 text-sm hover:bg-slate-50 dark:border-slate-600 dark:hover:bg-slate-700" @click="clearDir">{{ t("clearDir") }}</button>
          </div>
        </div>
      </section>

      <!-- Preview -->
      <section class="mb-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 class="mb-4 flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
          <span class="flex h-6 w-6 items-center justify-center rounded-md bg-blue-50 text-sm dark:bg-blue-900/40">👁</span>
          {{ t("previewLimit") }}
        </h3>
        <div class="grid grid-cols-3 gap-3">
          <label class="block">
            <span class="mb-1 block text-xs text-slate-500 dark:text-slate-400">{{ t("previewTextLimit") }}</span>
            <input v-model.number="settings.previewTextLimitMb" type="number" min="0.1" step="0.5" class="w-full rounded-md border border-slate-300 px-3 py-1.5 text-sm dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100" />
          </label>
          <label class="block">
            <span class="mb-1 block text-xs text-slate-500 dark:text-slate-400">{{ t("previewImageLimit") }}</span>
            <input v-model.number="settings.previewImageLimitMb" type="number" min="0.1" step="1" class="w-full rounded-md border border-slate-300 px-3 py-1.5 text-sm dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100" />
          </label>
          <label class="block">
            <span class="mb-1 block text-xs text-slate-500 dark:text-slate-400">{{ t("previewPdfLimit") }}</span>
            <input v-model.number="settings.previewPdfLimitMb" type="number" min="0.1" step="1" class="w-full rounded-md border border-slate-300 px-3 py-1.5 text-sm dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100" />
          </label>
        </div>
      </section>

      <!-- Interface & Developer -->
      <section class="mb-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 class="mb-4 flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
          <span class="flex h-6 w-6 items-center justify-center rounded-md bg-blue-50 text-sm dark:bg-blue-900/40">🛠</span>
          {{ t("settingsInterface") }}
        </h3>
        <div class="space-y-4">
          <label class="flex cursor-pointer items-center gap-2.5 rounded-lg border border-slate-200 px-3 py-2.5 hover:bg-slate-50 dark:border-slate-700 dark:hover:bg-slate-700/50">
            <input v-model="settings.showLogCountBadge" type="checkbox" class="h-4 w-4" @change="saveSettings" />
            <span class="text-sm text-slate-700 dark:text-slate-200">{{ t("showLogCountBadge") }}</span>
          </label>
          <div class="flex items-center gap-3">
            <button class="rounded-md bg-slate-700 px-3 py-1.5 text-sm text-white hover:bg-slate-600 dark:bg-slate-600 dark:hover:bg-slate-500" @click="openDevTools">{{ t("openDevTools") }}</button>
            <label class="flex items-center gap-2 text-sm">
              <input v-model="settings.openDevToolsOnStart" type="checkbox" class="h-4 w-4" @change="saveSettings" />
              <span class="text-slate-600 dark:text-slate-300">{{ t("devToolsOnStart") }}</span>
            </label>
          </div>
        </div>
      </section>

      <!-- Update -->
      <section class="mb-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800">
        <h3 class="mb-4 flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
          <span class="flex h-6 w-6 items-center justify-center rounded-md bg-blue-50 text-sm dark:bg-blue-900/40">🔄</span>
          {{ t("updateTitle") }}
        </h3>
        <div class="space-y-3">
          <div class="text-sm text-slate-600 dark:text-slate-300">
            {{ t("updateCurrentVersion", { version: updateState.current || "-" }) }}
          </div>
          <div v-if="updateState.checking" class="text-sm text-slate-500 dark:text-slate-400">
            {{ t("updateChecking") }}
          </div>
          <div v-else-if="updateState.hasUpdate" class="flex flex-wrap items-center gap-3">
            <span class="text-sm font-medium text-blue-700 dark:text-blue-300">
              {{ t("updateAvailable", { version: updateState.latest }) }}
            </span>
            <button
              class="rounded-md bg-blue-600 px-4 py-1.5 text-sm text-white hover:bg-blue-700"
              @click="downloadUpdate"
            >⬇️ {{ t("updateDownload") }}</button>
          </div>
          <div v-else-if="updateState.checked" class="flex flex-wrap items-center gap-3">
            <span class="text-sm text-slate-500 dark:text-slate-400">✅ {{ t("updateUpToDate") }}</span>
            <button
              class="rounded-md border border-slate-300 px-3 py-1 text-xs text-slate-500 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-400 dark:hover:bg-slate-700"
              @click="checkForUpdates"
            >{{ t("updateRetry") }}</button>
          </div>
          <div v-else-if="updateState.error" class="flex flex-wrap items-center gap-3">
            <span class="text-sm text-slate-500 dark:text-slate-400">{{ t("updateCheckFailed") }}</span>
            <button
              class="rounded-md border border-slate-300 px-3 py-1 text-xs text-slate-500 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-400 dark:hover:bg-slate-700"
              @click="checkForUpdates"
            >{{ t("updateRetry") }}</button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
