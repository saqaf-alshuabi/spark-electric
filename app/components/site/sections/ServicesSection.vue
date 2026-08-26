<script setup lang="ts">
import { homeServices } from '@/shared/data'

const { ui } = useAppConfig()
</script>

<template>
  <section class="section-y bg-muted">
    <UContainer class="stack-md items-center">
      <div class="stack-sm items-center text-center">
        <h2 class="reveal">
          خدماتنا
        </h2>
        <p class="reveal">
          تأسيس، إنارة، تكييف — للبيت والمحل
        </p>
      </div>

      <ul class="grid w-full grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
        <li
          v-for="service in homeServices"
          :key="service.title"
          class="reveal"
        >
          <SharedServiceCard v-bind="service" />
        </li>
      </ul>

      <div class="reveal">
        <UButton
          to="/services"
          label="كل الخدمات"
          variant="soft"
          :trailing-icon="ui.icons.arrowLeft"
        />
      </div>
    </UContainer>
  </section>
</template>
