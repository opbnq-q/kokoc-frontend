import { defineStore } from 'pinia'
import { useRequireAuthFetch } from '~/hooks/useRequireAuthFetch'
import type { HTTPResponse } from '~/models/HTTPResponse'
import type { IProduct } from '~/models/product'


export interface State {
  products: IProduct[],
  selectedProducts: Set<number>,
}

export const useCartStore = defineStore('cartStore', {
  state: (): State => ({
    products: [],
    selectedProducts: new Set(),
  }),
  getters: {
    totalDiscount: (state): number => {
      let totalDiscount = 0
      state.selectedProducts.forEach((_, index) => {
        totalDiscount += state.products[index].discount
      })
      return totalDiscount
    },
    totalSum: (state): number => {
      let totalPrice = 0
      let totalDiscount = 0
      state.selectedProducts.forEach((_, index) => {
        totalPrice += state.products[index].price
        totalDiscount += state.products[index].discount
      })
      return totalPrice - totalDiscount
    }
  },
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
      this.products.forEach((_, index) => {
        this.selectedProducts.add(index)
      })
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
    },
  }
})
