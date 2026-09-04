// Relative import: nuxt.config.ts reads this file, and Nuxt aliases aren't
// resolvable there.
import type { SiteSettings } from '../types/site'

export const site = {
  name: 'أبو تيم الكهربائي',
  city: 'مكة',
  tagline: 'تدق، نجي، ونخلّصها',
  description: 'كهربائي في مكة وضواحيها. تأسيس كهرباء، ثريا وسبوت، ليد مخفي، انتركوم، تأسيس تكييف، وكشف أعطال — للبيت والمحل، على مدار الساعة.',
  logo: '/images/logos/logo.png',
  phone: '576301886',
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

const SAUDI_CALLING_CODE = '966'

/** Shown on the site: 0576 301 886 */
export const displayPhone = `0${site.phone.slice(0, 3)} ${site.phone.slice(3, 6)} ${site.phone.slice(6)}`

/** E.164 for Schema.org and tel: links */
export const formattedPhone = `+${SAUDI_CALLING_CODE}${site.phone}`

/** Official public URL. sameAs until the Google Business listing exists. */
export const whatsappUrl = `https://wa.me/${SAUDI_CALLING_CODE}${site.phone}`

export const sameAs = [
  whatsappUrl,
  ...(site.googleBusinessUrl ? [site.googleBusinessUrl] : []),
]

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
  opens: '00:00:00' as const,
  closes: '23:59:00' as const,
}

/** Shared by LocalBusiness and the Organization stub Schema.org emits. */
export const contactPoint = {
  '@type': 'ContactPoint' as const,
  'telephone': formattedPhone,
  'contactType': 'customer service',
  'availableLanguage': ['ar'],
  'areaServed': site.address.country,
  'url': whatsappUrl,
  'hoursAvailable': {
    '@type': 'OpeningHoursSpecification' as const,
    ...openingHours,
  },
}
