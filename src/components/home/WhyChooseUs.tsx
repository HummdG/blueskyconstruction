import { SITE_CONFIG } from '@/data/siteConfig'

const REASONS = [
  {
    number: '01',
    title: 'Quality Guaranteed',
    body: 'High-quality workmanship is at the core of everything we do. Every project is completed to the highest standard — no shortcuts, no compromises.',
    icon: 'M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z',
  },
  {
    number: '02',
    title: 'On Time, Every Time',
    body: 'Completing projects on schedule is non-negotiable. We work tirelessly to deliver within the agreed timeframe — every single time.',
    icon: 'M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z',
  },
  {
    number: '03',
    title: 'Fully Insured',
    body: `We carry ${SITE_CONFIG.insurance} for complete peace of mind on every project, no matter the scale.`,
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
    <section id="about" className="bg-brand-navy blueprint-dots section-padding overflow-hidden">
      <div className="container-site relative z-10">

        {/* ── Header row ── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-16">
          <div>
            <div className="section-accent mb-8">
              <span className="section-accent-line" aria-hidden="true" />
              <span className="section-accent-label">Why BlueSky</span>
            </div>
            <h2
              className="font-display font-bold text-white text-balance"
              style={{ fontSize: 'clamp(2.25rem, 4vw, 3.25rem)', lineHeight: '1.05' }}
            >
              Built on Trust.<br />
              <em className="text-brand-sky font-normal not-italic">Delivered with Pride.</em>
            </h2>
          </div>

          {/* Rocha's quote */}
          <blockquote
            className="max-w-sm lg:max-w-[320px] border-l-2 border-brand-blue/40 pl-5"
            cite="BlueSky Construction"
          >
            <p className="font-sans text-white/45 text-sm leading-relaxed italic">
              &ldquo;I am committed to delivering high-quality workmanship, ensuring that every
              project I undertake is completed to the highest standards.&rdquo;
            </p>
            <footer className="mt-3 flex items-center gap-2">
              <div className="w-px h-3 bg-brand-blue/60" aria-hidden="true" />
              <span className="spec-label text-brand-blue/70">
                Rocha · Founder, BlueSky Construction
              </span>
            </footer>
          </blockquote>
        </div>

        {/* ── 4-column reason cards ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-card overflow-hidden border border-white/8">
          {REASONS.map(({ number, title, body, icon }) => (
            <div
              key={number}
              className="group relative bg-brand-navy hover:bg-brand-navy-light
                         transition-colors duration-300 p-7 flex flex-col gap-5 overflow-hidden"
            >
              {/* Ghosted background number */}
              <span
                className="absolute -top-3 -right-1 font-display font-bold italic
                           text-white/[0.04] select-none pointer-events-none leading-none"
                style={{ fontSize: '6rem' }}
                aria-hidden="true"
              >
                {number}
              </span>

              {/* Icon */}
              <div
                className="relative w-10 h-10 rounded-lg bg-brand-blue/12 border border-brand-blue/20
                           flex items-center justify-center flex-shrink-0
                           group-hover:bg-brand-blue/20 group-hover:border-brand-blue/35
                           transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5 text-brand-blue"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
                </svg>
              </div>

              {/* Text */}
              <div className="relative flex-1 flex flex-col gap-2">
                <div className="flex items-center gap-2.5 mb-0.5">
                  <span className="spec-label text-brand-blue/50">{number}</span>
                  <div className="flex-1 h-px bg-brand-blue/15" aria-hidden="true" />
                </div>
                <h3 className="font-display font-bold text-white text-xl leading-tight">
                  {title}
                </h3>
                <p className="font-sans text-white/45 text-sm leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom spec strip ── */}
        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 justify-center lg:justify-start">
          {[
            `${SITE_CONFIG.experience} years in the industry`,
            `${SITE_CONFIG.insurance}`,
            'Serving Greater London',
          ].map((item) => (
            <span key={item} className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-brand-blue/50 flex-shrink-0" aria-hidden="true" />
              <span className="spec-label text-white/30">{item}</span>
            </span>
          ))}
        </div>

      </div>
    </section>
  )
}
