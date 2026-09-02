<script setup lang="ts">
import { site } from '@/shared/data'

const { service, others } = useServiceDetail()

useSeoMeta({
  title: `${service.title} في ${site.city}`,
  description: `${service.description} — كهربائي في ${site.city} وضواحيها`,
})
</script>

<template>
  <HeroFrame class="stack-lg">
    <div class="stack-md items-center md:items-start">
      <HeroIntro
        :badge="`من شغلنا في ${site.city}`"
        :heading="service.title"
        :body="service.description"
      />

      <ContactActions class="rise [animation-delay:240ms]" />
    </div>

    <ServiceGallery :gallery="service.gallery" />

    <ServiceRelated :services="others" />
  </HeroFrame>
</template>
