import Image from 'next/image'
import { GALLERY_ITEMS } from '@/data/gallery'

const CATEGORY_LABELS: Record<string, string> = {
  bathroom: 'Bathroom',
  kitchen: 'Kitchen',
  carpentry: 'Carpentry',
  renovation: 'Renovation',
  flooring: 'Flooring',
  outdoor: 'Outdoor',
}

export default function Gallery() {
  return (
    <section id="gallery" className="section-padding bg-brand-cream">
      <div className="container-site">

        {/* ── Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <div className="section-accent mb-8">
              <span className="section-accent-line" aria-hidden="true" />
              <span className="section-accent-label" style={{ color: '#0284C7' }}>Our Work</span>
            </div>
            <h2
              className="font-display font-bold text-brand-navy text-balance"
              style={{ fontSize: 'clamp(2.25rem, 4vw, 3.25rem)', lineHeight: '1.05' }}
            >
              Recent Projects
            </h2>
            <p className="font-sans text-surface-stone text-base mt-3 max-w-lg leading-relaxed">
              A selection of completed kitchens, bathrooms, and renovations across Greater London.
            </p>
          </div>

          {/* Spec note */}
          <div className="flex items-center gap-3 flex-shrink-0 pb-1">
            <div className="w-px h-8 bg-surface-border-light" aria-hidden="true" />
            <p className="spec-label text-surface-stone/60 text-right">
              Greater London<br />Est. 1994
            </p>
          </div>
        </div>

        {/* ── Masonry grid ── */}
        <div
          className="columns-1 sm:columns-2 lg:columns-3 [column-fill:_balance]"
          style={{ columnGap: '1rem' }}
        >
          {GALLERY_ITEMS.map((item, index) => (
            <div
              key={index}
              className="break-inside-avoid mb-4 relative overflow-hidden rounded-card group cursor-pointer"
            >
              <div
                className={`relative ${
                  index % 5 === 0 ? 'aspect-[4/5]' : index % 3 === 0 ? 'aspect-square' : 'aspect-[3/4]'
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading={index < 6 ? 'eager' : 'lazy'}
                />

                {/* Hover overlay */}
                <div
                  className="absolute inset-0 bg-brand-navy/0 group-hover:bg-brand-navy/55
                             transition-colors duration-300"
                  aria-hidden="true"
                />

                {/* Category badge */}
                {/* <div className="absolute bottom-3 left-3 z-10">
                  <span
                    className="spec-label inline-block px-3 py-1.5
                               bg-brand-navy/80 text-white/80 backdrop-blur-sm rounded"
                  >
                    {CATEGORY_LABELS[item.category]}
                  </span>
                </div> */}

                {/* Hover expand icon */}
                <div
                  className="absolute inset-0 flex items-center justify-center
                             opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                >
                  <div
                    className="w-11 h-11 rounded-full bg-white/15 backdrop-blur-sm
                               flex items-center justify-center border border-white/25"
                  >
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
