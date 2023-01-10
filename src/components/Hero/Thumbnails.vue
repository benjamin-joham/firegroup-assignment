<template>
  <div class="thumbnails row-expand h-100">
    <div class="vstack gap-3 h-75 justify-content-center">
      <img
        v-for="(thumbnail, idx) in thumbnails"
        :key="idx"
        @click="handleChange(idx)"
        v-bind:src="`src/assets/img/${thumbnail}`"
        alt="Thumbnail Ultimate 1"
        :style="{ opacity: idx === active ? 1 : 0.5 }"
      />
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
</style>
