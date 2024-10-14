<template>
  <div class="">
    <div>
      <CartProductCard v-for="(product, index) in cartStore.products" :product :index/>
    </div>
    <div></div>
  </div>
</template>

<script lang="ts" setup>
import CartProductCard from '~/components/cartProductCard.vue';

const cartStore = useCartStore()
cartStore.load()

</script>

<style></style>