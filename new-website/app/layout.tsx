import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Figtree } from 'next/font/google'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { SITE_URL } from '@/lib/siteUrl'
import { GoogleAnalytics } from '@next/third-parties/google'
import './globals.css'

// Figtree replaces both Aeonik faces sitewide (Sept 2026). The CSS variable
// names are deliberately left as --font-aeonik-new / --font-aeonik so that
// globals.css, tailwind.config.ts and the component files need no edits; the
// names now describe the slot, not the typeface.
const figtreeBody = Figtree({
  subsets: ['latin'],
  variable: '--font-aeonik-new',
  display: 'swap',
})

const figtreeUi = Figtree({
  subsets: ['latin'],
  variable: '--font-aeonik',
  display: 'swap',
})

const editorsNote = localFont({
  src: [
    { path: '../public/fonts/EditorsNote-Italic.woff2', weight: '400', style: 'italic' },
    { path: '../public/fonts/EditorsNote-Regular.otf', weight: '400', style: 'normal' },
  ],
  variable: '--font-editorsnote',
  display: 'swap',
})

const DEFAULT_OG_IMAGE = {
  url: '/media/og/sunrise-landscape-og.png',
  width: 1200,
  height: 630,
  alt: 'Sunrise Landscape + Design — Hardscape, Landscape, Planting, Design, Drainage, Commercial, Lighting',
}

const GA_ID = process.env.NEXT_PUBLIC_GA_ID

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  openGraph: {
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    images: [DEFAULT_OG_IMAGE.url],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${figtreeUi.variable} ${figtreeBody.variable} ${editorsNote.variable}`}>
      <body className="font-sans antialiased text-black bg-white min-w-0">
        <Navigation />
        <main>{children}</main>
        <Footer />
        {GA_ID ? <GoogleAnalytics gaId={GA_ID} /> : null}
      </body>
    </html>
  )
}
