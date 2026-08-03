# Claude Code Prompt — MASTER BUILD, July 2026
The one prompt that produces everything approved in the July 23 Mike meeting: the site re-point, the final nav, and the four new pages. Run from `new-website`.
**PUBLISH HOLD: build and verify everything locally/staging. Do NOT deploy. Mike reviews first, then authorizes.**

---

Execute the following in order. Read first: `../build-kit/PAGE-STANDARDS.md`, `../build-kit/skills/sunrise-design/SKILL.md` (binding style authority), and this prompt in full. Log every title/H1/name change to `../build-kit/REPOINT-CHANGELOG.md` (file, before, after).

## PART 1 — Run the re-point (base spec + amendments)
Execute `../build-kit/prompts/relaunch-repoint.md` in full, WITH these amendments that supersede its nav section (decisions from the July 23 client meeting):

**Final nav structure (authoritative):**
```
Landscaping & Lawn Care ▾
   Landscape Maintenance      → /landscape-maintenance-northern-virginia
   Lawn Care                  → /lawn-care-northern-virginia   (NEW hub, built in Part 2)
   Planting                   → /landscape-planting-northern-virginia
Design & Build ▾               ← parent label CLICK opens /outdoor-living-spaces-northern-virginia (NEW, Part 2)
   Outdoor Living Spaces      → /outdoor-living-spaces-northern-virginia
   Patios & Hardscaping       → /hardscape-northern-virginia
   Landscape Design           → /landscape-design-northern-virginia
   Outdoor Lighting           → /landscape-lighting-northern-virginia
   Water Features             → /water-features-northern-virginia
   Drainage & Erosion Control → /drainage-solutions-northern-virginia   (client decision: lives HERE, not under Lawn Care)
Commercial ▾
   Commercial Maintenance     → /commercial-landscape-maintenance-virginia
   Snow Removal               → /commercial-snow-removal-virginia   (NEW, Part 2)
Service Areas                 → /service-areas-northern-virginia
About · Blog · Contact
```
Footer mirrors this grouping + keeps the Lawn Care city-links block (now headed by the new hub) + service-areas links.
Additional amendment: business hours Mon-Fri 08:00-17:00 added to every LocalBusiness schema as openingHoursSpecification.
**Address migration (client confirmed 7/23): the office moved. New address everywhere:**
`4819 Sudley Rd, Catharpin, VA 20143` (replaces 43813 Beaver Meadow Rd #100, Sterling, VA 20166)
a. Replace in EVERY LocalBusiness/PostalAddress schema block (grep the whole repo: app/, lib/, components/), the Footer, the Contact page, and the About section. Phone stays 703-544-0028.
b. THE COPY SWEEP (critical): the site's copy leans on a "Sterling HQ" story that is no longer true. Rewrite these honestly (Catharpin sits at the Prince William/Loudoun edge near Gainesville; do NOT invent driving times):
   - Sterling city page expansion: "hometown advantage / HQ is IN Sterling / same-week visits" section becomes a served-town story, not an HQ story
   - Loudoun County lawn page: "dispatched from 43813 Beaver Meadow Rd" and "Sterling shop" lines
   - Herndon lawn page: "Sterling is next door / tightest service radius"
   - Ashburn lawn page: "our shop in Sterling is one exit away / earliest visit slots"
   - Leesburg lawn page: "crews are based fifteen minutes away in Sterling"
   - Fire-pit page: "our shop is on Beaver Meadow Road" / Sterling mobilization line
   - Service-areas hub expansion: "43813 Beaver Meadow Rd" FAQ answer + "Sterling shop" mentions
   - About page restored section: "home base in Sterling"
   Replacement narrative: one company covering Loudoun, Fairfax, and the Prince William edge; crews route across the whole territory daily. Keep it verifiable and specific without fake minutes.
c. Grep for any remaining "Beaver Meadow", "Sterling, VA 20166", "43813" strings: zero must remain.
d. Note in the changelog. GBP + directory/citation updates are handled separately by Mario (website only in this prompt).

## PART 2 — Build the four new pages
Build each from its brief (all briefs carry fresh Ahrefs data, July 22-23 pulls). Full pipeline per page: brief → draft → humanizer pass (copy-agent kill list, NO em dashes) → FAQ + Service schema → wire links → swap test vs nearest sibling page.

1. `../build-kit/briefs/retaining-walls-northern-virginia.md` (200/mo local; de-conflict with the how-to blog post as specified)
2. `../build-kit/briefs/lawn-care-northern-virginia.md` (~430/mo regional cluster; links DOWN to all 6 city lawn pages + county page; becomes the nav Lawn Care target)
3. `../build-kit/briefs/outdoor-living-spaces-northern-virginia.md` (outdoor living contractor 1,400/KD 0; the Design & Build front door; links down to every D&B service page)
4. `../build-kit/briefs/commercial-snow-removal-virginia.md` (commercial snow removal 2,500/KD 0, ~6,600/mo cluster all KD 0; B2B tone; cross-link commercial maintenance + both snow blog posts)

Each new page: add to `RECOVERY_PAGES` in app/sitemap.ts, og:image from a verified-existing real photo in public/media (no hotlinks, no invented paths), one H1, canonical set, FromOurBlog block with topically matched posts.

## PART 3 — Internal link + orphan sweep
After Parts 1-2, verify link flow:
- New lawn hub: linked from nav, footer, maintenance page, all 6 city lawn pages (up-links), and receives the blog cluster links.
- Outdoor living: linked from nav (parent label + dropdown), hardscape page, fire-pit page, lighting page, water features page.
- Snow removal: linked from nav, commercial maintenance page (both ways), snow blog posts.
- Retaining walls: linked from hardscape page, drainage page, Centreville city page, the how-to blog post.
- Target: every page on the site reachable from ≥3 distinct pages. Print an inlink count table for the 4 new + 8 recovery pages.

## PART 4 — Verification gate (all must pass; do not deploy regardless)
1. `npm run build` zero errors.
2. Production server (`next start`): extract title/meta/H1 from every changed + new page; diff against spec; print table.
3. relaunch-repoint's own checks (single "Where Vision" H2, no "39 year" strings, no broken-space headings, sitemap has no redirect stubs, /blogs redirects to /blog).
4. One-keyword-one-owner audit: grep all titles + H1s across the site; assert no two pages share a primary keyword phrase. Print any collisions.
5. Every image URL on touched pages returns 200 locally; og:images point at real files.
6. Word counts: 4 new pages in their brief ranges; no existing page lost words.
7. Update the workbook Build Tracker (openpyxl): flip the 4 new-page rows and re-point rows to "Humanized" with note "awaiting Mike review". Workbook: bpt-agency-os-unpacked/blueprint-workspace/clients/sunrise-landscape-design/wqa/audits/3fdcea67-a932-4791-b705-c0c21421fd30/sunrise-wqa-data.xlsx
8. Print the final summary + changelog path. STOP. No deploy, no publish. Mike's authorization is the gate.
