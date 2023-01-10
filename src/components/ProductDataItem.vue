<template>
  <div class="top d-flex align-items-center ps-3 me-5 py-2">
    <img
      v-bind:src="`src/assets/icon/${iconSrc}`"
      alt="`${detail.brand} Icon`"
    />
    <div class="d-flex flex-column ms-3">
      <p class="title m-0">{{ title }}</p>
      <p class="fw-bold text m-0">{{ text?.toUpperCase() }}</p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ProductDataItem',
  components: {},
  props: {
    iconSrc: String,
    title: String,
    text: String,
  },
}
</script>

<style scoped>
.top {
  border-bottom: 2px solid rgb(240, 240, 240);
}
img {
  width: 3em;
  height: 3em;
}
.text {
  font-family: 'Trade Gothic LT';
}
</style>
