<script setup lang="ts">
import { site } from '@/shared/data'
</script>

<template>
  <section class="section-y">
    <UContainer class="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
      <div class="content-w mx-auto stack-md items-center md:mx-0 md:items-start">
        <h1 class="flex w-full flex-col items-center gap-1 text-wrap-normal md:items-start">
          <span>أبو تيم الكهربائي</span>
          <span class="text-base font-medium text-muted sm:text-lg">
            في
            <span class="text-primary">{{ site.city }}</span>
            وضواحيها
          </span>
        </h1>
        <SiteHomeServiceBadge />
      </div>
      <SiteSectionsCardService />
    </UContainer>
  </section>
</template>
