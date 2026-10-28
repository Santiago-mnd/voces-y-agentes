import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { AppShell } from './App.tsx'
import { getPageMeta, OG_IMAGE, SITE } from './lib/meta.ts'
export { canonicalUrl } from './lib/meta.ts'
import type { PageMeta } from './lib/meta.ts'

export const siteInfo = { url: SITE, ogImage: OG_IMAGE }

export function render(url: string): { html: string; meta: PageMeta } {
  const html = renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <AppShell />
      </StaticRouter>
    </StrictMode>
  )
  return { html, meta: getPageMeta(url) }
}
