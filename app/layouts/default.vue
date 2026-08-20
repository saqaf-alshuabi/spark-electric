<template>
  <div class="flex min-h-dvh flex-col">
    <SiteLayoutsHeader />
    <UMain class="flex-1">
      <slot />
    </UMain>
    <SiteLayoutsFooter />
    <SiteLayoutsMobileActionBar />
  </div>
</template>
