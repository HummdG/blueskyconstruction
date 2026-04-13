import { SERVICES } from '@/data/services'
import { SITE_CONFIG } from '@/data/siteConfig'
import { buildWhatsAppUrl } from '@/lib/utils'

export default function Services() {
  const whatsappUrl = buildWhatsAppUrl(
    SITE_CONFIG.whatsapp,
    "Hi BlueSky Construction, I'd like to discuss my project and get a free quote."
  )

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-site">
        <div className="grid lg:grid-cols-[1fr_400px] gap-16 lg:gap-24 items-start">

          {/* Left — services list */}
          <div>
            {/* Section label */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-0.5 bg-brand-blue" aria-hidden="true" />
              <span className="text-brand-blue text-xs uppercase tracking-[0.15em] font-semibold">What We Do</span>
            </div>

            <h2
              className="font-display font-bold text-brand-navy mb-4 text-balance"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
            >
              Expert Services for<br />Every Home Project
            </h2>

            <p className="text-surface-stone text-base leading-relaxed mb-10 max-w-lg">
              From a single room refurbishment to a full property overhaul — we deliver high-quality
              craftsmanship across all aspects of building and renovation.
            </p>

            {/* Numbered service list */}
            <div role="list" aria-label="Our services">
              {SERVICES.map((service, index) => (
                <div key={service.id} className="service-row group" role="listitem">
                  <span className="service-row-number" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="service-row-name">{service.name}</span>
                  <svg
                    className="service-row-arrow w-4 h-4 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              ))}
            </div>
          </div>

          {/* Right — sticky CTA block */}
          <div className="lg:sticky lg:top-24">
            <div className="bg-brand-blue-pale border border-brand-blue/15 rounded-xl p-8">
              <div className="w-12 h-12 rounded-xl bg-brand-blue flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                </svg>
              </div>

              <h3 className="font-display font-bold text-brand-navy text-xl mb-3">
                Not sure what you need?
              </h3>
              <p className="text-surface-stone text-sm leading-relaxed mb-6">
                Tell us about your project and we&apos;ll guide you to the right solution. Initial
                consultation is always free, with no obligation.
              </p>

              <div className="space-y-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 w-full py-3.5 bg-[#25D366] text-white text-sm font-semibold rounded-btn hover:bg-[#1ebe5d] transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488" />
                  </svg>
                  WhatsApp Us
                </a>
                <a
                  href={`tel:${SITE_CONFIG.phoneTel}`}
                  className="flex items-center justify-center gap-2.5 w-full py-3.5 border border-brand-blue/25 text-brand-navy text-sm font-semibold rounded-btn hover:border-brand-blue hover:text-brand-blue transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  Call {SITE_CONFIG.phoneDisplay}
                </a>
              </div>

              <p className="text-surface-stone text-xs text-center mt-4">
                Serving Greater London · Mon–Sat
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
