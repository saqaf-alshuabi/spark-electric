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
  <div class="stack-sm w-full items-center md:mx-auto md:max-w-md">
    <div
      class="relative aspect-3/2 w-[calc(100%+2rem)] overflow-hidden -mx-4 rounded-none sm:w-[calc(100%+3rem)] sm:-mx-6 md:mx-0 md:w-full md:rounded-xl"
    >
      <Transition
        name="soft-image"
        mode="out-in"
      >
        <NuxtImg
          :key="activeSlide.src"
          :src="activeSlide.src"
          :alt="activeSlide.alt"
          class="absolute inset-0 size-full object-cover"
          sizes="100vw md:448px"
        />
      </Transition>

      <div
        class="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-t from-default to-transparent"
        aria-hidden="true"
      />
    </div>

    <Transition
      name="soft-caption"
      mode="out-in"
    >
      <p
        :key="activeSlide.caption"
        class="caption relative z-10 -mt-6 px-4 text-center md:px-0"
      >
        {{ activeSlide.caption }}
      </p>
    </Transition>

    <div
      class="flex justify-center gap-1.5"
      role="tablist"
      aria-label="معرض أعمال الكهرباء"
    >
      <button
        v-for="(slide, index) in serviceSlides"
        :key="slide.src"
        type="button"
        role="tab"
        class="flex size-8 items-center justify-center"
        :aria-selected="index === activeIndex"
        :aria-label="slide.caption"
        @click="goToSlide(index)"
      >
        <span
          class="h-1.5 rounded-full transition-all duration-300"
          :class="index === activeIndex ? 'w-5 bg-primary' : 'w-1.5 bg-muted/40'"
        />
      </button>
    </div>
  </div>
</template>
