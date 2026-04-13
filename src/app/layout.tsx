import type { Metadata } from 'next'
import { Cormorant_Garamond, Outfit, DM_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppWidget from '@/components/layout/WhatsAppWidget'
import { SITE_CONFIG } from '@/data/siteConfig'
import { buildLocalBusinessSchema, buildWebsiteSchema } from '@/lib/jsonld'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['300', '400', '500'],
})

export const metadata: Metadata = {
  title: {
    template: '%s | BlueSky Construction',
    default: 'BlueSky Construction | Home Renovation & Building Services London',
  },
  description:
    'Professional kitchen, bathroom, and home renovation services in London. 30+ years experience. £2M public liability insurance. Free no-obligation quote.',
  metadataBase: new URL(SITE_CONFIG.url),
  keywords: [
    'building contractor London',
    'kitchen installation London',
    'bathroom installation London',
    'home renovation London',
    'property refurbishment London',
    'carpentry London',
    'extension builder London',
    'BlueSky Construction',
  ],
  openGraph: {
    title: 'BlueSky Construction | Home Improvement Experts',
    description:
      'Professional kitchen, bathroom, and home renovation services. Get a free quote today.',
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BlueSky Construction — Professional Home Renovation London',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BlueSky Construction | Home Improvement Experts',
    description:
      'Professional kitchen, bathroom, and home renovation services in London. Free quote.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.svg',
  },
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  robots: {
    index: true,
    follow: true,
  },
}

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${cormorant.variable} ${outfit.variable} ${dmMono.variable}`}>
      <head>
        <JsonLd data={buildWebsiteSchema()} />
        <JsonLd data={buildLocalBusinessSchema()} />
      </head>
      <body className="min-h-screen flex flex-col font-sans text-brand-navy bg-white antialiased">
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  )
}
