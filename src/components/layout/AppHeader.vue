<script setup lang="ts">
import { RouterLink } from 'vue-router'
import {
  FileDoneOutlined,
  AppstoreAddOutlined,
  FolderOpenOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons-vue'
</script>

<template>
  <div class="header-row">
    <div class="header-left">
      <div class="header-logo">
        <div class="desktop">
          <RouterLink to="/">
            <img
              alt="logo"
              src="@/assets/images/logo_bks.png"
              class="header-flex-img"
            />
          </RouterLink>
        </div>
        <div class="mobile">
          <RouterLink to="/">
            <img
              alt="logo"
              src="@/assets/images/logo7.png"
              class="header-flex-img-mobile"
            />
          </RouterLink>
        </div>
      </div>
      <div class="header-nav">
        <a-menu
          mode="horizontal"
          :selectable="false"
          trigger-sub-menu-action="hover"
          class="header-menu"
        >
          <a-menu-item key="1">
            <template #icon>
              <FileDoneOutlined style="font-size: 1.3em" />
            </template>
            <RouterLink to="/resume" class="decoration-none">
              <span class="menu-titles">Resume</span>
            </RouterLink>
          </a-menu-item>
          <a-menu-item key="2">
            <template #icon>
              <AppstoreAddOutlined style="font-size: 1.3em" />
            </template>
            <RouterLink to="/projects" class="decoration-none">
              <span class="menu-titles">Projects</span>
            </RouterLink>
          </a-menu-item>
          <a-sub-menu key="sub2">
            <template #icon>
              <FolderOpenOutlined style="font-size: 1.3em" />
            </template>
            <template #title>
              <RouterLink to="/articles" class="decoration-none">
                <span class="menu-titles">Articles ↓</span>
              </RouterLink>
            </template>
            <a-menu-item key="7">
              <RouterLink to="/articles#book" class="decoration-none">
                <span>Book</span>
              </RouterLink>
            </a-menu-item>
            <a-menu-item key="9">
              <RouterLink to="/articles#code" class="decoration-none">
                <span>Code</span>
              </RouterLink>
            </a-menu-item>
            <a-menu-item key="8">
              <RouterLink to="/articles#zh" class="decoration-none">
                <span>Chinese</span>
              </RouterLink>
            </a-menu-item>
            <a-menu-item key="11">
              <RouterLink to="/articles#ja" class="decoration-none">
                <span>Japanese</span>
              </RouterLink>
            </a-menu-item>
            <a-menu-item key="12">
              <RouterLink to="/articles#fr" class="decoration-none">
                <span>French</span>
              </RouterLink>
            </a-menu-item>
            <a-menu-item key="13">
              <RouterLink to="/articles#de" class="decoration-none">
                <span>German</span>
              </RouterLink>
            </a-menu-item>
            <a-menu-item key="14">
              <RouterLink to="/articles#uk" class="decoration-none">
                <span>English</span>
              </RouterLink>
            </a-menu-item>
          </a-sub-menu>
        </a-menu>

        <!-- Mobile menu (width < 1000px) -->
        <a-menu
          mode="horizontal"
          class="header-menu-1000"
          :selectable="false"
          trigger-sub-menu-action="hover"
        >
          <a-menu-item key="1">
            <RouterLink to="/resume" class="decoration-none">
              <FileDoneOutlined style="font-size: 1.3em" />
            </RouterLink>
          </a-menu-item>
          <a-menu-item key="2">
            <RouterLink to="/projects" class="decoration-none">
              <AppstoreAddOutlined style="font-size: 1.3em" />
            </RouterLink>
          </a-menu-item>
          <a-menu-item key="3">
            <RouterLink to="/articles" class="decoration-none">
              <FolderOpenOutlined style="font-size: 1.3em" />
            </RouterLink>
          </a-menu-item>
        </a-menu>
      </div>
    </div>

    <div class="header-right">
      <a-popover :style="{ padding: 0 }">
        <template #content>
          <a-qrcode
            value="https://github.com/MagicienDeCode/images/blob/master/cv/xiang_en_2024.pdf"
            :bordered="false"
          />
        </template>
        <img
          alt="cv"
          class="cv-img"
          src="@/assets/images/qrcode.png"
        />
      </a-popover>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '@/assets/styles/components/header.less';
</style>
