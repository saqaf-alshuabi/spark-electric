<script setup lang="ts">
import { serviceSlides } from '@/shared/data'

const activeIndex = ref(0)

const activeSlide = computed(() => serviceSlides[activeIndex.value]!)

useIntervalFn(() => {
  activeIndex.value = (activeIndex.value + 1) % serviceSlides.length
}, 4000)

const goToSlide = (index: number) => {
  activeIndex.value = index
}
</script>

<template>
  <div class="mx-auto stack-sm w-full max-w-md items-center">
    <div class="relative w-full">
      <div class="relative aspect-3/2 w-full overflow-hidden">
        <Transition
          name="slide-image"
          mode="out-in"
        >
          <NuxtImg
            :key="activeSlide.src"
            :src="activeSlide.src"
            :alt="activeSlide.alt"
            class="absolute inset-0 size-full object-cover brightness-[0.92] saturate-[0.88]"
            sizes="320px sm:384px md:448px"
          />
        </Transition>

        <div
          class="pointer-events-none absolute inset-0 bg-linear-to-t from-default via-default/25 to-default/45"
          aria-hidden="true"
        />
        <div
          class="pointer-events-none absolute inset-y-0 start-0 w-1/4 bg-linear-to-e from-default to-transparent"
          aria-hidden="true"
        />
        <div
          class="pointer-events-none absolute inset-y-0 end-0 w-1/4 bg-linear-to-s from-default to-transparent"
          aria-hidden="true"
        />
      </div>

      <Transition
        name="slide-caption"
        mode="out-in"
      >
        <p
          :key="activeSlide.caption"
          class="caption-sm relative z-10 -mt-8 text-center"
        >
          {{ activeSlide.caption }}
        </p>
      </Transition>
    </div>

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
        class="h-1.5 rounded-full transition-all duration-300"
        :class="index === activeIndex ? 'w-5 bg-primary' : 'w-1.5 bg-muted/40 hover:bg-muted/60'"
        :aria-selected="index === activeIndex"
        :aria-label="slide.caption"
        @click="goToSlide(index)"
      />
    </div>
  </div>
</template>
