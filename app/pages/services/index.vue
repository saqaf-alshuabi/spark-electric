<script setup lang="ts">
import { serviceSummaries, site } from '@/shared/data'

const title = `خدمات الكهرباء في ${site.city}`
const description = 'تأسيس، صيانة، وإصلاح أعطال للمنازل والمباني.'
</script>

<template>
  <section class="section-y">
    <UContainer class="stack-md">
      <!-- Mobile / tablet header -->
      <div class="mx-auto stack-sm text-center lg:hidden">
        <h1>
          {{ title }}
        </h1>
        <p>
          {{ description }}
        </p>
      </div>

      <!-- Mobile / tablet: photo cards -->
      <ul class="grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:hidden">
        <li
          v-for="service in serviceSummaries"
          :key="service.slug"
          class="reveal"
        >
          <SharedServiceListCard
            :title="service.title"
            :description="service.description"
            :highlights="service.highlights"
            :image="service.image"
            :image-alt="service.imageAlt"
            :to="`/services/${service.slug}`"
          />
        </li>
      </ul>

      <!-- Desktop: title + index + preview as one composition -->
      <SiteSectionsServicesIndex
        :services="serviceSummaries"
        :title="title"
        :description="description"
      />
    </UContainer>
  </section>

  <SiteSectionsCtaSection />
</template>
