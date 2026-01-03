<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { useRouter, RouterLink } from 'vue-router'
import { LeftOutlined } from '@ant-design/icons-vue'

useHead({
  title: '中国古诗文·宋 - MagicienDeCode',
  meta: [
    { name: 'description', content: 'Chinese Classical Poetry - Song Dynasty' },
  ],
})

const router = useRouter()
const goBack = () => {
  router.back()
}

const poems = [
  {
    key: '1',
    title: '元日',
    author: '王安石',
    lines: [
      '爆竹声中一岁除，春风送暖入屠苏。',
      '千门万户曈曈日，总把新桃换旧符。'
    ]
  },
  {
    key: '2',
    title: '泊船瓜洲',
    author: '王安石',
    lines: [
      '京口瓜洲一水间，钟山只隔数重山。',
      '春风又绿江南岸，明月何时照我还？'
    ]
  },
  {
    key: '3',
    title: '寄黄几复',
    author: '黄庭坚',
    lines: [
      '我居北海君南海，寄雁传书谢不能。',
      '桃李春风一杯酒，江湖夜雨十年灯。',
      '持家但有四立壁，治病不蕲三折肱qi2 zhé gong1。',
      '想见读书头已白，隔溪猿哭瘴溪藤。'
    ]
  },
  {
    key: '4',
    title: '寒菊 / 画菊',
    author: '郑思肖',
    lines: [
      '花开不并百花丛，独立疏篱趣未穷。',
      '宁可枝头抱香死，何曾吹落北风中。'
    ]
  },
  {
    key: '5',
    title: '绝句',
    author: '志南',
    lines: [
      '古木阴中系短篷，杖藜扶我过桥东。',
      '沾衣欲湿杏花雨，吹面不寒杨柳风。'
    ]
  },
  {
    key: '6',
    title: '十一月四日风雨大作',
    author: '陆游',
    lines: [
      '僵卧孤村不自哀，尚思为国戍轮台。',
      '夜阑卧听风吹雨，铁马冰河入梦来。'
    ]
  },
  {
    key: '7',
    title: '临安春雨初霁',
    author: '陆游',
    lines: [
      '世味年来薄似纱，谁令骑马客京华。',
      '小楼一夜听春雨，深巷明朝卖杏花。',
      '矮纸斜行闲作草，晴窗细乳戏分茶。',
      '素衣莫起风尘叹，犹及清明可到家。'
    ]
  },
  {
    key: '8',
    title: '登快阁',
    author: '黄庭坚',
    lines: [
      '痴儿了却公家事，快阁东西倚晚晴。',
      '落木千山天远大，澄江一道月分明。',
      '朱弦已为佳人绝，青眼聊因美酒横。',
      '万里归船弄长笛，此心吾与白鸥盟。'
    ]
  },
  {
    key: '9',
    title: '玉楼春',
    author: '欧阳修',
    lines: [
      '尊前拟把归期说。未语春容先惨咽。',
      '人生自是有情痴，此恨不关风与月。',
      '离歌且莫翻新阕。一曲能教肠寸结。',
      '直须看尽洛城花，始共春风容易别。'
    ]
  },
  {
    key: '10',
    title: '晓出净慈寺送林子方',
    author: '杨万里',
    lines: [
      '毕竟西湖六月中，风光不与四时同。',
      '接天莲叶无穷碧，映日荷花别样红。'
    ]
  },
  {
    key: '11',
    title: '芙蓉楼送辛渐',
    author: '王昌龄',
    lines: [
      '寒雨连江夜入吴，平明送客楚山孤。',
      '洛阳亲友如相问，一片冰心在玉壶。'
    ]
  },
  {
    key: '12',
    title: '乡思',
    author: '李觏gou',
    lines: [
      '人言落日是天涯，望极天涯不见家。',
      '已恨碧山相阻隔，碧山还被暮云遮。'
    ]
  },
  {
    key: '13',
    title: '少年游',
    author: '周邦彦',
    lines: [
      '并刀如水，吴盐胜雪，纤手破新橙。',
      '锦幄初温，兽烟不断，相对坐调笙。',
      '低声问向谁行宿，城上已三更。',
      '马滑霜浓，不如休去，直是少人行。'
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
        <a-breadcrumb-item>中国古诗文·宋</a-breadcrumb-item>
      </a-breadcrumb>

      <a-button @click="goBack" size="small" class="back-button">
        <template #icon>
          <LeftOutlined />
        </template>
        <span>Back</span>
      </a-button>
    </div>

    <div class="page-content">
      <h1>中国古诗文 * 宋</h1>

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
