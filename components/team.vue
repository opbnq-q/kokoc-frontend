<template>
  <div class="flex flex-col gap-10 w-full items-center mt-10">
      <div v-for="memberGroup in members" class="flex gap-10">
        <Member v-for="member in memberGroup"
          :image="`https://foot.gogacoder.com/api/team/members/avatars/${member.id}`" :name="member.name"
          :role="member.role" :id="member.id" v-show="member.role !== 'coach'" />
      </div>
      <h1 class="text-center font-[600] text-2xl text-white">Тренеры</h1>
      <div class="flex gap-10">
        <Member v-for="member in [...members[0], ...members[1]]"
          :image="`https://foot.gogacoder.com/api/team/members/avatars/${member.id}`" :name="member.name"
          :role="member.role" :id="member.id" v-show="member.role === 'coach'" :shadow="true"/>
      </div>
      <div>
      </div>
    </div>
</template>

<script lang="ts" setup>
import type { IMember } from '~/models/member';

const props = defineProps<{members: IMember[]}>()

const size = props.members.length - 1

const members = [props.members.slice(0, size / 2), props.members.slice(size / 2)]
</script>

<style>

</style>