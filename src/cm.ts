import type { Extension } from "@codemirror/state";
import { Compartment, EditorState, StateEffect } from "@codemirror/state";
import {
  EditorView,
  drawSelection,
  highlightActiveLine,
  keymap,
  lineNumbers,
} from "@codemirror/view";
import { defaultKeymap } from "@codemirror/commands";
import {
  highlightSelectionMatches,
  search,
  searchKeymap,
} from "@codemirror/search";
import {
  LanguageSupport,
  StreamLanguage,
  bracketMatching,
  defaultHighlightStyle,
  foldGutter,
  syntaxHighlighting,
} from "@codemirror/language";
import type { StreamParser } from "@codemirror/language";

type LangLoader = () => Promise<Extension>;

const javascriptLoader =
  (opts: { typescript?: boolean; jsx?: boolean } = {}): LangLoader =>
  () =>
    import("@codemirror/lang-javascript").then((m) => m.javascript(opts));

function legacy<T extends Record<string, StreamParser<unknown>>>(
  load: () => Promise<T>,
  name: keyof T & string
): LangLoader {
  return async () =>
    new LanguageSupport(StreamLanguage.define((await load())[name]));
}

const langLoaders: Record<string, LangLoader> = {
  js: javascriptLoader(),
  mjs: javascriptLoader(),
  cjs: javascriptLoader(),
  jsx: javascriptLoader({ jsx: true }),
  ts: javascriptLoader({ typescript: true }),
  tsx: javascriptLoader({ typescript: true, jsx: true }),
  json: () => import("@codemirror/lang-json").then((m) => m.json()),
  jsonl: () => import("@codemirror/lang-json").then((m) => m.json()),
  ndjson: () => import("@codemirror/lang-json").then((m) => m.json()),
  md: () => import("@codemirror/lang-markdown").then((m) => m.markdown()),
  markdown: () => import("@codemirror/lang-markdown").then((m) => m.markdown()),
  py: () => import("@codemirror/lang-python").then((m) => m.python()),
  html: () => import("@codemirror/lang-html").then((m) => m.html()),
  htm: () => import("@codemirror/lang-html").then((m) => m.html()),
  vue: () => import("@codemirror/lang-html").then((m) => m.html()),
  css: () => import("@codemirror/lang-css").then((m) => m.css()),
  scss: () => import("@codemirror/lang-css").then((m) => m.css()),
  sass: () => import("@codemirror/lang-css").then((m) => m.css()),
  less: () => import("@codemirror/lang-css").then((m) => m.css()),
  xml: () => import("@codemirror/lang-xml").then((m) => m.xml()),
  svg: () => import("@codemirror/lang-xml").then((m) => m.xml()),
  yml: () => import("@codemirror/lang-yaml").then((m) => m.yaml()),
  yaml: () => import("@codemirror/lang-yaml").then((m) => m.yaml()),
  c: () => import("@codemirror/lang-cpp").then((m) => m.cpp()),
  h: () => import("@codemirror/lang-cpp").then((m) => m.cpp()),
  cpp: () => import("@codemirror/lang-cpp").then((m) => m.cpp()),
  cc: () => import("@codemirror/lang-cpp").then((m) => m.cpp()),
  cxx: () => import("@codemirror/lang-cpp").then((m) => m.cpp()),
  hpp: () => import("@codemirror/lang-cpp").then((m) => m.cpp()),
  hxx: () => import("@codemirror/lang-cpp").then((m) => m.cpp()),
  rs: () => import("@codemirror/lang-rust").then((m) => m.rust()),
  java: () => import("@codemirror/lang-java").then((m) => m.java()),
  kt: () => import("@codemirror/lang-java").then((m) => m.java()),
  kts: () => import("@codemirror/lang-java").then((m) => m.java()),
  go: () => import("@codemirror/lang-go").then((m) => m.go()),
  sql: () => import("@codemirror/lang-sql").then((m) => m.sql()),
  sh: legacy(() => import("@codemirror/legacy-modes/mode/shell"), "shell"),
  bash: legacy(() => import("@codemirror/legacy-modes/mode/shell"), "shell"),
  zsh: legacy(() => import("@codemirror/legacy-modes/mode/shell"), "shell"),
  fish: legacy(() => import("@codemirror/legacy-modes/mode/shell"), "shell"),
  ps1: legacy(
    () => import("@codemirror/legacy-modes/mode/powershell"),
    "powerShell"
  ),
  toml: legacy(() => import("@codemirror/legacy-modes/mode/toml"), "toml"),
  ini: legacy(
    () => import("@codemirror/legacy-modes/mode/properties"),
    "properties"
  ),
  conf: legacy(
    () => import("@codemirror/legacy-modes/mode/properties"),
    "properties"
  ),
  cfg: legacy(
    () => import("@codemirror/legacy-modes/mode/properties"),
    "properties"
  ),
  config: legacy(
    () => import("@codemirror/legacy-modes/mode/properties"),
    "properties"
  ),
  env: legacy(
    () => import("@codemirror/legacy-modes/mode/properties"),
    "properties"
  ),
  properties: legacy(
    () => import("@codemirror/legacy-modes/mode/properties"),
    "properties"
  ),
  dockerfile: legacy(
    () => import("@codemirror/legacy-modes/mode/dockerfile"),
    "dockerFile"
  ),
  nginx: legacy(() => import("@codemirror/legacy-modes/mode/nginx"), "nginx"),
  rb: legacy(() => import("@codemirror/legacy-modes/mode/ruby"), "ruby"),
  pl: legacy(() => import("@codemirror/legacy-modes/mode/perl"), "perl"),
  pm: legacy(() => import("@codemirror/legacy-modes/mode/perl"), "perl"),
  lua: legacy(() => import("@codemirror/legacy-modes/mode/lua"), "lua"),
  groovy: legacy(
    () => import("@codemirror/legacy-modes/mode/groovy"),
    "groovy"
  ),
  gradle: legacy(
    () => import("@codemirror/legacy-modes/mode/groovy"),
    "groovy"
  ),
  clj: legacy(() => import("@codemirror/legacy-modes/mode/clojure"), "clojure"),
  cljs: legacy(
    () => import("@codemirror/legacy-modes/mode/clojure"),
    "clojure"
  ),
  hs: legacy(() => import("@codemirror/legacy-modes/mode/haskell"), "haskell"),
  erl: legacy(() => import("@codemirror/legacy-modes/mode/erlang"), "erlang"),
  coffee: legacy(
    () => import("@codemirror/legacy-modes/mode/coffeescript"),
    "coffeeScript"
  ),
  diff: legacy(() => import("@codemirror/legacy-modes/mode/diff"), "diff"),
  patch: legacy(() => import("@codemirror/legacy-modes/mode/diff"), "diff"),
};

