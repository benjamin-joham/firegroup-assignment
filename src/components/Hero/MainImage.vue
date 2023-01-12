<template>
  <div class="image-wrapper mw-100 d-flex">
    <img
      class="image"
      v-bind:src="`src/assets/img/${thumbnails[active].split('_')[1]}`"
      alt="Piaget ALtiplano Ultimate"
    />
  </div>
</template>

<script setup lang="ts">
import { state } from '@/store'

defineProps<{ active: number }>()

const { thumbnails } = state
</script>

<style scoped>
.image-wrapper {
  height: 550px;
}
.image {
  object-fit: contain;
  max-width: 100%;
  max-height: 100%;
  transform: translateX(-5%);
}

@media (max-width: 1200px) {
  .image-wrapper {
    height: 450px;
  }
}
</style>
