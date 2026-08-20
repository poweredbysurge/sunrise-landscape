import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { SITE_URL } from '@/lib/siteUrl'
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

const DEFAULT_OG_IMAGE = {
  url: '/media/og/sunrise-landscape-og.png',
  width: 1200,
  height: 630,
  alt: 'Sunrise Landscape + Design — Hardscape, Landscape, Planting, Design, Drainage, Commercial, Lighting',
}

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
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
