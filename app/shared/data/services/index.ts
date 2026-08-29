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
    description: 'التمديد مع البناء، قبل الدهان',
    highlights: [
      'لوحة كاملة',
      'كل نقطة جاهزة',
      'بدون تكسير بعدين',
    ],
    body: 'نمدد اللوحة والأفياش مع البناء. يخلص التشطيب وتشغّل النور.',
    gallery: [
      {
        src: '/images/services/networks-breaker-panel.jpg',
        alt: 'لوحة قواطع بعد التأسيس',
      },
      {
        src: '/images/services/networks-ceiling-conduit.jpg',
        alt: 'مواسير التمديد في السقف',
      },
      {
        src: '/images/services/networks-laser-outlets.jpg',
        alt: 'علب أفياش على الطوب، مع ليزر التسوية',
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
    title: 'ثريا وسبوت',
    description: 'ثريا في مكانها، وسبوت على السقف',
    highlights: [
      'ثريا ثابتة',
      'سبوت موزّع',
      'الغرفة تنور',
    ],
    body: 'مكان الثريا والسبوت يغيّر شكل الغرفة. نركّبها ونوزع النور على السقف.',
    gallery: [
      {
        src: '/images/services/lighting-crystal-chandelier.jpg',
        alt: 'ثريا كريستال في السقف',
      },
      {
        src: '/images/services/lighting-spot-grid.jpg',
        alt: 'سبوت موزّع على السقف',
      },
      {
        src: '/images/services/lighting-hanging-glass.jpg',
        alt: 'ثريا زجاج معلّقة من السقف',
      },
      {
        src: '/images/services/lighting-glass-cloud.jpg',
        alt: 'ثريا ذهبية بقطع زجاج',
      },
    ],
  },
  {
    slug: 'decorative-led',
    icon: 'i-heroicons-sparkles',
    title: 'ليد مخفي',
    description: 'الليد جوا السلاكة، النور باين وهو لا',
    highlights: [
      'سلاكة السقف',
      'تحت الخزائن',
      'سقف طبقات',
    ],
    body: 'نركّب الليد جوا الجبس، في السلاكة أو تحت الخزانة. الخط ينور، والشريط ما يبان.',
    gallery: [
      {
        src: '/images/services/led-geometric-ceiling.jpg',
        alt: 'سقف بليد هندسي مخفي',
      },
      {
        src: '/images/services/led-ceiling-frame.jpg',
        alt: 'ليد مستطيل في السقف وقت التركيب',
      },
      {
        src: '/images/services/led-tiered-ceiling.jpg',
        alt: 'ليد مخفي في سقف طبقات',
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
    description: 'تشوف مين على الباب وتتكلم، من جوا',
    highlights: [
      'صورة وصوت',
      'شاشة جوا',
      'تفتح من مكانك',
    ],
    body: 'نركّب الجهاز جنب الباب، والشاشة جوا. تشوف اللي برا وتتكلم معه، وتفتح وأنت في مكانك.',
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
        src: '/images/services/intercom-button-panel.jpg',
        alt: 'وحدة انتركوم بأزرار على الجدار',
      },
    ],
  },
  {
    slug: 'air-conditioning',
    icon: 'i-heroicons-home-modern',
    title: 'تأسيس تكييف',
    description: 'النحاس والدكت مع البناء',
    highlights: [
      'سبليت',
      'مركزي',
      'تصريف الموية',
    ],
    body: 'نمشي النحاس والدكت والتصريف وقت التأسيس. الوحدة تركب بعد التشطيب على تمديد جاهز.',
    gallery: [
      {
        src: '/images/services/ac-outdoor-rough-in.jpg',
        alt: 'مواسير المكيف خارجة من الجدار',
      },
      {
        src: '/images/services/ac-copper-lines.jpg',
        alt: 'مواسير المكيف داخل جدار الطوب',
      },
      {
        src: '/images/services/ac-wall-piping.jpg',
        alt: 'مواسير المكيف في الجدار',
      },
      {
        src: '/images/services/ac-ceiling-pipes.jpg',
        alt: 'مواسير المكيف في السقف والجدار',
      },
    ],
  },
  {
    slug: 'fault-diagnosis',
    icon: 'i-heroicons-wrench-screwdriver',
    title: 'إصلاح أعطال',
    description: 'نفحص، نقولك السبب والسعر، بعدين نصلح',
    highlights: [
      'انقطاع النور',
      'حرارة الأفياش',
      'قاطع يفصل',
    ],
    body: 'من اللوحة لين النقطة. تعرف وين العطل وإيش بيكلف، قبل لا نغيّر شي.',
    gallery: [
      {
        src: '/images/services/fault-wall-outlets.jpg',
        alt: 'أفياش مكشوفة في الجدار',
      },
      {
        src: '/images/services/networks-breaker-panel.jpg',
        alt: 'فحص لوحة الكهرباء',
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
