import type { FeatureBadgeItem, NavItem, ServiceSlide, SocialLink } from '../types/site';

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

export const electricalNetworkSlides: ServiceSlide[] = [
  {
    src: '/images/services/intercom-cable-connect.png',
    alt: 'تأسيس وصيانة لوحات التوزيع الكهربائية',
    caption: 'تأسيس وتشطيب وصيانة الشبكات الكهربائية',
  },
  {
    src: '/images/services/electrical-networks-cable-wiring.png',
    alt: 'تمديد وربط الكابلات الكهربائية',
    caption: 'تمديد وربط الكابلات باحترافية',
  },
  {
    src: '/images/services/electrical-networks-conduit.png',
    alt: 'تمديد مواسير وقنوات الكهرباء',
    caption: 'تأسيس مواسير وقنوات الكهرباء',
  },
  {
    src: '/images/services/electrical-networks-switches.png',
    alt: 'تركيب المفاتيح والأفياش',
    caption: 'تركيب المفاتيح والأفياش بدقة',
  },
  {
    src: '/images/services/electrical-networks-multimeter.png',
    alt: 'فحص وتشخيص الأعطال الكهربائية',
    caption: 'فحص وتشخيص الأعطال بدقة',
  },
];
