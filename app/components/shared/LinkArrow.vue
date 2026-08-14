<script setup lang="ts">
const { ui } = useAppConfig()

const sizeClass = {
  sm: 'size-4',
  md: 'size-5',
} as const

const colorClass = {
  primary: 'text-primary',
  muted: 'text-muted',
  highlighted: 'text-highlighted',
} as const

const {
  size = 'md',
  color = 'primary',
  iconName,
  reveal = 'always',
  active = false,
} = defineProps<{
  size?: keyof typeof sizeClass
  color?: keyof typeof colorClass
  iconName?: string
  reveal?: 'always' | 'hover'
  active?: boolean
}>()

const revealClass = computed(() =>
  reveal === 'always' || active
    ? 'opacity-100'
    : 'opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100',
)

const icon = iconName ?? ui.icons.arrowLeft
</script>

<template>
  <UIcon
    :name="icon"
    class="shrink-0 transition-all duration-300 group-hover:-translate-x-0.5"
    :class="[sizeClass[size], colorClass[color], revealClass]"
    aria-hidden="true"
  />
</template>
