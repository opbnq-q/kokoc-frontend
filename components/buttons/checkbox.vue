<template>
  <button :class="`${props.active? 'bg-[#FFFFFF14]' : 'bg-[#FFFFFF0A]'} flex items-center justify-center border-[1px] border-[#FFFFFF14] rounded-full h-8 w-8`">
    <img src="/public/check-mark.svg" v-show="props.active"/>
  </button>
</template>

<script lang="ts" setup>
const props = defineProps<{
  active: boolean
}>()
</script>

<style></style>