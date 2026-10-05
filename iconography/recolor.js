const PRIMARY = [0x12 / 255, 0x13 / 255, 0x31 / 255];
const WHITE = [1, 1, 1];

function near(left, right) {
  return Math.abs(left - right) < 1 / 255;
}

function same(color, target) {
  return near(color[0], target[0]) && near(color[1], target[1]) && near(color[2], target[2]);
}

export function cssColorToRgb(value, container) {
  if (!value) return null;
  const text = String(value).trim();
  const hex = /^#?([0-9a-f]{6})$/i.exec(text);
  if (hex) {
    return [
      parseInt(hex[1].slice(0, 2), 16) / 255,
      parseInt(hex[1].slice(2, 4), 16) / 255,
      parseInt(hex[1].slice(4, 6), 16) / 255,
    ];
  }
  const short = /^#?([0-9a-f]{3})$/i.exec(text);
  if (short) {
    return [
      parseInt(short[1][0] + short[1][0], 16) / 255,
      parseInt(short[1][1] + short[1][1], 16) / 255,
      parseInt(short[1][2] + short[1][2], 16) / 255,
    ];
  }
  if (!container || typeof document === "undefined") return null;
  const probe = document.createElement("span");
  probe.style.color = text;
  container.appendChild(probe);
  const channels = getComputedStyle(probe).color.match(/[\d.]+/g);
  probe.remove();
  if (!channels) return null;
  return [Number(channels[0]) / 255, Number(channels[1]) / 255, Number(channels[2]) / 255];
}

function paint(color, next) {
  if (!Array.isArray(color) || color.length < 3 || typeof color[0] !== "number") return;
  if (next.primary && same(color, PRIMARY)) {
    color[0] = next.primary[0];
    color[1] = next.primary[1];
    color[2] = next.primary[2];
    return;
  }
  if (next.accent && !same(color, WHITE) && !same(color, PRIMARY)) {
    color[0] = next.accent[0];
    color[1] = next.accent[1];
    color[2] = next.accent[2];
  }
}

function paintValue(value, next) {
  if (Array.isArray(value) && typeof value[0] === "number") {
    paint(value, next);
    return;
  }
  if (!Array.isArray(value)) return;
  for (const frame of value) {
    if (!frame || typeof frame !== "object") continue;
    if (Array.isArray(frame.s)) paint(frame.s, next);
    if (Array.isArray(frame.e)) paint(frame.e, next);
  }
}

function walk(node, next) {
  if (!node || typeof node !== "object") return;
  if (Array.isArray(node)) {
    for (const item of node) walk(item, next);
    return;
  }
  if (node.c) paintValue(node.c.k, next);
  for (const value of Object.values(node)) walk(value, next);
}

export function recolorAnimation(data, primary, accent) {
  if (!primary && !accent) return data;
  walk(data, { primary, accent });
  return data;
}
