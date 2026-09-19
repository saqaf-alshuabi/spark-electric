import type { ServiceSlide } from '../../types/site'

/** Keep carousel + homepage LCP preload on the same srcset. */
export const HERO_IMAGE_SIZES = 'sm:92vw md:45vw lg:640px'

export const serviceSlides: ServiceSlide[] = [
  {
    src: '/images/services/networks-breaker-panel.jpg',
    alt: 'لوحة قواطع جاهزة',
    caption: 'تأسيس كهرباء',
  },
  {
    src: '/images/services/lighting-crystal-chandelier.jpg',
    alt: 'ثريا وسبوت في السقف',
    caption: 'ثريا وسبوت',
  },
  {
    src: '/images/services/led-cross-tracks.jpg',
    alt: 'ليد وتراك في سقف جبس',
    caption: 'ليد مخفي',
  },
  {
    src: '/images/services/intercom-outdoor-panel.jpg',
    alt: 'انتركوم بكاميرا عند الباب',
    caption: 'انتركوم',
  },
  {
    src: '/images/services/ac-outdoor-rough-in.jpg',
    alt: 'مواسير المكيف وقت التأسيس',
    caption: 'تأسيس تكييف',
  },
]
