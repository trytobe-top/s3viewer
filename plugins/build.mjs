import { build } from "esbuild";
import { cpSync, rmSync, readdirSync, readFileSync, statSync, mkdirSync } from "node:fs";
import { resolve, dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import AdmZip from "adm-zip";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const pluginsDir = join(root, "plugins");
const distDir = join(pluginsDir, "dist");
const pnpmDir = join(root, "node_modules", ".pnpm");

function findPkg(pkgRe) {
  const entry = readdirSync(pnpmDir).find((d) => pkgRe.test(d));
  if (!entry) throw new Error("package not found: " + pkgRe);
  return join(pnpmDir, entry, "node_modules");
}

const threeDir = findPkg(/^three@/);
const occtDir = findPkg(/^occt-import-js@/);

const PREFIX = "three/examples/jsm/";
const threeExamplesPlugin = {
  name: "three-examples",
  setup(build) {
    build.onResolve({ filter: /^three\/examples\/jsm\// }, (args) => {
      const rel = args.path.slice(PREFIX.length);
      const target = rel.endsWith(".js") ? rel : rel + ".js";
      return { path: join(threeDir, "three", "examples", "jsm", target) };
    });
  },
};

// Node builtins referenced by emscripten wrappers (occt-import-js), guarded
// at runtime by typeof checks so they never execute in the browser.
const nodeStub = join(pluginsDir, "node-empty.cjs");
const nodeStubPlugin = {
  name: "node-stub",
  setup(build) {
    build.onResolve(
      { filter: /^(path|fs|crypto|child_process|os|net|tls|http|https|worker_threads)$/ },
      () => ({ path: nodeStub })
    );
  },
};

// monaco-editor: official min/vs distribution
const monacoVs = join(root, "node_modules", "monaco-editor", "min", "vs");
rmSync(join(pluginsDir, "monaco-editor", "vs"), {
  recursive: true,
  force: true,
});
cpSync(monacoVs, join(pluginsDir, "monaco-editor", "vs"), {
  recursive: true,
});
console.log("[monaco-editor] vs/ copied");

async function bundle(plugin, entry) {
  await build({
    entryPoints: [join(pluginsDir, plugin, "src", entry)],
    bundle: true,
    format: "esm",
    minify: true,
    target: "es2020",
    logLevel: "info",
    define: {
      "process.env.NODE_ENV": '"production"',
    },
    plugins: [threeExamplesPlugin, nodeStubPlugin],
    outfile: join(pluginsDir, plugin, "entry.js"),
  });
}

await bundle("cad-viewer", "main.js");
await bundle("3d-viewer", "main.js");
await bundle("office-viewer", "main.js");

cpSync(
  join(occtDir, "occt-import-js", "dist", "occt-import-js.wasm"),
  join(pluginsDir, "3d-viewer", "occt-import-js.wasm")
);
console.log("[3d-viewer] occt-import-js.wasm copied");

// Package each plugin folder into plugins/dist/<id>-<version>.zip
const PLUGIN_IDS = ["monaco-editor", "cad-viewer", "3d-viewer", "office-viewer"];

function addDir(zip, absDir, relDir) {
  for (const entry of readdirSync(absDir)) {
    if (entry === "src") continue;
    const abs = join(absDir, entry);
    const rel = join(relDir, entry).replace(/\\/g, "/");
    if (statSync(abs).isDirectory()) {
      addDir(zip, abs, rel);
    } else {
      zip.addFile(rel, readFileSync(abs));
    }
  }
}

function zipPlugin(id) {
  const dir = join(pluginsDir, id);
  const manifest = JSON.parse(readFileSync(join(dir, "manifest.json"), "utf8"));
  const zip = new AdmZip();
  addDir(zip, dir, id);
  mkdirSync(distDir, { recursive: true });
  const out = join(distDir, `plugin-${id}-${manifest.version}.zip`);
  zip.writeZip(out);
  console.log(`[${id}] zip -> ${out}`);
}

rmSync(distDir, { recursive: true, force: true });
for (const id of PLUGIN_IDS) {
  zipPlugin(id);
}

console.log("plugins built");
