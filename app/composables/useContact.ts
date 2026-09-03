import { formattedPhone, whatsappUrl } from '@/shared/data'

export const useContact = () => {
  return {
    // wa.me rejects a leading +, tel: needs one to dial as international
    whatsappUrl,
    phoneUrl: `tel:${formattedPhone}`,
  }
}
