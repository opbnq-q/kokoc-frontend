<template>
  <span class="flex justify-center">
    <Search v-model="search" />
  </span>
  <div class="flex flex-col items-center gap-10 mt-10 h-full w-full">
    <ColumnsView />
    <div :class="`flex flex-col gap-5`">
      <Column class="text-white" v-for="(column, index) in columnsStore.columns" :key="column.id" :id="column.id"
        :category="column.category" :created-at="column.createdAt" :title="column.title" :summary="column.summary"
        :likes="column.likes" :dislikes="column.dislikes" :liked="false" :disliked="false" :content="column.content"
        :image="column.image" :index="index" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Search from '~/components/inputs/search.vue';
import type { Ref } from 'vue';
import '~/styles/markdown.scss';
import ColumnsView from '~/components/columnsView.vue';

const search: Ref<string> = useState(() => "")
const columnsStore = useColumnsStore()
columnsStore.firstLoad()

watch(search, () => {
  if (search.value) {
    columnsStore.searchColumns(search.value)
  } else {
    columnsStore.firstLoad()
  }
})

onMounted(() => {
  window.addEventListener('scrollend', columnsStore.loadColumns)
})
</script>
