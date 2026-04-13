import { SITE_CONFIG } from '@/data/siteConfig'

const REASONS = [
  {
    number: '01',
    title: 'Quality Guaranteed',
    body: 'High-quality workmanship is at the core of everything we do. Every project is completed to the highest standards — no shortcuts, no compromises.',
    icon: 'M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z',
  },
  {
    number: '02',
    title: 'On Time, Every Time',
    body: 'We understand that completing projects on schedule is crucial. We work tirelessly to deliver within the agreed timeframe — every single time.',
    icon: 'M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
  },
  {
    number: '03',
    title: 'Fully Insured',
    body: `We carry full ${SITE_CONFIG.insurance} for complete peace of mind on every project, no matter the size.`,
    icon: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z',
  },
  {
    number: '04',
    title: '30+ Years of Craft',
    body: 'Trained through volunteer construction work across Brazil, Rocha brings decades of hands-on expertise to every London home he touches.',
    icon: 'M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z',
  },
]

export default function WhyChooseUs() {
  return (
    <section id="about" className="bg-brand-navy section-padding noise-overlay">
      <div className="container-site relative z-10">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-0.5 bg-brand-blue" aria-hidden="true" />
              <span className="text-brand-blue text-xs uppercase tracking-[0.15em] font-semibold">Why BlueSky</span>
            </div>
            <h2
              className="font-display font-bold text-white text-balance"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
            >
              Built on Trust.<br />
              <em className="text-brand-blue not-italic">Delivered with Pride.</em>
            </h2>
          </div>
          <blockquote className="max-w-sm lg:max-w-xs">
            <p className="text-white/50 text-sm leading-relaxed italic">
              &ldquo;I am committed to delivering high-quality workmanship, ensuring that every project I
              undertake is completed to the highest standards.&rdquo;
            </p>
            <footer className="mt-3 text-brand-blue text-xs font-semibold tracking-wide">
              — Rocha, Founder · BlueSky Construction
            </footer>
          </blockquote>
        </div>

        {/* 4-column grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {REASONS.map(({ number, title, body, icon }) => (
            <div
              key={number}
              className="bg-white/5 border border-white/8 rounded-xl p-6 hover:bg-white/8 hover:border-brand-blue/30 transition-colors group"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-11 h-11 rounded-lg bg-brand-blue/15 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-blue/25 transition-colors">
                  <svg className="w-5 h-5 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
                  </svg>
                </div>
                <span className="font-display italic text-brand-blue/30 text-2xl">{number}</span>
              </div>
              <h3 className="font-display font-bold text-white text-lg mb-2.5 leading-tight">{title}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
