import type { FeatureBadgeItem, HomeServiceItem, NavItem, ServiceSlide, SocialLink, WhyChooseUsItem } from '../types/site';

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

export const whyChooseUs: WhyChooseUsItem[] = [
  {
    title: 'استجابة سريعة',
    description: 'نصل للطوارئ في أقرب وقت ممكن على مدار الساعة.',
  },
  {
    title: 'تشخيص دقيق',
    description: 'نفحص العطل بوضوح قبل أي إصلاح أو تعديل.',
  },
  {
    title: 'شغل بمعايير سلامة',
    description: 'تأسيس وصيانة بتشطيب مرتب ومعايير عالية.',
  },
  {
    title: 'تسعير واضح',
    description: 'تعرف التكلفة قبل ما نبدأ التنفيذ.',
  },
];

export const homeServices: HomeServiceItem[] = [
  {
    icon: 'i-heroicons-bolt',
    title: 'شبكات وتأسيس',
    to: '/services',
  },
  {
    icon: 'i-heroicons-light-bulb',
    title: 'إنارة وثريات',
    to: '/services',
  },
  {
    icon: 'i-heroicons-sparkles',
    title: 'ليدات ديكورية',
    to: '/services',
  },
  {
    icon: 'i-heroicons-video-camera',
    title: 'انتركوم',
    to: '/services',
  },
  {
    icon: 'i-heroicons-wrench-screwdriver',
    title: 'فحص أعطال',
    to: '/services',
  },
];

export const serviceSlides: ServiceSlide[] = [
  {
    src: '/images/services/electrical-networks-breaker-panel.png',
    alt: 'تأسيس وصيانة لوحة توزيع كهربائية',
    caption: 'تأسيس وتشطيب الشبكات الكهربائية',
  },
  {
    src: '/images/services/lighting-install-chandelier-nocap.png',
    alt: 'تركيب الثريات والنجف',
    caption: 'تركيب الثريات والنجف',
  },
  {
    src: '/images/services/electrical-networks-conduit.png',
    alt: 'تمديد مواسير وقنوات الكهرباء',
    caption: 'تمديد المواسير والقنوات',
  },
  {
    src: '/images/services/intercom-video-intercom.png',
    alt: 'تركيب نظام انتركوم مرئي',
    caption: 'تركيب أنظمة الانتركوم',
  },
  {
    src: '/images/services/electrical-networks-switches.png',
    alt: 'تركيب المفاتيح والأفياش',
    caption: 'تركيب المفاتيح والأفياش',
  },
  {
    src: '/images/services/decorative-led-ceiling-corner.png',
    alt: 'تركيب ليدات ديكورية في السقف',
    caption: 'تركيب الليدات الديكورية',
  },
  {
    src: '/images/services/electrical-networks-cable-wiring.png',
    alt: 'تمديد وربط الكابلات الكهربائية',
    caption: 'تمديد وربط الكابلات',
  },
  {
    src: '/images/services/lighting-install-spotlights.png',
    alt: 'تركيب الكشافات والسبوت لايت',
    caption: 'تركيب الكشافات والسبوت',
  },
  {
    src: '/images/services/electrical-networks-multimeter.png',
    alt: 'فحص وتشخيص الأعطال الكهربائية',
    caption: 'فحص وتشخيص الأعطال',
  },
];
