import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

process.env.NODE_ENV = 'production'

interface PageMeta {
  title: string
  description: string
  path: string
  image?: string
}

interface ServerModule {
  render: (url: string) => { html: string; meta: PageMeta }
  siteInfo: { url: string; ogImage: string }
  canonicalUrl: (path: string) => string
}

interface ProyectosData {
  proyectos: { slug: string }[]
}

const rootDir = fileURLToPath(new URL('../', import.meta.url))
const distDir = join(rootDir, 'dist')
const serverDir = join(rootDir, 'dist-server')
const serverEntry = join(serverDir, 'entry-server.js')

function escapeText(value: string): string {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function escapeAttribute(value: string): string {
  return escapeText(value).replace(/"/g, '&quot;').replace(/'/g, '&#39;')
}

function replaceOnce(html: string, pattern: RegExp, replacement: string, label: string): string {
  const matches = html.match(new RegExp(pattern.source, pattern.flags.replace('g', '') + 'g'))
  if (!matches || matches.length === 0) {
    throw new Error(`La plantilla no tiene ${label}`)
  }
  if (matches.length > 1) {
    throw new Error(`La plantilla tiene ${matches.length} veces ${label}; se esperaba una`)
  }
  return html.replace(pattern, () => replacement)
}

function setTagAttribute(
  html: string,
  tagName: 'meta' | 'link',
  keyAttribute: string,
  keyValue: string,
  targetAttribute: string,
  value: string
): string {
  const label = `<${tagName} ${keyAttribute}="${keyValue}">`
  const tagPattern = new RegExp(`<${tagName}\\b(?:[^>"']|"[^"]*"|'[^']*')*>`, 'g')
  const keyPattern = new RegExp(`\\s${keyAttribute}\\s*=\\s*"${keyValue}"`)
  const targetPattern = new RegExp(`(\\s${targetAttribute}\\s*=\\s*)"[^"]*"`)

  const tags = html.match(tagPattern) ?? []
  const matching = tags.filter((tag) => keyPattern.test(tag))
  if (matching.length === 0) {
    throw new Error(`La plantilla no tiene ${label}`)
  }
  if (matching.length > 1) {
    throw new Error(`La plantilla tiene ${matching.length} veces ${label}; se esperaba una`)
  }
  const tag = matching[0]
  if (!targetPattern.test(tag)) {
    throw new Error(`${label} no tiene el atributo ${targetAttribute}`)
  }
  const updated = tag.replace(targetPattern, (_whole, prefix: string) => `${prefix}"${escapeAttribute(value)}"`)
  return html.replace(tag, () => updated)
}

function applyMeta(template: string, meta: PageMeta, url: string, ogImage: string): string {
  const image = meta.image ?? ogImage
  let html = template

  html = replaceOnce(html, /<title>[\s\S]*?<\/title>/, `<title>${escapeText(meta.title)}</title>`, '<title>')
  html = setTagAttribute(html, 'meta', 'name', 'description', 'content', meta.description)
  html = setTagAttribute(html, 'meta', 'property', 'og:title', 'content', meta.title)
  html = setTagAttribute(html, 'meta', 'property', 'og:description', 'content', meta.description)
  html = setTagAttribute(html, 'meta', 'property', 'og:url', 'content', url)
  html = setTagAttribute(html, 'meta', 'property', 'og:image', 'content', image)
  html = setTagAttribute(html, 'meta', 'name', 'twitter:title', 'content', meta.title)
  html = setTagAttribute(html, 'meta', 'name', 'twitter:description', 'content', meta.description)
  html = setTagAttribute(html, 'meta', 'name', 'twitter:image', 'content', image)
  html = setTagAttribute(html, 'link', 'rel', 'canonical', 'href', url)

  return html
}

function injectRoot(template: string, html: string, route: string): string {
  return replaceOnce(
    template,
    /<div id="root"><\/div>/,
    `<div id="root" data-prerendered-path="${escapeAttribute(route)}">${html}</div>`,
    '<div id="root"></div> vacío'
  )
}

function outputFile(route: string): string {
  return route === '/' ? join(distDir, 'index.html') : join(distDir, route.replace(/^\//, ''), 'index.html')
}

async function main(): Promise<void> {
  const data = JSON.parse(readFileSync(join(rootDir, 'src/data/proyectos.json'), 'utf8')) as ProyectosData
  const routes = [
    '/',
    '/nuestros-antecedentes',
    '/proyectos',
    ...data.proyectos.map((proyecto) => `/proyectos/${proyecto.slug}`),
  ]

  const template = readFileSync(join(distDir, 'index.html'), 'utf8')
  const { render, siteInfo, canonicalUrl } = (await import(pathToFileURL(serverEntry).href)) as ServerModule

  const pages = routes.map((route) => {
    const { html, meta } = render(route)
    if (html.trim() === '') {
      throw new Error(`El render de ${route} salió vacío`)
    }
    if (meta.path !== route) {
      throw new Error(`La meta de ${route} apunta a ${meta.path}`)
    }
    return { route, file: outputFile(route), content: injectRoot(applyMeta(template, meta, canonicalUrl(meta.path), siteInfo.ogImage), html, route) }
  })

  for (const { route, file, content } of pages) {
    mkdirSync(dirname(file), { recursive: true })
    writeFileSync(file, content)
    console.log('prerenderizada:', route)
  }

  console.log(`listo: ${routes.length} rutas prerenderizadas`)
}

try {
  await main()
} finally {
  rmSync(serverDir, { recursive: true, force: true })
}
