const SPECS = [
  { stat: '30+', unit: 'Years',        detail: 'In the industry' },
  { stat: '£2M', unit: 'Insured',      detail: 'Public liability' },
  { stat: '100%', unit: 'Guaranteed',  detail: 'Work quality assured' },
  { stat: 'Free', unit: 'Consultation', detail: 'No obligation, always' },
]

export default function TrustBar() {
  return (
    <section
      className="bg-white border-b border-surface-border-light"
      aria-label="Key credentials"
    >
      <div className="container-site">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-surface-border-light">
          {SPECS.map(({ stat, unit, detail }) => (
            <div
              key={stat}
              className="flex flex-col items-center justify-center text-center
                         py-8 px-4 lg:py-10 lg:px-6
                         hover:bg-surface-gray-light transition-colors duration-300"
            >
              {/* Large Cormorant stat */}
              <span
                className="font-display italic font-semibold text-brand-blue leading-none mb-1"
                style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)' }}
              >
                {stat}
              </span>
              {/* Unit label */}
              <span className="font-sans font-semibold text-brand-navy text-sm tracking-wide mb-1">
                {unit}
              </span>
              {/* Detail */}
              <span className="spec-label text-surface-stone/60">
                {detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
