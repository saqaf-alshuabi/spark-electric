export interface SiteSettings {
  name: string;
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
