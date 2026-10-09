<script setup lang="ts">
import { computed, ref } from 'vue'
import { useMeta } from '@/composables/useMeta'
import { dimensions, questions, typeDescriptions } from './questions'
import type { MbtiLetter } from './questions'

useMeta({
  title: 'MBTI 性格测试 - MagicienDeCode',
  description: 'MBTI 性格测试',
  keywords: 'magiciendecode, mbti, 性格测试, 人格测试',
})

const total = questions.length
const currentIndex = ref(0)
const answers = ref<(MbtiLetter | undefined)[]>(Array(total).fill(undefined))
const finished = ref(false)

const currentQuestion = computed(() => questions[currentIndex.value]!)
const isLast = computed(() => currentIndex.value === total - 1)
const answeredCount = computed(() => answers.value.filter(Boolean).length)
const questionsLeft = computed(() => total - answeredCount.value)
const percent = computed(() => Math.round((answeredCount.value / total) * 100))

const next = () => {
  if (!answers.value[currentIndex.value]) return
  if (isLast.value) {
    finished.value = true
  } else {
    currentIndex.value++
  }
}

const previous = () => {
  if (currentIndex.value > 0) currentIndex.value--
}

const restart = () => {
  answers.value = Array(total).fill(undefined)
  currentIndex.value = 0
  finished.value = false
}

// Share of answers going to the left letter of each dimension
const scores = computed(() =>
  dimensions.map((dimension) => {
    const left = answers.value.filter((a) => a === dimension.left).length
    const right = answers.value.filter((a) => a === dimension.right).length
    const leftPercent = Math.round((left / (left + right || 1)) * 100)
    return {
      ...dimension,
      leftPercent,
      rightPercent: 100 - leftPercent,
      winner: left >= right ? dimension.left : dimension.right,
    }
  }),
)

const resultType = computed(() => scores.value.map((s) => s.winner).join(''))
const resultDescription = computed(() => typeDescriptions[resultType.value])
</script>

<template>
  <div class="mbti-page">
    <a-card v-if="!finished" class="mbti-card" :bordered="false">
      <h1 class="mbti-title">MBTI 性格测试</h1>

      <div class="mbti-progress">
        <div class="mbti-progress-info">
          <span>第 {{ currentIndex + 1 }} / {{ total }} 题</span>
          <span>还剩 {{ questionsLeft }} 题</span>
        </div>
        <a-progress :percent="percent" status="active" />
      </div>

      <h3 class="mbti-question">{{ currentQuestion.text }}</h3>

      <a-radio-group v-model:value="answers[currentIndex]" class="mbti-options">
        <a-radio
          v-for="option in currentQuestion.options"
          :key="option.value"
          :value="option.value"
          class="mbti-option"
          :class="{ 'mbti-option-selected': answers[currentIndex] === option.value }"
        >
          {{ option.text }}
        </a-radio>
      </a-radio-group>

      <div class="mbti-actions">
        <a-button size="large" :disabled="currentIndex === 0" @click="previous">上一题</a-button>
        <a-button
          type="primary"
          size="large"
          :disabled="!answers[currentIndex]"
          @click="next"
        >
          {{ isLast ? '查看结果' : '下一题' }}
        </a-button>
      </div>
    </a-card>

    <a-card v-else class="mbti-card" :bordered="false">
      <a-result status="success" :title="resultType" :sub-title="resultDescription?.name">
        <template #extra>
          <a-button type="primary" size="large" @click="restart">重新测试</a-button>
        </template>
        <p class="mbti-summary">{{ resultDescription?.summary }}</p>
        <div v-for="score in scores" :key="score.left" class="mbti-score">
          <div class="mbti-score-labels">
            <span :class="{ 'mbti-score-winner': score.winner === score.left }">
              {{ score.leftLabel }} ({{ score.left }}) {{ score.leftPercent }}%
            </span>
            <span :class="{ 'mbti-score-winner': score.winner === score.right }">
              {{ score.rightPercent }}% {{ score.rightLabel }} ({{ score.right }})
            </span>
          </div>
          <a-progress :percent="score.leftPercent" :show-info="false" />
        </div>
      </a-result>
    </a-card>
  </div>
</template>

<style lang="less" scoped>
@import '@/assets/styles/pages/mbti.less';
</style>
