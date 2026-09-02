<script setup lang="ts">
const route = useRoute()
const { isVisible } = useMobileBarVisibility()

const spacerHeight = computed(() =>
  isVisible.value
    ? 'calc(3.75rem + max(0.75rem, env(safe-area-inset-bottom, 0px)) + 0.75rem)'
    : '0px',
)
</script>

<template>
  <template v-if="!route.meta.hideMobileActionBar">
    <nav
      class="fixed inset-x-3 z-50 rounded-2xl border border-default/60 bg-default/80 shadow-2xl shadow-black/25 backdrop-blur-md transition-[transform,opacity] duration-300 ease-out motion-reduce:transition-none lg:hidden"
      :class="[
        isVisible
          ? 'pointer-events-auto translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-4 opacity-0',
      ]"
      :style="{ bottom: 'max(0.75rem, env(safe-area-inset-bottom, 0px))' }"
      :inert="!isVisible"
      aria-label="تواصل"
    >
      <div class="grid grid-cols-2 gap-2 p-2">
        <ContactButton
          channel="whatsapp"
          block
          size="xl"
          class="min-h-11"
        />
        <ContactButton
          channel="phone"
          variant="outline"
          block
          size="xl"
          class="min-h-11"
        />
      </div>
    </nav>

    <div
      class="transition-[height] duration-300 ease-out motion-reduce:transition-none lg:hidden"
      :style="{ height: spacerHeight }"
      aria-hidden="true"
    />
  </template>
</template>
