import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  clearScreen: false,
  // 防止 Vite 预打包 pdfjs-dist 产生缓存副本，导致页面里出现两份 pdf.js
  // （多实例会触发 "Cannot read private member #pagesNumber" 错误）。
  optimizeDeps: {
    exclude: ["pdfjs-dist"],
  },
  server: {
    port: 1420,
    strictPort: true,
    watch: {
      ignored: ["**/src-tauri/**"],
    },
  },
});
