<template>
  <div class="text-white">
    <h1 class="text-center font-[600] text-[24px]">Команда</h1>
    <Team :members="data.data"/>
  </div>
</template>

<script lang="ts" setup>
import Member from '~/components/member.vue';
import Team from '~/components/team.vue';
import type { IMember as TeamMember } from '~/models/member';

const { data }:
  { data: Ref<{ status: "error" | "success", data: TeamMember[] }> }
  = await useFetch("https://foot.gogacoder.com/api/team/members");



</script>

<style></style>