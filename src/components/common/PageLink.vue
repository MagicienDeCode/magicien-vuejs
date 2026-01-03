<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import type { ArticleMetadata } from '@/composables/useArticles'

interface Props {
  titles: ArticleMetadata[]
}

const props = defineProps<Props>()

// Sort articles by creation date (newest first)
const sortedTitles = computed(() => {
  return [...props.titles].sort((a, b) => {
    return a.creationDate < b.creationDate ? 1 : -1
  })
})
</script>

<template>
  <div class="page-link-container">
    <a-timeline mode="left" class="page-link-timeline">
      <a-timeline-item
        v-for="(title, index) in sortedTitles"
        :key="index"
        :label="title.creationDate"
      >
        <RouterLink :to="`/articles/${title.page}`">{{ title.title }}</RouterLink>
      </a-timeline-item>
    </a-timeline>
  </div>
</template>

<style lang="less" scoped>
@import '@/assets/styles/components/page-link.less';
</style>
