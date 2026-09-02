# TODO

<!-- ===== English ===== -->

## Plugin system (runtime dynamic loading, avoiding main binary bloat) ✅ v1 implemented

Background: heavy preview dependencies (e.g. Monaco Editor ~+10MB) would directly bloat the embedded resources of the exe.
Refactored into a generic plugin framework - the main binary gains zero extra size (dist only +0.04MB host code), users enable plugins on demand in the plugin page.

### Implemented
- [x] Plugin directory convention: `%APPDATA%\com.s3viewer.desktop\plugins\<plugin-id>\`, `manifest.json` = `{ id, name, version, description, entry, module?, homepage? }`
- [x] Rust side `plugins.rs`: list / install (folder or ZIP, unzipped with the `zip` crate, auto-detects a unique subdir) / uninstall; id whitelist validation
- [x] Custom protocol `s3v-plugin://` (actually `http://s3v-plugin.localhost/` on Windows) streaming plugin files: MIME by extension, CORS `*`, path traversal protection (canonicalize + starts_with)
- [x] Frontend plugin management panel (🧩 Plugins tab): install (ZIP / folder) / enable / disable / uninstall / open plugin dir; enabled state stored in settings (localStorage)
- [x] Plugin host API: `window.__s3viewer.register({ id, name, version, canPreview(info), render(container, ctx) })`; ctx provides `baseUrl / fetchObject / fetchText / dark` etc.
- [x] PreviewModal integration: for non-image/PDF files, query plugins first (`canPreview`); if matched, render into the plugin container; on failure fall back to built-in CodeMirror / cannot-preview
- [x] Plugin build script `plugins/build.mjs` (`node plugins/build.mjs`): copy monaco `min/vs` + bundle cad-simple-viewer with esbuild

### Launch plugins
- [x] **monaco-editor**: AMD loader, multi-language highlighting / line numbers / folding / Ctrl+F; worker via blob+importScripts to bypass CORS; 23.3MB
- [x] **cad-viewer**: DXF preview (`AcApDocManager` + `useMainThreadDraw`, wheel zoom / middle-button pan), esbuild ESM bundle 3.9MB
- [x] **3d-viewer**: STL / STEP 3D preview (three.js + STLLoader + occt-import-js WASM), left-drag rotate / wheel zoom / middle-drag pan; entry 0.82MB + wasm 7.25MB
- [x] **office-viewer**: Word / Excel / PPT / CSV combined preview (docx-preview + SheetJS + pptx-renderer), supports .docx / .xlsx / .xls / .pptx / .csv, multi-Sheet switching, CSV auto UTF-8/GBK detection; entry 1.4MB
- [x] Plugin description i18n: `description` defaults to English, `description_zh` for Chinese, shown per UI language
- [x] In-preview editing: "Edit" button in the preview modal, plugin handle supports `setEditable`/`getContent` (monaco, built-in CodeMirror editable), save via `save_object` PUT back to S3 and refresh the list
- [x] Online plugin registry: "Available plugins" section on the plugin page fetches `*-<version>.zip` assets from GitHub Releases (`trytobe-top/s3viewer`), supports search / install / installed badge / update; `download_plugin` downloads-and-installs (reqwest + rustls)
- [ ] Release convention: upload `plugins/dist/*.zip` (e.g. `monaco-editor-0.56.0.zip`) as assets to the GitHub Release so the plugin page can find them

### TODO
- [ ] Distribution: A. on-demand download from GitHub Release (needs network) B. installer bundles a plugins directory C. both (currently local install)
- [ ] cad-viewer: DWG support needs `@mlightcad/libredwg-converter` (GPL, ~13MB worker+wasm, cross-origin worker needs blob wrapping)
- [ ] Plugin page "available plugins" online list (registry) with version update detection

## Other

<!-- ===== 中文 ===== -->

## 插件系统（运行时动态加载，避免主程序体积膨胀）✅ v1 已实现

背景：预览组件引入重型依赖（如 Monaco Editor ~+10MB）会直接撑大嵌入资源的 exe。
改为通用插件框架，主程序零增量（dist 仅 +0.04MB 宿主代码），用户在插件页按需启用。

### 已实现
- [x] 插件目录约定：`%APPDATA%\com.s3viewer.desktop\plugins\<plugin-id>\`，`manifest.json` = `{ id, name, version, description, entry, module?, homepage? }`
- [x] Rust 端 `plugins.rs`：列出 / 安装（文件夹或 ZIP，`zip` crate 解压，自动识别唯一子目录）/ 卸载；id 白名单校验
- [x] 自定义协议 `s3v-plugin://`（Windows 实际 `http://s3v-plugin.localhost/`）流式提供插件文件：MIME 按扩展名、CORS `*`、路径穿越防护（canonicalize + starts_with）
- [x] 前端插件管理面板（🧩 插件 tab）：安装（ZIP / 文件夹）/ 启用 / 禁用 / 卸载 / 打开插件目录；启用状态存 settings（localStorage）
- [x] 插件宿主 API：`window.__s3viewer.register({ id, name, version, canPreview(info), render(container, ctx) })`；ctx 提供 `baseUrl / fetchObject / fetchText / dark` 等
- [x] PreviewModal 集成：非图片/PDF 时先询问插件（`canPreview`），命中则渲染进插件容器，失败回退内置 CodeMirror / 无法预览
- [x] 插件构建脚本 `plugins/build.mjs`（`node plugins/build.mjs`）：复制 monaco `min/vs` + esbuild 打包 cad-simple-viewer

### 首发插件
- [x] **monaco-editor**：AMD loader 加载，多语言高亮 / 行号 / 折叠 / Ctrl+F；worker 走 blob+importScripts 绕过跨域限制；体积 23.3MB
- [x] **cad-viewer**：DXF 预览（`AcApDocManager` + `useMainThreadDraw`，滚轮缩放 / 中键平移），esbuild ESM 打包 3.9MB
- [x] **3d-viewer**：STL / STEP 三维预览（three.js + STLLoader + occt-import-js WASM），左键旋转 / 滚轮缩放 / 中键平移；entry 0.82MB + wasm 7.25MB
- [x] **office-viewer**：Word / Excel / PPT / CSV 合并预览（docx-preview + SheetJS + pptx-renderer），支持 .docx / .xlsx / .xls / .pptx / .csv，含多 Sheet 切换、CSV 自动 UTF-8/GBK 识别；entry 1.4MB
- [x] 插件描述多语言：`description` 默认英文，`description_zh` 为中文，按界面语言显示
- [x] 预览内编辑：预览弹窗加「编辑」按钮，插件 handle 支持 `setEditable`/`getContent`（monaco、内置 CodeMirror 可编辑），保存走 `save_object` PUT 回 S3 并刷新列表
- [x] 在线插件仓库：插件页「可用插件」区从 GitHub Releases（`trytobe-top/s3viewer`）拉取 `*-<version>.zip` 资产，支持搜索 / 安装 / 已装标识 / 更新；`download_plugin` 下载即装（reqwest + rustls）
- [ ] 发布约定：把 `plugins/dist/*.zip`（如 `monaco-editor-0.56.0.zip`）作为资产上传到 GitHub Release，插件页即可检索到

### 待办
- [ ] 分发方式：A. GitHub Release 按需下载（需联网）B. 安装器附带 plugins 目录 C. 两者都支持（当前为本地安装）
- [ ] cad-viewer：DWG 支持需 `@mlightcad/libredwg-converter`（GPL，~13MB worker+wasm，跨域 worker 需 blob 包装）
- [ ] 插件页"可用插件"在线列表（registry）与版本更新检测

## 其他
