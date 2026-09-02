(function () {
  "use strict";

  var IMAGE_EXTS = {
    png: 1, jpg: 1, jpeg: 1, gif: 1, webp: 1, bmp: 1, ico: 1, avif: 1,
    tiff: 1, tif: 1, svg: 1,
  };

  var TEXT_EXTS = {
    txt: 1, log: 1, md: 1, markdown: 1, json: 1, jsonl: 1, ndjson: 1,
    xml: 1, yml: 1, yaml: 1, csv: 1, tsv: 1, ini: 1, conf: 1, cfg: 1,
    config: 1, env: 1, properties: 1, toml: 1, sh: 1, bash: 1, zsh: 1,
    fish: 1, bat: 1, cmd: 1, ps1: 1, py: 1, js: 1, mjs: 1, cjs: 1,
    ts: 1, tsx: 1, jsx: 1, vue: 1, html: 1, htm: 1, css: 1, scss: 1,
    sass: 1, less: 1, sql: 1, java: 1, kt: 1, kts: 1, c: 1, h: 1,
    cpp: 1, cc: 1, cxx: 1, hpp: 1, hxx: 1, rs: 1, go: 1, rb: 1, pl: 1,
    pm: 1, lua: 1, groovy: 1, gradle: 1, clj: 1, cljs: 1, hs: 1,
    erl: 1, coffee: 1, diff: 1, patch: 1, graphql: 1, proto: 1, r: 1,
    swift: 1, scala: 1, dart: 1, php: 1, dockerfile: 1, nginx: 1,
    ipynb: 1, ex: 1, exs: 1, vim: 1, lock: 1,
  };

  var LANG = {
    js: "javascript", mjs: "javascript", cjs: "javascript", jsx: "javascript",
    ts: "typescript", tsx: "typescript",
    json: "json", jsonl: "json", ndjson: "json", ipynb: "json",
    md: "markdown", markdown: "markdown",
    py: "python", html: "html", htm: "html", vue: "html",
    css: "css", scss: "scss", sass: "scss", less: "less",
    xml: "xml", yml: "yaml", yaml: "yaml",
    c: "cpp", h: "cpp", cpp: "cpp", cc: "cpp", cxx: "cpp", hpp: "cpp", hxx: "cpp",
    rs: "rust", java: "java", kt: "kotlin", kts: "kotlin", go: "go",
    sql: "sql", sh: "shell", bash: "shell", zsh: "shell", fish: "shell",
    ps1: "powershell", bat: "bat", cmd: "bat", toml: "ini",
    ini: "ini", conf: "ini", cfg: "ini", config: "ini", env: "ini",
    properties: "ini", dockerfile: "dockerfile", rb: "ruby", pl: "perl",
    pm: "perl", lua: "lua", clj: "clojure", cljs: "clojure",
    hs: "haskell", coffee: "coffeescript", graphql: "graphql",
    proto: "protobuf", r: "r", swift: "swift", scala: "scala",
    dart: "dart", php: "php", ex: "elixir", exs: "elixir",
  };

  var MAX_SIZE = 64 * 1024 * 1024;
  var loaderPromise = null;

  function cleanBase(url) {
    return String(url).replace(/\/+$/, "");
  }

  function loadMonaco(baseUrl) {
    baseUrl = cleanBase(baseUrl);
    if (loaderPromise) return loaderPromise;
    loaderPromise = new Promise(function (resolve, reject) {
      window.MonacoEnvironment = {
        getWorkerUrl: function (moduleId, label) {
          var base = baseUrl + "/vs";
          var path = "/editor/editor.worker.js";
          if (label === "json") {
            path = "/language/json/json.worker.js";
          } else if (label === "css" || label === "scss" || label === "less") {
            path = "/language/css/css.worker.js";
          } else if (
            label === "html" || label === "handlebars" || label === "razor"
          ) {
            path = "/language/html/html.worker.js";
          } else if (label === "typescript" || label === "javascript") {
            path = "/language/typescript/ts.worker.js";
          }
          var bootstrap =
            "self.MonacoEnvironment={baseUrl:'" + base + "/'};" +
            "importScripts('" + base + path + "');";
          return URL.createObjectURL(
            new Blob([bootstrap], { type: "text/javascript" })
          );
        },
      };
      var s = document.createElement("script");
      s.src = baseUrl + "/vs/loader.js";
      s.onload = function () {
        window.require.config({ paths: { vs: baseUrl + "/vs" } });
        window.require(
          ["vs/editor/editor.main"],
          function () { resolve(window.monaco); },
          function (err) { reject(err); }
        );
      };
      s.onerror = function () {
        reject(new Error("monaco loader.js 加载失败"));
      };
      document.head.appendChild(s);
    });
    return loaderPromise;
  }

  window.__s3viewer.register({
    id: "monaco-editor",
    name: "Monaco Editor",
    version: "0.56.0",
    canPreview: function (info) {
      if (info.size != null && info.size > MAX_SIZE) return false;
      if (info.ext && IMAGE_EXTS[info.ext]) return false;
      if (info.ext && TEXT_EXTS[info.ext]) return true;
      var ct = (info.contentType || "").toLowerCase();
      if (
        ct.indexOf("text/") === 0 || ct.indexOf("json") !== -1 ||
        ct.indexOf("xml") !== -1 || ct.indexOf("yaml") !== -1 ||
        ct.indexOf("javascript") !== -1
      ) {
        return true;
      }
      return false;
    },
    render: function (container, ctx) {
      var host = document.createElement("div");
      host.style.cssText = "position:absolute;inset:0;";
      container.appendChild(host);
      var disposed = false;
      var editor = null;

      Promise.all([loadMonaco(ctx.baseUrl), ctx.fetchText()]).then(
        function (res) {
          if (disposed) return;
          var monaco = res[0];
          editor = monaco.editor.create(host, {
            value: res[1],
            language: LANG[ctx.ext] || "plaintext",
            theme: ctx.dark ? "vs-dark" : "vs",
            readOnly: true,
            automaticLayout: true,
            wordWrap: "on",
            minimap: { enabled: true },
            fontSize: 13,
            scrollBeyondLastLine: false,
            scrollbar: { verticalScrollbarSize: 10, horizontalScrollbarSize: 10 },
          });
        },
        function (err) {
          if (!disposed) {
            container.textContent =
              "Monaco 加载失败: " + (err && err.message ? err.message : err);
          }
        }
      );

      return {
        dispose: function () {
          disposed = true;
          if (editor) {
            editor.dispose();
            editor = null;
          }
          if (host.parentNode) host.parentNode.removeChild(host);
        },
        setEditable: function (on) {
          if (editor) {
            editor.updateOptions({ readOnly: !on });
          }
        },
        getContent: function () {
          var text = editor ? editor.getValue() : "";
          return Promise.resolve(new TextEncoder().encode(text));
        },
      };
    },
  });
})();
