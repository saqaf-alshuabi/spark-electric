<script setup lang="ts">
import { serviceSummaries } from '@/shared/data'

const { site } = useAppConfig()

const pageTitle = `خدمات الكهرباء في ${site.city}`
const pageDescription = 'تأسيس، إنارة، انتركوم، وفحص أعطال للمنازل والمباني — بتسعير واضح قبل التنفيذ.'

useSeoMeta({
  title: pageTitle,
  description: `كهربائي منازل ومباني في ${site.city} وضواحيها: تأسيس شبكات، إنارة وثريات، ليدات، انتركوم، وفحص أعطال.`,
})
</script>

<template>
  <section class="section-y">
    <UContainer class="stack-md">
      <!-- Mobile / tablet header -->
      <div class="mx-auto stack-sm max-w-2xl text-center lg:hidden">
        <h1>
          {{ pageTitle }}
        </h1>
        <p>
          {{ pageDescription }}
        </p>
      </div>

      <!-- Mobile / tablet: photo cards -->
      <ul class="grid w-full list-none grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:hidden">
        <li
          v-for="service in serviceSummaries"
          :key="service.slug"
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
        :title="pageTitle"
        :description="pageDescription"
      />
    </UContainer>
  </section>

  <SiteSectionsCtaSection />
</template>
