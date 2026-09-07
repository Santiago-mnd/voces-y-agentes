import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const dist = 'dist';
const data = JSON.parse(readFileSync('src/data/proyectos.json', 'utf8'));
const slugs = data.proyectos.map((p) => p.slug);
const routes = ['/nuestros-antecedentes', '/proyectos', ...slugs.map((s) => `/proyectos/${s}`)];

const shell = readFileSync(join(dist, 'index.html'), 'utf8');

for (const route of routes) {
  const dir = join(dist, route.replace(/^\//, ''));
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'index.html'), shell);
  console.log('prerendered:', route);
}

console.log(`listo: ${routes.length} rutas prerenderizadas`);
