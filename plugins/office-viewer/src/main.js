import { renderAsync } from "docx-preview";
import * as XLSX from "xlsx";
import { PptxViewer, RECOMMENDED_ZIP_LIMITS } from "@aiden0z/pptx-renderer";

const EXTS = { docx: 1, xlsx: 1, xls: 1, pptx: 1, csv: 1 };
const MAX_SIZE = 100 * 1024 * 1024;
const CSV_MAX_SIZE = 20 * 1024 * 1024;

function decodeText(buf) {
  const utf8 = new TextDecoder("utf-8").decode(buf);
  if (!utf8.includes("\uFFFD")) return utf8;
  try {
    return new TextDecoder("gbk").decode(buf);
  } catch {
    return utf8;
  }
}

function makeStatus(container, text) {
  const el = document.createElement("div");
  el.style.cssText =
    "position:absolute;left:8px;bottom:8px;z-index:20;padding:2px 8px;border-radius:4px;background:rgba(0,0,0,0.55);color:#fff;font-size:12px;pointer-events:none;";
  el.textContent = text;
  container.appendChild(el);
  return el;
}

function renderSheet(data, body, readType) {
  const wb = XLSX.read(data, { type: readType });
  if (!wb.SheetNames.length) {
    body.textContent = "no sheets";
    return;
  }
  const tabs = document.createElement("div");
  tabs.style.cssText =
    "position:sticky;top:0;z-index:5;display:flex;flex-wrap:wrap;gap:2px;padding:6px 8px;background:#f1f5f9;border-bottom:1px solid #cbd5e1;";
  const sheetsWrap = document.createElement("div");
  body.appendChild(tabs);
  body.appendChild(sheetsWrap);

  wb.SheetNames.forEach((name, i) => {
    const tab = document.createElement("button");
    tab.textContent = name;
    tab.style.cssText =
      "padding:2px 10px;border:1px solid #cbd5e1;border-radius:4px;background:#fff;font-size:12px;cursor:pointer;opacity:0.6;";
    if (i === 0) tab.style.opacity = "1";
    tab.addEventListener("click", () => {
      for (const d of sheetsWrap.children) d.style.display = "none";
      sheetDiv.style.display = "";
      for (const t of tabs.children) t.style.opacity = "0.6";
      tab.style.opacity = "1";
    });
    tabs.appendChild(tab);

    const sheetDiv = document.createElement("div");
    sheetDiv.style.display = i === 0 ? "" : "none";
    sheetDiv.style.padding = "8px";
    sheetDiv.innerHTML = XLSX.utils.sheet_to_html(wb.Sheets[name], {
      header: "",
      footer: "",
    });
    sheetsWrap.appendChild(sheetDiv);
  });
}

window.__s3viewer.register({
  id: "office-viewer",
  name: "Office Viewer",
  version: "0.1.0",
  canPreview: function (info) {
    if (info.ext === "csv") {
      return info.size == null || info.size < CSV_MAX_SIZE;
    }
    return (
      EXTS[info.ext] === 1 &&
      (info.size == null || info.size < MAX_SIZE)
    );
  },
  render: function (container, ctx) {
    container.style.position = "relative";
    const body = document.createElement("div");
    body.style.cssText =
      "position:absolute;inset:0;overflow:auto;background:#fff;color:#1f2937;";
    container.appendChild(body);
    const status = makeStatus(container, "Office...");
    let disposed = false;
    let pptxViewer = null;

    ctx
      .fetchObject()
      .then(async function (buf) {
        if (disposed) return;
        const ext = ctx.ext;
        if (ext === "docx") {
          await renderAsync(buf, body, {}, false, true, false, false);
        } else if (ext === "xlsx" || ext === "xls") {
          renderSheet(buf, body, "array");
        } else if (ext === "csv") {
          renderSheet(decodeText(buf), body, "string");
        } else if (ext === "pptx") {
          pptxViewer = await PptxViewer.open(buf, body, {
            zipLimits: RECOMMENDED_ZIP_LIMITS,
          });
        }
        if (disposed) return;
        status.textContent = ext.toUpperCase();
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
        try {
          if (pptxViewer && pptxViewer.destroy) pptxViewer.destroy();
        } catch (e) {
          console.error("office dispose failed", e);
        }
        if (body.parentNode) body.parentNode.removeChild(body);
        if (status.parentNode) status.parentNode.removeChild(status);
      },
    };
  },
});
