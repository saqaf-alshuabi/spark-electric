<script setup lang="ts">
const { site } = useAppConfig();
</script>

<template>
  <section class="section-y">
    <UContainer>
      <div class="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
        <div class="content-w mx-auto stack-md items-center md:mx-0 md:items-start">
          <h1 class="text-center md:text-start">
            {{ site.tagline }}
            <span class="mt-1 block">
              في
              <span class="text-primary">{{ site.city }}</span>
            </span>
          </h1>
          <SiteHomeServiceBadge class="w-full" />
        </div>
        <SiteSectionsCardService />
      </div>
    </UContainer>
  </section>
</template>
