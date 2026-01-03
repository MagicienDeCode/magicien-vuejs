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
    <a-button @click="goBack" shape="circle" class="back-icon-button">
      <template #icon>
        <LeftOutlined />
      </template>
    </a-button>
  </div>
</template>

<style lang="less" scoped>
@import '@/assets/styles/components/backward.less';

.back-icon-button {
  background-color: #f0f0f0;
  border-color: #d9d9d9;
  color: rgba(0, 0, 0, 0.85);

  &:hover {
    background-color: #e6e6e6;
    border-color: #bfbfbf;
    color: rgba(0, 0, 0, 0.85);
  }

  &:active {
    background-color: #d9d9d9;
    border-color: #bfbfbf;
  }
}
</style>
