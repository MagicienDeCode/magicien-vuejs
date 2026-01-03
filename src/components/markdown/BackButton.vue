<script setup lang="ts">
import { useRouter } from 'vue-router'
import { LeftOutlined } from '@ant-design/icons-vue'

const router = useRouter()

const goBack = () => {
  router.back()
}
</script>

<template>
  <div class="backward-button">
    <a-button @click="goBack" size="small" class="back-icon-button">
      <template #icon>
        <LeftOutlined />
      </template>
      <span class="back-text">Back</span>
    </a-button>
  </div>
</template>

<style lang="less" scoped>
@import '@/assets/styles/components/backward.less';

.back-icon-button {
  background-color: transparent;
  border: 1px solid #d9d9d9;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 12px;
  height: 28px;
  border-radius: 4px;
  transition: all 0.3s ease;

  .back-text {
    font-size: 14px;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
    border-color: rgba(0, 0, 0, 0.45);
    color: rgba(0, 0, 0, 0.88);
  }

  &:active {
    background-color: rgba(0, 0, 0, 0.06);
    border-color: rgba(0, 0, 0, 0.45);
  }
}
</style>
