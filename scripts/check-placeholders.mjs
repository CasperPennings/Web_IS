// Lists every placeholder still present in src/content.
// Run `npm run check:placeholders`; add `--strict` to exit 1 if any remain
// (use it in the production build once real data is in).
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const dir = new URL("../src/content/", import.meta.url).pathname;
let total = 0;

for (const file of readdirSync(dir).filter((f) => f.endsWith(".ts"))) {
  const lines = readFileSync(join(dir, file), "utf8").split("\n");
  const hits = lines
    .map((text, i) => ({ text: text.trim(), line: i + 1 }))
    .filter(({ text }) => /placeholder: true/.test(text) || /^\/\/ .*placeholder/i.test(text));
  const count = lines.filter((l) => /placeholder: true/.test(l)).length;
  if (hits.length) {
    console.log(`\n${file}: ${count} placeholder item(s)`);
    for (const h of hits) console.log(`  line ${h.line}: ${h.text}`);
  }
  total += count;
}

console.log(`\n${total} placeholder item(s) remaining.`);
if (total > 0 && process.argv.includes("--strict")) process.exit(1);
