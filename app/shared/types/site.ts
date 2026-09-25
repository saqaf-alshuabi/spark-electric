/** Locality-level address. A service-area business has no street address. */
export interface BusinessAddress {
  locality: string
  region: string
  /** ISO 3166-1 alpha-2 */
  country: string
}

export interface GeoPoint {
  latitude: number
  longitude: number
}

export interface SiteSettings {
  name: string
  city: string
  tagline: string
  description: string
  logo: string
  /** Saudi mobile national digits, no leading 0 (e.g. 5XXXXXXXX) */
  phone: string
  /** BCP 47 */
  locale: string
  address: BusinessAddress
  /** Centre of the service radius, not a shop location */
  geo: GeoPoint
  serviceRadiusKm: number
  /** Maps / Google Business URL. Omit until the listing exists. */
  googleBusinessUrl?: string
}

export type ContactChannel = 'whatsapp' | 'phone'

export interface NavItem {
  label: string
  to: string
}

export interface ServiceSlide {
  src: string
  alt: string
  caption?: string
}

export interface FaqItem {
  question: string
  answer: string
}

/** Listing card; cover comes from gallery[0]. */
export interface ServiceSummary {
  slug: string
  icon: string
  title: string
  description: string
  image: string
  imageAlt: string
}

export interface ServiceDetail extends ServiceSummary {
  /** Schema.org serviceType + page-title keyword. */
  serviceType: string
  seoDescription: string
  intro: string
  faqs: FaqItem[]
  gallery: ServiceSlide[]
}

export type ServiceDraft = Omit<ServiceDetail, 'image' | 'imageAlt'>

export interface HomeServiceItem {
  icon: string
  title: string
  description: string
  to: string
}

export interface PageSeo {
  title: string
  description?: string
  breadcrumb?: NavItem[]
  /** Overrides OG heading when the page title is too long */
  ogTitle?: string
}
