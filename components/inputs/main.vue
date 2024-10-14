<template>
  <input type="text"
  v-model="model"
  :required="!props.notRequired"
  class="font-[500] focus:bg-[#ffffff10] transition border-[1px] border-[#FFFFFF14] bg-transparent rounded-xl p-3 text-[20px] text-white text-opacity-60 backdrop-blur-xl placeholder:text-[#ffffff30] outline-none" />
</template>
  

<script lang="ts" setup>
const props = defineProps<{notRequired?: boolean}>()
const model = defineModel()
</script>

<style scoped>
input:user-invalid {
  border: 1px solid #F54747;
  background-color: #B1262E3D;
}
</style>