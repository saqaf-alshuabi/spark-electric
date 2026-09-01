<script setup lang="ts">
import { site } from '@/shared/data'

const { service, others } = useServiceDetail()

useSeoMeta({
  title: `${service.title} في ${site.city}`,
  description: `${service.description} — كهربائي في ${site.city} وضواحيها`,
})
</script>

<template>
  <SharedHeroFrame class="stack-lg">
    <div class="stack-md items-center md:items-start">
      <SharedHeroIntro
        :badge="`من شغلنا في ${site.city}`"
        :heading="service.title"
        :body="service.description"
      />

      <SharedContactActions class="rise [animation-delay:240ms]" />
    </div>

    <SiteServiceDetailGallery :gallery="service.gallery" />

    <SiteServiceDetailRelated :services="others" />
  </SharedHeroFrame>
</template>
