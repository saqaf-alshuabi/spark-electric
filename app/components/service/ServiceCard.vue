<script setup lang="ts">
import type { HomeServiceItem } from '@/shared/types/site'

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
    class="group flex h-full gap-4 overflow-hidden rounded-xl border border-default/60 bg-default/40 card-p focus-ring transition-[transform,background-color] duration-300 ease-out active:scale-[0.98] active:bg-default can-hover:hover:bg-default"
    :class="layout.card"
  >
    <span
      class="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors duration-300 group-active:bg-primary can-hover:group-hover:bg-primary"
    >
      <UIcon
        :name="icon"
        class="size-5 text-primary transition-colors duration-300 group-active:text-inverted can-hover:group-hover:text-inverted"
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
