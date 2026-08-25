import type {
  HomeServiceItem,
  ServiceDetail,
  ServiceDraft,
  ServiceSummary,
} from '../../types/site'

function withCover(draft: ServiceDraft): ServiceDetail {
  const cover = draft.gallery[0]
  if (!cover) {
    throw new Error(`Service "${draft.slug}" needs at least one gallery image`)
  }

  return {
    ...draft,
    image: cover.src,
    imageAlt: cover.alt,
  }
}

const serviceDrafts: ServiceDraft[] = [
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
    gallery: [
      {
        src: '/images/services/networks-breaker-panel.jpg',
        alt: 'تأسيس وصيانة لوحة توزيع كهربائية',
      },
      {
        src: '/images/services/networks-ceiling-conduit.jpg',
        alt: 'تمديد مواسير وقنوات الكهرباء',
      },
      {
        src: '/images/services/networks-laser-outlets.jpg',
        alt: 'تأسيس نقاط المفاتيح والأفياش',
      },
      {
        src: '/images/services/networks-corridor-conduits.jpg',
        alt: 'تمديد وربط الكابلات الكهربائية',
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
    gallery: [
      {
        src: '/images/services/lighting-crystal-chandelier.jpg',
        alt: 'تركيب الثريات والنجف',
      },
      {
        src: '/images/services/lighting-downlight-grid.jpg',
        alt: 'تركيب الكشافات والسبوت لايت',
      },
      {
        src: '/images/services/lighting-glass-rods.jpg',
        alt: 'تركيب إضاءة معلقة',
      },
      {
        src: '/images/services/lighting-petal-chandelier.jpg',
        alt: 'تركيب نجفة بإضاءة كاملة',
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
    gallery: [
      {
        src: '/images/services/led-geometric-ceiling.jpg',
        alt: 'تركيب ليدات ديكورية وإنارة مخفية',
      },
      {
        src: '/images/services/led-tiered-ceiling.jpg',
        alt: 'تركيب إنارة مخفية في السقف',
      },
      {
        src: '/images/services/led-v-ceiling.jpg',
        alt: 'تركيب ليدات هندسية في السقف',
      },
      {
        src: '/images/services/led-kitchen-cabinets.jpg',
        alt: 'تركيب إنارة مخفية للمطابخ والخزائن',
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
    gallery: [
      {
        src: '/images/services/intercom-outdoor-panel.jpg',
        alt: 'تركيب نظام انتركوم مرئي',
      },
      {
        src: '/images/services/intercom-indoor-panel.jpg',
        alt: 'وحدة انتركوم جدارية',
      },
      {
        src: '/images/services/intercom-keypad-wiring.jpg',
        alt: 'توصيل كابلات الانتركوم',
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
    gallery: [
      {
        src: '/images/services/networks-breaker-panel.jpg',
        alt: 'فحص وتشخيص أعطال الكهرباء',
      },
      {
        src: '/images/services/networks-conduit-panel.jpg',
        alt: 'فحص لوحة التوزيع والقواطع',
      },
    ],
  },
]

export const services: ServiceDetail[] = serviceDrafts.map(withCover)

export const serviceSummaries: ServiceSummary[] = services.map(
  ({ slug, title, description, highlights, image, imageAlt }) => ({
    slug,
    title,
    description,
    highlights,
    image,
    imageAlt,
  }),
)

export const homeServices: HomeServiceItem[] = services.map(({ icon, title, slug }) => ({
  icon,
  title,
  to: `/services/${slug}`,
}))

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return services.find(service => service.slug === slug)
}
