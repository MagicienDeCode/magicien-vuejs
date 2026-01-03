<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useHead } from '@vueuse/head'
import { useRouter, RouterLink } from 'vue-router'
import { LeftOutlined } from '@ant-design/icons-vue'

useHead({
  title: '日本語五十音 - MagicienDeCode',
  meta: [
    { name: 'description', content: 'Japanese Hiragana and Katakana Chart' },
  ],
})

const router = useRouter()
const hiraganaData = ref<string[][]>([])
const katakanaData = ref<string[][]>([])

const parseCSV = (text: string): string[][] => {
  const lines = text.trim().split('\n')
  return lines.map(line => line.split(','))
}

onMounted(async () => {
  try {
    const [hiraganaRes, katakanaRes] = await Promise.all([
      fetch('/src/data/japanese/fifty.csv'),
      fetch('/src/data/japanese/fifty2.csv')
    ])

    const hiraganaText = await hiraganaRes.text()
    const katakanaText = await katakanaRes.text()

    hiraganaData.value = parseCSV(hiraganaText)
    katakanaData.value = parseCSV(katakanaText)
  } catch (error) {
    console.error('Failed to load CSV files:', error)
  }
})

const goBack = () => {
  router.back()
}
</script>

<template>
  <div class="japanese-fifty-page">
    <div class="header-row">
      <a-breadcrumb separator=">" class="breads">
        <a-breadcrumb-item>
          <RouterLink to="/" class="decoration-none">Home</RouterLink>
        </a-breadcrumb-item>
        <a-breadcrumb-item>
          <RouterLink to="/articles" class="decoration-none">Articles</RouterLink>
        </a-breadcrumb-item>
        <a-breadcrumb-item>日本語五十音</a-breadcrumb-item>
      </a-breadcrumb>

      <a-button @click="goBack" size="small" class="back-button">
        <template #icon>
          <LeftOutlined />
        </template>
        <span>Back</span>
      </a-button>
    </div>

    <div class="page-content">
      <h1>日本語五十音</h1>

      <a-tabs default-active-key="1">
        <a-tab-pane key="1" tab="ひらがな">
          <a-table
            :data-source="hiraganaData"
            :columns="[
              { dataIndex: '0' },
              { dataIndex: '1' },
              { dataIndex: '2' },
              { dataIndex: '3' },
              { dataIndex: '4' },
              { dataIndex: '5' },
              { dataIndex: '6' },
              { dataIndex: '7' },
              { dataIndex: '8' },
              { dataIndex: '9' },
            ]"
            :pagination="false"
            :show-header="false"
            :row-class-name="(_: any, index: number) => index % 2 === 0 ? 'table-row-light' : 'table-row-dark'"
            row-key="index"
          />
        </a-tab-pane>
        <a-tab-pane key="2" tab="カタカナ">
          <a-table
            :data-source="katakanaData"
            :columns="[
              { dataIndex: '0' },
              { dataIndex: '1' },
              { dataIndex: '2' },
              { dataIndex: '3' },
              { dataIndex: '4' },
              { dataIndex: '5' },
              { dataIndex: '6' },
              { dataIndex: '7' },
              { dataIndex: '8' },
              { dataIndex: '9' },
            ]"
            :pagination="false"
            :show-header="false"
            :row-class-name="(_: any, index: number) => index % 2 === 0 ? 'table-row-light' : 'table-row-dark'"
            row-key="index"
          />
        </a-tab-pane>
      </a-tabs>
    </div>

    <a-back-top />
  </div>
</template>

<style lang="less" scoped>
.japanese-fifty-page {
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
    margin-bottom: 32px;
    margin-top: 0;
    text-align: center;
    width: 100%;
    display: block;
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
  font-size: 16px !important;
  padding: 12px 8px !important;
  border: 1px solid #f0f0f0 !important;
  white-space: nowrap !important;
  min-width: 50px !important;
}

:deep(.ant-table-thead > tr > th) {
  background-color: transparent !important;
  color: inherit !important;
  font-weight: normal !important;
  text-align: center !important;
  border: none !important;
}

:deep(.ant-table) {
  font-size: 16px;
  width: 100% !important;
  table-layout: fixed !important;
  min-width: 900px !important;
}

:deep(.ant-table-wrapper) {
  width: 100% !important;
  overflow-x: auto !important;
  -webkit-overflow-scrolling: touch !important;
}

:deep(.ant-spin-nested-loading),
:deep(.ant-spin-container) {
  width: 100% !important;
  overflow-x: auto !important;
}

:deep(.ant-table table) {
  width: 100% !important;
  min-width: 900px !important;
  display: table !important;
}

:deep(.ant-table-tbody > tr > td) {
  border-right: 1px solid #f0f0f0 !important;
}

:deep(.ant-table-tbody > tr),
:deep(.ant-table-thead > tr) {
  display: table-row !important;
}

:deep(.ant-tabs) {
  width: 100% !important;
}

:deep(.ant-tabs-content) {
  width: 100%;
  overflow-x: auto;
}

:deep(.ant-tabs-tabpane) {
  width: 100%;
  overflow-x: auto;
}

// Responsive adjustments for smaller screens
@media (max-width: 1200px) {
  :deep(.ant-table-cell) {
    padding: 10px 6px !important;
    font-size: 15px !important;
    min-width: 45px !important;
  }

  :deep(.ant-table),
  :deep(.ant-table table) {
    min-width: 850px !important;
  }
}

@media (max-width: 992px) {
  .page-content {
    padding: 20px;
  }

  :deep(.ant-table-cell) {
    padding: 8px 5px !important;
    font-size: 14px !important;
    min-width: 42px !important;
  }

  :deep(.ant-table),
  :deep(.ant-table table) {
    min-width: 800px !important;
  }
}

@media (max-width: 768px) {
  .page-content {
    padding: 16px;
  }

  :deep(.ant-table-cell) {
    padding: 8px 4px !important;
    font-size: 13px !important;
    min-width: 38px !important;
  }

  :deep(.ant-table),
  :deep(.ant-table table) {
    min-width: 750px !important;
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
  .page-content {
    padding: 12px;
  }

  :deep(.ant-table-cell) {
    padding: 6px 3px !important;
    font-size: 12px !important;
    min-width: 35px !important;
  }

  :deep(.ant-table),
  :deep(.ant-table table) {
    min-width: 700px !important;
  }

  h1 {
    font-size: 24px;
  }
}

@media (max-width: 400px) {
  .page-content {
    padding: 8px;
  }

  :deep(.ant-table-cell) {
    padding: 4px 2px !important;
    font-size: 11px !important;
    min-width: 32px !important;
  }

  :deep(.ant-table),
  :deep(.ant-table table) {
    min-width: 650px !important;
  }
}
</style>
