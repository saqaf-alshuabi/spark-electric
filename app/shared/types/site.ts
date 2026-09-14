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
  /** One-line pitch under the hero headline */
  tagline: string
  /** Default meta description and Schema.org description */
  description: string
  logo: string
  /** Saudi mobile national digits, no leading 0 (e.g. 5XXXXXXXX) */
  phone: string
  /** BCP 47, drives html[lang], og:locale and sitemap hreflang */
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

/** Listing card / index preview (cover derived from gallery[0]) */
export interface ServiceSummary {
  slug: string
  icon: string
  title: string
  description: string
  image: string
  imageAlt: string
}

/** Full service — gallery[0] is the cover image */
export interface ServiceDetail extends ServiceSummary {
  /** Schema.org Service.serviceType, and the keyword the page title is built on */
  serviceType: string
  /** Meta description. Written for the search result, not for the page. */
  seoDescription: string
  /** Body copy above the gallery. Real text is what search engines rank. */
  intro: string
  faqs: FaqItem[]
  gallery: ServiceSlide[]
}

/** Draft before cover fields are derived */
export type ServiceDraft = Omit<ServiceDetail, 'image' | 'imageAlt'>

export interface HomeServiceItem {
  icon: string
  title: string
  description: string
  to: string
}

/** Everything a page needs to describe itself to crawlers and social cards */
export interface PageSeo {
  title: string
  /** Omit to use site.description */
  description?: string
  /** Extra crumbs after Home. Labels only — the path comes from the route. */
  breadcrumb?: NavItem[]
  /** Overrides the OG card heading when the page title is too long */
  ogTitle?: string
}
