<script setup lang="ts">
import { homeServices } from '@/shared/data'

const { ui } = useAppConfig()
</script>

<template>
  <section class="section-y bg-muted">
    <UContainer class="stack-md items-center">
      <div class="stack-sm items-center text-center">
        <h2>
          خدماتنا
        </h2>
        <p>
          نقدم خدمات الكهرباء المنزلية والتجارية
        </p>
      </div>

      <ul class="grid w-full grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-5">
        <li
          v-for="service in homeServices"
          :key="service.title"
        >
          <SharedServiceCard v-bind="service" />
        </li>
      </ul>

      <UButton
        to="/services"
        label="عرض كل الخدمات"
        variant="soft"
        :trailing-icon="ui.icons.arrowLeft"
      />
    </UContainer>
  </section>
</template>
