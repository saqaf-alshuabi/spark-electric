<script setup lang="ts">
const { site } = useAppConfig();
</script>

<template>
  <section class="section-y">
    <UContainer>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24">
        <div class="stack-lg items-center md:items-start">
          <h1 class="max-w-xs text-center sm:max-w-sm md:max-w-md md:text-start">
            {{ site.tagline }}
            <span class="mt-1 block">
              في
              <span class="text-primary">{{ site.city }}</span>
            </span>
          </h1>

          <SiteHomeServiceBadge class="w-full" />
        </div>
      </div>
    </UContainer>
  </section>
</template>
