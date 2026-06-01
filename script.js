const filePath = (name) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(name)}?width=900`;

const art = (title, meta, date, location, image) => ({
  title,
  meta,
  date,
  location,
  image,
});

const eras = [
  {
    id: "china-neolithic",
    period: "中国新石器艺术",
    years: "约前7000-前2000",
    region: "china",
    title: "彩陶、玉器与聚落礼仪",
    geography: "黄河流域、长江下游、辽河流域",
    history: "农业聚落形成，族群组织和祭祀秩序逐渐稳定。",
    artRelation: "艺术不只是装饰，而是把自然崇拜、祖先意识和聚落身份固定在器物上。",
    product: "彩陶盆、玉琮、玉璧、玉龙。",
    context: "早期中国艺术以器物为核心，陶器纹样和玉礼器共同构成“器以载礼”的源头。",
    movement: "彩陶文化重视几何纹、鱼纹、人面纹；良渚玉器强调轴线、神人兽面纹和权力象征。",
    legacy: "为青铜礼器、玉礼体系和后世纹样观念提供原型。",
    artists: ["仰韶工匠群", "良渚玉作工匠", "红山玉器工匠"],
    relations: "此期以工匠共同体为主，不以个人艺术家署名。",
    artworks: [
      art("人面鱼纹彩陶盆", "仰韶文化，彩陶", "约前5000-前4000年", "中国国家博物馆", filePath("Banpo painted pottery basin with human face and fish design.jpg")),
      art("良渚玉琮", "良渚文化，玉礼器", "约前3300-前2300年", "良渚博物院、浙江省博物馆等有藏", filePath("Liangzhu jade cong.jpg")),
      art("红山玉龙", "红山文化，玉器", "约前4700-前2900年", "中国国家博物馆", filePath("Jade dragon Hongshan Culture.jpg")),
    ],
  },
  {
    id: "world-prehistoric",
    period: "史前图像与巨石文化",
    years: "约前40000-前3000",
    region: "world",
    title: "洞穴、身体与仪式空间",
    geography: "西欧洞穴带、多瑙河流域、不列颠群岛",
    history: "狩猎采集到农业定居的转变，图像和空间服务于仪式、记忆和族群凝聚。",
    artRelation: "动物壁画强调人与自然的关系，小雕像和巨石阵则把身体、生育、天象和仪式联系起来。",
    product: "洞穴壁画、小型雕像、巨石建筑。",
    context: "图像从岩壁、骨角、石块进入公共仪式空间，是艺术、宗教和地理经验的早期结合。",
    movement: "旧石器洞穴艺术重动态和轮廓，新石器巨石文化重空间秩序和天文方向。",
    legacy: "为埃及、两河和爱琴海文明的纪念性艺术提供先声。",
    artists: ["拉斯科洞穴画作者群", "威伦道夫小像工匠", "巨石阵建造者"],
    relations: "图像经验依靠迁徙路线和聚落交流扩散。",
    artworks: [
      art("拉斯科洞穴壁画", "旧石器时代，洞穴壁画", "约前17000年", "法国多尔多涅，拉斯科洞穴", filePath("Lascaux painting.jpg")),
      art("威伦道夫的维纳斯", "旧石器时代，石灰岩小像", "约前28000-前25000年", "维也纳自然史博物馆", filePath("Venus of Willendorf frontview retouched 2.jpg")),
      art("巨石阵", "新石器至青铜时代，巨石建筑", "约前3000-前2000年", "英国威尔特郡原址", filePath("Stonehenge2007 07 30.jpg")),
    ],
  },
  {
    id: "egypt",
    period: "古埃及艺术",
    years: "约前3100-前30",
    region: "world",
    title: "尼罗河、王权与永恒秩序",
    geography: "尼罗河流域，孟菲斯、底比斯、吉萨",
    history: "统一王权、神庙经济和来世观构成稳定的视觉制度。",
    artRelation: "埃及艺术服务于神权和永生观，人物比例、正面律和陵墓图像是宇宙秩序的可视化。",
    product: "金字塔、陵墓壁画、木乃伊棺、法老雕像、亡灵书。",
    context: "干旱地理和尼罗河周期让“永恒”成为艺术核心，陵墓是通往来世的图像系统。",
    movement: "正面律、等级比例、纪念性建筑和程式化色彩保持长期稳定。",
    legacy: "影响地中海艺术对纪念碑、神庙轴线和王权肖像的理解。",
    artists: ["古埃及宫廷工匠", "陵墓画师", "神庙建筑师"],
    relations: "艺术生产由王室、祭司和专业工匠协作完成。",
    artworks: [
      art("纳美尔调色板", "早王朝，王权图像", "约前3100年", "埃及博物馆，开罗", filePath("Narmer Palette.jpg")),
      art("图坦卡蒙黄金面具", "新王国，陪葬面具", "约前1323年", "埃及博物馆，开罗", filePath("Tutankhamun's mask.jpg")),
      art("内巴蒙墓壁画", "新王国，墓葬壁画", "约前1350年", "大英博物馆，伦敦", filePath("Nebamun hunting in the marshes.jpg")),
    ],
  },
  {
    id: "china-shang-zhou",
    period: "商周青铜礼制",
    years: "约前1600-前256",
    region: "china",
    title: "青铜、祖先祭祀与王权",
    geography: "中原、关中、长江流域青铜文化圈",
    history: "王权与宗法礼制结合，祖先祭祀和战争构成政治秩序。",
    artRelation: "青铜器是礼制和权力的物质核心，纹样把恐惧、神性和祖先秩序压缩成器物表面。",
    product: "鼎、尊、卣、钟、饕餮纹、铭文。",
    context: "商周艺术的重点不是个人表现，而是礼仪等级、族群记忆和政治合法性。",
    movement: "饕餮纹、夔龙纹和铭文系统推动中国器物美学成熟。",
    legacy: "直接影响秦汉礼仪器物、宫廷收藏和金石学传统。",
    artists: ["青铜铸造工匠", "铭文书写者", "王室作坊"],
    relations: "工艺、文字和礼制互相支撑，形成国家级艺术生产。",
    artworks: [
      art("后母戊鼎", "商代，青铜礼器", "约前13-前11世纪", "中国国家博物馆", filePath("Houmuwu ding, National Museum of China.jpg")),
      art("毛公鼎", "西周晚期，青铜铭文器", "约前9-前8世纪", "台北故宫博物院", filePath("Mao Gong Ding.jpg")),
      art("曾侯乙编钟", "战国早期，青铜乐器", "约前433年", "湖北省博物馆", filePath("Bianzhong of Marquis Yi of Zeng.jpg")),
    ],
  },
  {
    id: "greece",
    period: "古希腊艺术",
    years: "约前800-前146",
    region: "world",
    title: "城邦、人体与理性比例",
    geography: "爱琴海、雅典、伯罗奔尼撒、小亚细亚沿岸",
    history: "城邦政治、哲学、竞技和神庙公共生活推动人体理想化。",
    artRelation: "希腊艺术把人体当作理性、秩序和公民精神的尺度。",
    product: "神庙柱式、理想人体雕塑、瓶画、浮雕。",
    context: "山海分割的城邦地理使地方风格并存，雅典在古典时期形成强势典范。",
    movement: "从古风微笑到古典均衡，再到希腊化戏剧性和情绪化。",
    legacy: "成为欧洲文艺复兴、学院艺术和新古典主义的反复回望对象。",
    artists: ["菲狄亚斯", "波利克里托斯", "普拉克西特列斯"],
    relations: "波利克里托斯提出人体比例理想，菲狄亚斯代表雅典公共艺术高峰。",
    artworks: [
      art("帕特农神庙", "古典时期，神庙建筑", "前447-前432年", "希腊雅典卫城原址", filePath("The Parthenon in Athens.jpg")),
      art("米洛的维纳斯", "希腊化雕塑", "约前150-前125年", "卢浮宫，巴黎", filePath("Venus de Milo Louvre Ma399 n4.jpg")),
      art("拉奥孔群像", "希腊化雕塑", "约前1世纪", "梵蒂冈博物馆", filePath("Laocoon and His Sons.jpg")),
    ],
  },
  {
    id: "rome",
    period: "古罗马艺术",
    years: "前146-476",
    region: "world",
    title: "帝国、工程与公共纪念",
    geography: "罗马城、地中海帝国、庞贝、不列颠至北非",
    history: "共和国到帝国扩张，城市治理、军功和皇帝崇拜需要可复制的视觉语言。",
    artRelation: "罗马艺术把希腊形式转化为帝国宣传、法律秩序和城市工程。",
    product: "肖像雕塑、凯旋门、圆形剧场、壁画、马赛克。",
    context: "道路、拱券、混凝土和城市网络让艺术进入广阔的公共空间。",
    movement: "写实肖像、历史浮雕、建筑工程和庞贝壁画并行。",
    legacy: "拱券、穹顶和纪念碑传统深刻影响拜占庭、文艺复兴和现代国家建筑。",
    artists: ["罗马肖像雕刻家", "庞贝壁画工坊", "帝国建筑师"],
    relations: "罗马常复制希腊原作，同时用肖像和建筑建立帝国身份。",
    artworks: [
      art("奥古斯都像", "帝国早期，政治肖像", "约公元1世纪", "梵蒂冈博物馆", filePath("Statue-Augustus.jpg")),
      art("罗马斗兽场", "弗拉维王朝，公共建筑", "公元70-80年", "意大利罗马原址", filePath("Colosseum in Rome, Italy - April 2007.jpg")),
      art("庞贝湿壁画", "罗马壁画", "公元1世纪", "那不勒斯国立考古博物馆等", filePath("Pompeii - Villa of the Mysteries - Dionysiac frieze.jpg")),
    ],
  },
  {
    id: "han",
    period: "秦汉帝国与墓葬艺术",
    years: "前221-220",
    region: "china",
    title: "帝国秩序、生死观与地下世界",
    geography: "关中、中原、楚地、河西走廊",
    history: "统一帝国、郡县制度、厚葬风气和神仙思想共同塑造汉代视觉文化。",
    artRelation: "汉代重生死观，墓葬艺术把天界、人间、地下与升仙想象组织成完整宇宙图。",
    product: "兵马俑、T形帛画、画像石、画像砖、漆棺、陶俑。",
    context: "艺术从地上权力延伸到地下空间，墓室成为历史、神话和日常生活的图像剧场。",
    movement: "秦代写实塑像强调帝国军阵，汉代图像更重神仙、祥瑞和灵魂升腾。",
    legacy: "为中国墓葬叙事、人物画和历史图像传统提供基础。",
    artists: ["秦陵陶俑工匠", "马王堆帛画作者", "画像石工匠"],
    relations: "宫廷工程、地方工坊和墓葬赞助共同推动图像扩散。",
    artworks: [
      art("秦始皇陵兵马俑", "秦代，陶塑军阵", "约前210年", "秦始皇帝陵博物院，西安", filePath("Terracotta Army, View of Pit 1.jpg")),
      art("马王堆一号墓T形帛画", "西汉，帛画", "约前168年", "湖南博物院", filePath("Mawangdui silk banner from tomb no1.jpg")),
      art("武氏祠画像石", "东汉，画像石", "公元2世纪", "山东嘉祥武氏墓群石刻博物馆", filePath("Wu Liang Shrine rubbings.jpg")),
    ],
  },
  {
    id: "byzantine",
    period: "拜占庭艺术",
    years: "330-1453",
    region: "world",
    title: "东罗马、圣像与金色空间",
    geography: "君士坦丁堡、拉文纳、巴尔干、小亚细亚",
    history: "东罗马帝国延续罗马政治结构，基督教神学和皇权仪式成为艺术核心。",
    artRelation: "拜占庭艺术不是追求人间写实，而是用金底、正面圣像和穹顶空间制造神圣在场。",
    product: "镶嵌画、圣像画、穹顶教堂、象牙雕刻、彩绘手抄本。",
    context: "地处欧亚交汇处，拜占庭将罗马建筑、基督教神学和东方装饰性结合。",
    movement: "圣像程式、金色背景、扁平化形体和空间象征性是关键。",
    legacy: "影响东正教艺术、意大利早期绘画和中世纪教堂空间。",
    artists: ["拜占庭镶嵌工匠", "圣像画师", "安提米乌斯与伊西多鲁斯"],
    relations: "帝国、教会和工匠群体共同维护圣像规范。",
    artworks: [
      art("查士丁尼与随从", "圣维塔莱教堂镶嵌画", "约547年", "圣维塔莱教堂，拉文纳", filePath("Meister von San Vitale in Ravenna 004.jpg")),
      art("圣索菲亚大教堂", "拜占庭穹顶建筑", "532-537年", "土耳其伊斯坦布尔原址", filePath("Hagia Sophia Mars 2013.jpg")),
      art("弗拉基米尔圣母", "拜占庭圣像画", "约12世纪", "特列季亚科夫画廊，莫斯科", filePath("Theotokos of Vladimir.jpg")),
    ],
  },
  {
    id: "medieval-china",
    period: "魏晋南北朝至隋唐",
    years: "220-907",
    region: "china",
    title: "佛教东传、士人精神与盛唐开放",
    geography: "洛阳、长安、敦煌、云冈、龙门、丝绸之路",
    history: "分裂与融合、佛教传播、丝路交流和唐帝国开放共同改变图像系统。",
    artRelation: "佛教石窟把外来宗教图像本土化，人物画和书法则表达士人精神与政治秩序。",
    product: "石窟造像、壁画、人物长卷、书法、唐三彩。",
    context: "地理上的丝路通道使中亚、印度和中国视觉语言相互转译。",
    movement: "魏晋重神韵，北朝石窟重庄严，唐代人物画和佛教壁画重华丽与体量。",
    legacy: "为宋代文人画和中国式佛教图像奠基。",
    artists: ["顾恺之", "阎立本", "吴道子", "张萱"],
    relations: "顾恺之重传神，阎立本服务宫廷，吴道子推动宗教壁画线描高峰。",
    artworks: [
      art("洛神赋图", "传顾恺之，人物长卷", "原作约4世纪，现存多为宋摹本", "故宫博物院、辽宁省博物馆等有藏", filePath("Gu Kaizhi - Nymph of the Luo River (detail).jpg")),
      art("步辇图", "传阎立本，唐代人物画", "约7世纪，现存为宋摹本", "故宫博物院，北京", filePath("Yan Liben - Emperor Taizong Receiving the Tibetan Envoy.jpg")),
      art("敦煌莫高窟壁画", "佛教壁画", "4-14世纪", "敦煌莫高窟原址", filePath("Mogao Caves, Dunhuang, China.jpg")),
    ],
  },
  {
    id: "gothic",
    period: "罗曼式与哥特艺术",
    years: "约1000-1500",
    region: "world",
    title: "城市教堂、光与垂直性",
    geography: "法国北部、英格兰、德意志、意大利城市",
    history: "中世纪城市兴起、行会组织、大学和主教座堂竞争推动大型教堂建设。",
    artRelation: "哥特艺术把神学理解为空间经验：尖拱、飞扶壁和彩色玻璃让光成为神圣象征。",
    product: "主教座堂、彩色玻璃、手抄本、祭坛画、石雕。",
    context: "与东罗马拜占庭并非简单对应，哥特主要发生在西欧中后期中世纪；二者都服务基督教，但空间语言不同。",
    movement: "罗曼式厚重、半圆拱；哥特式高耸、尖拱、肋架拱顶和明亮玻璃窗。",
    legacy: "推动欧洲建筑技术和宗教视觉叙事，为文艺复兴前夜的城市艺术提供基础。",
    artists: ["沙特尔工匠群", "乔托", "林堡兄弟"],
    relations: "乔托把中世纪图像推向空间和情感，预示早期文艺复兴。",
    artworks: [
      art("沙特尔大教堂", "法国哥特式建筑", "约1194-1220年主体重建", "法国沙特尔原址", filePath("Chartres Cathedral West Facade.jpg")),
      art("哀悼基督", "乔托，湿壁画", "约1305年", "斯克罗威尼礼拜堂，帕多瓦", filePath("Giotto - Scrovegni - -36- - Lamentation (The Mourning of Christ) adj.jpg")),
      art("贝里公爵的豪华时祷书", "国际哥特式手抄本", "约1412-1416年", "孔代博物馆，尚蒂伊", filePath("Les Très Riches Heures du duc de Berry mars.jpg")),
    ],
  },
  {
    id: "song-yuan",
    period: "宋元文人画",
    years: "960-1368",
    region: "china",
    title: "山水秩序、城市文化与文人心性",
    geography: "汴梁、临安、江南、元代士人网络",
    history: "宋代城市经济、理学和画院制度发展，元代士人身份变化推动文人画成熟。",
    artRelation: "山水不只是风景，而是宇宙秩序、政治心态和个人精神的投射。",
    product: "全景山水、边角山水、花鸟画、书画合卷、文人山水。",
    context: "北宋重山川秩序，南宋重诗意取景，元代转向笔墨人格。",
    movement: "北宋雄浑，南宋简约，元代文人画强调书法性、古意和主观心境。",
    legacy: "确立后世中国画以笔墨修养和文人身份为中心的标准。",
    artists: ["范宽", "郭熙", "马远", "黄公望", "赵孟頫"],
    relations: "范宽与郭熙建立山水范式；赵孟頫倡古意，黄公望把文人山水推向典范。",
    artworks: [
      art("溪山行旅图", "范宽，北宋山水", "约11世纪初", "台北故宫博物院", filePath("Travelers Among Mountains and Streams, Fan Kuan, National Palace Museum.jpg")),
      art("早春图", "郭熙，北宋山水", "1072年", "台北故宫博物院", filePath("Guo Xi - Early Spring.jpg")),
      art("富春山居图", "黄公望，元代文人画", "1347-1350年", "浙江省博物馆、台北故宫博物院分藏", filePath("Dwelling in the Fuchun Mountains.jpg")),
    ],
  },
  {
    id: "renaissance",
    period: "文艺复兴",
    years: "约1400-1600",
    region: "world",
    title: "城市共和国、人文主义与透视",
    geography: "佛罗伦萨、罗马、威尼斯、尼德兰",
    history: "银行业、城市赞助、古典复兴、印刷术和科学观察共同改变艺术。",
    artRelation: "艺术从神圣象征转向人、空间和知识体系，透视法让世界变得可测量。",
    product: "湿壁画、祭坛画、肖像画、人体雕塑、透视建筑。",
    context: "意大利城市竞争和教会赞助催生大师体系，北方则重油画细节和日常空间。",
    movement: "早期重透视和结构，盛期追求均衡、人体理想和综合性。",
    legacy: "确立西方学院传统，也是现代主义后来反叛的对象。",
    artists: ["达·芬奇", "米开朗基罗", "拉斐尔", "波提切利", "扬·凡·艾克"],
    relations: "达·芬奇、米开朗基罗和拉斐尔构成盛期高峰，北方油画与意大利透视互相影响。",
    artworks: [
      art("蒙娜丽莎", "达·芬奇，肖像画", "约1503-1519年", "卢浮宫，巴黎", filePath("Mona Lisa, by Leonardo da Vinci, from C2RMF retouched.jpg")),
      art("雅典学院", "拉斐尔，湿壁画", "1509-1511年", "梵蒂冈博物馆", filePath("The School of Athens by Raffaello Sanzio da Urbino.jpg")),
      art("大卫", "米开朗基罗，雕塑", "1501-1504年", "学院美术馆，佛罗伦萨", filePath("Michelangelo's David - right view 2.jpg")),
    ],
  },
  {
    id: "ming-qing",
    period: "明清与城市画派",
    years: "1368-1911",
    region: "china",
    title: "复古、个性与商品化城市",
    geography: "苏州、南京、北京、扬州、上海",
    history: "商业城市、出版文化、宫廷收藏和士人网络繁荣，晚清口岸城市引入新视觉经验。",
    artRelation: "文人画在复古谱系中确立权威，同时城市市场推动个性化、趣味化和职业画家兴起。",
    product: "吴门山水、四王正统、扬州八怪、海上画派、宫廷中西合璧绘画。",
    context: "江南园林和商业出版让绘画成为社交、收藏和身份表达。",
    movement: "吴门温雅，董其昌重南北宗理论，扬州八怪重个性，海上画派重市场和都市视觉。",
    legacy: "把文人画理论系统化，也为近现代中国画转型提供压力和资源。",
    artists: ["沈周", "文徵明", "董其昌", "石涛", "郑板桥", "任伯年"],
    relations: "吴门承元人笔墨，董其昌重构正统，石涛和扬州八怪强调个性。",
    artworks: [
      art("庐山高图", "沈周，吴门画派", "1467年", "台北故宫博物院", filePath("Shen Zhou - Lofty Mount Lu.jpg")),
      art("搜尽奇峰打草稿", "石涛，清代个性派", "约17世纪末-18世纪初", "故宫博物院，北京", filePath("Shitao - Ten Thousand Ugly Inkblots.jpg")),
      art("墨竹图", "郑板桥，扬州八怪", "18世纪", "多馆有藏", filePath("Zheng Xie Bamboo.jpg")),
    ],
  },
  {
    id: "baroque",
    period: "巴洛克与洛可可",
    years: "约1600-1750",
    region: "world",
    title: "宗教改革后的戏剧性视觉",
    geography: "罗马、佛兰德斯、西班牙、荷兰、法国宫廷",
    history: "反宗教改革、绝对王权、全球贸易和市民市场共同改变赞助结构。",
    artRelation: "巴洛克用强光、运动和情感调动观众，艺术成为信仰、权力和市场的现场。",
    product: "祭坛画、宫廷天顶画、静物画、肖像画、宫殿空间。",
    context: "天主教地区偏戏剧和神迹，新教荷兰偏市民肖像、风景和日常生活。",
    movement: "卡拉瓦乔式明暗对照、鲁本斯的动态肉身、伦勃朗的心理光影。",
    legacy: "为现实主义、浪漫主义和电影式光影叙事提供资源。",
    artists: ["卡拉瓦乔", "鲁本斯", "伦勃朗", "委拉斯开兹", "贝尼尼"],
    relations: "卡拉瓦乔影响欧洲明暗法，鲁本斯服务宫廷外交，伦勃朗回应荷兰市民社会。",
    artworks: [
      art("圣马太蒙召", "卡拉瓦乔，巴洛克绘画", "1599-1600年", "圣路易吉·德伊·弗朗切西教堂，罗马", filePath("The Calling of Saint Matthew-Caravaggo (1599-1600).jpg")),
      art("夜巡", "伦勃朗，群像肖像", "1642年", "阿姆斯特丹国家博物馆", filePath("The Night Watch - HD.jpg")),
      art("圣特蕾莎的狂喜", "贝尼尼，雕塑与礼拜堂空间", "1647-1652年", "胜利之后圣母堂，罗马", filePath("Ecstasy of Saint Teresa September 2015-2a.jpg")),
    ],
  },
  {
    id: "modern-world",
    period: "现代主义裂变",
    years: "约1750-1945",
    region: "world",
    title: "革命、工业城市与形式实验",
    geography: "巴黎、伦敦、柏林、维也纳、纽约",
    history: "启蒙革命、工业化、摄影、城市消费和战争让艺术不断重写自身边界。",
    artRelation: "艺术从再现现实转向表现感知、社会批判和形式结构。",
    product: "历史画、现实主义绘画、印象派、后印象派、立体主义、表现主义、超现实主义。",
    context: "巴黎成为现代艺术实验中心，摄影和展览制度改变观看方式。",
    movement: "印象派捕捉光色，后印象派重结构和情绪，立体主义拆解单点透视。",
    legacy: "奠定当代艺术的媒介自由和观念实验。",
    artists: ["大卫", "德拉克洛瓦", "莫奈", "梵高", "塞尚", "毕加索", "达利"],
    relations: "莫奈打开光色问题，塞尚转向结构，毕加索发展立体主义，梵高强化主观情绪。",
    artworks: [
      art("自由引导人民", "德拉克洛瓦，浪漫主义", "1830年", "卢浮宫，巴黎", filePath("Eugène Delacroix - La liberté guidant le peuple.jpg")),
      art("日出·印象", "莫奈，印象派", "1872年", "马摩丹莫奈博物馆，巴黎", filePath("Claude Monet, Impression, soleil levant.jpg")),
      art("星月夜", "梵高，后印象派", "1889年", "现代艺术博物馆，纽约", filePath("Van Gogh - Starry Night - Google Art Project.jpg")),
    ],
  },
  {
    id: "modern-china",
    period: "近现代中国美术",
    years: "1912-至今",
    region: "china",
    title: "新式教育、中西融合与公共视觉",
    geography: "上海、北京、广州、杭州、巴黎留学网络",
    history: "新式学校、留学、革命、出版、展览制度和全球化共同推动中国艺术现代转型。",
    artRelation: "艺术在民族身份、社会启蒙、传统笔墨和现代媒介之间不断协商。",
    product: "新国画、木刻运动、油画民族化、现代水墨、当代装置与影像。",
    context: "海派市场、岭南改革、学院教育和海外经验共同重塑艺术家身份。",
    movement: "徐悲鸿强调写实，林风眠融合中西，齐白石更新写意生命力，吴冠中重形式美。",
    legacy: "把中国画带入现代公共文化，并连接全球当代艺术。",
    artists: ["高剑父", "徐悲鸿", "林风眠", "齐白石", "潘天寿", "吴冠中", "蔡国强"],
    relations: "徐悲鸿和林风眠代表不同中西融合路径；齐白石从民间和文人传统中更新笔墨。",
    artworks: [
      art("奔马图", "徐悲鸿，现代水墨", "20世纪上半叶", "徐悲鸿纪念馆等有藏", filePath("Xu Beihong Galloping Horse.jpg")),
      art("虾", "齐白石，写意花鸟", "20世纪", "北京画院美术馆等有藏", filePath("Qi Baishi Shrimp.jpg")),
      art("双燕", "吴冠中，现代水墨", "1981年", "多版本，公私机构有藏", filePath("Wu Guanzhong Jiangnan.jpg")),
    ],
  },
  {
    id: "contemporary-world",
    period: "全球当代艺术",
    years: "1945-至今",
    region: "world",
    title: "冷战、消费社会与媒介扩张",
    geography: "纽约、伦敦、东京、柏林、全球双年展网络",
    history: "冷战、消费社会、电视和互联网、身份政治与全球化改变艺术制度。",
    artRelation: "艺术从物件扩展到观念、过程、现场、身体、影像和网络。",
    product: "抽象表现主义、波普艺术、极简主义、观念艺术、行为艺术、数字艺术。",
    context: "艺术中心从巴黎转向纽约，又在全球双年展中变成多中心网络。",
    movement: "抽象表现主义重行动和崇高，波普回应消费图像，观念艺术重语言和制度批判。",
    legacy: "打破单一中心叙事，使不同地域、身份和媒介进入艺术史。",
    artists: ["波洛克", "罗斯科", "沃霍尔", "草间弥生", "白南准", "班克斯"],
    relations: "波洛克与罗斯科推动纽约现代主义，沃霍尔把消费图像转为艺术制度问题。",
    artworks: [
      art("秋韵：第30号", "波洛克，抽象表现主义", "1950年", "大都会艺术博物馆，纽约", filePath("Pollock - Autumn Rhythm.jpg")),
      art("玛丽莲双联画", "沃霍尔，波普艺术", "1962年", "泰特现代美术馆，伦敦", filePath("Andy Warhol Marilyn Diptych.jpg")),
      art("无限镜屋", "草间弥生，装置艺术", "1965年起持续发展", "多馆藏与巡展版本", filePath("Yayoi Kusama Infinity Mirror Room.jpg")),
    ],
  },
];

const extraArtworks = {
  "中国新石器艺术": [
    art("马家窑彩陶罐", "新石器时代彩陶", "约前3300-前2000年", "克利夫兰艺术博物馆等有藏", filePath("CMOC Treasures of Ancient China exhibit - painted jar.jpg")),
    art("良渚玉璧", "良渚文化，玉礼器", "约前3300-前2300年", "多馆有藏", filePath("Liangzhu Jade Bi Disc (10434502846).jpg")),
  ],
  "史前图像与巨石文化": [
    art("阿尔塔米拉野牛", "旧石器洞穴壁画", "约前15000-前12000年", "西班牙阿尔塔米拉洞穴", filePath("Altamira, bison.jpg")),
    art("肖韦洞穴马群", "旧石器洞穴壁画", "约前30000年", "法国肖韦洞穴", filePath("Chauvet´s cave horses.jpg")),
  ],
  "古埃及艺术": [
    art("吉萨金字塔群", "古王国纪念性建筑", "约前26世纪", "埃及吉萨原址", filePath("All Gizah Pyramids.jpg")),
    art("纳芙蒂蒂胸像", "新王国阿玛尔纳艺术", "约前1345年", "柏林新博物馆", filePath("Nefertiti 30-01-2006.jpg")),
  ],
  "商周青铜礼制": [
    art("三星堆青铜人头像", "青铜面具与人像", "约前12-前11世纪", "三星堆博物馆", filePath("Bronze head from Sanxingdui.JPG")),
    art("大克鼎", "西周青铜礼器", "约前10-前9世纪", "上海博物馆", filePath("Da Ke ding.jpg")),
  ],
  "古希腊艺术": [
    art("掷铁饼者", "古典人体雕塑罗马摹本", "原作约前460-前450年", "罗马国立博物馆等有藏", filePath("Discobolus in National Roman Museum Palazzo Massimo alle Terme.JPG")),
    art("狄俄尼索斯航海杯", "黑绘陶杯", "约前530年", "慕尼黑国家古代艺术博物馆", filePath("Exekias Dionysos Staatliche Antikensammlungen 2044.jpg")),
  ],
  "古罗马艺术": [
    art("提图斯凯旋门浮雕", "罗马历史浮雕", "约公元81年", "意大利罗马原址", filePath("Arch of Titus Menorah.png")),
    art("万神殿", "罗马穹顶建筑", "约公元118-125年", "意大利罗马原址", filePath("Pantheon Rome 2005may.jpg")),
  ],
  "秦汉帝国与墓葬艺术": [
    art("金缕玉衣", "汉代丧葬玉衣", "约前2世纪", "河北博物院等有藏", filePath("Western Han Jade Burial Suit of Liu Sheng with Body Aperature Fittings.jpg")),
    art("西汉鎏金铜灯", "西汉青铜灯具", "约前2世纪", "弗利尔美术馆等有藏", filePath("Western Han gilt bronze lamp.jpg")),
  ],
  "拜占庭艺术": [
    art("皇后狄奥多拉与随从", "圣维塔莱教堂镶嵌画", "约547年", "圣维塔莱教堂，拉文纳", filePath("Empress Theodora mosaic.jpg")),
    art("圣阿波利纳雷新堂镶嵌", "拜占庭教堂镶嵌画", "6世纪", "拉文纳圣阿波利纳雷新堂", filePath("Sant'Apollinare Nuovo Mosaics.jpg")),
  ],
  "魏晋南北朝至隋唐": [
    art("云冈石窟大佛", "北魏石窟造像", "5世纪", "山西大同云冈石窟原址", filePath("Yungang Grottoes 02.jpg")),
    art("唐三彩骆驼载乐俑", "唐代陶俑", "8世纪", "中国国家博物馆等有藏", filePath("Tang dynasty sancai camel and musicians.jpg")),
  ],
  "罗曼式与哥特艺术": [
    art("圣礼拜堂彩色玻璃", "法国哥特式彩窗", "1240年代", "巴黎圣礼拜堂原址", filePath("Sainte Chapelle Interior Stained Glass.jpg")),
    art("比萨主教座堂群", "罗曼式建筑", "11-14世纪", "意大利比萨原址", filePath("Pisa Cathedral and Leaning Tower.jpg")),
  ],
  "宋元文人画": [
    art("千里江山图", "北宋青绿山水", "1113年", "故宫博物院，北京", filePath("Wang Ximeng - A Thousand Li of Rivers and Mountains.jpg")),
    art("鹊华秋色图", "赵孟頫，设色山水", "1295年", "台北故宫博物院", filePath("Autumn Colors on the Qiao and Hua Mountains.jpg")),
  ],
  "文艺复兴": [
    art("维纳斯的诞生", "波提切利，蛋彩画", "约1484-1486年", "乌菲齐美术馆，佛罗伦萨", filePath("Sandro Botticelli - La nascita di Venere - Google Art Project - edited.jpg")),
    art("阿尔诺芬尼夫妇像", "扬·凡·艾克，油画", "1434年", "英国国家美术馆，伦敦", filePath("Van Eyck - Arnolfini Portrait.jpg")),
  ],
  "明清与城市画派": [
    art("清明上河图仇英本", "明代城市风俗长卷", "16世纪", "辽宁省博物馆等有藏", filePath("Qiu Ying - Spring Festival on the River.jpg")),
    art("康熙南巡图", "清代宫廷纪实绘画", "17世纪末", "多馆分藏", filePath("Kangxi Emperor's Southern Inspection Tour.jpg")),
  ],
  "巴洛克与洛可可": [
    art("宫娥", "委拉斯开兹，宫廷绘画", "1656年", "普拉多博物馆，马德里", filePath("Las Meninas, by Diego Velázquez, from Prado in Google Earth.jpg")),
    art("秋千", "弗拉戈纳尔，洛可可绘画", "约1767年", "华莱士收藏馆，伦敦", filePath("Fragonard, The Swing.jpg")),
  ],
  "现代主义裂变": [
    art("亚维农少女", "毕加索，立体主义前奏", "1907年", "现代艺术博物馆，纽约", filePath("Les Demoiselles d'Avignon.jpg")),
    art("记忆的永恒", "达利，超现实主义", "1931年", "现代艺术博物馆，纽约", filePath("The Persistence of Memory.jpg")),
  ],
  "近现代中国美术": [
    art("父亲", "罗中立，现实主义油画", "1980年", "中国美术馆，北京", filePath("Luo Zhongli Father.jpg")),
    art("格尔尼卡与中国现代油画讨论", "中西现代主义参照", "20世纪", "教学与展览语境", filePath("Xu Beihong Tian Heng and His Five Hundred Followers.jpg")),
  ],
  "全球当代艺术": [
    art("泉", "杜尚，现成品艺术", "1917年原作", "多馆有复制版本", filePath("Marcel Duchamp, 1917, Fountain, photograph by Alfred Stieglitz.jpg")),
    art("电视佛", "白南准，录像装置", "1974年", "多馆有版本", filePath("Nam June Paik TV Buddha.jpg")),
  ],
};

const compareRows = [
  {
    time: "前3000年前后",
    china: "新石器晚期玉礼器和聚落礼仪成熟，良渚等文化把权力和宇宙观放进玉器。",
    bridge: "中国以玉礼器和聚落仪式建立早期礼制，埃及则以纪念性建筑和陵墓体系回应王权与来世。",
    world: "埃及统一王权出现，尼罗河地理和来世观推动金字塔、陵墓和正面律。",
  },
  {
    time: "前1600-前200",
    china: "商周青铜礼制到战国乐器和铭文系统，艺术服务祖先祭祀与王权秩序。",
    bridge: "一边是青铜器和铭文构成宗法礼制，一边是城邦公共艺术把人体、神庙和公民精神联系起来。",
    world: "希腊城邦发展人体理想和神庙柱式，艺术以理性比例和公共生活为核心。",
  },
  {
    time: "前221-220",
    china: "秦汉帝国把军阵、墓葬、升仙图像和厚葬制度结合，强调生死连续。",
    bridge: "秦汉与罗马都服务帝国秩序：中国偏向地下宇宙与丧葬图像，罗马偏向公共工程和政治纪念。",
    world: "罗马把希腊形式转为帝国工程、肖像和公共纪念碑。",
  },
  {
    time: "330-900",
    china: "佛教经丝路进入中国，石窟造像和壁画在云冈、龙门、敦煌本土化。",
    bridge: "丝路让佛教图像向东传播；拜占庭在地中海东部把基督教神学转化为金底圣像和穹顶空间。",
    world: "拜占庭以金底镶嵌、圣像和穹顶空间表现神圣秩序。",
  },
  {
    time: "1000-1400",
    china: "宋元山水从宇宙秩序转向文人心性，笔墨成为人格语言。",
    bridge: "宋元文人画更关注观看者的修养与心境，西欧哥特艺术则把城市、教会和光线组织成公共宗教经验。",
    world: "西欧罗曼式和哥特式教堂发展，城市、行会和彩色玻璃塑造神学空间。",
  },
  {
    time: "1400-1750",
    china: "明清文人画在复古、收藏和城市市场中扩展，吴门、四王、扬州八怪并存。",
    bridge: "中国画在复古、题跋和市场中分化；欧洲从文艺复兴理性空间转向巴洛克戏剧光影和王权展示。",
    world: "文艺复兴透视与人体理想之后，巴洛克用光影和运动回应宗教与王权。",
  },
  {
    time: "1750-1945",
    china: "晚清民国的新式教育、留学和城市出版推动中国美术现代转型。",
    bridge: "现代化压力在中外同时出现：中国面对传统笔墨与西画制度的转换，欧洲则被工业、摄影和战争推向现代主义。",
    world: "工业革命、摄影和战争推动印象派、后印象派、立体主义等现代主义裂变。",
  },
  {
    time: "1945-至今",
    china: "现代水墨、油画民族化和当代艺术进入全球展览网络。",
    bridge: "战后艺术共同进入全球展览和媒介网络，差别在于中国更常处理本土传统、政治历史与全球当代之间的张力。",
    world: "抽象表现主义、波普、观念和数字艺术让艺术从物件转向过程与语境。",
  },
];

const artFormDetails = {
  "中国新石器艺术": [
    ["彩陶", "以旋涡纹、人面鱼纹、几何纹记录聚落身份和自然崇拜，常见于仰韶、马家窑等文化。"],
    ["玉礼器", "玉琮、玉璧、玉龙不只是装饰品，而是祭祀权力、天地观念和精英身份的象征。"],
    ["早期雕塑", "红山玉龙、陶塑人像体现动物崇拜、祖先观念和身体想象。"],
  ],
  "史前图像与巨石文化": [
    ["洞穴壁画", "拉斯科、阿尔塔米拉等洞穴以动物为核心，强调速度、轮廓和狩猎仪式。"],
    ["小型雕像", "女性小像常与生育、身体和仪式有关，体量小但象征强。"],
    ["巨石空间", "巨石阵把天象、纪念和集体劳动组织成可进入的空间。"],
  ],
  "古埃及艺术": [
    ["陵墓壁画", "用连续图像保障逝者来世生活，人物大小和姿态服从身份等级。"],
    ["法老雕像", "强调正面、静止和永恒，把王权塑造成神圣秩序。"],
    ["丧葬器物", "木乃伊棺、面具、亡灵书共同服务灵魂复生和来世审判。"],
  ],
  "商周青铜礼制": [
    ["青铜礼器", "鼎、尊、卣、簋承载祭祀、宴飨和宗法等级。"],
    ["纹样系统", "饕餮、夔龙、云雷纹让器物表面具有神秘威慑力。"],
    ["铭文书法", "青铜铭文记录册命、战争、赏赐和家族记忆，是书法与历史文献的早期交汇。"],
  ],
  "古希腊艺术": [
    ["神庙建筑", "柱式、比例和山花雕塑共同表达城邦秩序。"],
    ["人体雕塑", "从古风到古典再到希腊化，人体逐渐从程式走向理想与情绪。"],
    ["瓶画", "黑绘、红绘瓶画记录神话、竞技和日常生活。"],
  ],
  "古罗马艺术": [
    ["公共建筑", "拱券、穹顶、混凝土和道路系统把艺术变成帝国治理的一部分。"],
    ["肖像雕塑", "共和国写实肖像强调家族和公民德性，帝国肖像强调政治合法性。"],
    ["壁画与马赛克", "庞贝壁画把建筑幻象、神话和室内装饰结合。"],
  ],
  "秦汉帝国与墓葬艺术": [
    ["地下军阵", "兵马俑把帝国军政秩序带入陵墓，延续死后权力。"],
    ["帛画与升仙图", "马王堆T形帛画连接天界、人间、地下，体现汉代生死连续观。"],
    ["画像石画像砖", "把历史故事、神仙瑞兽、车马出行和日常生活放入墓室叙事。"],
  ],
  "拜占庭艺术": [
    ["镶嵌画", "金底和玻璃材质让光成为神圣媒介。"],
    ["圣像画", "正面人物和固定图式强调敬拜对象的神圣在场。"],
    ["穹顶教堂", "圣索菲亚式空间把帝国权力和天国想象压缩在穹顶下。"],
  ],
  "魏晋南北朝至隋唐": [
    ["石窟造像", "云冈、龙门、敦煌把印度、中亚和中国图像语言融合。"],
    ["人物画", "从顾恺之的传神到唐代宫廷人物，线描成为核心。"],
    ["书法与壁画", "书法表现士人气质，敦煌壁画呈现宗教叙事和丝路交流。"],
  ],
  "罗曼式与哥特艺术": [
    ["教堂建筑", "罗曼式厚重封闭，哥特式高耸明亮，结构技术服务神学体验。"],
    ["彩色玻璃", "把圣经故事、光和色彩变成面向城市公众的图像教育。"],
    ["手抄本与祭坛画", "精细装饰、金色背景和日课图像连接贵族生活与信仰。"],
  ],
  "宋元文人画": [
    ["全景山水", "北宋山水强调山川秩序、宇宙结构和人的渺小。"],
    ["边角山水", "南宋构图更诗意，留白和局部景物加强情绪。"],
    ["文人笔墨", "元代文人画重书法性和人格表达，不以逼真为唯一目标。"],
  ],
  "文艺复兴": [
    ["透视绘画", "单点透视让空间具有数学秩序，体现人文主义理性。"],
    ["人体与解剖", "人体成为知识、神性和美的共同尺度。"],
    ["肖像与祭坛画", "赞助人、宗教主题和个人身份在画面中并置。"],
  ],
  "明清与城市画派": [
    ["文人山水", "复古不是复制，而是通过笔墨谱系确认身份和修养。"],
    ["扬州八怪", "个性化题材、书法化笔墨和市场需求相互推动。"],
    ["海上画派", "上海城市商业、出版和外来视觉经验改变传统绘画口味。"],
  ],
  "巴洛克与洛可可": [
    ["宗教戏剧画", "强烈明暗和瞬间动作让观众像进入现场。"],
    ["宫廷艺术", "天顶画、雕塑和建筑共同服务王权展示。"],
    ["市民绘画", "荷兰静物、风景和群像体现商业社会和市民身份。"],
  ],
  "现代主义裂变": [
    ["印象派", "关注光色瞬间和现代城市观看。"],
    ["后印象派", "梵高强化情感，塞尚重建结构，高更转向象征和异域想象。"],
    ["立体主义与超现实", "立体主义拆解视点，超现实主义把梦境和潜意识引入图像。"],
  ],
  "近现代中国美术": [
    ["新国画", "以写实、素描、透视或形式构成重新解释传统笔墨。"],
    ["木刻与公共图像", "新兴木刻承担启蒙、宣传和社会批判功能。"],
    ["当代水墨与装置", "传统媒介进入全球当代语境，与影像、行为、装置交叉。"],
  ],
  "全球当代艺术": [
    ["抽象表现主义", "用身体行动、尺度和色域制造现代崇高。"],
    ["波普与消费图像", "广告、明星和商品成为艺术材料。"],
    ["观念与数字艺术", "作品可以是语言、过程、数据、互动或制度批判。"],
  ],
};

const artistProfiles = [
  profile("顾恺之", "东晋", "中国人物画", "提出“传神写照”，重视眼神和人物精神，是早期中国人物画理论核心人物。", [art("洛神赋图", "人物长卷", "原作约4世纪", "故宫博物院、辽宁省博物馆等有藏", filePath("Gu Kaizhi - Nymph of the Luo River (detail).jpg"))], ["影响后世人物画", "强调以形写神"]),
  profile("阎立本", "唐代", "宫廷人物画", "服务初唐政治叙事，擅长以人物等级、仪仗和神态表现外交与帝国秩序。", [art("步辇图", "唐代人物画", "约7世纪，现存宋摹本", "故宫博物院，北京", filePath("Yan Liben - Emperor Taizong Receiving the Tibetan Envoy.jpg"))], ["宫廷画传统", "政治图像"]),
  profile("范宽", "北宋", "山水画", "以巨碑式山水表现北方山川的厚重秩序，代表北宋全景山水高峰。", [art("溪山行旅图", "北宋山水", "约11世纪初", "台北故宫博物院", filePath("Travelers Among Mountains and Streams, Fan Kuan, National Palace Museum.jpg"))], ["北宋三大家", "影响郭熙等山水理论"]),
  profile("郭熙", "北宋", "山水画", "提出“三远”空间观，将山水观看经验理论化。", [art("早春图", "北宋山水", "1072年", "台北故宫博物院", filePath("Guo Xi - Early Spring.jpg"))], ["三远法", "宫廷画院"]),
  profile("赵孟頫", "元代", "书画复古", "主张复古与书画同源，连接宋元转型和元代文人画谱系。", [art("鹊华秋色图", "设色山水", "1295年", "台北故宫博物院", filePath("Autumn Colors on the Qiao and Hua Mountains.jpg"))], ["影响黄公望", "书画同源"]),
  profile("黄公望", "元代", "文人山水", "把笔墨节奏、个人心境和山水结构结合，是元四家代表。", [art("富春山居图", "元代文人画", "1347-1350年", "浙江省博物馆、台北故宫博物院分藏", filePath("Dwelling in the Fuchun Mountains.jpg"))], ["元四家", "文人画典范"]),
  profile("沈周", "明代", "吴门画派", "以文人修养、江南园林和元人笔墨建立吴门画派温雅风格。", [art("庐山高图", "吴门山水", "1467年", "台北故宫博物院", filePath("Shen Zhou - Lofty Mount Lu.jpg"))], ["文徵明师友圈", "吴门画派"]),
  profile("文徵明", "明代", "吴门画派", "诗书画兼擅，把苏州文人生活和细密笔墨推向成熟。", [art("惠山茶会图", "明代文人画", "1518年", "故宫博物院，北京", filePath("Wen Zhengming Tea Party at Huishan.jpg"))], ["沈周学生", "吴门画派"]),
  profile("石涛", "清代", "个性派山水", "提出“搜尽奇峰打草稿”和“一画”观，强调从自然和自我经验出发。", [art("搜尽奇峰打草稿", "清代山水", "约17世纪末-18世纪初", "故宫博物院，北京", filePath("Shitao - Ten Thousand Ugly Inkblots.jpg"))], ["反正统", "影响近现代水墨"]),
  profile("齐白石", "近现代", "写意花鸟", "以民间经验、简练笔墨和强烈生命感更新传统写意。", [art("虾", "写意花鸟", "20世纪", "北京画院美术馆等有藏", filePath("Qi Baishi Shrimp.jpg"))], ["受陈师曾赏识", "影响现代水墨"]),
  profile("徐悲鸿", "近现代", "写实改良中国画", "强调素描、解剖和写实训练，用现代学院体系改造中国画。", [art("奔马图", "现代水墨", "20世纪上半叶", "徐悲鸿纪念馆等有藏", filePath("Xu Beihong Galloping Horse.jpg"))], ["留法艺术家", "学院教育"]),
  profile("达·芬奇", "文艺复兴", "绘画与科学", "把观察、解剖、光影和心理描写结合，是盛期文艺复兴代表。", [art("蒙娜丽莎", "肖像画", "约1503-1519年", "卢浮宫，巴黎", filePath("Mona Lisa, by Leonardo da Vinci, from C2RMF retouched.jpg"))], ["盛期三杰", "科学观察"]),
  profile("米开朗基罗", "文艺复兴", "雕塑与壁画", "以英雄化人体表达精神张力，影响矫饰主义和学院传统。", [art("大卫", "大理石雕塑", "1501-1504年", "学院美术馆，佛罗伦萨", filePath("Michelangelo's David - right view 2.jpg"))], ["盛期三杰", "影响拉斐尔"]),
  profile("拉斐尔", "文艺复兴", "均衡构图", "吸收达·芬奇和米开朗基罗，形成清晰、和谐、学院化的典范。", [art("雅典学院", "湿壁画", "1509-1511年", "梵蒂冈博物馆", filePath("The School of Athens by Raffaello Sanzio da Urbino.jpg"))], ["盛期三杰", "学院典范"]),
  profile("卡拉瓦乔", "巴洛克", "强烈明暗法", "用现实人物、剧场光和瞬间动作重塑宗教绘画。", [art("圣马太蒙召", "巴洛克绘画", "1599-1600年", "圣路易吉·德伊·弗朗切西教堂，罗马", filePath("The Calling of Saint Matthew-Caravaggo (1599-1600).jpg"))], ["影响伦勃朗", "卡拉瓦乔主义"]),
  profile("伦勃朗", "巴洛克", "心理光影", "以光线和厚涂表现人物精神深度，是荷兰黄金时代代表。", [art("夜巡", "群像肖像", "1642年", "阿姆斯特丹国家博物馆", filePath("The Night Watch - HD.jpg"))], ["受卡拉瓦乔明暗法影响", "荷兰市民社会"]),
  profile("莫奈", "现代主义", "印象派", "持续研究光色和瞬间视觉经验，是印象派命名来源。", [art("日出·印象", "印象派绘画", "1872年", "马摩丹莫奈博物馆，巴黎", filePath("Claude Monet, Impression, soleil levant.jpg"))], ["印象派核心", "影响后印象派"]),
  profile("梵高", "现代主义", "后印象派", "以旋动笔触和强烈色彩表达主观情绪。", [art("星月夜", "后印象派", "1889年", "现代艺术博物馆，纽约", filePath("Van Gogh - Starry Night - Google Art Project.jpg"))], ["受印象派影响", "影响表现主义"]),
  profile("塞尚", "现代主义", "后印象派结构", "把自然形体转化为结构关系，被视为现代绘画的重要源头。", [art("圣维克多山", "后印象派山景", "约1904-1906年", "多馆有藏", filePath("Mont Sainte-Victoire with Large Pine, Paul Cézanne.jpg"))], ["影响毕加索", "现代主义源头"]),
  profile("毕加索", "现代主义", "立体主义", "与布拉克共同发展立体主义，拆解单点透视和传统空间。", [art("格尔尼卡", "现代主义政治绘画", "1937年", "索菲亚王后国家艺术中心博物馆，马德里", filePath("Guernica.jpg"))], ["受塞尚影响", "立体主义"]),
  profile("沃霍尔", "当代", "波普艺术", "把明星、商品和复制机制转化为艺术主题。", [art("玛丽莲双联画", "波普艺术", "1962年", "泰特现代美术馆，伦敦", filePath("Andy Warhol Marilyn Diptych.jpg"))], ["消费文化", "影响当代图像艺术"]),
];

const networkNodes = [
  ["顾恺之", 9, 16], ["阎立本", 18, 22], ["吴道子", 27, 18],
  ["敦煌莫高窟壁画", 35, 12],
  ["范宽", 12, 45], ["郭熙", 23, 48], ["赵孟頫", 34, 56], ["黄公望", 45, 52],
  ["沈周", 55, 63], ["文徵明", 66, 66], ["石涛", 76, 59], ["齐白石", 88, 68], ["徐悲鸿", 82, 82], ["近现代中国美术", 92, 86],
  ["达·芬奇", 16, 78], ["米开朗基罗", 28, 84], ["拉斐尔", 39, 80],
  ["卡拉瓦乔", 53, 82], ["伦勃朗", 66, 84], ["莫奈", 74, 34], ["梵高", 86, 30], ["塞尚", 63, 28], ["毕加索", 50, 34], ["沃霍尔", 41, 17],
].map(([name, x, y]) => ({ name, x, y }));

const networkEdges = [
  ["顾恺之", "阎立本", "人物画传统"], ["吴道子", "敦煌莫高窟壁画", "宗教壁画影响"],
  ["范宽", "郭熙", "北宋山水范式"], ["赵孟頫", "黄公望", "文人画影响"],
  ["沈周", "文徵明", "师生/吴门"], ["石涛", "齐白石", "个性笔墨启发"], ["徐悲鸿", "近现代中国美术", "学院改革"],
  ["达·芬奇", "拉斐尔", "构图与明暗影响"], ["米开朗基罗", "拉斐尔", "人体与宏大构图影响"],
  ["卡拉瓦乔", "伦勃朗", "明暗法影响"], ["莫奈", "梵高", "色彩与现代观看影响"],
  ["塞尚", "毕加索", "结构影响"], ["毕加索", "沃霍尔", "现代到当代图像转向"],
  ["齐白石", "徐悲鸿", "现代中国画讨论"], ["莫奈", "塞尚", "印象派到后印象派"],
];

function profile(name, era, field, bio, works, tags) {
  return { name, era, field, bio, works, tags };
}

function nodeInfo(name) {
  const artist = artistProfiles.find((item) => item.name === name);
  const era = eras.find((item) => item.period === name || item.artists.includes(name));
  return {
    name,
    group: era?.region || (artist?.era === "当代" || artist?.era === "现代主义" || artist?.era === "文艺复兴" || artist?.era === "巴洛克" ? "world" : "china"),
    era: artist?.era || era?.period || "艺术史节点",
    field: artist?.field || era?.title || "艺术线索",
    bio: artist?.bio || era?.context || "这个节点用于连接艺术形式、人物和时代之间的影响关系。",
    work: artist?.works?.[0] || era?.artworks?.[0] || null,
  };
}

const state = {
  view: "all",
  period: "all",
  query: "",
  activeNetworkNode: "",
  networkFilter: "all",
};

const cardsGrid = document.querySelector("#cardsGrid");
const comparePanel = document.querySelector("#comparePanel");
const compareGrid = document.querySelector("#compareGrid");
const artistsPanel = document.querySelector("#artistsPanel");
const artistsGrid = document.querySelector("#artistsGrid");
const networkPanel = document.querySelector("#networkPanel");
const networkCanvas = document.querySelector("#networkCanvas");
const timelineNav = document.querySelector("#timelineNav");
const searchInput = document.querySelector("#searchInput");
const periodSelect = document.querySelector("#periodSelect");
const resetButton = document.querySelector("#resetButton");
const imageDialog = document.querySelector("#imageDialog");
const dialogImage = document.querySelector("#dialogImage");
const dialogTitle = document.querySelector("#dialogTitle");
const dialogMeta = document.querySelector("#dialogMeta");
const dialogFacts = document.querySelector("#dialogFacts");

function regionLabel(region) {
  return region === "china" ? "中国" : "世界";
}

function artworksForEra(era) {
  return [...era.artworks, ...(extraArtworks[era.period] || [])];
}

function matchesEra(era) {
  const viewMatch =
    state.view === "all" ||
    state.view === "compare" ||
    state.view === "artists" ||
    state.view === "network" ||
    era.region === state.view;
  const periodMatch = state.period === "all" || era.period === state.period;
  const haystack = [
    era.period,
    era.years,
    era.title,
    era.geography,
    era.history,
    era.artRelation,
    era.product,
    era.context,
    era.movement,
    era.legacy,
    era.relations,
    ...era.artists,
    ...artworksForEra(era).flatMap((item) => [
      item.title,
      item.meta,
      item.date,
      item.location,
    ]),
  ]
    .join(" ")
    .toLowerCase();
  const queryMatch = !state.query || haystack.includes(state.query.toLowerCase());
  return viewMatch && periodMatch && queryMatch;
}

function renderStats() {
  const visible = eras.filter((era) => ["all", "compare", "artists", "network"].includes(state.view) || era.region === state.view);
  document.querySelector("#periodCount").textContent = visible.length;
  document.querySelector("#artistCount").textContent = new Set(visible.flatMap((era) => era.artists)).size;
  document.querySelector("#movementCount").textContent = new Set(visible.flatMap((era) => era.product.split("、"))).size;
}

function renderPeriodOptions() {
  const periods = eras.map((era) => era.period);
  for (const period of periods) {
    const option = document.createElement("option");
    option.value = period;
    option.textContent = period;
    periodSelect.append(option);
  }
}

function renderTimeline() {
  timelineNav.replaceChildren();
  for (const era of eras) {
    const button = document.createElement("button");
    button.className = `timeline-item${state.period === era.period ? " active" : ""}`;
    button.type = "button";
    button.innerHTML = `<strong>${era.period}</strong><span>${era.years} · ${regionLabel(era.region)}</span>`;
    button.addEventListener("click", () => {
      state.period = state.period === era.period ? "all" : era.period;
      periodSelect.value = state.period;
      render();
    });
    timelineNav.append(button);
  }
}

function fallbackSvg(artwork) {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">
      <defs>
        <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="#efe2cc"/>
          <stop offset="0.55" stop-color="#d8cdbb"/>
          <stop offset="1" stop-color="#9f3f2f"/>
        </linearGradient>
      </defs>
      <rect width="800" height="600" fill="url(#g)"/>
      <circle cx="640" cy="120" r="82" fill="#2f756c" opacity="0.22"/>
      <path d="M90 430 C190 280 300 390 410 255 C500 145 620 270 720 165" fill="none" stroke="#23201c" stroke-width="18" opacity="0.28"/>
      <text x="56" y="500" font-family="Arial, sans-serif" font-size="40" font-weight="700" fill="#23201c">${artwork.title}</text>
      <text x="58" y="546" font-family="Arial, sans-serif" font-size="24" fill="#443d34">${artwork.date}</text>
    </svg>`;
}

