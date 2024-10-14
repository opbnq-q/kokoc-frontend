<template>
  <div class="bg-black min-h-[100vh]">
    <div class="w-full flex items-center justify-center h-16 bg-[#00000033] backdrop-blur-xl">
      <header class="w-[1120px] h-full justify-around flex text-white">
        <DefaultNav />
      </header>
    </div>
    <main class="mt-5 flex flex-col items-center">
      <div class="w-[1120px] flex items-start gap-10">
        <nav class="bg-[#FFFFFF0A] border-[1px] border-[#FFFFFF14] rounded-2xl w-[300px] p-[16px_20px] gap-6 flex flex-col h-[600px] relative">
          <ProfileLink to="/profile/">Профиль</ProfileLink>
          <ProfileLink to="/profile/comments/">Мои комментарии</ProfileLink>
          <ProfileLink to="/profile/videos/">История просмотра</ProfileLink>
          <ProfileLink to="/cart" class="absolute bottom-4">Корзина</ProfileLink>
        </nav>
        <NuxtPage></NuxtPage>
      </div>
    </main>
  </div>
</template>

<script lang="ts" setup>
import ProfileLink from '~/components/profileLink.vue';

</script>

<style></style>