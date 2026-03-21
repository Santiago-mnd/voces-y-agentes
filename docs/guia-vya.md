# Guía rápida de estilo y SEO · Voces y Agentes

Documento vivo para recordar lineamientos acordados antes de tocar el micrositio.

## Identidad visual
- **Paleta base (variables en `src/index.css`):**
  - `--color-surface` (`#f4f1e8`) fondo crema. Evita blancos puros; usa `bg-surface` o `text-surface`.
  - `--color-primary` (`#ff7300`) naranja; CTA principales.
  - `--color-primary-soft` (`#fdb725`) amarillo; bloques destacados.
  - `--color-secondary` (`#0969a7`) azul; headings largos, enlaces.
  - `--color-success` (`#13853c`) verde; botones de registro.
  - `--color-accent` (`#fd77b4`) rosa para detalles.
  - `--color-deep` (`#0f172a`) reservar para fondos oscuros, no usar en texto plano para evitar “negro puro”.
  - `--color-neutral` (`#545454`) texto de párrafos y listas. Sustituye cualquier `#000`/`text-black`.
- **No usar:** `#000000` ni `#ffffff`. Para blancos usa `text-surface`; para negros, `text-neutral` o un color de la paleta.
- Fondo general siempre crema; no introducir paneles blancos salvo la sección de aliados (requisito del logo GOYN).
- Diagonales se generan con `SectionWrapper` + `diagonal` y `::before`. No recortar secciones manualmente.

## Tipografía
- `font-heading`: **TAN St. Canard** para H1–H3, CTA, labels.
- `font-body`: **Nunito Sans** para párrafos y listas.
- Mantener tracking alto en mayúsculas (`tracking-[0.3em]` o similar).

## Copys y tono
- Voces inclusivas (“juventudes”, “nosotras/os”).
- Reforzar keywords: “Voces y Agentes”, “VyA”, “GOYN México”, “laboratorio juvenil”, “Iztapalapa · Cuauhtémoc · Ecatepec”.
- No inventar datos: usar placeholders sólo si están claramente marcados para actualizar.

## SEO / Accesibilidad
- `index.html` ya contiene metas, JSON-LD de organización, manifest, robots y sitemap. Actualizar `og:image`, `icons` y `sitemap` cuando cambien rutas.
- FAQ incluye marcado `FAQPage` (ver `src/components/sections/FAQ.tsx`). Si agregas preguntas, se actualiza automáticamente.
- Navegación sticky usa `aria-label` y PostHog. Añadir nuevas secciones → actualizar `links`.
- Mantener `body` con `text-neutral`. Si un componente necesita otro color, especificarlo explícitamente.
- Todas las imágenes deben tener `alt` significativo (o vacío si puramente decorativas y se usa `aria-hidden`).

## Componentes clave
- **Hero:** CTA dobles (calendario/registro). Copy siempre real, sin lorem ipsum.
- **Calendario:** usa `sessions` en `Schedule.tsx` con objetos `{ weekday, date, format, time, topic, cycle }`. Semana 1:1 al final.
- **Registro:** CTA “Ir al formulario oficial” siempre apunta al form de Microsoft.
- **Supporters:** Fondo blanco obligatorio por logos; cards centradas.

## Analítica
- PostHog se usa para navbar, FAQ y registro. Al crear nuevos botones externos, dispara un evento descriptivo.

Actualiza este documento cada vez que se acuerde una regla nueva para evitar regresiones.***
