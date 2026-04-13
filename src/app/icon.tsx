import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0f172a',
          borderRadius: '6px',
        }}
      >
        <div
          style={{
            width: '28px',
            height: '28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0284c7',
            borderRadius: '5px',
            color: 'white',
            fontSize: '14px',
            fontWeight: 700,
            letterSpacing: '-0.5px',
          }}
        >
          BS
        </div>
      </div>
    ),
    size
  )
}
