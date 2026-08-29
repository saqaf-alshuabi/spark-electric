<script setup lang="ts">
import { serviceSlides } from '@/shared/data'

const activeIndex = ref(0)
const prefersReducedMotion = usePreferredReducedMotion()

const activeSlide = computed(() => serviceSlides[activeIndex.value]!)

const { pause, resume } = useIntervalFn(() => {
  activeIndex.value = (activeIndex.value + 1) % serviceSlides.length
}, 5500)

watchImmediate(prefersReducedMotion, (value) => {
  if (value === 'reduce') pause()
  else resume()
})

const goToSlide = (index: number) => {
  activeIndex.value = index
}
</script>

<template>
  <div class="stack-sm w-full items-center">
    <div class="relative aspect-16/10 w-full overflow-hidden rounded-lg bg-muted/40">
      <Transition name="soft-fade">
        <div
          :key="activeSlide.src"
          class="absolute inset-0 overflow-hidden"
        >
          <NuxtPicture
            :src="activeSlide.src"
            :alt="activeSlide.alt"
            class="block size-full"
            :preload="{ fetchPriority: 'high' }"
            loading="eager"
            :img-attrs="{ class: 'size-full object-cover' }"
            sizes="100vw lg:448px"
          />
        </div>
      </Transition>
    </div>

    <p class="caption text-center">
      {{ activeSlide.caption }}
    </p>

    <div
      class="flex justify-center gap-0.5"
      role="tablist"
      aria-label="معرض أعمال الكهرباء"
    >
      <button
        v-for="(slide, index) in serviceSlides"
        :key="slide.src"
        type="button"
        role="tab"
        class="flex size-6 items-center justify-center"
        :aria-selected="index === activeIndex"
        :aria-label="slide.caption"
        @click="goToSlide(index)"
      >
        <span
          class="h-1 rounded-full transition-all duration-300"
          :class="index === activeIndex ? 'w-4 bg-primary' : 'w-1 bg-muted/40'"
        />
      </button>
    </div>
  </div>
</template>
