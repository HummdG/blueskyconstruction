export const SITE_CONFIG = {
  name: 'BlueSky Construction',
  tagline: 'Professional Home Renovation & Building Services in London',
  url: 'https://www.blueskyconstruction.co.uk',
  phone: '07863205447',
  phoneDisplay: '078 6320 5447',
  phoneTel: '+447863205447',
  whatsapp: '447863205447',
  whatsappDefaultMessage:
    "Hi BlueSky Construction, I'd like to get a free quote. Please get back to me when you can.",
  email: 'rochabluesky@gmail.com',
  address: {
    street: '171 Stephendale Road',
    city: 'London',
    postcode: 'SW6 2PR',
    area: 'Fulham',
    region: 'Greater London',
  },
  hours: {
    monFri: '8am–6pm',
    saturday: '8am–4pm',
    sunday: 'Closed',
    display: 'Mon–Fri: 8am–6pm · Sat: 8am–4pm',
  },
  geo: {
    latitude: 51.4716,
    longitude: -0.196,
  },
  insurance: '£2,000,000 Public Liability',
  experience: '30+',
} as const

export type SiteConfig = typeof SITE_CONFIG
