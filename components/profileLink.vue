<template>
  <NuxtLink :to>
    <div class="text-[#FFFFFF99] font-medium text-xl hover:text-white transition-[1s]">
      <slot></slot>
    </div>
  </NuxtLink>
</template>

<script lang="ts" setup>
const {to} = defineProps<{to: string}>()
</script>