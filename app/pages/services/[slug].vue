<script setup lang="ts">
import { site } from '@/shared/data'

const { service, others } = useServiceDetail()
const { url: siteUrl } = useSiteConfig()

usePageSeo({
  title: `${service.serviceType} في ${site.city}`,
  description: service.seoDescription,
  ogTitle: `${service.title} في ${site.city}`,
  breadcrumb: [
    { label: 'خدمات', to: '/services' },
    { label: service.title, to: `/services/${service.slug}` },
  ],
})

useSchemaOrg([
  defineService({
    name: `${service.serviceType} في ${site.city}`,
    serviceType: service.serviceType,
    description: service.intro,
    // Schema.org images must be absolute; the Service resolver leaves them as given.
    image: service.gallery.map(slide => new URL(slide.src, siteUrl).toString()),
    areaServed: {
      '@type': 'City',
      'name': site.address.locality,
    },
  }),
  defineWebPage({ '@type': ['WebPage', 'FAQPage'] }),
  ...service.faqs.map(faq => defineQuestion({
    question: faq.question,
    answer: faq.answer,
  })),
])
</script>

<template>
  <div>
    <HeroFrame class="stack-lg">
      <div class="stack-md items-center md:items-start">
        <HeroIntro
          :badge="`من شغلنا في ${site.city}`"
          :heading="`${service.title} في ${site.city}`"
          :body="service.description"
        />

        <p class="rise max-w-2xl text-center [animation-delay:200ms] md:text-start">
          {{ service.intro }}
        </p>

        <ContactActions
          class="rise [animation-delay:240ms]"
        />
      </div>

      <ServiceGallery :gallery="service.gallery" />
    </HeroFrame>

    <LazyServiceFaq
      hydrate-never
      :faqs="service.faqs"
      :heading="`أسئلة عن ${service.title}`"
    />

    <LazyServiceRelated
      hydrate-on-visible
      :services="others"
    />
  </div>
</template>
