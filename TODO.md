# TODO

## 插件系统（运行时动态加载，避免主程序体积膨胀）

背景：预览组件引入重型依赖（如 Monaco Editor ~+10MB）会直接撑大嵌入资源的 exe。
改为通用插件框架，主程序零增量，用户在插件页按需启用。

- [ ] 插件目录约定：`%APPDATA%\com.s3viewer.desktop\plugins\<plugin-id>\`
  - `manifest.json`：`{ id, name, version, entry }`（通用格式，后续可挂 Shiki / 主题包等）
  - Monaco 场景即 `vs/` 目录（AMD loader 形态），运行时注入 `loader.js` + `require(['vs/editor/editor.main'])`
- [ ] Rust 端新增 `plugins.rs`：
  - 列出 / 安装（下载 zip + `zip` crate 解压）/ 卸载
  - 注册自定义协议 `s3v-plugin://` 流式提供插件文件（Windows 上实际为 `http://s3v-plugin.<identifier>/` 子域形式），带路径穿越校验
  - 下载用 reqwest(rustls)，复用现有 tokio/rustls 依赖树
- [ ] 前端"插件"管理面板：可用列表 / 安装 / 启用 / 禁用 / 卸载；启用状态存 settings（localStorage）
- [ ] PreviewModal 文本分支接入插件渲染器：已启用 → 动态加载 Monaco；未安装 → 回退 CodeMirror `<pre>` 兜底
- [ ] 分发方式待定：A. GitHub Release 按需下载（需联网）B. 安装器附带 plugins 目录（离线可用）C. 两者都支持
- [ ] 插件包体积参考：Monaco 全量 min/vs ≈ 35-45MB；精简版（core + 常用语言、无 worker）≈ 5-6MB

## 其他
