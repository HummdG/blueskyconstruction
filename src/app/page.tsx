import type { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import TrustBar from '@/components/home/TrustBar'
import Services from '@/components/home/Services'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import Gallery from '@/components/home/Gallery'
import Testimonials from '@/components/home/Testimonials'
import HomeCTA from '@/components/home/HomeCTA'
import { SITE_CONFIG } from '@/data/siteConfig'

export const metadata: Metadata = {
  title: 'BlueSky Construction | Home Renovation & Building Services London',
  description:
    'Professional kitchen, bathroom, and home renovation services in London. 30+ years experience. £2M public liability insurance. Free no-obligation quote.',
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  openGraph: {
    title: 'BlueSky Construction | Home Improvement Experts',
    description:
      'Professional kitchen, bathroom, and home renovation services. Get a free quote today.',
    url: SITE_CONFIG.url,
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <HomeCTA />
    </>
  )
}
