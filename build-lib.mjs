import { mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import * as esbuild from "esbuild";

const root = import.meta.dirname;
const dist = join(root, "dist");

async function jsx(source) {
  const result = await esbuild.transform(source, {
    loader: "jsx",
    format: "esm",
    jsx: "automatic",
  });
  return result.code;
}

function declaration(name, propsType, propsPath) {
  return `import type { ReactElement } from "react";
import type { ${propsType} } from "${propsPath}";

export declare function ${name}(props: ${propsType}): ReactElement;
export default ${name};
`;
}

await rm(dist, { recursive: true, force: true });
await mkdir(join(dist, "lordicon", "icons"), { recursive: true });
await mkdir(join(dist, "unicorn", "icons"), { recursive: true });

const lordiconProps = `import type { CSSProperties } from "react";

export interface LordiconProps {
  size?: number | string;
  color?: string;
  accent?: string;
  state?: string;
  className?: string;
  style?: CSSProperties;
  title?: string;
}
`;
const unicornProps = `import type { CSSProperties } from "react";

export interface UnicornIconProps {
  size?: number | string;
  className?: string;
  style?: CSSProperties;
  title?: string;
}
`;
await writeFile(join(dist, "lordicon", "props.d.ts"), lordiconProps);
await writeFile(join(dist, "unicorn", "props.d.ts"), unicornProps);

const player = await readFile(join(root, "iconography", "player.jsx"), "utf8");
await writeFile(join(dist, "lordicon", "player.js"), await jsx(player));
await writeFile(
  join(dist, "lordicon", "recolor.js"),
  await readFile(join(root, "iconography", "recolor.js")),
);

const lordiconFiles = (await readdir(join(root, "iconography"))).filter(
  (name) => name.endsWith(".jsx") && name !== "player.jsx",
);
const lordiconNames = [];
for (const file of lordiconFiles) {
  const source = await readFile(join(root, "iconography", file), "utf8");
  const jsonName = source.match(/import animation from "\.\/data\/([^"]+)";/)?.[1];
  if (!jsonName) throw new Error(`missing animation import in ${file}`);
  const json = await readFile(join(root, "iconography", "data", jsonName), "utf8");
  const rewritten = source
    .replace(`import animation from "./data/${jsonName}";`, `const animation = ${json};`)
    .replace('from "./player.jsx"', 'from "../player.js"');
  const exportName = file.slice(0, -4);
  await writeFile(join(dist, "lordicon", "icons", `${exportName}.js`), await jsx(rewritten));
  await writeFile(
    join(dist, "lordicon", "icons", `${exportName}.d.ts`),
    declaration(exportName, "LordiconProps", "../props.js"),
  );
  lordiconNames.push(exportName);
}

const unicornPlayer = await readFile(join(root, "unicorn icons", "player.jsx"), "utf8");
await writeFile(join(dist, "unicorn", "player.js"), await jsx(unicornPlayer));

const unicornFiles = (await readdir(join(root, "unicorn icons", "icons"))).filter((name) => name.endsWith(".jsx"));
const unicornNames = [];
let count = 0;
for (const file of unicornFiles) {
  const source = await readFile(join(root, "unicorn icons", "icons", file), "utf8");
  const webmName = source.match(/import webmUrl from "\.\.\/media\/([^"]+)";/)?.[1];
  const svgName = source.match(/import svgUrl from "\.\.\/media\/([^"]+)";/)?.[1];
  if (!webmName || !svgName) throw new Error(`missing media import in ${file}`);
  const webm = (await readFile(join(root, "unicorn icons", "media", webmName))).toString("base64");
  const svg = (await readFile(join(root, "unicorn icons", "media", svgName))).toString("base64");
  const rewritten = source
    .replace(/import webmUrl from "\.\.\/media\/[^"]+";\r?\n/, "")
    .replace(/import svgUrl from "\.\.\/media\/[^"]+";\r?\n/, "")
    .replace('from "../player.jsx"', 'from "../player.js"')
    .replace(
      "export function",
      `const webmUrl = ${JSON.stringify(`data:video/webm;base64,${webm}`)};\nconst svgUrl = ${JSON.stringify(`data:image/svg+xml;base64,${svg}`)};\n\nexport function`,
    );
  const exportName = file.slice(0, -4);
  await writeFile(join(dist, "unicorn", "icons", `${exportName}.js`), await jsx(rewritten));
  await writeFile(
    join(dist, "unicorn", "icons", `${exportName}.d.ts`),
    declaration(exportName, "UnicornIconProps", "../props.js"),
  );
  unicornNames.push(exportName);
  count += 1;
  if (count % 50 === 0 || count === unicornFiles.length) console.log(`unicorn ${count} of ${unicornFiles.length}`);
}

function indexJs(names) {
  return `${names.map((name) => `export { ${name} } from "./icons/${name}.js";`).join("\n")}\n`;
}
function indexDts(names, propsType) {
  return `export type { ${propsType} } from "./props.js";
${names.map((name) => `export { ${name} } from "./icons/${name}.js";`).join("\n")}
`;
}

await writeFile(join(dist, "lordicon", "index.js"), indexJs(lordiconNames));
await writeFile(join(dist, "lordicon", "index.d.ts"), indexDts(lordiconNames, "LordiconProps"));
await writeFile(join(dist, "unicorn", "index.js"), indexJs(unicornNames));
await writeFile(join(dist, "unicorn", "index.d.ts"), indexDts(unicornNames, "UnicornIconProps"));
console.log(`lordicon ${lordiconNames.length}, unicorn ${unicornNames.length}`);
