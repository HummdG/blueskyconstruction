import { SITE_CONFIG } from '@/data/siteConfig'
import { buildWhatsAppUrl } from '@/lib/utils'

export default function HomeCTA() {
  const whatsappUrl = buildWhatsAppUrl(
    SITE_CONFIG.whatsapp,
    "Hi BlueSky Construction, I'd like to get a free, no-obligation quote."
  )

  return (
    <section
      id="contact"
      className="relative bg-brand-navy overflow-hidden section-padding"
      aria-labelledby="cta-heading"
    >
      {/* Blueprint dot texture */}
      <div className="absolute inset-0 blueprint-dots opacity-60" aria-hidden="true" />

      {/* Diagonal sky accent */}
      <div
        className="absolute -right-40 top-0 bottom-0 w-[55%] bg-brand-blue/5
                   border-l border-brand-blue/10 skew-x-[-6deg] origin-top-right"
        aria-hidden="true"
      />

      {/* Large ghosted number */}
      <span
        className="absolute right-8 bottom-0 font-display font-bold italic text-white/[0.025]
                   leading-none select-none pointer-events-none hidden lg:block"
        style={{ fontSize: '22rem', lineHeight: 1 }}
        aria-hidden="true"
      >
        BS
      </span>

      <div className="container-site relative z-10">
        <div className="max-w-2xl">

          {/* Section accent */}
          <div className="section-accent mb-10">
            <span className="section-accent-line" aria-hidden="true" />
            <span className="section-accent-label">Get Started</span>
          </div>

          {/* Headline */}
          <h2
            id="cta-heading"
            className="font-display font-bold text-white mb-5 text-balance"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: '1.0' }}
          >
            Ready to Transform<br />
            <em className="text-brand-sky font-normal not-italic">Your Home?</em>
          </h2>

          <p className="font-sans text-white/50 text-base sm:text-[17px] leading-relaxed mb-10 max-w-[480px]">
            Get your free, no-obligation quote today. We&apos;ll discuss your project, offer expert
            advice, and begin when you&apos;re ready.
          </p>

          {/* CTA row */}
          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <a
              href={`tel:${SITE_CONFIG.phoneTel}`}
              className="btn-dark py-4 px-8"
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
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4
                         bg-[#25D366] text-white font-sans font-semibold
                         text-[12px] tracking-[0.1em] uppercase rounded-btn
                         hover:bg-[#1ebe5d] transition-colors"
            >
              <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488" />
              </svg>
              WhatsApp Us
            </a>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4
                         border border-white/15 text-white/65
                         font-sans font-semibold text-[12px] tracking-[0.1em] uppercase
                         rounded-btn hover:border-white/30 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              Email Us
            </a>
          </div>

          {/* Trust micro-line */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {[
              SITE_CONFIG.insurance,
              `Mon–Fri ${SITE_CONFIG.hours.monFri} · Sat ${SITE_CONFIG.hours.saturday}`,
              'Free initial consultation',
            ].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-brand-blue/40 flex-shrink-0" aria-hidden="true" />
                <span className="spec-label text-white/25">{item}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
