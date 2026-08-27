<script setup lang="ts">
import { site } from '@/shared/data'
</script>

<template>
  <section class="section-y">
    <UContainer class="grid grid-cols-1 items-center gap-6 md:grid-cols-2 lg:gap-12">
      <div class=" mx-auto stack-md items-center md:mx-0 md:items-start">
        <h1 class="flex w-full flex-col items-center gap-1 text-wrap-normal md:items-start">
          <span>{{ site.name }}</span>
          <span class="text-sm font-medium text-muted md:text-lg">
            في
            <span class="text-primary">{{ site.city }}</span>
            وضواحيها
          </span>
        </h1>
        <p class="hidden text-start lg:block">
          نأسس ونركّب للبيت والمحل
          وإذا صار عطل، نجي
        </p>
      </div>
      <SiteSectionsCardService />
    </UContainer>
  </section>
</template>
