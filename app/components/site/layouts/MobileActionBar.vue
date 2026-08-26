<script setup lang="ts">
const { ui } = useAppConfig()
const route = useRoute()
const { whatsappUrl, phoneUrl } = useContact()
</script>

<template>
  <template v-if="!route.meta.hideMobileActionBar">
    <nav
      class="fixed inset-x-0 bottom-0 z-50 border-t border-default bg-default/75 backdrop-blur-sm lg:hidden"
      aria-label="تواصل"
    >
      <div class="grid grid-cols-2 gap-2 p-2 ps-[max(0.5rem,env(safe-area-inset-left,0px))] pe-[max(0.5rem,env(safe-area-inset-right,0px))] pb-[max(0.5rem,env(safe-area-inset-bottom,0px))]">
        <UButton
          :to="whatsappUrl"
          target="_blank"
          rel="noopener noreferrer"
          label="واتساب"
          :icon="ui.icons.whatsapp"
          block
          size="sm"
        />
        <UButton
          :to="phoneUrl"
          label="اتصال"
          :icon="ui.icons.phone"
          variant="outline"
          block
          size="sm"
        />
      </div>
    </nav>
    <div
      class="lg:hidden"
      :style="{ height: 'calc(3.5rem + env(safe-area-inset-bottom, 0px))' }"
      aria-hidden="true"
    />
  </template>
</template>
