'use client'

import Image from 'next/image'
import { useState } from 'react'

type Props = {
  before: { src: string; alt: string }
  after: { src: string; alt: string }
  beforeLabel?: string
  afterLabel?: string
  /** CSS aspect-ratio of the frame, e.g. '4 / 3' or '3 / 4'. Both photos must share it. */
  aspect?: string
  sizes?: string
}

// Drag-to-compare photo slider. A native range input sits on top of the frame, so it
// works with mouse, touch and keyboard (arrow keys) without any pointer math.
export default function BeforeAfterSlider({
  before,
  after,
  beforeLabel = 'Before',
  afterLabel = 'After',
  aspect = '4 / 3',
  sizes = '(max-width: 1024px) 100vw, 50vw',
}: Props) {
  const [pos, setPos] = useState(50)

  return (
    <div
      className="relative w-full overflow-hidden select-none"
      style={{ aspectRatio: aspect, borderRadius: '20px' }}
    >
      <Image src={after.src} alt={after.alt} fill className="object-cover" sizes={sizes} />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <Image src={before.src} alt={before.alt} fill className="object-cover" sizes={sizes} />
      </div>

      <span className="absolute top-4 left-4 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white bg-black/55" style={{ borderRadius: '999px' }}>
        {beforeLabel}
      </span>
      <span className="absolute top-4 right-4 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white bg-black/55" style={{ borderRadius: '999px' }}>
        {afterLabel}
      </span>

      {/* Divider + handle (decorative; the range input below is the control) */}
      <div className="absolute inset-y-0 pointer-events-none" style={{ left: `${pos}%`, transform: 'translateX(-50%)' }} aria-hidden="true">
        <div className="h-full bg-white" style={{ width: '3px', boxShadow: '0 0 8px rgba(0,0,0,0.35)' }} />
        <div
          className="absolute top-1/2 left-1/2 flex items-center justify-center bg-white text-green"
          style={{ width: '44px', height: '44px', borderRadius: '50%', transform: 'translate(-50%, -50%)', boxShadow: '0 2px 10px rgba(0,0,0,0.35)' }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 6l-6 6 6 6M15 6l6 6-6 6" />
          </svg>
        </div>
      </div>

      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label={`Drag to compare ${beforeLabel.toLowerCase()} and ${afterLabel.toLowerCase()} photos`}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
        style={{ margin: 0 }}
      />
    </div>
  )
}
