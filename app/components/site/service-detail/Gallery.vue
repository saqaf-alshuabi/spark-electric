<script setup lang="ts">
import type { ServiceSlide } from '~/shared/types/site'

const { gallery } = defineProps<{ gallery: ServiceSlide[] }>()

/**
 * The opener always runs full width. The closer joins it when the shots left
 * over would otherwise leave a hole in the last pair, so the grid never breaks.
 */
const shots = computed(() =>
  gallery.map((shot, index) => ({
    ...shot,
    wide: index === 0 || (index === gallery.length - 1 && gallery.length % 2 === 0),
  })),
)
</script>

<template>
  <ul class="grid grid-cols-2 grid-gap">
    <li
      v-for="(shot, index) in shots"
      :key="shot.src"
      class="reveal"
      :class="shot.wide && 'col-span-2'"
    >
      <div
        class="relative overflow-hidden rounded-3xl bg-muted/40"
        :class="shot.wide ? 'aspect-16/10' : 'aspect-4/3'"
      >
        <NuxtPicture
          :src="shot.src"
          :alt="shot.alt"
          class="block size-full"
          :preload="index === 0 ? { fetchPriority: 'high' } : false"
          :loading="index === 0 ? 'eager' : 'lazy'"
          :img-attrs="{ class: 'size-full object-cover' }"
          :sizes="shot.wide ? '100vw lg:1200px' : '50vw lg:600px'"
        />

        <!-- Literal white below: this edge sits on a photo, not on the theme -->
        <div
          class="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10 ring-inset"
          aria-hidden="true"
        />
      </div>
    </li>
  </ul>
</template>
