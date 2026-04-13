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
      className="relative min-h-[calc(100vh-4rem)] flex items-center"
      aria-label="Hero"
    >
      {/* ── Full-bleed background photo ── */}
      <Image
        src="/assets/bluesky/hero-bathroom.jpg"
        alt="BlueSky Construction — professionally completed bathroom renovation in London"
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
        style={{ filter: 'saturate(0.9) contrast(1.05) brightness(0.92)' }}
      />

      {/* Gradient: dark on left for text, transparent on right */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, rgba(6,14,28,0.88) 0%, rgba(6,14,28,0.72) 40%, rgba(6,14,28,0.28) 72%, rgba(6,14,28,0.08) 100%)'
        }}
        aria-hidden="true"
      />
      {/* Gradient: dark at bottom for readability */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to top, rgba(6,14,28,0.65) 0%, transparent 45%)'
        }}
        aria-hidden="true"
      />

      {/* ── Content ── */}
      <div className="container-site relative z-10 py-20">
        <div className="max-w-[600px]">

          {/* Availability badge */}
          <div className="flex items-center gap-2.5 mb-8">
            <span
              className="w-1.5 h-1.5 rounded-full bg-[#25D366] flex-shrink-0"
              aria-hidden="true"
            />
            <span className="spec-label text-white/55">
              Available Mon–Sat · Greater London
            </span>
          </div>

          {/* Accent rule */}
          <div className="w-10 h-0.5 bg-brand-blue mb-8" aria-hidden="true" />

          {/* Headline */}
          <h1
            className="mb-8 leading-none"
            aria-label="London's Trusted Builder & Renovator"
          >
            <span
              className="block font-display italic font-normal text-brand-sky"
              style={{ fontSize: 'clamp(3rem, 5.5vw, 5rem)', lineHeight: '0.95' }}
            >
              London&apos;s
            </span>
            <span
              className="block font-display font-bold text-white"
              style={{ fontSize: 'clamp(3rem, 5.5vw, 5rem)', lineHeight: '0.95' }}
            >
              Trusted Builder
            </span>
            <span
              className="block font-display font-bold text-white"
              style={{ fontSize: 'clamp(3rem, 5.5vw, 5rem)', lineHeight: '0.95' }}
            >
              &amp; Renovator.
            </span>
          </h1>

          {/* Subheading */}
          <p className="font-sans text-white/60 text-base sm:text-[17px] leading-relaxed mb-8 max-w-[400px]">
            Kitchens, bathrooms, extensions &amp; full property renovations.{' '}
            <span className="text-white/85 font-medium">{SITE_CONFIG.experience} years of craft.</span>{' '}
            Free consultation, no obligation.
          </p>

          {/* Trust signals */}
          <div className="flex flex-wrap gap-x-5 gap-y-2 mb-10" aria-label="Key guarantees">
            {['Fully insured', 'Work guaranteed', 'On-time delivery'].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <svg
                  className="w-3 h-3 text-brand-blue flex-shrink-0"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span className="font-sans text-white/55 text-xs">{item}</span>
              </span>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <a
              href={`tel:${SITE_CONFIG.phoneTel}`}
              className="btn-dark py-4 px-7"
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
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4
                         bg-[#25D366] text-white font-sans text-[12px] font-semibold
                         tracking-[0.12em] uppercase rounded-btn
                         hover:bg-[#1ebe5d] transition-colors"
            >
              <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488" />
              </svg>
              WhatsApp Us
            </a>
          </div>

          {/* Email link */}
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="inline-flex items-center gap-1.5 text-white/30 hover:text-white/55
                       font-sans text-xs tracking-wide transition-colors"
          >
            Or send us an email
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>

      {/* ── Star rating badge — bottom-right ── */}
      <div
        className="absolute bottom-6 right-6 z-10 hidden lg:flex items-center gap-3
                   bg-brand-navy/70 backdrop-blur-sm border border-white/10
                   px-4 py-3 rounded-card"
      >
        <div className="flex items-center gap-0.5" aria-label="5 star rating">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-3 h-3 text-brand-gold" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>
          ))}
        </div>
        <div className="w-px h-4 bg-white/15" aria-hidden="true" />
        <p className="font-sans text-white text-xs font-medium">5.0 · 6 reviews</p>
      </div>

      {/* ── Experience badge — bottom-left ── */}
      <div className="absolute bottom-6 left-6 z-10 hidden lg:block">
        <p className="spec-label text-white/30">
          SW6 2PR · Greater London · 9 Services
        </p>
      </div>
    </section>
  )
}
