<script setup lang="ts">
import type { HomeServiceItem } from '~/shared/types/site'

const { wide = false } = defineProps<HomeServiceItem & { wide?: boolean }>()

const layout = computed(() =>
  wide
    ? {
        card: 'flex-row items-center',
        content: 'flex-1',
        title: 'text-xl md:text-2xl',
      }
    : {
        card: 'flex-col items-start',
        content: 'w-full',
        title: '',
      },
)
</script>

<template>
  <NuxtLink
    :to="to"
    class="group card-surface motion-press flex h-full gap-4 overflow-hidden card-p focus-ring transition-[transform,background-color] active:scale-[0.98] active:bg-default can-hover:hover:bg-default"
    :class="layout.card"
  >
    <ServiceIconBadge :name="icon" />

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
