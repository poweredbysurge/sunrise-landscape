# HANDOFF — Sunrise SEO Recovery (continue in new chat)
Written 2026-07-09 by the previous Claude session. Read this whole file before doing anything.

## The client and the goal
Sunrise Landscape & Design (sunriselandscapeanddesign.com), Sterling VA landscaping company, client of The Surge Agency (Mario). April 2026 Webflow relaunch deleted their location pages: 100+ keywords fell to 5, traffic dropped ~97%. DR 13 held. We rebuilt everything on a new Next.js site (launching within days, replacing Webflow) and pre-built all recovery content. Recovery goals: 30+ keywords at 90 days, 65+ at 6 months, 100+ and beating the old ~591/mo traffic baseline by month 12.

## Where everything lives
- **The site (canonical repo):** `repos/sunrise-landscape/new-website` (Next.js 15 App Router, trailingSlash false). Node deps: `leaflet`, `react-leaflet`, `resend` were ADDED to package.json this session — run `npm install` before building.
- **Build kit (content rules):** `repos/sunrise-landscape/build-kit/` — PAGE-STANDARDS.md (writing rules: NO em dashes, humanizer kill-list, keyword rules, anti-doorway swap test), DIFFERENTIATION-MATRIX.md (exclusive per-city ingredients), briefs/ (all 20 page briefs), prompts/ (add-images, redesign-location-pages), skills/sunrise-design/ (brand design skill: green #1e3526, orange #ff6400 accents only, cream #e7e6d2, radius 0, Aeonik fonts).
- **SEO frozen contract:** `workspace/clients/sunrise/seo-migration-kit/` — manifest/sunrise-landscape/ (index.json = 60 pages with exact titles/metas/headings; pages/*.mdx), scripts/04_verify.py (the parity verifier). ALSO symlinked at `repos/sunrise-landscape/seo-migration-kit`.
- **The workbook (Mario's dashboard):** `bpt-agency-os-unpacked/blueprint-workspace/clients/sunrise-landscape-design/wqa/audits/3fdcea67-a932-4791-b705-c0c21421fd30/sunrise-wqa-data.xlsx` — Build Tracker tab, 34 rows. Status column: currently 33 "Humanized" (built, awaiting Mario's review) + 1 "Reviewed". Update statuses via openpyxl as work progresses. Same folder: approvals JSON, WQA report HTML, project plan JSON.
- **Client docs (Google Drive):** folder "Sunrise Landscape" → "Documents (1)" (id 1D7CJXNMOruwEIgcz5uujciyJXROqytZn). Key doc: "Sunrise SEO Recovery — Progress Report & 90-Day Plan — July 2026 (v2)" (id 14EkrGjBffJkb3YR0dR2JXFZH88t4zvypYPdRZfHdKVU). Note: Drive MCP can create docs but not edit; new versions get "(vN)" suffix, tell Mario to trash old ones.
- **Agency OS (Blueprint):** client id 850cd984-ab97-4ee2-8d65-23648684d7d8, project "Sunrise SEO Recovery — WQA Implementation" id 2984cd44-c903-4e7e-bf89-d35552e82799 (6 sprints, 28 deliverables). Audit id 3fdcea67-a932-4791-b705-c0c21421fd30.
- **Keyword bank:** Drive doc "Keyword Gap & Recovery Strategy — Sunrise Landscape & Design — July 2026" + local copy workspace/clients/sunrise/keyword-gap-recovery-strategy.md.
- **Review dashboard for Mario:** http://localhost:3002/dev/review (his dev server runs on port 3002; noindexed page listing everything to review).

## What is DONE (do not redo)
All 34 tracker items are built: 7 new lawn-care/fire-pit pages, 12 city-page expansions (lib/cityExpansions.ts + template), 11 service-page expansions (lib/serviceExpansions.ts + components/ServiceExpansion.tsx), 5 keyword H1 restorations, duplicate-H1 fixes (incl. blog template demoting body H1s), about-us section restore, homepage meta rewrite, sitemap (RECOVERY_PAGES in app/sitemap.ts), FromOurBlog cards, nearby-city link cards, services carousel with per-city titles (ServiceCarousel extended with items/useHeadings props), images + og:image on new pages, package.json deps. Slack update sent to Sam Delgado. Plan doc v2 in Drive.

## REMAINING TASKS (in order)
1. **Production build check.** A `npx next build` was left running in the sandbox at /tmp/sunrise/new-website (log: /tmp/build.log) — check if it finished (`ls /tmp/sunrise/new-website/.next/BUILD_ID`), else rerun. Must pass with zero errors. Known pre-existing risk: none after deps were added; if `resend` errors, `npm install` in the /tmp copy (`npm install --no-save resend leaflet react-leaflet @next/swc-linux-arm64-gnu@15.5.19`).
2. **Full parity verification against a PRODUCTION server.** Run `npx next start -p 3000` on the built /tmp copy, then `python3 scripts/04_verify.py sunrise-landscape --target http://localhost:3000 --heading-mode subsequence` from /tmp/sunrise/seo-migration-kit. It checks all 60 pages and needs >45s, so use the chunked variant: /tmp/sunrise/seo-migration-kit/scripts/04v_chunk.py (adds `--slice 0:20` etc.; if missing, recreate by patching 04_verify.py: add a --slice arg that slices `index` and writes per-slice report filenames). EXPECTED/TOLERATED diffs — do not "fix" these: blog pages have new descriptive titles+H1s (improvement, old were generic "Sunrise Landscape"); many pages have ADDED headings/sections (expansions); /service-areas-northern-virginia second H1 demoted to H2 (deliberate); blog body H1s demoted to H2 (deliberate); homepage meta description changed (approved WQA exception); city pages now have meta descriptions (were empty). FAILURES that matter: any missing manifest heading, any changed title (except blogs), any changed slug, word-count LOSS.
3. **Redirect map.** Add to next.config.ts `redirects()`: `/old-home` → `/` (301); `/planting` → `/landscape-planting-northern-virginia` (301); decide `/thank-you` (had 24 GSC impressions; either keep a thank-you page or 301 to `/contact`). These are the only legacy URLs GSC still shows.
4. **Launch runbook.** Write build-kit/LAUNCH-RUNBOOK.md: production build → final verify 60/60 → deploy → confirm robots.txt + sitemap.xml live → submit sitemap in GSC → verify GA4/conversion tracking fires → keep Webflow crawlable during watch window → daily GSC coverage checks week 1 → request indexing on the 7 new URLs → no URL changes for 4 weeks. Also: post-launch, run a live-vs-manifest drift check (the live Webflow site gained sections after the June 9 freeze, e.g. "From Our Blog"; sweep a few templates for anything else worth porting).
5. **After Mario's review:** flip tracker rows Humanized→Reviewed per his verdicts (openpyxl), and after launch flip to Live. Statuses: Not Started → Drafted → Humanized → Reviewed → Built → Verified → Live.
6. **Next content wave (September per plan, only if Mario asks):** blog production via `/blog` skill in repos/surge-seo-copy-pipeline/skills/blog (brief→write→seo-check→schema) + copy-humanizer pass (workspace/clients/sunrise/copy-agent/copy-humanizer.md); link-building prospect list (30-50 NoVA local domains).

## Sandbox gotchas (learned the hard way — trust these)
- Background processes DIE between bash calls. Start a server and use it in the SAME call: `setsid nohup npx next dev -p 3000 > /tmp/next-dev.log 2>&1 < /dev/null & sleep 5; <your checks>`.
- The mounted repo has slow disk IO; work in the fast local copy `/tmp/sunrise/new-website` (rsync app/components/lib/public from the repo before testing; rsync back is NOT needed — repo is source of truth, /tmp is test-only).
- Each bash call caps at 45s. Long jobs (build, 60-page verify) must be chunked or use timeout+recheck patterns.
- Dev mode (`next dev`) streams metadata into the body — the verifier reports missing titles/descriptions as FALSE failures. Only trust verify results against `next build` + `next start`.
- Watch apostrophes in single-quoted TS strings (one syntax error shipped this way). No em dashes in any copy, ever (client standard).
- The 60 original pages' slugs/titles/H1 text are a FROZEN CONTRACT. All changes additive. Never rewrite existing heading text.
- Mario may have Claude Code sessions editing the same repo concurrently — re-read files before editing, prefer targeted small edits.

## Links
- Tracking sheet (Mario's): https://docs.google.com/spreadsheets/d/1VWy2fsvCipMTXq3Nmy8c5V5ohOf4J5e993UyYtFV5HY/edit?usp=sharing
- Plan doc v2: https://docs.google.com/document/d/14EkrGjBffJkb3YR0dR2JXFZH88t4zvypYPdRZfHdKVU/edit?usp=drivesdk
- Keyword bank: https://docs.google.com/document/d/1BxHPlmBBpQrcJiypxy07FnPEsL4WE4cJAE-VWy-nZeg/edit?usp=drivesdk
- Sam Delgado Slack: U04SCKPJF (update sent 7/9)

## Working style Mario expects
Explain simply when asked (no jargon walls), use the Build Tracker as the shared to-do surface, tell him clearly what is HIS turn vs yours, verify everything before claiming done, and keep client-facing docs in the Drive Documents folder.
