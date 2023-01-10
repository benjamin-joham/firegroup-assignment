import { reactive } from 'vue'
import products from '@/assets/data/products.json'
import productPrices from '@/assets/data/price.json'

const product = products[0]
const priceData = productPrices[0]
export type Product = typeof product
export type Price = typeof priceData

export interface State {
  products: Product[]
  productPrices: Price[]
  activeProduct: Product | null
  setActiveProduct: (product: Product | null) => void
  getIconSrc: (iconTarget: string) => string
  getFormattedProductPrice: (sku: Product['sku']) => string
  getProductPrice: (sku: Product['sku']) => Price['price']
  getProduct: (sku: Product['sku']) => Product
}

const getPriceProduct = (sku: Product['sku']): Price => {
  return productPrices?.find((x) => x.sku === sku) as Price
}

const getFormattedProductPrice = (sku: Product['sku']): string => {
  const price = getPriceProduct(sku).priceFormatted
  const [extractedPrice, currency] = price.split(' ')
  return `${currency} ${extractedPrice}`
}
const getProductPrice = (sku: Product['sku']): Price['price'] => {
  return getPriceProduct(sku).price
}

const getIconSrc = (iconTarget: string): string => {
  return state.activeProduct?.medias.find((x) => x.targetAttr === iconTarget)
    ?.path as string
}

const getProduct = (sku: Product['sku']): Product => {
  return products.find((x) => x.sku === sku) as Product
}

export const state = reactive<State>({
  products,
  productPrices,
  activeProduct: null,
  setActiveProduct(product: Product | null) {
    this.activeProduct = product
  },
  getIconSrc,
  getFormattedProductPrice,
  getProductPrice,
  getProduct,
})
