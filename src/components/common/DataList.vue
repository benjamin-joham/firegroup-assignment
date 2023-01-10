<template>
  <ul class="row justify-content-between">
    <li
      v-for="detail in productDetails"
      :key="detail?.title"
      class="col-5 py-2 pe-0 data"
      :class="specifications ? 'data-specs' : 'data-details'"
    >
      <DataItem
        :icon-src="getIconSrc(detail.iconTarget)"
        :title="detail.title"
        :text="detail.text"
      />
    </li>
  </ul>
</template>

<script setup lang="ts">
import { state } from '@/store'
import DataItem from './DataItem.vue'

const { specifications } = defineProps<{ specifications?: boolean }>()
console.log(specifications)
const { getIconSrc, activeProduct } = state
const productDetails = specifications
  ? activeProduct?.productSpecifications.data?.sort(
      (a, b) => a.sortOrder - b.sortOrder
    )
  : activeProduct?.productDetails.data?.sort(
      (a, b) => a.sortOrder - b.sortOrder
    )
</script>

<style scoped>
.data {
  border-bottom: 1px solid rgb(210, 210, 210);
}
</style>
