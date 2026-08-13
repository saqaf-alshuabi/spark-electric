export interface SiteSettings {
  name: string
  fullName: string
  tagline: string
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
  caption: string
}

export interface ServiceItem {
  slug: string
  icon: string
  title: string
  description: string
  /** Short points shown on the services listing */
  highlights: string[]
  /** Longer copy for the service detail page (SEO) */
  body: string
  image: string
  imageAlt: string
}

export interface HomeServiceItem {
  icon: string
  title: string
  to: string
}

export interface WhyChooseUsItem {
  title: string
  description: string
}
