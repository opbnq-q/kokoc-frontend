<template>
  <div class="flex flex-col items-center relative h-[30px] justify-start">
    <NuxtLink :to="props.to"><slot></slot></NuxtLink>
    <span v-show="route.fullPath.includes(props.to) && props.to.length > 1 || route.fullPath == props.to" class="absolute bottom-0 h-[1px] w-4 bg-[#44C7FF]"></span>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()
const props = defineProps<{
  to: string
}>()
</script>

<style>

</style>