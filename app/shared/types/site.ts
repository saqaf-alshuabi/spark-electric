export interface SiteSettings {
  name: string
  city: string
  copyright: string
  logo: string
  /** International digits only, no + (e.g. 9665XXXXXXXX) */
  phone: string
}

export interface NavItem {
  label: string
  to: string
  icon?: string
}

export interface SocialLink {
  'label'?: string
  'to': string
  'icon': string
  'target'?: string
  'aria-label'?: string
}

export interface FeatureBadgeItem {
  icon: string
  title: string
  iconClass?: string
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
  highlights: string[]
  image: string
  imageAlt: string
}

/** Full service — gallery[0] is the cover image */
export interface ServiceDetail extends ServiceSummary {
  icon: string
  body: string
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
  title: string
  description: string
}

export interface ProcessStep {
  title: string
  description: string
  icon?: string
}
