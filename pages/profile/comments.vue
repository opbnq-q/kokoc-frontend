<template>
  <div class="flex flex-col gap-5">
    <Comment  v-for="comment in comments" :author="comment.author" :author-id="comment.id" :column-id="comment.columnId"
      :content="comment.content" :created-at="comment.createdAt" :id="comment.id" :match-id="comment.matchId" />
  </div>
</template>

<script lang="ts" setup>
import Comment from '~/components/comment.vue';
import { useRequireAuthFetch } from '~/hooks/useRequireAuthFetch';
import type { IComment } from '~/models/comments';

definePageMeta({
  layout: 'profile'
})

const comments: Ref<IComment[]> = useState(() => [])

onMounted(async () => {
  const response = await useRequireAuthFetch<{
    comments: IComment[]
  }>("users/me")
  if (response?.status === 'success') {
    comments.value = response.data.comments
  }
})
</script>

<style></style>