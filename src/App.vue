<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { listen } from "@tauri-apps/api/event";
import { api } from "./api";
import { logs } from "./logs";
import { t } from "./i18n";
import { emitBack, emitForward } from "./navbus";
import { patchTransfer, runningTransferCount } from "./transfers";
import { openDevTools } from "./devtools";
import { settings } from "./settings";
import type { Profile } from "./types";
import ProfileView from "./components/ProfileView.vue";
import ProfileFormModal from "./components/ProfileFormModal.vue";
import ConnectionManager from "./components/ConnectionManager.vue";
import SettingsPanel from "./components/SettingsPanel.vue";
import TransfersPanel from "./components/TransfersPanel.vue";
import LogsPanel from "./components/LogsPanel.vue";
import ConfirmDialog from "./components/ConfirmDialog.vue";
import ToastHost from "./components/ToastHost.vue";
import ExportModal from "./components/ExportModal.vue";
import ImportModal from "./components/ImportModal.vue";

type ToolKind = "transfers" | "logs" | "settings";

type Tab =
  | { kind: "profile"; key: string; profile: Profile; initial?: { bucket: string; prefix: string } }
  | { kind: ToolKind; key: string };

const profiles = ref<Profile[]>([]);
const tabs = ref<Tab[]>([]);
const activeTab = ref<string | null>(null);
const showProfileModal = ref(false);
const showConnList = ref(false);
const showManager = ref(false);
const showExport = ref(false);
const showImport = ref(false);
const editingProfile = ref<Profile | null>(null);
const modalMode = ref<"add" | "edit">("add");
const profileError = ref("");

const activeProfile = computed(() => {
  const tab = tabs.value.find((tab) => tab.key === activeTab.value);
  return tab && tab.kind === "profile" ? tab.profile : null;
});

const runningCount = computed(() => runningTransferCount());

async function loadProfiles() {
  try {
    profiles.value = await api.listProfiles();
  } catch (e) {
    profileError.value = String(e);
  }
}

function openToolTab(kind: ToolKind) {
  const existing = tabs.value.find((tab) => tab.kind === kind);
  const key = `tool-${kind}`;
  if (existing) {
    activeTab.value = existing.key;
    return;
  }
  tabs.value.push({ kind, key });
  activeTab.value = key;
}

function openTab(profile: Profile, forceNew = false) {
  if (!forceNew) {
    const existing = tabs.value.find(
      (tab) => tab.kind === "profile" && tab.profile.id === profile.id
    );
    if (existing) {
      activeTab.value = existing.key;
      return;
    }
  }
  const tab: Tab = { kind: "profile", key: newTabKey(), profile };
  tabs.value.push(tab);
  activeTab.value = tab.key;
}

function onOpenNewTab(payload: {
  profile: Profile;
  bucket: string | null;
  prefix: string;
}) {
  const tab: Tab = {
    kind: "profile",
    key: newTabKey(),
    profile: payload.profile,
    initial: payload.bucket
      ? { bucket: payload.bucket, prefix: payload.prefix }
      : undefined,
  };
  tabs.value.push(tab);
  activeTab.value = tab.key;
}

function newTabKey() {
  return "tab-" + Math.random().toString(36).slice(2, 8);
}

function isTabOpen(profileId: string) {
  return tabs.value.some(
    (tab) => tab.kind === "profile" && tab.profile.id === profileId
  );
}

function closeTab(key: string) {
  const idx = tabs.value.findIndex((tab) => tab.key === key);
  if (idx === -1) return;
  tabs.value.splice(idx, 1);
  if (activeTab.value === key) {
    activeTab.value = tabs.value.length
      ? tabs.value[Math.min(idx, tabs.value.length - 1)].key
      : null;
  }
}

function openAdd() {
  editingProfile.value = null;
  modalMode.value = "add";
  showProfileModal.value = true;
}

function openEdit(target?: Profile) {
  const p = target ?? activeProfile.value;
  if (!p) return;
  editingProfile.value = JSON.parse(JSON.stringify(p)) as Profile;
  modalMode.value = "edit";
  showProfileModal.value = true;
  showConnList.value = false;
}

async function onSaved() {
  await loadProfiles();
  showProfileModal.value = false;
}

async function onDeleted(id: string) {
  await loadProfiles();
  tabs.value = tabs.value.filter(
    (tab) => tab.kind !== "profile" || tab.profile.id !== id
  );
  if (activeTab.value) {
    const still = tabs.value.some((tab) => tab.key === activeTab.value);
    if (!still) activeTab.value = tabs.value[0]?.key ?? null;
  }
}

