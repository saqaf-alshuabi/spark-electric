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
    class="group stack-sm focus-ring h-full rounded-lg bg-muted/50 p-3 transition-colors hover:bg-muted active:bg-accented sm:p-4"
  >
    <div class="aspect-16/10 overflow-hidden rounded-md bg-default/40">
      <NuxtImg
        :src="image"
        :alt="imageAlt"
        class="size-full object-contain transition-transform duration-500 group-hover:scale-[1.03] group-active:scale-[1.02]"
        sizes="100vw md:50vw"
      />
    </div>

    <div class="flex items-start justify-between gap-3">
      <div class="stack-sm min-w-0">
        <h3>
          {{ title }}
        </h3>
        <p>
          {{ description }}
        </p>
        <ul class="flex flex-wrap gap-x-3 gap-y-1 text-sm text-muted">
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
