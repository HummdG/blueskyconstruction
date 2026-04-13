import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // Primary accent — sky blue, vibrant
          blue:       '#0EA5E9',
          'blue-dark':'#0284C7',
          'blue-light':'#BAE6FD',
          'blue-pale': '#F0F9FF',
          sky:        '#38BDF8',   // lighter, for large type on dark

          // Dark backgrounds — deep architectural ink
          navy:       '#060E1C',   // deepest ink
          'navy-mid': '#0C1929',   // dark sections
          'navy-light':'#132236',  // card hover on dark

          // Warm tones
          gold:       '#F59E0B',
          'gold-light':'#FEF3C7',
          cream:      '#F5F3EE',   // warm off-white sections
        },
        surface: {
          dark:       '#060E1C',
          stone:      '#64748B',
          'stone-dark':'#475569',
          gray:       '#6B7280',
          'border-dark':'rgba(255,255,255,0.07)',
          'border-light':'#E2E8F0',
          'gray-light':'#F6F8FB',  // subtle blue-tinted light
          white:      '#ffffff',
        },
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans:    ['var(--font-outfit)', 'system-ui', 'sans-serif'],
        mono:    ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'hero-xl': ['clamp(3.5rem, 7vw, 6rem)', { lineHeight: '0.92', fontWeight: '700' }],
        'hero-lg': ['clamp(2.75rem, 5vw, 4.5rem)', { lineHeight: '0.93', fontWeight: '700' }],
        display:   ['clamp(1.875rem, 3vw, 2.875rem)', { lineHeight: '1.1' }],
        'display-sm':['clamp(1.25rem, 2vw, 1.875rem)', { lineHeight: '1.25' }],
      },
      borderRadius: {
        card:     '4px',
        btn:      '3px',
        'btn-lg': '4px',
      },
      boxShadow: {
        card:       '0 1px 6px rgba(6,14,28,0.1)',
        'card-hover':'0 8px 28px rgba(6,14,28,0.18)',
        elevated:   '0 4px 28px rgba(0,0,0,0.22)',
        'sky-glow': '0 0 0 3px rgba(14,165,233,0.22)',
      },
      backgroundImage: {
        'gradient-sky':   'linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)',
        'gradient-navy':  'linear-gradient(160deg, #060E1C 0%, #0C1929 100%)',
        'gradient-ink':   'linear-gradient(135deg, #060E1C 0%, #0C1929 50%, #132236 100%)',
        'gradient-sky-hero':'linear-gradient(to right, rgba(6,14,28,0.7) 0%, transparent 100%)',
      },
      animation: {
        'hero-reveal': 'heroReveal 0.85s cubic-bezier(0.16,1,0.3,1) both',
        'fade-up':     'fadeUp 0.7s ease both',
        'fade-in':     'fadeIn 0.5s ease both',
        'pulse-soft':  'pulseSoft 2.2s ease-in-out infinite',
        'ping-slow':   'ping 2s cubic-bezier(0,0,0.2,1) infinite',
      },
      keyframes: {
        heroReveal: {
          from: { opacity: '0', transform: 'translateY(22px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.55' },
        },
      },
    },
  },
  plugins: [],
}

export default config
