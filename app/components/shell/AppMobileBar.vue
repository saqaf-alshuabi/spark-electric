<script setup lang="ts">
const { isVisible } = useMobileBarVisibility()

const spacerHeight = computed(() =>
  isVisible.value
    ? 'calc(3.75rem + env(safe-area-inset-bottom, 0px))'
    : '0px',
)
</script>

<template>
  <nav
    class="fixed inset-x-0 bottom-0 z-50 border-t border-default/60 bg-default/80 pb-[env(safe-area-inset-bottom,0px)] backdrop-blur-md transition-[transform,opacity] duration-300 ease-out motion-reduce:transition-none lg:hidden"
    :class="[
      isVisible
        ? 'pointer-events-auto translate-y-0 opacity-100'
        : 'pointer-events-none translate-y-full opacity-0',
    ]"
    :inert="!isVisible"
    aria-label="تواصل"
  >
    <div class="grid grid-cols-2 gap-2 p-2">
      <ContactButton
        channel="whatsapp"
        block
        size="lg"
        class="min-h-11"
      />
      <ContactButton
        channel="phone"
        variant="outline"
        block
        size="lg"
        class="min-h-11"
      />
    </div>
  </nav>

  <div
    class="lg:hidden"
    :style="{ height: spacerHeight }"
    aria-hidden="true"
  />
</template>
