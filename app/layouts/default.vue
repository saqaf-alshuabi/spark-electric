<template>
  <div class="flex min-h-dvh flex-col">
    <SiteLayoutsHeader />

    <UMain class="flex-1 pb-24 lg:pb-0">
      <slot />
    </UMain>

    <SiteLayoutsFooter />
    <SiteLayoutsMobileActionBar />
  </div>
</template>
