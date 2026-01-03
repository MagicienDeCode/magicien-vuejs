<script setup lang="ts">
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import { useHead } from '@vueuse/head'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

// Check if current route is an article detail page
const isArticleDetail = computed(() => {
  return route.name === 'article-detail'
})

useHead({
  title: 'MagicienDeCode',
  meta: [
    { name: 'description', content: 'magiciendecode' },
    { name: 'keywords', content: 'magiciendecode, vue, antd, javascript, typescript, less' },
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' },
  ],
})
</script>

<template>
  <a-layout class="app-layout">
    <a-layout-header class="app-header">
      <div class="header-container">
        <AppHeader />
      </div>
    </a-layout-header>

    <a-layout-content class="app-content">
      <div class="content-container" :class="{ 'full-width': isArticleDetail }">
        <router-view />
      </div>
    </a-layout-content>

    <a-layout-footer class="app-footer">
      <div class="footer-container">
        <AppFooter />
      </div>
    </a-layout-footer>
  </a-layout>
</template>

<style lang="less">
@import '@/assets/styles/global.less';
</style>

<style lang="less" scoped>
.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100%;
  background: @background-color;

  @media (max-width: 768px) {
    overflow-x: hidden;
    max-width: 100vw;
  }
}

.app-header {
  background: @layout-header-background;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 1000;
  padding: 0;
  height: @header-height;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;

  .header-container {
    max-width: 1200px;
    width: 100%;
    padding: 0 24px;
    height: 100%;
    display: flex;
    align-items: center;
  }

  @media (max-width: 1000px) {
    height: 60px;

    .header-container {
      padding: 0 8px;
      overflow-x: hidden;
      height: 60px;
    }
  }
}

.app-content {
  flex: 1;
  background: @background-color;
  padding-top: 0;
  padding-bottom: 0;
  display: flex;
  justify-content: center;
  margin-top: @header-height;

  .content-container {
    width: 100%;
    max-width: 1200px;
    padding: 0 24px;
    margin: 0 auto;

    &.full-width {
      max-width: 100%;
      padding: 0;
    }
  }

  @media (min-width: 1001px) {
    padding-top: 0;
    margin-top: @header-height;
  }

  @media (max-width: 1000px) {
    padding-top: 60px;
    padding-bottom: 16px;
    margin-top: 0;
    overflow-x: hidden;

    .content-container {
      padding: 0 12px;
      overflow-x: hidden;
      max-width: 100vw;
    }
  }

  @media (max-width: 768px) {
    padding-top: 60px;
    padding-bottom: 8px;
  }
}

.app-footer {
  background: @layout-header-background;
  color: black;
  padding: 0;
  margin-top: 0;
  width: 100%;
  display: flex;
  justify-content: center;

  .footer-container {
    max-width: 1200px;
    width: 100%;
    padding: 0 24px;
  }

  @media (max-width: 768px) {
    padding: 0;

    .footer-container {
      padding: 0 12px;
      overflow-x: hidden;
    }
  }
}
</style>
