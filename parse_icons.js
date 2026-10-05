const fs = require('fs');
const html = fs.readFileSync('sources/icon.html', 'utf-8');

// Find all icon items that have both an SVG and a name
// Pattern: items with class "item" that are NOT "unused" and have a name
const iconRegex = /<li-icons-grid-icon class="item[^"]*"(?:(?!unused)[^>])*style="--item-preview[^"]*">([\s\S]*?)(?=<\/li-icons-grid-icon>)/g;

// Also try to find icon names
const nameRegex = /class="name">(?:<!--\?lit\$\d+\$-->)?([^<]+)</g;

let names = [];
let match;
while ((match = nameRegex.exec(html)) !== null) {
  const name = match[1].trim();
  if (name && name !== '') {
    names.push(name);
  }
}

console.log("=== ICON NAMES FOUND ===");
console.log(JSON.stringify(names, null, 2));
console.log(`\nTotal icons with names: ${names.length}`);

// Also extract SVG data for icons that have SVGs
const svgBlockRegex = /<div id="animation" class="preview"><svg[^>]*>([\s\S]*?)<\/svg><\/div>/g;
let svgCount = 0;
while ((match = svgBlockRegex.exec(html)) !== null) {
  svgCount++;
}
console.log(`\nTotal SVG blocks found: ${svgCount}`);

// Try to match SVGs with their names by finding the complete icon blocks
// An icon block contains: SVG preview + name
const fullBlockRegex = /<li-icons-grid-icon class="item[^"]*"[^>]*>([\s\S]*?)<\/li-icons-grid-icon>/g;
let blocks = [];
while ((match = fullBlockRegex.exec(html)) !== null) {
  const block = match[1];
  const hasUnused = match[0].includes('unused');
  
  // Extract name from block
  const nameMatch = /class="name">(?:<!--\?lit\$\d+\$-->)?([^<]*)</.exec(block);
  const name = nameMatch ? nameMatch[1].trim() : '';
  
  // Extract SVG from block
  const svgMatch = /<svg[^>]*>([\s\S]*?)<\/svg>/.exec(block);
  const hasSvg = !!svgMatch;
  
  if (!hasUnused && name) {
    blocks.push({ name, hasSvg });
  }
}

console.log("\n=== ICON BLOCKS WITH NAMES (non-unused) ===");
blocks.forEach(b => console.log(`  ${b.name} - hasSVG: ${b.hasSvg}`));
console.log(`\nTotal named non-unused blocks: ${blocks.length}`);
