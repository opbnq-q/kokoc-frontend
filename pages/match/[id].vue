<template>
  <div class="flex flex-col items-center">
    <div class="w-[1120px]">
      <iframe class="m-0 rounded-lg" src="https://vk.com/video_ext.php?oid=-22822305&id=456241864&hd=2" width="100%"
        height="630" allow="autoplay; encrypted-media; fullscreen; picture-in-picture;" frameborder="0"
        allowfullscreen></iframe>
      <h1 class="font-normal text-2xl text-white mt-4">Kuzbasssssssssssssssssssssssssss</h1>
    </div>
    <div class="mt-20 w-full">
      <h1 class="text-white text-2xl font-semibold text-center">Состав команды</h1>
      <Team :members="match?.kokocComposition || []" />
    </div>
    <div class="w-full flex flex-col items-center">
      <h1 class="text-white text-2xl font-semibold text-center">Результаты участников</h1>
      <div class="mt-10 flex items-center">
        <h1 class="font-semibold text-[48px] ml-4 mr-4 text-white score">9 : 4</h1>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Team from '~/components/team.vue';
import type { IMatch } from '~/models/match';

const route = useRoute()
const id = route.params.id

const match: Ref<IMatch | null> = useState(() => null)
const response = await useFetch(`https://foot.gogacoder.com/api/matches/${id}`)


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