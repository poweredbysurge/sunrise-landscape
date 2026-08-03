# Sunrise Build Kit
For Claude Code sessions building recovery pages in `new-website`.

## Read order (every session)
1. `PAGE-STANDARDS.md` — pipeline, writing rules (no em dashes, humanizer mandatory), keyword rules, anti-doorway rules, wiring, launch protocol.
2. `DIFFERENTIATION-MATRIX.md` — the unique ingredients assigned to each location page. Never share ingredients between pages.
3. `briefs/<page>.md` — the specific page you are building. No brief, no build.
4. Copy-agent chain: `workspace/clients/sunrise/copy-agent/` (persona, generate, review, humanizer).

## Blog posts
Blog content uses the `/blog` skill in `repos/surge-seo-copy-pipeline/skills/blog/` (brief → write → seo-check → schema, sequential, schema blocked until seo-check passes). Topics come from `workspace/clients/sunrise/BLOG-STRATEGY.md`. ADDITION to that skill's flow: run every written post through copy-humanizer before seo-check, and apply the no-em-dash rule. Blog posts must link to the new lawn-care and city pages (internal-linking zones in each brief).

## Brief status (all briefed AND built 2026-07-08; pages await Mario review)
- [x] briefs/lawn-care-leesburg-va.md (P1)
- [x] briefs/lawn-care-ashburn-va.md (P2)
- [x] briefs/lawn-care-herndon-va.md (P3)
- [x] briefs/lawn-care-fairfax-va.md (P4)
- [x] briefs/lawn-care-loudoun-county-va.md (P4)
- [x] briefs/lawn-care-aldie-va.md (P7)
- [x] briefs/patio-fire-pit-leesburg-ashburn-great-falls.md (P6)
- [x] briefs/city-expansions/ (12 existing /service-areas pages, expansion to 700w+ + meta descriptions)
- [x] homepage title/meta CTR rewrite (25.9K impressions @ 1.0% CTR)

## Hard boundaries
- The existing 60 pages' slugs, titles, metas, and H1s are a frozen contract. Expansions ADD content below existing headings; they never rewrite or remove what the manifest locked. Verify with `seo-migration-kit/scripts/04_verify.py` (60/60) after every batch.
- New pages must be added to the sitemap explicitly (they are outside the manifest page index).
- Every page passes the swap test against its nearest sibling before merge.

## Source data
- Keyword bank: Google Drive "Keyword Gap & Recovery Strategy — July 2026" (also workspace/clients/sunrise/keyword-gap-recovery-strategy.md)
- Audit + approvals: bpt-agency-os-unpacked/blueprint-workspace/clients/sunrise-landscape-design/wqa/audits/3fdcea67.../
- Blog strategy: workspace/clients/sunrise/BLOG-STRATEGY.md
