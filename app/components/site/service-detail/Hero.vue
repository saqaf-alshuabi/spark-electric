<script setup lang="ts">
import type { ServiceDetail } from '~/shared/types/site'

const { whatsappUrl } = useContact()
const { service } = defineProps<{ service: ServiceDetail }>()
const { ui } = useAppConfig()
const images = ref([...service.gallery])

const canSwap = (index: number) =>
  index > 0 && index < images.value.length

const selectImage = (index: number) => {
  if (!canSwap(index)) return

  const big = images.value[0]
  const next = images.value[index]
  if (!big || !next) return

  images.value[0] = next
  images.value[index] = big
}
</script>

<template>
  <section class="section-y">
    <UContainer class="grid  grid-cols-1 items-start gap-8 md:grid-cols-2 md:gap-12">
      <div class="stack-sm">
        <div class="aspect-4/3 overflow-hidden rounded-lg bg-muted/40">
          <Transition
            name="slide-image"
            mode="out-in"
          >
            <NuxtImg
              :key="images[0]?.src"
              :src="images[0]?.src"
              :alt="images[0]?.alt"
              class="size-full object-contain"
              sizes="100vw md:50vw"
            />
          </Transition>
        </div>

        <ul
          v-if="images.length > 1"
          class="grid grid-cols-3 gap-2"
        >
          <li
            v-for="(shot, index) in images.slice(1)"
            :key="shot.src"
            class="aspect-square overflow-hidden rounded-md bg-muted/40 cursor-pointer focus-ring"
            @click="selectImage(index + 1)"
          >
            <NuxtImg
              :src="shot.src"
              :alt="shot.alt"
              class="size-full object-cover"
              sizes="280px"
            />
          </li>
        </ul>
      </div>

      <div class="stack-md">
        <div class="stack-sm">
          <h1>
            {{ service.title }}
          </h1>
          <p>
            {{ service.body }}
          </p>
        </div>

        <ul class="stack-sm">
          <li
            v-for="item in service.highlights"
            :key="item"
            class="flex items-center gap-2 text-sm text-highlighted sm:text-base "
          >
            <UIcon
              :name="ui.icons.check"
              class="size-5 shrink-0 text-primary"
            />
            {{ item }}
          </li>
        </ul>

        <div class="flex flex-wrap gap-3 ">
          <UButton
            :to="whatsappUrl"
            target="_blank"
            rel="noopener noreferrer"
            label="واتساب"
            :icon="ui.icons.whatsapp"
          />
          <UButton
            to="/services"
            label="كل الخدمات"
            variant="soft"
            :trailing-icon="ui.icons.arrowLeft"
          />
        </div>
      </div>
    </UContainer>
  </section>
</template>
