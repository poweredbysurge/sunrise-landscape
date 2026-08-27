/**
 * Sunrise Landscape — email design tokens.
 *
 * Mirrors workspace/clients/sunrise/branding/design-tokens.json and the
 * sunrise-design skill, narrowed to what email clients can actually render.
 *
 * The governing brand rule carries over unchanged: green and cream carry the
 * brand, orange is a scalpel. Orange appears in eyebrow labels and one accent
 * rule per email — never as a fill, never in a paragraph, never on a button.
 * Corners are square, borders are 1px, surfaces are flat. No shadows.
 *
 * Email caveat: the brand faces (Aeonik, Editorsnote) are self-hosted .otf/.woff2
 * and cannot be relied on in a mail client. They lead the stack so desktop clients
 * on a machine that has them render on-brand; Arial/Helvetica is the real target.
 */

export const color = {
  green: '#1e3526',
  orange: '#ff6400',
  cream: '#e7e6d2',
  white: '#ffffff',
  black: '#000000',
  // Flattened tints. Email clients are unreliable with rgba(), so every
  // translucent brand value from the site is pre-composited to a solid hex.
  greenTint: '#f4f6f4', // green @ ~4% on white — zebra rows
  greenRule: '#d4dad5', // green @ ~20% on white — 1px hairlines on light
  creamRule: '#4a5c50', // cream @ ~20% on green — 1px hairlines on dark
  creamDim: '#a8b3aa', // muted cream — small print on green
  textMuted: '#5c6b60', // label text on white, passes AA at 12px+
} as const

export const font = {
  ui: "'Aeonik', 'Helvetica Neue', Helvetica, Arial, sans-serif",
  body: "'Aeonik new', 'Helvetica Neue', Helvetica, Arial, sans-serif",
  mono: "'SF Mono', Menlo, Consolas, monospace",
} as const

/** Outer shell width. 600px is the safe ceiling across Outlook and mobile. */
export const WIDTH = 600
