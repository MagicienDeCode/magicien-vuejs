<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useMeta } from '@/composables/useMeta'
import { useArticles } from '@/composables/useArticles'
import { parseMarkdown } from '@/utils/markdown'
import MarkdownRenderer from '@/components/markdown/MarkdownRenderer.vue'
import BackButton from '@/components/markdown/BackButton.vue'

const route = useRoute()
const { loadMarkdownContent } = useArticles()

const markdownContent = ref('')
const articleTitle = ref('')
const loading = ref(true)
const error = ref(false)

const category = computed(() => route.params.category as string)
const slug = computed(() => route.params.slug as string)

// Use watch to update meta when article loads
watch(articleTitle, (newTitle) => {
  useMeta({
    title: newTitle || 'Article - MagicienDeCode',
    description: `Article: ${newTitle}`,
  })
}, { immediate: true })

onMounted(async () => {
  try {
    loading.value = true
    const path = `${category.value}/${slug.value}`
    console.log('Loading article from path:', path)
    const rawMarkdown = await loadMarkdownContent(path)

    console.log('Loaded markdown length:', rawMarkdown?.length || 0)
    if (rawMarkdown) {
      const parsed = parseMarkdown(rawMarkdown)
      console.log('Parsed markdown data:', parsed.data)
      markdownContent.value = parsed.content
      articleTitle.value = parsed.data.title || slug.value
    } else {
      console.error('No markdown content loaded')
      error.value = true
    }
  } catch (err) {
    console.error('Failed to load article:', err)
    error.value = true
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="article-detail">
    <a-breadcrumb separator=">" class="breads">
      <a-breadcrumb-item>
        <RouterLink to="/" class="decoration-none">Home</RouterLink>
      </a-breadcrumb-item>
      <a-breadcrumb-item>
        <RouterLink to="/articles" class="decoration-none">Articles</RouterLink>
      </a-breadcrumb-item>
      <a-breadcrumb-item>{{ articleTitle || 'Loading...' }}</a-breadcrumb-item>
    </a-breadcrumb>

    <BackButton />

    <div v-if="loading" class="loading-container">
      <a-spin size="large" tip="Loading article..." />
    </div>

    <div v-else-if="error" class="error-container">
      <a-result
        status="error"
        title="Failed to load article"
        sub-title="The article you're looking for could not be found."
      >
        <template #extra>
          <a-button type="primary" @click="$router.push('/articles')">
            Back to Articles
          </a-button>
        </template>
      </a-result>
    </div>

    <div v-else class="article-content">
      <MarkdownRenderer :content="markdownContent" />
    </div>

    <a-float-button-back-top />
  </div>
</template>

<style lang="less" scoped>
.article-detail {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  min-height: 60vh;
}

.breads {
  margin-bottom: 24px;
  width: 100%;
  align-self: center;
}

:deep(.backward-button) {
  width: 100%;
  margin-bottom: 24px;
  display: flex;
  justify-content: flex-start;
}

.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  width: 100%;
}

.error-container {
  padding: 48px 0;
  width: 100%;
  display: flex;
  justify-content: center;
}

.article-content {
  background: white;
  padding: 10px;
  border-radius: @border-radius-base;
  box-shadow: @box-shadow-base;
  width: 100%;
  margin: 0 auto;
}
</style>
