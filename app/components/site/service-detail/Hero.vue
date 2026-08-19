<script setup lang="ts">
import type { ServiceDetail } from '~/shared/types/site'

const { site, ui } = useAppConfig()
defineProps<{ service: ServiceDetail }>()
</script>

<template>
  <section class="section-y">
    <UContainer class="grid  grid-cols-1 items-start gap-8 md:grid-cols-2 md:gap-12  ">
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

      <div class="stack-md content-w">
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

        <div class="flex flex-wrap gap-3 ">
          <UButton
            to=""
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
    </UContainer>
  </section>
</template>
