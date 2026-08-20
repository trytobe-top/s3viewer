import { createApp } from "vue";
import App from "./App.vue";
import { initSettings } from "./settings";
import { initLocale } from "./i18n";
import "./style.css";

initSettings();
initLocale();

createApp(App).mount("#app");
