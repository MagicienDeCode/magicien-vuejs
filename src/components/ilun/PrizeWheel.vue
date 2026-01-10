<template>
  <div class="prize-wheel-container">
    <div class="wheel-wrapper">
      <div class="wheel" :style="{ transform: `rotate(${rotation}deg)`, transitionDuration: `${animationDuration}s` }">
        <svg viewBox="0 0 400 400" class="wheel-svg">
          <g v-for="(option, index) in options" :key="index">
            <path
              :d="getSlicePath(index)"
              :fill="colors[index]"
              :stroke="'#fff'"
              :stroke-width="3"
            />
            <text
              :x="getTextX(index)"
              :y="getTextY(index)"
              :transform="getTextTransform(index)"
              text-anchor="middle"
              class="wheel-text"
            >
              {{ option }}
            </text>
          </g>
        </svg>
      </div>
      <div class="wheel-pointer">▼</div>
      <button class="spin-button" @click="spin" :disabled="isSpinning">
        {{ isSpinning ? '抽奖中...' : '开始抽奖' }}
      </button>
    </div>

    <div v-if="result" class="result-display">
      <h2>🎉 结果是：{{ result }} 🎉</h2>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const options = ['醉鱼', '烧烤', '米线', '枭居']
const colors = ['#FF6B6B', '#4ECDC4', '#FFE66D', '#95E1D3']

const rotation = ref(0)
const isSpinning = ref(false)
const result = ref('')
const animationDuration = ref(2.5) // default 2.5 seconds

const degreesPerSlice = 360 / options.length

const getSlicePath = (index: number) => {
  const startAngle = (index * degreesPerSlice - 90) * (Math.PI / 180)
  const endAngle = ((index + 1) * degreesPerSlice - 90) * (Math.PI / 180)

  const x1 = 200 + 180 * Math.cos(startAngle)
  const y1 = 200 + 180 * Math.sin(startAngle)
  const x2 = 200 + 180 * Math.cos(endAngle)
  const y2 = 200 + 180 * Math.sin(endAngle)

  return `M 200 200 L ${x1} ${y1} A 180 180 0 0 1 ${x2} ${y2} Z`
}

const getTextX = (index: number) => {
  const angle = (index * degreesPerSlice + degreesPerSlice / 2 - 90) * (Math.PI / 180)
  return 200 + 120 * Math.cos(angle)
}

const getTextY = (index: number) => {
  const angle = (index * degreesPerSlice + degreesPerSlice / 2 - 90) * (Math.PI / 180)
  return 200 + 120 * Math.sin(angle)
}

const getTextTransform = (index: number) => {
  const angle = index * degreesPerSlice + degreesPerSlice / 2
  const x = getTextX(index)
  const y = getTextY(index)
  return `rotate(${angle}, ${x}, ${y})`
}

const spin = () => {
  if (isSpinning.value) return

  isSpinning.value = true
  result.value = ''

  // Random selection
  const randomIndex = Math.floor(Math.random() * options.length)

  // The slices are drawn starting at -90° (top), each slice is 90° wide
  // Slice centers are at: -90° + 45° + (index * 90°)
  // Index 0 center: -45° (315° = top-right diagonal)
  // Index 1 center: 45° (bottom-right diagonal)
  // Index 2 center: 135° (bottom-left diagonal)
  // Index 3 center: 225° (top-left diagonal)

  // The pointer is at -90° (270° = top of screen)
  // To align slice center with pointer, we need: -90° - sliceCenter
  // This calculates how much to rotate to bring the selected slice center to the pointer

  const sliceCenterAngle = -45 + randomIndex * degreesPerSlice
  let targetRotation = -90 - sliceCenterAngle

  // Normalize to 0-360 range
  targetRotation = ((targetRotation % 360) + 360) % 360

  // Add 10-15 full rotations for dramatic effect
  const fullSpins = 10 + Math.floor(Math.random() * 6)
  const totalRotation = fullSpins * 360 + targetRotation

  // Animation duration: 3-4 seconds (longer to accommodate more spins)
  const duration = 3 + Math.random()
  animationDuration.value = duration

  rotation.value = totalRotation

  // Show result after animation completes
  setTimeout(() => {
    isSpinning.value = false
    result.value = options[randomIndex]
  }, duration * 1000)
}
</script>

<style scoped lang="less">
.prize-wheel-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
}

.wheel-wrapper {
  position: relative;
  width: 400px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 350px;
    height: 350px;
  }

  @media (max-width: 480px) {
    width: 300px;
    height: 300px;
  }
}

.wheel {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.25, 0.1, 0.25, 1);
  position: relative;
}

.wheel-svg {
  width: 100%;
  height: 100%;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
}

.wheel-text {
  font-size: 28px;
  font-weight: bold;
  fill: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  pointer-events: none;

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
}

.wheel-pointer {
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 40px;
  color: #ff4757;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.5));
  z-index: 10;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(10px);
  }
}

.spin-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 4px solid white;
  background: #1677ff;
  color: white;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  z-index: 20;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    transform: translate(-50%, -50%) scale(1.1);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
  }

  &:active:not(:disabled) {
    transform: translate(-50%, -50%) scale(0.95);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }

  @media (max-width: 480px) {
    width: 80px;
    height: 80px;
    font-size: 16px;
  }
}

.result-display {
  background: white;
  padding: 30px 50px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  animation: fadeInUp 0.5s ease;

  h2 {
    margin: 0;
    font-size: 36px;
    color: #1677ff;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
      font-size: 28px;
    }

    @media (max-width: 480px) {
      font-size: 24px;
    }
  }

  @media (max-width: 480px) {
    padding: 20px 30px;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
