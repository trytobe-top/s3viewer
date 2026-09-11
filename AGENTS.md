# AGENTS.md

Guides for AI agents working in this repository.

## Project overview

- **S3 Viewer** — cross-platform desktop app for browsing/managing S3-compatible object storage.
- **Stack**: Tauri 2 (Rust) + Vue 3 + TypeScript. Package manager: `pnpm`.
- **Layout**:
  - `src/` — Vue frontend
  - `src-tauri/` — Rust backend (commands in `src-tauri/src/lib.rs`, S3 logic in `src-tauri/src/s3.rs`, config/credentials in `src-tauri/src/config.rs`)
  - `plugins/` — bundled preview plugins (`monaco-editor`, `cad-viewer`, `3d-viewer`, `office-viewer`); each has its own `manifest.json` with an independent version
  - `plugins/dist/` — release zips tracked in git, named `plugin-<id>-<version>.zip`

## Common commands

```bash
pnpm install          # install frontend deps
pnpm dev              # run Vite dev server (frontend only)
pnpm build            # build frontend to dist/
pnpm typecheck        # type-check TS/Vue (vue-tsc --noEmit)
pnpm tauri dev        # run full Tauri app
pnpm tauri build      # build release bundles
```

Backend checks must run from `src-tauri/`:

```bash
cd src-tauri && cargo check
cd src-tauri && cargo build
```

Plugins are built with a Node script (run from repo root):

```bash
node plugins/build.mjs   # bundles plugin entry.js and regenerates plugins/dist/*.zip
```

## Version management

**Rule: only bump a version when the content it describes actually changed. A bump is a deliberate, separate commit.**

### App version (0.x.y)

Defined in **4 places that must stay in sync**:

1. `package.json` → `"version"`
2. `src-tauri/Cargo.toml` → `version`
3. `src-tauri/Cargo.lock` → package `s3viewer` version
4. `src-tauri/tauri.conf.json` → `"version"`

When you bump, update all four; verify with `cd src-tauri && cargo check`.

### Plugin versions

Each plugin has its own version in `plugins/<id>/manifest.json` (independent of the app version).

- Bump a plugin's version **only when that plugin's code/content changed** (e.g. `src/main.js`, `manifest.json`, vendored assets).
- After changing a plugin, rebuild and refresh the release zips: `node plugins/build.mjs`, then commit `plugins/dist/` if the zips changed.
- Do **not** bump a plugin version for unrelated app changes (i18n strings, UI layout, S3 backend logic, etc.).

### Version bump confirmation

**Never bump any version on your own.** Before changing any version field:

1. Summarize what changed and propose the target version (and, for plugins, which plugin).
2. Ask the user for confirmation first.
3. Only after explicit confirmation, update the version field(s), verify the build, and commit the bump separately from feature changes.

## Conventions

- Commit messages are English, one line, in the style of `Bump to v0.4.1: <short summary>`.
- Do not commit secrets or `*.pem` / `*.key` files.
- `deploy.conf`, `deploy.sh`, `.rsyncignore` are deployment-local (gitignored/rsync-ignored) — do not rely on them in commits.
- i18n keys live in `src/i18n.ts` and should be added in both `en` and `zh` dictionaries.
