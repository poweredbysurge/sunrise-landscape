import fs from 'fs'
import path from 'path'

const MANIFEST_ROOT = path.join(
  process.cwd(),
  'data',
  'manifest',
  'sunrise-landscape'
)

const BLOG_HTML_ROOT = path.join(process.cwd(), 'data', 'blogs')

export interface PageMeta {
  path: string
  file: string
  title: string
  description: string
  canonical: string
  robots: string
  word_count: number
  image_count: number
  heading_count: number
  internal_link_count: number
  schema_types: string[]
}

export interface MdxFrontmatter {
  url: string
  path: string
  title: string
  description: string
  canonical: string
  robots: string
  og: Record<string, string>
  twitter: Record<string, string>
  headings: Array<{ level: number; text: string }>
  images: Array<{ src: string; alt: string }>
  internal_links: string[]
  schema_types: string[]
  word_count: number
}

let _index: PageMeta[] | null = null

export function getPageIndex(): PageMeta[] {
  if (_index) return _index
  const raw = fs.readFileSync(path.join(MANIFEST_ROOT, 'index.json'), 'utf-8')
  _index = JSON.parse(raw)
  return _index!
}

export function getPageMeta(pagePath: string): PageMeta | undefined {
  return getPageIndex().find((p) => p.path === pagePath)
}

export function getMdxFrontmatter(mdxFile: string): MdxFrontmatter {
  const filePath = path.join(MANIFEST_ROOT, mdxFile)
  const raw = fs.readFileSync(filePath, 'utf-8')
  const fmMatch = raw.match(/^---\n([\s\S]*?)\n---/)
  if (!fmMatch) throw new Error(`No frontmatter in ${mdxFile}`)

  const fm = fmMatch[1]
  const get = (key: string): string => {
    const m = fm.match(new RegExp(`^${key}: "([^"]*)"`, 'm'))
    return m ? m[1] : ''
  }
  const getJson = (key: string) => {
    const m = fm.match(new RegExp(`^${key}: (\\{[^\\n]*\\}|\\[[^\\n]*\\])`, 'm'))
    if (!m) return {}
    try { return JSON.parse(m[1]) } catch { return {} }
  }
  const getJsonArray = (key: string) => {
    const m = fm.match(new RegExp(`^${key}: (\\[[\\s\\S]*?\\])(?=\\n\\w|$)`, 'm'))
    if (!m) return []
    try { return JSON.parse(m[1]) } catch { return [] }
  }

  return {
    url: get('url'),
    path: get('path'),
    title: get('title'),
    description: get('description'),
    canonical: get('canonical'),
    robots: get('robots'),
    og: getJson('og'),
    twitter: getJson('twitter'),
    headings: getJsonArray('headings'),
    images: getJsonArray('images'),
    internal_links: getJsonArray('internal_links'),
    schema_types: getJsonArray('schema_types'),
    word_count: parseInt(fm.match(/^word_count: (\d+)/m)?.[1] ?? '0'),
  }
}

const OPENING_HOURS_SPEC = [
  {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '17:00',
  },
]

const BUSINESS_ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: '43813 Beaver Meadow Rd #100',
  addressLocality: 'Sterling',
  addressRegion: 'VA',
  postalCode: '20166',
  addressCountry: 'US',
}
const BUSINESS_GEO = {
  '@type': 'GeoCoordinates',
  latitude: '39.0068',
  longitude: '-77.4286',
}

// Aug 2026 Google Business Profile rename: the profile now reads
// "Sunrise Landscape". Every brand name string in structured data has to
// agree with it, or Google sees the site and the profile disagreeing.
const BRAND_NAME = 'Sunrise Landscape'
const BRAND_LEGAL_NAME = 'Sunrise Landscape LLC'
const BRAND_ALTERNATE_NAME = 'Sunrise Landscape and Design'

// Only rename nodes that are already a known variant of the brand, so an
// unrelated node that happens to sit in a provider/publisher slot is left be.
const BRAND_ALIASES = new Set([
  'Sunrise Landscape',
  'Sunrise Landscape LLC',
  'Sunrise Landscape and Design',
  'Sunrise Landscape & Design',
])

