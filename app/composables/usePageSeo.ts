import type { NavItem, PageSeo } from '~/shared/types/site'
import { site } from '@/shared/data'

const HOME: NavItem[] = [{ label: 'الرئيسية', to: '/' }]

/**
 * Everything a page owes a crawler, in one call: meta tags, the social card,
 * and the breadcrumb trail. The canonical URL, WebSite and WebPage nodes are
 * already handled by Nuxt SEO, so they are deliberately not repeated here.
 */
export function usePageSeo(page: PageSeo) {
  const cardTitle = page.ogTitle ?? page.title

  useSeoMeta({
    title: page.title,
    description: page.description,
    // Set explicitly so the shared card doesn't inherit the title template and
    // repeat the brand that og:site_name already carries.
    ogTitle: cardTitle,
    ogType: 'website',
    ogLocale: site.locale.replace('-', '_'),
    twitterTitle: cardTitle,
    twitterDescription: page.description,
    twitterCard: 'summary_large_image',
  })

  defineOgImage('Card', {
    title: cardTitle,
    description: page.description,
  })

  const trail = [...HOME, ...(page.breadcrumb ?? [])]

  // A single-item trail is just the homepage linking to itself.
  if (trail.length < 2) {
    return
  }

  useSchemaOrg([
    defineBreadcrumb({
      itemListElement: trail.map(({ label, to }) => ({
        name: label,
        item: to,
      })),
    }),
  ])
}
