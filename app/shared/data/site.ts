// Relative import: nuxt.config.ts reads this file, and Nuxt aliases aren't
// resolvable there.
import type { SiteSettings } from '../types/site'

export const site = {
  name: 'أبو تيم الكهربائي',
  city: 'مكة',
  tagline: 'تدق، نجي، ونخلّصها',
  description: 'كهربائي في مكة وضواحيها. تأسيس كهرباء، ثريا وسبوت، ليد مخفي، انتركوم، تأسيس تكييف، وكشف أعطال — للبيت والمحل، على مدار الساعة.',
  logo: '/images/logos/logo.png',
  phone: '966576301886',
  locale: 'ar-SA',
  address: {
    locality: 'مكة المكرمة',
    region: 'منطقة مكة المكرمة',
    country: 'SA',
  },
  geo: {
    latitude: 21.3891,
    longitude: 39.8579,
  },
  serviceRadiusKm: 40,
  areasServed: [
    'العزيزية',
    'الشوقية',
    'النسيم',
    'الكعكية',
    'العوالي',
    'الشرائع',
    'الزاهر',
    'الرصيفة',
    'بطحاء قريش',
    'المسفلة',
    'الخالدية',
    'النزهة',
    'الروضة',
    'أم الجود',
    'الجموم',
    'بحرة',
  ],
  // Paste the Maps URL the client sends you after they create the listing.
  // Example: 'https://maps.app.goo.gl/xxxx' or the full business.google.com URL.
  googleBusinessUrl: '',
} satisfies SiteSettings

/** Digits-only numbers can't be dialled or matched against a listing. */
export const formattedPhone = `+${site.phone}`

const ALL_DAYS = [
  'Saturday',
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
] as const

export const openingHours = {
  dayOfWeek: [...ALL_DAYS],
  opens: '00:00',
  closes: '23:59',
}

/** Shared by LocalBusiness and the Organization stub Schema.org emits. */
export const contactPoint = {
  '@type': 'ContactPoint' as const,
  telephone: formattedPhone,
  contactType: 'customer service',
  availableLanguage: ['ar'],
  areaServed: site.address.country,
  url: `https://wa.me/${site.phone}`,
  hoursAvailable: {
    '@type': 'OpeningHoursSpecification' as const,
    ...openingHours,
  },
}