function isBrandNode(node: Record<string, unknown>): boolean {
  return typeof node.name === 'string' && BRAND_ALIASES.has(node.name)
}

// Reference nodes — WebSite, Service.provider, publisher — point at the
// business but are not the primary entity, so they carry the display name
// only. legalName/alternateName stay on the LocalBusiness entity itself.
function renameBrandReference(value: unknown): unknown {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return value
  const node = value as Record<string, unknown>
  if (!isBrandNode(node)) return node
  return { ...node, name: BRAND_NAME }
}

// July 2026 re-point (approved): every LocalBusiness node gets the brand's
// display name, business hours, and the canonical office address/geo,
// patched in code so the frozen MDX source files stay untouched. Applies
// inside top-level nodes and any @graph.
function patchLocalBusiness(node: Record<string, unknown>): Record<string, unknown> {
  if (node['@type'] !== 'LocalBusiness') return node
  return {
    ...node,
    name: BRAND_NAME,
    legalName: BRAND_LEGAL_NAME,
    alternateName: BRAND_ALTERNATE_NAME,
    openingHoursSpecification: node.openingHoursSpecification ?? OPENING_HOURS_SPEC,
    ...(node.address ? { address: BUSINESS_ADDRESS } : {}),
    ...(node.geo ? { geo: BUSINESS_GEO } : {}),
  }
}

function patchJsonLdTree(data: object[]): object[] {
  return data.map((item) => {
    const node = { ...(item as Record<string, unknown>) } as Record<string, unknown> & {
      '@graph'?: Record<string, unknown>[]
    }

    if (Array.isArray(node['@graph'])) {
      node['@graph'] = node['@graph'].map((child) =>
        child['@type'] === 'LocalBusiness'
          ? patchLocalBusiness(child)
          : (renameBrandReference(child) as Record<string, unknown>)
      )
    }

    for (const key of ['provider', 'publisher'] as const) {
      if (node[key]) node[key] = renameBrandReference(node[key])
    }

    return node['@type'] === 'LocalBusiness'
      ? patchLocalBusiness(node)
      : (renameBrandReference(node) as object)
  })
}

export function getMdxJsonLd(mdxFile: string): object[] {
  const filePath = path.join(MANIFEST_ROOT, mdxFile)
  let raw: string
  try {
    raw = fs.readFileSync(filePath, 'utf-8')
  } catch {
    return []
  }
  const jsonLdMatch = raw.match(/<!--\n(\[[\s\S]*?\])\n-->/)
  if (!jsonLdMatch) return []
  try {
    return patchJsonLdTree(JSON.parse(jsonLdMatch[1]))
  } catch {
    return []
  }
}

export function getMdxBody(mdxFile: string): string {
  const filePath = path.join(MANIFEST_ROOT, mdxFile)
  const raw = fs.readFileSync(filePath, 'utf-8')
  const afterFm = raw.replace(/^---\n[\s\S]*?\n---\n/, '')
  return afterFm.replace(/<!--[\s\S]*?-->/g, '').trim()
}

