<script setup lang="ts">
import { homeServices } from '@/shared/data'
</script>

<template>
  <section class="section-y">
    <UContainer class="stack-md items-center">
      <div class="stack-sm items-center text-center">
        <h2 class="reveal">
          خدمات
        </h2>
        <p>
          للبيت والمحل
        </p>
      </div>

      <ul class="grid w-full grid-cols-2 grid-gap md:grid-cols-3">
        <li
          v-for="service in homeServices"
          :key="service.title"
        >
          <SharedServiceCard v-bind="service" />
        </li>
      </ul>

      <div>
        <UButton
          to="/services"
          label="كل الخدمات"
          color="neutral"
          variant="link"
        />
      </div>
    </UContainer>
  </section>
</template>
