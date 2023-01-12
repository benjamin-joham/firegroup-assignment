<template>
  <img
    :class="small ? 'small' : 'brand'"
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
