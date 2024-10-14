<template>
  <NuxtLink class="w-[360px] h-[250px] cursor-pointer" :to="`/match/${id}`">
    <div class="relative w-[360px] h-[200px]">
      <img class="rounded-2xl w-full h-full relative z-10 object-contain" src="https://adindex.ru/files2/news/2014_05/110771_kokos.png">
        <p 
        :class="`absolute bottom-2 right-2 ${isLive? 'bg-[#F54747] font-semibold' : 'bg-[#00000099]'} text-white text-[10px] rounded-lg p-[2px_8px] z-20`">{{ isLive? 'Live' : props.duration }}</p>
    </div>
    <p class="font-normal text-sm text-white mt-1">{{ props.title }}</p>
  </NuxtLink>
</template>

<script lang="ts" setup>
const props = defineProps<{
  isLive?: boolean,
  title: string,
  duration?: string,
  id: number
}>()
</script>

<style></style>