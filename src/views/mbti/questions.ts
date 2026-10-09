export type MbtiLetter = 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P'

export interface MbtiOption {
  text: string
  value: MbtiLetter
}

export interface MbtiQuestion {
  text: string
  options: [MbtiOption, MbtiOption]
}

export interface MbtiDimension {
  left: MbtiLetter
  right: MbtiLetter
  leftLabel: string
  rightLabel: string
}

export const dimensions: MbtiDimension[] = [
  { left: 'E', right: 'I', leftLabel: '外向', rightLabel: '内向' },
  { left: 'S', right: 'N', leftLabel: '实感', rightLabel: '直觉' },
  { left: 'T', right: 'F', leftLabel: '思考', rightLabel: '情感' },
  { left: 'J', right: 'P', leftLabel: '判断', rightLabel: '感知' },
]

export const typeDescriptions: Record<string, { name: string; summary: string }> = {
  ISTJ: { name: '物流师', summary: '负责、细致、可靠。你重视事实与秩序，说到做到。' },
  ISFJ: { name: '守卫者', summary: '温暖、尽责、忠诚。你总是默默地照顾好身边的人。' },
  INFJ: { name: '提倡者', summary: '有洞察力、有原则。你追寻意义，并希望帮助他人成长。' },
  INTJ: { name: '建筑师', summary: '有谋略、独立。你着眼长远，并搭建体系去实现目标。' },
  ISTP: { name: '鉴赏家', summary: '务实、善于观察。你喜欢弄清事物的原理，并亲手解决问题。' },
  ISFP: { name: '探险家', summary: '温和、灵活、活在当下。你用行动来表达自己。' },
  INFP: { name: '调停者', summary: '理想主义、富有同理心。你以价值观为指引，对各种可能性充满好奇。' },
  INTP: { name: '逻辑学家', summary: '善于分析、富有创造力。你喜欢思想与理论，凡事都想找出背后的逻辑。' },
  ESTP: { name: '企业家', summary: '精力充沛、讲求实际。你行动迅速、敢于冒险，见招拆招。' },
  ESFP: { name: '表演者', summary: '随性、友善、爱玩。你带来活力，喜欢和大家一起享受生活。' },
  ENFP: { name: '竞选者', summary: '热情、富有想象力。你处处看到潜力，并鼓舞他人去追求。' },
  ENTP: { name: '辩论家', summary: '机敏、好奇、直言不讳。你喜欢挑战观点，探索新的角度。' },
  ESTJ: { name: '总经理', summary: '有条理、果断。你喜欢明确的规则和目标，把事情做成。' },
  ESFJ: { name: '执政官', summary: '体贴、善于交际、乐于合作。你营造和谐，照顾身边的群体。' },
  ENFJ: { name: '主人公', summary: '有感染力、乐于支持他人。你理解别人，并帮助他们成为更好的自己。' },
  ENTJ: { name: '指挥官', summary: '大胆、有谋略。你主动担当，确定方向，推动结果达成。' },
}

