<template>
  <a href="#" :class="{ small: small, brand: !small, open }">
    <img src="@/assets/logo.png" alt="Brand Logo" />
  </a>
</template>

<script setup lang="ts">
defineProps({
  small: {
    type: Boolean,
    required: false,
    default: false,
  },
  classes: {
    type: Array<String>,
    required: false,
  },
})
</script>

<style scoped lang="scss">
.brand {
  width: 13rem;

  @media (max-width: 992px) {
    top: 0;
  }
}
.small {
  width: 11rem;
}
</style>