// Blog HTML files slug mapping
const BLOG_HTML_MAP: Record<string, string> = {
  'modern-landscape-design': 'blog-01-modern-landscape-design.html',
  'commercial-landscape-design': 'blog-02-commercial-landscape-design.html',
  'front-yard-landscape-design': 'blog-03-front-yard-landscape-design.html',
  'residential-landscape-design': 'blog-04-residential-landscape-design.html',
  'landscape-design-services-near-me': 'blog-05-landscape-design-services-near-me.html',
  'residential-landscaping': 'blog-06-residential-landscaping.html',
  'hardscape-contractor-near-me': 'blog-07-hardscape-contractor-near-me.html',
  'backyard-landscape-design': 'blog-08-backyard-landscape-design.html',
  'commercial-landscape-maintenance': 'blog-09-commercial-landscape-maintenance.html',
  'landscape-maintenance-services': 'blog-10-landscape-maintenance-services.html',
  'retaining-walls-northern-virginia': 'blog-19-retaining-walls-northern-virginia.html',
  'fire-pit-installation': 'blog-20-fire-pit-installation.html',
  'landscape-design-near-me': 'blog-11-landscape-design-near-me.html',
  'outdoor-living-spaces-northern-virginia': 'blog-12-outdoor-living-spaces-northern-virginia.html',
  'landscape-design-and-build': 'blog-13-landscape-design-and-build.html',
  'residential-landscaping-services': 'blog-14-residential-landscaping-services.html',
  'landscape-design-services': 'blog-15-landscape-design-services.html',
  'commercial-landscape-maintenance-near-me': 'blog-16-commercial-landscape-maintenance-near-me.html',
  'landscape-maintenance-near-me': 'blog-17-landscape-maintenance-near-me.html',
  'landscape-installation-and-maintenance': 'blog-18-landscape-installation-and-maintenance.html',
  'northern-virginia-landscaping-planting-guide': 'blog-northern-virginia-landscaping-planting-guide.html',
  'when-to-mulch-in-northern-virginia-mulch-installation-guide': 'blog-25-when-to-mulch-in-northern-virginia-mulch-installation-guide.html',
  'snow-plowing-vs-snow-removal-costs': 'blog-21-snow-plowing-vs-snow-removal-costs.html',
  'landscape-lighting-costs-northern-virginia': 'blog-22-landscape-lighting-costs-northern-virginia.html',
  'landscape-design-costs-northern-virginia': 'blog-23-landscape-design-costs-northern-virginia.html',
  'what-is-dormant-turf-and-why-it-matters-in-northern-virginia': 'blog-27-what-is-dormant-turf-and-why-it-matters-in-northern-virginia.html',
  'snow-and-ice-management': 'blog-snow-and-ice-management.html',
  'year-round-landscape-maintenance-northern-virginia': 'blog-24-year-round-landscape-maintenance-northern-virginia.html',
  'winter-outdoor-space-cozy-escape': 'blog-winter-outdoor-space-cozy-escape.html',
  'dont-wait-for-spring': 'blog-dont-wait-for-spring.html',
  'how-to-build-a-retaining-wall': 'blog-26-how-to-build-a-retaining-wall.html',
  'why-fall-fertilization-matters-for-trees-and-shrubs': 'blog-why-fall-fertilization-matters-for-trees-and-shrubs.html',
  'transform-your-backyard-into-a-paradise': 'blog-transform-your-backyard-into-a-paradise.html',
  'top-10-plants-for-your-garden': 'blog-top-10-plants-for-your-garden.html',
  'creating-a-sustainable-garden': 'blog-creating-a-sustainable-garden.html',
  'hardscaping-enhancing-your-outdoor-space': 'blog-hardscaping-enhancing-your-outdoor-space.html',
  'the-benefits-of-native-plants': 'blog-the-benefits-of-native-plants.html',
  'designing-with-color-in-mind': 'blog-designing-with-color-in-mind.html',
}

export function getBlogHtml(slug: string): string | null {
  const filename = BLOG_HTML_MAP[slug]
  if (!filename) return null
  const filePath = path.join(BLOG_HTML_ROOT, filename)
  try {
    return fs.readFileSync(filePath, 'utf-8')
  } catch {
    return null
  }
}

export function getAllBlogSlugs(): string[] {
  return getPageIndex()
    .filter((p) => p.path.startsWith('/blogs/'))
    .map((p) => p.path.replace('/blogs/', ''))
}

export function getAllServiceAreaSlugs(): string[] {
  return getPageIndex()
    .filter((p) => p.path.startsWith('/service-areas/'))
    .map((p) => p.path.replace('/service-areas/', ''))
}

// NEW_DOMAIN is used when swapping canonical/og URLs
export const NEW_DOMAIN = 'https://www.sunriselandscapeanddesign.com'
export const OLD_DOMAIN = 'https://www.sunriselandscapeanddesign.com'
