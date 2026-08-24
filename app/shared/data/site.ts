import type { SiteSettings } from '~/shared/types/site'

export const site = {
  name: 'أبو تيم الكهربائي',
  city: 'مكة',
  copyright: `${new Date().getFullYear()} جميع الحقوق محفوظة`,
  logo: '/images/logos/logo.png',
  phone: '967738271423',
} satisfies SiteSettings
