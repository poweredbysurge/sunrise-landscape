---
name: sunrise-landscape-design
description: Use this skill to design or restyle anything for Sunrise Landscape & Design (39-year landscape design/build firm in Sterling, VA): website pages, components, mocks, decks. Contains the brand tokens, type scale, layout rhythm, and component rules extracted from the live site. Load whenever styling Sunrise pages in new-website or producing branded assets.
user-invocable: true
---

# Sunrise Landscape & Design — Design Skill
(To auto-load in Claude Code, copy this folder to .claude/skills/ in the repo root.)

**The one rule that governs everything:** deep forest green (`#1e3526`) and warm cream (`#e7e6d2`) carry the brand; orange (`#ff6400`) is a scalpel, not a paintbrush. Orange appears in eyebrow labels, one highlighted word, hover states. Never as fills, never in paragraphs. Corners are square (radius 0) everywhere, borders are 1px, surfaces are flat. If a page has rounded corners, drop shadows, or an orange button, it is off-brand.

## Tokens (source: workspace/clients/sunrise/branding/design-tokens.json)
- Colors: green `#1e3526` · orange `#ff6400` · cream `#e7e6d2` · white · black. Neutrals only for utility UI.
- Usage: white = primary bg. Green = dark sections + primary buttons (white text). Cream = text on dark + light band bg. Black = text on light. Orange = accents only.
- Type: **Aeonik** (headings/nav/buttons; H1 weight 400, H2-H4 weight 700), **Aeonik new** (body 16px, line-height 1.3), **Editorsnote italic** (display accent: stylized card titles, pullquotes, one word inside a heading; never body, never plain section headings).
- Scale (desktop): H1 56 · H2 48 · H3 40 · H4 32 · body 16. Tailwind mapping: H1 `text-4xl lg:text-6xl`, H2 `text-4xl lg:text-5xl font-bold`, H3 `text-3xl lg:text-4xl font-bold`.
- Fonts self-hosted in `new-website/public/fonts`, wired via next/font/local.

## Layout rhythm (matches homepage + live site)
- Section padding `py-16 lg:py-24`. Alternate bands with intent: white, green, cream, white. Never two identical bands touching.
- Eyebrow pattern: small orange uppercase label ALWAYS paired with a large heading below it. An eyebrow never carries a section alone.
- Headings can run wide; body copy sits at `max-w-prose` to `max-w-3xl`. Alternate full-width and split (heading-left / content-right) sections. Never stack five identical left-aligned blocks.
- Cards: equal heights, one aspect ratio per grid, square corners, 1px borders. A 7-item grid gets a deliberate layout (featured-first or 4/3 rows), never 3-col with an orphan.
- Buttons: primary `bg-green text-white`, ghost 1px border. Hover moves to orange text/border, not orange fill.

## Assets
- Logos: `new-website/public/logos`. 72 real project photos: `new-website/public/media` (always before stock; image rules in build-kit/prompts/add-images.md).
- Reference implementations: `app/page.tsx`, `app/hardscape-northern-virginia/page.tsx`. Live reference: sunriselandscapeanddesign.com.

## Hard guardrails when restyling existing pages
- Copy, heading text, heading order, titles, metas are a frozen SEO contract: styling passes change classes and structure only, never words. Verify with `seo-migration-kit/scripts/04_verify.py` (60/60).
- No new dependencies for styling. Tailwind + existing components.
- Contrast: cream-on-green or black-on-white body text only. Orange text only at label sizes.
- Any new microcopy follows build-kit/PAGE-STANDARDS.md: no em dashes, no kill-list phrases.
