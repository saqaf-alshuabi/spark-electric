<script setup lang="ts">
import { whyChooseUs } from '@/shared/data'
</script>

<template>
  <section class="section-y">
    <UContainer class="stack-md items-center">
      <div class="stack-sm items-center text-center">
        <h2 class="reveal">
          لماذا تختارنا؟
        </h2>
        <p class="reveal">
          ثقة ووضوح في كل خطوة من التشخيص حتى التنفيذ
        </p>
      </div>

      <ul class="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
        <li
          v-for="item in whyChooseUs"
          :key="item.title"
          class="reveal stack-sm rounded-lg bg-muted/60 px-4 py-5 transition-transform duration-300 hover:-translate-y-1 sm:px-5"
        >
          <h3>
            {{ item.title }}
          </h3>
          <p>
            {{ item.description }}
          </p>
        </li>
      </ul>
    </UContainer>
  </section>
</template>
