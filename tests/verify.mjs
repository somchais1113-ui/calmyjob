import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { Script } from 'node:vm';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const script = html.match(/<script>([\s\S]*?)<\/script>/)?.[1];
assert.ok(script, 'Inline dashboard JavaScript exists');
new Script(script, { filename: 'index.html:inline.js' });

const sample = script.match(/const SAMPLE=([\s\S]*?);\s*const STORAGE=/)?.[1];
const calc = script.match(/function calc\(company,scenario,mode\)\s*\{[\s\S]*?\n\}\nconst numberInput=/)?.[0]?.replace(/\nconst numberInput=$/, '');
assert.ok(sample && calc, 'Sample data and calculation function found');
// The extracted source is the repository's own trusted code.
const getModel = new Function(`const SAMPLE=${sample};\n${calc}\nreturn {SAMPLE,calc};`);
const { SAMPLE, calc: calculate } = getModel();

const current = calculate(SAMPLE.current, 'base', 'source');
const offer = calculate(SAMPLE.offer, 'base', 'source');
assert.equal(current.salary, 2184000);
assert.equal(current.fixedBonus, 182000);
assert.equal(current.allowances, 18000);
assert.equal(current.bonus, 425880);
assert.equal(current.pvd, 218400);
assert.equal(current.total, 3078280);
assert.equal(offer.salary, 2640000);
assert.equal(offer.allowances, 120000);
assert.equal(offer.bonus, 440000);
assert.equal(offer.pvd, 211200);
assert.equal(offer.total, 3431200);
assert.equal(offer.total-current.total, 352920);
assert.ok(Math.abs(((offer.total/current.total)-1)*100 - 11.464844003794326) < 1e-4);

const changed = calculate({...SAMPLE.offer,salary:230000}, 'base', 'source');
assert.equal(changed.total, 3580800);

const economic = calculate(SAMPLE.offer, 'base', 'economic');
assert.equal(economic.insurance, SAMPLE.offer.insurancePremium);
assert.equal(economic.total, 3411200);

console.log('PASS: JavaScript syntax and compensation model baseline, live-input math, and benefit mode.');
