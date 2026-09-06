#!/usr/bin/env node
// Valida src/data/proyectos.json antes de cada build (npm run prebuild).
// Un proyecto inválido rompe el build a propósito: mejor truena aquí que publicar una ficha rota.
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const file = join(root, 'src', 'data', 'proyectos.json');

const ESTADOS = new Set(['diseño', 'piloto', 'en-marcha', 'finalizado']);
const REDES = new Set(['instagram', 'tiktok', 'facebook', 'linkedin', 'web']);

const errors = [];
let data;

try {
  data = JSON.parse(readFileSync(file, 'utf8'));
} catch (e) {
  console.error(`✗ ${file} no es JSON válido: ${e.message}`);
  process.exit(1);
}

if (!Array.isArray(data.proyectos) || data.proyectos.length === 0) {
  console.error('✗ "proyectos" debe ser un array con al menos un proyecto.');
  process.exit(1);
}

const slugs = new Set();
const req = (cond, slug, campo) => { if (!cond) errors.push(`[${slug || '?'}] falta o es inválido: ${campo}`); };

for (const p of data.proyectos) {
  const s = p.slug || '?';
  req(typeof p.slug === 'string' && /^[a-z0-9-]+$/.test(p.slug), s, `slug (minúsculas-con-guiones): "${p.slug}"`);
  if (slugs.has(p.slug)) errors.push(`[${s}] slug duplicado`);
  slugs.add(p.slug);

  req(typeof p.nombre === 'string' && p.nombre.trim(), s, 'nombre');
  req(typeof p.tema === 'string' && p.tema.trim(), s, 'tema');
  req(ESTADOS.has(p.estado), s, `estado "${p.estado}" (válidos: ${[...ESTADOS].join(', ')})`);
  req(typeof p.resumen === 'string' && p.resumen.trim().length > 20, s, 'resumen (>20 chars)');
  req(typeof p.pasoPorVyA === 'string' && p.pasoPorVyA.trim(), s, 'pasoPorVyA');

  req(Array.isArray(p.cifras) && p.cifras.length >= 1, s, 'cifras (>=1)');
  for (const c of p.cifras || []) {
    req(typeof c.valor === 'string' && c.valor.trim(), s, 'cifra.valor');
    req(typeof c.label === 'string' && c.label.trim(), s, 'cifra.label');
  }

  req(p.testimonio && typeof p.testimonio.texto === 'string' && p.testimonio.texto.trim(), s, 'testimonio.texto');

  req(Array.isArray(p.territorios) && p.territorios.length >= 1, s, 'territorios (>=1)');
  req(typeof p.fuente === 'string' && p.fuente.trim(), s, 'fuente (citación obligatoria)');

  for (const r of p.redes || []) {
    req(REDES.has(r.tipo), s, `red.tipo "${r.tipo}" (válidos: ${[...REDES].join(', ')})`);
    req(typeof r.url === 'string' && /^https:\/\//.test(r.url), s, `red.url https: ${r.url}`);
  }

  if (p.media?.galeria !== undefined) {
    req(Array.isArray(p.media.galeria), s, 'media.galeria debe ser array');
  }
}

if (errors.length) {
  console.error(`✗ proyectos.json inválido (${errors.length} error/es):`);
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}

console.log(`✓ proyectos.json OK — ${data.proyectos.length} proyecto/s válido/s`);
