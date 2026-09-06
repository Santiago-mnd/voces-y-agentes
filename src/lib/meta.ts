// Meta tags dinámicos por página (SPA): actualiza head para crawlers que
// ejecutan JS (Google) y para navegación in-app. Para crawlers sociales que
// NO ejecutan JS (WhatsApp, iMessage, Slack) existe el fallback pre-render
// en el deploy (ver docs del proyecto).
const SITE = 'https://vocesyagentes.goynmexico.org';
const OG_IMAGE = 'https://res.cloudinary.com/ddt0pn1m1/image/upload/v1774118767/VOCES_Y_AGENTES_20260321_122520_0000_wlyzvw.png';

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
  setMeta('property', 'og:url', `${SITE}${path}`);
  setMeta('property', 'og:image', image ?? OG_IMAGE);
  setMeta('property', 'og:type', 'website');
  setMeta('name', 'twitter:card', 'summary_large_image');
  setMeta('name', 'twitter:title', title);
  setMeta('name', 'twitter:description', description);
  setMeta('name', 'twitter:image', image ?? OG_IMAGE);
  setLink('canonical', `${SITE}${path}`);
}
