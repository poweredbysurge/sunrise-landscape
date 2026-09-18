'use client'

import { usePathname } from 'next/navigation'

/**
 * TEMPORARY — font/figtree-preview branch only. Delete with the branch.
 *
 * Redefines the Aeonik CSS variables with Figtree for the homepage alone, so
 * the swap can be judged on a real page without touching the other 79 routes.
 * Custom properties inherit down the DOM, so redeclaring `--font-aeonik` and
 * `--font-aeonik-new` here overrides the values <html> sets for this subtree
 * only — which is why no component or Tailwind token needs to change.
 *
 * `display: contents` means this element generates no box: children are laid
 * out exactly as if it were not in the tree, so nothing about the homepage's
 * layout, stacking, or sticky positioning shifts. Inheritance is DOM-based and
 * is unaffected by it.
 */
export default function FigtreePreviewScope({
  className,
  children,
}: {
  className: string
  children: React.ReactNode
}) {
  const isHomepage = usePathname() === '/'

  return (
    <div style={{ display: 'contents' }} className={isHomepage ? className : undefined}>
      {children}
    </div>
  )
}
