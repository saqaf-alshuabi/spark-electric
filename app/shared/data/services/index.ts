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
    description: 'من اللوحة لين كل فيشة، في البيت أو المحل.',
    highlights: [
      'لوحة وقواطع',
      'تمديد سقف وجدران',
      'أفياش ومفاتيح',
    ],
    body: 'نبدأ من اللوحة ونمشي التمديد في السقف والجدران. بعد التشطيب ما تشوف أسلاك طالعة.',
    gallery: [
      {
        src: '/images/services/networks-breaker-panel.jpg',
        alt: 'لوحة قواطع بعد تأسيس الشبكة',
      },
      {
        src: '/images/services/networks-ceiling-conduit.jpg',
        alt: 'مواسير الكهرباء في السقف',
      },
      {
        src: '/images/services/networks-laser-outlets.jpg',
        alt: 'نقاط المفاتيح والأفياش بعد التأسيس',
      },
      {
        src: '/images/services/networks-corridor-conduits.jpg',
        alt: 'تمديد كابلات في الممر',
      },
    ],
  },
  {
    slug: 'lighting',
    icon: 'i-heroicons-light-bulb',
    title: 'إنارة وثريات',
    description: 'نركب النجفة والثريا، والسبوت يتوزع على السقف.',
    highlights: [
      'ثريات ونجف',
      'سبوت وكشافات',
      'التركيب ما يبين من تحت',
    ],
    body: 'نثبت الثريا، والسبوت يتوزع على السقف. الأسلاك ما تبين من تحت.',
    gallery: [
      {
        src: '/images/services/lighting-crystal-chandelier.jpg',
        alt: 'نجفة كريستال في سقف حديث',
      },
      {
        src: '/images/services/lighting-downlight-grid.jpg',
        alt: 'سبوت وكشافات في السقف',
      },
      {
        src: '/images/services/lighting-glass-rods.jpg',
        alt: 'إضاءة معلقة في السقف',
      },
      {
        src: '/images/services/lighting-petal-chandelier.jpg',
        alt: 'نجفة بعد التركيب',
      },
    ],
  },
  {
    slug: 'decorative-led',
    icon: 'i-heroicons-sparkles',
    title: 'ليدات ديكورية',
    description: 'ليدات مخفية تغيّر شكل السقف، والنور يكون هادي.',
    highlights: [
      'إنارة مخفية',
      'ليدات بالسلاكات',
      'مطابخ وخزائن',
    ],
    body: 'نركبها في السلاكات أو الجبس. النور هادي وواضح.',
    gallery: [
      {
        src: '/images/services/led-geometric-ceiling.jpg',
        alt: 'سقف بليدات هندسية وإنارة مخفية',
      },
      {
        src: '/images/services/led-tiered-ceiling.jpg',
        alt: 'إنارة مخفية في سقف طبقات',
      },
      {
        src: '/images/services/led-cross-tracks.jpg',
        alt: 'سقف بليدات مخفية بالسلاكات',
      },
      {
        src: '/images/services/led-kitchen-cabinets.jpg',
        alt: 'إنارة مخفية للمطبخ والخزائن',
      },
    ],
  },
  {
    slug: 'intercom',
    icon: 'i-heroicons-video-camera',
    title: 'انتركوم',
    description: 'كاميرا على الباب، ووحدة جوا البيت.',
    highlights: [
      'كاميرا على الباب',
      'وحدة جوا البيت',
      'تكلم اللي بالباب',
    ],
    body: 'نركب انتركوم مرئي على الباب ووحدة جوا. تشوف مين بالباب وتكلمه قبل ما تفتح.',
    gallery: [
      {
        src: '/images/services/intercom-outdoor-panel.jpg',
        alt: 'انتركوم مرئي على جدار الباب',
      },
      {
        src: '/images/services/intercom-indoor-panel.jpg',
        alt: 'وحدة انتركوم داخل البيت',
      },
      {
        src: '/images/services/intercom-keypad-wiring.jpg',
        alt: 'توصيل كابلات الانتركوم',
      },
    ],
  },
  {
    slug: 'air-conditioning',
    icon: 'i-heroicons-home-modern',
    title: 'تأسيس مكيفات',
    description: 'الفتحات والنحاس جاهزة قبل ما تجي الوحدة.',
    highlights: [
      'فتحات الجدار',
      'نحاس ومواسير',
      'قبل ما تجي الوحدة',
    ],
    body: 'نأسس المكيف بدري: الفتحات، النحاس، والمواسير. الوحدة تجي بعدين.',
    gallery: [
      {
        src: '/images/services/ac-outdoor-rough-in.jpg',
        alt: 'مواسير المكيف خارجة من الجدار وقت التأسيس',
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
        alt: 'تمديد مواسير المكيف في السقف',
      },
    ],
  },
  {
    slug: 'fault-diagnosis',
    icon: 'i-heroicons-wrench-screwdriver',
    title: 'فحص أعطال',
    description: 'الكهرباء قطعت؟ نقول لك وين العطل قبل ما نصلح.',
    highlights: [
      'انقطاع والتماس',
      'فحص اللوحة',
      'نجي للطوارئ',
    ],
    body: 'نفحص، نقول لك وين العطل، وبعدين نصلح. لو فيه طارئ، نجي.',
    gallery: [
      {
        src: '/images/services/networks-breaker-panel.jpg',
        alt: 'فحص لوحة الكهرباء',
      },
      {
        src: '/images/services/networks-conduit-panel.jpg',
        alt: 'فحص اللوحة والقواطع',
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
