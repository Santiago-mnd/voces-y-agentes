// Meta tags dinámicos por página (SPA): actualiza head para crawlers que
// ejecutan JS (Google) y para navegación in-app. Para crawlers sociales que
// NO ejecutan JS (WhatsApp, iMessage, Slack) existe el fallback pre-render
// en el deploy (ver docs del proyecto).
import { getProyecto } from '../data/proyectos';

export const SITE = 'https://vocesyagentes.goynmexico.org';
export function canonicalUrl(path: string): string {
  return path === '/' ? `${SITE}/` : `${SITE}${path}/`;
}

export const OG_IMAGE = 'https://res.cloudinary.com/ddt0pn1m1/image/upload/v1774118767/VOCES_Y_AGENTES_20260321_122520_0000_wlyzvw.png';

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export interface PageMeta {
  title: string;
  description: string;
  path: string;
  image?: string;
}

export function setPageMeta({ title, description, path, image }: PageMeta) {
  document.title = title;
  setMeta('name', 'description', description);
  setMeta('property', 'og:title', title);
  setMeta('property', 'og:description', description);
  setMeta('property', 'og:url', canonicalUrl(path));
  setMeta('property', 'og:image', image ?? OG_IMAGE);
  setMeta('property', 'og:type', 'website');
  setMeta('name', 'twitter:card', 'summary_large_image');
  setMeta('name', 'twitter:title', title);
  setMeta('name', 'twitter:description', description);
  setMeta('name', 'twitter:image', image ?? OG_IMAGE);
  setLink('canonical', canonicalUrl(path));
}

const HOME_META: PageMeta = {
  title: 'Voces y Agentes | Laboratorio juvenil GOYN México',
  description: 'Voces y Agentes (VyA) es el laboratorio juvenil de GOYN México que impulsa a jóvenes oportunidad de Iztapalapa, Cuauhtémoc y Ecatepec para pasar de la organización comunitaria a la incidencia política.',
  path: '/',
};

const ANTECEDENTES_META: PageMeta = {
  title: 'Nuestros Antecedentes | Voces y Agentes',
  description: 'El origen de Voces y Agentes: el Programa de Liderazgo para la Equidad (ELP) y el Youth Innovation Fund (YIF) que lo hacen posible.',
  path: '/nuestros-antecedentes',
};

const PROYECTOS_META: PageMeta = {
  title: 'Proyectos seleccionados | Voces y Agentes',
  description: 'Las colectivas juveniles nacidas y acompañadas dentro del laboratorio Voces y Agentes: qué hicieron, qué aprendieron y su impacto en Iztapalapa, Cuauhtémoc y Ecatepec.',
  path: '/proyectos',
};

const NOT_FOUND_META: PageMeta = {
  title: 'Proyecto no encontrado | Voces y Agentes',
  description: 'La página que buscas no existe o cambió de dirección.',
  path: '/proyectos',
};

function normalizePathname(pathname: string): string {
  const withoutQuery = pathname.split(/[?#]/)[0];
  const trimmed = withoutQuery.replace(/\/+$/, '');
  return trimmed === '' ? '/' : trimmed;
}

export function getPageMeta(pathname: string): PageMeta {
  const path = normalizePathname(pathname);

  if (path === '/') return HOME_META;
  if (path === '/nuestros-antecedentes') return ANTECEDENTES_META;
  if (path === '/proyectos') return PROYECTOS_META;

  const match = /^\/proyectos\/([^/]+)$/.exec(path);
  if (match) {
    const p = getProyecto(match[1]);
    if (p) {
      return {
        title: `${p.nombre} — Proyectos | Voces y Agentes`,
        description: p.tagline
          ? `${p.tagline}. ${p.resumen.slice(0, 120)}...`
          : p.resumen.slice(0, 160),
        path: `/proyectos/${p.slug}`,
        image: p.media?.logo ? `${SITE}${p.media.logo}` : undefined,
      };
    }
  }

  return NOT_FOUND_META;
}
