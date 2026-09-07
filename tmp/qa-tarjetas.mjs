import { chromium } from '@playwright/test';

const BASE = 'http://localhost:4173/';
const out = (n) => `/root/vya-qa-${n}.png`;
const browser = await chromium.launch();

async function shot(page, name) {
  await page.screenshot({ path: out(name), fullPage: false });
  console.log(`shot: ${out(name)}`);
}

// ---------- Desktop 1280 ----------
let page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
await page.goto(BASE, { waitUntil: 'networkidle' });
await page.waitForTimeout(2500); // settle del reveal

const section = page.locator('#participate');
await section.scrollIntoViewIfNeeded();
await page.waitForTimeout(1800); // stagger + onda del hint
await page.evaluate(() => new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r))));

// ¿Las 4 tarjetas quedaron visibles tras el reveal?
const visibles = await page.$$eval('.cycle-card', els =>
  els.map(el => {
    const cs = getComputedStyle(el);
    const r = el.getBoundingClientRect();
    return { op: cs.opacity, rot: cs.transform, w: Math.round(r.width), inview: r.top < innerHeight && r.bottom > 0 };
  })
);
console.log('desktop cards:', JSON.stringify(visibles));

// ¿quedaron con tilt de reposo? (matriz con rotación != identidad)
const matrix = await page.$eval('.cycle-card', el => getComputedStyle(el).transform);
console.log('rest matrix[0]:', matrix);

await page.screenshot({ path: out('1280-reposo'), fullPage: false });
console.log('shot:', out('1280-reposo'));

// hover en la primera tarjeta
await page.hover('.cycle-card:first-child');
await page.waitForTimeout(400);
const hoverT = await page.$eval('.cycle-card:first-child', el => getComputedStyle(el).transform);
console.log('hover matrix:', hoverT);
await shot(page, '1280-hover');

// flip abierto (click)
await page.click('.cycle-card:first-child button');
await page.waitForTimeout(700); // flip abre 520ms + contenido
const flipped = await page.$eval('.cycle-card:first-child .flip-card-inner', el => getComputedStyle(el).transform);
console.log('flip matrix:', flipped);
const backVisible = await page.$eval('.cycle-card:first-child .flip-card-back .flip-card-content', el => getComputedStyle(el).opacity);
console.log('back content opacity:', backVisible);
await shot(page, '1280-flip');

// focus por teclado en otra tarjeta (anillo ::after)
await page.keyboard.press('Escape');
await page.evaluate(() => document.activeElement?.blur());
await page.click('.cycle-card:nth-child(2) button');
await page.waitForTimeout(300);
await page.evaluate(() => document.activeElement?.blur());
await page.focus('.cycle-card:nth-child(3) button');
await page.waitForTimeout(400);
const ring = await page.$eval('.cycle-card:nth-child(3)', el => getComputedStyle(el, '::after').opacity);
console.log('focus ring opacity:', ring);
await shot(page, '1280-focus');
await page.close();

// ---------- Tablet 768 ----------
page = await browser.newPage({ viewport: { width: 768, height: 1024 } });
await page.goto(BASE, { waitUntil: 'networkidle' });
await page.locator('#participate').scrollIntoViewIfNeeded();
await page.waitForTimeout(2000);
const visibles768 = await page.$$eval('.cycle-card', els => els.map(el => getComputedStyle(el).opacity));
console.log('768 cards opacity:', JSON.stringify(visibles768));
await page.screenshot({ path: out('768'), fullPage: false });
console.log('shot:', out('768'));
await page.close();

// ---------- Móvil 390 ----------
page = await browser.newPage({ viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true });
await page.goto(BASE, { waitUntil: 'networkidle' });
await page.locator('#participate').scrollIntoViewIfNeeded();
await page.waitForTimeout(2000);
const visibles390 = await page.$$eval('.cycle-card', els => els.map(el => getComputedStyle(el).opacity));
console.log('390 cards opacity:', JSON.stringify(visibles390));

// overflow horizontal = bug clásico
const overflowX = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
console.log('390 overflow-x:', overflowX);
await page.screenshot({ path: out('390'), fullPage: false });
console.log('shot:', out('390'));

// tap = flip en móvil
await page.tap('.cycle-card:first-child button');
await page.waitForTimeout(700);
const flipM = await page.$eval('.cycle-card:first-child .flip-card-inner', el => getComputedStyle(el).transform);
console.log('390 flip matrix:', flipM);
await shot(page, '390-flip');

await browser.close();
console.log('QA DONE');
