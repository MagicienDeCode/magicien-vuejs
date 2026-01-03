<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@vueuse/head'
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

// Set up reactive meta tags
useHead({
  title: computed(() => articleTitle.value || 'Article - MagicienDeCode'),
  meta: computed(() => [
    { name: 'description', content: `Article: ${articleTitle.value}` },
  ]),
})

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
    error.value = true
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="article-detail">
    <div class="header-row">
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
    </div>

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

    <a-back-top />
  </div>
</template>

<style lang="less" scoped>
.article-detail {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  padding-top: 24px;
  min-height: 60vh;
}

.header-row {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  gap: 16px;
}

.breads {
  flex: 1;
}

:deep(.backward-button) {
  display: flex;
  justify-content: flex-end;
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
