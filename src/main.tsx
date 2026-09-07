import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { PostHogProvider } from '@posthog/react'

const options = {
  api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST,
  defaults: '2026-01-30',
} as const

const redirectTarget = sessionStorage.getItem('redirect')
if (redirectTarget) {
  sessionStorage.removeItem('redirect')
  const target = new URL(redirectTarget)
  const here = new URL(window.location.href)
  if (target.origin === here.origin && target.pathname !== here.pathname) {
    window.history.replaceState(null, '', target.pathname + target.search + target.hash)
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PostHogProvider apiKey={import.meta.env.VITE_PUBLIC_POSTHOG_KEY} options={options}>
      <App />
    </PostHogProvider>
  </StrictMode>
)
