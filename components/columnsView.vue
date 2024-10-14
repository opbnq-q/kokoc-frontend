<template>
  <div>
    <div v-show="columnsStore.selectedColumn"
      class="fixed bottom-0 right-0 left-0 top-0 z-30 min-h-screen overflow-y-auto bg-black">
      <div v-show="columnsStore.selectedColumn" class="bottom-0 right-0 top-0 left-0 absolute z-30"
        @click="columnsStore.cancelColumn()"></div>
      <div class="absolute top-28 flex justify-center gap-28 w-full">
        <div v-show="columnsStore.selectedColumn" class="bottom-0 right-0 top-0 left-0 absolute z-30"
          @click="columnsStore.cancelColumn()"></div>
        <button @click="columnsStore.previousColumn" :disabled="previousButtonStatus"
          :class="`bg-[#FFFFFF0A] ${previousButtonStatus && 'opacity-50'} cursor-pointer border-[1px] rotate-180 border-[#FFFFFF14] relative z-40 rounded-full w-10 h-10 flex items-center justify-center`"><img
            src="/public/arrow.svg" />
        </button>
        <div class="w-[1120px] relative z-40 p-10 pt-0">
          <img :src="`https://foot.gogacoder.com${columnsStore.selectedColumn?.image}`"
            v-if="columnsStore.selectedColumn?.image" class="w-full mb-10 rounded-2xl" />
          <div class="flex flex-col items-center">
            <p class="font-[600] text-white text-[32px]">{{ columnsStore.selectedColumn?.title }}</p>
            <p class="font-[400] text-[#FFFFFF3D] text-[20px]">{{ columnsStore.selectedColumn?.createdAt }}</p>
          </div>
          <VueMarkdown v-if="columnsStore.selectedColumn?.content" :source="columnsStore.selectedColumn?.content"
            class="markdown mt-10" />
          <div class="w-full">
            <h1 class="text-[32px] font-[600] text-white text-center mt-20 mb-10">Комментарии</h1>
            <div class="flex flex-col w-full items-start gap-5 text-white pb-64">
                <Comment v-for="comment in (columnsStore?.comments as IComment[])"
                 :author="comment.author" :author-id="comment.authorId" :content="comment.content" 
                  :column-id="comment.columnId" :id="comment.id" :match-id="comment.matchId"
                  :key="comment.id" :created-at="comment.createdAt"
                />
            </div>
          </div>
          <MainInput v-model="newComment" @change="sendComment" class="bg-[#FFFFFF0A] focus:bg-[#FFFFFF0A] fixed bottom-20 w-[1120px] p-3" style="box-shadow: 0px 0px 100px 150px black;" placeholder="Прокомментировать" :not-required="true" />
        </div>
        <button :disabled="nextButtonStatus" @click="columnsStore.nextColumn"
          :class="`bg-[#FFFFFF0A] ${nextButtonStatus && 'opacity-50'} cursor-pointer border-[1px] relative z-40 border-[#FFFFFF14] rounded-full w-10 h-10 flex items-center justify-center`"><img
            src="/public/arrow.svg" />
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useColumnsStore } from '~/stores/columnsStore';
import VueMarkdown from 'vue-markdown-render';
import { computed } from 'vue';
import Comment from './comment.vue';
import MainInput from './inputs/main.vue';
import type { IComment } from '~/models/comments';
import { useRequireAuthFetch } from '~/hooks/useRequireAuthFetch';

const columnsStore = useColumnsStore()

const newComment: Ref<string> = useState(() => '')
const sendComment = async () => {
  const response = await useRequireAuthFetch("comments", {
    method: "POST",
    body: JSON.stringify({
      content: newComment.value,
      columnId: columnsStore.selectedColumn!.id,
      matchId: null
    })
  })
  if (response?.status === 'success') {
    newComment.value = ""
    columnsStore.updateComments()
  }
}



const nextButtonStatus = computed(() => (columnsStore.selectedColumnIndex as number) >= columnsStore.total - 1)
const previousButtonStatus = computed(() => (columnsStore.selectedColumnIndex as number) <= 0)
</script>

<style></style>