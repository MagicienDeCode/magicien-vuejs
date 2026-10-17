<script setup lang="ts">
import { ref, onUnmounted } from 'vue'
import { useHead } from '@vueuse/head'
import { useRouter, RouterLink } from 'vue-router'
import { LeftOutlined, PlayCircleOutlined, PauseCircleOutlined, ReloadOutlined } from '@ant-design/icons-vue'

useHead({
  title: 'BELIEVE - MagicienDeCode',
  meta: [
    { name: 'description', content: 'BELIEVE - Japanese song lyrics with hiragana, romaji and Chinese translation' },
  ],
})

interface LyricLine {
  kanji: string
  hiragana: string
  romaji: string
  chinese: string
}

const router = useRouter()
const goBack = () => {
  router.back()
}

const audioPath = '/data/japanese/songs/believe.mp3'
const audioRef = ref<HTMLAudioElement | null>(null)
const isPlaying = ref(false)
const hasStarted = ref(false)

const startPlayback = () => {
  if (!audioRef.value) return
  audioRef.value.play()
    .then(() => {
      isPlaying.value = true
      hasStarted.value = true
    })
    .catch(error => {
      console.error('Failed to play audio:', error)
    })
}

const pausePlayback = () => {
  isPlaying.value = false
  if (audioRef.value) {
    audioRef.value.pause()
  }
}

const resetPlayback = () => {
  isPlaying.value = false
  hasStarted.value = false
  if (audioRef.value) {
    audioRef.value.pause()
    audioRef.value.currentTime = 0
  }
}

const handleAudioEnded = () => {
  isPlaying.value = false
}

const handleAudioError = () => {
  console.error('Audio error: failed to load', audioPath)
  isPlaying.value = false
}

const currentTime = ref(0)
const duration = ref(0)

const handleTimeUpdate = () => {
  if (audioRef.value) {
    currentTime.value = audioRef.value.currentTime
  }
}

const handleLoadedMetadata = () => {
  if (audioRef.value) {
    duration.value = audioRef.value.duration
  }
}

const seekTo = (value: number | [number, number]) => {
  if (!audioRef.value || typeof value !== 'number') return
  audioRef.value.currentTime = value
  currentTime.value = value
  hasStarted.value = true
}

