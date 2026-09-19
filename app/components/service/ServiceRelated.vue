<script setup lang="ts">
import type { ServiceSummary } from '~/shared/types/site'

const { services } = defineProps<{ services: ServiceSummary[] }>()
</script>

<template>
  <section class="section-y">
    <UContainer class="stack-md items-center">
      <h2 class="reveal">
        نسوي كمان
      </h2>

      <ul class="reveal flex flex-wrap justify-center gap-2">
        <li
          v-for="service in services"
          :key="service.slug"
        >
          <NuxtLink
            :to="`/services/${service.slug}`"
            class="pill min-h-11 caption-sm focus-ring transition duration-75 ease-out active:scale-[0.98] active:border-primary/40 active:text-highlighted can-hover:duration-300 can-hover:hover:border-primary/40 can-hover:hover:text-highlighted"
          >
            <UIcon
              :name="service.icon"
              class="size-4 text-primary"
            />
            {{ service.title }}
          </NuxtLink>
        </li>
      </ul>
    </UContainer>
  </section>
</template>
