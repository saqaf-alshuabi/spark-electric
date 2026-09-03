<script setup lang="ts">
import { serviceSlides } from '@/shared/data'

const SLIDE_MS = 3500

const activeIndex = ref(0)
const prefersReducedMotion = usePreferredReducedMotion()

const activeSlide = computed(() => serviceSlides[activeIndex.value]!)

const { pause, resume } = useIntervalFn(() => {
  activeIndex.value = (activeIndex.value + 1) % serviceSlides.length
}, SLIDE_MS)

watchImmediate(prefersReducedMotion, (value) => {
  if (value === 'reduce') pause()
  else resume()
})

// Restart the countdown so a tapped slide gets its full turn
const goToSlide = (index: number) => {
  activeIndex.value = index

  if (prefersReducedMotion.value !== 'reduce') {
    pause()
    resume()
  }
}
</script>

<template>
  <div
    class="stack-sm w-full items-center"
    :style="{ '--slide-ms': `${SLIDE_MS}ms` }"
    role="group"
    aria-roledescription="carousel"
    aria-label="معرض أعمال الكهرباء"
  >
    <div class="w-full rounded-3xl card-ring p-px shadow-2xl shadow-black/40">
      <div class="relative aspect-16/10 w-full overflow-hidden rounded-[calc(1.5rem-1px)] bg-muted/40">
        <!-- Warm the cache. soft-fade remounts the visible picture; without
             this, slides 2+ often never finish loading. -->
        <div
          class="pointer-events-none absolute inset-0 -z-10 overflow-hidden opacity-0"
          aria-hidden="true"
        >
          <NuxtPicture
            v-for="slide in serviceSlides"
            :key="`preload-${slide.src}`"
            :src="slide.src"
            :alt="slide.alt"
            class="block size-full"
            loading="eager"
            :img-attrs="{ class: 'size-full object-cover' }"
            sizes="100vw md:50vw lg:640px"
          />
        </div>

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
              sizes="100vw md:50vw lg:640px"
            />
          </div>
        </Transition>

        <div
          class="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-t from-black/80 via-black/40 to-transparent"
          aria-hidden="true"
        />

        <Transition
          name="soft-fade"
          mode="out-in"
        >
          <!-- White on the scrim, not a theme token: this sits on a photo -->
          <p
            :key="activeSlide.src"
            class="absolute inset-x-0 bottom-0 p-4 caption text-white"
          >
            {{ activeSlide.caption }}
          </p>
        </Transition>
      </div>
    </div>

    <div class="flex justify-center">
      <button
        v-for="(slide, index) in serviceSlides"
        :key="slide.src"
        type="button"
        class="group flex size-11 items-center justify-center focus-ring"
        :aria-current="index === activeIndex"
        :aria-label="slide.alt"
        @click="goToSlide(index)"
      >
        <span
          class="h-1 overflow-hidden rounded-full bg-muted/60 transition-all duration-300"
          :class="index === activeIndex ? 'w-7' : 'w-1.5 group-hover:bg-muted'"
        >
          <span
            v-if="index === activeIndex"
            :key="activeIndex"
            class="slide-progress block h-full rounded-full bg-primary"
          />
        </span>
      </button>
    </div>
  </div>
</template>
