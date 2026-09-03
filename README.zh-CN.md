# S3 Viewer（中文说明）

[English](README.md)

基于 [Tauri 2](https://tauri.app/) + [Vue 3](https://vuejs.org/) + [TypeScript](https://www.typescriptlang.org/) 构建的跨平台桌面应用，用于浏览和管理 S3 兼容的对象存储。

支持 AWS S3、MinIO、腾讯云 COS、阿里云 OSS（S3 兼容模式）、Cloudflare R2 等一切 S3 兼容后端。

![首页](screenshots/entry.png)

## 功能特性

- **多连接管理** — 支持添加 / 编辑 / 删除任意多个 S3 兼容连接，可自定义 Endpoint、Region、Path-style 寻址与 TLS 选项
- **多标签浏览** — 同时打开多个连接，各自独立标签页
- **Bucket 管理** — 列出、创建、删除 Bucket
- **文件管理器式浏览** — 左侧 Bucket 侧边栏、面包屑导航、前进 / 后退历史（支持鼠标侧键）、`s3://` 地址栏
- **搜索** — 默认只搜索**当前目录层级**（浅搜索）；勾选「深度搜索」后递归搜索所有子目录
- **上传** — 多文件上传、**整文件夹上传**（递归），或直接把文件 / 文件夹拖入窗口；每个任务独立进度
- **下载** — 单文件、整个文件夹（递归）、多选批量下载
- **预览** — 图片、文本、PDF（基于 pdf.js），大小限制可配置
- **分享** — 生成预签名 URL（GET / PUT），有效期 5 分钟至 7 天可选
- **对象操作** — 重命名、删除（文件夹递归删除）、新建文件夹
- **传输面板** — 所有上传 / 下载任务的实时进度
- **操作日志** — 记录每一步操作，可选在按钮上显示数量角标
- **配置导入 / 导出** — 以 JSON（文件或剪贴板）分享连接配置
- **安全** — Windows 上凭证使用 DPAPI 加密存储；支持信任自签 CA 或跳过 TLS 校验，适配内网 / 私有化部署
- **多语言与主题** — English / 简体中文，浅色 / 深色主题

## 截图

新建连接 — 支持自定义 Endpoint（MinIO / 自建）、Path-style 寻址、TLS 选项：

![新建连接](screenshots/create_bucket.png)

Bucket 浏览 — 搜索、上传 / 下载与对象操作：

![浏览](screenshots/example.png)

## 技术栈

| 层级 | 技术 |
| --- | --- |
| 桌面外壳 | Tauri 2 (Rust) |
| 前端 | Vue 3 + Vite + Tailwind CSS 4 + TypeScript |
| S3 客户端 | AWS SDK for Rust (`aws-sdk-s3`) |
| TLS | rustls（支持自定义 CA / 跳过校验） |
| PDF 渲染 | pdfjs-dist |

## 项目结构

```
.
├── src/                  # Vue 3 前端
│   ├── components/       # UI 组件（浏览器、弹窗、面板）
│   ├── api.ts            # Tauri 命令的封装
│   ├── i18n.ts           # 中英文翻译
│   ├── settings.ts       # 应用设置（localStorage 持久化）
│   └── transfers.ts      # 传输任务状态
├── src-tauri/            # Tauri 2 后端（Rust）
│   ├── src/s3.rs         # S3 操作（AWS SDK）
│   ├── src/lib.rs        # Tauri 命令处理
│   └── src/config.rs     # 连接配置存储（Windows 下 DPAPI 加密）
└── screenshots/          # 应用截图
```

## 环境要求

- [Node.js](https://nodejs.org/) 20+，包管理器使用 [pnpm](https://pnpm.io/)
- [Rust](https://www.rust-lang.org/) stable 工具链
- Tauri 平台前置依赖（参见 [Tauri 文档](https://v2.tauri.app/start/prerequisites/)）

## 快速开始

```bash
pnpm install
pnpm tauri dev      # 以桌面应用方式运行（开发模式）
pnpm dev            # 仅运行 Vite 前端（不打开 Tauri 窗口）
pnpm build          # 构建前端到 dist/
pnpm typecheck      # 使用 vue-tsc 进行类型检查
```

## 构建发布版

```bash
pnpm tauri build
```

安装包生成于 `src-tauri/target/release/bundle/` 目录下。

## 插件

第一方预览插件位于 `plugins/` 目录，每个插件是一个包含 `manifest.json` 和打包后 `entry.js` 的文件夹。

- **构建** — `node plugins/build.mjs` 打包各插件并生成 `plugins/dist/plugin-<id>-<version>.zip`
- **版本约定** — 插件版本跟随应用版本。每次发版时把各插件 `manifest.json` 的版本号统一改为当前应用版本；有改动的插件在发版时带上该版本号，用户即可看到「更新」提示
- **发布** — 把生成的 `plugins/dist/plugin-*.zip` 上传到 GitHub Release，插件页「可用插件」区即可检索并安装 / 更新

## 使用说明

### 1. 新建连接

点击 **+ 新建连接** 并填写：

- **名称** — 连接列表中显示的标签
- **Endpoint** — 可选；AWS S3 留空，MinIO 等自建服务填写如 `http://127.0.0.1:9000`
- **Region** — 例如 `us-east-1`
- **Path-style 寻址** — MinIO 及大多数自建后端需要勾选
- **Access Key / Secret Key**
- **TLS 选项** — 可跳过证书校验，或粘贴 CA 证书 PEM 以信任私有 CA / 自签证书

### 2. 浏览

在左侧边栏选择 Bucket。通过面包屑、`s3://` 地址栏或前进 / 后退按钮导航（也支持鼠标侧键）。

### 3. 搜索

点击地址栏中的 🔍 图标。默认只搜索**当前目录层级**（浅搜索）；勾选「深度搜索」后递归搜索所有子目录。

### 4. 上传 / 下载

- **上传**：点击「上传」选择文件，「上传文件夹」选择整个文件夹，或直接拖拽文件 / 文件夹到列表
- **下载**：使用每行的 ⬇️ 图标，或勾选多行后点击「下载选中」
- 所有任务的进度可在「传输」面板查看

### 5. 分享

点击文件行的 🔗 图标生成预签名 URL（GET 或 PUT），有效期可选。

## 配置存储与安全

- 连接配置保存在系统应用配置目录下的 `profiles.enc`
  （Windows：`%APPDATA%\<app>\profiles.enc`）
- **Access Key / Secret Key 存放在系统凭据库**（服务名 `com.s3viewer.desktop`，通过 `keyring` crate），默认不写入配置文件；仅当系统凭据库不可用时才回退写入

  | 平台 | 凭据库 |
  | --- | --- |
  | Windows | Windows 凭据管理器（基于 DPAPI） |
  | macOS | Keychain（钥匙串） |
  | Linux | Secret Service（gnome-keyring / KWallet） |

- **Windows** 上 `profiles.enc` 文件本身还会使用当前用户的 DPAPI 加密，其他用户无法解密
- **非 Windows** 平台该文件仅保存非敏感配置（Endpoint / Region / 选项）的 JSON
- **导出的配置文件包含明文 Access Key / Secret Key**，请妥善保管

## 常见问题

**连接报证书错误（自签 / 私有 CA）？**
勾选「跳过 SSL 证书校验」，或在连接表单中粘贴 CA 证书 PEM。

**MinIO / 自建后端报 Bucket 错误？**
勾选「Path-style 寻址」，并检查 Endpoint URL 是否正确（含 `http://` / `https://`）。

**拖拽上传不生效？**
请拖到已打开 Bucket 标签页的对象列表区域，有效目标会显示高亮遮罩。

## License

许可证信息请参阅仓库中的 `LICENSE` 文件（如有）。
