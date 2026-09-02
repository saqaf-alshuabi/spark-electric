<script setup lang="ts">
import type { HomeServiceItem } from '@/shared/types/site'

const { wide = false } = defineProps<HomeServiceItem & { wide?: boolean }>()

/** Single source of truth for the two layout variants, instead of a ternary per element. */
const layout = computed(() =>
  wide
    ? {
        card: 'flex-row items-center',
        badge: 'size-12 md:size-14',
        icon: 'size-6 md:size-7',
        content: 'flex-1',
        title: 'text-xl md:text-2xl',
      }
    : {
        card: 'flex-col items-start',
        badge: 'size-11 md:size-12',
        icon: 'size-5 md:size-6',
        content: 'w-full',
        title: '',
      },
)
</script>

<template>
  <NuxtLink
    :to="to"
    class="group flex h-full gap-4 overflow-hidden rounded-2xl border border-default/60 bg-default/40 card-p focus-ring transition duration-300 ease-out active:scale-[0.98] active:bg-default can-hover:hover:-translate-y-1 can-hover:hover:border-primary/30 can-hover:hover:bg-default can-hover:hover:shadow-xl can-hover:hover:shadow-primary/10"
    :class="layout.card"
  >
    <span
      class="flex shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-active:bg-primary can-hover:group-hover:bg-primary"
      :class="layout.badge"
    >
      <UIcon
        :name="icon"
        class="text-primary transition-colors duration-300 group-active:text-inverted can-hover:group-hover:text-inverted"
        :class="layout.icon"
      />
    </span>

    <div
      class="min-w-0"
      :class="layout.content"
    >
      <h3
        class="text-start"
        :class="layout.title"
      >
        {{ title }}
      </h3>
      <p
        v-if="wide"
        class="mt-1 text-start caption-sm"
      >
        {{ description }}
      </p>
    </div>
  </NuxtLink>
</template>
