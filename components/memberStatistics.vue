<template>
  <div class="flex items-center justify-center flex-col relative" v-if="showStatistics">
    <span class="flex gap-3 items-center relative z-20">
      <h1 class="text-white font-semibold text-[40px]">{{ member?.statistics?.gamesPlayed }}</h1>
      <div class="text-[#FFFFFF99] text-base font-normal flex flex-col items-start">
        <p>{{ getMatchSuffix(member?.statistics?.gamesPlayed) }}</p>
        <p>сыграно</p>
      </div>
    </span>
    <span class="flex gap-3 items-center relative z-20">
      <h1 class="text-white font-semibold text-[40px]">{{ member?.statistics?.goals }}</h1>
      <div class="text-[#FFFFFF99] text-base font-normal flex flex-col items-start">
        <p>{{ getGoalSuffix(member?.statistics?.gamesPlayed) }}</p>
      </div>
    </span>
    <div class="bg-[#44C7FFCC] blur-[50px] w-40 h-10 rounded-[20px] absolute"> </div>
  </div>
  <div class="flex items-center justify-center flex-col relative" v-if="showStatistics">
    <span class="flex gap-3 items-center relative z-20">
      <h1 class="text-white font-semibold text-[40px]">{{ member?.statistics?.yellowCards }}</h1>
      <div class="text-[#FFFFFF99] text-base font-normal flex flex-col">
        <p class="w-2/3 break-words text-start">{{ getCardsSuffix('yellow', member?.statistics?.yellowCards) }}</p>
      </div>
    </span>
    <span class="flex gap-3 items-center relative z-20">
      <h1 class="text-white font-semibold text-[40px]">{{ member?.statistics?.redCards }}</h1>
      <div class="text-[#FFFFFF99] text-base font-normal flex flex-col">
        <p class="w-2/3 break-words text-start">{{ getCardsSuffix('red', member?.statistics?.redCards) }}</p>
      </div>
    </span>
    <div class="bg-[#F54747CC] blur-[50px] w-40 h-10 rounded-[20px] absolute"> </div>
  </div>
</template>

<script lang="ts" setup>
import { getMatchSuffix } from '~/utils/getMatchSuffix';
import { getGoalSuffix } from '~/utils/getGoalSuffix';
import { getCardsSuffix } from '~/utils/getCardsSuffix';
import type { IMember } from '~/models/member';

const props = defineProps<{ member: IMember }>()
const member = props.member


const showStatistics = computed(() => member.statistics !== null)
</script>

<style></style>