<script setup lang="ts">
import { howWeWorkSteps } from '@/shared/data'

const listRef = ref<HTMLElement | null>(null)
const visible = ref(false)

useIntersectionObserver(
  listRef,
  ([entry]) => {
    if (entry?.isIntersecting) {
      visible.value = true
    }
  },
  { threshold: 0.2 },
)
</script>

<template>
  <section class="section-y bg-muted">
    <UContainer class="stack-md mx-auto max-w-2xl">
      <div class="stack-sm text-center">
        <h2>
          كيف نشتغل؟
        </h2>
        <p>
          ثلاث خطوات واضحة من الاستفسار حتى التسليم
        </p>
      </div>

      <ol
        ref="listRef"
        class="relative list-none"
        :class="visible ? 'how-steps--in' : 'how-steps'"
      >
        <li
          v-for="(step, index) in howWeWorkSteps"
          :key="step.title"
          class="how-step relative flex gap-4 pb-8 last:pb-0 sm:gap-5"
          :style="{ '--i': index }"
        >
          <div
            v-if="index < howWeWorkSteps.length - 1"
            class="absolute start-4 top-10 bottom-0 w-px bg-accented sm:start-5"
            aria-hidden="true"
          />

          <div
            class="relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-inverted sm:size-10 sm:text-base"
          >
            <span class="mono-nums">{{ index + 1 }}</span>
          </div>

          <div class="stack-sm min-w-0 flex-1 pt-0.5 sm:pt-1.5">
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

<style scoped>
.how-steps .how-step {
  opacity: 0;
  transform: translateY(0.75rem);
}

.how-steps--in .how-step {
  opacity: 1;
  transform: translateY(0);
  transition:
    opacity 0.45s ease,
    transform 0.45s ease;
  transition-delay: calc(var(--i) * 90ms);
}

@media (prefers-reduced-motion: reduce) {
  .how-steps .how-step,
  .how-steps--in .how-step {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
</style>
