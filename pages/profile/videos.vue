<template>
  <div class="flex flex-col gap-5">
    <div class="flex gap-20" v-for="video in videos">
      <VideoCard :duration="video.dateTime" :id="video.id" :is-live="video.dateTime === 'live'" :title="video.matchName" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import VideoCard from '~/components/videoCard.vue';
import { useRequireAuthFetch } from '~/hooks/useRequireAuthFetch';
import type { IMatch } from '~/models/match';

definePageMeta({
  layout: 'profile'
})

const videos: Ref<IMatch[]> = useState(() => [])

const response = await useRequireAuthFetch<{
  viewedMatches: IMatch[]
}>("users/me")
videos.value = response?.data.viewedMatches as IMatch[]
</script>

<style>

</style>