function renderArtwork(artwork) {
  const card = document.createElement("div");
  card.className = "art-card";

  const figure = document.createElement("figure");
  const preview = document.createElement("button");
  preview.className = "art-preview";
  preview.type = "button";
  preview.setAttribute("aria-label", `放大查看${artwork.title}`);
  const image = document.createElement("img");
  image.className = "art-image";
  image.alt = artwork.title;
  image.loading = "lazy";
  const useFallback = () => {
    if (image.dataset.fallback === "true") return;
    image.dataset.fallback = "true";
    image.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(fallbackSvg(artwork))}`;
    image.classList.add("is-missing");
    image.alt = `${artwork.title} 图像占位`;
  };
  image.addEventListener("error", useFallback);
  window.setTimeout(() => {
    if (!image.complete) useFallback();
  }, 2400);
  image.src = artwork.image;
  preview.addEventListener("click", () => openImageDialog(artwork, image.src));
  preview.append(image);

  const caption = document.createElement("figcaption");
  caption.innerHTML = `
    <strong>${artwork.title}</strong>
    <span>${artwork.meta}</span>
    <dl class="art-facts">
      <div><dt>创作年代</dt><dd>${artwork.date}</dd></div>
      <div><dt>现收藏地</dt><dd>${artwork.location}</dd></div>
    </dl>
  `;
  figure.append(preview, caption);
  card.append(figure);
  return card;
}

function openImageDialog(artwork, imageSrc = artwork.image) {
  dialogImage.src = imageSrc;
  dialogImage.alt = artwork.title;
  dialogTitle.textContent = artwork.title;
  dialogMeta.textContent = artwork.meta;
  dialogFacts.textContent = `${artwork.date} · ${artwork.location}`;
  imageDialog.showModal();
}

function makeInfoBlock(title, text) {
  const block = document.createElement("div");
  block.innerHTML = `<h3>${title}</h3><p>${text}</p>`;
  return block;
}

function renderEraCard(era) {
  const template = document.querySelector("#eraTemplate");
  const card = template.content.firstElementChild.cloneNode(true);
  card.dataset.region = era.region;
  card.querySelector(".era-kicker").textContent = `${era.period} · ${era.years}`;
  card.querySelector("h2").textContent = era.title;
  card.querySelector(".region-pill").textContent = regionLabel(era.region);
  card.querySelector(".region-pill").classList.add(`region-${era.region}`);
  card.querySelector(".context").textContent = era.context;

  card.querySelector(".relation-grid").replaceChildren(
    makeInfoBlock("地理范围", era.geography),
    makeInfoBlock("历史动力", era.history),
    makeInfoBlock("典型产物", era.product),
    makeInfoBlock("艺术与历史关系", era.artRelation),
  );

  card.querySelector(".info-columns").replaceChildren(
    makeInfoBlock("风格特点", era.movement),
    makeInfoBlock("承上启下", era.legacy),
  );

  const forms = artFormDetails[era.period] || era.product.split("、").map((name) => [name, "这一形式是该时期艺术发展的关键线索。"]);
  card.querySelector(".forms-list").replaceChildren(
    ...forms.map(([name, detail]) => {
      const item = document.createElement("article");
      item.className = "form-card";
      item.innerHTML = `<strong>${name}</strong><p>${detail}</p>`;
      return item;
    }),
  );

  card.querySelector(".artwork-strip").replaceChildren(...artworksForEra(era).map(renderArtwork));

  const peopleList = card.querySelector(".people-list");
  const chips = era.artists.map((artistName) => {
    const chip = document.createElement("span");
    chip.className = "person-chip";
    chip.textContent = artistName;
    return chip;
  });
  const relation = document.createElement("span");
  relation.className = "person-chip relation-chip";
  relation.textContent = era.relations;
  peopleList.replaceChildren(...chips, relation);
  return card;
}

function renderCards() {
  cardsGrid.hidden = state.view === "compare" || state.view === "artists" || state.view === "network";
  if (cardsGrid.hidden) {
    cardsGrid.replaceChildren();
    return;
  }
  const visible = eras.filter(matchesEra);
  cardsGrid.replaceChildren();
  if (!visible.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "没有找到匹配内容，可以换一个关键词或重置筛选。";
    cardsGrid.append(empty);
    return;
  }
  cardsGrid.append(...visible.map(renderEraCard));
}

function renderCompare() {
  comparePanel.hidden = state.view !== "compare";
  compareGrid.replaceChildren();
  if (comparePanel.hidden) return;

  const heading = document.createElement("div");
  heading.className = "axis-head";
  heading.innerHTML = "<strong>中国艺术线</strong><span>时间轴</span><strong>世界艺术线</strong>";
  compareGrid.append(heading);

  compareRows.forEach((row, index) => {
    const item = document.createElement("article");
    item.className = "axis-row";
    item.style.setProperty("--row-delay", `${index * 45}ms`);
    item.innerHTML = `
      <div class="axis-card china-side">${compareItem(row.time, row.china).innerHTML}</div>
      <div class="axis-marker">
        <span>${row.time}</span>
        <button type="button" aria-label="展开${row.time}中外对照">对照</button>
      </div>
      <div class="axis-card world-side">${compareItem(row.time, row.world).innerHTML}</div>
      <p class="axis-bridge">${row.bridge}</p>
    `;
    item.querySelector(".axis-marker button").addEventListener("click", () => {
      item.classList.toggle("expanded");
    });
    compareGrid.append(item);
  });
}

function compareItem(time, text) {
  const item = document.createElement("article");
  item.className = "parallel-item";
  item.innerHTML = `<strong>${time}</strong><p>${text}</p>`;
  return item;
}

function renderArtists() {
  artistsPanel.hidden = state.view !== "artists";
  artistsGrid.replaceChildren();
  if (artistsPanel.hidden) return;
  const query = state.query.toLowerCase();
  const visible = artistProfiles.filter((artist) => {
    const haystack = [
      artist.name,
      artist.era,
      artist.field,
      artist.bio,
      ...artist.tags,
      ...artist.works.flatMap((work) => [work.title, work.meta, work.date, work.location]),
    ].join(" ").toLowerCase();
    return !query || haystack.includes(query);
  });
  artistsGrid.append(...visible.map(renderArtistCard));
}

function renderArtistCard(artist) {
  const card = document.createElement("article");
  card.className = "artist-card";
  const works = artist.works.map((work, index) => `
    <button class="artist-work" type="button" data-work-index="${index}">
      <img src="${work.image}" alt="${work.title}" loading="lazy" />
      <div>
        <strong>${work.title}</strong>
        <span>${work.meta}</span>
        <small>${work.date} · ${work.location}</small>
      </div>
    </button>
  `).join("");
  const tags = artist.tags.map((tag) => `<span>${tag}</span>`).join("");
  card.innerHTML = `
    <div class="artist-head">
      <div>
        <p>${artist.era} · ${artist.field}</p>
        <h3>${artist.name}</h3>
      </div>
    </div>
    <p class="artist-bio">${artist.bio}</p>
    <div class="artist-tags">${tags}</div>
    <div class="artist-works">${works}</div>
  `;
  card.querySelectorAll("img").forEach((image) => {
    image.addEventListener("error", () => {
      image.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(fallbackSvg({ title: image.alt, date: "经典作品" }))}`;
    });
  });
  card.querySelectorAll(".artist-work").forEach((button) => {
    button.addEventListener("click", () => {
      openImageDialog(artist.works[Number(button.dataset.workIndex)], button.querySelector("img").src);
    });
  });
  return card;
}

