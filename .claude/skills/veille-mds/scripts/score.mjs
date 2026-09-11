// Score de surperformance : vues du post / moyenne du compte (moyenne tronquée : sans le max ni le min).
// node scripts/score.mjs posts.json [--min 2] [--top 5]
import fs from 'node:fs';
const args = process.argv.slice(2); const file = args.find(a => !a.startsWith('--'));
const opt = (n, d) => { const i = args.indexOf('--' + n); return i > -1 ? +args[i + 1] : d; };
if (!file) { console.error('Usage : node scripts/score.mjs posts.json [--min 2] [--top 5]'); process.exit(1); }
const posts = JSON.parse(fs.readFileSync(file, 'utf8'));
const par = {};
for (const p of posts) (par[p.compte] = par[p.compte] || []).push(p);
const moy = {};
for (const c in par) {
  const v = par[c].map(p => +p.vues || 0).sort((a, b) => a - b);
  const t = v.length > 2 ? v.slice(1, -1) : v;
  moy[c] = t.length ? Math.round(t.reduce((a, b) => a + b, 0) / t.length) : 0;
}
const scored = posts.map(p => ({ ...p, moyenne: moy[p.compte], score: moy[p.compte] ? +((+p.vues || 0) / moy[p.compte]).toFixed(2) : 0 }))
  .filter(p => p.score >= opt('min', 2)).sort((a, b) => b.score - a.score).slice(0, opt('top', 5));
console.log(JSON.stringify({ moyennes: moy, top: scored }, null, 2));
