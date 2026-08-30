<script setup lang="ts">
const {
  title,
  description,
  image,
  imageAlt,
  to,
  priority,
} = defineProps<{
  title: string
  description: string
  image: string
  imageAlt: string
  to: string
  priority?: boolean
}>()
</script>

<template>
  <NuxtLink
    :to="to"
    class="group focus-ring flex h-full flex-col overflow-hidden rounded-lg bg-muted/50 transition-colors hover:bg-muted active:bg-accented"
  >
    <div class="relative aspect-16/10 overflow-hidden bg-muted/40">
      <NuxtPicture
        :src="image"
        :alt="imageAlt"
        class="absolute inset-0 block size-full"
        :preload="priority ? { fetchPriority: 'high' } : false"
        :loading="priority ? 'eager' : 'lazy'"
        :img-attrs="{ class: 'size-full object-cover' }"
        sizes="100vw md:50vw"
      />
    </div>

    <div class="flex items-start justify-between gap-3 p-4">
      <div class="stack-sm min-w-0">
        <h3>
          {{ title }}
        </h3>
        <p class="text-sm">
          {{ description }}
        </p>
      </div>

      <SharedLinkArrow class="mt-1" />
    </div>
  </NuxtLink>
</template>
