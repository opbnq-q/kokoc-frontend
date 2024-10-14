<template>
  <div>
    <div class="relative">
      <img class="h-[250px] w-[250px] rounded-2xl absolute z-40 blur-[160px] opacity-50"
        :src="`https://foot.gogacoder.com${props.image}`" />
      <img class="h-[250px] w-[250px] rounded-2xl relative z-50" :src="`https://foot.gogacoder.com${props.image}`" />
    </div>
    <div
      class="mt-5 rounded-2xl flex-col flex gap-2 p-[16px_20px] bg-[#FFFFFF0D] border-[1px] border-[#FFFFFF14] backdrop-blur-xl max-w-[250px]">
      <h1 class="font-medium text-xl text-white h-6 flex items-center gap-1">{{ props.discount ? props.price -
        props.discount : props.price }}<p class="text-sm">₽</p> <s class="text-xs text-[#FFFFFF99] font-normal">{{
          props.discount ? props.price : "" }}</s></h1>
      <p class="font-normal text-[#FFFFFF99] h-10 text-sm">{{ props.name }}</p>
      <button @click="handleAddingProduct"
        class="hover:bg-white hover:shadow-[0px_0px_16px_0px_#FFFFFF52] hover:text-black active:bg-[#FFFFFF3D] active:border-[#FFFFFF3D] active:shadow-none active:text-white hover:border-[white] transition border-[1px] border-[#FFFFFF3D] text-white rounded-3xl p-[6px_20px] font-medium text-sm">В
        корзину</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRequireAuthFetch } from '~/hooks/useRequireAuthFetch';
import type { IProduct } from '~/models/product';

const props = defineProps<IProduct>()

const handleAddingProduct = async () => {
  await useRequireAuthFetch(`users/me/cart/products/${props.id}`, {
    method: "POST",
  })
}
</script>

<style></style>