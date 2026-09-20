import type { PageSeo } from '~/shared/types/site'

export function usePageSeo(page: PageSeo) {
  const cardTitle = page.ogTitle ?? page.title
  const { description: siteDescription } = useSiteConfig()

  useSeoMeta({
    title: page.title,
    ...(page.description ? { description: page.description } : {}),
    // Avoid the title template repeating the brand that og:site_name already carries.
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
