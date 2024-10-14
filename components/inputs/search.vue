<template>
  <div class="w-[528px] h-12 flex gap-5">
    <div class="flex justify-start relative">
      <button
        @click="show = !show"
        class="rounded-full h-full flex items-center justify-center w-12 border-[#FFFFFF14] border-[1px] bg-[#FFFFFF0A]">
        <img src="/public/filter.svg" />
      </button>
      <div
      v-show="show"
      class="bg-[#0c0c0c] min-w-80 z-30 border-[1px] text-white rounded-[12px] border-[#FFFFFF14] p-[16px_20px] top-[120%] absolute">
        pum-pum-pum
      </div>
    </div>
    <MainInput v-model="model" class="h-full w-[460px] bg-[#FFFFFF0A]" placeholder="Найти" :not-required="true" />
  </div>
</template>

<script lang="ts" setup>
import MainInput from '~/components/inputs/main.vue'


const model = defineModel()

const show = useState(() => false)
</script>

<style></style>