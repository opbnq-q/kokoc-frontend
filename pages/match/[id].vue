<template>
  <div class="flex flex-col items-center">
    <div class="w-[1120px]">
      <iframe class="m-0 rounded-lg" :src="match?.videoUrl" width="100%"
        height="630" allow="autoplay; encrypted-media; fullscreen; picture-in-picture;" frameborder="0"
        allowfullscreen></iframe>
      <h1 class="font-normal text-2xl text-white mt-4">{{ match?.matchName }}</h1>
    </div>
    <div class="mt-20 w-full">
      <h1 class="text-white text-2xl font-semibold text-center">Состав команды</h1>
      <Team :members="match?.kokocComposition || []" />
    </div>
    <div class="w-full flex flex-col items-center">
      <h1 class="text-white text-2xl font-semibold text-center">Результаты участников</h1>
      <div class="mt-10 flex items-center relative h-32">
        <div :class="`${match?.result == 'win' ? 'bg-[#44C7FFCC]' : 'bg-[#F54747CC]'} blur-[120px] w-32 h-32 absolute`">
        </div>
        <h1 class="font-semibold text-[48px] ml-4 mr-4 relative z-10 text-white score">{{ match?.kokocGoalsScored }} :
          {{ match?.secondTeamGoalsScored }}</h1>
      </div>
      <table class="w-[1120px] text-white p-[16px_20px] bg-[#FFFFFF0A] backdrop-blur-md">
        <thead class="text-[#FFFFFF99] text-xl">
          <th class="font-normal">Команда</th>
          <th class="font-normal">Забито мячей</th>
          <th class="font-normal">Пропущено мячей</th>
          <th class="font-normal">Жёлтых карточек</th>
          <th class="font-normal">Красных карточек</th>
        </thead>
        <tbody class="text-white text-xl">
          <tr>
            <td class="font-normal">Кокос групп</td>
            <td class="font-normal">{{ match?.kokocGoalsScored }}</td>
            <td class="font-normal">{{ match?.kokocGoalsConceded }}</td>
            <td class="font-normal">{{ match?.kokocYellowCards }}</td>
            <td class="font-normal">{{ match?.kokocRedCards }}</td>
          </tr>
          <tr>
            <td class="font-normal">{{ match?.secondTeamName }}</td>
            <td class="font-normal">{{ match?.secondTeamGoalsScored }}</td>
            <td class="font-normal">{{ match?.secondTeamGoalsConceded }}</td>
            <td class="font-normal">{{ match?.secondTeamYellowCards }}</td>
            <td class="font-normal">{{ match?.secondTeamRedCards }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Team from '~/components/team.vue';
import { useRequireAuthFetch } from '~/hooks/useRequireAuthFetch';
import type { IMatch } from '~/models/match';

const route = useRoute()
const id = route.params.id

const match: Ref<IMatch | null> = useState(() => null)

onMounted(async () => {
  const response = await useRequireAuthFetch<IMatch>(`matches/${id}`)
  if (response?.status === 'success') {
    match.value = response.data
  }
})


</script>

<style lang="scss" scoped>
.score {
  position: relative;
  display: flex;
  align-items: center;

  &::before {
    content: "Кокос групп";
    position: absolute;
    right: calc(100% + 16px);
    font-size: 24px;
    white-space: nowrap;
    font-family: Montserrat;
    font-size: 24px;
    font-weight: 400;
    line-height: 24px;
    text-align: right;
    color: #FFFFFF99;


  }

  &::after {
    content: "Противник";
    position: absolute;
    left: calc(100% + 16px);
    white-space: nowrap;
    display: flex;
    align-items: center;
    font-size: 24px;
    white-space: nowrap;
    font-family: Montserrat;
    font-size: 24px;
    font-weight: 400;
    line-height: 24px;
    text-align: right;
    color: #FFFFFF99;

  }
}
</style>