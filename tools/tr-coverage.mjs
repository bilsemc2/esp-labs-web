// Türkçe çevirinin kapsamı: her İngilizce metnin Türkçesi var mı, hangileri İngilizce kalmış.
// Kullanım: node tools/tr-coverage.mjs [göreli/yol.json ...]  (yol src/locales/<dil>/ altına göre)
import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const root = new URL("../src/locales/", import.meta.url).pathname;
const walk = (dir) =>
  readdirSync(dir).flatMap((n) => {
    const p = join(dir, n);
    return statSync(p).isDirectory() ? walk(p) : p.endsWith(".json") ? [p] : [];
  });
const files = process.argv.length > 2
  ? process.argv.slice(2)
  : walk(join(root, "en")).map((p) => relative(join(root, "en"), p));

const leaves = (v, path = "", out = new Map()) => {
  if (typeof v === "string") out.set(path, v);
  else if (v && typeof v === "object")
    for (const [k, c] of Object.entries(v)) leaves(c, path ? `${path}.${k}` : k, out);
  return out;
};
// Çevrilse de aynı kalabilecek metinler: kod, sayı, kısa etiket.
const neutral = (s) => !/[a-z]{3,}/.test(s.replace(/<code>.*?<\/code>|\{\{[^}]+\}\}|<[^>]+>/g, ""));

let failed = false;
for (const file of files) {
  const enPath = join(root, "en", file);
  const trPath = join(root, "tr", file);
  if (!existsSync(trPath)) { console.log(`EKSİK DOSYA  ${file}`); failed = true; continue; }
  let tr;
  try { tr = JSON.parse(readFileSync(trPath, "utf8")); }
  catch (e) { console.log(`BOZUK JSON   ${file}: ${e.message}`); failed = true; continue; }
  const en = leaves(JSON.parse(readFileSync(enPath, "utf8")));
  const t = leaves(tr);
  const missing = [...en.keys()].filter((k) => !t.has(k));
  const extra = [...t.keys()].filter((k) => !en.has(k));
  const same = [...en].filter(([k, v]) => t.get(k) === v && !neutral(v)).map(([k]) => k);
  const ok = !missing.length && !extra.length;
  if (!ok) failed = true;
  console.log(`${ok ? "TAMAM" : "SORUN"}  ${file}  ${t.size}/${en.size} metin, ${same.length} aynı kalmış`);
  for (const k of missing.slice(0, 10)) console.log(`   eksik: ${k}`);
  for (const k of extra.slice(0, 10)) console.log(`   fazla: ${k}`);
  for (const k of same.slice(0, 10)) console.log(`   İngilizce kalmış: ${k}`);
}
process.exit(failed ? 1 : 0);
