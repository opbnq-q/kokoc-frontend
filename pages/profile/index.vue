<template>
    <div class="">
        <div class="flex items-center gap-5">
            <img :src="`https://foot.gogacoder.com/api/users/avatars/${id}`" class="rounded-full h-32 w-32 mb-10" />
            <div class="h-32 flex items-start">
                <h1 class="font-semibold text-white text-xl">{{ newFirstName }} {{ newLastName }}</h1>
            </div>
        </div>
        <div class="flex flex-col gap-2">
            <MainInput v-model="newFirstName"/>
            <MainInput v-model="newLastName"/>
            <MainInput v-model="email" class="mt-10"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import MainInput from '~/components/inputs/main.vue';
import { useRequireAuthFetch } from '~/hooks/useRequireAuthFetch';

definePageMeta({
    layout: 'profile'
})

const newFirstName = useState(() => "")
const newLastName = useState(() => "")
const email = useState(() => "")
const id = useState(() => null)

onMounted(async () => {
    const response = await useRequireAuthFetch<any>("users/me")
    const user = response?.data
    newFirstName.value = user.firstName
    newLastName.value = user.lastName
    email.value = user.email
    id.value = user.id
})





</script>