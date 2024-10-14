<template>
  <div class="flex flex-col items-center">
    <div class="grid grid-cols-3 gap-10">
    <ProductCard v-for="card in data.data.items" :id="card.id" :created-at="card.createdAt" :discount="card.discount"
      :price="card.price" :image="card.image" :name="card.name"/>
  </div>
  </div>
</template>

<script lang="ts" setup>
import ProductCard from '~/components/productCard.vue';
import type { HTTPResponse } from '~/models/HTTPResponse';
import type { IProduct } from '~/models/product';

const { data }: { data: Ref<HTTPResponse<{ items: IProduct[] }>> } = await useFetch("https://foot.gogacoder.com/api/products?limit=100000")


</script>

<style></style>