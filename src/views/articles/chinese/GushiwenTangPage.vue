<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { useRouter, RouterLink } from 'vue-router'
import { LeftOutlined } from '@ant-design/icons-vue'

useHead({
  title: '中国古诗文·唐 - MagicienDeCode',
  meta: [
    { name: 'description', content: 'Chinese Classical Poetry - Tang Dynasty' },
  ],
})

const router = useRouter()
const goBack = () => {
  router.back()
}

const poems = [
  {
    key: '1',
    title: '将进酒',
    author: '李白',
    lines: [
      '君不见，黄河之水天上来，奔流到海不复回。',
      '君不见，高堂明镜悲白发，朝如青丝暮成雪。',
      '人生得意须尽欢，莫使金樽空对月。',
      '天生我材必有用，千金散尽还复来。',
      '烹羊宰牛且为乐，会须一饮三百杯。',
      '岑cén夫子，丹丘生，将进酒，杯莫停。',
      '与君歌一曲，请君为我倾耳听。',
      '钟鼓馔玉不足贵，但求长醉不复醒。',
      '古来圣贤皆寂寞，惟有饮者留其名。',
      '陈王昔时宴平乐，斗酒十千恣欢谑xuè。',
      '主人何为言少钱，径须沽取对君酌。',
      '五花马，千金裘，呼儿将出换美酒。与尔同销万古愁。',
      '',
      '陈王: 曹植'
    ]
  },
  {
    key: '2',
    title: '送杜少府之任蜀州',
    author: '王勃',
    lines: [
      '城阙辅三秦，风烟望五津。',
      '与君离别意，同是宦游人。',
      '海内存知己，天涯若比邻。',
      '无为在歧路，儿女共沾巾。'
    ]
  },
  {
    key: '3',
    title: '望岳',
    author: '杜甫',
    lines: [
      '岱宗夫如何？齐鲁青未了。',
      '造化钟神秀，阴阳割昏晓。',
      '荡胸生曾云，决眦入归鸟。',
      '会当凌绝顶，一览众山小。',
      '泰山'
    ]
  },
  {
    key: '4',
    title: '登科后',
    author: '孟郊',
    lines: [
      '昔日龌龊不足夸，今朝放荡思无涯。',
      '春风得意马蹄疾，一日看尽长安花。'
    ]
  },
  {
    key: '5',
    title: '黄鹤楼',
    author: '崔颢',
    lines: [
      '昔人已乘黄鹤去，此地空余黄鹤楼。',
      '黄鹤一去不复返，白云千载空悠悠。',
      '晴川历历汉阳树，芳草萋萋鹦鹉洲。',
      '日暮乡关何处是？烟波江上使人愁。'
    ]
  },
  {
    key: '6',
    title: '题李凝幽居',
    author: '贾岛',
    lines: [
      '闲居少邻并，草径入荒园。',
      '鸟宿池边树，僧敲月下门。',
      '过桥分野色，移石动云根。',
      '暂去还来此，幽期不负言。'
    ]
  },
  {
    key: '7',
    title: '金陵晚望',
    author: '高蟾',
    lines: [
      'céng曾伴浮云归晚翠，犹陪落日泛秋声。',
      '世间无限丹青手，一片伤心画不成。',
      '一片伤心，唐朝危机四伏，无可挽回地走向崩溃的末日'
    ]
  },
  {
    key: '8',
    title: '白雪歌送武判官归京',
    author: '岑参',
    lines: [
      '北风卷地白草折zhé，胡天八月即飞雪。',
      '忽如一夜春风来，千树万树梨花开。',
      '散入珠帘湿罗幕，狐裘不暖锦衾薄bao2。',
      '将军角弓不得控，都护铁衣冷难着。',
      '瀚海阑干百丈冰，愁云惨淡万里凝。',
      '中军置酒饮归客，胡琴琵琶与羌笛。',
      '纷纷暮雪下辕门，风掣chè红旗冻不翻。',
      '轮台东门送君去，去时雪满天山路。',
      '山回路转不见君，雪上空留马行处。'
    ]
  },
  {
    key: '9',
    title: '泊秦淮',
    author: '杜牧',
    lines: [
      '烟笼寒水月笼沙，夜泊秦淮近酒家。',
      '商女不知亡国恨，隔江犹唱后庭花。',
      '陈朝，歌女，玉树后庭花'
    ]
  },
  {
    key: '10',
    title: '相思',
    author: '王维',
    lines: [
      '红豆生南国，春来发几枝。',
      '愿君多采撷，此物最相思。'
    ]
  },
  {
    key: '11',
    title: '送元二使安西',
    author: '王维',
    lines: [
      '渭城朝雨浥轻尘，客舍青青柳色新。',
      '劝君更尽一杯酒，西出阳关无故人。'
    ]
  },
  {
    key: '12',
    title: '南歌子词二首',
    author: '温庭筠',
    lines: [
      '一尺深红蒙曲尘，天生旧物不如新。',
      '合欢桃核终堪恨，里许元来别有人。',
      '井底点灯深烛伊yi1，共郎长行莫围棋。',
      '玲珑骰子安红豆，入骨相思知不知。'
    ]
  },
  {
    key: '13',
    title: '月下独酌四首',
    author: '李白',
    lines: [
      '花间一壶酒，独酌无相亲。',
      '举杯邀明月，对影成三人。',
      '月既不解饮，影徒随我身。',
      '暂伴月将影，行乐须及春。',
      '我歌月徘徊，我舞影零乱。',
      '醒时相交欢，醉后各分散。',
      '永结无情游，相期邈云汉。'
    ]
  },
  {
    key: '14',
    title: '咏柳',
    author: '贺知章',
    lines: [
      '碧玉妆成一树高，万条垂下绿丝绦。',
      '不知细叶谁裁出，二月春风似剪刀。'
    ]
  },
  {
    key: '15',
    title: '钱塘湖春行',
    author: '白居易',
    lines: [
      '孤山寺北贾亭西，水面初平云脚低。',
      '几处早莺争暖树，谁家新燕啄春泥。',
      '乱花渐欲迷人眼，浅草才能没马蹄。',
      '最爱湖东行不足，绿杨阴里白沙堤。'
    ]
  },
  {
    key: '16',
    title: '暮江吟',
    author: '白居易',
    lines: [
      '一道残阳铺水中，半江瑟瑟半江红。',
      '可怜九月初三夜，露似真珠月似弓。'
    ]
  },
  {
    key: '17',
    title: '酬乐天扬州初逢席上见赠',
    author: '刘禹锡',
    lines: [
      '巴山楚水凄凉地，二十三年弃置身。',
      '怀旧空吟闻笛赋，到乡翻似烂柯人。',
      '沉舟侧畔千帆过，病树前头万木春。',
      '今日听君歌一曲，暂凭杯酒长精神。'
    ]
  },
  {
    key: '18',
    title: '和张仆射塞下曲·其二',
    author: '卢纶',
    lines: [
      '林暗草惊风，将军夜引弓。',
      '平明寻白羽，没在石棱中。'
    ]
  },
  {
    key: '19',
    title: '不第后赋菊',
    author: '黄巢',
    lines: [
      '待到秋来九月八，我花开后百花杀。',
      '冲天香阵透长安，满城尽带黄金甲。'
    ]
  },
  {
    key: '20',
    title: '离思五首·其四',
    author: '元稹',
    lines: [
      '曾经沧海难为水，除却巫山不是云。',
      '取次花丛懒回顾，半缘修道半缘君。'
    ]
  },
  {
    key: '21',
    title: '梦微之',
    author: '白居易',
    lines: [
      '夜来携手梦同游，晨起盈巾泪莫收。',
      '漳浦老身三度病，咸阳草树八回秋。',
      '君埋泉下泥销骨，我寄人间雪满头。',
      '阿卫韩郎相次去，夜台茫昧得知不。'
    ]
  },
  {
    key: '22',
    title: '清平调',
    author: '李白',
    lines: [
      '云想衣裳花想容，春风拂槛露华浓。chang2 jian4 ',
      '若非群玉山头见，会向瑶台月下逢。'
    ]
  },
  {
    key: '23',
    title: '赠去婢',
    author: '崔郊',
    lines: [
      '公子王孙逐后尘，绿珠垂泪滴罗巾。',
      '侯门一入深如海，从此萧郎是路人。'
    ]
  },
  {
    key: '24',
    title: '终南别业',
    author: '王维',
    lines: [
      '中岁颇好道，晚家南山陲。',
      '兴来每独往，胜事空自知。',
      '行到水穷处，坐看云起时。',
      '偶然值林叟，谈笑无还期。'
    ]
  },
  {
    key: '25',
    title: '夜泊牛渚怀古',
    author: '李白',
    lines: [
      '牛渚西江夜，青天无片云。zhu3',
      '登舟望秋月，空忆谢将军。',
      '余亦能高咏，斯人不可闻。',
      '明朝挂帆席，枫叶落纷纷。',
      '东晋谢尚将军'
    ]
  },
  {
    key: '26',
    title: '金铜仙人辞汉歌',
    author: '李贺',
    lines: [
      '茂陵刘郎秋风客，夜闻马嘶晓无迹。',
      '画栏桂树悬秋香，三十六宫土花碧。',
      '魏官牵车指千里，东关酸风射眸子。',
      '空将汉月出宫门，忆君清泪如铅水。',
      '衰兰送客咸阳道，天若有情天亦老。',
      '携盘独出月荒凉，渭城已远波声小。'
    ]
  },
  {
    key: '27',
    title: '春夜洛城闻笛',
    author: '李白',
    lines: [
      '谁家玉笛暗飞声，散入春风满洛城。',
      '此夜曲中闻折柳，何人不起故园情。'
    ]
  },
  {
    key: '28',
    title: '早发白帝城',
    author: '李白',
    lines: [
      '朝辞白帝彩云间，千里江陵一日还。',
      '两岸猿声啼不住，轻舟已过万重山。'
    ]
  },
  {
    key: '29',
    title: '题乌江亭',
    author: '杜牧',
    lines: [
      '胜败兵家事不期，包羞忍耻是男儿。',
      '江东子弟多才俊，卷土重来未可知。'
    ]
  },
  {
    key: '30',
    title: '山行',
    author: '杜牧',
    lines: [
      '远上寒山石径斜，白云生处有人家。',
      '停车坐爱枫林晚，霜叶红于二月花。'
    ]
  },
  {
    key: '31',
    title: '凉州词二首·其二',
    author: '王之涣',
    lines: [
      '黄河远上白云间，一片孤城万仞山。',
      '羌笛何须怨杨柳，春风不度玉门关。'
    ]
  },
  {
    key: '32',
    title: '凉州词二首·其一',
    author: '王翰',
    lines: [
      '葡萄美酒夜光杯，欲饮琵琶马上催。',
      '醉卧沙场君莫笑，古来征战几人回？'
    ]
  },
  {
    key: '33',
    title: '出塞二首·其一',
    author: '王昌龄',
    lines: [
      '秦时明月汉时关，万里长征人未还。',
      '但使龙城飞将在，不教胡马度阴山。',
      '李广'
    ]
  },
  {
    key: '34',
    title: '过华清宫绝句三首·其一',
    author: '杜牧',
    lines: [
      '长安回望绣成堆，山顶千门次第开。',
      '一骑红尘妃子笑，无人知是荔枝来。'
    ]
  },
  {
    key: '35',
    title: '渡荆门送别',
    author: '李白',
    lines: [
      '渡远荆门外，来从楚国游。',
      '山随平野尽，江入大荒流。',
      '月下飞镜，云生结海楼。',
      '仍怜故乡水，万里送行舟。'
    ]
  },
  {
    key: '36',
    title: '逢雪宿芙蓉山主人',
    author: '刘长卿',
    lines: [
      '日暮苍山远，天寒白屋贫。',
      '柴门闻犬吠，风雪夜归人。'
    ]
  },
  {
    key: '37',
    title: '节妇吟·寄东平李司空师道',
    author: '张籍',
    lines: [
      '君知妾有夫，赠妾双明珠。',
      '感君缠绵意，系在红罗襦。',
      '妾家高楼连苑起，良人执戟明光里。',
      '知君用心如日月，事夫誓拟同生死。',
      '还君明珠双泪垂，恨不相逢未嫁时。'
    ]
  },
  {
    key: '38',
    title: '锦瑟',
    author: '李商隐',
    lines: [
      '锦瑟无端五十弦，一弦一柱思华年。',
      '庄生晓梦迷蝴蝶，望帝春心托杜鹃。',
      '沧海月明珠有泪，蓝田日暖玉生烟。',
      '此情可待成追忆？只是当时已惘然。'
    ]
  },
  {
    key: '39',
    title: '别董大二首',
    author: '高适',
    lines: [
      '千里黄云白日曛，北风吹雁雪纷纷。',
      '莫愁前路无知己，天下谁人不识君？'
    ]
  },
  {
    key: '40',
    title: '闻乐天授江州司马',
    author: '元稹',
    lines: [
      '残灯无焰影幢幢，此夕闻君谪九江。',
      '垂死病中惊坐起，暗风吹雨入寒窗。'
    ]
  },
  {
    key: '41',
    title: '乌衣巷',
    author: '刘禹锡',
    lines: [
      '朱雀桥边野草花，乌衣巷口夕阳斜。',
      '旧时王谢堂前燕，飞入寻常百姓家。'
    ]
  },
  {
    key: '42',
    title: '闺怨',
    author: '王昌龄',
    lines: [
      '闺中少妇不知愁，春日凝妆上翠楼。',
      '忽见陌头杨柳色，悔教夫婿觅封侯。'
    ]
  },
  {
    key: '43',
    title: '江南逢李龟年',
    author: '杜甫',
    lines: [
      '岐王宅里寻常见，崔九堂前几度闻。',
      '正是江南好风景，落花时节又逢君。'
    ]
  },
  {
    key: '44',
    title: '赠妓云英',
    author: '罗隐',
    lines: [
      '钟陵醉别十余春，重见云英掌上身。',
      '我未成名卿未嫁，可能俱是不如人。'
    ]
  },
  {
    key: '45',
    title: '赏牡丹',
    author: '刘禹锡',
    lines: [
      '庭前芍药妖无格，池上芙蕖净少情。',
      '唯有牡丹真国色，花开时节动京城。'
    ]
  },
  {
    key: '46',
    title: '近试上张籍水部',
    author: '朱庆馀yu',
    lines: [
      '洞房昨夜停红烛，待晓堂前拜舅姑。',
      '妆罢低声问夫婿，画眉深浅入时无。'
    ]
  },
  {
    key: '47',
    title: '江陵愁望寄子安',
    author: '鱼玄机',
    lines: [
      '枫叶千枝复万枝，江桥掩映暮帆迟。',
      '忆君心似西江水，日夜东流无歇时。'
    ]
  },
  {
    key: '48',
    title: '闻王昌龄左迁龙标遥有此寄',
    author: '李白',
    lines: [
      '杨花落尽子规啼，闻道龙标过五溪。',
      '我寄愁心与明月，随君直到夜郎西。'
    ]
  },
  {
    key: '49',
    title: '左迁至蓝关示侄孙湘',
    author: '韩愈',
    lines: [
      '一封朝奏九重天，夕贬潮州路八千。',
      '欲为圣明除弊事，肯将衰朽惜残年！',
      '云横秦岭家何在？雪拥蓝关马不前。',
      '知汝远来应有意，好收吾骨瘴江边。'
    ]
  },
  {
    key: '50',
    title: '玄都观桃花',
    author: '刘禹锡',
    lines: [
      '紫陌红尘拂面来，无人不道看花回。',
      '玄都观里桃千树，尽是刘郎去后栽。'
    ]
  },
  {
    key: '51',
    title: '夜雨寄北',
    author: '李商隐',
    lines: [
      '君问归期未有期，巴山夜雨涨秋池。',
      '何当共剪西窗烛，却话巴山夜雨时。'
    ]
  },
  {
    key: '52',
    title: '问刘十九',
    author: '白居易',
    lines: [
      '绿蚁新醅酒，红泥小火炉。',
      '晚来天欲雪，能饮一杯无？'
    ]
  },
  {
    key: '53',
    title: '无题*春心莫共花争发',
    author: '李商隐',
    lines: [
      '飒飒东风细雨来，芙蓉塘外有轻雷。',
      '金蟾啮锁烧香入，玉虎牵丝汲井回。',
      '贾氏窥帘韩掾少，宓妃留枕魏王才。yuan4 shao4 fu2',
      '春心莫共花争发，一寸相思一寸灰！'
    ]
  },
  {
    key: '54',
    title: '逢入京使',
    author: '岑参',
    lines: [
      '故园东望路漫漫，双袖龙钟泪不干。',
      '马上相逢无纸笔，凭君传语报平安。'
    ]
  },
  {
    key: '55',
    title: '无题*直道相思了无益',
    author: '李商隐',
    lines: [
      '重帏深下莫愁堂，卧后清宵细细长。',
      '神女生涯原是梦，小姑居处本无郎。',
      '风波不信菱枝弱，月露谁教桂叶香。',
      '直道相思了无益，未妨惆怅是清狂。'
    ]
  },
  {
    key: '56',
    title: '寄蜀中薛涛校书',
    author: '王建',
    lines: [
      '万里桥边女校书，枇杷花里闭门居。',
      '扫眉才子于今少，管领春风总不如。'
    ]
  },
  {
    key: '57',
    title: '闻官军收河南河北',
    author: '杜甫',
    lines: [
      '剑外忽传收蓟北，初闻涕泪满衣裳。',
      '却看妻子愁何在，漫卷诗书喜欲狂。',
      '白日放歌须纵酒，青春作伴好还乡。',
      '即从巴峡穿巫峡，便下襄阳向洛阳。'
    ]
  },
  {
    key: '58',
    title: '咏怀古迹（其三）',
    author: '杜甫',
    lines: [
      '群山万壑赴荆门，生长明妃尚有村。',
      '一去紫台连朔漠，独留青冢向黄昏。',
      '画图省识春风面，环珮空归夜月魂。',
      '千载琵琶作胡语，分明怨恨曲中论。',
      '王昭君'
    ]
  },
  {
    key: '59',
    title: '送柴侍御',
    author: '王昌龄',
    lines: [
      '流水通波接武冈，送君不觉有离伤。',
      '青山一道同云雨，明月何曾是两乡。'
    ]
  },
  {
    key: '60',
    title: '把酒问月·故人贾淳令予问之',
    author: '李白',
    lines: [
      '青天有月来几时，我今停杯一问之。',
      '人攀明月不可得，月行却与人相随。',
      '皎如飞镜临丹阙，绿烟灭尽清辉发。',
      '但见宵从海上来，宁知晓向云间没。',
      '白兔捣药秋复春，嫦娥孤栖与谁邻。',
      '今人不见古时月，今月曾经照古人。',
      '古人今人若流水，共看明月皆如此。',
      '唯愿当歌对酒时，月光长照金樽里。'
    ]
  },
  {
    key: '61',
    title: '江畔独步寻花·其六',
    author: '杜甫',
    lines: [
      '黄四娘家花满蹊，千朵万朵压枝低。',
      '留连戏蝶时时舞，自在娇莺恰恰啼。'
    ]
  },
  {
    key: '62',
    title: '宫词·故国三千里',
    author: '张祜',
    lines: [
      '故国三千里，深宫二十年。',
      '一声何满子，双泪落君前。'
    ]
  },
  {
    key: '63',
    title: '咏怀古迹五首·其一',
    author: '杜甫',
    lines: [
      '支离东北风尘际，漂泊西南天地间。',
      '三峡楼台淹日月，五溪衣服共云山。',
      '羯胡事主终无赖，词客哀时且未还。',
      '庾信平生最萧瑟，暮年诗赋动江关。'
    ]
  },
  {
    key: '64',
    title: '笑傲江湖二之东方不败',
    author: '',
    lines: [
      '天下英雄出我辈，一入江湖岁月催。',
      '鸿图霸业谈笑间，不胜人生一场醉。',
      '提剑跨骑挥鬼雨，白骨如山鸟惊飞。',
      '尘世如潮人如水，只叹江湖几人回。'
    ]
  },
  {
    key: '65',
    title: '陇西行四首·其二',
    author: '陈陶',
    lines: [
      '誓扫匈奴不顾身，五千貂锦丧胡尘。',
      '可怜无定河边骨，犹是春闺梦里人！'
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
        <a-breadcrumb-item>中国古诗文·唐</a-breadcrumb-item>
      </a-breadcrumb>

      <a-button @click="goBack" size="small" class="back-button">
        <template #icon>
          <LeftOutlined />
        </template>
        <span>Back</span>
      </a-button>
    </div>

    <div class="page-content">
      <h1>中国古诗文 * 唐</h1>

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
