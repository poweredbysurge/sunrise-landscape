# Claude Code Prompt — Location Page Design Pass
Copy everything below the line into Claude Code, run from `new-website`. Goal: make the location pages look like Sunrise designed them, not assembled. STYLING ONLY: copy, heading text, heading order, titles, and metas are a frozen SEO contract and must not change.

---

Redesign the visual layer of the location pages in this Next.js site so they respect the brand style guide. Do not change any words, heading text, heading order, or metadata. Only layout, spacing, typography classes, and component structure.

FIRST: load the brand design skill at `../build-kit/skills/sunrise-design/SKILL.md` (or `.claude/skills/sunrise-design` if installed) — it is the binding style authority. If you have a general design skill available (e.g. ui-ux-pro-max), use it for craft decisions like spacing rhythm, grid composition, and typographic pairing, but wherever it disagrees with the Sunrise skill or the tokens below, Sunrise wins. Generic best practice never overrides the brand.

## Scope
1. `app/service-areas/[city]/page.tsx` (template for 12 city pages) — worst offender.
2. The 7 new pages: `app/lawn-care-*/page.tsx` and `app/patio-fire-pit-leesburg-ashburn-great-falls/page.tsx` — bring to the same standard.
3. Do NOT touch other pages.

## The style guide (source of truth: ../../workspace/clients/sunrise/branding/design-tokens.json — values repeated here)
Colors: green #1e3526 (dark sections, primary buttons), orange #ff6400 (accent labels + highlights ONLY, never large fills), cream #e7e6d2 (text on dark, light section bg), white (primary bg), black (text on light).
Type scale (desktop): H1 56px weight 400 Aeonik · H2 48px weight 700 · H3 40px weight 700 · H4 32px weight 700 · body 16px Aeonik new, line-height 1.3. Editorsnote italic is a DISPLAY ACCENT for stylized card titles and pullquotes only, never body or section headings.
Rules: border-radius 0 everywhere. 1px borders. Flat surfaces, no shadows or gradients.
Reference pages that already look right: `/` (homepage) and `/hardscape-northern-virginia` in this repo, plus the live site https://www.sunriselandscapeanddesign.com/service-areas/landscaping-oakton-va for section rhythm.

## Specific problems to fix (from design review)
1. **Type hierarchy is flat and tiny.** Section headings render far below the token scale. Apply the scale: real H2s at text-4xl/5xl weight 700, eyebrow labels (small orange uppercase) always PAIRED with a large heading below them, never carrying a section alone.
2. **Seven service cards leave an orphan.** 7 cards in a 3-col grid strands one. Restructure deliberately: e.g. first card featured full-width or a 4/3 split or a 2-row asymmetric grid. Equal card heights, one consistent image aspect ratio, consistent title treatment (Editorsnote italic is fine for card titles since the homepage uses it, but identical across all 7).
3. **Everything is left-crammed at the same width.** Create rhythm: intro sections pair a wide heading with a max-w-prose body column; some sections split heading-left / content-right on desktop (the live site does this); FAQ stays narrow (max-w-3xl); neighborhoods can run wider. Not every section starts at the same left edge with the same measure.
4. **Weird vertical gaps.** Standardize section padding to a scale (py-16 mobile / py-24 desktop) and alternate backgrounds with intent: white → green → cream → white. Never two same-color bands touching with nothing between; the expansion sections (knowledge, Common Questions, sibling link) must join the page rhythm, not float as separate cream strips.
5. **Buttons per token map:** primary = green bg, white text, square corners; ghost = 1px black border on light / 1px white border on dark. Orange is for text accents and hover states, not button fills (the new pages currently use orange fills: change to green primary with orange hover).
6. **Hero bands on the 7 new pages** are bare green rectangles. Give them the treatment the site uses: eyebrow label in orange uppercase, H1 at scale, supporting copy in cream at max-w-2xl, and if an image exists for the page (public/media), a darkened image background at 40% opacity like the city page banners.

## Hard constraints
- Every string of visible text stays byte-identical. If a change would require rewording, do not make it.
- One H1 per page, heading levels/order unchanged (verifier checks the heading tree).
- No new dependencies. Tailwind classes + existing components only.
- Keep FaqAccordion, ContactFormSection, JsonLd usage as-is functionally.

## Verification before you finish
1. `npm run build` passes.
2. Screenshot or curl-inspect at least: one city page, one lawn-care page, the fire-pit page. No horizontal scroll at 390px, 768px, 1440px widths.
3. Confirm heading text unchanged: extract h1-h6 text from rendered HTML before and after your changes and diff — must be identical.
4. Contrast: cream-on-green and black-on-white only for body text; orange never used for paragraphs.
5. Print a summary of every file touched and what changed visually.
