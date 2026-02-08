<script setup lang="ts">
import { ref, onMounted } from 'vue'

const categories = ['book', 'chinese', 'code', 'english', 'french', 'japanese']
const categoryData = ref<Record<string, any>>({})
const loadingStatus = ref<string>('Loading...')

onMounted(async () => {
  try {
    for (const category of categories) {
      const response = await fetch(`/data/${category}/title.json`)
      if (response.ok) {
        const data = await response.json()
        categoryData.value[category] = data
      }
    }
    loadingStatus.value = 'Loaded successfully'
    console.log('Category data:', categoryData.value)
  } catch (error) {
    loadingStatus.value = `Error: ${error}`
    console.error('Failed to load category data:', error)
  }
})
</script>

<template>
  <div class="debug-page">
    <h1>Debug: Available Data from /public/data</h1>
    <p>Status: {{ loadingStatus }}</p>

    <div v-for="(data, category) in categoryData" :key="category">
      <h2>{{ category }} ({{ data.children?.length || 0 }} articles)</h2>
      <ul>
        <li v-for="article in data.children" :key="article.page">
          <strong>{{ article.title }}</strong> - {{ article.page }} ({{ article.creationDate }})
        </li>
      </ul>
    </div>
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
