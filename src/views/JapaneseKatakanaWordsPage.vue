<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useHead } from '@vueuse/head'
import { useRouter, RouterLink } from 'vue-router'
import { LeftOutlined } from '@ant-design/icons-vue'

useHead({
  title: 'カタカナ単語 - MagicienDeCode',
  meta: [
    { name: 'description', content: 'Japanese Katakana Words with translations' },
  ],
})

interface KatakanaWord {
  katakana: string
  romaji: string
  english: string
  chinese: string
}

const router = useRouter()
const katakanaWords = ref<KatakanaWord[]>([])
const loading = ref(true)

const parseCSV = (text: string): KatakanaWord[] => {
  const lines = text.trim().split('\n')
  const data: KatakanaWord[] = []

  // Skip header row (index 0) and parse data rows
  for (let i = 1; i < lines.length; i++) {
    const columns = lines[i].split(',').map(col => col.trim())
    if (columns.length >= 4) {
      data.push({
        katakana: columns[0],
        romaji: columns[1],
        english: columns[2],
        chinese: columns[3],
      })
    }
  }

  return data
}

onMounted(async () => {
  try {
    const response = await fetch('/src/data/japanese/words/katakana.csv')
    const text = await response.text()
    katakanaWords.value = parseCSV(text)
  } catch (error) {
    console.error('Failed to load CSV file:', error)
  } finally {
    loading.value = false
  }
})

const goBack = () => {
  router.back()
}

const columns = [
  {
    title: 'カタカナ',
    dataIndex: 'katakana',
    key: 'katakana',
    width: '25%',
  },
  {
    title: 'Romaji',
    dataIndex: 'romaji',
    key: 'romaji',
    width: '25%',
  },
  {
    title: 'English',
    dataIndex: 'english',
    key: 'english',
    width: '25%',
  },
  {
    title: '中文',
    dataIndex: 'chinese',
    key: 'chinese',
    width: '25%',
  },
]
</script>

<template>
  <div class="katakana-words-page">
    <div class="header-row">
      <a-breadcrumb separator=">" class="breads">
        <a-breadcrumb-item>
          <RouterLink to="/" class="decoration-none">Home</RouterLink>
        </a-breadcrumb-item>
        <a-breadcrumb-item>
          <RouterLink to="/articles" class="decoration-none">Articles</RouterLink>
        </a-breadcrumb-item>
        <a-breadcrumb-item>カタカナ単語</a-breadcrumb-item>
      </a-breadcrumb>

      <a-button @click="goBack" size="small" class="back-button">
        <template #icon>
          <LeftOutlined />
        </template>
        <span>Back</span>
      </a-button>
    </div>

    <div class="page-content">
      <h1>カタカナ単語</h1>
      <p class="subtitle">Katakana Vocabulary</p>

      <a-table
        :data-source="katakanaWords"
        :columns="columns"
        :loading="loading"
        :pagination="{ pageSize: 20, showSizeChanger: true, showTotal: (total) => `Total ${total} words` }"
        :row-class-name="(_: any, index: number) => index % 2 === 0 ? 'table-row-light' : 'table-row-dark'"
        :row-key="(record: KatakanaWord) => record.katakana"
      />
    </div>

    <a-back-top />
  </div>
</template>

<style lang="less" scoped>
.katakana-words-page {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  padding-top: 24px;
  min-height: 60vh;
}

.header-row {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  gap: 16px;
}

.breads {
  flex: 1;
}

.back-button {
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

  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
    border-color: rgba(0, 0, 0, 0.45);
    color: rgba(0, 0, 0, 0.88);
  }
}

.page-content {
  width: 100%;
  background: white;
  padding: 32px;
  border-radius: @border-radius-base;
  box-shadow: @box-shadow-base;
  flex-direction: column;
  gap: 0;
  overflow-x: auto;

  h1 {
    color: #1890ff;
    margin-bottom: 8px;
    margin-top: 0;
    text-align: center;
    width: 100%;
    display: block;
  }

  .subtitle {
    text-align: center;
    color: rgba(0, 0, 0, 0.45);
    margin-bottom: 32px;
    font-size: 14px;
  }
}

:deep(.table-row-light) {
  background-color: #fafafa;
}

:deep(.table-row-dark) {
  background-color: #ffffff;
}

:deep(.ant-table-cell) {
  text-align: center !important;
  font-size: 15px !important;
  padding: 12px 8px !important;
}

:deep(.ant-table-thead > tr > th) {
  background-color: #1890ff !important;
  color: white !important;
  font-weight: 600 !important;
  text-align: center !important;
}

:deep(.ant-table) {
  font-size: 15px;
  width: 100% !important;
}

:deep(.ant-table-wrapper) {
  width: 100% !important;
}

:deep(.ant-spin-nested-loading),
:deep(.ant-spin-container) {
  width: 100% !important;
}

:deep(.ant-table table) {
  width: 100% !important;
}

// Responsive adjustments for smaller screens
@media (max-width: 768px) {
  .page-content {
    padding: 16px;
  }

  :deep(.ant-table-cell) {
    padding: 8px 4px !important;
    font-size: 13px !important;
  }

  .header-row {
    flex-direction: column;
    align-items: flex-start;
  }

  .back-button {
    align-self: flex-end;
  }
}

@media (max-width: 576px) {
  :deep(.ant-table-cell) {
    padding: 6px 2px !important;
    font-size: 12px !important;
  }

  h1 {
    font-size: 24px;
  }
}
</style>
