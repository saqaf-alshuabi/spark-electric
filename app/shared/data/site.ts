// Relative import: nuxt.config.ts reads this file, and Nuxt aliases aren't
// resolvable there.
import type { SiteSettings } from '../types/site'

export const site: SiteSettings = {
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
}

const SAUDI_CALLING_CODE = '966'

/** 0576 301 886 */
export const displayPhone = `0${site.phone.slice(0, 3)} ${site.phone.slice(3, 6)} ${site.phone.slice(6)}`

/** +966576301886 — Schema.org and tel: links */
export const formattedPhone = `+${SAUDI_CALLING_CODE}${site.phone}`

export const whatsappUrl = `https://wa.me/${SAUDI_CALLING_CODE}${site.phone}`
