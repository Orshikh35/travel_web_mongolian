import type { Lang } from "../i18n/config";

export type TourDetails = {
  description: string;
  itinerary: { title: string; desc: string }[];
  included: string[];
  excluded: string[];
  bring: string[];
  faq: { q: string; a: string }[];
};

// Images are shared by every language; index matches the itinerary day.
export const ITINERARY_IMAGES: Record<string, (string | undefined)[]> = {
  "khuvsgul-lake-adventure": [
    "/alexander-popovkin-9vqWj6abWBs-unsplash.jpg",
    "/alexander-popovkin-DVi4jg0Okgg-unsplash.jpg",
    "/lake.jpg",
    "/enkhtsetseg-natsagdorj-Gy8OWkR_jMY-unsplash.jpg",
  ],
};

export const TOUR_DETAILS: Record<string, Record<Lang, TourDetails>> = {
  "khuvsgul-lake-adventure": {
    en: {
      description:
        "Explore the pristine beauty of Khuvsgul Lake, known as the “Blue Pearl of Mongolia”. This 5-day adventure takes you through stunning landscapes, traditional nomadic culture, and crystal-clear waters.",
      itinerary: [
        {
          title: "Arrival in Ulaanbaatar",
          desc: "Arrive in Ulaanbaatar, meet your guide, and transfer to your hotel. City orientation and welcome dinner.",
        },
        {
          title: "Drive to Khuvsgul Lake",
          desc: "A scenic drive through northern Mongolia with stops in local villages. Arrive at the lakeside camp in the evening.",
        },
        {
          title: "Horse riding & boat trip",
          desc: "Morning horse ride along the shore, afternoon boat trip on the clear water, and an evening campfire with traditional songs.",
        },
        {
          title: "Visit Tsaatan reindeer herders",
          desc: "Meet the Tsaatan people and their reindeer and learn about their unique way of life. Farewell dinner at camp.",
        },
        {
          title: "Return to Ulaanbaatar",
          desc: "A slow morning by the lake, then drive back to Ulaanbaatar. Evening transfer to your hotel or the airport.",
        },
      ],
      included: [
        "All transportation (4WD vehicle)",
        "Professional English-speaking guide",
        "4 nights' accommodation (hotel + ger camp)",
        "All meals during the tour",
        "National park entrance fees",
        "Horse riding equipment",
        "Boat trip on Khuvsgul Lake",
      ],
      excluded: ["International flights", "Travel insurance", "Personal expenses", "Alcoholic drinks", "Tips for guide and driver"],
      bring: [
        "Warm layers (even in summer)",
        "Rain jacket",
        "Comfortable hiking boots",
        "Sunscreen and sunglasses",
        "Camera and spare batteries",
        "Personal medication",
        "Flashlight or headlamp",
      ],
      faq: [
        {
          q: "What is the best time to go?",
          a: "June to September has the best weather. July and August are the warmest but also the busiest.",
        },
        {
          q: "Is this tour suitable for children?",
          a: "Yes — children aged 8+ are welcome, and we can adjust the pace for families.",
        },
      ],
    },
    mn: {
      description:
        "“Монголын цэнхэр сувд” хэмээх Хөвсгөл нуурын онгон үзэсгэлэнг мэдрээрэй. 5 өдрийн энэ аялал таныг гайхамшигт байгаль, нүүдэлчдийн уламжлалт соёл, тунгалаг цэнгэг устай танилцуулна.",
      itinerary: [
        {
          title: "Улаанбаатарт ирэх",
          desc: "Улаанбаатарт ирж хөтөчтэйгээ уулзаад зочид буудалдаа байрлана. Хотын танилцуулга, угтах оройн зоог.",
        },
        {
          title: "Хөвсгөл рүү хөдлөх",
          desc: "Хойд Монголын үзэсгэлэнт замаар, орон нутгийн сууринуудаар дайрч явна. Орой нуурын эргийн баазад хүрнэ.",
        },
        {
          title: "Морин аялал, завиар зугаалах",
          desc: "Өглөө нуурын эргээр морь унаж, өдөр тунгалаг усан дээр завиар аялна. Орой гал тойрон уламжлалт дуу.",
        },
        {
          title: "Цаатан айлд зочлох",
          desc: "Цаатан ард түмэн, тэдний цаа бугатай танилцаж, өвөрмөц ахуй соёлыг нь мэдэрнэ. Баазад үдэлтийн оройн зоог.",
        },
        {
          title: "Улаанбаатар руу буцах",
          desc: "Өглөө нуурын дэргэд чөлөөт цаг өнгөрөөж, Улаанбаатар руу буцна. Орой зочид буудал эсвэл онгоцны буудал руу хүргэнэ.",
        },
      ],
      included: [
        "Бүх тээвэр (4WD машин)",
        "Мэргэжлийн хөтөч",
        "4 шөнийн байр (зочид буудал + гэр бааз)",
        "Аяллын үеийн бүх хоол",
        "Байгалийн цогцолборт газрын хураамж",
        "Морь унах хэрэгсэл",
        "Хөвсгөл нуурт завиар аялах",
      ],
      excluded: ["Олон улсын нислэг", "Аяллын даатгал", "Хувийн зардал", "Согтууруулах ундаа", "Хөтөч, жолоочийн шагнал"],
      bring: [
        "Дулаан хувцас (зун ч гэсэн)",
        "Борооны куртка",
        "Эвтэйхэн явган аяллын гутал",
        "Нарны тос, нарны шил",
        "Камер, нэмэлт батерей",
        "Хувийн эм",
        "Гар чийдэн",
      ],
      faq: [
        {
          q: "Хэзээ явах нь хамгийн тохиромжтой вэ?",
          a: "6–9 сард цаг агаар хамгийн сайхан. 7, 8 сар хамгийн дулаан ч хамгийн их хүнтэй байдаг.",
        },
        {
          q: "Хүүхэдтэй явахад тохиромжтой юу?",
          a: "Тийм — 8-аас дээш насны хүүхэд явах боломжтой бөгөөд гэр бүлд тохируулж хэмнэлийг өөрчилж болно.",
        },
      ],
    },
    ru: {
      description:
        "Откройте для себя нетронутую красоту озера Хубсугул — «Голубой жемчужины Монголии». За 5 дней вы увидите потрясающие пейзажи, познакомитесь с традиционной культурой кочевников и кристально чистой водой.",
      itinerary: [
        {
          title: "Прибытие в Улан-Батор",
          desc: "Встреча с гидом и трансфер в отель. Знакомство с городом и приветственный ужин.",
        },
        {
          title: "Дорога на Хубсугул",
          desc: "Живописная дорога через север Монголии с остановками в сёлах. Вечером — прибытие в лагерь на берегу озера.",
        },
        {
          title: "Конная прогулка и лодка",
          desc: "Утром — прогулка верхом вдоль берега, днём — на лодке по прозрачной воде, вечером — костёр и народные песни.",
        },
        {
          title: "В гостях у оленеводов-цаатанов",
          desc: "Знакомство с народом цаатан и их оленями, их уникальным укладом жизни. Прощальный ужин в лагере.",
        },
        {
          title: "Возвращение в Улан-Батор",
          desc: "Неспешное утро у озера и дорога обратно. Вечером — трансфер в отель или аэропорт.",
        },
      ],
      included: [
        "Весь транспорт (внедорожник 4WD)",
        "Профессиональный гид",
        "4 ночи проживания (отель + юрточный лагерь)",
        "Всё питание во время тура",
        "Входные билеты в нацпарки",
        "Снаряжение для верховой езды",
        "Прогулка на лодке по Хубсугулу",
      ],
      excluded: ["Международные перелёты", "Страховка", "Личные расходы", "Алкогольные напитки", "Чаевые гиду и водителю"],
      bring: [
        "Тёплые вещи (даже летом)",
        "Дождевик",
        "Удобные треккинговые ботинки",
        "Солнцезащитный крем и очки",
        "Камера и запасные батареи",
        "Личные лекарства",
        "Фонарик или налобный фонарь",
      ],
      faq: [
        {
          q: "Когда лучше ехать?",
          a: "С июня по сентябрь — лучшая погода. Июль и август самые тёплые, но и самые загруженные.",
        },
        {
          q: "Подходит ли тур для детей?",
          a: "Да, детям от 8 лет — добро пожаловать. Мы можем подстроить темп под семью.",
        },
      ],
    },
    zh: {
      description:
        "探索被誉为“蒙古蓝珍珠”的库苏古尔湖的原始之美。这趟5天的旅程将带您穿越壮丽风光，体验传统游牧文化，欣赏清澈见底的湖水。",
      itinerary: [
        { title: "抵达乌兰巴托", desc: "抵达乌兰巴托，与向导会合后前往酒店。城市导览及欢迎晚宴。" },
        { title: "前往库苏古尔湖", desc: "穿越蒙古北部的风景公路，沿途停靠当地村庄。傍晚抵达湖畔营地。" },
        { title: "骑马与游船", desc: "上午沿湖岸骑马，下午乘船游览清澈湖面，晚上围着篝火欣赏传统歌曲。" },
        { title: "拜访查坦驯鹿牧民", desc: "与查坦人及其驯鹿见面，了解他们独特的生活方式。营地告别晚宴。" },
        { title: "返回乌兰巴托", desc: "上午在湖边悠闲度过，随后驱车返回乌兰巴托。傍晚送往酒店或机场。" },
      ],
      included: ["全程交通（四驱车）", "专业向导", "4晚住宿（酒店＋蒙古包营地）", "行程中所有餐食", "国家公园门票", "骑马装备", "库苏古尔湖游船"],
      excluded: ["国际机票", "旅行保险", "个人消费", "酒精饮料", "向导和司机小费"],
      bring: ["保暖衣物（夏季也需要）", "雨衣", "舒适的徒步鞋", "防晒霜和太阳镜", "相机和备用电池", "个人药品", "手电筒或头灯"],
      faq: [
        { q: "什么时候去最好？", a: "6月至9月天气最好。7、8月最温暖，但游客也最多。" },
        { q: "适合带孩子吗？", a: "适合，欢迎8岁以上儿童参加，我们也可以为家庭调整行程节奏。" },
      ],
    },
    ko: {
      description:
        "‘몽골의 푸른 진주’로 불리는 홉스골 호수의 순수한 아름다움을 만나 보세요. 5일간의 여정에서 멋진 풍경, 전통 유목 문화, 수정처럼 맑은 호수를 경험합니다.",
      itinerary: [
        { title: "울란바토르 도착", desc: "울란바토르에 도착해 가이드를 만나고 호텔로 이동합니다. 시내 안내와 환영 만찬." },
        { title: "홉스골 호수로 이동", desc: "몽골 북부의 아름다운 길을 따라 마을에 들르며 이동합니다. 저녁에 호숫가 캠프 도착." },
        { title: "승마 & 보트 투어", desc: "오전에는 호숫가 승마, 오후에는 맑은 호수 위 보트 투어, 저녁에는 모닥불과 전통 노래." },
        { title: "차탕 순록 유목민 방문", desc: "차탕족과 순록을 만나 그들만의 독특한 생활 방식을 배웁니다. 캠프에서 송별 만찬." },
        { title: "울란바토르로 귀환", desc: "호숫가에서 여유로운 아침을 보낸 뒤 울란바토르로 돌아갑니다. 저녁에 호텔 또는 공항으로 이동." },
      ],
      included: ["전 일정 교통 (4WD 차량)", "전문 가이드", "4박 숙박 (호텔 + 게르 캠프)", "투어 중 모든 식사", "국립공원 입장료", "승마 장비", "홉스골 호수 보트 투어"],
      excluded: ["국제선 항공권", "여행자 보험", "개인 경비", "주류", "가이드 및 기사 팁"],
      bring: ["보온 의류 (여름에도 필요)", "우비", "편한 트레킹화", "선크림과 선글라스", "카메라와 여분 배터리", "개인 상비약", "손전등 또는 헤드랜턴"],
      faq: [
        { q: "언제 가는 것이 가장 좋나요?", a: "6월~9월 날씨가 가장 좋습니다. 7~8월이 가장 따뜻하지만 가장 붐빕니다." },
        { q: "아이와 함께해도 괜찮나요?", a: "네, 8세 이상 어린이는 참여할 수 있으며 가족에 맞게 일정 속도를 조정해 드립니다." },
      ],
    },
    ja: {
      description:
        "「モンゴルの青い真珠」と呼ばれるフブスグル湖の手つかずの美しさを体験。5日間の旅で、壮大な景色、伝統的な遊牧文化、透き通った湖に出会えます。",
      itinerary: [
        { title: "ウランバートル到着", desc: "ウランバートルに到着後、ガイドと合流してホテルへ。市内案内とウェルカムディナー。" },
        { title: "フブスグル湖へ移動", desc: "モンゴル北部の景色の良い道を、村に立ち寄りながら移動。夕方、湖畔のキャンプに到着。" },
        { title: "乗馬とボートツアー", desc: "午前は湖岸を乗馬、午後は澄んだ湖をボートで遊覧。夜はキャンプファイヤーと伝統の歌。" },
        { title: "ツァータンのトナカイ遊牧民を訪問", desc: "ツァータンの人々とトナカイに会い、独自の暮らしを学びます。キャンプでフェアウェルディナー。" },
        { title: "ウランバートルへ戻る", desc: "湖畔でゆっくり朝を過ごし、ウランバートルへ。夕方、ホテルまたは空港へお送りします。" },
      ],
      included: ["全行程の交通（4WD車）", "プロのガイド", "4泊の宿泊（ホテル＋ゲルキャンプ）", "ツアー中の全食事", "国立公園入場料", "乗馬用具", "フブスグル湖ボートツアー"],
      excluded: ["国際線航空券", "旅行保険", "個人的な費用", "アルコール飲料", "ガイド・ドライバーへのチップ"],
      bring: ["防寒着（夏でも必要）", "レインジャケット", "歩きやすいトレッキングシューズ", "日焼け止めとサングラス", "カメラと予備バッテリー", "常備薬", "懐中電灯またはヘッドライト"],
      faq: [
        { q: "ベストシーズンはいつですか？", a: "6月〜9月が最も天候に恵まれます。7〜8月は最も暖かいですが、最も混み合います。" },
        { q: "子ども連れでも参加できますか？", a: "はい、8歳以上のお子様は参加可能で、ご家族に合わせてペースを調整できます。" },
      ],
    },
  },

  "gobi-desert-expedition": {
    en: {
      description:
        "Discover the vast Gobi Desert, home to towering sand dunes, ancient dinosaur fossils, and unique wildlife. Experience nomadic culture and sleep under star-filled skies.",
      itinerary: [
        { title: "Ulaanbaatar to Baga Gazriin Chuluu", desc: "Drive south to a striking granite rock formation and explore its caves and ancient ruins." },
        { title: "Tsagaan Suvarga", desc: "Visit the White Stupa — ancient seabed cliffs with stunning layered colors." },
        { title: "Yolyn Am ice canyon", desc: "Hike through the narrow ice canyon in the Gobi Gurvan Saikhan mountains." },
        { title: "Khongoryn Els sand dunes", desc: "Explore Mongolia's largest sand dunes, ride camels, and watch the sunset." },
        { title: "Bayanzag Flaming Cliffs", desc: "Visit the famous dinosaur fossil site and see the red cliffs glow at sunset." },
        { title: "Ongi Monastery ruins", desc: "Explore the ruins of this historic monastery on the banks of the Ongi River." },
        { title: "Return to Ulaanbaatar", desc: "Drive back to the capital for a farewell dinner." },
      ],
      included: ["All transportation", "Professional guide", "6 nights in ger camps", "All meals", "Camel riding", "Park fees"],
      excluded: ["Flights", "Travel insurance", "Personal expenses", "Alcohol", "Tips"],
      bring: ["Sun protection", "Warm layers", "Hiking boots", "Camera", "Reusable water bottle"],
      faq: [{ q: "How hot does the Gobi get?", a: "Summer days can reach 40°C, but nights are cool (10–15°C)." }],
    },
    mn: {
      description:
        "Сүрлэг элсэн манхан, эртний үлэг гүрвэлийн олдвор, өвөрмөц ан амьтдын өлгий болсон өргөн уудам Говийг нээгээрэй. Нүүдэлчдийн соёлыг мэдэрч, од түгсэн тэнгэрийн доор хоноорой.",
      itinerary: [
        { title: "Улаанбаатар — Бага газрын чулуу", desc: "Урагшаа хөдөлж, өвөрмөц боржин хадан тогтоц, агуй, эртний туурьтай танилцана." },
        { title: "Цагаан суварга", desc: "Олон өнгийн давхаргатай, эртний далайн ёроолын хадан хясаа Цагаан сувргыг үзнэ." },
        { title: "Ёлын амны мөсөн хавцал", desc: "Говь Гурван Сайхан нурууны нарийн мөсөн хавцлаар явган аялна." },
        { title: "Хонгорын элс", desc: "Монголын хамгийн том элсэн манханд гарч, тэмээ унаж, нар жаргахыг үзнэ." },
        { title: "Баянзаг — Галт хад", desc: "Үлэг гүрвэлийн олдвороороо алдартай газар очиж, нар жаргах үеийн улаан хадыг үзнэ." },
        { title: "Онгийн хийдийн туурь", desc: "Онги голын эрэг дээрх түүхэн хийдийн туурьтай танилцана." },
        { title: "Улаанбаатар руу буцах", desc: "Нийслэл рүү буцаж, үдэлтийн оройн зоог барина." },
      ],
      included: ["Бүх тээвэр", "Мэргэжлийн хөтөч", "6 шөнө гэр баазад", "Бүх хоол", "Тэмээ унах", "Цогцолборт газрын хураамж"],
      excluded: ["Нислэг", "Даатгал", "Хувийн зардал", "Согтууруулах ундаа", "Шагнал"],
      bring: ["Нарны хамгаалалт", "Дулаан хувцас", "Явган аяллын гутал", "Камер", "Усны сав"],
      faq: [{ q: "Говь хэр халуун байдаг вэ?", a: "Зуны өдөр 40°C хүрч болох ч шөнө сэрүүн (10–15°C) байдаг." }],
    },
    ru: {
      description:
        "Откройте бескрайнюю пустыню Гоби — высокие песчаные дюны, древние окаменелости динозавров и уникальную природу. Почувствуйте культуру кочевников и ночуйте под звёздным небом.",
      itinerary: [
        { title: "Улан-Батор — Бага-Газрын-Чулуу", desc: "Дорога на юг к необычным гранитным скалам, пещерам и древним руинам." },
        { title: "Цагаан-Суварга", desc: "«Белая ступа» — обрывы древнего морского дна с многоцветными слоями." },
        { title: "Ледяное ущелье Ёлын-Ам", desc: "Пеший поход по узкому ледяному ущелью в горах Гоби-Гурван-Сайхан." },
        { title: "Дюны Хонгорын-Элс", desc: "Крупнейшие дюны Монголии, прогулка на верблюдах и закат." },
        { title: "Баянзаг — Пылающие скалы", desc: "Знаменитое место находок динозавров и красные скалы на закате." },
        { title: "Руины монастыря Онги", desc: "Руины исторического монастыря на берегу реки Онги." },
        { title: "Возвращение в Улан-Батор", desc: "Дорога в столицу и прощальный ужин." },
      ],
      included: ["Весь транспорт", "Профессиональный гид", "6 ночей в юрточных лагерях", "Всё питание", "Катание на верблюдах", "Сборы нацпарков"],
      excluded: ["Перелёты", "Страховка", "Личные расходы", "Алкоголь", "Чаевые"],
      bring: ["Защита от солнца", "Тёплые вещи", "Треккинговые ботинки", "Камера", "Бутылка для воды"],
      faq: [{ q: "Насколько жарко в Гоби?", a: "Летом днём бывает до 40°C, но ночи прохладные (10–15°C)." }],
    },
    zh: {
      description: "探索广袤的戈壁沙漠——高耸的沙丘、远古恐龙化石和独特的野生动物。体验游牧文化，在繁星满天的夜空下入眠。",
      itinerary: [
        { title: "乌兰巴托—巴嘎嘎扎林楚鲁", desc: "向南驱车前往奇特的花岗岩地貌，探索洞穴和古遗址。" },
        { title: "白色佛塔（查干苏布尔加）", desc: "参观远古海床形成的悬崖，层层色彩令人惊叹。" },
        { title: "约勒峡谷冰川", desc: "在戈壁古尔班赛罕山脉的狭窄冰峡谷中徒步。" },
        { title: "洪戈尔沙丘", desc: "探索蒙古最大的沙丘，骑骆驼、看日落。" },
        { title: "巴彦扎格火焰崖", desc: "参观著名的恐龙化石遗址，欣赏日落时的红色悬崖。" },
        { title: "翁吉寺遗址", desc: "探访翁吉河畔的历史寺院遗址。" },
        { title: "返回乌兰巴托", desc: "驱车返回首都，享用告别晚宴。" },
      ],
      included: ["全程交通", "专业向导", "6晚蒙古包营地住宿", "全部餐食", "骑骆驼", "公园门票"],
      excluded: ["机票", "旅行保险", "个人消费", "酒精饮料", "小费"],
      bring: ["防晒用品", "保暖衣物", "徒步鞋", "相机", "水杯"],
      faq: [{ q: "戈壁有多热？", a: "夏季白天可达40°C，但夜晚凉爽（10–15°C）。" }],
    },
    ko: {
      description:
        "거대한 모래 언덕, 고대 공룡 화석, 독특한 야생동물의 땅, 광활한 고비 사막을 만나 보세요. 유목 문화를 체험하고 별이 가득한 하늘 아래에서 잠듭니다.",
      itinerary: [
        { title: "울란바토르 → 바가 가즈링 촐로", desc: "남쪽으로 이동해 독특한 화강암 지형과 동굴, 고대 유적을 둘러봅니다." },
        { title: "차강 소브라가", desc: "층층이 다채로운 색을 띤 고대 해저 절벽 ‘하얀 사원’을 방문합니다." },
        { title: "욜링암 얼음 협곡", desc: "고비 구르반 사이항 산맥의 좁은 얼음 협곡을 하이킹합니다." },
        { title: "홍고린 엘스 사구", desc: "몽골 최대의 모래 언덕을 탐험하고 낙타를 타며 일몰을 감상합니다." },
        { title: "바양작 불타는 절벽", desc: "유명한 공룡 화석지를 방문하고 해 질 녘 붉은 절벽을 감상합니다." },
        { title: "옹기 사원 유적", desc: "옹기강 변의 역사적인 사원 유적을 둘러봅니다." },
        { title: "울란바토르로 귀환", desc: "수도로 돌아가 송별 만찬을 즐깁니다." },
      ],
      included: ["전 일정 교통", "전문 가이드", "게르 캠프 6박", "모든 식사", "낙타 타기", "공원 입장료"],
      excluded: ["항공권", "여행자 보험", "개인 경비", "주류", "팁"],
      bring: ["자외선 차단 용품", "보온 의류", "트레킹화", "카메라", "물병"],
      faq: [{ q: "고비는 얼마나 덥나요?", a: "여름 낮에는 40°C까지 오르지만 밤에는 선선합니다 (10–15°C)." }],
    },
    ja: {
      description:
        "そびえる砂丘、古代の恐竜化石、独特の野生動物が息づく広大なゴビ砂漠へ。遊牧文化に触れ、満天の星空の下で眠りましょう。",
      itinerary: [
        { title: "ウランバートル → バガ・ガズリン・チョロー", desc: "南へ向かい、不思議な花崗岩の奇岩、洞窟、古代遺跡を探索します。" },
        { title: "ツァガーン・スヴァルガ", desc: "色鮮やかな地層が重なる古代海底の断崖「白い仏塔」を訪れます。" },
        { title: "ヨリン・アム氷の渓谷", desc: "ゴビ・グルバンサイハン山脈の狭い氷の渓谷をハイキングします。" },
        { title: "ホンゴリン・エルス砂丘", desc: "モンゴル最大の砂丘を探検し、ラクダに乗って夕日を眺めます。" },
        { title: "バヤンザグ「炎の崖」", desc: "有名な恐竜化石の発掘地を訪れ、夕日に染まる赤い崖を見ます。" },
        { title: "オンギ寺院跡", desc: "オンギ川のほとりに残る歴史ある寺院の遺跡を探索します。" },
        { title: "ウランバートルへ戻る", desc: "首都へ戻り、フェアウェルディナーを楽しみます。" },
      ],
      included: ["全行程の交通", "プロのガイド", "ゲルキャンプ6泊", "全食事", "ラクダ乗り", "公園入場料"],
      excluded: ["航空券", "旅行保険", "個人的な費用", "アルコール", "チップ"],
      bring: ["日焼け対策グッズ", "防寒着", "トレッキングシューズ", "カメラ", "水筒"],
      faq: [{ q: "ゴビはどれくらい暑いですか？", a: "夏の日中は40°Cに達することもありますが、夜は涼しくなります（10〜15°C）。" }],
    },
  },
};
