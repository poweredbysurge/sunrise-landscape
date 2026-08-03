# Sunrise Page Build Standards
Source of truth for every page Claude Code creates or expands in `new-website`.
A page is not done until it passes every gate below.

## Production pipeline (per page, in order)
1. **Brief** — start from the page's brief in `build-kit/briefs/`. Never write without one.
2. **Draft** — follow the copy-agent chain in `workspace/clients/sunrise/copy-agent/`:
   `copy-generate` rules for structure, `copy-persona` voice rules, `copy-competitor` for positioning.
3. **Humanize** — run the draft against `copy-humanizer.md`. Every phrase on the kill list gets removed. This pass is MANDATORY, not optional.
4. **Review** — `copy-review.md` checklist + the gates below. Human (Mario or strategist) signs off before merge.
5. **Wire** — route file, metadata, schema, internal links in/out, sitemap check.
6. **Verify** — `npm run build` passes; existing 60 pages still 60/60 on `04_verify.py` (new pages are additive, never touch existing slugs/titles/H1s).

## Writing rules (non-negotiable)
- **No em dashes.** Use commas, periods, or parentheses. Also avoid semicolons in body copy.
- **Humanizer kill list applies everywhere** including meta descriptions and FAQ answers. Extra bans for location pages: "nestled in", "bustling", "vibrant community", "look no further", "hidden gem".
- Vary sentence length. If three consecutive sentences have similar length and rhythm, rewrite one.
- Specifics over adjectives: "39 years", "43813 Beaver Meadow Rd in Sterling", "core aeration in September", not "experienced" or "high quality".
- Write to one reader (the homeowner or property manager in that city), not "whether you're X or Y".
- Every claim verifiable. No invented stats, awards, or project counts.
- Contractions are fine. Corporate fluff is not.

## Keyword rules
- ONE primary keyword per page. It appears in: title tag, H1, first 100 words, one H2, meta description. That is enough. Do not stuff.
- Secondary keywords (from the brief) appear naturally in H2s/body, roughly once per 150 to 200 words max.
- Title tag 50 to 60 chars, ends with `| Sunrise Landscape`. Meta 140 to 160 chars with keyword + a reason to click + CTA.
- Never target another page's primary keyword anywhere in headings. Check the intent lane:
  - `/lawn-care-*` pages own: lawn care, lawn service, mowing, fertilization, aeration, weed control, mosquito.
  - `/service-areas/landscaping-*` pages own: landscaping, landscape design, landscape company.
  - Service pages own their service + "northern virginia".

## Anti-doorway rules (this is the gateway Mario flagged)
Two location pages may share layout. They may NOT share:
- Opening paragraph structure (rotate the 4 openers defined in DIFFERENTIATION-MATRIX.md)
- Neighborhood lists (each city uses only ITS neighborhoods from the matrix)
- The local proof block (testimonial or project assigned in the matrix, never reused)
- FAQ questions (minimum 3 of 5 unique to that city, answering something truly local: soil, HOA, seasonal timing, city permitting)
- The "local knowledge" paragraph (each city gets its assigned angle: turf type, drainage pattern, HOA density, lot size, tree cover)
**Test before merge:** paste any two same-type location pages side by side. If you can swap the city names and 80% still reads true, the page fails. Rewrite until it doesn't.

## Page skeleton (location pages, ~700 to 1,100 words)
1. H1 with primary keyword (city + service)
2. Opening: 2 to 3 sentences, direct, names the city and one hyper-local detail
3. H2 services block: what Sunrise actually does there, specific inclusions (pull from live maintenance lists: weekly mowing and edging, soil test, pre-emergent, core aeration and overseeding, leaf cleanup, grub control)
4. H2 local knowledge paragraph (assigned angle from matrix)
5. Local proof: testimonial or featured project (assigned from matrix)
6. H2 "Neighborhoods we serve" with that city's list
7. FAQ (4 to 5 questions, schema-marked)
8. CTA: free consultation, phone 703-544-0028
9. Cross-link block: sibling page (lawn-care <-> landscaping for same city) + 2 relevant service pages + 1 relevant blog post

## Technical wiring (every new page)
- Route: exact slug from brief. `trailingSlash: false`. One `<h1>` only.
- Metadata via Next Metadata API (title, description, canonical, OG, Twitter).
- JSON-LD: LocalBusiness + Service with `areaServed` set to the city, `provider` Sunrise Landscape & Design, address 43813 Beaver Meadow Rd #100, Sterling VA 20166, phone 703-544-0028.
- FAQPage schema for the FAQ block.
- Images: real Sunrise project photos only, descriptive alt text with city where honest.
- Add to sitemap (automatic via manifest/getPageIndex? NO — new pages are outside the manifest; add them to app/sitemap.ts explicitly or extend the page index source).
- Internal links IN: add the page to footer service-areas block and to its sibling city page. No orphans.

## Launch protocol reminder
Existing 60 URLs stay byte-identical on slugs/titles/metas/H1s (frozen SEO contract). New pages ride on top. One sitemap, submitted to GSC on launch day. No URL changes for 4 weeks post-launch.
