'use client'

// Preview-only copy switcher (Mike review, Nov 2026).
// Every rewritten string is wrapped in <V c={current} n={new} />. The page shows the NEW copy by default.
// On any host other than the live domain, a small toggle lets the reviewer flip back to the CURRENT copy
// to compare. On the live domain the toggle never renders. After approval, unwrap <V> to its `n` value.

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { usePathname } from 'next/navigation'

type Version = 'new' | 'current'
const Ctx = createContext<Version>('new')

const PREVIEW_PAGES = ['/', '/about-us', '/hardscape-northern-virginia']
const LIVE_HOSTS = ['sunriselandscapeanddesign.com', 'www.sunriselandscapeanddesign.com']

export function V({ c, n }: { c: ReactNode; n: ReactNode }) {
  return <>{useContext(Ctx) === 'current' ? c : n}</>
}

export function useCopyVersion() {
  return useContext(Ctx)
}

export function CopyVersionProvider({ children }: { children: ReactNode }) {
  const [version, setVersion] = useState<Version>('new')
  const [isPreviewHost, setIsPreviewHost] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsPreviewHost(!LIVE_HOSTS.includes(window.location.hostname))
    const fromUrl = new URLSearchParams(window.location.search).get('copy')
    if (fromUrl === 'current' || fromUrl === 'new') setVersion(fromUrl)
  }, [])

  const choose = (v: Version) => {
    setVersion(v)
    const url = new URL(window.location.href)
    url.searchParams.set('copy', v)
    window.history.replaceState(null, '', url.toString())
  }

  const showToggle = isPreviewHost && PREVIEW_PAGES.includes(pathname)

  return (
    <Ctx.Provider value={version}>
      {children}
      {showToggle && (
        <div
          className="fixed bottom-5 left-1/2 -translate-x-1/2 z-[60] flex items-center gap-1 p-1 bg-[#101f16] text-cream shadow-2xl border border-orange/60"
          style={{ borderRadius: 9999 }}
          role="group"
          aria-label="Compare page copy"
        >
          <span className="px-3 text-[11px] font-bold uppercase tracking-widest text-cream/70 hidden sm:inline">Page copy</span>
          {(['new', 'current'] as Version[]).map((v) => (
            <button
              key={v}
              type="button"
              onClick={() => choose(v)}
              aria-pressed={version === v}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                version === v ? 'bg-orange text-white' : 'text-cream/80 hover:text-cream'
              }`}
              style={{ borderRadius: 9999 }}
            >
              {v === 'new' ? 'New copy' : 'Current copy'}
            </button>
          ))}
        </div>
      )}
    </Ctx.Provider>
  )
}
