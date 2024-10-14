<template>
  <div class="flex flex-col items-center">
    <div class="w-[1120px] flex items-start justify-between">
      <div>
        <div class="flex items-center justify-center relative mb-10">
          <div class="flex items-center absolute left-0 gap-5">
            <Checkbox @click="() => {
              if (cartStore.selectedProducts.size === cartStore.products.length) {
                cartStore.cancelAll()
              } else {
                cartStore.selectAll()
              }
            }" :active="cartStore.selectedProducts.size === cartStore.products.length" />
            <h1 class="font-medium text-[#FFFFFF99] text-xl">Выбрать всё</h1>
          </div>
          <h1 class="text-white font-medium text-2xl">Корзина</h1>
        </div>
        <CartProductCard v-for="(product, index) in cartStore.products" :product :index class="mb-10" />
      </div>
      <div class="w-80 bg-[#FFFFFF0A] border-[1px] border-[#FFFFFF14] p-[16px_20px] rounded-2xl flex flex-col gap-2">
        <span class="text-[#FFFFFF99] font-normal flex justify-between text-sm">
          <p>{{ cartStore.products.length }} тов. </p>
          <p>{{ cartStore.totalSum }}₽</p>
        </span>
        <span class="text-[#FFFFFF99] font-normal flex justify-between text-sm">
          <p>Выгода</p>
          <p>-{{ cartStore.totalDiscount }}₽</p>
        </span>
        <span class="text-white font-semibold flex justify-between text-base">
          <p>Итого</p>
          <p>{{ cartStore.totalSum }}₽</p>
        </span>
      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>
import Checkbox from '~/components/buttons/checkbox.vue';
import CartProductCard from '~/components/cartProductCard.vue';

const cartStore = useCartStore()
cartStore.load()

</script>

<style></style>