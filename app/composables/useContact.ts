import { site } from '@/shared/data'

export const useContact = () => {
  return {
    // wa.me rejects a leading +, tel: needs one to dial as international
    whatsappUrl: `https://wa.me/${site.phone}`,
    phoneUrl: `tel:+${site.phone}`,
  }
}