const formatTime = (seconds: number) => {
  if (!Number.isFinite(seconds)) return '0:00'
  const minutes = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${minutes}:${secs.toString().padStart(2, '0')}`
}

onUnmounted(() => {
  resetPlayback()
})

const showHiragana = ref(true)
const showRomaji = ref(true)
const showChinese = ref(true)

const stanzas: LyricLine[][] = [
  [
    { kanji: 'たとえば君が傷ついて', hiragana: 'たとえばきみがきずついて', romaji: 'tatoeba kimi ga kizutsuite', chinese: '假如你受了伤痛' },
    { kanji: 'くじけそうになった時は', hiragana: 'くじけそうになったときは', romaji: 'kujikesō ni natta toki wa', chinese: '快要一蹶不振的时候' },
    { kanji: '必ず僕がそばにいて', hiragana: 'かならずぼくがそばにいて', romaji: 'kanarazu boku ga soba ni ite', chinese: '我一定会陪在你的身旁' },
    { kanji: 'ささえてあげるよ その肩を', hiragana: 'ささえてあげるよ そのかたを', romaji: 'sasaete ageru yo sono kata o', chinese: '我会用这肩膀支撑着你' },
  ],
  [
    { kanji: '世界中の希望のせて', hiragana: 'せかいじゅうのきぼうのせて', romaji: 'sekaijū no kibō nosete', chinese: '承载着全世界的希望' },
    { kanji: 'この地球はまわってる', hiragana: 'このちきゅうはまわってる', romaji: 'kono chikyū wa mawatteru', chinese: '这颗地球不停旋转' },
    { kanji: '今 未来の扉を開ける時', hiragana: 'いまみらいのとびらをあけるとき', romaji: 'ima mirai no tobira o akeru toki', chinese: '此刻正是开启未来之门之时' },
    { kanji: '悲しみや 苦しみが', hiragana: 'かなしみやくるしみが', romaji: 'kanashimi ya kurushimi ga', chinese: '所有悲伤与痛苦' },
    { kanji: 'いつの日か喜びに変わるだろう', hiragana: 'いつのひかよろこびにかわるだろう', romaji: 'itsu no hi ka yorokobi ni kawaru darō', chinese: '终有一天会化作喜悦' },
    { kanji: 'I believe in future', hiragana: 'アイ・ビリーブ・イン・フューチャー', romaji: 'I believe in future', chinese: '我相信未来' },
    { kanji: '信じてる', hiragana: 'しんじてる', romaji: 'shinjiteru', chinese: '我坚信' },
  ],
  [
    { kanji: 'もしも誰かが君のそばで', hiragana: 'もしもだれかがきみのそばで', romaji: 'moshimo dareka ga kimi no soba de', chinese: '倘若有谁在你的身边' },
    { kanji: '泣き出しそうになった時は', hiragana: 'なきだしそうになったときは', romaji: 'nakidashisō ni natta toki wa', chinese: '快要落泪的时候' },
    { kanji: 'だまって腕をとりながら', hiragana: 'だまってうでをとりながら', romaji: 'damatte ude o torinagara', chinese: '默默牵起对方的手臂' },
    { kanji: '一緒に歩いてくれるよね', hiragana: 'いっしょにあるいてくれるよね', romaji: 'issho ni aruite kureru yo ne', chinese: '一同向前走下去对吧' },
  ],
  [
    { kanji: '世界中の優しさで', hiragana: 'せかいじゅうのやさしさで', romaji: 'sekaijū no yasashisa de', chinese: '用世间全部的温柔' },
    { kanji: 'この地球をつつみたい', hiragana: 'このちきゅうをつつみたい', romaji: 'kono chikyū o tsutsumitai', chinese: '想要包裹整个地球' },
    { kanji: '今 素直な気持ちになれるなら', hiragana: 'いますなおなきもちになれるなら', romaji: 'ima sunao na kimochi ni nareru nara', chinese: '如果此刻能找回坦诚本心' },
    { kanji: '憧れや 愛しさが', hiragana: 'あこがれやいとしさが', romaji: 'akogare ya itoshisa ga', chinese: '憧憬与爱意' },
    { kanji: '大空に弾けて光るだろう', hiragana: 'おおぞらにはじけてひかるだろう', romaji: 'ōzora ni hajikete hikaru darō', chinese: '会在广阔天空绽放光芒' },
    { kanji: 'I believe in future', hiragana: 'アイ・ビリーブ・イン・フューチャー', romaji: 'I believe in future', chinese: '我相信未来' },
    { kanji: '信じてる', hiragana: 'しんじてる', romaji: 'shinjiteru', chinese: '我坚信' },
  ],
  [
    { kanji: '今 未来の扉を開ける時', hiragana: 'いまみらいのとびらをあけるとき', romaji: 'ima mirai no tobira o akeru toki', chinese: '此刻正是开启未来之门之时' },
    { kanji: 'I believe in future', hiragana: 'アイ・ビリーブ・イン・フューチャー', romaji: 'I believe in future', chinese: '我相信未来' },
    { kanji: '信じてる', hiragana: 'しんじてる', romaji: 'shinjiteru', chinese: '我坚信' },
  ],
]
</script>

<template>
  <div class="believe-page">
    <div class="header-row">
      <a-breadcrumb separator=">" class="breads">
        <a-breadcrumb-item>
          <RouterLink to="/" class="decoration-none">Home</RouterLink>
        </a-breadcrumb-item>
        <a-breadcrumb-item>
          <RouterLink to="/articles" class="decoration-none">Articles</RouterLink>
        </a-breadcrumb-item>
        <a-breadcrumb-item>BELIEVE</a-breadcrumb-item>
      </a-breadcrumb>

      <a-button @click="goBack" size="small" class="back-button">
        <template #icon>
          <LeftOutlined />
        </template>
        <span>Back</span>
      </a-button>
    </div>

    <div class="page-content">
      <h1>BELIEVE</h1>
      <p class="subtitle">歌词 · ひらがな · Romaji · 中文</p>

      <div class="audio-section">
        <div class="audio-controls">
          <a-button v-if="!isPlaying" type="primary" size="large" @click="startPlayback">
            <template #icon>
              <PlayCircleOutlined />
            </template>
            Play
          </a-button>

          <a-button v-else type="primary" size="large" danger @click="pausePlayback">
            <template #icon>
              <PauseCircleOutlined />
            </template>
            Pause
          </a-button>

          <a-button size="large" @click="resetPlayback" :disabled="!hasStarted">
            <template #icon>
              <ReloadOutlined />
            </template>
            Reset
          </a-button>
        </div>

        <div class="audio-progress">
          <span class="audio-time">{{ formatTime(currentTime) }}</span>
          <a-slider
            class="audio-slider"
            :value="currentTime"
            :min="0"
            :max="duration || 1"
            :step="0.1"
            :disabled="!duration"
            :tip-formatter="(value: number) => formatTime(value)"
            @change="seekTo"
          />
          <span class="audio-time">{{ formatTime(duration) }}</span>
        </div>

        <!-- Hidden audio element -->
        <audio
          ref="audioRef"
          :src="audioPath"
          preload="metadata"
          @timeupdate="handleTimeUpdate"
          @loadedmetadata="handleLoadedMetadata"
          @ended="handleAudioEnded"
          @error="handleAudioError"
          style="display: none;"
        />
      </div>

      <div class="toggles">
        <a-checkbox v-model:checked="showHiragana">ひらがな</a-checkbox>
        <a-checkbox v-model:checked="showRomaji">Romaji</a-checkbox>
        <a-checkbox v-model:checked="showChinese">中文</a-checkbox>
      </div>

      <div class="lyrics">
        <div v-for="(stanza, stanzaIndex) in stanzas" :key="stanzaIndex" class="stanza">
          <div v-for="(line, lineIndex) in stanza" :key="lineIndex" class="lyric-line">
            <p class="kanji">{{ line.kanji }}</p>
            <p v-if="showHiragana" class="hiragana">{{ line.hiragana }}</p>
            <p v-if="showRomaji" class="romaji">{{ line.romaji }}</p>
            <p v-if="showChinese" class="chinese">{{ line.chinese }}</p>
          </div>
        </div>
      </div>
    </div>

    <a-back-top />
  </div>
</template>

<style lang="less" scoped>
.believe-page {
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
  align-items: center;
  gap: 0;
  overflow-x: hidden;

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
    margin-bottom: 24px;
    font-size: 14px;
  }
}

.audio-section {
  width: 100%;
  max-width: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;
}

.audio-progress {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
}

.audio-slider {
  flex: 1;
}

.audio-time {
  font-size: 13px;
  color: rgba(0, 0, 0, 0.45);
  font-variant-numeric: tabular-nums;
  min-width: 36px;
  text-align: center;
}

.audio-controls {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
}

.toggles {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 32px;
}

.lyrics {
  width: 100%;
  max-width: 640px;
  margin: 0 auto;
}

.stanza {
  padding: 20px 0;
  border-bottom: 1px dashed #e8e8e8;

  &:last-child {
    border-bottom: none;
  }
}

.lyric-line {
  text-align: center;
  margin-bottom: 18px;

  &:last-child {
    margin-bottom: 0;
  }

  p {
    margin: 2px 0;
    line-height: 1.6;
  }
}

.kanji {
  font-size: 20px;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.88);
}

.hiragana {
  font-size: 15px;
  color: #1890ff;
}

.romaji {
  font-size: 14px;
  font-style: italic;
  color: rgba(0, 0, 0, 0.55);
}

.chinese {
  font-size: 15px;
  color: #8c8c8c;
}

@media (max-width: 768px) {
  .page-content {
    padding: 16px;
  }

  .header-row {
    flex-direction: column;
    align-items: flex-start;
  }

  .back-button {
    align-self: flex-end;
  }

  .kanji {
    font-size: 18px;
  }
}
</style>
