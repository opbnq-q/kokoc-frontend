<template>
  <div class="w-screen h-screen flex items-center justify-center bg-black relative overflow-hidden">
    <div class="fixed z-20">
      <slot></slot>
    </div>
    <div class="fixed z-10 bg-[#44C7FFCC] w-72 h-44 blur-3xl opacity-30 top-[35%]"></div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style></style>