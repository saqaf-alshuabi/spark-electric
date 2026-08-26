<script setup lang="ts">
const {
  title,
  description,
  highlights,
  image,
  imageAlt,
  to,
} = defineProps<{
  title: string
  description: string
  highlights: string[]
  image: string
  imageAlt: string
  to: string
}>()
</script>

<template>
  <NuxtLink
    :to="to"
    class="group focus-ring flex h-full flex-col overflow-hidden rounded-lg bg-muted/50 transition-colors hover:bg-muted active:bg-accented"
  >
    <div class="relative aspect-16/10 overflow-hidden bg-muted/40">
      <NuxtImg
        :src="image"
        :alt="imageAlt"
        class="absolute inset-0 size-full object-cover"
        sizes="100vw md:50vw"
      />
    </div>

    <div class="flex items-start justify-between gap-3 p-2.5 md:p-4">
      <div class="stack-sm min-w-0">
        <h3>
          {{ title }}
        </h3>
        <p class="text-sm">
          {{ description }}
        </p>
        <ul class="flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted md:text-sm">
          <li
            v-for="item in highlights"
            :key="item"
            class="flex items-center gap-1.5"
          >
            <SharedBulletDot />
            {{ item }}
          </li>
        </ul>
      </div>

      <SharedLinkArrow class="mt-1" />
    </div>
  </NuxtLink>
</template>
