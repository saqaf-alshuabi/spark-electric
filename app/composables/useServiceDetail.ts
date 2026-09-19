import { getServiceBySlug, serviceSummaries } from '~/shared/data/services'

export function useServiceDetail() {
  const slug = String(useRoute().params.slug)
  const service = getServiceBySlug(slug) ?? notFound('الخدمة مو موجودة')
  const others = serviceSummaries.filter(item => item.slug !== slug)

  return { service, others }
}
