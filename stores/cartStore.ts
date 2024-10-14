import { defineStore } from 'pinia'
import { useRequireAuthFetch } from '~/hooks/useRequireAuthFetch'
import type { HTTPResponse } from '~/models/HTTPResponse'
import type { IProduct } from '~/models/product'


export interface State {
  products: IProduct[],
  selectedProducts: Set<number>,
  totalSum: number,
  totalDiscount: number
}

export const useCartStore = defineStore('cartStore', {
  state: (): State => ({
    products: [],
    selectedProducts: new Set(),
    totalSum: 0,
    totalDiscount: 0
  }),
  actions: {
    async load() {
      const response = await useRequireAuthFetch<{
        products: IProduct[]
      }>("users/me/cart")
      if (response?.status === 'success') {
        this.products = response?.data?.products || []
      }
    },
    select(index: number) {
      this.selectedProducts.add(index)
    },
    selectAll() {
      this.selectedProducts.forEach((_, index) => this.selectedProducts.add(index))
    },
    cancel(index: number) {
      this.selectedProducts.delete(index)
    },
    cancelAll() {
      this.selectedProducts = new Set()
    },
    async remove(index: number) {
      const response = await useRequireAuthFetch(`users/me/cart/products/${this.products[index].id}`, {
        method: "DELETE"
      })
      if (response?.status === 'success') {
        this.products = this.products.filter((_, productIndex) => productIndex != index)
        this.selectedProducts.delete(index)
      }
    }
  }
})
