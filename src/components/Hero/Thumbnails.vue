<template>
  <div class="thumbnails">
    <div class="h-md-75 d-flex h-100 flex-md-column justify-content-center">
      <div
        class="d-inline-flex justify-content-center d-md-block my-md-2"
        v-for="(thumbnail, idx) in thumbnails"
        :key="idx"
        @click="handleChange(idx)"
      >
        <img
          v-bind:src="`src/assets/img/${thumbnail}`"
          alt="Thumbnail Ultimate 1"
          :style="{ opacity: idx === active ? 1 : 0.5 }"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { state } from '@/store'

defineProps({
  active: Number,
})

const { thumbnails } = state

const emit = defineEmits<{
  (e: 'setActive', id: number): void
}>()

const handleChange = (id: number) => {
  emit('setActive', id)
}
</script>

<style scoped>
.thumbnails img {
  width: 100%;
  background-color: var(--color-background);
}

@media (max-width: 768px) {
  .thumbnails img {
    width: 50%;
  }
}
</style>
