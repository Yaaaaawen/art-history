const filePath = (name) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(name)}?width=900`;

const eras = [
  {
    id: "prehistoric-china",
    period: "石器时代",
    years: "约前7000-前2000",
    region: "china",
    title: "新石器时代中国",
    context: "农业聚落形成，彩陶、玉器和早期礼仪器物成为审美与秩序的载体，艺术常与祭祀、族群身份和自然崇拜相连。",
    movement: "彩陶文化、玉礼器传统。线纹、鱼纹、人面纹与几何纹强调秩序感，良渚玉琮、玉璧则把权力和宇宙观凝结为器物。",
    legacy: "奠定中国艺术中“器以载礼”的传统，也为青铜礼器、纹样系统和后来的象征性造型提供源头。",
    artists: ["半坡彩陶工匠群", "良渚玉作工匠", "红山文化玉器工匠"],
    relations: "此期没有现代意义上的画家谱系，重点是工匠共同体和地域文化之间的传承。",
    artworks: [
      {
        title: "人面鱼纹彩陶盆",
        meta: "仰韶文化，彩陶",
        image: filePath("Banpo painted pottery basin with human face and fish design.jpg"),
      },
      {
        title: "良渚玉琮",
        meta: "良渚文化，玉礼器",
        image: filePath("Liangzhu jade cong.jpg"),
      },
      {
        title: "红山玉龙",
        meta: "红山文化，玉器",
        image: filePath("Jade dragon Hongshan Culture.jpg"),
      },
    ],
  },
  {
    id: "prehistoric-world",
    period: "石器时代",
    years: "约前40000-前3000",
    region: "world",
    title: "史前欧洲与西亚",
    context: "狩猎采集社会到早期农业社会逐步转变，洞穴壁画、女性小雕像和巨石建筑反映出仪式、记忆与自然力量。",
    movement: "旧石器洞穴艺术与新石器巨石文化。动物形象具有强烈动态，材料从岩壁、骨角扩展到石阵和陶器。",
    legacy: "把图像、空间和仪式联系起来，为埃及、两河流域和爱琴海文明中的纪念性艺术打开道路。",
    artists: ["拉斯科洞穴画作者群", "威伦道夫小像工匠", "巨石阵建造者"],
    relations: "以无名工匠和仪式社群为核心，图像经验通过迁徙、狩猎路线和聚落交流扩散。",
    artworks: [
      {
        title: "拉斯科洞穴壁画",
        meta: "旧石器时代，法国",
        image: filePath("Lascaux painting.jpg"),
      },
      {
        title: "威伦道夫的维纳斯",
        meta: "旧石器时代，小型雕像",
        image: filePath("Venus of Willendorf frontview retouched 2.jpg"),
      },
      {
        title: "巨石阵",
        meta: "新石器至青铜时代，英国",
        image: filePath("Stonehenge2007 07 30.jpg"),
      },
    ],
  },
  {
    id: "bronze-china",
    period: "青铜与早期帝国",
    years: "前1600-220",
    region: "china",
    title: "商周秦汉",
    context: "王权、宗法礼制和统一帝国先后形成，艺术从青铜礼器扩展到陵墓雕塑、画像石、帛画和建筑装饰。",
    movement: "青铜礼器、秦汉陵墓艺术、画像石画像砖。饕餮纹、云气纹、神仙图像体现礼制、权力与宇宙想象。",
    legacy: "从礼器艺术走向宏大的帝国视觉系统，影响后世墓葬图像、宫殿制度和人物叙事画。",
    artists: ["商周青铜工匠", "秦陵陶俑工匠", "马王堆帛画作者"],
    relations: "青铜铸造体系、宫廷工匠和陵墓工程共同构成国家级艺术生产网络。",
    artworks: [
      {
        title: "后母戊鼎",
        meta: "商代，青铜礼器",
        image: filePath("Houmuwu ding, National Museum of China.jpg"),
      },
      {
        title: "秦始皇陵兵马俑",
        meta: "秦代，陶塑",
        image: filePath("Terracotta Army, View of Pit 1.jpg"),
      },
      {
        title: "马王堆T形帛画",
        meta: "西汉，帛画",
        image: filePath("Mawangdui silk banner from tomb no1.jpg"),
      },
    ],
  },
  {
    id: "ancient-world",
    period: "青铜与古典文明",
    years: "前3000-476",
    region: "world",
    title: "埃及、希腊与罗马",
    context: "城市、神庙、城邦和帝国相继兴起，艺术服务于神权、公共政治、纪念性建筑和人体理想。",
    movement: "埃及正面律、希腊古典主义、希腊化写实、罗马肖像与建筑工程。风格从永恒秩序转向理想比例与现实权力。",
    legacy: "古典柱式、人体比例、拱券和纪念碑传统成为欧洲艺术反复回望的源头。",
    artists: ["菲狄亚斯", "波利克里托斯", "罗马肖像雕刻家"],
    relations: "希腊雕塑家确立比例范式，罗马通过复制、收藏和公共建筑把古典语言制度化。",
    artworks: [
      {
        title: "纳美尔调色板",
        meta: "古埃及，王权图像",
        image: filePath("Narmer Palette.jpg"),
      },
      {
        title: "帕特农神庙",
        meta: "古希腊，雅典",
        image: filePath("The Parthenon in Athens.jpg"),
      },
      {
        title: "奥古斯都像",
        meta: "古罗马，政治肖像",
        image: filePath("Statue-Augustus.jpg"),
      },
    ],
  },
  {
    id: "medieval-china",
    period: "中古转型",
    years: "220-960",
    region: "china",
    title: "魏晋南北朝至隋唐",
    context: "门阀士族、佛教东传和大一统盛世交替出现，人物画、佛教石窟、书法和山水意识走向成熟。",
    movement: "佛教艺术、人物画、初期山水画、唐代宫廷绘画。线描、设色、体态和宗教空间共同塑造东方审美高峰。",
    legacy: "把外来佛教图像转化为中国式视觉语言，并让文人精神、书画同源和山水观念成为后世核心。",
    artists: ["顾恺之", "阎立本", "吴道子", "张萱"],
    relations: "顾恺之重传神，阎立本服务宫廷叙事，吴道子以线条推动宗教壁画，张萱展现盛唐人物风尚。",
    artworks: [
      {
        title: "洛神赋图",
        meta: "传顾恺之，人物长卷",
        image: filePath("Gu Kaizhi - Nymph of the Luo River (detail).jpg"),
      },
      {
        title: "步辇图",
        meta: "传阎立本，唐代人物画",
        image: filePath("Yan Liben - Emperor Taizong Receiving the Tibetan Envoy.jpg"),
      },
      {
        title: "敦煌莫高窟壁画",
        meta: "北朝至唐，佛教壁画",
        image: filePath("Mogao Caves, Dunhuang, China.jpg"),
      },
    ],
  },
  {
    id: "medieval-world",
    period: "中古转型",
    years: "476-1400",
    region: "world",
    title: "拜占庭、伊斯兰与哥特",
    context: "西罗马之后，基督教图像、伊斯兰装饰体系和欧洲城市教堂共同塑造中世纪视觉世界。",
    movement: "拜占庭镶嵌画、伊斯兰几何纹样、罗曼式与哥特式。风格强调神圣光辉、象征秩序和垂直向上的建筑空间。",
    legacy: "为文艺复兴提供宗教主题、手抄本传统和建筑技术，也让装饰与抽象秩序成为世界艺术的重要脉络。",
    artists: ["拜占庭镶嵌工匠", "伊斯兰书法家", "乔托"],
    relations: "乔托从中世纪图像程式走向空间和情感，为意大利早期文艺复兴开路。",
    artworks: [
      {
        title: "查士丁尼与随从",
        meta: "圣维塔莱教堂镶嵌画",
        image: filePath("Meister von San Vitale in Ravenna 004.jpg"),
      },
      {
        title: "沙特尔大教堂",
        meta: "法国，哥特式建筑",
        image: filePath("Chartres Cathedral West Facade.jpg"),
      },
      {
        title: "哀悼基督",
        meta: "乔托，湿壁画",
        image: filePath("Giotto - Scrovegni - -36- - Lamentation (The Mourning of Christ) adj.jpg"),
      },
    ],
  },
  {
    id: "song-yuan",
    period: "文人画成熟",
    years: "960-1368",
    region: "china",
    title: "宋元",
    context: "城市经济、理学思想、士人阶层与宫廷画院并行发展，山水、花鸟和文人画成为中国绘画的主干。",
    movement: "北宋全景山水、南宋边角构图、元代文人画。重视笔墨、气韵、诗书画合一，以及个人心境。",
    legacy: "从再现山川转向表达心性，确立后世中国画以笔墨修养和文人身份为中心的标准。",
    artists: ["范宽", "郭熙", "马远", "黄公望", "赵孟頫"],
    relations: "范宽建立雄浑山水范式，郭熙理论化山水空间；赵孟頫倡古意，黄公望把元代文人山水推向典范。",
    artworks: [
      {
        title: "溪山行旅图",
        meta: "范宽，北宋山水",
        image: filePath("Travelers Among Mountains and Streams, Fan Kuan, National Palace Museum.jpg"),
      },
      {
        title: "早春图",
        meta: "郭熙，北宋山水",
        image: filePath("Guo Xi - Early Spring.jpg"),
      },
      {
        title: "富春山居图",
        meta: "黄公望，元代文人画",
        image: filePath("Dwelling in the Fuchun Mountains.jpg"),
      },
    ],
  },
  {
    id: "renaissance",
    period: "早期近代",
    years: "1400-1700",
    region: "world",
    title: "文艺复兴、矫饰主义与巴洛克",
    context: "城市共和国、教会赞助、科学观察和海外扩张改变了欧洲艺术，透视法、人体解剖和戏剧性光影成为关键。",
    movement: "文艺复兴强调人文主义与理性空间；巴洛克强调运动、光影、情感和权力展示。",
    legacy: "确立西方学院传统，也为后来的古典主义、现实主义和现代主义的反叛提供参照物。",
    artists: ["达·芬奇", "米开朗基罗", "拉斐尔", "卡拉瓦乔", "伦勃朗"],
    relations: "达·芬奇、米开朗基罗、拉斐尔构成盛期文艺复兴高峰；卡拉瓦乔的强烈明暗影响伦勃朗和欧洲巴洛克。",
    artworks: [
      {
        title: "蒙娜丽莎",
        meta: "达·芬奇，文艺复兴",
        image: filePath("Mona Lisa, by Leonardo da Vinci, from C2RMF retouched.jpg"),
      },
      {
        title: "雅典学院",
        meta: "拉斐尔，湿壁画",
        image: filePath("The School of Athens by Raffaello Sanzio da Urbino.jpg"),
      },
      {
        title: "圣马太蒙召",
        meta: "卡拉瓦乔，巴洛克",
        image: filePath("The Calling of Saint Matthew-Caravaggo (1599-1600).jpg"),
      },
    ],
  },
  {
    id: "ming-qing",
    period: "早期近代",
    years: "1368-1911",
    region: "china",
    title: "明清",
    context: "商业城市、出版文化、宫廷收藏和士人网络繁荣，复古、个性表达与中西交流同时展开。",
    movement: "吴门画派、董其昌南北宗论、四王正统、扬州八怪、海上画派。风格在复古笔墨与市民趣味之间摆动。",
    legacy: "把文人画理论推向系统化，也在晚清城市文化中孕育更开放的现代转型。",
    artists: ["沈周", "文徵明", "董其昌", "石涛", "郑板桥", "任伯年"],
    relations: "吴门画派承接元代文人画；董其昌重构正统谱系；石涛与扬州八怪强调个性，任伯年连接传统笔墨与近代都市。",
    artworks: [
      {
        title: "庐山高图",
        meta: "沈周，吴门画派",
        image: filePath("Shen Zhou - Lofty Mount Lu.jpg"),
      },
      {
        title: "搜尽奇峰打草稿",
        meta: "石涛，清代个性派",
        image: filePath("Shitao - Ten Thousand Ugly Inkblots.jpg"),
      },
      {
        title: "墨竹图",
        meta: "郑板桥，扬州八怪",
        image: filePath("Zheng Xie Bamboo.jpg"),
      },
    ],
  },
  {
    id: "modern-world",
    period: "现代转向",
    years: "1700-1945",
    region: "world",
    title: "启蒙、印象派与现代主义",
    context: "工业革命、城市生活、摄影、殖民扩张和两次世界大战改写艺术目标，艺术从再现现实走向表现感知与观念。",
    movement: "新古典主义、浪漫主义、现实主义、印象派、后印象派、立体主义、表现主义、超现实主义。",
    legacy: "现代主义不断拆解学院规则，把色彩、形式、材料、潜意识和社会批判变成艺术核心。",
    artists: ["大卫", "德拉克洛瓦", "莫奈", "梵高", "塞尚", "毕加索", "达利"],
    relations: "印象派关注光色瞬间，塞尚把自然转为结构，毕加索发展立体主义；梵高和表现主义强化主观情绪。",
    artworks: [
      {
        title: "自由引导人民",
        meta: "德拉克洛瓦，浪漫主义",
        image: filePath("Eugène Delacroix - La liberté guidant le peuple.jpg"),
      },
      {
        title: "日出·印象",
        meta: "莫奈，印象派",
        image: filePath("Claude Monet, Impression, soleil levant.jpg"),
      },
      {
        title: "星月夜",
        meta: "梵高，后印象派",
        image: filePath("Van Gogh - Starry Night - Google Art Project.jpg"),
      },
    ],
  },
  {
    id: "modern-china",
    period: "现代转向",
    years: "1912-至今",
    region: "china",
    title: "近现代中国",
    context: "新式教育、留学、革命、城市出版和全球展览制度推动中国艺术重新定义传统与现代的关系。",
    movement: "岭南画派、新国画、木刻运动、油画民族化、当代水墨与观念艺术。风格在写实、笔墨、现代形式和社会议题之间展开。",
    legacy: "把中国画从古典文人系统带入现代公共文化，也让中西媒介、学院教育和当代观念持续交叉。",
    artists: ["高剑父", "徐悲鸿", "林风眠", "齐白石", "潘天寿", "吴冠中", "蔡国强"],
    relations: "徐悲鸿强调写实改造中国画，林风眠融合中西形式，齐白石以民间生命力更新笔墨，吴冠中连接形式美与现代审美。",
    artworks: [
      {
        title: "群马",
        meta: "徐悲鸿，现代水墨",
        image: filePath("Xu Beihong Galloping Horse.jpg"),
      },
      {
        title: "虾",
        meta: "齐白石，写意花鸟",
        image: filePath("Qi Baishi Shrimp.jpg"),
      },
      {
        title: "江南水乡",
        meta: "吴冠中，现代形式探索",
        image: filePath("Wu Guanzhong Jiangnan.jpg"),
      },
    ],
  },
  {
    id: "contemporary-world",
    period: "当代",
    years: "1945-至今",
    region: "world",
    title: "战后与全球当代",
    context: "冷战、消费社会、媒介技术、全球化和身份政治让艺术从画布扩展到装置、影像、行为、网络和公共空间。",
    movement: "抽象表现主义、波普艺术、极简主义、观念艺术、行为艺术、数字艺术。艺术的重点从作品对象扩展到过程、语境和观众参与。",
    legacy: "打破单一中心的艺术史叙事，使不同地域、族群和媒介都能进入全球艺术讨论。",
    artists: ["波洛克", "罗斯科", "沃霍尔", "草间弥生", "白南准", "班克斯"],
    relations: "抽象表现主义把纽约推向中心，波普艺术回应大众消费，观念与新媒体艺术进一步改变作品边界。",
    artworks: [
      {
        title: "秋韵：第30号",
        meta: "波洛克，抽象表现主义",
        image: filePath("Pollock - Autumn Rhythm.jpg"),
      },
      {
        title: "玛丽莲双联画",
        meta: "沃霍尔，波普艺术",
        image: filePath("Andy Warhol Marilyn Diptych.jpg"),
      },
      {
        title: "无限镜屋",
        meta: "草间弥生，装置艺术",
        image: filePath("Yayoi Kusama Infinity Mirror Room.jpg"),
      },
    ],
  },
];

const compareRows = [
  {
    time: "史前",
    china: "仰韶、良渚等文化发展彩陶与玉礼器，艺术与聚落礼仪、自然崇拜结合。",
    world: "欧洲洞穴壁画、维纳斯小像和巨石建筑出现，图像与仪式空间开始成形。",
  },
  {
    time: "前1600-220",
    china: "商周青铜礼制到秦汉帝国陵墓艺术，器物和图像服务王权秩序。",
    world: "埃及、希腊、罗马发展神庙、人体雕塑和公共纪念碑，古典传统成熟。",
  },
  {
    time: "220-960",
    china: "佛教石窟、人物画、书法和山水意识兴起，唐代形成开放华丽的宫廷风格。",
    world: "欧洲进入中世纪，拜占庭、伊斯兰和早期基督教艺术强调神圣象征。",
  },
  {
    time: "960-1368",
    china: "宋元山水和文人画成熟，笔墨、气韵、诗书画合一成为核心标准。",
    world: "罗曼式、哥特式教堂发展，乔托等人开始探索空间、体积和情感。",
  },
  {
    time: "1400-1700",
    china: "明代吴门画派、董其昌理论和清初个性派展开传统内部的整理与突破。",
    world: "文艺复兴、巴洛克建立透视、人体、光影和戏剧性叙事的欧洲体系。",
  },
  {
    time: "1700-1945",
    china: "晚清到民国，中西交流、新式教育和现代城市推动艺术转型。",
    world: "新古典、浪漫、现实、印象、后印象和现代主义接连出现，学院传统被持续重写。",
  },
  {
    time: "1945-至今",
    china: "新中国美术、改革开放后的当代艺术和全球展览制度共同塑造多元格局。",
    world: "抽象表现主义、波普、观念、装置和数字艺术把艺术带入全球当代语境。",
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
    era.context,
    era.movement,
    era.legacy,
    era.relations,
    ...era.artists,
    ...era.artworks.flatMap((art) => [art.title, art.meta]),
  ]
    .join(" ")
    .toLowerCase();
  const queryMatch = !state.query || haystack.includes(state.query.toLowerCase());
  return viewMatch && periodMatch && queryMatch;
}

function renderStats() {
  const visible = eras.filter((era) => state.view === "all" || state.view === "compare" || era.region === state.view);
  document.querySelector("#periodCount").textContent = new Set(visible.map((era) => era.period)).size;
  document.querySelector("#artistCount").textContent = new Set(visible.flatMap((era) => era.artists)).size;
  document.querySelector("#movementCount").textContent = visible.length;
}

function renderPeriodOptions() {
  const periods = [...new Set(eras.map((era) => era.period))];
  for (const period of periods) {
    const option = document.createElement("option");
    option.value = period;
    option.textContent = period;
    periodSelect.append(option);
  }
}

function renderTimeline() {
  timelineNav.replaceChildren();
  const periods = [...new Set(eras.map((era) => era.period))].map((period) => ({
    period,
    years: eras
      .filter((era) => era.period === period)
      .map((era) => era.years)
      .join(" / "),
  }));
  for (const { period, years } of periods) {
    const button = document.createElement("button");
    button.className = `timeline-item${state.period === period ? " active" : ""}`;
    button.type = "button";
    button.innerHTML = `<strong>${period}</strong><span>${years}</span>`;
    button.addEventListener("click", () => {
      state.period = state.period === period ? "all" : period;
      periodSelect.value = state.period;
      render();
    });
    timelineNav.append(button);
  }
}

function renderArtwork(art) {
  const card = document.createElement("div");
  card.className = "art-card";

  const figure = document.createElement("figure");
  const image = document.createElement("img");
  image.className = "art-image";
  image.alt = art.title;
  image.loading = "lazy";
  const useFallback = () => {
    if (image.dataset.fallback === "true") return;
    image.dataset.fallback = "true";
    const svg = `
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
        <text x="56" y="515" font-family="Arial, sans-serif" font-size="44" font-weight="700" fill="#23201c">${art.title}</text>
        <text x="58" y="558" font-family="Arial, sans-serif" font-size="24" fill="#443d34">${art.meta}</text>
      </svg>`;
    image.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
    image.classList.add("is-missing");
    image.alt = `${art.title} 图像占位`;
  };
  image.addEventListener("error", useFallback);
  window.setTimeout(() => {
    if (!image.complete) useFallback();
  }, 2400);
  image.src = art.image;

  const caption = document.createElement("figcaption");
  caption.innerHTML = `<strong>${art.title}</strong><span>${art.meta}</span>`;
  figure.append(image, caption);
  card.append(figure);
  return card;
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
  card.querySelector(".movement").textContent = era.movement;
  card.querySelector(".legacy").textContent = era.legacy;

  const strip = card.querySelector(".artwork-strip");
  strip.replaceChildren(...era.artworks.map(renderArtwork));

  const peopleList = card.querySelector(".people-list");
  const chips = era.artists.map((artist) => {
    const chip = document.createElement("span");
    chip.className = "person-chip";
    chip.textContent = artist;
    return chip;
  });
  const relation = document.createElement("span");
  relation.className = "person-chip";
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
