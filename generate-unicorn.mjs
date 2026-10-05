import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const root = join(import.meta.dirname, "unicorn icons");
const mediaDir = join(root, "media");
const iconDir = join(root, "icons");
const endpoint = "https://unicornicons.com/api/categories/all/icons";

const pages = await Promise.all(
  [0, 1, 2, 3, 4, 5].map(async (page) => {
    const response = await fetch(`${endpoint}?page=${page}&limit=100&search=`);
    if (!response.ok) throw new Error(`catalog page ${page} returned ${response.status}`);
    const body = await response.json();
    if (!Array.isArray(body.icons)) throw new Error(`catalog page ${page} has no icons array`);
    return body.icons;
  }),
);

if (pages[5].length !== 0) throw new Error(`expected an empty page 5, got ${pages[5].length}`);
const icons = pages.slice(0, 5).flat();
if (icons.length !== 486) throw new Error(`expected 486 icons, got ${icons.length}`);

for (const icon of icons) {
  if (!icon.webmUrl || !icon.svgUrl) {
    throw new Error(`${icon.slug} is missing webmUrl or svgUrl`);
  }
}

await mkdir(mediaDir, { recursive: true });
await mkdir(iconDir, { recursive: true });
await mkdir(join(root, "data"), { recursive: true });

const usedNames = new Map();

function componentName(slug) {
  const base = slug
    .split("-")
    .map((part) => {
      const clean = part.replace(/[^a-zA-Z0-9]/g, "");
      if (!clean) return "";
      return clean[0].toUpperCase() + clean.slice(1);
    })
    .join("");
  const named = /^[0-9]/.test(base) ? `Icon${base}` : base;
  if (!/^[A-Za-z]/.test(named)) throw new Error(`cannot name component from slug ${slug}`);
  const seen = usedNames.get(named) ?? 0;
  usedNames.set(named, seen + 1);
  return seen === 0 ? named : `${named}${seen + 1}`;
}

async function download(url, file) {
  let lastError;
  for (let attempt = 1; attempt <= 4; attempt += 1) {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`${response.status} ${url}`);
      const bytes = Buffer.from(await response.arrayBuffer());
      if (bytes.length === 0) throw new Error(`empty ${url}`);
      await writeFile(file, bytes);
      return;
    } catch (error) {
      lastError = error;
    }
  }
  throw lastError;
}

const jobs = icons.map((icon, index) => ({
  icon,
  index,
  exportName: componentName(icon.slug),
}));
const queue = [...jobs];
let finished = 0;
const records = new Array(icons.length);

async function worker() {
  while (queue.length > 0) {
    const job = queue.shift();
    const { icon, index, exportName } = job;
    const stem = `${String(index).padStart(4, "0")}-${icon.slug}`;
    const webmFile = `${stem}.webm`;
    const svgFile = `${stem}.svg`;
    await download(icon.webmUrl, join(mediaDir, webmFile));
    await download(icon.svgUrl, join(mediaDir, svgFile));
    const source = `import webmUrl from "../media/${webmFile}";
import svgUrl from "../media/${svgFile}";
import { UnicornIcon } from "../player.jsx";

export function ${exportName}(props) {
  return <UnicornIcon webmUrl={webmUrl} svgUrl={svgUrl} {...props} />;
}

export default ${exportName};
`;
    await writeFile(join(iconDir, `${exportName}.jsx`), source);
    records[index] = {
      id: icon.id,
      name: icon.name,
      slug: icon.slug,
      category: icon.category?.name ?? "",
      style: icon.style?.name ?? "",
      exportName,
    };
    finished += 1;
    if (finished % 25 === 0 || finished === icons.length) {
      console.log(`saved ${finished} of ${icons.length}`);
    }
  }
}

await Promise.all(Array.from({ length: 12 }, () => worker()));

if (records.some((record) => !record)) throw new Error("a record was not written");

const catalog = `import { lazy } from "react";

export const unicornCatalog = [
${records
  .map(
    (record) => `  {
    id: ${JSON.stringify(record.id)},
    name: ${JSON.stringify(record.name)},
    slug: ${JSON.stringify(record.slug)},
    category: ${JSON.stringify(record.category)},
    style: ${JSON.stringify(record.style)},
    Component: lazy(() => import("./icons/${record.exportName}.jsx")),
  },`,
  )
  .join("\n")}
];
`;

await writeFile(join(root, "catalog.js"), catalog);
await writeFile(join(root, "data", "icons.json"), JSON.stringify(icons));
console.log(`components ${records.length}`);
