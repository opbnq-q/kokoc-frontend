<script setup lang="ts">
import CustomLink from '~/components/customLink.vue';
import DefaultNav from '~/components/defaultNav.vue';
</script>

<template>
  <div class="bg-black min-h-[100vh]">
    <div class="w-full flex items-center justify-center h-16 bg-[#00000033] backdrop-blur-xl">
      <header class="w-[1120px] h-full justify-around flex text-white">
        <DefaultNav />
      </header>
    </div>
    <main class="mt-5">
      <NuxtPage></NuxtPage>
    </main>
  </div>
</template>