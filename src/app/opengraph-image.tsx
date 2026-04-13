import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'BlueSky Construction — Professional Home Renovation London'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const NAVY     = '#060E1C'
const NAVY_MID = '#0C1929'
const BLUE     = '#0EA5E9'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: NAVY,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 80px',
          position: 'relative',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        {/* Top-right radial glow */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: 480,
            height: 480,
            background: `radial-gradient(circle at 100% 0%, rgba(14,165,233,0.12) 0%, transparent 65%)`,
            display: 'flex',
          }}
        />

        {/* Decorative concentric rings — right side */}
        <div
          style={{
            position: 'absolute',
            right: 100,
            top: '50%',
            marginTop: -130,
            width: 260,
            height: 260,
            borderRadius: '50%',
            border: '1px solid rgba(14,165,233,0.18)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              width: 180,
              height: 180,
              borderRadius: '50%',
              border: '1px solid rgba(14,165,233,0.14)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                width: 96,
                height: 96,
                borderRadius: '50%',
                background: 'rgba(14,165,233,0.10)',
                border: '1px solid rgba(14,165,233,0.28)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: BLUE,
                fontSize: 26,
                fontWeight: 700,
                letterSpacing: '0.05em',
              }}
            >
              BSC
            </div>
          </div>
        </div>

        {/* Main content */}
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'center', maxWidth: 720 }}>

          {/* Accent line */}
          <div
            style={{
              width: 44,
              height: 3,
              background: BLUE,
              borderRadius: 2,
              marginBottom: 28,
              display: 'flex',
            }}
          />

          {/* Company name — two-weight split */}
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 10 }}>
            <span
              style={{
                fontSize: 76,
                fontWeight: 700,
                color: '#ffffff',
                lineHeight: 1,
                letterSpacing: '-1.5px',
                display: 'flex',
              }}
            >
              BlueSky
            </span>
            <span
              style={{
                fontSize: 76,
                fontWeight: 300,
                color: 'rgba(255,255,255,0.85)',
                lineHeight: 1,
                letterSpacing: '-1.5px',
                display: 'flex',
              }}
            >
              Construction
            </span>
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: 24,
              fontWeight: 400,
              color: 'rgba(255,255,255,0.50)',
              lineHeight: 1.5,
              display: 'flex',
              marginBottom: 44,
            }}
          >
            Professional Home Renovation &amp; Building Services · London
          </div>

          {/* Credential pills */}
          <div style={{ display: 'flex', gap: 10 }}>
            {['30+ Years Experience', '£2M Insured', 'Free Quote'].map((label) => (
              <div
                key={label}
                style={{
                  display: 'flex',
                  padding: '9px 18px',
                  border: '1px solid rgba(255,255,255,0.10)',
                  borderRadius: 4,
                  background: NAVY_MID,
                  color: 'rgba(255,255,255,0.45)',
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: '0.10em',
                  textTransform: 'uppercase',
                }}
              >
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom blue bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            background: BLUE,
            display: 'flex',
          }}
        />
      </div>
    ),
    { ...size }
  )
}
