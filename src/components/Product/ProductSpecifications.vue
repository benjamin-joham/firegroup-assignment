<!-- <template>
  <section id="details">
    <div class="container">
      <div class="row">
        <div class="col-4 ps-0">
          <img
            class="product bg-black"
            src="@/assets/img/specification.png"
            alt="Product Detail"
          />
        </div>
        <div class="col-8 pe-0">
          <div>
            <span class="category">Specifications</span>
            <h2>{{ details.title }}</h2>
          </div>
          <DataList :specifications="true" />
        </div>
      </div>
    </div>
  </section>
</template> -->

<template>
  <div class="container">
    <div class="row justify-content-between">
      <div class="col-4 pe-0">
        <img
          class="product bg-black"
          src="@/assets/img/specification.png"
          alt="Product Detail"
        />
      </div>
      <div class="col-7 ps-0 d-flex flex-column align-items-center">
        <div class="col-10 mb-5">
          <span class="category text-uppercase">Specifications</span>
          <h2>{{ details?.title }}</h2>
        </div>
        <div
          class="row-expand justify-content-between align-self-baseline w-100"
        >
          <DataList :specifications="true" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '@/store'
import DataList from '../common/DataList.vue'
defineProps<{ details?: Product['productSpecifications'] }>()
</script>

<style lang="scss">
.product {
  width: 350px;
}
.img {
  width: 40px;
  height: 40px;
}
</style>
