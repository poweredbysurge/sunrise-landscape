# Claude Code Prompt — Relaunch Re-Point (RUN ONLY AFTER MIKE APPROVES, meeting July 24)
Copy everything below the line into Claude Code from the `new-website` folder.
Source of truth for WHY: workspace/clients/sunrise/seo-audit/SITE-HIERARCHY-AUDIT-JULY-2026.md, launch-strategy-explainer.html, and keyword-plan-explainer.html (fresh Ahrefs pricing, July 22).

---

Re-point this Next.js site from design-first to landscaping/maintenance-first per the approved July 2026 hierarchy audit. This is "Plan B wearing Plan A's seatbelt": URLs, content depth, and internal links are FROZEN; titles, H1s, nav labels, brand display name, and homepage composition CHANGE as listed below. Nothing outside this list changes.

IMPORTANT CONTEXT SHIFT: earlier build phases treated all 60 original titles/H1s as a frozen contract. This prompt is the APPROVED exception list that supersedes that freeze for exactly the items below. Keep a running log of every change you make (file, before, after) and write it to build-kit/REPOINT-CHANGELOG.md so the parity verifier's diffs can be reconciled as approved drift.

## 1. Homepage (app/page.tsx + home components)
- Title tag: `Landscape Design Northern Virginia | Sunrise Landscape` → `Landscaping Company in Northern Virginia | Sunrise Landscape` (also og/twitter titles).
- Meta description (all three spots): → `Full-service landscaping in Northern Virginia — year-round maintenance, lawn care, patios and outdoor living. Family owned since 1986. Free yard inspection.` NOTE this approved copy contains em dashes in the audit; replace with a comma per house style: `Full-service landscaping in Northern Virginia: year-round maintenance, lawn care, patios and outdoor living. Family owned since 1986. Free yard inspection.`
- Keep the H1 "Landscaping & Hardscaping in Northern Virginia" exactly as is (it is already correct).
- Section order: move the Landscape Maintenance band ABOVE the Hardscape band (maintenance-led business, page mirrors revenue). Commercial stays after both.
- Heading dedupe: "Where Vision meets craftsmanship" currently appears as H2 three times → keep ONE (the first), demote/remove the other two (change tags to styled <p>, keep visuals). Trust headings: keep ONE of "Most Trusted Landscape Experts…" / "…for Over 39 Years" (keep the since-1986 phrasing), demote the other to <p>.
- Anniversary math: replace every "39+ years", "Over 39 Years", "39 years" site-wide with "40 years" (1986→2026), or "since 1986" where it reads better. Grep the whole repo including lib data files.
- CTA consolidation: primary CTA everywhere on homepage = "Get My Free Yard Inspection" (link /contact#form). Keep "Get a Free Design Consultation" ONLY inside Design & Build sections. Remove/replace "Inquire" and "Speak to an Expert" buttons with the primary CTA.
- Fix text-rendering space bugs (broken span styling) wherever they exist site-wide: "Let's buildyour dream yard", "Your Yard,Our Passion", "Let's getstarted inmaking yourdream areality", "LandscapesFor Living". Search components for adjacent spans missing whitespace and add proper spaces (check Navigation, Footer, ContactHero, HeroContactForm, home components).

## 2. Navigation (components/Navigation.tsx) + Footer
Rebuild the menu to exactly this structure and wording:
```
Landscaping & Lawn Care ▾   (first, biggest)
   Landscape Maintenance   → /landscape-maintenance-northern-virginia
   Lawn Care               → /lawn-care-loudoun-county-va (umbrella page; submenu or page links reach city pages)
   Planting                → /landscape-planting-northern-virginia
   Drainage Solutions      → /drainage-solutions-northern-virginia
Design & Build ▾
   Patios & Hardscaping    → /hardscape-northern-virginia   (label change only; URL unchanged)
   Landscape Design        → /landscape-design-northern-virginia
   Outdoor Lighting        → /landscape-lighting-northern-virginia
   Water Features          → /water-features-northern-virginia
Commercial                 → /commercial-landscape-maintenance-virginia
Service Areas              → /service-areas-northern-virginia   (promoted to top level)
About · Blog · Contact
```
Mirror the same grouping in the Footer, and ADD a footer "Lawn Care" block linking all six lawn-care city pages (Leesburg, Ashburn, Herndon, Fairfax, Loudoun County, Aldie) + the patio page.

## 3. Brand name standardization → "Sunrise Landscape"
- Header logo alt/wordmark text, footer, copyright line, About page copy, and every JSON-LD `LocalBusiness.name` / `provider.name` (search lib + components + app for "Sunrise Landscape & Design", "Sunrise Landscape and Design", "SUNRISE Landscape - Design") → display name "Sunrise Landscape".
- EXCEPTIONS (do not change): direct client testimonial quotes, legal pages if they cite the registered entity, and the domain itself. Log each occurrence changed.
- Do NOT touch the domain or any URL.

## 4. Targeted title/H1 corrections (keyword assignment map)
- /service-areas-northern-virginia: H1 "Landscape Design in Northern Virginia" → "Landscaping Services Across Northern Virginia" (title already matches).
- /landscape-maintenance-northern-virginia: title → `Landscape Maintenance Services in Northern Virginia | Sunrise Landscape` (carries both the 4,700/mo head term and the 2,900/mo services term). Meta description updated to match, leading with maintenance program language.
- /landscape-design-northern-virginia: title/H1 UNCHANGED — it becomes the sole owner of the design keyword once the homepage stops using it.
- No other titles or H1s change. All lawn-care/city/service pages keep their current keyword-correct titles.

## 5. Structural/technical fixes
- Sitemap (app/sitemap.ts): exclude the redirect stubs `/hardscape` and `/commercial` (they 308 to their -northern-virginia/-virginia versions). Only 200-status canonical URLs in the sitemap. Keep the redirects themselves working.
- Orphan-page fix (internal links IN, never removing any existing links):
  a. /landscape-maintenance-northern-virginia gets a "Lawn care by town" links block → all six lawn-care pages.
  b. Each /service-areas/landscaping-{city}-va page keeps its lawn-care sibling teaser (verify present for leesburg/ashburn/herndon; ADD equivalent teasers on fairfax-adjacent and western-loudoun pages → their lawn pages).
  c. /hardscape-northern-virginia links to /patio-fire-pit-leesburg-ashburn-great-falls in body copy or a teaser block.
  d. Nav + footer links from §2 complete the job. Target: every lawn-care page and the patio page reachable from ≥3 distinct pages.
- /blogs (index) currently 404s while posts live at /blogs/*: add a redirect /blogs → /blog in next.config.ts. Careers label: nav says "Careers" pointing at /career — keep URL, ensure label consistent.
- Contact page brand-query fix: ensure homepage (not /contact) is the canonical brand target — verify /contact has no LocalBusiness JSON-LD claiming the brand name as its own page entity; homepage keeps the LocalBusiness schema with the new "Sunrise Landscape" name.

## 6. Guardrails
- FROZEN: every URL path, all body copy word counts (additive only), all existing internal links, /landscape-design-* titles, all lawn-care/city page titles+H1s.
- House style: no em dashes anywhere, humanizer kill-list applies to any new microcopy (build-kit/PAGE-STANDARDS.md), brand tokens per build-kit/skills/sunrise-design (orange = accent only, radius 0).
- Concurrent sessions may touch this repo; re-read files before editing.

## 7. Verification before you finish (all must pass)
1. `npm run build` zero errors.
2. Start the production build and extract from every changed page: title, meta description, H1 list. Diff against this prompt's spec; print the table.
3. Grep rendered homepage HTML: "Where Vision" appears in exactly ONE h2; no "39" year strings remain anywhere; none of the four broken-space strings render.
4. Sitemap.xml contains no /hardscape or /commercial entries; /blogs returns a redirect to /blog.
5. Count inlinks to each lawn-care page + patio page across rendered nav/footer/maintenance/city pages: each ≥3.
6. Write build-kit/REPOINT-CHANGELOG.md (every file touched, before→after for titles/H1s/name strings) and update the workbook Build Tracker notes if instructed.
7. Do NOT deploy. Stop after verification and print the summary for Mario's review.
