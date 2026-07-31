import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// React Router's <Link> does client-side navigation and does NOT trigger the
// browser's native "scroll to #anchor" behavior. This component watches the
// route/hash and manually scrolls to the matching element whenever it changes,
// so links like `/#how-it-works` or `#how-it-works` actually land the user on
// that section instead of doing nothing.
export default function ScrollToHash() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return

    const id = location.hash.replace('#', '')

    // The target section may not be mounted yet right after a route change
    // (e.g. navigating from /pricing to /#how-it-works), so retry briefly
    // until the element shows up in the DOM.
    let attempts = 0
    const maxAttempts = 20 // ~1s at 50ms intervals

    const tryScroll = () => {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
      attempts += 1
      if (attempts < maxAttempts) {
        setTimeout(tryScroll, 50)
      }
    }

    tryScroll()
  }, [location.pathname, location.hash, location.key])

  return null
}
