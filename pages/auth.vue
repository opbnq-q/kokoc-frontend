<template>
  <form class="flex flex-col gap-4 w-[460px] text-white text-center font-semibold text-[28px]"
    @submit.prevent="handleSubmit">
    <h1>Регистрация</h1>
    <div class="flex gap-4 items-center">
      <MainInput class="w-1/2" placeholder="Имя" v-model="name" ref="nameInput" pattern="^[А-Яа-яЁё]+$" minlength="2"
        maxlength="64" />
      <MainInput class="w-1/2" placeholder="Фамилия" v-model="surname" ref="surnameInput" pattern="^[А-Яа-яЁё]+$"
        minlength="2" maxlength="64" />
      <p v-show="!(nameInput?.$el as HTMLInputElement)?.validity?.valid || !(surnameInput?.$el as HTMLInputElement)?.validity?.valid"
        class="absolute left-full ml-5 text-[#F54747] font-normal text-[16px] w-[370px] text-start">Можно использовать
        только
        буквы А - Я</p>
    </div>
    <div class="w-full flex items-center">
      <MainInput placeholder="Почта" class="w-full" v-model="email" ref="emailInput" type="email"
        :pattern="emailRegexp.source" />
      <p v-show="!(emailInput?.$el as HTMLInputElement)?.validity?.valid"
        class="absolute left-full ml-5 text-[#F54747] font-normal text-[16px] w-[370px] text-start">Неверный адрес
        электронной почты</p>
    </div>
    <MainInput placeholder="Пароль" v-model="password" ref="passwordInput" :pattern="passwordRegexp.source"
      minlength="8" />
    <MainButton>Зарегистрироваться</MainButton>
    <p v-show="!(passwordInput?.$el as HTMLInputElement)?.validity?.valid"
      class="absolute left-0 top-full mt-5 text-[#F54747] font-normal text-[16px] text-start">Пароль должен содержать
      как минимум 1 заглавную букву, строчную букву, цифру и спецсимвол</p>
    <p v-show="showConflictError"
      class="absolute left-0 top-full mt-20 text-[#F54747] font-normal text-[16px] text-start">Пользователь с такими
      данными уже зарегистрирован</p>
  </form>
</template>

<script lang="ts" setup>
import MainButton from '~/components/buttons/main.vue';
import MainInput from '~/components/inputs/main.vue';

const showConflictError = useState<boolean>(() => false)

const passwordRegexp = RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[_.,"'#$@!%&*?])[A-Za-z\d_.,"'#$@!%&*?]{8,}$/)
const emailRegexp = RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)

definePageMeta({
  layout: 'auth'
})

const name = useState<string>('name', () => '')
const surname = useState<string>('surname', () => '')
const email = useState<string>('email', () => '')
const password = useState<string>('password', () => '')

import { useTemplateRef } from 'vue';
import type { HTTPResponse } from '~/models/HTTPResponse';

const nameInput = useTemplateRef('nameInput')
const surnameInput = useTemplateRef('surnameInput')
const emailInput = useTemplateRef('emailInput')
const passwordInput = useTemplateRef('passwordInput')

const handleSubmit = async () => {
    const response = await fetch("https://foot.gogacoder.com/api/auth/register/", {
    method: "POST",
    headers: {
      'Content-Type': "application/json"
    },
    body: JSON.stringify({
      firstName: name.value,
      lastName: surname.value,
      email: email.value,
      password: password.value
    }),
  })
  const body: HTTPResponse<{token: string}> = await response.json()
  if (body.status === 'error') {
    showConflictError.value = true
  } else {
    localStorage.setItem('token', body.data.token)
    await navigateTo('/columns')
  }
}
</script>

<style></style>