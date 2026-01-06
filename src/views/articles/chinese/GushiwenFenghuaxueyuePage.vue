<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { useRouter, RouterLink } from 'vue-router'
import { LeftOutlined } from '@ant-design/icons-vue'

useHead({
  title: '中国古诗文·风花雪月 - MagicienDeCode',
  meta: [
    { name: 'description', content: 'Chinese Classical Poetry - Wind, Flower, Snow, Moon' },
  ],
})

const router = useRouter()
const goBack = () => {
  router.back()
}

const sections = [
  {
    key: '1',
    title: '风',
    lines: [
      '西风吹老洞庭波，一夜湘君白发多。醉后不知天在水，满船清梦压星河。',
      '春风又绿江南岸，明月何时照我还？',
      '桃李春风一杯酒，江湖夜雨十年灯。',
      '宁可枝头抱香死，何曾吹落北风中。',
      '沾衣欲湿杏花雨，吹面不寒杨柳风。',
      '夜阑卧听风吹雨，铁马冰河入梦来。',
      '人生自是有情痴，此恨不关风与月。',
      '直须看尽洛城花，始共春风容易别。',
      '城阙辅三秦，风烟望五津。',
      '春风得意马蹄疾，一日看尽长安花。',
      '北风卷地白草折，胡天八月即飞雪。',
      '忽如一夜春风来，千树万树梨花开。',
      '纷纷暮雪下辕门，风掣红旗冻不翻。',
      '不知细叶谁裁出，二月春风似剪刀。',
      '林暗草惊风，将军夜引弓。',
      '云想衣裳花想容，春风拂槛露华浓。',
      '谁家玉笛暗飞声，散入春风满洛城。',
      '羌笛何须怨杨柳，春风不度玉门关。',
      '柴门闻犬吠，风雪夜归人。',
      '千里黄云白日曛，北风吹雁雪纷纷。',
      '垂死病中惊坐起，暗风吹雨入寒窗。',
      '扫眉才子于今少，管领春风总不如。',
      '画图省识春风面，环珮空归夜月魂。'
    ]
  },
  {
    key: '2',
    title: '花',
    lines: [
      '花开不并百花丛，独立疏篱趣未穷。',
      '沾衣欲湿杏花雨，吹面不寒杨柳风。',
      '直须看尽洛城花，始共春风容易别。',
      '接天莲叶无穷碧，映日荷花别样红。',
      '忽如一夜春风来，千树万树梨花开。',
      '商女不知亡国恨，隔江犹唱后庭花。',
      '花间一壶酒，独酌无相亲。',
      '乱花渐欲迷人眼，浅草才能没马蹄。',
      '待到秋来九月八，我花开后百花杀。',
      '取次花丛懒回顾，半缘修道半缘君。',
      '云想衣裳花想容，春风拂槛露华浓。',
      '停车坐爱枫林晚，霜叶红于二月花。',
      '朱雀桥边野草花，乌衣巷口夕阳斜。',
      '正是江南好风景，落花时节又逢君。',
      '唯有牡丹真国色，花开时节动京城。',
      '杨花落尽子规啼，闻道龙标过五溪。',
      '春心莫共花争发，一寸相思一寸灰！',
      '黄四娘家花满蹊，千朵万朵压枝低。'
    ]
  },
  {
    key: '3',
    title: '雪',
    lines: [
      '北风卷地白草折，胡天八月即飞雪。',
      '纷纷暮雪下辕门，风掣红旗冻不翻。',
      '轮台东门送君去，去时雪满天山路。',
      '山回路转不见君，雪上空留马行处。',
      '君埋泉下泥销骨，我寄人间雪满头。',
      '柴门闻犬吠，风雪夜归人。',
      '千里黄云白日曛，北风吹雁雪纷纷。',
      '云横秦岭家何在？雪拥蓝关马不前。',
      '晚来天欲雪，能饮一杯无？'
    ]
  },
  {
    key: '4',
    title: '月',
    lines: [
      '春风又绿江南岸，明月何时照我还？',
      '人生自是有情痴，此恨不关风与月。',
      '人生得意须尽欢，莫使金樽空对月。',
      '鸟宿池边树，僧敲月下门。',
      '烟笼寒水月笼沙，夜泊秦淮近酒家。',
      '举杯邀明月，对影成三人。',
      '可怜九月初三夜，露似真珠月似弓。',
      '登舟望秋月，空忆谢将军。',
      '空将汉月出宫门，忆君清泪如铅水。',
      '携盘独出月荒凉，渭城已远波声小。',
      '秦时明月汉时关，万里长征人未还。',
      '知君用心如日月，事夫誓拟同生死。',
      '沧海月明珠有泪，蓝田日暖玉生烟。',
      '我寄愁心与明月，随君直到夜郎西。',
      '画图省识春风面，环珮空归夜月魂。',
      '青天有月来几时，我今停杯一问之。',
      '人攀明月不可得，月行却与人相随。',
      '今人不见古时月，今月曾经照古人。',
      '古人今人若流水，共看明月皆如此。',
      '唯愿当歌对酒时，月光长照金樽里。'
    ]
  },
  {
    key: '5',
    title: '情',
    lines: [
      '他朝若是同淋雪，此生也算共白头。',
      '今朝携手同淋雪，此生情路共白头。',
      '忆君心似西江水，日夜东流无歇时。',
      '春心莫共花争发，一寸相思一寸灰！',
      '直道相思了无益，未妨惆怅是清狂。'
    ]
  },
  {
    key: '6',
    title: '乡',
    lines: [
      '青山一道同云雨，明月何曾是两乡。',
      '此夜曲中闻折柳，何人不起故园情。'
    ]
  },
  {
    key: '7',
    title: '夸',
    lines: [
      '云想衣裳花想容，春风拂槛露华浓。',
      '扫眉才子知多少，管领春风总不如。'
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
        <a-breadcrumb-item>中国古诗文·风花雪月</a-breadcrumb-item>
      </a-breadcrumb>

      <a-button @click="goBack" size="small" class="back-button">
        <template #icon>
          <LeftOutlined />
        </template>
        <span>Back</span>
      </a-button>
    </div>

    <div class="page-content">
      <h1>中国古诗文 * 风花雪月</h1>

      <div class="poems-grid">
        <div v-for="section in sections" :key="section.key" class="poem-card">
          <div class="poem-header">
            <h3>{{ section.title }}</h3>
          </div>
          <div class="poem-content">
            <p v-for="(line, index) in section.lines" :key="index">{{ line }}</p>
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