function buildBaseTheme(dark: boolean) {
  // 显式设置背景/文字色：在语言高亮与深色主题异步加载完成前，
  // 编辑器也能正确显示，避免深色模式下“深字深底”看起来一片空白。
  return EditorView.theme({
    "&": {
      height: "100%",
      minHeight: "0",
      fontSize: "13.5px",
      backgroundColor: dark ? "#282c34" : "#ffffff",
      color: dark ? "#d4d4d4" : "#1e293b",
    },
    // 嵌入到预览弹窗时去掉 CodeMirror 默认的聚焦描边
    "&.cm-focused": { outline: "none" },
    ".cm-scroller": {
      overflow: "auto",
      maxHeight: "100%",
      fontFamily:
        "ui-monospace, SFMono-Regular, Menlo, Consolas, 'Liberation Mono', monospace",
      lineHeight: "1.6",
    },
    // 只读预览：隐藏光标、内容留白
    ".cm-content": {
      caretColor: "transparent",
      padding: "8px 0",
    },
    ".cm-line": { padding: "0 12px" },
  });
}

/**
 * 创建只读 CodeMirror 编辑器。
 *
 * 关键点：先同步创建编辑器让文本立即可见，语言高亮 / 深色主题
 * 通过异步动态加载，加载完成后用 StateEffect.appendConfig 追加，
 * 避免等待语言模块期间界面一片空白。
 */
const editCompartments = new WeakMap<EditorView, Compartment>();

export function createReadOnlyEditor(
  host: HTMLElement,
  text: string,
  ext: string,
  dark: boolean
): EditorView {
  const editComp = new Compartment();
  const base: Extension[] = [
    buildBaseTheme(dark),
    EditorView.lineWrapping,
    editComp.of([EditorView.editable.of(false), EditorState.readOnly.of(true)]),
    lineNumbers(),
    foldGutter(),
    drawSelection(),
    bracketMatching(),
    highlightActiveLine(),
    highlightSelectionMatches(),
    search({ top: true }),
    keymap.of([...searchKeymap, ...defaultKeymap]),
    syntaxHighlighting(defaultHighlightStyle, { fallback: true }),
  ];

  const view = new EditorView({
    state: EditorState.create({ doc: text, extensions: base }),
    parent: host,
  });
  editCompartments.set(view, editComp);

  void (async () => {
    try {
      const extra: Extension[] = [];
      const loader = langLoaders[ext];
      if (loader) {
        extra.push(await loader());
      }
      if (dark) {
        const { oneDark } = await import("@codemirror/theme-one-dark");
        extra.push(oneDark);
      }
      if (extra.length) {
        view.dispatch({ effects: StateEffect.appendConfig.of(extra) });
      }
    } catch (e) {
      console.error("CodeMirror language load failed", e);
    }
  })();

  return view;
}

export function setCmEditable(view: EditorView, on: boolean) {
  const comp = editCompartments.get(view);
  if (comp) {
    view.dispatch({
      effects: comp.reconfigure([
        EditorView.editable.of(on),
        EditorState.readOnly.of(!on),
      ]),
    });
  }
}

export function getCmText(view: EditorView): string {
  return view.state.doc.toString();
}
