'use client'

import { useState } from 'react'

export default function NewsletterSidebar() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  return (
    <div className="bg-white p-7" style={{ borderRadius: '16px' }}>
      {submitted ? (
        <div className="text-center py-4">
          <p className="font-ui not-italic font-bold text-xl text-green mb-2">You&apos;re in!</p>
          <p className="text-green/60">Thanks for subscribing. Landscape insights headed your way.</p>
        </div>
      ) : (
        <>
          <h3 className="font-ui not-italic font-bold text-xl text-green mb-2">Join Our Newsletter</h3>
          <p className="text-green/60 mb-5 leading-relaxed">
            Subscribe to receive the latest insights and updates delivered directly to your inbox.
          </p>
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email Address"
              required
              className="w-full px-4 py-3 border border-black/20 text-base text-green bg-white outline-none focus:border-green transition-colors"
              style={{ borderRadius: '8px' }}
            />
            <button
              type="submit"
              className="w-full px-4 py-3 bg-green text-cream font-ui font-bold text-sm tracking-wider uppercase transition-colors hover:bg-orange"
              style={{ borderRadius: '8px' }}
            >
              Subscribe
            </button>
          </form>
          <p className="mt-4 text-green/40 leading-relaxed">
            By subscribing you agree to our{' '}
            <a href="/privacy" className="underline hover:text-green/70 transition-colors">
              Privacy Policy
            </a>
            .
          </p>
        </>
      )}
    </div>
  )
}
