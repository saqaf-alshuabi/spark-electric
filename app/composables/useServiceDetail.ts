import { getServiceBySlug, serviceSummaries } from '@/shared/data'

/**
 * Nuxt keys the page by the interpolated path, so a new slug remounts this
 * component and the lookup never goes stale.
 */
export function useServiceDetail() {
  const slug = String(useRoute().params.slug)
  const service = getServiceBySlug(slug) ?? notFound('الخدمة غير موجودة')
  const others = serviceSummaries.filter(item => item.slug !== slug)

  return { service, others }
}
