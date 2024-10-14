<template>
  <div class="flex items-center flex-col">
      <Search v-model="search" />
    <div class="w-[1120px] mt-20">
        <VideoCard :duration="'20:20'" :is-live="false" :id="1" :title="'kuzbass'" 
        poster="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Kuznetsk_Alatau_1.jpg/290px-Kuznetsk_Alatau_1.jpg"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Search from '~/components/inputs/search.vue';
import VideoCard from '~/components/videoCard.vue';

const search = useState(() => "")
</script>

<style>
</style>