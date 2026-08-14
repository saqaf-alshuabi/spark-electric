import { getServiceBySlug } from '@/shared/data'

export const useServiceDetail = () => {
  const route = useRoute()
  const service = getServiceBySlug(String(route.params.slug)) ?? notFound('الخدمة غير موجودة')
  return { service }
}
