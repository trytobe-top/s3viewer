import { AcApDocManager, AcEdOpenMode } from "@mlightcad/cad-simple-viewer";

let manager = null;
let hostEl = null;

function ensureManager() {
  if (manager) return manager;
  hostEl = document.createElement("div");
  hostEl.style.cssText = "position:absolute;inset:0;background:#0f172a;";
  AcApDocManager.createInstance({
    container: hostEl,
    autoResize: true,
    useMainThreadDraw: true,
    baseUrl: "https://cdn.jsdelivr.net/gh/mlightcad/cad-data@main/",
    openDocumentDefaults: {
      minimumChunkSize: 1000,
      mode: AcEdOpenMode.Write,
      progressiveRendering: false,
      sysVars: { lwdisplay: false },
    },
  });
  manager = AcApDocManager.instance;
  return manager;
}

const MAX_SIZE = 200 * 1024 * 1024;

window.__s3viewer.register({
  id: "cad-viewer",
  name: "CAD Viewer",
  version: "1.6.3",
  canPreview: function (info) {
    return info.ext === "dxf" && (info.size == null || info.size < MAX_SIZE);
  },
  render: function (container, ctx) {
    container.style.position = "relative";
    let disposed = false;
    const m = ensureManager();
    container.appendChild(hostEl);

    const status = document.createElement("div");
    status.style.cssText =
      "position:absolute;left:8px;bottom:8px;z-index:10;padding:2px 8px;border-radius:4px;background:rgba(0,0,0,0.55);color:#fff;font-size:12px;pointer-events:none;";
    status.textContent = "CAD...";
    container.appendChild(status);

    ctx
      .fetchObject()
      .then(async function (buf) {
        if (disposed) return;
        const ok = await m.openDocument(ctx.name, buf, {
          minimumChunkSize: 1000,
          mode: AcEdOpenMode.Write,
          sysVars: { lwdisplay: false },
        });
        if (disposed) return;
        status.textContent = ok ? "DXF" : "load failed";
        status.style.background = ok
          ? "rgba(0,0,0,0.55)"
          : "rgba(153,27,27,0.75)";
      })
      .catch(function (e) {
        if (disposed) return;
        status.textContent =
          "load failed: " + (e && e.message ? e.message : e);
        status.style.background = "rgba(153,27,27,0.75)";
      });

    return {
      dispose: function () {
        disposed = true;
        if (hostEl.parentNode) hostEl.parentNode.removeChild(hostEl);
        if (status.parentNode) status.parentNode.removeChild(status);
      },
    };
  },
});
