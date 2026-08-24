import { site } from '@/shared/data'

export const useContact = () => {
  return {
    whatsappUrl: `https://wa.me/${site.phone}`,
    phoneUrl: `tel:${site.phone}`,
  }
}
