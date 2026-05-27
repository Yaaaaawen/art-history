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

const compareRows = [
  {
    time: "前3000年前后",
    china: "新石器晚期玉礼器和聚落礼仪成熟，良渚等文化把权力和宇宙观放进玉器。",
    world: "埃及统一王权出现，尼罗河地理和来世观推动金字塔、陵墓和正面律。",
  },
  {
    time: "前1600-前200",
    china: "商周青铜礼制到战国乐器和铭文系统，艺术服务祖先祭祀与王权秩序。",
    world: "希腊城邦发展人体理想和神庙柱式，艺术以理性比例和公共生活为核心。",
  },
  {
    time: "前221-220",
    china: "秦汉帝国把军阵、墓葬、升仙图像和厚葬制度结合，强调生死连续。",
    world: "罗马把希腊形式转为帝国工程、肖像和公共纪念碑。",
  },
  {
    time: "330-900",
    china: "佛教经丝路进入中国，石窟造像和壁画在云冈、龙门、敦煌本土化。",
    world: "拜占庭以金底镶嵌、圣像和穹顶空间表现神圣秩序。",
  },
  {
    time: "1000-1400",
    china: "宋元山水从宇宙秩序转向文人心性，笔墨成为人格语言。",
    world: "西欧罗曼式和哥特式教堂发展，城市、行会和彩色玻璃塑造神学空间。",
  },
  {
    time: "1400-1750",
    china: "明清文人画在复古、收藏和城市市场中扩展，吴门、四王、扬州八怪并存。",
    world: "文艺复兴透视与人体理想之后，巴洛克用光影和运动回应宗教与王权。",
  },
  {
    time: "1750-1945",
    china: "晚清民国的新式教育、留学和城市出版推动中国美术现代转型。",
    world: "工业革命、摄影和战争推动印象派、后印象派、立体主义等现代主义裂变。",
  },
  {
    time: "1945-至今",
    china: "现代水墨、油画民族化和当代艺术进入全球展览网络。",
    world: "抽象表现主义、波普、观念和数字艺术让艺术从物件转向过程与语境。",
  },
];

const state = {
  view: "all",
  period: "all",
  query: "",
};

const cardsGrid = document.querySelector("#cardsGrid");
const comparePanel = document.querySelector("#comparePanel");
const compareGrid = document.querySelector("#compareGrid");
const timelineNav = document.querySelector("#timelineNav");
const searchInput = document.querySelector("#searchInput");
const periodSelect = document.querySelector("#periodSelect");
const resetButton = document.querySelector("#resetButton");

function regionLabel(region) {
  return region === "china" ? "中国" : "世界";
}

function matchesEra(era) {
  const viewMatch =
    state.view === "all" ||
    state.view === "compare" ||
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
    ...era.artworks.flatMap((item) => [
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
  const visible = eras.filter((era) => state.view === "all" || state.view === "compare" || era.region === state.view);
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

  const caption = document.createElement("figcaption");
  caption.innerHTML = `
    <strong>${artwork.title}</strong>
    <span>${artwork.meta}</span>
    <dl class="art-facts">
      <div><dt>创作年代</dt><dd>${artwork.date}</dd></div>
      <div><dt>现收藏地</dt><dd>${artwork.location}</dd></div>
    </dl>
  `;
  figure.append(image, caption);
  card.append(figure);
  return card;
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

  card.querySelector(".artwork-strip").replaceChildren(...era.artworks.map(renderArtwork));

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
  for (const row of compareRows) {
    const element = document.createElement("article");
    element.className = "compare-row";
    element.innerHTML = `
      <div class="compare-cell time">${row.time}</div>
      <div class="compare-cell"><strong>中国</strong><p>${row.china}</p></div>
      <div class="compare-cell"><strong>世界</strong><p>${row.world}</p></div>
    `;
    compareGrid.append(element);
  }
}

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
