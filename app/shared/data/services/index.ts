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
    description: 'البيت يتأسس من اللوحة إلى الأفياش، والشغل يطلع مرتب.',
    highlights: [
      'لوحة مرتبة',
      'تمديد نظيف',
      'أفياش ومفاتيح',
    ],
    body: 'نبدأ من اللوحة ونمشي التمديد في السقف والجدران. المواسير والكابلات والأفياش كل واحد في مكانه. بعد التشطيب ما تشوف فوضى أسلاك.',
    gallery: [
      {
        src: '/images/services/networks-breaker-panel.jpg',
        alt: 'لوحة قواطع بعد التأسيس، الأسلاك مرتبة',
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
    description: 'نجف وثريات يثبتون نظيف، والإضاءة تتوزع صح.',
    highlights: [
      'ثريات ونجف',
      'سبوت وكشافات',
      'من غير فوضى أسلاك',
    ],
    body: 'نركب النجف والثريا بثبات، والسبوت يتوزع على السقف. الشغل نظيف من تحت، ما فيه أسلاك باينة.',
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
    description: 'إنارة مخفية تغيّر شكل السقف، من غير تعقيد.',
    highlights: [
      'إنارة مخفية',
      'ليدات أسقف',
      'إضاءة هادية',
    ],
    body: 'الليدات المخفية تغيّر شكل السقف من غير ما تثقله. نركبها مرتبة، والإضاءة تطلع هادية وواضحة.',
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
        src: '/images/services/led-v-ceiling.jpg',
        alt: 'ليدات هندسية في السقف',
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
    description: 'تشوف مين على الباب قبل ما تفتح.',
    highlights: [
      'كاميرا على الباب',
      'وحدة داخل البيت',
      'سهل الاستخدام',
    ],
    body: 'نركب انتركوم مرئي على الباب، ووحدة داخل البيت. تشوف الزاير وتكلمه، والاستخدام يومي وبسيط.',
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
    slug: 'fault-diagnosis',
    icon: 'i-heroicons-wrench-screwdriver',
    title: 'فحص أعطال',
    description: 'الكهرباء قطعت أو في التماس؟ نحدد السبب قبل ما نصلح.',
    highlights: [
      'انقطاع والتماس',
      'فحص اللوحة',
      'نجي للطوارئ',
    ],
    body: 'ما نبدّل قطع على طول. نفحص، نقولك وين العطل، وبعدين نصلح. لو طارئة، نجي.',
    gallery: [
      {
        src: '/images/services/networks-breaker-panel.jpg',
        alt: 'فحص لوحة الكهرباء بعد العطل',
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
