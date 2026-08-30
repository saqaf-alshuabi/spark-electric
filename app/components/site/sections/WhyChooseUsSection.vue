<script setup lang="ts">
import { whyChooseUs } from '@/shared/data'
</script>

<template>
  <section class="section-y">
    <UContainer class="stack-md items-center">
      <div class="stack-sm items-center text-center">
        <h2 class="reveal">
          اللي يهمك
        </h2>
        <p>
          قبل لا نبدأ الشغل
        </p>
      </div>

      <ul class="grid w-full grid-cols-1 grid-gap md:grid-cols-2">
        <li
          v-for="item in whyChooseUs"
          :key="item.title"
          class="stack-sm card-p rounded-lg bg-muted/50"
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
