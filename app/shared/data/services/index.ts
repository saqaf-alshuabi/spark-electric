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
    description: 'نركّبها ونوزع النور',
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
    description: 'النور باين، والشريط ما يبان',
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
    description: 'تشوف مين عند الباب، من جوا',
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
    title: 'أعطال',
    description: 'نفحص ونقولك السبب والسعر، بعدين نصلح',
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
  ({ slug, title, description, image, imageAlt }) => ({
    slug,
    title,
    description,
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
