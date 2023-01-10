<template>
  <div class="container">
    <div class="row align-items-center">
      <div class="col-1 h-100 ps-1">
        <Thumbnails @setActive="setActive" :active="active" />
      </div>
      <div class="col-5 h-100">
        <MainImage :active="active" />
      </div>
      <div class="col-6 h-100 text-start">
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
