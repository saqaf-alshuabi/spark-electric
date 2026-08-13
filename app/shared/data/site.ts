import type { FeatureBadgeItem, HomeServiceItem, NavItem, ServiceItem, ServiceSlide, SocialLink, WhyChooseUsItem } from '../types/site'

export const navItems: NavItem[] = [
  {
    label: 'الرئيسية',
    to: '/',
  },
  {
    label: 'خدماتنا',
    to: '/services',
  },

]
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

]

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
]

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
]

export const services: ServiceItem[] = [
  {
    slug: 'electrical-networks',
    icon: 'i-heroicons-bolt',
    title: 'شبكات وتأسيس',
    description: 'تأسيس وتشطيب وصيانة الشبكات الكهربائية بتشطيب مرتب.',
    highlights: [
      'لوحات توزيع وقواطع',
      'تمديدات ومواسير',
      'مفاتيح وأفياش',
    ],
    body: 'نؤسّس ونشطب الشبكات الكهربائية: لوحات التوزيع، التمديدات، المواسير، والمفاتيح والأفياش. شغل بمعايير سلامة واضحة وتسعير مفهوم قبل التنفيذ.',
    image: '/images/services/electrical-networks-breaker-panel.png',
    imageAlt: 'تأسيس وصيانة لوحة توزيع كهربائية',
  },
  {
    slug: 'lighting',
    icon: 'i-heroicons-light-bulb',
    title: 'إنارة وثريات',
    description: 'تركيب الثريات والنجف والكشافات بثبات وتشطيب نظيف.',
    highlights: [
      'ثريات ونجف',
      'سبوت وكشافات',
      'إضاءة معلقة',
    ],
    body: 'نركب الثريات والنجف والسبوت والكشافات بتثبيت آمن وتوزيع إضاءة صحيح، مع تشطيب مرتب من غير فوضى أسلاك أو عيوب ظاهرة.',
    image: '/images/services/lighting-install-chandelier-nocap.png',
    imageAlt: 'تركيب الثريات والنجف',
  },
  {
    slug: 'decorative-led',
    icon: 'i-heroicons-sparkles',
    title: 'ليدات ديكورية',
    description: 'تركيب ليدات وإنارة مخفية بتشطيب عصري وإضاءة متوازنة.',
    highlights: [
      'إنارة مخفية',
      'ليدات أسقف',
      'إضاءة ديكور',
    ],
    body: 'نركب الليدات الديكورية والإنارة المخفية بتشطيب مرتب وإضاءة متوازنة تضيف لمسة حديثة للمكان بدون تعقيد.',
    image: '/images/services/decorative-led-ceiling-corner.png',
    imageAlt: 'تركيب ليدات ديكورية وإنارة مخفية',
  },
  {
    slug: 'intercom',
    icon: 'i-heroicons-video-camera',
    title: 'انتركوم',
    description: 'تركيب انتركوم مرئي ووحدات جدارية وسماعات سقف.',
    highlights: [
      'انتركوم مرئي',
      'وحدات جدارية',
      'سماعات سقف',
    ],
    body: 'نركب ونضبط أنظمة الانتركوم المرئي والوحدات الجدارية وسماعات السقف، مع توصيل وتشغيل واضح وسهل للاستخدام اليومي.',
    image: '/images/services/intercom-video-intercom.png',
    imageAlt: 'تركيب نظام انتركوم مرئي',
  },
  {
    slug: 'fault-diagnosis',
    icon: 'i-heroicons-wrench-screwdriver',
    title: 'فحص أعطال',
    description: 'تشخيص الأعطال والالتماسات بدقة قبل أي إصلاح.',
    highlights: [
      'كشف التماسات',
      'فحص لوحات',
      'طوارئ سريعة',
    ],
    body: 'نفحص أعطال الكهرباء ونشخّص السبب قبل الإصلاح: انقطاع، التماسات، سخونة أفياش، ومشاكل اللوحات — مع استجابة سريعة للطوارئ وتسعير واضح.',
    image: '/images/services/electrical-networks-multimeter.png',
    imageAlt: 'فحص وتشخيص أعطال الكهرباء',
  },
]

export const homeServices: HomeServiceItem[] = services.map(({ icon, title, slug }) => ({
  icon,
  title,
  to: `/services/${slug}`,
}))

export function getServiceBySlug(slug: string) {
  return services.find(service => service.slug === slug)
}

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
]
