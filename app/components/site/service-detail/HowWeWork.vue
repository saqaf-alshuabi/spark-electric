<script setup lang="ts">
import { howWeWorkSteps } from '@/shared/data'
</script>

<template>
  <section class="section-y bg-muted">
    <UContainer class="stack-md items-center">
      <div class="stack-sm items-center text-center">
        <h2 class="reveal">
          من واتساب لين التسليم
        </h2>
        <p class="reveal">
          واتساب، سعر، شغل
        </p>
      </div>

      <ol class="relative w-full mx-auto md:max-w-2xl">
        <li
          v-for="(step, index) in howWeWorkSteps"
          :key="step.title"
          class="reveal group relative flex gap-3 pb-6 last:pb-0 md:gap-4 md:pb-8"
        >
          <div
            class="absolute start-4 top-8 bottom-0 w-px bg-accented group-last:hidden md:start-5 md:top-10"
            aria-hidden="true"
          />

          <div
            class="relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-inverted md:size-10 md:text-base"
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
        </li>
      </ol>
    </UContainer>
  </section>
</template>
