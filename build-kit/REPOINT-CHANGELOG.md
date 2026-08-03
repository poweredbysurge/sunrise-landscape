# Repoint Changelog — Design-First to Landscaping/Maintenance-First

Source of truth: `workspace/clients/sunrise/seo-audit/SITE-HIERARCHY-AUDIT-JULY-2026.md`, `launch-strategy-explainer.html`, `keyword-plan-explainer.html` (Ahrefs pricing, July 22, 2026).

All paths below are relative to `new-website/` unless noted otherwise. URLs, body copy word counts, and existing internal links were frozen; only titles, H1s, nav labels, brand display name, and homepage composition changed, per the approved exception list.

## 1. Homepage (`app/page.tsx`, `components/home/HomeVersionB.tsx`, `components/ServicesGrid.tsx`)

- `app/page.tsx`: title/description/OG/twitter
  - Before: `Landscape Design Northern Virginia | Sunrise Landscape` / "Landscape design and build in Northern Virginia since 1986. Patios, plantings, water features, year-round care from one local team. Free design consultation."
  - After: `Landscaping Company in Northern Virginia | Sunrise Landscape` / "Full-service landscaping in Northern Virginia: year-round maintenance, lawn care, patios and outdoor living. Family owned since 1986. Free yard inspection."
- `app/page.tsx`: added `patchLocalBusinessJsonLd()` — the manifest's embedded LocalBusiness/WebSite JSON-LD (frozen MDX source) still said "Sunrise Landscape and Design" and "over 39 years"; patched in code (name → "Sunrise Landscape", 39→40 years) rather than editing the frozen manifest file. Applies to all 3 schema blocks rendered on the homepage (2 standalone LocalBusiness nodes + 1 `@graph` with WebSite+LocalBusiness).
- H1 "Landscaping & Hardscaping in Northern Virginia": unchanged, per instruction.
- `components/home/HomeVersionB.tsx`: moved `<MaintenanceSection />` to run immediately after `<ServicesGrid />`, ahead of `<DesigningForImpact />`, the aerial trust-video section, and `<FeaturedWorkCarousel />` (the page's design/hardscape-showcase content). Commercial has no dedicated homepage band (only a ServicesGrid card), so nothing further to move there.
- Heading dedupe: "Where Vision ‍ meets craftsmanship." exists 3 times site-wide — the real, visible `<h2>` in `components/ServicesGrid.tsx` is kept as the single H2. The two sr-only duplicates in `HomeVersionB.tsx` (`serviceCards1`/`serviceCards2` blocks) were demoted from `<h2>` to `<p>`.
- Trust heading: "Northern Virginia's Most Trusted Landscape Experts since 1986" (aerial video section, `HomeVersionB.tsx`) kept as the one `<h2>`. The sr-only duplicate in `components/MaintenanceSection.tsx` ("...for Over 39 Years") demoted to `<p>` and corrected to "Over 40 Years".
- CTA consolidation: `ServicesGrid.tsx` end card "Get a free consultation" → "Get My Free Yard Inspection". `HomeVersionB.tsx`'s `<FeaturedWorkCarousel>` call now passes `ctaLabel="Get My Free Yard Inspection"` (was defaulting to "Speak to an Expert"). `Hero3B.tsx` and `InquiryForm.tsx` already used the correct CTA — no change needed.
- Broken-space bugs fixed (added a literal space so raw text content doesn't concatenate, without altering visual layout):
  - `components/MaintenanceSection.tsx`: "Your Yard,Our Passion." → "Your Yard, Our Passion."
  - `components/ContactFormSection.tsx`: "Let's getstarted inmaking yourdream areality." → "Let's get started in making your dream a reality."
  - `components/ContactHero.tsx`: "Let's buildyour dream yard" → "Let's build your dream yard"
  - `components/Footer.tsx`: "LandscapesFor Living" → "Landscapes For Living"

## 2. Navigation (`components/Navigation.tsx`) + Footer (`components/Footer.tsx`)

- Rebuilt desktop + mobile nav to: **Landscaping & Lawn Care ▾** (Landscape Maintenance, Lawn Care → `/lawn-care-loudoun-county-va`, Planting, Drainage Solutions) → **Design & Build ▾** (Patios & Hardscaping → `/hardscape-northern-virginia`, Landscape Design, Outdoor Lighting, Water Features) → Commercial → Service Areas → About Us → Careers → Blog → Contact.
- Added a second dropdown state (`lawnOpen`/`setLawnOpen`) alongside the renamed `designOpen`/`setDesignOpen` (was `servicesOpen`).
- Footer `serviceLinks` relabeled to match nav wording (Hardscape → Patios & Hardscaping, Lighting → Outdoor Lighting, Drainage → Drainage Solutions, Maintenance → Landscape Maintenance).
- Added a new footer "Lawn Care" block (`lawnCareLinks`) linking all 6 lawn-care city pages + the patio/fire-pit page.

## 3. Brand name standardization → "Sunrise Landscape"

Changed everywhere except direct client testimonial quotes, legal self-identification clauses on `/privacy` and `/terms-of-service`, and the domain itself:

- Title-tag suffixes site-wide: `| Sunrise Landscape and Design` / `| Sunrise Landscape & Design` → `| Sunrise Landscape` (all pages).
- Meta `description` fields (non-legal, marketing copy) on: `/contact`, `/about-us`, `/career`, `/privacy`, `/terms-of-service`, `/service-areas-northern-virginia`.
- JSON-LD `provider.name` on the 6 recovery pages (`app/lawn-care-*-va/page.tsx`) and the patio page: `'Sunrise Landscape & Design'` → `'Sunrise Landscape'`.
- Logo alt text `SUNRISE Landscape & Design` / `SUNRISE Landscape - Design` → `SUNRISE Landscape` (Footer, Navigation, `/service-areas-northern-virginia`, `/privacy`, `/terms-of-service`, `/commercial` stub).
- `aria-label`s ("...— Home") in Footer and Navigation.
- Footer copyright line → "© {year} Sunrise Landscape. All rights reserved."
- `components/AboutHero.tsx` heading "About Sunrise Landscape and Design" → "About Sunrise Landscape".
- `components/LeafletMap.tsx` map popup, `components/DesignApproachSection.tsx` image alt, `lib/blogData.ts` excerpts (×2), `app/blogs/[slug]/page.tsx` title fallback/description/byline.
- **Left unchanged (exceptions):** `components/home/HomeVersionB.tsx` testimonial quote; `/privacy` lines 51/77/120 (self-identification, SMS-consent clause, signature); `/terms-of-service` lines 51/56/81/86/91/93/113 (service agreement, insurance, IP, SMS-consent, signature clauses); `/contact` FAQ licensing answer (line 59).

## 4. Targeted title/H1 corrections

- `/service-areas-northern-virginia`: H1 "Landscape Design in Northern Virginia" → "Landscaping Services Across Northern Virginia".
- `/landscape-maintenance-northern-virginia`: title "Landscape Maintenance Northern Virginia | Sunrise Landscape" → "Landscape Maintenance Services in Northern Virginia | Sunrise Landscape"; description rewritten to lead with the maintenance program.
- `/landscape-design-northern-virginia`: verified unchanged (title, H1, meta) — sole owner of the design keyword now that the homepage no longer targets it.

## 5. Structural/technical fixes

- `app/sitemap.ts`: added `REDIRECT_STUB_PATHS = ['/hardscape', '/commercial']` filter — these manifest entries 308-redirect (see `next.config.ts`) and no longer appear in the sitemap.
- `app/landscape-maintenance-northern-virginia/page.tsx`: added a "Lawn Care by Town" links block (all 6 lawn pages + patio page).
- `app/service-areas-northern-virginia/page.tsx`: existing "Lawn Care in Your Town" block verified present (no change needed).
- `app/service-areas/landscaping-{leesburg,ashburn,herndon}-va`: sibling lawn-care teasers verified present (via `lib/cityExpansions.ts`).
- `app/service-areas/landscaping-western-loudoun-va`: sibling teaser already links to `/lawn-care-aldie-va` (Aldie sits within western Loudoun per the page's own neighborhood copy) — verified present, no change needed.
- Added a new `extraSibling` field to `CityExpansion` (`lib/cityExpansions.ts`) and set it on `landscaping-oakton-va` (Fairfax-adjacent) → `/lawn-care-fairfax-va`, rendered in `app/service-areas/[city]/page.tsx` as an additional teaser section below the existing `sibling` block (existing sibling links were not removed).
- `app/hardscape-northern-virginia/page.tsx`: added a body-copy link to `/patio-fire-pit-leesburg-ashburn-great-falls` after the hardscape image carousel; corrected "over 35 years of experience" → "over 40 years of experience" in the same pass.
- `next.config.ts`: added redirect `/blogs` → `/blog` (permanent).
- `app/contact/page.tsx`: added `stripLocalBusiness()` — filters the `LocalBusiness` node (and any nested in a `@graph`) out of the manifest JSON-LD rendered on `/contact`, so the homepage remains the sole canonical LocalBusiness entity. The `WebSite` node is preserved.

## 6. Anniversary math (39/37/38/35 → 40 years, site-wide)

Corrected in: `lib/serviceExpansions.ts`, `lib/cityExpansions.ts` (×3), `components/Navigation.tsx` (ticker, "Over 37 Years" → "Over 40 Years"), `components/MaintenanceSection.tsx`, `components/ContactHero.tsx` ("38+ years"), `app/service-areas-northern-virginia/page.tsx` (×3, plus "nearly four decades" → "four decades"), `app/lawn-care-leesburg-va/page.tsx` (×3), `app/lawn-care-herndon-va/page.tsx` (×3), `app/hardscape-northern-virginia/page.tsx` ("35 years"), and the homepage + Oakton city-page manifest content patched in code (see sections 1 and 5). Left unchanged: `app/hardscape/page.tsx` and `app/commercial/page.tsx` — dead redirect stubs, unreachable per `next.config.ts` redirects.

## 7. Verification (all passed)

- `npm run build`: zero errors, 75 static pages generated.
- Extracted title/description/H1 from all changed pages via production server — matches spec (see table above).
- Homepage rendered HTML: "Where Vision" appears in exactly 1 `<h2>` (2 other instances are now `<p>`); no `39`/`37`/`38`/`35`-year strings remain anywhere swept (home, all service pages, all lawn-care pages, all city pages, legal pages).
- `sitemap.xml`: 0 entries for `/hardscape` or `/commercial`; `/blogs` returns a 308 to `/blog`.
- Inlink count: each of the 6 lawn-care pages + the patio page gets 10 inlinks across the pages checked (footer + landscape-maintenance block + service-areas-northern-virginia block are sitewide/near-sitewide), comfortably over the ≥3 target.
- `/contact` JSON-LD: 0 `LocalBusiness` nodes, 1 `WebSite` node retained. Homepage JSON-LD: 1 canonical `LocalBusiness`-family entity naming, all 4 name occurrences read "Sunrise Landscape".

## 8. MASTER BUILD (July 23 meeting) — nav amendments + business hours

Session audit found the above (sections 1-7) already complete from a prior/concurrent run. Remaining work for this pass:

- `lib/manifest.ts`: `getMdxJsonLd()` before/after — was a plain JSON parse of the frozen MDX-embedded schema block; after, every `LocalBusiness` node (top-level or inside a `@graph`) is patched in code to `name: "Sunrise Landscape"` and gets `openingHoursSpecification` (Mon-Fri 08:00-17:00) injected if not already present. Applies uniformly across all 60 manifest pages instead of hand-editing frozen MDX files. (Homepage's own manifest source already had the correct hours block; the other 59 pages did not — this was the actual gap the "add hours to every LocalBusiness schema" amendment was pointing at.)
- `app/contact/page.tsx` FAQ answer, "Are you licensed and insured?": "Sunrise Landscape and Design" → "Sunrise Landscape". Note: section 3 above logged this exact line as an intentional exception in the prior pass. Flagging the disagreement here rather than silently overriding it — the exceptions list in the base spec (testimonials, legal pages, domain) doesn't name FAQ answers, so this pass treated it as in-scope. Mike/team should confirm which reading they want; trivial to revert.
- `components/Navigation.tsx` — nav amendments from the MASTER BUILD prompt (supersede base spec section 2's placeholder structure):
  - `landscapingAndLawnCare`: removed "Drainage Solutions" (moved to Design & Build per client decision); "Lawn Care" href `/lawn-care-loudoun-county-va` → `/lawn-care-northern-virginia` (new hub, section 9 below).
  - `designAndBuild`: added "Outdoor Living Spaces" → `/outdoor-living-spaces-northern-virginia` (new page, first position); added "Drainage & Erosion Control" → `/drainage-solutions-northern-virginia` (last position, relabeled from "Drainage Solutions").
  - "Design & Build" parent label: was a `<button>` (hover/click toggle only) → now a `<Link>` to `/outdoor-living-spaces-northern-virginia` that also still opens the dropdown on hover (hover handlers moved to the wrapping div so the label and panel share one hit region).
  - New "Commercial" dropdown (was a flat top-level link): `Commercial Maintenance` → existing URL, `Snow Removal` → `/commercial-snow-removal-virginia` (new page). New `commercialOpen` state + mobile flat-list block.
- `components/Footer.tsx` `serviceLinks`: reordered/relabeled to mirror the amended nav tree and added the 3 new pages: "Lawn Care" (hub), "Outdoor Living Spaces", "Snow Removal"; "Drainage Solutions" → "Drainage & Erosion Control"; "Commercial" → "Commercial Maintenance".

## 9. Office relocation (2026-07-23): 43813 Beaver Meadow Rd #100, Sterling, VA 20166 → 4819 Sudley Rd, Catharpin, VA 20143

Client-confirmed relocation. Catharpin sits at the Prince William/Loudoun county line near Gainesville. No driving-time or mileage claims were invented anywhere in this pass; every "X minutes/miles from Sterling" line found during the sweep was replaced with honest route/territory-coverage language instead of a new fabricated number.

**Schema (address + geo, every `LocalBusiness` node):**
- `lib/manifest.ts`: extended the existing `patchLocalBusiness()` code-patch (the same function that already injects `name`/`openingHoursSpecification`, see section 8) to also overwrite `address` → `{streetAddress: "4819 Sudley Rd", addressLocality: "Catharpin", addressRegion: "VA", postalCode: "20143", addressCountry: "US"}` and `geo` → `{latitude: "38.85417", longitude: "-77.57194"}` on every `LocalBusiness` node (top-level or nested in an `@graph`) whenever that node already carries an `address`/`geo` field. Applies at render time to all manifest-driven pages without hand-editing the frozen MDX schema blocks.
- Coordinates sourced via web search for Catharpin, VA community-level coordinates (38°51'15"N 77°34'19"W) after direct property-record lookups (Redfin/Zillow) returned HTTP 403. Same coordinates used in `components/LeafletMap.tsx` below, so the map pin and the schema `geo` agree.
- 11 hand-written recovery/new-page files with their own inline `schema` array (not sourced via `getMdxJsonLd()`) were edited directly: `app/lawn-care-aldie-va`, `app/lawn-care-herndon-va`, `app/lawn-care-ashburn-va`, `app/lawn-care-leesburg-va`, `app/lawn-care-fairfax-va`, `app/lawn-care-loudoun-county-va`, `app/lawn-care-northern-virginia`, `app/outdoor-living-spaces-northern-virginia`, `app/retaining-walls-northern-virginia`, `app/commercial-snow-removal-virginia`, `app/patio-fire-pit-leesburg-ashburn-great-falls` (all under `page.tsx`).
- A second, pre-existing stale address (`21430 Cedar Drive, Suite 206, Sterling, VA 20164` — inconsistent with the primary `43813 Beaver Meadow` address baked into the same frozen MDX files, on a separate top-level `LocalBusiness` node) was found during verification on 13 manifest pages. Not named in the original migration scope, but caught by the same `patchLocalBusiness()` code patch since it also carries `address`/`geo` fields — now resolves to the same new address at render time. Flagging here since it wasn't part of the original ask.
- 14 frozen MDX source files under `data/manifest/` were also edited directly (not just patched in code) so a literal repo-wide grep for the old address returns zero, per the explicit verification requirement for this task: `pages/index.mdx`, `pages/landscape-design-northern-virginia/index.mdx`, and 12 `pages/service-areas/landscaping-*-va/index.mdx` files (ashburn, great-falls, leesburg, vienna, chantilly, herndon, reston, centreville, mclean, western-loudoun, oakton, sterling). Only the `address`/`geo` JSON values were changed; surrounding frontmatter/body content was left untouched except for the Sterling page body copy noted below.

**Visible copy:**
- `components/Footer.tsx`: visible address block `43813 Beaver Meadow Rd #100 / Sterling, VA 20166` → `4819 Sudley Rd / Catharpin, VA 20143`.
- `components/LeafletMap.tsx`: `OFFICE` lat/lng `{39.0106, -77.4002}` → `{38.85417, -77.57194}`; `ADDRESS` string updated to match.
- `app/contact/page.tsx`: visible `<address>` block updated; 3 metadata description fields (title/openGraph/twitter) reworded from "in Sterling, VA" to "serving Northern Virginia"; 2 FAQ answers ("What areas do you serve?", "Do you offer year-round maintenance programs?") had their "~25 miles from our Sterling, VA office" claims replaced with honest Loudoun/Fairfax territory language (no new mileage invented).
- `app/about-us/page.tsx`: "from our home base in Sterling" → "from our shop at the Loudoun and Prince William County line near Gainesville"; also caught and fixed a spelled-out "Thirty nine years later" → "Forty years later" (missed by the earlier digit-only "39" sweep in section 6, since it wasn't in numeral form).
- `lib/cityExpansions.ts`: Sterling city page (`landscaping-sterling-va`) — rewrote the "Hometown Advantage" angle (built entirely on the old shop address) into a new, still-differentiated "Every Lot Size, One Crew" angle (metaDescription, knowledgeHeading, knowledgePara, FAQ, and `image.alt`), since the anti-doorway rule requires each city page keep a unique local-knowledge angle rather than just deleting the section. Western Loudoun entry's `knowledgePara` ("crews run west from the Sterling shop weekly") reworded to "regular route" language.
- `data/manifest/.../landscaping-sterling-va/index.mdx`: frozen body paragraph (not just schema) referenced "our Beaver Meadow Road office" and used 2 em dashes — rewritten to remove both, in line with the no-em-dash house style and the same route-territory narrative used elsewhere. This is the one frozen-MDX body edit in this pass; everywhere else the "patch in code" convention from section 8 was preserved.
- Rewrote 8 more "Sterling shop/HQ" narrative passages across: `app/lawn-care-loudoun-county-va` (hero + 3 metadata descriptions), `app/lawn-care-herndon-va`, `app/lawn-care-ashburn-va`, `app/lawn-care-leesburg-va`, `app/lawn-care-fairfax-va`, `app/patio-fire-pit-leesburg-ashburn-great-falls`, `app/lawn-care-northern-virginia` (hero), `lib/serviceExpansions.ts` (`service-areas-northern-virginia` entry: body copy, FAQ question, and the "Where are you actually located?" FAQ answer now gives the real Catharpin address; `hardscape` dead-stub entry's FAQ answer also fixed), `app/service-areas-northern-virginia/page.tsx` ("Headquartered in Sterling" → "Our team routes across the whole region daily"). Every instance replaced a specific "X minutes/miles from Sterling" or "based/headquartered in Sterling" claim with route-coverage/territory language; no new distances were invented anywhere.

**Verification:**
- `npm run build`: zero errors, all 79 static/SSG routes generated, both before and after the final MDX-level address patch.
- Production server (`npm run start`) rendered-output check across 28 pages (homepage, about, contact, all 11 recovery/new pages, and 14 manifest-driven service-area/design pages): zero occurrences of "Beaver Meadow", "43813", "Sterling, VA 20166", and the second stale "Cedar Drive"/"20164" address.
- Full repo-wide `grep` (excluding `node_modules`, `.next`, `.git`) for "Beaver Meadow", "43813", "Sterling, VA 20166": zero matches.
- Repo-wide phrase sweep for "Sterling shop", "home base in Sterling", "based in Sterling", "Sterling HQ", "Sterling-based", "headquartered", "shop in Sterling"/"shop on Beaver", "hometown advantage", "minutes/exit away", "is next door", "home ground" across `app/`, `components/`, `lib/`: zero matches.
- No em dashes introduced in any file touched this pass (spot-checked; the 3 remaining em-dash hits in touched files are pre-existing code/JSX comments and an `aria-label`, not reader-facing copy, and were out of scope for this task).
- Not deployed. Local production server used only for verification, stopped after the check completed.
