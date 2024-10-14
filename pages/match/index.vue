<template>
  <div class="flex items-center flex-col">
    <div class="w-[1120px] mt-20">
        <VideoCard v-for="match in matches" :duration="match.dateTime" :is-live="match.dateTime === 'live'" :id="match.id" :title="match.matchName" 
        poster="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Kuznetsk_Alatau_1.jpg/290px-Kuznetsk_Alatau_1.jpg"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Search from '~/components/inputs/search.vue';
import VideoCard from '~/components/videoCard.vue';
import type { IMatch } from '~/models/match';

const matches: Ref<IMatch[]> = useState(() => [])
</script>

<style>
</style>