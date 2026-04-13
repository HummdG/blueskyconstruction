import Image from 'next/image'
import { SITE_CONFIG } from '@/data/siteConfig'
import { buildWhatsAppUrl } from '@/lib/utils'

export default function Hero() {
  const whatsappUrl = buildWhatsAppUrl(
    SITE_CONFIG.whatsapp,
    "Hi BlueSky Construction, I'd like to get a free quote. Please let me know your availability."
  )

  return (
    <section
      className="relative grid lg:grid-cols-[58fr_42fr] overflow-hidden min-h-screen"
      aria-label="Hero"
    >
      {/* ── Left panel ── */}
      <div className="flex flex-col justify-center bg-brand-blue-pale px-8 sm:px-12 lg:px-16 xl:px-20 py-28 lg:py-32 relative z-10">

        {/* Status chip */}
        <div className="flex items-center gap-2.5 mb-10">
          <span
            className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse-soft flex-shrink-0"
            aria-hidden="true"
          />
          <span className="text-surface-stone text-xs tracking-[0.15em] uppercase font-medium">
            Available Mon–Fri · Greater London
          </span>
        </div>

        {/* Blue rule */}
        <div className="w-8 h-0.5 bg-brand-blue mb-7" aria-hidden="true" />

        {/* Headline */}
        <h1
          className="font-display font-bold text-brand-navy leading-[0.93] mb-7 text-balance"
          style={{ fontSize: 'clamp(2.75rem, 4.5vw, 4.5rem)' }}
        >
          London&apos;s Trusted{' '}
          <em className="text-brand-blue not-italic">Builder</em>{' '}
          &amp; Renovator.
        </h1>

        {/* Subheading */}
        <p className="text-surface-stone text-base sm:text-lg leading-relaxed mb-8 max-w-sm">
          Kitchens, bathrooms, extensions &amp; full property renovations.{' '}
          <strong className="font-semibold text-brand-navy-light">{SITE_CONFIG.experience} years of experience.</strong>{' '}
          Free initial consultation.
        </p>

        {/* Trust microcopy */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 mb-10" aria-label="Key guarantees">
          {['Fully insured', 'Work guaranteed', 'On-time delivery'].map((item, i) => (
            <span key={item} className="flex items-center gap-4">
              {i > 0 && <span className="w-px h-3 bg-surface-border-light" aria-hidden="true" />}
              <span className="text-surface-stone text-xs flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-brand-blue flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                {item}
              </span>
            </span>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <a
            href={`tel:${SITE_CONFIG.phoneTel}`}
            className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-brand-navy text-white text-[13px] font-semibold tracking-wide uppercase rounded-btn hover:bg-brand-navy-mid transition-colors"
          >
            <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            Call {SITE_CONFIG.phoneDisplay}
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-7 py-4 border border-surface-border-light text-brand-navy text-[13px] font-semibold tracking-wide uppercase rounded-btn hover:border-brand-blue hover:text-brand-blue transition-colors"
          >
            <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488" />
            </svg>
            WhatsApp Us
          </a>
        </div>

        <a
          href={`mailto:${SITE_CONFIG.email}`}
          className="self-start text-xs text-surface-stone hover:text-brand-blue transition-colors tracking-wide"
        >
          Or send us an email →
        </a>

        {/* Bottom label — desktop only */}
        <div className="hidden lg:flex items-center gap-3 absolute bottom-8 left-16 xl:left-20">
          <div className="w-px h-5 bg-surface-border-light" aria-hidden="true" />
          <span className="text-surface-stone text-xs tracking-widest uppercase">
            9 Services · SW6 2PR London
          </span>
        </div>
      </div>

      {/* ── Right panel — image ── */}
      <div className="relative h-72 sm:h-96 lg:h-auto">
        <Image
          src="/assets/bluesky/hero-bathroom.jpg"
          alt="BlueSky Construction — professionally completed bathroom renovation"
          fill
          className="object-cover object-center"
          priority
          sizes="(max-width: 1024px) 100vw, 42vw"
          style={{ filter: 'saturate(0.9) contrast(1.05) brightness(0.97)' }}
        />

        {/* Left edge blend into hero panel — desktop */}
        <div
          className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-brand-blue-pale to-transparent z-10 hidden lg:block"
          aria-hidden="true"
        />

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" aria-hidden="true" />

        {/* Rating badge */}
        <div className="absolute bottom-6 left-6 z-20 hidden lg:flex items-center gap-3 bg-white border border-surface-border-light px-4 py-3 shadow-card rounded-card">
          <div className="flex items-center gap-0.5" aria-label="5 star rating">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-3 h-3 text-brand-gold" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
              </svg>
            ))}
          </div>
          <p className="text-brand-navy text-xs font-semibold leading-tight">5.0 · 6 client reviews</p>
        </div>

        {/* Experience badge */}
        <div className="absolute top-6 right-6 z-20 hidden lg:flex flex-col items-center justify-center w-20 h-20 rounded-full bg-brand-navy border-2 border-brand-blue shadow-elevated">
          <span className="text-white font-display font-bold text-xl leading-none">{SITE_CONFIG.experience}</span>
          <span className="text-white/70 text-[10px] text-center leading-tight mt-0.5">Years<br/>Experience</span>
        </div>
      </div>
    </section>
  )
}
