# Sunrise Landscape & Design — Launch Runbook
**Site:** sunriselandscapeanddesign.com  
**Stack:** Next.js 15 App Router → Vercel  
**Prepared by:** The Surge Agency  
**Last updated:** July 9, 2026

---

## Pre-Launch Checklist

Run these steps **in order**. Do not deploy until Step 4 passes.

---

## Step 1 — Production Build

Run from the repo root:

```bash
cd repos/sunrise-landscape/new-website
npx next build
```

**Must complete with zero errors.** Warnings are acceptable.  
Common failure causes and fixes:
- Missing SWC binary → run `npm install` first
- TypeScript errors → fix before proceeding; do not use `--no-lint` to skip
- Apostrophe in TS string → escape as `\'` or switch to double quotes
- Image src errors → check `next.config.ts` `remotePatterns` covers the hostname

If build passes, a `.next/BUILD_ID` file will exist. Confirm:
```bash
cat .next/BUILD_ID
```

---

## Step 2 — Final Parity Verification (60/60 Pages)

Start a production server on the built copy:
```bash
npx next start -p 3000
```

In a separate terminal, from the seo-migration-kit directory:
```bash
cd repos/sunrise-landscape/seo-migration-kit
python3 scripts/04_verify.py sunrise-landscape --target http://localhost:3000 --heading-mode subsequence
```

If the script takes too long, run in slices:
```bash
python3 scripts/04_verify.py sunrise-landscape --target http://localhost:3000 --heading-mode subsequence --slice 0:20
python3 scripts/04_verify.py sunrise-landscape --target http://localhost:3000 --heading-mode subsequence --slice 20:40
python3 scripts/04_verify.py sunrise-landscape --target http://localhost:3000 --heading-mode subsequence --slice 40:60
```

**Expected/tolerated diffs — do NOT treat these as failures:**
- Blog pages have new descriptive titles and H1s (old ones were generic)
- Many pages have ADDED headings/sections from the city and service expansions
- `/service-areas-northern-virginia` second H1 demoted to H2 (deliberate)
- Blog body H1s demoted to H2 (deliberate duplicate-H1 fix)
- Homepage meta description changed (approved WQA exception)
- City pages now have meta descriptions (were empty before — improvement)

**Failures that matter (must fix before launch):**
- Any missing manifest heading that was on the old site
- Any changed page title (except blog posts)
- Any changed slug/URL
- Any word count loss (new content only adds, never removes)

Target: **60/60 pages pass** with only tolerated diffs.

---

## Step 3 — Redirect Verification

Confirm the three legacy redirects work on the production server:

```bash
curl -I http://localhost:3000/old-home       # → 301 /
curl -I http://localhost:3000/planting       # → 301 /landscape-planting-northern-virginia
curl -I http://localhost:3000/thank-you      # → 301 /contact
```

All three should return `HTTP/1.1 301` with the correct `Location` header.

---

## Step 4 — Deploy to Vercel

```bash
vercel --prod
```

Note the deployment URL (e.g. `sunriselandscapeanddesign-xyz.vercel.app`).

---

## Step 5 — Post-Deploy Verification

### 5a. robots.txt and sitemap.xml live
```bash
curl https://www.sunriselandscapeanddesign.com/robots.txt
curl https://www.sunriselandscapeanddesign.com/sitemap.xml
```
- `robots.txt` must allow Googlebot
- `sitemap.xml` must include the 7 new location page URLs:
  - `/lawn-care-leesburg-va`
  - `/lawn-care-ashburn-va`
  - `/lawn-care-herndon-va`
  - `/lawn-care-fairfax-va`
  - `/lawn-care-loudoun-county-va`
  - `/lawn-care-aldie-va`
  - `/patio-fire-pit-leesburg-ashburn-great-falls`

### 5b. Submit sitemap in Google Search Console
1. Go to GSC → Sitemaps
2. Enter `https://www.sunriselandscapeanddesign.com/sitemap.xml`
3. Click Submit

