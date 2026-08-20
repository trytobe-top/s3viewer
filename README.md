# S3 Viewer

A desktop application for browsing and viewing S3 buckets, built with [Tauri](https://tauri.app/) + [Vue 3](https://vuejs.org/) + [TypeScript](https://www.typescriptlang.org/).

## Features

- Browse S3 buckets and objects
- Built-in PDF viewer (powered by pdf.js)
- Multi-language support (i18n)
- Transfer / download management

## Tech Stack

- **Desktop shell:** Tauri 2 (Rust)
- **Frontend:** Vue 3 + Vite + Tailwind CSS 4 + TypeScript
- **PDF rendering:** pdfjs-dist

## Requirements

- [Node.js](https://nodejs.org/) 20+ with [pnpm](https://pnpm.io/)
- [Rust](https://www.rust-lang.org/) stable toolchain
- Tauri platform prerequisites (see [Tauri docs](https://v2.tauri.app/start/prerequisites/))

## Development

```bash
pnpm install
pnpm tauri dev      # run the desktop app in dev mode
pnpm dev            # run only the Vite frontend (no Tauri window)
pnpm build          # build the frontend to dist/
pnpm typecheck      # type-check with vue-tsc
```

## Building a Release

```bash
pnpm tauri build
```

The installer is generated under `src-tauri/target/release/bundle/`.

---

# S3 Viewer（中文）

基于 [Tauri](https://tauri.app/) + [Vue 3](https://vuejs.org/) + [TypeScript](https://www.typescriptlang.org/) 构建的 S3 桶浏览与查看桌面应用。

## 功能

- 浏览 S3 桶与对象
- 内置 PDF 查看器（基于 pdf.js）
- 多语言支持（i18n）
- 传输 / 下载管理

## 技术栈

- **桌面外壳：** Tauri 2 (Rust)
- **前端：** Vue 3 + Vite + Tailwind CSS 4 + TypeScript
- **PDF 渲染：** pdfjs-dist

## 环境要求

- [Node.js](https://nodejs.org/) 20+，包管理器使用 [pnpm](https://pnpm.io/)
- [Rust](https://www.rust-lang.org/) stable 工具链
- Tauri 平台前置依赖（参见 [Tauri 文档](https://v2.tauri.app/start/prerequisites/)）

## 开发

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

## License

本项目许可证信息请参阅仓库中的 `LICENSE` 文件（如有）。