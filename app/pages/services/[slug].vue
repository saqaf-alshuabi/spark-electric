<script setup lang="ts">
import { getServiceBySlug } from '@/shared/data'

const route = useRoute()
const { site, ui } = useAppConfig()

const service = getServiceBySlug(String(route.params.slug)) ?? notFound('الخدمة غير موجودة')

const contactUrl = computed(() => {
  const text = `السلام عليكم، أبغى استفسر عن خدمة: ${service.title}`
  return `https://wa.me/${site.phone}?text=${encodeURIComponent(text)}`
})
</script>

<template>
  <section class="section-y">
    <UContainer class="stack-md">
      <div class="mx-auto grid w-full max-w-5xl grid-cols-1 items-start gap-8 md:grid-cols-2 md:gap-12">
        <div class="stack-sm md:sticky md:top-28">
          <div class="aspect-4/3 overflow-hidden rounded-lg bg-muted/40">
            <NuxtImg
              :src="service.image"
              :alt="service.imageAlt"
              class="size-full object-contain"
              sizes="100vw md:50vw"
            />
          </div>

          <ul
            v-if="service.gallery.length > 1"
            class="grid list-none grid-cols-3 gap-2"
          >
            <li
              v-for="shot in service.gallery.slice(1)"
              :key="shot.src"
              class="aspect-square overflow-hidden rounded-md bg-muted/40"
            >
              <NuxtImg
                :src="shot.src"
                :alt="shot.alt"
                class="size-full object-cover"
                sizes="120px"
              />
            </li>
          </ul>
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
                :name="ui.icons.check"
                class="size-5 shrink-0 text-primary"
              />
              {{ item }}
            </li>
          </ul>

          <p>
            خدمة {{ service.title }} في {{ site.city }} وضواحيها — تسعير واضح قبل التنفيذ.
          </p>

          <div class="flex flex-wrap gap-3">
            <UButton
              :to="contactUrl"
              target="_blank"
              rel="noopener noreferrer"
              label="استفسر الآن"
              :icon="ui.icons.whatsapp"
            />
            <UButton
              to="/services"
              label="كل الخدمات"
              variant="soft"
              :trailing-icon="ui.icons.arrowLeft"
            />
          </div>
        </div>
      </div>
    </UContainer>
  </section>

  <SiteSectionsCtaSection />
</template>
