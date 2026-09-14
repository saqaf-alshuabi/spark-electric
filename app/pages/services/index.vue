<script setup lang="ts">
import { serviceSummaries, site } from '@/shared/data'

usePageSeo({
  title: `خدمات الكهرباء في ${site.city}`,
  description: `تأسيس كهرباء، ثريا وسبوت، ليد مخفي، انتركوم، تأسيس تكييف، وكشف أعطال في ${site.city} وضواحيها. شوف شغلنا بالصور واختر الخدمة اللي تحتاجها.`,
  breadcrumb: [{ label: 'خدمات', to: '/services' }],
})

useSchemaOrg([
  defineItemList({
    name: `خدمات الكهرباء في ${site.city}`,
    itemListElement: serviceSummaries.map(service => ({
      name: service.title,
      item: `/services/${service.slug}`,
    })),
  }),
])
</script>

<template>
  <HeroFrame class="stack-lg">
    <HeroIntro
      badge="من التأسيس لين آخر لمبة"
      heading="كل اللي نسويه"
      body="اختر الخدمة وشوف الشغل بنفسك"
    />

    <ul class="grid grid-cols-1 grid-gap md:grid-cols-2 lg:grid-cols-3">
      <li
        v-for="(service, index) in serviceSummaries"
        :key="service.slug"
        class="reveal"
      >
        <LazyServiceMediaCard
          hydrate-on-visible
          :icon="service.icon"
          :title="service.title"
          :description="service.description"
          :image="service.image"
          :image-alt="service.imageAlt"
          :to="`/services/${service.slug}`"
          :priority="index === 0"
        />
      </li>
    </ul>
  </HeroFrame>
</template>
