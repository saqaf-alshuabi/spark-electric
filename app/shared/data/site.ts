import type { FeatureBadgeItem, NavItem, SocialLink } from '../types/site';

export const navItems: NavItem[] = [
  {
    label: 'الرئيسية',
    to: '/',
  },
  {
    label: 'خدماتنا',
    to: '/services',
  },

];
export const socialLinks: SocialLink[] = [
  {
    'aria-label': 'تابعنا على سناب شات',
    'to': 'https://snapchat.com/add/yourusername',
    'icon': 'i-simple-icons-snapchat',
    'target': '_blank',
  },
  {
    'aria-label': 'تابعنا على انستقرام',
    'to': 'https://www.instagram.com/yourusername',
    'icon': 'i-simple-icons-instagram',
    'target': '_blank',
  },
  {
    'aria-label': 'تابعنا على تيك توك',
    'to': 'https://www.tiktok.com/@yourusername',
    'icon': 'i-simple-icons-tiktok',
    'target': '_blank',
  },

];

export const serviceBadges: FeatureBadgeItem[] = [
  {
    icon: 'i-heroicons-clock',
    title: 'استجابة طوارئ على مدار الساعة',
  },
  {
    icon: 'i-heroicons-exclamation-triangle',
    title: 'تشخيص دقيق للأعطال والالتماسات',
  },
  {
    icon: 'i-heroicons-bolt',
    title: 'تأسيس وصيانة كهربائية بمعايير عالية',
  },
  {
    icon: 'i-heroicons-currency-dollar',
    title: 'تسعير واضح قبل بدء التنفيذ',
  },
];
