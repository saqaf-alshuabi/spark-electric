<script setup lang="ts">
const { ui } = useAppConfig()
const route = useRoute()
const { whatsappUrl, phoneUrl } = useContact()
</script>

<template>
  <template v-if="!route.meta.hideMobileActionBar">
    <nav
      class="fixed inset-x-0 bottom-0 z-50 border-t border-default bg-default lg:hidden"
      aria-label="تواصل"
    >
      <div class="grid grid-cols-2 gap-2 p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
        <UButton
          :to="whatsappUrl"
          target="_blank"
          rel="noopener noreferrer"
          label="واتساب"
          :icon="ui.icons.whatsapp"
          block
        />
        <UButton
          :to="phoneUrl"
          label="اتصال"
          :icon="ui.icons.phone"
          variant="outline"
          block
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
