<template>
  <NuxtLink :to="`/team/member/${props.id}`" class="w-[152px] flex flex-col gap-2 items-center">
    <div class="relative rounded-full w-[152px] h-[152px]">
      <img class="rounded-full w-[152px] h-[152px] absolute z-10" :src="props.image"/>
      <img class="rounded-full w-[152px] h-[152px] blur-[160px]" v-if="props.shadow" :src="props.image"/>
    </div>
    <h2 class="text-[16px] font-medium break-words">{{ name }}</h2>
    <p class="text-[14px] font-normal text-[#FFFFFF99]">{{ EMemberRole[props.role] }}</p>
  </NuxtLink>
</template>

<script lang="ts" setup>
import { EMemberRole } from '~/models/memberRole';

const props = defineProps<{
  image: string,
  name: string,
  role: keyof typeof EMemberRole,
  shadow?: boolean,
  id: number
}>()
</script>

<style>

</style>