# Claude Code Prompt — Add Images to Recovery Pages
Copy everything below the line into Claude Code, run from the `new-website` folder.

---

Add images to the 7 new recovery pages and the city-expansion sections in this Next.js site. The pages are text-heavy and need visual breaks. Follow every rule below exactly; the non-negotiables are NO BROKEN IMAGES and NO DISHONEST CAPTIONS.

## Scope
New pages: app/lawn-care-leesburg-va, lawn-care-ashburn-va, lawn-care-herndon-va, lawn-care-fairfax-va, lawn-care-loudoun-county-va, lawn-care-aldie-va, patio-fire-pit-leesburg-ashburn-great-falls (page.tsx in each).
Expansion sections: the build-kit expansion block inside app/service-areas/[city]/page.tsx (add ONE image slot to the knowledge section, fed per-city from lib/cityExpansions.ts via a new optional `image: { src, alt }` field).
DO NOT touch any other existing page, heading, title, or meta. The 60 original pages are a frozen SEO contract.

## Image sourcing, in priority order
1. FIRST: reuse the 72 real Sunrise project photos already in `public/media/`. Real client work beats stock every time. Match by subject: pool/hardscape shots (Katie Bird set) on the fire-pit page, maintenance/lawn shots on lawn pages, commercial shots stay off these pages. Inspect the files and pick what fits.
2. ONLY for true gaps: download stock from Unsplash (unsplash.com, free license, commercial use OK). Region-appropriate subjects only: tall fescue lawns, Virginia/Mid-Atlantic suburban yards, oak/maple shade trees, paver patios, fire pits, mosquito/garden closeups. Nothing palm trees, nothing desert, nothing that reads as not-Northern-Virginia.
3. NEVER hotlink. Every stock image must be DOWNLOADED into `public/media/stock/` as an optimized file (webp preferred, max ~250KB, sensible dimensions ~1600px wide max). Remote URLs in src are forbidden: that is how images break. If a download fails, pick a different image; never leave a remote URL as a fallback.
4. Log every stock file in `public/media/stock/CREDITS.md`: filename, Unsplash photo URL, photographer name.

## Honesty rule (hard requirement)
Stock photos must NEVER be captioned or alt-texted as Sunrise's work or as a specific client project or a specific town. Real Sunrise photos from public/media MAY reference the project. Alt text patterns:
- Real photo: "Paver patio and pool hardscape built by Sunrise Landscape in Northern Virginia"
- Stock photo: "Freshly mowed tall fescue lawn with clean bed edging" (no company claim, no fake city claim)

## Placement per page (break up the text)
Each new page gets 2 to 3 images:
1. One after the services grid section, full-width band or right-aligned split.
2. One inside the local-knowledge section.
3. Optional third near the FAQ or cross-links if the page still feels dense.
Use next/image with explicit width/height OR fill + sizes, never a bare <img>. Lazy-load everything below the fold (default), keep the hero sections image-free as designed. Match the site's existing visual language: flat, no rounded corners (border radius 0 everywhere), generous whitespace.

## SEO meta for images
For EVERY page touched:
- Descriptive alt text on every image (rules above), no keyword stuffing, under ~120 chars.
- Add `openGraph.images` and `twitter.images` to the page metadata export: pick that page's best image, absolute URL https://www.sunriselandscapeanddesign.com{path}, with width 1200, height 630 if the file suits it, else supply the real dimensions. Use a REAL existing file path.
- Filenames for new stock files: descriptive-kebab-case (e.g. `tall-fescue-lawn-stripes.webp`), never `image1.webp`.

## No-broken-images verification (must run before you finish)
1. `npm run dev`, then fetch every touched route and extract every <img> src and every og:image content value.
2. curl or fetch each image URL on localhost and require HTTP 200. Any non-200 is a failure: fix it before finishing.
3. Confirm every src referenced in code corresponds to a file that exists on disk in public/ (script it: grep src attributes, check fs.existsSync).
4. `npm run build` must pass with zero image-related errors.
5. Print a final report table: route, image count, all-200 yes/no, og:image set yes/no. Every row must be green before you stop.

## Style notes for any visible captions
No em dashes. No phrases like "nestled in", "vibrant community", "look no further". Short, concrete captions or none at all.
