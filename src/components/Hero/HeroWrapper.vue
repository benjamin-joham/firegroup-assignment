<template>
  <div class="container-fluid container-lg">
    <div class="d-flex flex-column flex-md-row align-items-center">
      <div
        class="col-md-1 offset-md-1 offset-lg-0 h-100 ps-1 order-last order-md-0"
      >
        <Thumbnails @setActive="setActive" :active="active" />
      </div>
      <div class="col-12 col-md-5 h-100">
        <MainImage :active="active" />
      </div>
      <div class="col-lg-6 col-md-5 h-100 text-start order-first order-md-0">
        <InfoBox />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Thumbnails from './Thumbnails.vue'
import MainImage from './MainImage.vue'
import InfoBox from './InfoBox.vue'

const active = ref(0)
const setActive = (id: number) => {
  active.value = id
}
</script>

<style lang="ts"></style>
