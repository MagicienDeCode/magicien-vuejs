<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { useMeta } from '@/composables/useMeta'
import { useArticles } from '@/composables/useArticles'
import PageLink from '@/components/common/PageLink.vue'
import type { ArticleMetadata } from '@/composables/useArticles'

useMeta({
  title: 'Articles - MagicienDeCode',
  description: 'Articles and writings of LI Xiang',
})

const { loadArticleMetadata, getRecentArticles } = useArticles()

const bookArticles = ref<ArticleMetadata[]>([])
const codeArticles = ref<ArticleMetadata[]>([])
const chineseArticles = ref<ArticleMetadata[]>([])
const japaneseArticles = ref<ArticleMetadata[]>([])
const englishArticles = ref<ArticleMetadata[]>([])
const frenchArticles = ref<ArticleMetadata[]>([])
const recentArticles = ref<ArticleMetadata[]>([])

onMounted(async () => {
  try {
    const [book, code, chinese, japanese, english, french] = await Promise.all([
      loadArticleMetadata('book'),
      loadArticleMetadata('code'),
      loadArticleMetadata('chinese'),
      loadArticleMetadata('japanese'),
      loadArticleMetadata('english'),
      loadArticleMetadata('french'),
    ])

    bookArticles.value = book.children
    codeArticles.value = code.children
    chineseArticles.value = chinese.children
    japaneseArticles.value = japanese.children
    englishArticles.value = english.children
    frenchArticles.value = french.children

    recentArticles.value = await getRecentArticles(
      ['book', 'code', 'chinese', 'japanese', 'english', 'french'],
      5
    )
  } catch (error) {
    console.error('Failed to load articles:', error)
  }
})
</script>

<template>
  <div class="page-container">
    <a-breadcrumb separator=">" class="breads">
      <a-breadcrumb-item>
        <RouterLink to="/" class="decoration-none">Home</RouterLink>
      </a-breadcrumb-item>
      <a-breadcrumb-item>Articles</a-breadcrumb-item>
    </a-breadcrumb>

    <div class="page-content">
      <aside class="page-sidebar">
        <a-timeline class="pages-timeline">
              <a-timeline-item color="grey">
                <template #dot>
                  <a-badge>
                    <a-avatar src="/book.png" :size="20" />
                  </a-badge>
                </template>
                <a href="#book" class="decoration-none">
                  <span class="pages-line-text">BOOK</span>
                </a>
              </a-timeline-item>
              <a-timeline-item color="grey">
                <template #dot>
                  <a-badge>
                    <a-avatar src="/star.png" :size="20" />
                  </a-badge>
                </template>
                <a href="#code" class="decoration-none">
                  <span class="pages-line-text">CODE</span>
                </a>
              </a-timeline-item>
              <a-timeline-item color="grey">
                <template #dot>
                  <a-badge>
                    <a-avatar src="/zh.png" :size="20" />
                  </a-badge>
                </template>
                <a href="#zh" class="decoration-none">
                  <span class="pages-line-text">CHINESE</span>
                </a>
              </a-timeline-item>
              <a-timeline-item color="grey">
                <template #dot>
                  <a-badge>
                    <a-avatar src="/ja.png" :size="20" />
                  </a-badge>
                </template>
                <a href="#ja" class="decoration-none">
                  <span class="pages-line-text">JAPANESE</span>
                </a>
              </a-timeline-item>
              <a-timeline-item color="grey">
                <template #dot>
                  <a-badge>
                    <a-avatar src="/uk.png" :size="20" />
                  </a-badge>
                </template>
                <a href="#uk" class="decoration-none">
                  <span class="pages-line-text">ENGLISH</span>
                </a>
              </a-timeline-item>
              <a-timeline-item color="grey">
                <template #dot>
                  <a-badge>
                    <a-avatar src="/de.png" :size="20" />
                  </a-badge>
                </template>
                <a href="#de" class="decoration-none">
                  <span class="pages-line-text">GERMAN</span>
                </a>
              </a-timeline-item>
              <a-timeline-item color="grey">
                <template #dot>
                  <a-badge>
                    <a-avatar src="/fr.png" :size="20" />
                  </a-badge>
                </template>
                <a href="#fr" class="decoration-none">
                  <span class="pages-line-text">FRENCH</span>
                </a>
              </a-timeline-item>
        </a-timeline>
      </aside>

      <main class="page-main">


          <div>
            <a-divider orientation="left">
              <div class="exp-head">
                <img alt="recent" class="company-icon" src="/recent.png" />
                <span class="text-link">RECENT</span>
              </div>
            </a-divider>
            <a-row>
              <a-col :span="24">
                <PageLink :titles="recentArticles" />
              </a-col>
            </a-row>
          </div>

          <div>
            <h2 id="book"></h2>
            <a-divider orientation="left">
              <div class="exp-head">
                <img alt="book" class="company-icon" src="/book.png" />
                <span class="text-link">BOOK</span>
              </div>
            </a-divider>
            <a-row>
              <a-col :span="24">
                <PageLink :titles="bookArticles" />
              </a-col>
            </a-row>
            <br />

            <h2 id="code"></h2>
            <a-divider orientation="left">
              <div class="exp-head">
                <img alt="code" class="company-icon" src="/algo.png" />
                <span class="text-link">CODE</span>
              </div>
            </a-divider>
            <a-row>
              <a-col :span="24">
                <PageLink :titles="codeArticles" />
              </a-col>
            </a-row>
            <br />

            <h2 id="zh"></h2>
            <a-divider orientation="left">
              <div class="exp-head">
                <img alt="chinese" class="company-icon" src="/zh.png" />
                <span class="text-link">CHINESE</span>
              </div>
            </a-divider>
            <a-row>
              <a-col :span="24">
                <PageLink :titles="chineseArticles" />
              </a-col>
            </a-row>
            <br />

            <h2 id="ja"></h2>
            <a-divider orientation="left">
              <div class="exp-head">
                <img alt="japanese" class="company-icon" src="/ja.png" />
                <span class="text-link">JAPANESE</span>
              </div>
            </a-divider>
            <a-row>
              <a-col :span="24">
                <PageLink :titles="japaneseArticles" />
              </a-col>
            </a-row>
            <br />

            <h2 id="uk"></h2>
            <a-divider orientation="left">
              <div class="exp-head">
                <img alt="english" class="company-icon" src="/uk.png" />
                <span class="text-link">ENGLISH</span>
              </div>
            </a-divider>
            <a-row>
              <a-col :span="24">
                <PageLink :titles="englishArticles" />
              </a-col>
            </a-row>
            <br />

            <h2 id="de"></h2>
            <a-divider orientation="left">
              <div class="exp-head">
                <img alt="german" class="company-icon" src="/de.png" />
                <span class="text-link">GERMAN</span>
              </div>
            </a-divider>
            <br />

            <h2 id="fr"></h2>
            <a-divider orientation="left">
              <div class="exp-head">
                <img alt="french" class="company-icon" src="/fr.png" />
                <span class="text-link">FRENCH</span>
              </div>
            </a-divider>
            <a-row>
              <a-col :span="24">
                <PageLink :titles="frenchArticles" />
              </a-col>
            </a-row>
            <br />
          </div>
        </main>
      </div>
      <a-float-button-back-top />
    </div>
</template>

<style lang="less" scoped>
@import '@/assets/styles/pages/articles.less';
</style>
