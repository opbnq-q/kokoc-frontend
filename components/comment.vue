<template>
  <div class="text-white bg-[#FFFFFF0A] p-4 pr-[54px] flex-col items-start gap-3 max-w-[1120px] rounded-[20px] border-[1px] border-[#FFFFFF14]">
    <div class="flex gap-3 items-center h-8">
      <div class="rounded-full w-8 h-8">
        <img :src="`https://foot.gogacoder.com/api/users/avatars/${props.authorId}`" class="rounded-full w-8 h-8 absolute -z-10 blur-[40px]"/>
        <img :src="`https://foot.gogacoder.com/api/users/avatars/${props.authorId}`" class="rounded-full w-8 h-8 relative"/>
      </div>
      <p class="text-[20px] font-[500] text-[#FFFFFF99]">{{ props.author.firstName }} {{ props.author.lastName }}</p>
      <p class="text-[14px] ml-2 font-normal text-[#FFFFFF3D]">{{ dateConversion(props.createdAt) }}</p>
    </div>
    <p class="text-[#FFFFFF99] text-[16px] font-[400] mt-4">
        {{ props.content }}
    </p>
  </div>
</template>

<script lang="ts" setup>
import type { IComment } from '~/models/comments';
const props = defineProps<IComment>()
import { dateConversion } from '#imports';

</script>

<style>

</style>