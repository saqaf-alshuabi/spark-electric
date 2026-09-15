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
    class="group relative block overflow-hidden rounded-xl bg-muted/40 focus-ring transition duration-75 ease-out active:scale-[0.99] can-hover:duration-300 can-hover:hover:-translate-y-1"
  >
    <div class="aspect-4/3 w-full">
      <NuxtPicture
        :src="image"
        :alt="imageAlt"
        class="block size-full"
        legacy-format="webp"
        :preload="priority ? { fetchPriority: 'high' } : false"
        :loading="priority ? 'eager' : 'lazy'"
        :img-attrs="{ class: 'size-full object-cover transition-transform duration-700 ease-out can-hover:group-hover:scale-105' }"
        sizes="sm:92vw md:45vw lg:420px"
      />
    </div>

    <!-- Literal black/white below: this chrome sits on a photo, not on the theme -->
    <div
      class="pointer-events-none absolute inset-0 bg-linear-to-t from-black/85 via-black/40 to-transparent"
      aria-hidden="true"
    />
    <div
      class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/10 transition-colors duration-75 ring-inset group-active:ring-primary/40 can-hover:duration-300 can-hover:group-hover:ring-primary/40"
      aria-hidden="true"
    />

    <span class="absolute inset-s-4 top-4 flex size-11 items-center justify-center rounded-lg border border-white/15 bg-black/30 backdrop-blur-md transition-colors duration-75 group-active:bg-primary can-hover:duration-300 can-hover:group-hover:bg-primary">
      <UIcon
        :name="icon"
        class="size-5 text-primary transition-colors duration-75 group-active:text-inverted can-hover:duration-300 can-hover:group-hover:text-inverted"
      />
    </span>

    <div class="absolute inset-x-0 bottom-0 stack-xs card-p">
      <h3 class="text-white">
        {{ title }}
      </h3>
      <p class="text-sm/relaxed text-white/75">
        {{ description }}
      </p>
    </div>
  </NuxtLink>
</template>
