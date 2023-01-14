<template>
  <div class="d-flex align-items-center py-2 ms-2">
    <img
      v-bind:src="`src/assets/icon/${iconSrc}`"
      alt="`${detail.brand} Icon`"
    />
    <div class="d-flex flex-column mx-3 w-100 h-100">
      <p class="title m-0 mb-2">{{ title }}</p>
      <p class="fw-bold text m-0 text-uppercase">{{ text }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ iconSrc: string; title: string; text: string }>()
</script>

<style scoped lang="scss">
img {
  width: 40px;
  height: 40px;
}
.text {
  font-family: 'Trade Gothic LT';
  color: var(--color-details);
}
</style>
