<script setup lang="ts">
const { site } = useAppConfig();
</script>

<template>
  <section class="section-y">
    <UContainer class="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-16 ">
      <div class="content-w mx-auto stack-md items-center md:mx-0 md:items-start">
        <h1 class="text-center md:text-right">
          أبو تميم الكهربائي
          <span class="mt-1 block">
            في
            <span class="text-primary">{{ site.city }}</span>
          </span>
        </h1>
        <SiteHomeServiceBadge class="w-full " />
      </div>
      <SiteSectionsCardService class="bg-neutral  rounded-xl" />
    </UContainer>
  </section>
  <section class="section-y bg-neutral-200">
    <UContainer>
      <h2 class="text-center">
        خدماتنا
      </h2>
      <p class="text-center">
        نقدم خدمات الكهرباء المنزلية والتجارية والصناعية
      </p>
      <div class="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
        <div class="content-w mx-auto stack-md items-center md:mx-0 md:items-start" />
      </div>
    </UContainer>
  </section>
</template>
