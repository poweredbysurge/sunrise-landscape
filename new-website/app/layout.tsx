import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Figtree } from 'next/font/google'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { SITE_URL } from '@/lib/siteUrl'
import { GoogleAnalytics } from '@next/third-parties/google'
import FigtreePreviewScope from '@/components/FigtreePreviewScope'
import './globals.css'

const aeonikNew = localFont({
  src: [
    { path: '../public/fonts/AeonikTRIAL-Regular.otf', weight: '400', style: 'normal' },
    { path: '../public/fonts/AeonikTRIAL-Bold.otf', weight: '700', style: 'normal' },
  ],
  variable: '--font-aeonik-new',
  display: 'swap',
})

const aeonik = localFont({
  src: [
    { path: '../public/fonts/Aeonik-Regular.otf', weight: '400', style: 'normal' },
  ],
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

// TEMPORARY — font/figtree-preview branch only.
// Deliberately reuses the Aeonik variable names so tailwind.config.ts and the
// component files need no edits. The Aeonik faces above stay declared because
// every route except the homepage still renders in them.
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
    <html lang="en" className={`${aeonik.variable} ${aeonikNew.variable} ${editorsNote.variable}`}>
      <body className="font-sans antialiased text-black bg-white min-w-0">
        <FigtreePreviewScope className={`${figtreeUi.variable} ${figtreeBody.variable}`}>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </FigtreePreviewScope>
        {GA_ID ? <GoogleAnalytics gaId={GA_ID} /> : null}
      </body>
    </html>
  )
}
