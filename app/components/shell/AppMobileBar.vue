<script setup lang="ts">
const route = useRoute()

/** Past the hero's own buttons on a phone — below this the bar would duplicate them */
const HERO_CTA_SCROLL_END = 320

const { y } = useWindowScroll()
const isVisible = computed(() => y.value > HERO_CTA_SCROLL_END)
</script>

<template>
  <template v-if="!route.meta.hideMobileActionBar">
    <nav
      class="fixed inset-x-0 bottom-0 z-50 border-t border-default bg-default/75 backdrop-blur-sm transition-transform duration-300 ease-out motion-reduce:transition-none lg:hidden"
      :class="isVisible ? 'translate-y-0' : 'translate-y-full'"
      :inert="!isVisible"
      aria-label="تواصل"
    >
      <div class="grid grid-cols-2 gap-2 p-2 ps-[max(0.5rem,env(safe-area-inset-left,0px))] pe-[max(0.5rem,env(safe-area-inset-right,0px))] pb-[max(0.5rem,env(safe-area-inset-bottom,0px))]">
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
      class="lg:hidden"
      :style="{ height: 'calc(3.75rem + 1px + env(safe-area-inset-bottom, 0px))' }"
      aria-hidden="true"
    />
  </template>
</template>
