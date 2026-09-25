<script setup lang="ts">
import type { ServiceSlide } from '~/shared/types/site'

defineProps<{ gallery: ServiceSlide[] }>()
</script>

<template>
  <ul class="mx-auto grid w-full max-w-4xl grid-cols-1 grid-gap md:grid-cols-2">
    <li
      v-for="(shot, index) in gallery"
      :key="shot.src"
    >
      <div class="relative aspect-16/10 overflow-hidden rounded-xl bg-muted/40">
        <SitePicture
          preset="gallery"
          :src="shot.src"
          :alt="shot.alt"
          class="block size-full"
          :preload="index === 0 ? { fetchPriority: 'high' } : false"
          :loading="index === 0 ? 'eager' : 'lazy'"
          :img-attrs="{
            class: 'size-full object-cover',
            fetchpriority: index === 0 ? 'high' : 'auto',
          }"
        />

        <!-- Literal white: sits on a photo, not a theme token. -->
        <div
          class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/10 ring-inset"
          aria-hidden="true"
        />
      </div>
    </li>
  </ul>
</template>
