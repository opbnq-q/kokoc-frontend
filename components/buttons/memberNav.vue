<template>
  <button
  :class="props.selected && 'bg-[#FFFFFF29]'"
    class="text-white bg-[#FFFFFF0A] p-[8px_16px] border-[1px] border-[#FFFFFF14] backdrop-blur-xl rounded-3xl text-base font-normal">
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
const props = defineProps<{
  selected: boolean
}>()
</script>

<style></style>