/**
 * Runtime GSAP loader — pulls gsap core + ScrollTrigger from cdnjs once
 * and caches the promise. Keeps the bundle lean and avoids a hard npm
 * dependency; swap to `import gsap from 'gsap'` later if it gets added
 * to package.json.
 */

const GSAP_VERSION = '3.12.7'
const CDN_BASE = `https://cdnjs.cloudflare.com/ajax/libs/gsap/${GSAP_VERSION}`

declare global {
  interface Window {
    gsap?: GsapStatic
    ScrollTrigger?: unknown
  }
}

/* Minimal typing — gsap is loaded as a global */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type GsapStatic = any

let loader: Promise<GsapStatic> | null = null

function injectScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${src}"]`)
    if (existing) {
      if (existing.getAttribute('data-loaded') === 'true') return resolve()
      existing.addEventListener('load', () => resolve())
      existing.addEventListener('error', () => reject(new Error(`Failed to load ${src}`)))
      return
    }
    const script = document.createElement('script')
    script.src = src
    script.async = true
    script.onload = () => {
      script.setAttribute('data-loaded', 'true')
      resolve()
    }
    script.onerror = () => reject(new Error(`Failed to load ${src}`))
    document.head.appendChild(script)
  })
}

export function loadGsap(): Promise<GsapStatic> {
  if (typeof window === 'undefined') {
    return Promise.reject(new Error('loadGsap can only run in the browser'))
  }
  if (window.gsap && window.ScrollTrigger) {
    window.gsap.registerPlugin(window.ScrollTrigger)
    return Promise.resolve(window.gsap)
  }
  if (!loader) {
    loader = injectScript(`${CDN_BASE}/gsap.min.js`)
      .then(() => injectScript(`${CDN_BASE}/ScrollTrigger.min.js`))
      .then(() => {
        const gsap = window.gsap
        if (!gsap) throw new Error('gsap failed to attach to window')
        gsap.registerPlugin(window.ScrollTrigger)
        return gsap
      })
      .catch(err => {
        loader = null // allow retry on next call
        throw err
      })
  }
  return loader
}
