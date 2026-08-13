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
  caption?: string
}

//  Service summary for the services index page
export interface ServiceSummary {
  slug: string
  title: string
  description: string
  highlights: string[]
  image: string
  imageAlt: string
}

//  Service detail for the service detail page
export interface ServiceDetail extends ServiceSummary {
  icon: string
  body: string
  gallery: ServiceSlide[]
}

// For the home page services section
export interface HomeServiceItem {
  icon: string
  title: string
  to: string
}

export interface WhyChooseUsItem {
  title: string
  description: string
}