### 5c. Verify GA4 and conversion tracking
1. Open the live site in Chrome with GA4 DebugView enabled
2. Navigate to at least 3 pages — confirm pageview events fire
3. Submit the contact form on `/contact` — confirm the conversion event fires
4. Check that no duplicate GA4 tags are firing (should be one tag only)

---

## Step 6 — Watch Window (Week 1 Post-Launch)

### Keep Webflow crawlable during the watch window
Do NOT block Googlebot on the old Webflow site for at least 2 weeks post-launch. Google needs to re-crawl and discover the new canonical URLs.

### Day 1–3: Request indexing on all new pages
In Google Search Console → URL Inspection, request indexing for each new page:
- `/lawn-care-leesburg-va`
- `/lawn-care-ashburn-va`
- `/lawn-care-herndon-va`
- `/lawn-care-fairfax-va`
- `/lawn-care-loudoun-county-va`
- `/lawn-care-aldie-va`
- `/patio-fire-pit-leesburg-ashburn-great-falls`

### Daily GSC coverage check (days 1–7)
Check GSC → Coverage each morning for:
- New pages moving from "Discovered" → "Crawled" → "Indexed"
- Any "Crawl anomaly" or "Soft 404" errors on new pages
- Any unexpected redirect errors

### No URL changes for 4 weeks
Freeze all slug/URL changes for 4 weeks post-launch. Let Google settle.

---

## Step 7 — Post-Launch Drift Check

The live Webflow site may have gained content after the June 9 freeze (e.g. "From Our Blog" section was added during this session). Within 2 weeks of launch, do a sweep:

```bash
# Compare a few key page templates live vs. Next.js
curl https://www.sunriselandscapeanddesign.com/ | grep -i "blog\|section\|footer"
```

Port anything significant to the Next.js site before Webflow is decommissioned.

---

## Step 8 — Update the Build Tracker

After launch, update the tracker spreadsheet:  
https://docs.google.com/spreadsheets/d/1VWy2fsvCipMTXq3Nmy8c5V5ohOf4J5e993UyYtFV5HY/edit

- Flip all 34 rows from `Humanized` → `Live`
- Update the WQA audit status in Agency OS (audit id: `3fdcea67-a932-4791-b705-c0c21421fd30`)

---

## Key Reference Links

| Resource | URL/Path |
|----------|----------|
| Canonical repo | `repos/sunrise-landscape/new-website` |
| SEO parity verifier | `repos/sunrise-landscape/seo-migration-kit/scripts/04_verify.py` |
| Page manifest (60 pages) | `repos/sunrise-landscape/seo-migration-kit/manifest/sunrise-landscape/index.json` |
| Build Tracker | https://docs.google.com/spreadsheets/d/1VWy2fsvCipMTXq3Nmy8c5V5ohOf4J5e993UyYtFV5HY/edit |
| Recovery plan doc | https://docs.google.com/document/d/14EkrGjBffJkb3YR0dR2JXFZH88t4zvypYPdRZfHdKVU/edit |
| Keyword bank | `workspace/clients/sunrise/keyword-gap-recovery-strategy.md` |
| Agency OS client | ID `850cd984-ab97-4ee2-8d65-23648684d7d8` |
| GSC | https://search.google.com/search-console |

---

## What's YOUR Turn vs. Claude's Turn

| Task | Owner |
|------|-------|
| `npx next build` | **Mario** (Mac only — sandbox can't run Next.js on ARM64) |
| Parity verify 60/60 | **Mario** (runs locally after build) |
| Review 34 built pages at localhost:3002/dev/review | **Mario** |
| `vercel --prod` deploy | **Mario** |
| Submit sitemap in GSC | **Mario** |
| Request indexing on 7 new URLs | **Mario** |
| Flip tracker rows Humanized → Live | **Claude** (after Mario confirms launch) |
| Next content wave (September) | **Claude** (blog production + link-building) |
