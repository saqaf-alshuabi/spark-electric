export interface SiteSettings {
  name: string
  city: string
  /** One-line pitch under the hero headline */
  tagline: string
  logo: string
  /** International digits only, no + (e.g. 9665XXXXXXXX) */
  phone: string
}

export type ContactChannel = 'whatsapp' | 'phone'

export interface NavItem {
  label: string
  to: string
  icon?: string
}

export interface ServiceSlide {
  src: string
  alt: string
  caption?: string
}

/** Listing card / index preview (cover derived from gallery[0]) */
export interface ServiceSummary {
  slug: string
  title: string
  description: string
  image: string
  imageAlt: string
}

/** Full service — gallery[0] is the cover image */
export interface ServiceDetail extends ServiceSummary {
  icon: string
  gallery: ServiceSlide[]
}

/** Draft before cover fields are derived */
export type ServiceDraft = Omit<ServiceDetail, 'image' | 'imageAlt'>

export interface HomeServiceItem {
  icon: string
  title: string
  to: string
}

export interface WhyChooseUsItem {
  icon: string
  title: string
  description: string
}
