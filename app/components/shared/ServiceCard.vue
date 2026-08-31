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
        content: 'flex-1 justify-between',
        title: 'text-xl md:text-2xl',
      }
    : {
        card: 'flex-col items-start',
        badge: 'size-11 md:size-12',
        icon: 'size-5 md:size-6',
        content: 'w-full justify-between',
        title: '',
      },
)
</script>

<template>
  <NuxtLink
    :to="to"
    class="group relative flex h-full gap-4 overflow-hidden rounded-2xl border border-default/60 bg-default/40 card-p focus-ring transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/30 hover:bg-default hover:shadow-xl hover:shadow-primary/10 active:translate-y-0 active:shadow-none"
    :class="layout.card"
  >
    <span
      class="flex shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary"
      :class="layout.badge"
    >
      <UIcon
        :name="icon"
        class="text-primary transition-colors duration-300 group-hover:text-inverted"
        :class="layout.icon"
      />
    </span>

    <div
      class="flex min-w-0 items-center gap-2"
      :class="layout.content"
    >
      <div class="min-w-0">
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
      <SharedLinkArrow reveal="hover" />
    </div>
  </NuxtLink>
</template>
