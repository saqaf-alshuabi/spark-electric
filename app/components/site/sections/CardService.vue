<script setup lang="ts">
import { serviceSlides } from '@/shared/data/site';

const activeIndex = ref(0);

useIntervalFn(() => {
  activeIndex.value = (activeIndex.value + 1) % serviceSlides.length;
}, 4000);
</script>

<template>
  <div class="mx-auto w-full max-w-lg stack-sm items-center md:mx-0 md:max-w-none">
    <div class="relative aspect-4/3 w-full overflow-hidden">
      <Transition
        name="slide-image"
        mode="out-in"
      >
        <NuxtImg
          :key="serviceSlides[activeIndex]!.src"
          :src="serviceSlides[activeIndex]!.src"
          :alt="serviceSlides[activeIndex]!.alt"
          class="absolute inset-0 size-full object-contain"
          sizes="384px sm:448px md:560px lg:640px"
        />
      </Transition>
    </div>

    <Transition
      name="slide-caption"
      mode="out-in"
    >
      <p
        :key="serviceSlides[activeIndex]!.caption"
        class="caption-sm text-center"
      >
        {{ serviceSlides[activeIndex]!.caption }}
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
        class="h-1.5 rounded-full transition-all duration-300"
        :class="index === activeIndex ? 'w-5 bg-primary' : 'w-1.5 bg-muted/40 hover:bg-muted/60'"
        :aria-selected="index === activeIndex"
        :aria-label="slide.caption"
        @click="activeIndex = index"
      />
    </div>
  </div>
</template>
