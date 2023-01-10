<template>
  <img
    :class="small ? 'small mb-4' : 'brand mb-3 navbar-brand mx-auto'"
    src="@/assets/logo.png"
    alt="Brand Logo"
  />
</template>

<script setup lang="ts">
defineProps<{ small?: boolean }>()
</script>

<style scoped lang="scss">
.brand {
  width: 13rem;
  position: relative;
  top: -0.5rem;
}
.small {
  width: 11rem;
}
</style>
