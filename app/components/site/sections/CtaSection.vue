<script setup lang="ts">
const { ui } = useAppConfig()
const { whatsappUrl, phoneUrl } = useContact()
</script>

<template>
  <section class="section-y bg-muted">
    <UContainer class="stack-md items-center">
      <div class="stack-sm items-center text-center">
        <h2 class="reveal">
          تحتاج كهربائي في مكة؟
        </h2>
        <p class="reveal">
          تواصل معنا الآن لتشخيص سريع وتسعير واضح
        </p>
      </div>

      <div class="reveal flex flex-wrap items-center justify-center gap-3">
        <UButton
          :to="whatsappUrl"
          target="_blank"
          rel="noopener noreferrer"
          label="واتساب"
          :icon="ui.icons.whatsapp"
          size="lg"
        />
        <UButton
          :to="phoneUrl"
          label="اتصال"
          :icon="ui.icons.phone"
          variant="outline"
          size="md"
        />
      </div>
    </UContainer>
  </section>
</template>
