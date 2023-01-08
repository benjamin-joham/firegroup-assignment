import { reactive, readonly } from 'vue'
import products from '@/assets/data/products.json'
import productPrices from '@/assets/data/price.json'

const state = reactive({
  products,
  productPrices,
})
const product = products[0]
const priceData = productPrices[0]
export type Product = typeof product
export type Price = typeof priceData



export default {
  state: readonly(state),
}
