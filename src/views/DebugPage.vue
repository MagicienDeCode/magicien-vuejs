<script setup lang="ts">
import { ref, onMounted } from 'vue'

const markdownModules = import.meta.glob('@/data/**/*.md', { query: '?raw', import: 'default', eager: false })
const jsonModules = import.meta.glob('@/data/**/title.json', { eager: false })

const markdownKeys = ref<string[]>([])
const jsonKeys = ref<string[]>([])

onMounted(() => {
  markdownKeys.value = Object.keys(markdownModules)
  jsonKeys.value = Object.keys(jsonModules)
  console.log('Markdown module keys:', markdownKeys.value)
  console.log('JSON module keys:', jsonKeys.value)
})
</script>

<template>
  <div class="debug-page">
    <h1>Debug: Available Modules</h1>

    <h2>Markdown Files ({{ markdownKeys.length }})</h2>
    <ul>
      <li v-for="key in markdownKeys" :key="key">{{ key }}</li>
    </ul>

    <h2>JSON Files ({{ jsonKeys.length }})</h2>
    <ul>
      <li v-for="key in jsonKeys" :key="key">{{ key }}</li>
    </ul>
  </div>
</template>

<style scoped>
.debug-page {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  color: #333;
  margin-bottom: 30px;
}

h2 {
  color: #666;
  margin-top: 30px;
  margin-bottom: 15px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  padding: 8px;
  margin: 4px 0;
  background: #f5f5f5;
  border-radius: 4px;
  font-family: monospace;
  font-size: 14px;
}
</style>
