<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
  router.back()
}
</script>

<template>
  <div class="backward-button">
    <a-button type="primary" @click="goBack">
      <template #icon>
        <LeftOutlined />
      </template>
      Back
    </a-button>
  </div>
</template>

<style lang="less" scoped>
@import '@/assets/styles/components/backward.less';
</style>
