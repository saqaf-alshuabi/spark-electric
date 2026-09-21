<script setup lang="ts">
import { serviceSlides } from '~/shared/data/services/slides'

const SLIDE_MS = 3500
const FADE_MS = 400

const activeIndex = ref(0)
/** Progress + autoplay after mount so CSS does not run ahead of JS. */
const ready = ref(false)
const prefersReducedMotion = usePreferredReducedMotion()

const activeSlide = computed(() => serviceSlides[activeIndex.value]!)

const { pause, resume } = useIntervalFn(() => {
  activeIndex.value = (activeIndex.value + 1) % serviceSlides.length
}, SLIDE_MS, { immediate: false })

watchImmediate(prefersReducedMotion, (value) => {
  if (value === 'reduce')
    pause()
})

onMounted(() => {
  ready.value = true

  if (prefersReducedMotion.value !== 'reduce')
    resume()
})

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
    :style="{ '--slide-ms': `${SLIDE_MS}ms`, '--fade-ms': `${FADE_MS}ms` }"
    role="group"
    aria-roledescription="carousel"
    aria-label="صور من شغلنا"
  >
    <div class="w-full rounded-xl card-ring p-px shadow-2xl shadow-black/40">
      <div class="relative aspect-16/10 w-full overflow-hidden rounded-xl bg-muted/40">
        <!-- Stacked so hidden slides still fetch (display:none would skip). -->
        <div
          v-for="(slide, index) in serviceSlides"
          :key="slide.src"
          class="absolute inset-0 overflow-hidden transition-opacity ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
          :class="index === activeIndex ? 'z-10 opacity-100' : 'z-0 opacity-0'"
          :style="{ transitionDuration: `var(--fade-ms)` }"
          :aria-hidden="index !== activeIndex"
        >
          <SitePicture
            preset="hero"
            :src="slide.src"
            :alt="index === activeIndex ? slide.alt : ''"
            class="block size-full"
            :preload="index === 0 ? { fetchPriority: 'high' } : false"
            :loading="index === 0 ? 'eager' : 'lazy'"
            :img-attrs="{
              class: 'size-full object-cover',
              fetchpriority: index === 0 ? 'high' : 'low',
            }"
          />
        </div>

        <div
          class="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-2/5 bg-linear-to-t from-black/80 via-black/40 to-transparent"
          aria-hidden="true"
        />

        <Transition name="soft-fade">
          <!-- Literal white: sits on a photo, not a theme token. -->
          <p
            :key="activeSlide.src"
            class="absolute inset-x-0 bottom-0 z-20 p-4 caption text-white"
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
        class="group flex size-11 items-center justify-center focus-ring transition motion-press active:scale-[0.96]"
        :aria-current="index === activeIndex"
        :aria-label="slide.alt"
        @click="goToSlide(index)"
      >
        <span class="relative h-1 w-7">
          <span
            class="block h-full origin-[inline-start] rounded-full bg-muted/60 transition-[transform,background-color] motion-press group-active:bg-muted can-hover:group-hover:bg-muted"
            :class="index === activeIndex ? 'scale-x-100' : 'scale-x-[0.214]'"
          />
          <span
            v-if="ready && index === activeIndex"
            :key="activeIndex"
            class="slide-progress pointer-events-none absolute inset-0 rounded-full bg-primary"
          />
        </span>
      </button>
    </div>
  </div>
</template>
