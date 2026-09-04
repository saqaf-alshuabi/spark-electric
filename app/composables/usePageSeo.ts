import type { PageSeo } from '~/shared/types/site'

/**
 * Page title, description, social card, and breadcrumb.
 * Canonical, og:type, og:locale, twitter tags, WebSite and WebPage come from Nuxt SEO.
 */
export function usePageSeo(page: PageSeo) {
  const cardTitle = page.ogTitle ?? page.title
  const { description: siteDescription } = useSiteConfig()

  useSeoMeta({
    title: page.title,
    ...(page.description ? { description: page.description } : {}),
    // Set explicitly so the shared card doesn't inherit the title template and
    // repeat the brand that og:site_name already carries.
    ogTitle: cardTitle,
  })

  defineOgImage('Card', {
    title: cardTitle,
    description: page.description ?? siteDescription,
  })

  if (!page.breadcrumb?.length) {
    return
  }

  useBreadcrumbItems({
    overrides: [
      { label: 'الرئيسية' },
      ...page.breadcrumb.map(({ label }) => ({ label })),
    ],
  })
}
