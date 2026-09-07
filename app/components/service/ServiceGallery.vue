<script setup lang="ts">
import type { ServiceSlide } from '~/shared/types/site'

defineProps<{ gallery: ServiceSlide[] }>()
</script>

<template>
  <ul class="grid grid-cols-1 grid-gap md:grid-cols-2">
    <li
      v-for="(shot, index) in gallery"
      :key="shot.src"
      class="reveal"
    >
      <div class="relative aspect-4/3 overflow-hidden rounded-3xl bg-muted/40">
        <NuxtPicture
          :src="shot.src"
          :alt="shot.alt"
          class="block size-full"
          legacy-format="webp"
          :preload="index === 0 ? { fetchPriority: 'high' } : false"
          :loading="index === 0 ? 'eager' : 'lazy'"
          :img-attrs="{
            class: 'size-full object-cover',
            fetchpriority: index === 0 ? 'high' : 'auto',
          }"
          sizes="sm:92vw md:45vw"
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
