import { getServiceBySlug } from '~/shared/data/services'
import { formattedPhone, whatsappChatUrl } from '~/shared/data/site'

const HOME_WHATSAPP_TEXT = 'أبغى أسأل عن خدماتكم'

export const useContact = () => {
  const route = useRoute()

  const whatsappUrl = computed(() => {
    const slug = route.params.slug
    if (typeof slug === 'string' && route.path.startsWith('/services/')) {
      const service = getServiceBySlug(slug)
      if (service)
        return whatsappChatUrl(`أبغى أسأل عن ${service.title}`)
    }

    return whatsappChatUrl(HOME_WHATSAPP_TEXT)
  })

  return {
    // wa.me rejects a leading +, tel: needs one to dial as international
    whatsappUrl,
    phoneUrl: `tel:${formattedPhone}`,
  }
}
