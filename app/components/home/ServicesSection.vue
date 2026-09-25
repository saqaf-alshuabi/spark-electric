<script setup lang="ts">
import { homeServices } from '~/shared/data/services'

const { ui } = useAppConfig()
</script>

<template>
  <section class="section-y">
    <UContainer class="stack-md items-center">
      <h2 class="reveal">
        اللي نسويه
      </h2>

      <ul class="grid w-full grid-cols-2 grid-gap md:grid-cols-3">
        <li
          v-for="(service, index) in homeServices"
          :key="service.title"
          class="reveal"
          :class="{
            'col-span-2': index === 0,
            'col-span-2 md:col-span-3': index === homeServices.length - 1,
          }"
        >
          <ServiceCard
            v-bind="service"
            :wide="index === 0 || index === homeServices.length - 1"
          />
        </li>
      </ul>

      <div>
        <UButton
          to="/services"
          label="شوف الكل"
          :trailing-icon="ui.icons.arrowLeft"
          color="neutral"
          variant="link"
          class="group active:opacity-70"
          :ui="{ trailingIcon: 'transition-transform motion-press group-active:-translate-x-1 can-hover:group-hover:-translate-x-1' }"
        />
      </div>
    </UContainer>
  </section>
</template>
