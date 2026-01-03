<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useHead } from '@vueuse/head'
import { useRouter, RouterLink } from 'vue-router'
import { LeftOutlined, PlayCircleOutlined, PauseCircleOutlined, ReloadOutlined } from '@ant-design/icons-vue'

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
const isPlaying = ref(false)
const currentPlayingIndex = ref(-1)
const audioRef = ref<HTMLAudioElement | null>(null)

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

onUnmounted(() => {
  stopPlayback()
})

const goBack = () => {
  router.back()
}

const playNextAudio = () => {
  if (currentPlayingIndex.value >= katakanaWords.value.length - 1) {
    // Finished playing all
    stopPlayback()
    return
  }

  currentPlayingIndex.value++
  const word = katakanaWords.value[currentPlayingIndex.value]
  const audioPath = `/src/data/japanese/words/downloads/katakana/${word.katakana}.mp3`

  if (audioRef.value) {
    audioRef.value.src = audioPath
    audioRef.value.play().catch(error => {
      console.error('Failed to play audio:', error)
      // Try next one
      playNextAudio()
    })
  }
}

const startPlayback = () => {
  if (katakanaWords.value.length === 0) return

  isPlaying.value = true
  currentPlayingIndex.value = -1
  playNextAudio()
}

const pausePlayback = () => {
  isPlaying.value = false
  if (audioRef.value) {
    audioRef.value.pause()
  }
}

const stopPlayback = () => {
  isPlaying.value = false
  currentPlayingIndex.value = -1
  if (audioRef.value) {
    audioRef.value.pause()
    audioRef.value.currentTime = 0
  }
}

const resetPlayback = () => {
  stopPlayback()
  currentPlayingIndex.value = -1
}

const handleAudioEnded = () => {
  if (isPlaying.value) {
    // Add a small delay before playing next
    setTimeout(() => {
      playNextAudio()
    }, 500)
  }
}

const handleAudioError = () => {
  console.error('Audio error, skipping to next')
  if (isPlaying.value) {
    playNextAudio()
  }
}

const playIndividualWord = (word: KatakanaWord) => {
  // Pause sequential playback if active
  if (isPlaying.value) {
    pausePlayback()
  }

  const audioPath = `/src/data/japanese/words/downloads/katakana/${word.katakana}.mp3`

  if (audioRef.value) {
    audioRef.value.src = audioPath
    audioRef.value.play().catch(error => {
      console.error('Failed to play audio:', error)
    })
  }
}

