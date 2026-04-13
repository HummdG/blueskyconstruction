'use client'

import { useState } from 'react'
import { TESTIMONIALS } from '@/data/testimonials'

function StarRow() {
  return (
    <div className="flex items-center gap-0.5" aria-label="5 star rating">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5 text-brand-gold" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [active, setActive] = useState(0)

  return (
    <section className="bg-brand-navy-mid section-padding">
      <div className="container-site">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-0.5 bg-brand-blue" aria-hidden="true" />
              <span className="text-brand-blue text-xs uppercase tracking-[0.15em] font-semibold">Client Reviews</span>
            </div>
            <h2
              className="font-display font-bold text-white text-balance"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
            >
              What Our Clients Say
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-brand-gold" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
              ))}
            </div>
            <span className="text-white/60 text-sm">5.0 · 6 reviews</span>
          </div>
        </div>

        {/* Desktop 3-col grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t) => (
            <blockquote
              key={t.id}
              className="bg-white/5 border border-white/8 rounded-xl p-6 flex flex-col gap-4 hover:border-brand-blue/30 hover:bg-white/8 transition-colors"
            >
              {/* Decorative quote */}
              <span
                className="font-display italic text-brand-blue/25 text-6xl leading-none select-none"
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <StarRow />
              <p className="text-white/80 text-sm leading-relaxed flex-1 -mt-4">{t.text}</p>
              <footer className="flex items-center gap-2 mt-auto pt-4 border-t border-white/8">
                <div className="w-8 h-8 rounded-full bg-brand-blue/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-brand-blue text-xs font-bold">{t.name[0]}</span>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm leading-none">{t.name}</p>
                  <p className="text-white/40 text-xs mt-0.5">{t.location}</p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden">
          <div className="overflow-hidden">
            <blockquote
              key={active}
              className="bg-white/5 border border-white/8 rounded-xl p-6 flex flex-col gap-4"
            >
              <span className="font-display italic text-brand-blue/25 text-6xl leading-none select-none" aria-hidden="true">
                &ldquo;
              </span>
              <StarRow />
              <p className="text-white/80 text-sm leading-relaxed -mt-4">
                {TESTIMONIALS[active].text}
              </p>
              <footer className="flex items-center gap-2 pt-4 border-t border-white/8">
                <div className="w-8 h-8 rounded-full bg-brand-blue/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-brand-blue text-xs font-bold">{TESTIMONIALS[active].name[0]}</span>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{TESTIMONIALS[active].name}</p>
                  <p className="text-white/40 text-xs">{TESTIMONIALS[active].location}</p>
                </div>
              </footer>
            </blockquote>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-6">
            <button
              onClick={() => setActive((a) => (a - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-colors"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            {/* Tab dots */}
            <div className="flex items-center gap-2" role="tablist" aria-label="Testimonial navigation">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  role="tab"
                  aria-selected={i === active}
                  aria-label={`Go to review ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === active
                      ? 'w-6 h-2 bg-brand-blue'
                      : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => setActive((a) => (a + 1) % TESTIMONIALS.length)}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-colors"
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
