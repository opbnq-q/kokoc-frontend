<template>
  <div class="flex gap-5 items-center h-[200px] w-[1120px] cursor-pointer" @click="columnsStore.selectColumn(index)">
    <img class="h-full max-w-[33%] backdrop-shadow min-w-[200px] w-auto rounded-2xl object-cover"  :src="`https://foot.gogacoder.com${props.image}`" v-if="props.image" /> 
    <div class="p-5 bg-[#FFFFFF0A] rounded-2xl border-[1px] border-[#FFFFFF14] w-full h-full">
      <div class="w-full h-full relative  flex-grow">
        <h1 class="font-[600] text-[24px] text-white">
          {{ props.title }}
        </h1>
        <p class="text-[#FFFFFF99] font-[400] text-[16px] mt-2">
          {{ props.summary }}
        </p>
        <span class="absolute bottom-0 left-0 flex gap-4">
          <p class="text-[#FFFFFF99] font-[400] text-[14px]">{{ ECategory[props.category] }}</p>
          <p class="text-[14px] font-[400] text-[#FFFFFF3D]">{{ props.createdAt }}</p>
        </span>
        <span class="absolute bottom-0 right-0 flex items-center gap-4">
          <span class="flex gap-1 items-center">
            <p class="text-[14px] font-[400] text-[#FFFFFF3D]">{{ props.likes }}</p>
          </span>
          <span>
            <p class="text-[14px] font-[400] text-[#FFFFFF3D]">{{ props.dislikes }}</p>
          </span>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ECategory } from '~/models/category';
import type { IColumn } from '~/models/column';
import { useColumnsStore } from '~/stores/columnsStore';

const props = defineProps<IColumn & {index: number}>()

const columnsStore = useColumnsStore()
</script>

<style scoped>
.backdrop-shadow {
  box-shadow: 0px 0px 160px rgb(66, 58, 58);
}
</style>
