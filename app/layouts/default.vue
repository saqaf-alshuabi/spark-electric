<template>
  <div class="flex min-h-dvh flex-col pb-24 lg:pb-0">
    <SiteLayoutsHeader />
    <UMain class="flex-1">
      <slot />
    </UMain>
    <SiteLayoutsFooter />
    <SiteLayoutsMobileActionBar />
  </div>
</template>
