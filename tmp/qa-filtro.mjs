import { chromium } from '@playwright/test';
const b = await chromium.launch();
for (const vp of [{w:1280,h:800,name:'desktop'},{w:768,h:1024,name:'tablet'},{w:390,h:844,name:'phone'}]) {
  const page = await b.newPage({ viewport: { width: vp.w, height: vp.h } });
  await page.goto('https://vocesyagentes.goynmexico.org/proyectos', { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(2500);
  const input = page.locator('input[type="search"], input[type="text"], select, [class*="filter"] input, [class*="search"] input').first();
  if (await input.count()) { await input.scrollIntoViewIfNeeded(); } else { await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight * 0.35)); }
  await page.waitForTimeout(2500);
  await page.screenshot({ path: `/tmp/vya-filtro-${vp.name}.png` });
  // metrics of the filter row vs search input
  const metrics = await page.evaluate(() => {
    const q = (s) => [...document.querySelectorAll(s)].map(el => { const r = el.getBoundingClientRect(); return { sel: s, cls: el.className.toString().slice(0,60), x: Math.round(r.x), y: Math.round(r.y), w: Math.round(r.width), h: Math.round(r.height) }; });
    return [...q('input'), ...q('select'), ...q('button')].filter(e => e.w > 0).slice(0, 12);
  });
  console.log(vp.name, JSON.stringify(metrics));
  await page.close();
}
await b.close();
