import Link from 'next/link'
import { SITE_CONFIG } from '@/data/siteConfig'
import { buildWhatsAppUrl } from '@/lib/utils'

const HOURS = [
  { day: 'Mon – Fri', hours: '8am – 6pm', open: true },
  { day: 'Saturday', hours: '8am – 4pm', open: true },
  { day: 'Sunday', hours: 'Closed', open: false },
]

const SERVICES = [
  'Extensions',
  'Kitchens',
  'Bathrooms',
  'Property Refurbishments',
  'Carpentry',
  'Flooring',
  'Decorating',
  'Handyman Work',
  'Plumbing & Electrical',
]

export default function Footer() {
  const whatsappUrl = buildWhatsAppUrl(
    SITE_CONFIG.whatsapp,
    SITE_CONFIG.whatsappDefaultMessage
  )

  return (
    <footer className="bg-brand-navy text-white border-t border-white/5">

      {/* ── Main grid ── */}
      <div className="container-site py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_auto_auto] gap-12 lg:gap-16">

        {/* Col 1 — Brand + services */}
        <div>
          <Link href="/" className="inline-flex items-center gap-3 mb-7 group">
            <div
              className="w-9 h-9 rounded-[3px] bg-brand-blue flex items-center justify-center
                         flex-shrink-0 group-hover:bg-brand-blue-dark transition-colors"
            >
              <span className="text-white font-display font-bold text-[13px] leading-none tracking-tight">BS</span>
            </div>
            <div>
              <span className="text-white font-display font-semibold text-[15px] leading-none block">BlueSky</span>
              <span className="text-white/40 font-mono text-[10px] tracking-widest block mt-0.5 uppercase">Construction</span>
            </div>
          </Link>

          <p className="font-sans text-white/45 text-sm leading-relaxed mb-7 max-w-[280px]">
            Professional building and renovation services across Greater London. {SITE_CONFIG.experience} years
            of expert craftsmanship.
          </p>

          {/* Insurance badge */}
          <div className="inline-flex items-center gap-2 bg-white/4 border border-white/8 rounded px-3 py-2 mb-8">
            <svg
              className="w-3.5 h-3.5 text-brand-blue flex-shrink-0"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
            <span className="spec-label text-white/50">{SITE_CONFIG.insurance}</span>
          </div>

          {/* Services list */}
          <div>
            <p className="spec-label text-white/25 mb-4">Services</p>
            <ul className="grid grid-cols-1 gap-2">
              {SERVICES.map((s) => (
                <li key={s} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-brand-blue/40 flex-shrink-0" aria-hidden="true" />
                  <span className="font-sans text-white/50 text-sm hover:text-white/80 transition-colors">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Col 2 — Contact */}
        <div className="min-w-[200px]">
          <p className="spec-label text-white/25 mb-7">Get In Touch</p>
          <ul className="space-y-6">
            <li>
              <a href={`tel:${SITE_CONFIG.phoneTel}`} className="flex items-start gap-3 group">
                <div
                  className="w-8 h-8 rounded bg-white/4 border border-white/8 flex items-center justify-center
                             flex-shrink-0 group-hover:bg-brand-blue group-hover:border-brand-blue transition-colors mt-0.5"
                >
                  <svg className="w-3.5 h-3.5 text-white/50 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <p className="spec-label text-white/25 mb-1">Phone</p>
                  <p className="font-sans text-white font-medium text-sm group-hover:text-brand-blue-light transition-colors">
                    {SITE_CONFIG.phoneDisplay}
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-start gap-3 group">
                <div
                  className="w-8 h-8 rounded bg-white/4 border border-white/8 flex items-center justify-center
                             flex-shrink-0 group-hover:bg-brand-blue group-hover:border-brand-blue transition-colors mt-0.5"
                >
                  <svg className="w-3.5 h-3.5 text-white/50 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <p className="spec-label text-white/25 mb-1">Email</p>
                  <p className="font-sans text-white font-medium text-sm break-all group-hover:text-brand-blue-light transition-colors">
                    {SITE_CONFIG.email}
                  </p>
                </div>
              </a>
            </li>
            <li>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded bg-white/4 border border-white/8 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <p className="spec-label text-white/25 mb-1">Address</p>
                  <p className="font-sans text-white/70 text-sm leading-relaxed">
                    {SITE_CONFIG.address.street}<br />
                    {SITE_CONFIG.address.city}, {SITE_CONFIG.address.postcode}
                  </p>
                </div>
              </div>
            </li>
          </ul>

          {/* WhatsApp link */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 mt-7 py-2.5 px-4
                       bg-[#25D366]/10 border border-[#25D366]/20 rounded-btn
                       hover:bg-[#25D366]/20 transition-colors"
          >
            <svg className="w-4 h-4 text-[#25D366] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488" />
            </svg>
            <span className="font-sans text-white/70 text-sm font-medium">Message on WhatsApp</span>
          </a>
        </div>

        {/* Col 3 — Hours */}
        <div className="min-w-[180px]">
          <p className="spec-label text-white/25 mb-7">Opening Hours</p>
          <ul className="space-y-4">
            {HOURS.map(({ day, hours, open }) => (
              <li key={day} className="flex items-center justify-between gap-6">
                <span className="spec-label text-white/40">{day}</span>
                <span className={`font-sans text-sm font-medium ${open ? 'text-white' : 'text-white/25'}`}>
                  {hours}
                </span>
              </li>
            ))}
          </ul>

          {/* Free consultation note */}
          <div className="mt-8 p-4 bg-brand-blue/8 border border-brand-blue/15 rounded-card">
            <p className="font-sans text-brand-sky text-xs font-semibold mb-1.5 leading-tight">
              Free Initial Consultation
            </p>
            <p className="font-sans text-white/45 text-xs leading-relaxed">
              Contact us to discuss your project — no obligation, no charge.
            </p>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/6">
        <div className="container-site py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="spec-label text-white/25">
            © {new Date().getFullYear()} BlueSky Construction · {SITE_CONFIG.address.postcode}, London
          </p>
          <p className="spec-label text-white/15">
            {SITE_CONFIG.experience} years of trusted craftsmanship
          </p>
        </div>
      </div>
    </footer>
  )
}
