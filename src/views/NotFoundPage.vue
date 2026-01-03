<script setup lang="ts">
import { useMeta } from '@/composables/useMeta'

useMeta({
  title: 'Page Not Found - MagicienDeCode',
  description: '404 - Page not found',
})
</script>

<template>
  <a-result
    status="404"
    title="404"
    sub-title="Sorry, the page you visited does not exist."
  >
    <template #extra>
      <a-button type="primary" @click="$router.push('/')">
        Back Home
      </a-button>
    </template>
  </a-result>
</template>

<style scoped>
.ant-result {
  padding: 48px 32px;
}
</style>
