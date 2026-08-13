<script setup lang="ts">
import { getServiceBySlug } from '@/shared/data/site'

const route = useRoute()
const { site } = useAppConfig()

const service = getServiceBySlug(String(route.params.slug))

if (!service) {
  throw createError({
    statusCode: 404,
    statusMessage: 'الخدمة غير موجودة',
  })
}

useSeoMeta({
  title: `${service.title} في ${site.city}`,
  description: `${service.description} خدمة كهرباء في ${site.city} وضواحيها.`,
})
</script>

<template>
  <section class="section-y">
    <UContainer class="stack-md">
      <div class="mx-auto grid w-full max-w-5xl grid-cols-1 items-start gap-8 md:grid-cols-2 md:gap-12">
        <div class="aspect-4/3 overflow-hidden rounded-lg bg-muted/40 md:sticky md:top-28">
          <NuxtImg
            :src="service.image"
            :alt="service.imageAlt"
            class="size-full object-cover"
            sizes="100vw md:50vw"
          />
        </div>

        <div class="stack-md">
          <div class="stack-sm">
            <h1>
              {{ service.title }}
            </h1>
            <p>
              {{ service.body }}
            </p>
          </div>

          <ul class="stack-sm list-none">
            <li
              v-for="item in service.highlights"
              :key="item"
              class="flex items-center gap-2 text-sm text-highlighted sm:text-base"
            >
              <UIcon
                name="i-heroicons-check"
                class="size-5 shrink-0 text-primary"
              />
              {{ item }}
            </li>
          </ul>

          <p>
            متوفر في {{ site.city }} وضواحيها — تواصل معنا للمعاينة أو الطوارئ.
          </p>

          <div class="flex flex-wrap gap-3">
            <UButton
              to="/services"
              label="كل الخدمات"
              variant="soft"
              trailing-icon="i-heroicons-arrow-left"
            />
          </div>
        </div>
      </div>
    </UContainer>
  </section>

  <SiteSectionsCtaSection />
</template>
