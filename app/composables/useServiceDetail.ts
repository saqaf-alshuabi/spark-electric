import { getServiceBySlug } from '@/shared/data'

export function useServiceDetail() {
  const route = useRoute()
  const service = getServiceBySlug(String(route.params.slug))
    ?? notFound('الخدمة غير موجودة')

  return { service }
}
