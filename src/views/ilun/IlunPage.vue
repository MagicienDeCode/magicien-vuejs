<template>
  <div class="ilun-page">
    <div class="ilun-container">
      <h1 class="ilun-title">今天吃什么？</h1>
      <PrizeWheel />
    </div>
  </div>
</template>

<script setup lang="ts">
import PrizeWheel from '@/components/ilun/PrizeWheel.vue'
import { useMeta } from '@/composables/useMeta'

useMeta({
  title: '今天吃什么 - Ilun',
  description: '转盘抽奖决定今天吃什么',
  keywords: 'ilun, prize wheel, 转盘抽奖, 美食',
})
</script>

<style scoped lang="less">
.ilun-page {
  min-height: calc(100vh - 64px - 70px);
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f0f9ff;
  padding: 40px 20px;
}

.ilun-container {
  text-align: center;
  max-width: 800px;
  width: 100%;
}

.ilun-title {
  color: #1677ff;
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 40px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    font-size: 36px;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
    margin-bottom: 20px;
  }
}
</style>
