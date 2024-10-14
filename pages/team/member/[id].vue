<template>
  <div class="flex justify-center">
    <div class="w-[1120px]">
      <header class="w-full grid grid-cols-[2fr_1fr_1fr] h-40 mt-10">
        <div class="flex items-center justify-start gap-5">
          <div class="relative">
            <img :src="`https://foot.gogacoder.com/api/team/members/avatars/${id}`"
              class="absolute h-40 w-40 rounded-full z-10" alt="avatar">
            <img :src="`https://foot.gogacoder.com/api/team/members/avatars/${id}`" alt="blur"
              class="h-40 blur-[160px] w-40 rounded-full">
          </div>
          <div>
            <h1 class="font-semibold text-2xl text-white">{{ member?.name }}</h1>
            <p class="font-normal text-base text-[#FFFFFF99]">{{ EMemberRole[member!.role] }}</p>
            <p class="font-normal text-base text-[#FFFFFF99]">{{ year }} {{ suffix }}</p>
          </div>
        </div>
        <MemberStatistics :member="(member as IMember)" />
      </header>
      <nav class="mt-5 flex gap-5 mb-10">
        <MemberNavButton :selected="selectedRoute === route" @click="selectRoute(route)" v-for="route in routes">{{
          route }}
        </MemberNavButton>
      </nav>
      <main class="w-full">
        <div v-if="selectedRoute === 'главная'" class="">
          <Carousel :items-to-show="3" >
            <Slide v-for="slide in 10" :key="slide">
              {{ slide }}
            </Slide>
            <template class="" #addons>
            <Navigation />
            <Pagination />
          </template>
          </Carousel>
          <div class="w-full mb-10 bg-[#FFFFFF0A] border-[1px] border-[#FFFFFF14] rounded-2xl h-[110px] flex items-center justify-around">
            <div class="h-[80%] flex justify-between items-start flex-col">
              <h1 class="text-[#FFFFFF99] font-medium text-2xl">Матчи</h1>
              <h1 class="text-white font-semibold text-2xl">{{ member?.statistics.gamesPlayed }}</h1>
            </div>
            <div class="h-[80%] flex justify-between items-start flex-col">
              <h1 class="text-[#FFFFFF99] font-medium text-2xl">Голы</h1>
              <h1 class="text-white font-semibold text-2xl">{{ member?.statistics.goals }}</h1>
            </div>
            <div class="h-[80%] flex justify-between items-start flex-col">
              <h1 class="text-[#FFFFFF99] font-medium text-2xl">Голевые передачи</h1>
              <h1 class="text-white font-semibold text-2xl">{{ member?.statistics.assists }}</h1>
            </div>
            <div class="h-[80%] flex justify-between items-start flex-col">
              <h1 class="text-[#FFFFFF99] font-medium text-2xl">Красные карточки</h1>
              <h1 class="text-white font-semibold text-2xl">{{ member?.statistics.redCards }}</h1>
            </div>
            <div class="h-[80%] flex justify-between items-start flex-col">
              <h1 class="text-[#FFFFFF99] font-medium text-2xl">Жёлтые карточки</h1>
              <h1 class="text-white font-semibold text-2xl">{{ member?.statistics.yellowCards }}</h1>
            </div>
          </div>
          <VueMarkdown :source="member?.info" v-if="member?.info" class="markdown"/>
        </div>
        <div v-else-if="selectedRoute === 'фотографии'">
        </div>
        <div v-else-if="selectedRoute === 'лучшие моменты'">
          
        </div>
      </main>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { IMember } from '~/models/member';
import { EMemberRole } from '~/models/memberRole';
import MemberStatistics from '~/components/memberStatistics.vue';
import MemberNavButton from '~/components/buttons/memberNav.vue';
import VueMarkdown from 'vue-markdown-render';

import '~/styles/markdown.scss'

const route = useRoute()
const id = route.params.id

const member: Ref<IMember | null> = useState(() => null)
const year: Ref<number> = useState(() => 0)
const suffix = computed(() => getYearSuffix(year.value))

const { data }: { data: Ref<{ status: "success" | "error", data: IMember }> } = await useFetch(`https://foot.gogacoder.com/api/team/members/${id}`)


if (data.value.status === 'success') {
  member.value = data.value.data
  const birthDate = new Date(member.value.birthDate).getFullYear()
  year.value = new Date().getFullYear() - birthDate
}


const routes = [
  'главная',
  'фотографии',
  'лучшие моменты'
]

const selectedRoute = useState(() => 'главная')
const selectRoute = (route: string) => selectedRoute.value = route

</script>

<style></style>