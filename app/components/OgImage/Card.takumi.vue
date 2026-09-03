<script setup lang="ts">
import { formattedPhone, site } from '@/shared/data'

defineProps<{
  title?: string
  description?: string
}>()
</script>

<!--
  Rendered by Takumi, not a browser: only flexbox and inline styles are safe
  here. Takumi shapes and bidi-orders Arabic, which Satori does not.
-->
<template>
  <div
    style="
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
      height: 100%;
      padding: 72px;
      direction: rtl;
      background-color: #09090b;
      background-image: radial-gradient(circle at 78% -18%, #78350f 0%, #09090b 58%);
      font-family: 'IBM Plex Sans Arabic';
    "
  >
    <div style="display: flex; align-items: center;">
      <div
        style="
          display: flex;
          width: 14px;
          height: 14px;
          margin-left: 14px;
          border-radius: 999px;
          background-color: #f59e0b;
        "
      />
      <div style="display: flex; font-size: 30px; color: #d4d4d8;">
        كهربائي في {{ site.city }} وضواحيها
      </div>
    </div>

    <div style="display: flex; flex-direction: column;">
      <div
        style="
          display: flex;
          font-size: 74px;
          font-weight: 600;
          line-height: 1.3;
          color: #fafafa;
        "
      >
        {{ title }}
      </div>

      <div
        v-if="description"
        style="
          display: flex;
          margin-top: 22px;
          max-width: 900px;
          font-size: 32px;
          line-height: 1.6;
          color: #a1a1aa;
        "
      >
        {{ description }}
      </div>
    </div>

    <div
      style="
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: 34px;
        border-top: 2px solid #27272a;
      "
    >
      <div style="display: flex; font-size: 32px; font-weight: 600; color: #fafafa;">
        {{ site.name }}
      </div>
      <div style="display: flex; font-size: 30px; color: #f59e0b; direction: ltr;">
        {{ formattedPhone }}
      </div>
    </div>
  </div>
</template>
