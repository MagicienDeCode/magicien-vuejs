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
    const rawMarkdown = await loadMarkdownContent(path)

    if (rawMarkdown) {
      const parsed = parseMarkdown(rawMarkdown)
      markdownContent.value = parsed.content
      articleTitle.value = parsed.data.title || slug.value
    } else {
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
      <h1 class="article-title">{{ articleTitle }}</h1>
      <MarkdownRenderer :content="markdownContent" />
    </div>

    <a-float-button-back-top />
  </div>
</template>

<style lang="less" scoped>
.article-detail {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
}

.breads {
  margin-bottom: 24px;
}

.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

.error-container {
  padding: 48px 0;
}

.article-content {
  background: white;
  padding: 32px;
  border-radius: @border-radius-base;
  box-shadow: @box-shadow-base;
}

.article-title {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 24px;
  color: @text-color;
  border-bottom: 2px solid @primary-color;
  padding-bottom: 16px;
}
</style>
