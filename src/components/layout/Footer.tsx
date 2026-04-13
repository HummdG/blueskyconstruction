import Link from 'next/link'
import { SITE_CONFIG } from '@/data/siteConfig'
import { buildWhatsAppUrl } from '@/lib/utils'

const HOURS = [
  { day: 'Monday', hours: '8am – 6pm', open: true },
  { day: 'Tuesday', hours: '8am – 6pm', open: true },
  { day: 'Wednesday', hours: '8am – 6pm', open: true },
  { day: 'Thursday', hours: '8am – 6pm', open: true },
  { day: 'Friday', hours: '8am – 6pm', open: true },
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
    <footer id="contact" className="bg-brand-navy text-white">
      {/* Main footer grid */}
      <div className="container-site py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Col 1 — Brand */}
        <div>
          <Link href="/" className="inline-flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-md bg-brand-blue flex items-center justify-center flex-shrink-0">
              <span className="text-white font-display font-bold text-base">BS</span>
            </div>
            <span className="text-white font-display font-semibold text-lg leading-tight">
              BlueSky Construction
            </span>
          </Link>
          <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
            Professional building and renovation services across Greater London. 30+ years of expert
            craftsmanship — kitchens, bathrooms, extensions, and more.
          </p>
          {/* Insurance badge */}
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded px-3 py-2">
            <svg className="w-4 h-4 text-brand-blue flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
            <span className="text-white/70 text-xs font-medium">{SITE_CONFIG.insurance}</span>
          </div>

          {/* Services list */}
          <div className="mt-8">
            <p className="text-white/40 text-xs uppercase tracking-widest mb-3 font-medium">Services</p>
            <ul className="grid grid-cols-1 gap-1.5">
              {SERVICES.map((s) => (
                <li key={s} className="text-white/60 text-sm hover:text-white/90 transition-colors">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Col 2 — Contact */}
        <div>
          <p className="text-white/40 text-xs uppercase tracking-widest mb-6 font-medium">Get In Touch</p>
          <ul className="space-y-5">
            <li>
              <a
                href={`tel:${SITE_CONFIG.phoneTel}`}
                className="flex items-start gap-3 group"
              >
                <div className="w-9 h-9 rounded-md bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-blue group-hover:border-brand-blue transition-colors">
                  <svg className="w-4 h-4 text-white/60 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/40 text-xs mb-0.5">Phone</p>
                  <p className="text-white font-medium group-hover:text-brand-blue-light transition-colors">{SITE_CONFIG.phoneDisplay}</p>
                </div>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-start gap-3 group"
              >
                <div className="w-9 h-9 rounded-md bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-blue group-hover:border-brand-blue transition-colors">
                  <svg className="w-4 h-4 text-white/60 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/40 text-xs mb-0.5">Email</p>
                  <p className="text-white font-medium group-hover:text-brand-blue-light transition-colors break-all">{SITE_CONFIG.email}</p>
                </div>
              </a>
            </li>
            <li>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-md bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white/40 text-xs mb-0.5">Address</p>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {SITE_CONFIG.address.street}<br />
                    {SITE_CONFIG.address.city}, {SITE_CONFIG.address.postcode}
                  </p>
                </div>
              </div>
            </li>
            <li>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 py-3 px-4 bg-[#25D366]/10 border border-[#25D366]/20 rounded-btn hover:bg-[#25D366]/20 transition-colors group mt-2"
              >
                <svg className="w-5 h-5 text-[#25D366]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488" />
                </svg>
                <span className="text-white text-sm font-medium">Message on WhatsApp</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Col 3 — Hours */}
        <div>
          <p className="text-white/40 text-xs uppercase tracking-widest mb-6 font-medium">Opening Hours</p>
          <ul className="space-y-2.5">
            {HOURS.map(({ day, hours, open }) => (
              <li key={day} className="flex items-center justify-between">
                <span className="text-white/60 text-sm">{day}</span>
                <span className={`text-sm font-medium ${open ? 'text-white' : 'text-white/30'}`}>
                  {hours}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-8 p-4 bg-brand-blue/10 border border-brand-blue/20 rounded-card">
            <p className="text-brand-blue-light text-sm font-semibold mb-1">Free Initial Consultation</p>
            <p className="text-white/60 text-xs leading-relaxed">
              Contact us to discuss your project requirements — no obligation, no charge.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-site py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} BlueSky Construction · {SITE_CONFIG.address.postcode}, London
          </p>
          <p className="text-white/30 text-xs">
            {SITE_CONFIG.experience} years of trusted craftsmanship across Greater London
          </p>
        </div>
      </div>
    </footer>
  )
}
