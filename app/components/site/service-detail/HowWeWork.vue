<script setup lang="ts">
import { howWeWorkSteps } from '@/shared/data'
import { MOTION_DELAY, motionStagger } from '@/utils/motion'
</script>

<template>
  <section class="section-y bg-muted">
    <UContainer class="stack-md items-center">
      <div class="stack-sm items-center text-center">
        <SharedReveal :delay="MOTION_DELAY.heading">
          <h2>
            كيف نشتغل؟
          </h2>
        </SharedReveal>
        <SharedReveal :delay="MOTION_DELAY.copy">
          <p>
            ثلاث خطوات واضحة من الاستفسار حتى التسليم
          </p>
        </SharedReveal>
      </div>

      <ol class="relative w-full mx-auto md:max-w-2xl">
        <SharedReveal
          v-for="(step, index) in howWeWorkSteps"
          :key="step.title"
          tag="li"
          :delay="motionStagger(index)"
          class="group relative flex gap-4 pb-8 last:pb-0"
        >
          <div
            class="absolute start-5 top-10 bottom-0 w-px bg-accented group-last:hidden"
            aria-hidden="true"
          />

          <div
            class="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full bg-primary font-semibold text-inverted"
          >
            <span class="mono-nums">{{ index + 1 }}</span>
          </div>

          <div class="stack-sm min-w-0 flex-1">
            <h3>
              {{ step.title }}
            </h3>
            <p>
              {{ step.description }}
            </p>
          </div>
        </SharedReveal>
      </ol>
    </UContainer>
  </section>
</template>
