<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { useRouter, RouterLink } from 'vue-router'
import { LeftOutlined } from '@ant-design/icons-vue'

useHead({
  title: '中国古诗文·其他 - MagicienDeCode',
  meta: [
    { name: 'description', content: 'Chinese Classical Poetry - Miscellaneous' },
  ],
})

const router = useRouter()
const goBack = () => {
  router.back()
}

const poems = [
  {
    key: '1',
    title: '题龙阳县青草湖',
    author: '元*唐温如',
    lines: [
      '西风吹老洞庭波，一夜湘君白发多。',
      '醉后不知天在水，满船清梦压星河。'
    ]
  },
  {
    key: '2',
    title: '赴戍登程口占示家人二首',
    author: '清*林则徐',
    lines: [
      '力微任重久神疲，再竭衰庸定不支。',
      '苟利国家生死以，岂因祸福避趋之！',
      '谪居正是君恩厚，养拙刚于戍卒宜。',
      '戏与山妻谈故事，试吟断送老头皮。'
    ]
  },
  {
    key: '3',
    title: '七绝·改诗赠父亲',
    author: '',
    lines: [
      '孩儿立志出乡关，学不成名誓不还。',
      '埋骨何须桑梓地，人生无处不青山。'
    ]
  },
  {
    key: '4',
    title: '自嘲',
    author: '鲁迅',
    lines: [
      '运交华盖欲何求，未敢翻身已碰头。',
      '破帽遮颜过闹市，漏船载酒泛中流。',
      '横眉冷对千夫指，俯首甘为孺子牛。',
      '躲进小楼成一统，管他冬夏与春秋。'
    ]
  },
  {
    key: '5',
    title: '咏红梅花得"红"字',
    author: '曹雪芹',
    lines: [
      '桃未芳菲杏未红，冲寒先喜笑东风。',
      '魂飞庾岭春难辨，霞隔罗浮梦未通。',
      '绿萼添妆融宝炬，缟仙扶醉跨残虹。',
      '看来岂是寻常色，浓淡由他冰雪中。',
      'gao3 xian1 fu2 zui4 kua4 can2 hong2'
    ]
  },
  {
    key: '6',
    title: '咏菊',
    author: '',
    lines: [
      '无赖诗魔昏晓侵，绕篱欹石自沉音。qi1',
      '毫端蕴秀临霜写，口齿噙香对月吟。',
      '满纸自怜题素怨，片言谁解诉秋心？',
      '一从陶令评章后，千古高风说到今。'
    ]
  },
  {
    key: '7',
    title: '木兰花·拟古决绝词柬友',
    author: '纳兰性德*清',
    lines: [
      '人生若只如初见，何事秋风悲画扇。',
      '等闲变却故人心，却道故人心易变。',
      '骊山语罢清宵半，泪雨霖铃终不怨。li2 lin2 ling2',
      '何如薄幸锦衣郎，比翼连枝当日愿。'
    ]
  }
]
</script>

<template>
  <div class="gushiwen-page">
    <div class="header-row">
      <a-breadcrumb separator=">" class="breads">
        <a-breadcrumb-item>
          <RouterLink to="/" class="decoration-none">Home</RouterLink>
        </a-breadcrumb-item>
        <a-breadcrumb-item>
          <RouterLink to="/articles" class="decoration-none">Articles</RouterLink>
        </a-breadcrumb-item>
        <a-breadcrumb-item>中国古诗文·其他</a-breadcrumb-item>
      </a-breadcrumb>

      <a-button @click="goBack" size="small" class="back-button">
        <template #icon>
          <LeftOutlined />
        </template>
        <span>Back</span>
      </a-button>
    </div>

    <div class="page-content">
      <h1>中国古诗文 * 其他</h1>

      <div class="poems-grid">
        <div v-for="poem in poems" :key="poem.key" class="poem-card">
          <div class="poem-header">
            <h3>{{ poem.title }}</h3>
            <span class="poem-author">{{ poem.author }}</span>
          </div>
          <div class="poem-content">
            <p v-for="(line, index) in poem.lines" :key="index">{{ line }}</p>
          </div>
        </div>
      </div>
    </div>

    <a-back-top />
  </div>
</template>

<style lang="less" scoped>
.gushiwen-page {
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

  h1 {
    color: #1890ff;
    margin-bottom: 32px;
    margin-top: 0;
    text-align: center;
    width: 100%;
    display: block;
  }
}

.poems-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
}

.poem-card {
  background: #fafafa;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  padding: 20px;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
}

.poem-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid #e8e8e8;

  h3 {
    margin: 0;
    font-size: 18px;
    font-weight: 600;
    color: #1890ff;
  }
}

.poem-author {
  font-size: 14px;
  color: #8c8c8c;
}

.poem-content {
  p {
    margin: 8px 0;
    line-height: 1.8;
    font-size: 15px;
    color: rgba(0, 0, 0, 0.85);
  }
}

.page-content {
    flex-direction: column;
    gap: 0;
    overflow-x: hidden;
    max-width: 100vw;
}
</style>