const columns = [
  {
    title: 'カタカナ',
    dataIndex: 'katakana',
    key: 'katakana',
    width: '25%',
    customRender: ({ text, record }: { text: string; record: KatakanaWord }) => ({
      children: text,
      props: {
        class: 'clickable-katakana',
        onClick: () => playIndividualWord(record)
      }
    })
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

      <!-- Audio Player Section -->
      <div class="audio-player-section">
        <div class="audio-controls">
          <a-button
            v-if="!isPlaying"
            type="primary"
            size="large"
            @click="startPlayback"
            :disabled="loading || katakanaWords.length === 0"
          >
            <template #icon>
              <PlayCircleOutlined />
            </template>
            Play All Words
          </a-button>

          <a-button
            v-else
            type="primary"
            size="large"
            danger
            @click="pausePlayback"
          >
            <template #icon>
              <PauseCircleOutlined />
            </template>
            Pause
          </a-button>

          <a-button
            size="large"
            @click="resetPlayback"
            :disabled="currentPlayingIndex === -1"
          >
            <template #icon>
              <ReloadOutlined />
            </template>
            Reset
          </a-button>
        </div>

        <div v-if="currentPlayingIndex >= 0" class="current-playing">
          <div class="playing-header">
            <span class="playing-label">Now Playing:</span>
            <span class="playing-progress">{{ currentPlayingIndex + 1 }} / {{ katakanaWords.length }}</span>
          </div>
          <div class="playing-content">
            <div class="playing-main">
              <span class="playing-word">{{ katakanaWords[currentPlayingIndex]?.katakana }}</span>
              <span class="playing-romaji">{{ katakanaWords[currentPlayingIndex]?.romaji }}</span>
            </div>
            <div class="playing-translations">
              <span class="playing-english">
                <span class="translation-label">English:</span>
                {{ katakanaWords[currentPlayingIndex]?.english }}
              </span>
              <span class="playing-chinese">
                <span class="translation-label">中文:</span>
                {{ katakanaWords[currentPlayingIndex]?.chinese }}
              </span>
            </div>
          </div>
          <a-progress
            :percent="Math.round(((currentPlayingIndex + 1) / katakanaWords.length) * 100)"
            :show-info="false"
            stroke-color="#1890ff"
          />
        </div>

        <!-- Hidden audio element -->
        <audio
          ref="audioRef"
          @ended="handleAudioEnded"
          @error="handleAudioError"
          style="display: none;"
        />
      </div>

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

.audio-player-section {
  width: 100%;
  margin-bottom: 32px;
  padding: 24px;
  background: linear-gradient(135deg, #f5f7fa 0%, #e8eef5 100%);
  border-radius: 12px;
  border: 1px solid #e0e6ed;
}

.audio-controls {
  display: flex;
  gap: 12px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.current-playing {
  margin-top: 20px;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.playing-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 2px solid #f0f0f0;
}

.playing-label {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.65);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.playing-progress {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.45);
  font-weight: 500;
  background: #f5f5f5;
  padding: 4px 12px;
  border-radius: 12px;
}

.playing-content {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 16px;
}

.playing-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.playing-word {
  font-size: 32px;
  font-weight: 700;
  color: #1890ff;
  line-height: 1.2;
}

.playing-romaji {
  font-size: 18px;
  color: rgba(0, 0, 0, 0.65);
  font-weight: 500;
}

.playing-translations {
  display: flex;
  justify-content: center;
  gap: 32px;
  flex-wrap: wrap;
  padding: 16px;
  background: #fafafa;
  border-radius: 6px;
}

.playing-english,
.playing-chinese {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.translation-label {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.45);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.playing-english {
  font-size: 16px;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 500;
}

.playing-chinese {
  font-size: 16px;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 500;
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

:deep(.clickable-katakana) {
  cursor: pointer;
  color: #1890ff;
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    color: #40a9ff;
    transform: scale(1.1);
    text-shadow: 0 2px 4px rgba(24, 144, 255, 0.2);
  }

  &:active {
    transform: scale(0.95);
  }

  &::after {
    content: '🔊';
    font-size: 0;
    opacity: 0;
    margin-left: 4px;
    transition: all 0.3s ease;
  }

  &:hover::after {
    font-size: 12px;
    opacity: 0.6;
  }
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
  table-layout: fixed !important;
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
  table-layout: fixed !important;
  display: table !important;
}

:deep(.ant-table-tbody),
:deep(.ant-table-thead) {
  width: 100% !important;
  display: table-row-group !important;
}

:deep(.ant-table-thead) {
  display: table-header-group !important;
}

:deep(.ant-table-tbody > tr),
:deep(.ant-table-thead > tr) {
  display: table-row !important;
  width: 100% !important;
}

:deep(.ant-table-tbody > tr > td),
:deep(.ant-table-thead > tr > th) {
  display: table-cell !important;
}

:deep(.ant-table-content) {
  width: 100% !important;
}

// Responsive adjustments for smaller screens
@media (max-width: 992px) {
  :deep(.ant-table-cell) {
    padding: 10px 6px !important;
    font-size: 14px !important;
  }
}

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

  .audio-player-section {
    padding: 16px;
  }

  .playing-word {
    font-size: 26px;
  }

  .playing-romaji {
    font-size: 16px;
  }

  .playing-translations {
    gap: 20px;
    padding: 12px;
  }

  .playing-english,
  .playing-chinese {
    font-size: 14px;
  }

  :deep(.clickable-katakana:hover) {
    transform: scale(1.05);
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

  .audio-player-section {
    padding: 12px;
  }

  .audio-controls {
    flex-direction: column;
    width: 100%;

    button {
      width: 100%;
    }
  }

  .playing-word {
    font-size: 24px;
  }

  .playing-romaji {
    font-size: 14px;
  }

  .current-playing {
    padding: 16px;
  }

  .playing-header {
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }

  .playing-translations {
    flex-direction: column;
    gap: 16px;
    padding: 12px;
  }

  .playing-english,
  .playing-chinese {
    font-size: 14px;
  }

  .translation-label {
    font-size: 11px;
  }

  :deep(.clickable-katakana) {
    font-size: 13px !important;
  }

  :deep(.clickable-katakana:hover) {
    transform: scale(1.03);
  }

  :deep(.clickable-katakana:hover::after) {
    font-size: 10px;
  }
}
</style>
