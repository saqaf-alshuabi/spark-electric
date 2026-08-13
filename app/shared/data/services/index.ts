import type { ServiceDetail, HomeServiceItem, ServiceSummary } from '../../types/site'

export const services: ServiceDetail[] = [
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
    gallery: [
      {
        src: '/images/services/electrical-networks-breaker-panel.png',
        alt: 'تأسيس وصيانة لوحة توزيع كهربائية',
      },
      {
        src: '/images/services/electrical-networks-breaker-panel.png',
        alt: 'تأسيس وصيانة لوحة توزيع كهربائية',
      },
      {
        src: '/images/services/electrical-networks-breaker-panel.png',
        alt: 'تأسيس وصيانة لوحة توزيع كهربائية',
      },
    ],
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
    gallery: [
      {
        src: '/images/services/electrical-networks-breaker-panel.png',
        alt: 'تأسيس وصيانة لوحة توزيع كهربائية',
      },
      {
        src: '/images/services/electrical-networks-breaker-panel.png',
        alt: 'تأسيس وصيانة لوحة توزيع كهربائية',
      },
      {
        src: '/images/services/electrical-networks-breaker-panel.png',
        alt: 'تأسيس وصيانة لوحة توزيع كهربائية',
      },
    ],
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
    gallery: [
      {
        src: '/images/services/electrical-networks-breaker-panel.png',
        alt: 'تأسيس وصيانة لوحة توزيع كهربائية',
      },
      {
        src: '/images/services/electrical-networks-breaker-panel.png',
        alt: 'تأسيس وصيانة لوحة توزيع كهربائية',
      },
      {
        src: '/images/services/electrical-networks-breaker-panel.png',
        alt: 'تأسيس وصيانة لوحة توزيع كهربائية',
      },
    ],
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
    gallery: [
      {
        src: '/images/services/electrical-networks-breaker-panel.png',
        alt: 'تأسيس وصيانة لوحة توزيع كهربائية',
      },
      {
        src: '/images/services/electrical-networks-breaker-panel.png',
        alt: 'تأسيس وصيانة لوحة توزيع كهربائية',
      },
      {
        src: '/images/services/electrical-networks-breaker-panel.png',
        alt: 'تأسيس وصيانة لوحة توزيع كهربائية',
      },
    ],
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
    gallery: [
      {
        src: '/images/services/electrical-networks-breaker-panel.png',
        alt: 'تأسيس وصيانة لوحة توزيع كهربائية',
      },
      {
        src: '/images/services/electrical-networks-breaker-panel.png',
        alt: 'تأسيس وصيانة لوحة توزيع كهربائية',
      },
      {
        src: '/images/services/electrical-networks-breaker-panel.png',
        alt: 'تأسيس وصيانة لوحة توزيع كهربائية',
      },
    ],
  },
]

export const homeServices: HomeServiceItem[] = services.map(({ icon, title, slug }) => ({
  icon,
  title,
  to: `/services/${slug}`,
}))

export const serviceSummaries: ServiceSummary[] = services.map(({ body, gallery, icon, ...rest }) => rest)

export function getServiceBySlug(slug: string) {
  return services.find(service => service.slug === slug)
}
