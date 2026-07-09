import type { MetadataRoute } from 'next'
import { getPageIndex } from '@/lib/manifest'

const DOMAIN = 'https://www.sunriselandscapeanddesign.com'

// Recovery pages built outside the frozen manifest (see build-kit/briefs).
// New routes must be added here — getPageIndex() cannot see them.
const RECOVERY_PAGES = [
  '/lawn-care-leesburg-va',
  '/lawn-care-ashburn-va',
  '/lawn-care-herndon-va',
  '/lawn-care-fairfax-va',
  '/lawn-care-loudoun-county-va',
  '/lawn-care-aldie-va',
  '/patio-fire-pit-leesburg-ashburn-great-falls',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = getPageIndex()

  return [
    ...pages.map((page) => ({
      url: `${DOMAIN}${page.path}`,
      lastModified: new Date(),
      changeFrequency: (page.path === '/' ? 'weekly' : 'monthly') as 'weekly' | 'monthly',
      priority: page.path === '/' ? 1.0 : page.path.startsWith('/service-areas/') ? 0.7 : 0.8,
    })),
    ...RECOVERY_PAGES.map((path) => ({
      url: `${DOMAIN}${path}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]
}
