import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const catalogPath = "sources/lordicon.com/api/library/icons__q_30cbf57306c0";
const markupPath = "sources/icon.html";
const liDir = path.join("li", "system", "outline");
const outDir = "iconography";
const dataDir = path.join(outDir, "data");

function decodeLi(text) {
  const bytes = Buffer.from(text.trim(), "base64");
  for (let i = 0; i < bytes.length; i++) bytes[i] ^= 42;
  return JSON.parse(bytes.toString("utf8"));
}

function parseStates(animationData) {
  return (animationData.markers || [])
    .map((marker) => {
      const parts = String(marker.cm).split(":");
      const state = { name: "", default: false };
      while (parts[0] === "default") {
        state.default = true;
        parts.shift();
      }
      if (parts[0] && !/^[a-z0-9-]+$/.test(parts[0])) {
        throw new Error(`Unexpected marker: ${marker.cm}`);
      }
      state.name = parts[0] || "";
      return state;
    })
    .filter((state) => state.name);
}

function componentName(icon, duplicates) {
  const base = icon.name
    .split("-")
    .filter(Boolean)
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .join("");
  const name = duplicates.has(icon.name) ? `${base}${icon.index}` : base;
  if (!/^[A-Za-z_$][\w$]*$/.test(name)) {
    throw new Error(`Invalid component name ${name} for ${icon.name}`);
  }
  return name;
}

const markup = await readFile(markupPath, "utf8");
const markupNames = [
  ...markup.matchAll(/class="name">(?:<!--\?lit\$\d+\$-->)?([a-z0-9-]+)<\/div>/g),
].map((match) => match[1]);

const { icons } = JSON.parse(await readFile(catalogPath, "utf8"));
const unique = [];
const seen = new Set();
for (const icon of icons) {
  const key = `${icon.family}/${icon.style}/${icon.index}-${icon.name}`;
  if (seen.has(key)) continue;
  seen.add(key);
  unique.push(icon);
}

const nameCounts = new Map();
for (const icon of unique) nameCounts.set(icon.name, (nameCounts.get(icon.name) || 0) + 1);
const duplicates = new Set([...nameCounts].filter(([, count]) => count > 1).map(([name]) => name));

await mkdir(dataDir, { recursive: true });

const entries = [];
for (const icon of unique) {
  if (icon.family !== "system" || icon.style !== "outline") {
    throw new Error(`Catalog icon is outside system/outline: ${icon.family}/${icon.style}`);
  }
  const file = `${icon.index}-${icon.name}.li`;
  const animation = decodeLi(await readFile(path.join(liDir, file), "utf8"));
  const states = parseStates(animation);
  const defaultState = states.find((state) => state.default);
  if (!defaultState) throw new Error(`${file} has no default state`);
  const exportName = componentName(icon, duplicates);
  const jsonName = `${icon.index}-${icon.name}.json`;
  await writeFile(path.join(dataDir, jsonName), JSON.stringify(animation));
  await writeFile(
    path.join(outDir, `${exportName}.jsx`),
    `import animation from "./data/${jsonName}";
import { Lordicon } from "./player.jsx";

export function ${exportName}(props) {
  return <Lordicon animationData={animation} {...props} />;
}

export default ${exportName};
`,
  );
  entries.push({
    index: icon.index,
    name: icon.name,
    title: icon.title,
    family: icon.family,
    style: icon.style,
    defaultState: defaultState.name,
    component: exportName,
  });
}

const missing = markupNames.filter((name) => !entries.some((icon) => icon.name === name));
if (missing.length) {
  throw new Error(`Markup icons missing from .li files: ${missing.join(", ")}`);
}

const catalog = entries
  .map(
    (icon) => `  {
    index: ${icon.index},
    name: ${JSON.stringify(icon.name)},
    title: ${JSON.stringify(icon.title)},
    family: ${JSON.stringify(icon.family)},
    style: ${JSON.stringify(icon.style)},
    defaultState: ${JSON.stringify(icon.defaultState)},
    Component: lazy(() => import("./${icon.component}.jsx")),
  }`,
  )
  .join(",\n");

await writeFile(
  path.join(outDir, "catalog.js"),
  `import { lazy } from "react";

export const catalog = [
${catalog},
];
`,
);

console.log(`wrote ${entries.length} components`);
console.log(`markup icons found: ${markupNames.join(", ")}`);
