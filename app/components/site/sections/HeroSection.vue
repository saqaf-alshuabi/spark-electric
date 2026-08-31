<script setup lang="ts">
import { site } from '@/shared/data'
</script>

<template>
  <section class="section-y">
    <UContainer class="grid grid-cols-1 items-center split-gap md:grid-cols-2">
      <div class="mx-auto stack-md items-center md:mx-0 md:items-start">
        <h1 class="text-wrap-normal flex w-full flex-col items-center gap-2 md:items-start">
          <span>{{ site.name }}</span>
          <span class="text-base font-medium text-muted md:text-xl">
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
