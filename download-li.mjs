import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const catalogPath = "sources/lordicon.com/api/library/icons__q_30cbf57306c0";
const outDir = "li";
const media = "https://media.lordicon.com";

const { icons } = JSON.parse(await readFile(catalogPath, "utf8"));
const unique = new Map();
for (const icon of icons) {
  const file = `${icon.index}-${icon.name}.li`;
  unique.set(`${icon.family}/${icon.style}/${file}`, icon);
}

await mkdir(outDir, { recursive: true });
let ok = 0;
for (const icon of unique.values()) {
  const file = `${icon.index}-${icon.name}.li`;
  const url = `${media}/icons/${icon.family}/${icon.style}/${file}`;
  const response = await fetch(url);
  if (!response.ok) {
    console.error(response.status, url);
    continue;
  }
  const dir = path.join(outDir, icon.family, icon.style);
  await mkdir(dir, { recursive: true });
  await writeFile(path.join(dir, file), await response.text());
  ok++;
  console.log(ok, file);
}
console.log(`saved ${ok} of ${unique.size}`);
