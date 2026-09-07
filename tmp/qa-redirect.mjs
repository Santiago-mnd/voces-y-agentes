
import { chromium } from '@playwright/test';
const b = await chromium.launch();
const page = await b.newPage();
await page.goto('http://127.0.0.1:8902/proyectos/fuega-autodefensa', { waitUntil: 'networkidle', timeout: 20000 }).catch(() => {});
await page.waitForTimeout(1500);
const url = page.url();
const h1 = await page.locator('h1').first().textContent().catch(() => 'sin h1');
console.log('URL final:', url);
console.log('H1:', h1 ? h1.trim().slice(0, 60) : 'sin h1');
await b.close();