onMounted(async () => {
  loadProfiles();
  window.addEventListener("auxclick", onAuxClick);
  await listen<any>("transfer://progress", (e) => {
    const p = e.payload;
    if (p && p.taskId) {
      patchTransfer(p.taskId, { progress: p.progress ?? 0 });
    }
  });
  if (settings.openDevToolsOnStart) {
    setTimeout(() => openDevTools(), 500);
  }
});

function onAuxClick(e: MouseEvent) {
  if (e.button === 3) {
    e.preventDefault();
    emitBack();
  } else if (e.button === 4) {
    e.preventDefault();
    emitForward();
  }
}
</script>

<template>
  <div class="flex h-full flex-col bg-slate-100 text-slate-800 dark:bg-slate-900 dark:text-slate-100">
    <header class="flex items-center gap-3 border-b border-slate-200 bg-white px-4 py-2 dark:border-slate-700 dark:bg-slate-800">
      <div class="flex items-center gap-2">
        <div class="flex h-7 w-7 items-center justify-center rounded-md bg-blue-600 text-sm font-bold text-white">S3</div>
        <span class="font-semibold">{{ t("appTitle") }}</span>
      </div>
      <button
        class="rounded-md bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700"
        @click="openAdd"
      >
        {{ t("addConnection") }}
      </button>
      <div class="relative">
        <button
          class="rounded-md border border-slate-300 px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-700"
          @click="showConnList = !showConnList"
        >
          {{ t("connections") }} ▾
        </button>
        <div
          v-if="showConnList"
          class="fixed inset-0 z-30"
          @click="showConnList = false"
        ></div>
        <div
          v-if="showConnList"
          class="absolute left-0 top-full z-40 mt-1 max-h-80 w-64 overflow-auto rounded-md border border-slate-200 bg-white py-1 shadow-lg dark:border-slate-600 dark:bg-slate-800"
        >
          <div v-if="!profiles.length" class="px-3 py-2 text-sm text-slate-400">{{ t("noConnections") }}</div>
          <div
            v-for="p in profiles"
            :key="p.id"
            class="group flex cursor-pointer items-center justify-between px-3 py-2 text-sm hover:bg-slate-50 dark:hover:bg-slate-700"
            @click="openTab(p); showConnList = false"
          >
            <span class="truncate font-medium text-slate-700 dark:text-slate-200">{{ p.name }}</span>
            <span class="flex items-center gap-2">
              <span v-if="isTabOpen(p.id)" class="text-xs text-blue-600 dark:text-blue-400">{{ t("open") }}</span>
              <span v-else class="text-xs text-slate-400">{{ t("openAction") }}</span>
              <button
                class="hidden h-5 w-5 items-center justify-center rounded text-slate-400 hover:bg-slate-200 group-hover:flex dark:hover:bg-slate-600"
                :title="t('edit')"
                @click.stop="openEdit(p)"
              >✏️</button>
            </span>
          </div>
          <div
            class="flex cursor-pointer items-center gap-2 border-t border-slate-100 px-3 py-2 text-sm text-blue-600 hover:bg-blue-50 dark:border-slate-700 dark:hover:bg-slate-700"
            @click="showConnList = false; showManager = true"
          >
            <span>☰</span> {{ t("manageAll") }}
          </div>
          <div
            class="flex cursor-pointer items-center gap-2 border-t border-slate-100 px-3 py-2 text-sm text-blue-600 hover:bg-blue-50 dark:border-slate-700 dark:hover:bg-slate-700"
            @click="showConnList = false; showExport = true"
          >
            <span>📤</span> {{ t("exportConfig") }}
          </div>
          <div
            class="flex cursor-pointer items-center gap-2 border-t border-slate-100 px-3 py-2 text-sm text-blue-600 hover:bg-blue-50 dark:border-slate-700 dark:hover:bg-slate-700"
            @click="showConnList = false; showImport = true"
          >
            <span>📥</span> {{ t("importConfig") }}
          </div>
        </div>
      </div>
      <button
        v-if="activeProfile"
        class="rounded-md border border-slate-300 px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-700"
        @click="() => openEdit()"
      >
        {{ t("editConnection") }}
      </button>
      <div class="ml-auto flex items-center gap-2">
        <button
          class="rounded-md border border-slate-300 px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-700"
          @click="openToolTab('transfers')"
        >
          {{ t("transfers") }}
          <span v-if="runningCount" class="ml-1 rounded-full bg-blue-600 px-1.5 text-xs text-white dark:bg-blue-500">{{ runningCount }}</span>
        </button>
        <button
          class="rounded-md border border-slate-300 px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-700"
          @click="openToolTab('logs')"
        >
          {{ t("logs") }}
          <span v-if="settings.showLogCountBadge && logs.entries.length" class="ml-1 rounded-full bg-slate-200 px-1.5 text-xs dark:bg-slate-600">{{ logs.entries.length }}</span>
        </button>
        <button
          class="rounded-md border border-slate-300 px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-700"
          @click="openToolTab('settings')"
        >
          ⚙️ {{ t("settings") }}
        </button>
      </div>
    </header>

    <nav v-if="tabs.length" class="flex items-end gap-1 border-b border-slate-200 bg-slate-100 px-2 pt-1 dark:border-slate-700 dark:bg-slate-900">
      <div
        v-for="tab in tabs"
        :key="tab.key"
        class="group flex max-w-56 cursor-pointer items-center gap-2 rounded-t-md border border-b-0 px-3 py-1.5 text-sm"
        :class="activeTab === tab.key ? 'border-slate-300 bg-white text-slate-900 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100' : 'border-transparent text-slate-500 hover:bg-slate-200/60 dark:hover:bg-slate-800'"
        @click="activeTab = tab.key"
      >
        <template v-if="tab.kind === 'profile'">
          <span class="truncate">{{ tab.profile.name }}</span>
        </template>
        <template v-else>
          <span>{{ tab.kind === "transfers" ? "📥" : tab.kind === "logs" ? "📋" : "⚙️" }}</span>
          <span class="truncate">{{ t(tab.kind) }}</span>
          <span v-if="tab.kind === 'transfers' && runningCount" class="rounded-full bg-blue-600 px-1.5 text-xs text-white dark:bg-blue-500">{{ runningCount }}</span>
          <span v-else-if="tab.kind === 'logs' && settings.showLogCountBadge && logs.entries.length" class="rounded-full bg-slate-200 px-1.5 text-xs dark:bg-slate-600">{{ logs.entries.length }}</span>
        </template>
        <button
          class="flex h-4 w-4 items-center justify-center rounded text-slate-400 hover:bg-slate-300 hover:text-slate-700 dark:hover:bg-slate-600"
          @click.stop="closeTab(tab.key)"
          :title="t('close')"
        >✕</button>
      </div>
    </nav>

    <main class="min-h-0 flex-1">
      <template v-if="tabs.length">
        <div
          v-for="tab in tabs"
          :key="tab.key"
          class="h-full"
          :class="activeTab === tab.key ? '' : 'hidden'"
        >
          <ProfileView
            v-if="tab.kind === 'profile'"
            :profile="tab.profile"
            :profiles="profiles"
            :active="activeTab === tab.key"
            :initial-bucket="tab.initial?.bucket ?? ''"
            :initial-prefix="tab.initial?.prefix ?? ''"
            @refresh-profiles="loadProfiles"
            @edit-profile="openEdit"
            @open-new-tab="onOpenNewTab"
          />
          <TransfersPanel v-else-if="tab.kind === 'transfers'" />
          <LogsPanel v-else-if="tab.kind === 'logs'" />
          <SettingsPanel v-else />
        </div>
      </template>
      <div v-else class="flex h-full flex-col items-center justify-center gap-3 text-slate-400">
        <div class="text-5xl">🗄️</div>
        <div class="text-lg">{{ t("noOpenTab") }}</div>
        <p class="text-sm">{{ t("emptyHint") }}</p>
        <div v-if="profiles.length" class="mt-4 w-72 space-y-2">
          <div
            v-for="p in profiles"
            :key="p.id"
            class="flex cursor-pointer items-center justify-between rounded-md border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-700 hover:border-blue-300 hover:bg-blue-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-blue-500 dark:hover:bg-slate-700"
            @click="openTab(p)"
          >
            <span class="font-medium">{{ p.name }}</span>
            <span class="text-xs text-slate-400">{{ t("openHint") }}</span>
          </div>
        </div>
      </div>
    </main>

    <p v-if="profileError" class="px-4 py-1 text-xs text-red-600">{{ profileError }}</p>

    <ProfileFormModal
      v-if="showProfileModal"
      :profile="editingProfile"
      :mode="modalMode"
      @saved="onSaved"
      @deleted="onDeleted"
      @close="showProfileModal = false"
    />

    <ConnectionManager
      v-if="showManager"
      :profiles="profiles"
      :open-profile-ids="tabs.filter((tab) => tab.kind === 'profile').map((tab) => tab.profile.id)"
      @open="(p) => { showManager = false; openTab(p) }"
      @edit="(p) => { showManager = false; openEdit(p) }"
      @new="() => { showManager = false; openAdd() }"
      @deleted="onDeleted"
      @export="showExport = true"
      @import="showImport = true"
      @close="showManager = false"
    />

    <ExportModal
      v-if="showExport"
      :profiles="profiles"
      @close="showExport = false"
    />

    <ImportModal
      v-if="showImport"
      :profiles="profiles"
      @imported="loadProfiles"
      @close="showImport = false"
    />

    <ToastHost />

    <ConfirmDialog />
  </div>
</template>
