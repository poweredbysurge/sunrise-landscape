// Image quality audit — enumerates every raster image under public/, reads its
// intrinsic size via sharp, finds where it's used, classifies its rendered role,
// and flags anything below the resolution standard for that role.
//
// Usage: node scripts/image-audit.mjs
// Output: image-audit.json (repo root) + a printed summary table.

import sharp from 'sharp'
import { readdirSync, statSync, readFileSync, writeFileSync } from 'fs'
import path from 'path'
import { execSync } from 'child_process'

const ROOT = process.cwd()
const PUBLIC_DIR = path.join(ROOT, 'public')
const RASTER_EXTS = new Set(['.jpg', '.jpeg', '.png', '.webp'])
const SOURCE_DIRS = ['app', 'components', 'lib', 'data/blogs']

const REQUIRED_BY_ROLE = {
  hero: 2880,
  blog: 2440,
  content: 1400,
  card: 900,
}

function walkImages(dir, out = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      walkImages(full, out)
    } else {
      const ext = path.extname(entry.name).toLowerCase()
      if (RASTER_EXTS.has(ext) && !/favicon|^icon\./i.test(entry.name)) {
        out.push(full)
      }
    }
  }
  return out
}

function findUsageSites(filename) {
  try {
    const dirs = SOURCE_DIRS.filter((d) => {
      try {
        statSync(path.join(ROOT, d))
        return true
      } catch {
        return false
      }
    }).join(' ')
    const out = execSync(
      `grep -rl --include="*.ts" --include="*.tsx" --include="*.html" -F -- ${JSON.stringify(filename)} ${dirs}`,
      { cwd: ROOT, encoding: 'utf-8', stdio: ['pipe', 'pipe', 'ignore'] }
    )
    return out.split('\n').filter(Boolean)
  } catch {
    return []
  }
}

function classifyRole(filename, usageSites, isUnused) {
  if (isUnused) return 'unused'

  const isBlogPath = usageSites.some(
    (p) => p.includes('data/blogs/') || p.includes('lib/blogData.ts') || p.startsWith('public/blogs/')
  )
  if (isBlogPath || filename.startsWith('blog-')) return 'blog'

  const lowerName = filename.toLowerCase()
  if (/hero|cover|folder-\d-cover/.test(lowerName)) return 'hero'

  for (const site of usageSites) {
    try {
      const content = readFileSync(path.join(ROOT, site), 'utf-8')
      const idx = content.indexOf(filename)
      if (idx === -1) continue
      const context = content.slice(Math.max(0, idx - 600), idx + 400)
      if (/h-\[6[0-9]vh\]|h-\[5[0-9]vh\]|h-\[7[0-9]vh\]|sizes="100vw"/.test(context)) return 'hero'
      // fixed pixel sizes= (not a responsive viewport-unit string) is a strong small-render signal
      const sizesMatch = context.match(/sizes="(\d+)px"/)
      if (sizesMatch && Number(sizesMatch[1]) <= 200) return 'card'
      // explicit small width={N} prop on a non-fill <Image>
      const widthMatch = context.match(/width=\{(\d+)\}/)
      if (widthMatch && Number(widthMatch[1]) <= 300) return 'card'
      if (/w-(1[0-6]|20|24)\b|aspect-square.*h-\[220px\]|height:\s*['"]?220/.test(context)) return 'card'
    } catch {
      // ignore
    }
  }
  return 'content'
}

function statusFor(intrinsicWidth, required) {
  if (intrinsicWidth < required / 2) return 'CRITICAL'
  if (intrinsicWidth < required * 0.75) return 'FAIL'
  if (intrinsicWidth < required) return 'BORDERLINE'
  return 'PASS'
}

async function main() {
  const files = walkImages(PUBLIC_DIR)
  const results = []

  for (const full of files) {
    const rel = path.relative(ROOT, full)
    const publicRel = '/' + path.relative(PUBLIC_DIR, full).split(path.sep).join('/')
    const filename = path.basename(full)

    let width = null
    let height = null
    let sizeBytes = 0
    try {
      const meta = await sharp(full).metadata()
      width = meta.width
      height = meta.height
      sizeBytes = statSync(full).size
    } catch (e) {
      results.push({
        file: rel,
        publicPath: publicRel,
        error: `unreadable: ${e.message}`,
      })
      continue
    }

    const usageSites = findUsageSites(filename)
    const role = classifyRole(filename, usageSites, usageSites.length === 0)
    const required = REQUIRED_BY_ROLE[role] ?? null
    const status = role === 'unused' ? 'SKIP (unused)' : statusFor(width, required)
    const isUnsplash = /photo-\d{13}/.test(filename)
    // Files keep their Webflow asset-hash prefix (e.g. "<hash>_Screenshot...png"),
    // so match the human-readable portion rather than anchoring to filename start.
    const isScreenshot = /(^|_)Screenshot/i.test(filename)

    results.push({
      file: rel,
      publicPath: publicRel,
      width,
      height,
      sizeBytes,
      usageSites,
      role,
      required,
      status,
      isUnsplash,
      isScreenshot,
    })
  }

  const summary = { CRITICAL: 0, FAIL: 0, BORDERLINE: 0, PASS: 0, unreadable: 0, unused: 0 }
  for (const r of results) {
    if (r.error) summary.unreadable++
    else if (r.role === 'unused') summary.unused++
    else summary[r.status]++
  }

  writeFileSync(path.join(ROOT, 'image-audit.json'), JSON.stringify(results, null, 2))

  console.log(`\nImage audit — ${results.length} raster images scanned\n`)
  console.log(`  CRITICAL   ${summary.CRITICAL}`)
  console.log(`  FAIL       ${summary.FAIL}`)
  console.log(`  BORDERLINE ${summary.BORDERLINE}`)
  console.log(`  PASS       ${summary.PASS}`)
  if (summary.unused) console.log(`  UNUSED     ${summary.unused} (skipped — not referenced anywhere)`)
  if (summary.unreadable) console.log(`  UNREADABLE ${summary.unreadable}`)
  console.log('')

  const flagged = results.filter((r) => !r.error && r.status !== 'PASS' && r.role !== 'unused')
  flagged.sort((a, b) => (a.status > b.status ? -1 : 1))
  console.log('Flagged files:')
  for (const r of flagged) {
    console.log(
      `  [${r.status}] ${r.publicPath}  ${r.width}x${r.height} (role=${r.role}, required=${r.required}w)${r.isUnsplash ? ' [unsplash]' : ''}`
    )
  }
}

main()
