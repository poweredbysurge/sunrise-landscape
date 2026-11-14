#!/usr/bin/env node
// Fails if any <Image>/<img> in app/ or components/ has no alt, or alt="" without aria-hidden.
// Also checks blog HTML in data/blogs. Run: npm run check:alt
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'

const roots = ['app', 'components', 'data/blogs']
const files = []
const walk = (d) => {
  for (const f of readdirSync(d)) {
    const p = join(d, f)
    if (statSync(p).isDirectory()) walk(p)
    else if (/\.(tsx|jsx|html)$/.test(f)) files.push(p)
  }
}
roots.forEach((r) => { try { walk(r) } catch {} })

const problems = []
for (const f of files) {
  const src = readFileSync(f, 'utf8')
  const re = /<(Image|img)\b([\s\S]*?)\/?>/g
  let m
  while ((m = re.exec(src))) {
    const attrs = m[2]
    const line = src.slice(0, m.index).split('\n').length
    const hasAlt = /\balt\s*=/.test(attrs)
    const emptyAlt = /\balt\s*=\s*(""|''|\{\s*(""|'')\s*\})/.test(attrs)
    const decorative = /aria-hidden/.test(attrs)
    if (!hasAlt) problems.push(`${f}:${line}  missing alt`)
    else if (emptyAlt && !decorative) problems.push(`${f}:${line}  empty alt (add a description, or aria-hidden="true" if purely decorative)`)
  }
}

if (problems.length) {
  console.error(`Alt text check failed (${problems.length}):\n` + problems.join('\n'))
  process.exit(1)
}
console.log(`Alt text check passed: ${files.length} files scanned.`)
