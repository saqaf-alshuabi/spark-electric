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
    title: 'تأسيس كهرباء',
    description: 'نمدد البيت قبل الدهان. لوحة وأفياش وكل نقطة.',
    highlights: [
      'لوحة مرتّبة',
      'أفياش الغرف',
      'تمديد مخفي',
    ],
    body: 'نأسس مع البناء. تخلّص التشطيب وتشغّل النور، وما نكسّر.',
    gallery: [
      {
        src: '/images/services/networks-breaker-panel.jpg',
        alt: 'لوحة قواطع مرتبة بعد التأسيس',
      },
      {
        src: '/images/services/networks-ceiling-conduit.jpg',
        alt: 'مواسير التمديد في السقف',
      },
      {
        src: '/images/services/networks-laser-outlets.jpg',
        alt: 'أفياش ومفاتيح بعد التأسيس',
      },
      {
        src: '/images/services/networks-corridor-conduits.jpg',
        alt: 'تمديد في ممر البيت',
      },
    ],
  },
  {
    slug: 'lighting',
    icon: 'i-heroicons-light-bulb',
    title: 'إنارة وثريات',
    description: 'نركّب ثريا وسبوت. الغرفة تنور كلها.',
    highlights: [
      'ثريا السقف',
      'سبوتات الغرفة',
      'سقف نظيف',
    ],
    body: 'نركّب الثريا في مكانها ونوزع السبوتات. السقف يطلع نظيف.',
    gallery: [
      {
        src: '/images/services/lighting-crystal-chandelier.jpg',
        alt: 'نجفة كريستال في السقف',
      },
      {
        src: '/images/services/lighting-downlight-grid.jpg',
        alt: 'سبوت موزع على السقف',
      },
      {
        src: '/images/services/lighting-glass-rods.jpg',
        alt: 'إضاءة معلقة بعد التركيب',
      },
      {
        src: '/images/services/lighting-petal-chandelier.jpg',
        alt: 'ثريا مركبة في السقف',
      },
    ],
  },
  {
    slug: 'decorative-led',
    icon: 'i-heroicons-sparkles',
    title: 'ليد مخفي',
    description: 'ليد جوا السلاكة وتحت الخزائن. النور باين، والليد مو باين.',
    highlights: [
      'سلاكة السقف',
      'خزائن المطبخ',
      'طبقات الجبس',
    ],
    body: 'نركّب الليد جوا السلاكة أو تحت الخزانة. السقف يطلع أنظف.',
    gallery: [
      {
        src: '/images/services/led-geometric-ceiling.jpg',
        alt: 'سقف بليد هندسي مخفي',
      },
      {
        src: '/images/services/led-tiered-ceiling.jpg',
        alt: 'إنارة مخفية في سقف طبقات',
      },
      {
        src: '/images/services/led-cross-tracks.jpg',
        alt: 'سلاكات ليد متقاطعة في السقف',
      },
      {
        src: '/images/services/led-kitchen-cabinets.jpg',
        alt: 'ليد تحت خزائن المطبخ',
      },
    ],
  },
  {
    slug: 'intercom',
    icon: 'i-heroicons-video-camera',
    title: 'انتركوم',
    description: 'كاميرا على الباب وشاشة جوا. تشوف مين جاي وتفتح.',
    highlights: [
      'كاميرا برا',
      'شاشة جوا',
      'صوت وصورة',
    ],
    body: 'نركّب الجهاز برا والشاشة جوا. تسولف وتفتح من مكانك.',
    gallery: [
      {
        src: '/images/services/intercom-outdoor-panel.jpg',
        alt: 'وحدة انتركوم على جدار الباب',
      },
      {
        src: '/images/services/intercom-indoor-panel.jpg',
        alt: 'شاشة انتركوم داخل البيت',
      },
      {
        src: '/images/services/intercom-keypad-wiring.jpg',
        alt: 'توصيل انتركوم وقت التركيب',
      },
    ],
  },
  {
    slug: 'air-conditioning',
    icon: 'i-heroicons-home-modern',
    title: 'تأسيس تكييف',
    description: 'نأسس السبليت والمركزي مع البناء. النحاس والدكت جاهزين.',
    highlights: [
      'سبليت ومركزي',
      'نحاس ودكت',
      'تصريف الموية',
    ],
    body: 'نمشي النحاس والدكت وقت التأسيس. الوحدة تركب بعدين من غير تكسير.',
    gallery: [
      {
        src: '/images/services/ac-outdoor-rough-in.jpg',
        alt: 'مواسير المكيف خارجة من الجدار',
      },
      {
        src: '/images/services/ac-copper-lines.jpg',
        alt: 'تمديد نحاس المكيف',
      },
      {
        src: '/images/services/ac-wall-piping.jpg',
        alt: 'مواسير المكيف في الجدار',
      },
      {
        src: '/images/services/ac-ceiling-pipes.jpg',
        alt: 'مواسير المكيف في السقف',
      },
    ],
  },
  {
    slug: 'fault-diagnosis',
    icon: 'i-heroicons-wrench-screwdriver',
    title: 'إصلاح أعطال',
    description: 'نفحص العطل ونقولك السعر، بعدين نصلح.',
    highlights: [
      'انقطاع النور',
      'حرارة الأفياش',
      'فصل القاطع',
    ],
    body: 'نفحص من اللوحة لين النقطة. تعرف السبب والسعر قبل لا نغيّر شي.',
    gallery: [
      {
        src: '/images/services/networks-breaker-panel.jpg',
        alt: 'فحص لوحة الكهرباء',
      },
      {
        src: '/images/services/networks-conduit-panel.jpg',
        alt: 'فحص القواطع والتوصيل',
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
