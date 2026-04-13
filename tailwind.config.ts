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
          blue: '#0284c7',
          'blue-dark': '#0369a1',
          'blue-light': '#e0f2fe',
          'blue-pale': '#f0f9ff',
          navy: '#0f172a',
          'navy-mid': '#1e293b',
          'navy-light': '#334155',
          gold: '#c4922a',
          'gold-light': '#fdf3e3',
        },
        surface: {
          dark: '#1d1c18',
          stone: '#64748b',
          'stone-dark': '#475569',
          gray: '#6b7280',
          'gray-dark': '#374151',
          'border-dark': '#1e3a5f',
          'border-light': '#e2e8f0',
          'gray-border': '#e2e8f0',
          'gray-light': '#f8fafc',
          white: '#ffffff',
        },
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero-xl': ['clamp(3rem, 7vw, 6rem)', { lineHeight: '0.95', fontWeight: '700' }],
        'hero-lg': ['clamp(2.25rem, 5vw, 4.25rem)', { lineHeight: '1.0', fontWeight: '700' }],
        display: ['clamp(1.75rem, 3vw, 2.75rem)', { lineHeight: '1.15' }],
        'display-sm': ['clamp(1.25rem, 2vw, 1.875rem)', { lineHeight: '1.25' }],
      },
      borderRadius: {
        card: '6px',
        btn: '4px',
        'btn-lg': '6px',
      },
      boxShadow: {
        card: '0 1px 8px rgba(15, 23, 42, 0.08)',
        'card-hover': '0 6px 24px rgba(15, 23, 42, 0.14)',
        elevated: '0 4px 24px rgba(0, 0, 0, 0.16)',
        'blue-glow': '0 0 0 3px rgba(2, 132, 199, 0.25)',
      },
      backgroundImage: {
        'gradient-blue': 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
        'gradient-navy': 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        'gradient-hero-dark': 'linear-gradient(to bottom, rgba(15,23,42,0.2) 0%, rgba(15,23,42,0.75) 60%, #0f172a 100%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'fade-up-slow': 'fadeUp 0.9s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
        'slide-right': 'slideRight 0.6s ease forwards',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideRight: {
          from: { opacity: '0', transform: 'translateX(-20px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.65' },
        },
      },
    },
  },
  plugins: [],
}

export default config
