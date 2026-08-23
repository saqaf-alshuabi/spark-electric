<script setup lang="ts">
import { isInFirstViewport, MOTION_DURATION } from '@/utils/motion'

const {
  delay = 0,
  tag = 'div',
  threshold = 0.2,
} = defineProps<{
  delay?: number
  tag?: string
  threshold?: number
}>()

const target = ref<HTMLElement | null>(null)
/** false = SSR + first viewport: visible, no animation */
const shouldAnimate = ref(false)
const isVisible = ref(false)

defineOptions({
  inheritAttrs: true,
})

const motionPreference = usePreferredReducedMotion()
const prefersReduced = computed(() => motionPreference.value === 'reduce')

const show = computed(() => !shouldAnimate.value || isVisible.value || prefersReduced.value)

const reveal = () => {
  isVisible.value = true
}

onMounted(async () => {
  if (prefersReduced.value) {
    return
  }

  await nextTick()

  const el = target.value
  if (!el) {
    return
  }

  if (isInFirstViewport(el)) {
    return
  }

  shouldAnimate.value = true
})

watch(prefersReduced, (reduce) => {
  if (reduce) {
    reveal()
  }
}, { immediate: true })

useIntersectionObserver(
  target,
  ([entry]) => {
    if (!shouldAnimate.value) {
      return
    }

    if (entry?.isIntersecting) {
      reveal()
    }
  },
  { threshold },
)
</script>

<template>
  <component
    :is="tag"
    ref="target"
    :class="{
      'reveal': shouldAnimate && !prefersReduced,
      'is-visible': show,
    }"
    :style="shouldAnimate && !prefersReduced
      ? {
        '--reveal-delay': `${delay}ms`,
        '--reveal-duration': `${MOTION_DURATION.reveal}ms`,
      }
      : undefined"
  >
    <slot />
  </component>
</template>
