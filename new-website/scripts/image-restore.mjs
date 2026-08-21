// Batch AI-upscale pipeline: takes every Track B flagged file from image-audit.json,
// runs realesrgan-ncnn-vulkan at 4x, then downscales/re-encodes with sharp to
// min(4x original, its required width, 3000px), overwriting the original file
// (same filename/path — never renamed).
//
// Usage: node scripts/image-restore.mjs [--limit N] [--dry-run]

import sharp from 'sharp'
import { readFileSync, writeFileSync, statSync, existsSync, mkdtempSync, rmSync } from 'fs'
import path from 'path'
import os from 'os'
import { execFileSync } from 'child_process'

const ROOT = process.cwd()
const REALESRGAN_BIN = '/tmp/realesrgan2/realesrgan-ncnn-vulkan'
const REALESRGAN_MODEL_DIR = '/tmp/realesrgan2/models'
const MAX_OUTPUT_WIDTH = 3000

const args = process.argv.slice(2)
const dryRun = args.includes('--dry-run')
const limitArg = args.find((a) => a.startsWith('--limit'))
const limit = limitArg ? Number(limitArg.split('=')[1] || args[args.indexOf(limitArg) + 1]) : Infinity

function log(msg) {
  const line = `[${new Date().toISOString()}] ${msg}`
  console.log(line)
}

async function processOne(record) {
  const filePath = path.join(ROOT, record.file)
  if (!existsSync(filePath)) {
    log(`SKIP (missing): ${record.file}`)
    return { file: record.file, status: 'missing' }
  }

  const ext = path.extname(filePath).toLowerCase()
  const tmpDir = mkdtempSync(path.join(os.tmpdir(), 'upscale-'))
  const upscaledPngPath = path.join(tmpDir, 'upscaled.png')

  try {
    if (dryRun) {
      log(`DRY RUN would upscale: ${record.file} (${record.width}x${record.height}, role=${record.role}, required=${record.required})`)
      return { file: record.file, status: 'dry-run' }
    }

    execFileSync(
      REALESRGAN_BIN,
      ['-i', filePath, '-o', upscaledPngPath, '-n', 'realesrgan-x4plus', '-s', '4', '-m', REALESRGAN_MODEL_DIR],
      { stdio: ['ignore', 'ignore', 'pipe'], timeout: 15 * 60 * 1000 }
    )

    const upscaledMeta = await sharp(upscaledPngPath).metadata()
    const targetWidth = Math.min(upscaledMeta.width, record.required, MAX_OUTPUT_WIDTH)

    let pipeline = sharp(upscaledPngPath).resize({ width: targetWidth, withoutEnlargement: false })

    if (ext === '.jpg' || ext === '.jpeg') {
      pipeline = pipeline.jpeg({ quality: 85 })
    } else if (ext === '.webp') {
      pipeline = pipeline.webp({ quality: 85 })
    } else {
      // sharp's PNG defaults are lightly compressed — an AI-upscaled photo
      // encoded losslessly at default settings can run 5-10x larger than
      // necessary. Max compression/effort is still fully lossless, just slower.
      pipeline = pipeline.png({ compressionLevel: 9, effort: 10 })
    }

    const outBuffer = await pipeline.toBuffer()
    writeFileSync(filePath, outBuffer)

    const finalMeta = await sharp(filePath).metadata()
    const newSize = statSync(filePath).size
    log(
      `OK  ${record.file}  ${record.width}x${record.height} -> ${finalMeta.width}x${finalMeta.height}  (${(newSize / 1024).toFixed(0)}KB)`
    )
    return { file: record.file, status: 'ok', before: [record.width, record.height], after: [finalMeta.width, finalMeta.height], newSizeBytes: newSize }
  } catch (e) {
    log(`FAIL ${record.file}: ${e.message.split('\n')[0]}`)
    return { file: record.file, status: 'fail', error: e.message }
  } finally {
    try {
      rmSync(tmpDir, { recursive: true, force: true })
    } catch {}
  }
}

async function main() {
  const audit = JSON.parse(readFileSync(path.join(ROOT, 'image-audit.json'), 'utf-8'))
  let targets = audit.filter(
    (r) => !r.error && r.role !== 'unused' && r.status !== 'PASS' && !r.isUnsplash && !r.isScreenshot
  )
  if (limit !== Infinity) targets = targets.slice(0, limit)

  log(`Track B batch: ${targets.length} files to process${dryRun ? ' (DRY RUN)' : ''}`)

  const results = []
  let i = 0
  for (const record of targets) {
    i++
    log(`--- (${i}/${targets.length}) ${record.file} ---`)
    const result = await processOne(record)
    results.push(result)
    writeFileSync(path.join(ROOT, 'restore-progress.json'), JSON.stringify(results, null, 2))
  }

  const ok = results.filter((r) => r.status === 'ok').length
  const fail = results.filter((r) => r.status === 'fail').length
  log(`\nDone. ok=${ok} fail=${fail} total=${results.length}`)
}

main()
