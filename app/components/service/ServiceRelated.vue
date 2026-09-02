<script setup lang="ts">
import type { ServiceSummary } from '~/shared/types/site'

const { services } = defineProps<{ services: ServiceSummary[] }>()
</script>

<template>
  <nav
    class="stack-sm"
    aria-label="خدمات ثانية"
  >
    <p class="caption">
      نسوي كمان
    </p>

    <ul class="flex flex-wrap gap-2">
      <li
        v-for="service in services"
        :key="service.slug"
      >
        <NuxtLink
          :to="`/services/${service.slug}`"
          class="pill caption-sm focus-ring transition duration-300 ease-out active:scale-[0.98] can-hover:hover:border-primary/40 can-hover:hover:text-highlighted"
        >
          <UIcon
            :name="service.icon"
            class="size-4 text-primary"
          />
          {{ service.title }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
