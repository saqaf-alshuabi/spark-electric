<script setup lang="ts">
import { serviceSummaries, site } from '@/shared/data'

useSeoMeta({
  title: `كهربائي في ${site.city}`,
  description: 'تأسيس، ثريا وسبوت، تكييف، انتركوم، وأعطال، للبيت والمحل في مكة',
})
</script>

<template>
  <section class="relative isolate overflow-hidden hero-y">
    <div
      class="pointer-events-none absolute inset-0 -z-10 hero-aura"
      aria-hidden="true"
    />
    <div
      class="pointer-events-none absolute inset-0 -z-10 hero-grid"
      aria-hidden="true"
    />

    <UContainer class="stack-lg">
      <div class="stack-sm items-center text-center md:items-start md:text-start">
        <p class="rise pill caption-sm">
          من التأسيس لين آخر لمبة
        </p>

        <h1 class="rise heading-gradient [animation-delay:80ms]">
          كل اللي نسويه
        </h1>

        <p class="rise max-w-md [animation-delay:160ms]">
          اختر الخدمة وشوف الشغل بنفسك
        </p>
      </div>

      <ul class="grid grid-cols-1 grid-gap md:grid-cols-2 lg:grid-cols-3">
        <li
          v-for="(service, index) in serviceSummaries"
          :key="service.slug"
          class="reveal"
        >
          <SharedServiceListCard
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
    </UContainer>
  </section>
</template>
