<template>
  <ul class="row justify-content-between col-10 col-lg-12">
    <li
      v-for="(detail, idx) in productDetails"
      :key="detail?.title"
      class="col-lg-8 col-xl-5 py-2 pe-0 data"
      :class="[
        specifications ? 'data-specs' : 'data-details',
        (smallScreen && idx === productDetails?.length - 1) ||
        (!smallScreen && idx >= productDetails?.length - 2)
          ? 'border-bottom-0'
          : 'border-bottom',
      ]"
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
import { onMounted, onUnmounted, ref } from 'vue'
import DataItem from './DataItem.vue'

const props = defineProps<{ specifications?: boolean }>()
const { getIconSrc, activeProduct } = state
const productDetails = props.specifications
  ? activeProduct?.productSpecifications.data?.sort(
      (a, b) => a.sortOrder - b.sortOrder
    )
  : activeProduct?.productDetails.data?.sort(
      (a, b) => a.sortOrder - b.sortOrder
    )

const smallScreen = ref(true)
const handleResize = () => {
  smallScreen.value = window.matchMedia('(max-width: 1200px)').matches
}
onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize)
})
onUnmounted(() => window.removeEventListener('resize', handleResize))
</script>

<style scoped lang="scss">
.data {
  border-bottom: 1px solid rgb(210, 210, 210);
}
</style>