function renderNetwork() {
  networkPanel.hidden = state.view !== "network";
  networkCanvas.replaceChildren();
  if (networkPanel.hidden) return;

  const filteredNodes = networkNodes.filter((node) => state.networkFilter === "all" || nodeInfo(node.name).group === state.networkFilter);
  const visibleNames = new Set(filteredNodes.map((node) => node.name));
  const visibleEdges = networkEdges.filter(([from, to]) => visibleNames.has(from) && visibleNames.has(to));
  if (!state.activeNetworkNode || !visibleNames.has(state.activeNetworkNode)) {
    state.activeNetworkNode = filteredNodes[0]?.name || "";
  }
  const activeName = state.activeNetworkNode;
  const activeEdges = visibleEdges.filter(([from, to]) => from === activeName || to === activeName);
  const relatedNames = new Set(activeEdges.flatMap(([from, to]) => [from, to]));

  const controls = document.createElement("div");
  controls.className = "network-controls";
  [
    ["all", "全部"],
    ["china", "中国线"],
    ["world", "世界线"],
  ].forEach(([value, label]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = state.networkFilter === value ? "active" : "";
    button.textContent = label;
    button.addEventListener("click", () => {
      state.networkFilter = value;
      state.activeNetworkNode = "";
      renderNetwork();
    });
    controls.append(button);
  });

  const graph = document.createElement("div");
  graph.className = "network-graph";
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 100 100");
  svg.setAttribute("class", "network-svg");
  const nodeMap = new Map(filteredNodes.map((node) => [node.name, node]));

  for (const [from, to, label] of visibleEdges) {
    const a = nodeMap.get(from);
    const b = nodeMap.get(to);
    if (!a || !b) continue;
    const isActive = from === activeName || to === activeName;
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", a.x);
    line.setAttribute("y1", a.y);
    line.setAttribute("x2", b.x);
    line.setAttribute("y2", b.y);
    line.setAttribute("class", `network-line${isActive ? " active" : ""}`);
    svg.append(line);

    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", (a.x + b.x) / 2);
    text.setAttribute("y", (a.y + b.y) / 2 - 1);
    text.setAttribute("class", `network-label${isActive ? " active" : ""}`);
    text.textContent = label;
    svg.append(text);
  }

  for (const node of filteredNodes) {
    const info = nodeInfo(node.name);
    const isActive = node.name === activeName;
    const isRelated = relatedNames.has(node.name);
    const group = document.createElementNS("http://www.w3.org/2000/svg", "g");
    group.setAttribute("class", `network-node ${info.group}${isActive ? " active" : ""}${isRelated ? " related" : ""}`);
    group.setAttribute("tabindex", "0");
    group.setAttribute("role", "button");
    group.setAttribute("aria-label", `查看${node.name}关系`);
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", node.x);
    circle.setAttribute("cy", node.y);
    circle.setAttribute("r", isActive ? 3.2 : 2.35);
    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", node.x);
    text.setAttribute("y", node.y - 3.4);
    text.textContent = node.name;
    const selectNode = () => {
      state.activeNetworkNode = node.name;
      renderNetwork();
    };
    group.addEventListener("click", selectNode);
    group.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        selectNode();
      }
    });
    group.append(circle, text);
    svg.append(group);
  }
  graph.append(svg);

  const detail = document.createElement("aside");
  detail.className = "network-detail";
  const activeInfo = nodeInfo(activeName);
  const workMarkup = activeInfo.work
    ? `<button class="network-work" type="button"><img src="${activeInfo.work.image}" alt="${activeInfo.work.title}" /><span>${activeInfo.work.title}</span></button>`
    : "";
  detail.innerHTML = `
    <p>${activeInfo.era} · ${activeInfo.field}</p>
    <h3>${activeInfo.name}</h3>
    <p>${activeInfo.bio}</p>
    ${workMarkup}
    <h4>相关关系</h4>
  `;
  const relationList = document.createElement("div");
  relationList.className = "network-list";
  relationList.innerHTML = (activeEdges.length ? activeEdges : visibleEdges)
    .map(([from, to, label]) => `<button type="button" data-from="${from}" data-to="${to}"><strong>${from}</strong><span>${label}</span><strong>${to}</strong></button>`)
    .join("");
  relationList.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeNetworkNode = button.dataset.to === activeName ? button.dataset.from : button.dataset.to;
      renderNetwork();
    });
  });
  detail.append(relationList);
  const workButton = detail.querySelector(".network-work");
  if (workButton && activeInfo.work) {
    workButton.addEventListener("click", () => openImageDialog(activeInfo.work));
  }

  graph.append(detail);
  networkCanvas.append(controls, graph);
}

function closeImageDialog() {
  imageDialog.close();
  dialogImage.removeAttribute("src");
}

imageDialog.querySelector(".dialog-close").addEventListener("click", closeImageDialog);
imageDialog.addEventListener("click", (event) => {
  if (event.target === imageDialog) closeImageDialog();
});

function renderTabs() {
  document.querySelectorAll(".tab-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.view === state.view);
  });
}

function render() {
  renderTabs();
  renderStats();
  renderTimeline();
  renderCards();
  renderCompare();
  renderArtists();
  renderNetwork();
}

document.querySelectorAll(".tab-button").forEach((button) => {
  button.addEventListener("click", () => {
    state.view = button.dataset.view;
    render();
  });
});

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value.trim();
  render();
});

periodSelect.addEventListener("change", (event) => {
  state.period = event.target.value;
  render();
});

resetButton.addEventListener("click", () => {
  state.view = "all";
  state.period = "all";
  state.query = "";
  searchInput.value = "";
  periodSelect.value = "all";
  render();
});

renderPeriodOptions();
render();
