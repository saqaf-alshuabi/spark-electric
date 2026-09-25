<script setup lang="ts">
const { priority = false } = defineProps<{
  icon: string
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
    class="group relative block overflow-hidden rounded-xl bg-muted/40 focus-ring transition motion-press active:scale-[0.99] can-hover:hover:-translate-y-1"
  >
    <div class="aspect-4/3 w-full">
      <SitePicture
        preset="card"
        :src="image"
        :alt="imageAlt"
        class="block size-full"
        :preload="priority ? { fetchPriority: 'high' } : false"
        :loading="priority ? 'eager' : 'lazy'"
        :img-attrs="{ class: 'size-full object-cover transition-transform duration-700 ease-out can-hover:group-hover:scale-105' }"
      />
    </div>

    <!-- Literal black/white: sits on a photo, not theme tokens. -->
    <div
      class="pointer-events-none absolute inset-0 bg-linear-to-t from-black/85 via-black/40 to-transparent"
      aria-hidden="true"
    />
    <div
      class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/10 transition-colors motion-press ring-inset group-active:ring-primary/40 can-hover:group-hover:ring-primary/40"
      aria-hidden="true"
    />

    <ServiceIconBadge
      :name="icon"
      tone="media"
      class="absolute inset-s-4 top-4"
    />

    <div class="absolute inset-x-0 bottom-0 stack-xs card-p">
      <h2 class="text-(length:--size-h3) leading-[1.45] font-medium text-white">
        {{ title }}
      </h2>
      <p class="text-sm/relaxed text-white/75">
        {{ description }}
      </p>
    </div>
  </NuxtLink>
</template>
