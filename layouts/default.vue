<script setup lang="ts">
import CustomLink from '~/components/customLink.vue';
</script>

<template>
  <div class="bg-black min-h-[100vh]">
    <div class="w-full flex items-center justify-center h-16 bg-[#00000033] backdrop-blur-xl">
      <header class="w-[1120px] h-full justify-around flex text-white">
        <nav class="flex h-full items-center gap-14 text-[20px]">
          <CustomLink to="/">главная</CustomLink>
          <CustomLink to="/team">команда</CustomLink>
          <CustomLink to="/columns">новости</CustomLink>
          <CustomLink to="/match">матчи</CustomLink>
          <CustomLink to="/merch">мерч</CustomLink>
          <CustomLink to="/cart">корзина</CustomLink>
        </nav>
      </header>
    </div>
    <main class="mt-5">
      <NuxtPage></NuxtPage>
    </main>
  </div>
</template>