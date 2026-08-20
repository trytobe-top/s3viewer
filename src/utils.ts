export function formatSize(bytes: number | null): string {
  if (bytes == null) return "";
  if (bytes === 0) return "0 B";
  const units = ["B", "KB", "MB", "GB", "TB", "PB"];
  const i = Math.min(
    Math.floor(Math.log(bytes) / Math.log(1024)),
    units.length - 1
  );
  const val = bytes / Math.pow(1024, i);
  return `${val.toFixed(val >= 100 || i === 0 ? 0 : 1)} ${units[i]}`;
}

export function formatDate(s: string | null): string {
  if (!s) return "";
  const d = new Date(s);
  if (isNaN(d.getTime())) return s;
  return d.toLocaleString();
}

export function newId(): string {
  return (
    Date.now().toString(36) + Math.random().toString(36).slice(2, 8)
  );
}

const EXT_ICONS: Record<string, string> = {
  png: "🖼️", jpg: "🖼️", jpeg: "🖼️", gif: "🖼️", webp: "🖼️", svg: "🖼️",
  bmp: "🖼️", ico: "🖼️", avif: "🖼️", tiff: "🖼️", tif: "🖼️", heic: "🖼️",
  mp4: "🎬", mkv: "🎬", avi: "🎬", mov: "🎬", webm: "🎬", flv: "🎬",
  wmv: "🎬", m4v: "🎬", mpg: "🎬", mpeg: "🎬",
  mp3: "🎵", wav: "🎵", flac: "🎵", ogg: "🎵", m4a: "🎵", aac: "🎵",
  wma: "🎵", mid: "🎵",
  pdf: "📕",
  doc: "📘", docx: "📘", rtf: "📘",
  csv: "📊", xls: "📊", xlsx: "📊", tsv: "📊",
  ppt: "📽️", pptx: "📽️",
  zip: "📦", rar: "📦", "7z": "📦", tar: "📦", gz: "📦", bz2: "📦",
  xz: "📦", tgz: "📦",
  json: "🧾", yaml: "🧾", yml: "🧾", xml: "🧾", toml: "🧾", ini: "🧾",
  conf: "🧾", cfg: "🧾", env: "🧾", properties: "🧾",
  js: "💻", mjs: "💻", cjs: "💻", ts: "💻", tsx: "💻", jsx: "💻", py: "💻",
  rs: "💻", go: "💻", java: "💻", c: "💻", cpp: "💻", cxx: "💻", h: "💻",
  hpp: "💻", sh: "💻", bash: "💻", rb: "💻", php: "💻", sql: "💻", lua: "💻",
  html: "🌐", htm: "🌐", css: "🎨", scss: "🎨", sass: "🎨", less: "🎨",
  exe: "⚙️", dll: "⚙️", msi: "⚙️", apk: "⚙️", bat: "⚙️", cmd: "⚙️",
  db: "🗄️", sqlite: "🗄️", db3: "🗄️",
  txt: "📄", log: "📄", md: "📝", markdown: "📝",
};

export function fileIcon(key: string): string {
  const name = key.split("/").pop() || key;
  const i = name.lastIndexOf(".");
  const ext = i >= 0 ? name.slice(i + 1).toLowerCase() : "";
  return EXT_ICONS[ext] ?? "📄";
}
