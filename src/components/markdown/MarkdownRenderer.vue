<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { renderMarkdown } from '@/utils/markdown'

interface Props {
  content: string
}

const props = defineProps<Props>()

const htmlContent = ref('')

const processContent = () => {
  htmlContent.value = renderMarkdown(props.content)
}

onMounted(() => {
  processContent()
})

watch(() => props.content, () => {
  processContent()
})
</script>

<template>
  <div class="markdown-body" v-html="htmlContent"></div>
</template>

<style lang="less">
@import '@/assets/styles/components/markdown.less';
</style>
