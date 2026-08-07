export interface SiteSettings {
  name: string;
  fullName: string;
  tagline: string;
  city: string;
  copyright: string;
  logo: string;
}
export interface NavItem {
  label: string;
  to: string;
  icon?: string;
}
export interface SocialLink {
  'label'?: string;
  'to': string;
  'icon': string;
  'target'?: string;
  'aria-label'?: string;
}

export interface FeatureBadgeItem {
  icon: string;
  title: string;
  iconClass?: string;
}

export interface ServiceSlide {
  src: string;
  alt: string;
  caption: string;
}

export interface HomeServiceItem {
  icon: string;
  title: string;
  to: string;
}

export interface WhyChooseUsItem {
  icon: string;
  title: string;
  description: string;
}