export const questions: MbtiQuestion[] = [
  // E / I
  {
    text: '忙碌了一周之后，你更愿意：',
    options: [
      { text: '出门和朋友聚一聚', value: 'E' },
      { text: '待在家里享受安静的时光', value: 'I' },
    ],
  },
  {
    text: '开会时，你通常：',
    options: [
      { text: '边想边说，很早就发言', value: 'E' },
      { text: '先听，想清楚了再开口', value: 'I' },
    ],
  },
  {
    text: '在一个没几个熟人的聚会上，你会：',
    options: [
      { text: '主动认识很多新朋友', value: 'E' },
      { text: '只和一两个聊得来的人待在一起', value: 'I' },
    ],
  },
  {
    text: '什么时候你最有活力？',
    options: [
      { text: '身边人多、热闹的时候', value: 'E' },
      { text: '一个人独处、安静思考的时候', value: 'I' },
    ],
  },
  {
    text: '遇到需要解决的问题时，你更喜欢：',
    options: [
      { text: '找人聊一聊、一起讨论', value: 'E' },
      { text: '先自己想清楚', value: 'I' },
    ],
  },
  {
    text: '熟悉你的人会说你：',
    options: [
      { text: '外向开朗，容易亲近', value: 'E' },
      { text: '内敛含蓄，比较注重隐私', value: 'I' },
    ],
  },
  {
    text: '你理想的工作环境是：',
    options: [
      { text: '开放的空间，交流很多', value: 'E' },
      { text: '安静、可以专注的地方', value: 'I' },
    ],
  },

  // S / N
  {
    text: '学习新东西时，你更喜欢：',
    options: [
      { text: '具体的例子和动手练习', value: 'S' },
      { text: '先理解概念和整体框架', value: 'N' },
    ],
  },
  {
    text: '你更相信：',
    options: [
      { text: '经验和被验证有效的方法', value: 'S' },
      { text: '直觉和新的可能性', value: 'N' },
    ],
  },
  {
    text: '描述一件事时，你倾向于：',
    options: [
      { text: '照实说，把细节讲准确', value: 'S' },
      { text: '用类比和比喻来表达', value: 'N' },
    ],
  },
  {
    text: '你更感兴趣的是：',
    options: [
      { text: '眼前真实发生的事情', value: 'S' },
      { text: '未来可能发生的事情', value: 'N' },
    ],
  },
  {
    text: '按说明书操作时，你会：',
    options: [
      { text: '按步骤一步一步来', value: 'S' },
      { text: '扫一眼，然后按自己的方式做', value: 'N' },
    ],
  },
  {
    text: '你更希望别人觉得你：',
    options: [
      { text: '务实、脚踏实地', value: 'S' },
      { text: '有想象力、有创意', value: 'N' },
    ],
  },
  {
    text: '接手一个新项目时，你首先注意到：',
    options: [
      { text: '事实、限制条件和细节', value: 'S' },
      { text: '规律以及各种想法之间的联系', value: 'N' },
    ],
  },

  // T / F
  {
    text: '做重要决定时，你更依赖：',
    options: [
      { text: '逻辑和客观分析', value: 'T' },
      { text: '自己的价值观和对他人的影响', value: 'F' },
    ],
  },
  {
    text: '朋友向你倾诉烦恼时，你的第一反应是：',
    options: [
      { text: '帮他想解决办法', value: 'T' },
      { text: '表示理解并给予安慰', value: 'F' },
    ],
  },
  {
    text: '给别人提意见时，更重要的是：',
    options: [
      { text: '诚实、直接', value: 'T' },
      { text: '委婉、多鼓励', value: 'F' },
    ],
  },
  {
    text: '发生分歧时，你更在意：',
    options: [
      { text: '弄清楚谁对谁错', value: 'T' },
      { text: '不伤害彼此的关系', value: 'F' },
    ],
  },
  {
    text: '更能说服你的是：',
    options: [
      { text: '严谨、有理有据的论证', value: 'T' },
      { text: '真诚、发自内心的表达', value: 'F' },
    ],
  },
  {
    text: '你更希望别人认为你：',
    options: [
      { text: '公正、有能力', value: 'T' },
      { text: '善良、善解人意', value: 'F' },
    ],
  },
  {
    text: '当一条规则对某个人显得不公平时，你认为：',
    options: [
      { text: '规则应该对所有人一视同仁', value: 'T' },
      { text: '特殊情况应该特殊对待', value: 'F' },
    ],
  },

  // J / P
  {
    text: '计划一次旅行时，你会：',
    options: [
      { text: '提前做好详细的行程', value: 'J' },
      { text: '到了再决定做什么', value: 'P' },
    ],
  },
  {
    text: '面对截止日期，你通常：',
    options: [
      { text: '早早开始，提前完成', value: 'J' },
      { text: '最后一刻反而效率最高', value: 'P' },
    ],
  },
  {
    text: '你的书桌或房间通常：',
    options: [
      { text: '整洁，东西都放在固定的位置', value: 'J' },
      { text: '有点乱，但你知道东西在哪', value: 'P' },
    ],
  },
  {
    text: '什么情况下你更安心？',
    options: [
      { text: '事情已经定下来了', value: 'J' },
      { text: '还保留着多种选择', value: 'P' },
    ],
  },
  {
    text: '计划突然改变时，你会觉得：',
    options: [
      { text: '不太舒服，更想按原计划进行', value: 'J' },
      { text: '没关系，随机应变也挺好', value: 'P' },
    ],
  },
  {
    text: '处理日常事务时，你的方式是：',
    options: [
      { text: '列好待办清单，逐项完成', value: 'J' },
      { text: '事情来了再处理', value: 'P' },
    ],
  },
  {
    text: '你更喜欢的工作是：',
    options: [
      { text: '有条理，目标和时间表都明确', value: 'J' },
      { text: '灵活，有自由发挥的空间', value: 'P' },
    ],
  },
]
