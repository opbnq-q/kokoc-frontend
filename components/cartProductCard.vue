<template>
  <div class="flex gap-5 items-start">
    <Checkbox :active="cartStore.selectedProducts.has(props.index)" @click="() => {
      if (cartStore.selectedProducts.has(props.index)) {
        cartStore.cancel(index)
      } else {
        cartStore.select(index)
      }
    }" />
    <img :src="`https://foot.gogacoder.com${props.product.image}`" class="w-32 h-32 rounded-2xl" />
    <div class="h-32 bg-[#FFFFFF0D] border-[1px] border-[#FFFFFF14] rounded-2xl w-[560px]">
      <div class="w-full h-full p-[16px_20px] flex flex-col gap-2">
        <div class="flex justify-between items-center">
          <h1 class="font-medium text-xl text-white h-6 flex items-center gap-1">{{ props.product.discount ?
            props.product.price - props.product.discount : props.product.price }}<p class="text-sm">₽</p> <s
              class="text-xs text-[#FFFFFF99] font-normal">{{ props.product.discount ? props.product.price : "" }}</s>
          </h1>
          <button class="text-white text-3xl" @click="cartStore.remove(props.index)">&times;</button>
        </div>
        <p class="text-[#FFFFFF99] font-normal text-sm">{{ props.product.name }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { IProduct } from '~/models/product';
import Checkbox from './buttons/checkbox.vue';

const props = defineProps<{
  product: IProduct,
  index: number
}>()

const cartStore = useCartStore()

</script>

<style></style>