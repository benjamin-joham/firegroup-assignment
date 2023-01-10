<template>
  <ul class="row">
    <li
      v-for="detail in productDetails"
      :key="detail?.title"
      class="col-6 gx-4"
    >
      <ProductDataItem
        :icon-src="getIconSrc(detail.iconTarget)"
        :title="detail.title"
        :text="detail.text"
      />
    </li>
  </ul>
</template>

<script lang="ts">
import { state } from '@/store'
import ProductDataItem from './ProductDataItem.vue'

export default {
  name: 'ProductDataList',
  components: {
    ProductDataItem,
  },
  props: {
    specifications: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const { getIconSrc, activeProduct } = state
    const productDetails = props.specifications
      ? activeProduct?.productSpecifications.data
      : activeProduct?.productDetails.data
    return {
      getIconSrc,
      productDetails: productDetails?.sort((a, b) => a.sortOrder - b.sortOrder),
    }
  },
  beforeMount() {
    // console.log(this.productDetails)
  },
}
</script>

<style scoped>
li {
  list-style: none;
}
</style>
