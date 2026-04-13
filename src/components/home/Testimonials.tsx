'use client'

import { useState } from 'react'
import { TESTIMONIALS } from '@/data/testimonials'

function Stars() {
  return (
    <div className="flex items-center gap-0.5" aria-label="5 star rating">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-3 h-3 text-brand-gold" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
      ))}
    </div>
  )
}

function TestimonialCard({ t }: { t: typeof TESTIMONIALS[0] }) {
  return (
    <blockquote
      className="h-full flex flex-col bg-white border border-surface-border-light rounded-card p-7
                 hover:border-brand-blue/30 hover:shadow-card transition-all duration-300"
    >
      {/* Large decorative quote */}
      <span
        className="font-display italic text-brand-blue/25 leading-none select-none block mb-2"
        style={{ fontSize: '4.5rem', lineHeight: 1 }}
        aria-hidden="true"
      >
        &ldquo;
      </span>

      <Stars />

      <p className="font-sans text-surface-stone text-sm leading-relaxed mt-4 flex-1">
        {t.text}
      </p>

      <footer className="flex items-center gap-3 mt-6 pt-5 border-t border-surface-border-light">
        <div
          className="w-9 h-9 rounded-full bg-brand-blue/10 border border-brand-blue/20
                     flex items-center justify-center flex-shrink-0"
        >
          <span className="font-display font-bold text-brand-blue text-sm">{t.name[0]}</span>
        </div>
        <div>
          <p className="font-sans text-brand-navy font-semibold text-sm leading-none">{t.name}</p>
          <p className="spec-label text-surface-stone/60 mt-1">{t.location}</p>
        </div>
      </footer>
    </blockquote>
  )
}

export default function Testimonials() {
  const [active, setActive] = useState(0)

  return (
    <section className="bg-brand-cream section-padding">
      <div className="container-site">

        {/* ── Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div>
            <div className="section-accent mb-8">
              <span className="section-accent-line" aria-hidden="true" />
              <span className="section-accent-label">Client Reviews</span>
            </div>
            <h2
              className="font-display font-bold text-brand-navy text-balance"
              style={{ fontSize: 'clamp(2.25rem, 4vw, 3.25rem)', lineHeight: '1.05' }}
            >
              What Our Clients Say
            </h2>
          </div>

          {/* Aggregate rating */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <Stars />
            <span className="font-sans text-surface-stone text-sm">5.0 · 6 reviews</span>
          </div>
        </div>

        {/* ── Desktop 3-col grid ── */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.id} t={t} />
          ))}
        </div>

        {/* ── Mobile carousel ── */}
        <div className="md:hidden">
          <TestimonialCard t={TESTIMONIALS[active]} />

          <div className="flex items-center justify-between mt-6 relative z-[51]">
            <button
              onClick={() => setActive((a) => (a - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
              className="w-10 h-10 rounded-full border border-surface-border-light flex items-center justify-center
                         text-surface-stone hover:text-brand-navy hover:border-brand-blue/30 transition-colors"
              aria-label="Previous testimonial"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            <div className="flex items-center gap-2" role="tablist" aria-label="Testimonial navigation">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  role="tab"
                  aria-selected={i === active}
                  aria-label={`Review ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === active
                      ? 'w-5 h-1.5 bg-brand-blue'
                      : 'w-1.5 h-1.5 bg-surface-stone/25 hover:bg-surface-stone/50'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => setActive((a) => (a + 1) % TESTIMONIALS.length)}
              className="w-10 h-10 rounded-full border border-surface-border-light flex items-center justify-center
                         text-surface-stone hover:text-brand-navy hover:border-brand-blue/30 transition-colors"
              aria-label="Next testimonial"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}
