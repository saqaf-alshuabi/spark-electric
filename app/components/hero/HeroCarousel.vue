<script setup lang="ts">
import { HERO_IMAGE_SIZES, serviceSlides } from '@/shared/data'

const SLIDE_MS = 3500

const activeIndex = ref(0)
const prefersReducedMotion = usePreferredReducedMotion()

const activeSlide = computed(() => serviceSlides[activeIndex.value]!)
const extraSlides = serviceSlides.slice(1)

const { pause, resume } = useIntervalFn(() => {
  activeIndex.value = (activeIndex.value + 1) % serviceSlides.length
}, SLIDE_MS, { immediate: false })

watchImmediate(prefersReducedMotion, (value) => {
  if (value === 'reduce') pause()
})

onMounted(() => {
  if (prefersReducedMotion.value === 'reduce') {
    return
  }

  const start = () => resume()

  if ('requestIdleCallback' in window) {
    requestIdleCallback(start, { timeout: 2500 })
    return
  }

  setTimeout(start, 1)
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
    :style="{ '--slide-ms': `${SLIDE_MS}ms` }"
    role="group"
    aria-roledescription="carousel"
    aria-label="معرض أعمال الكهرباء"
  >
    <div class="w-full rounded-xl card-ring p-px shadow-2xl shadow-black/40">
      <div class="relative aspect-16/10 w-full overflow-hidden rounded-xl bg-muted/40">
        <Transition name="soft-fade">
          <div
            :key="activeSlide.src"
            class="absolute inset-0 overflow-hidden"
          >
            <NuxtPicture
              :src="activeSlide.src"
              :alt="activeSlide.alt"
              class="block size-full"
              legacy-format="webp"
              :preload="activeIndex === 0 ? { fetchPriority: 'high' } : false"
              :loading="activeIndex === 0 ? 'eager' : 'lazy'"
              :img-attrs="{
                class: 'size-full object-cover',
                fetchpriority: activeIndex === 0 ? 'high' : 'auto',
              }"
              :sizes="HERO_IMAGE_SIZES"
            />
          </div>
        </Transition>

        <!-- Hidden so Nitro still bakes the other /_ipx files. -->
        <div
          class="hidden"
          aria-hidden="true"
        >
          <NuxtPicture
            v-for="slide in extraSlides"
            :key="slide.src"
            :src="slide.src"
            alt=""
            class="block size-full"
            legacy-format="webp"
            loading="lazy"
            :sizes="HERO_IMAGE_SIZES"
          />
        </div>

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
        <span class="relative h-1 w-7">
          <span
            class="block h-full origin-[inline-start] rounded-full bg-muted/60 transition-transform duration-300 group-hover:bg-muted"
            :class="index === activeIndex ? 'scale-x-100' : 'scale-x-[0.214]'"
          />
          <span
            v-if="index === activeIndex"
            :key="activeIndex"
            class="slide-progress pointer-events-none absolute inset-0 rounded-full bg-primary"
          />
        </span>
      </button>
    </div>
  </div>
</template>
