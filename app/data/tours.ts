import type { Lang } from "../i18n/config";
import type { Currency } from "../lib/format";
import { TOUR_DETAILS, TourDetails } from "./tour-details";

export type TourCategory = "domestic" | "outbound" | "custom";
export type TourTag = "popular" | "new" | "special";
export type Localized<T> = Record<Lang, T>;

export type Tour = {
  slug: string;
  category: TourCategory;
  tags: TourTag[];
  days: number;
  // 0 means the price is quoted on request.
  priceFrom: number;
  currency: Currency;
  coverImage: string;
  gallery?: string[];
  rating?: number;
  reviewCount?: number;
  title: Localized<string>;
  summary: Localized<string>;
  destination: Localized<string>;
  duration: Localized<string>;
  season: Localized<string>;
  highlights: Localized<string[]>;
};

const ALL_YEAR: Localized<string> = {
  mn: "Жилийн турш",
  en: "All year",
  ru: "Круглый год",
  zh: "全年",
  ko: "연중",
  ja: "通年",
};

const JUNE_SEPT: Localized<string> = {
  mn: "6–9 сар",
  en: "June–September",
  ru: "Июнь–сентябрь",
  zh: "6月–9月",
  ko: "6월–9월",
  ja: "6月〜9月",
};

const DAY_TRIP: Localized<string> = {
  mn: "Өдрийн аялал",
  en: "Day trip",
  ru: "Однодневный тур",
  zh: "一日游",
  ko: "당일 여행",
  ja: "日帰りツアー",
};

const nightsDays = (nights: number, days: number): Localized<string> => ({
  mn: `${nights} шөнө / ${days} өдөр`,
  en: `${nights} nights / ${days} days`,
  ru: `${nights} ${nights < 5 ? "ночи" : "ночей"} / ${days} ${days < 5 ? "дня" : "дней"}`,
  zh: `${days}天${nights}晚`,
  ko: `${nights}박 ${days}일`,
  ja: `${nights}泊${days}日`,
});

export const TOURS: Tour[] = [
  // ---------------------------------------------------------------------------
  // Mongolia
  // ---------------------------------------------------------------------------
  {
    slug: "khuvsgul-lake-adventure",
    category: "domestic",
    tags: ["popular"],
    days: 5,
    priceFrom: 850,
    currency: "USD",
    rating: 4.9,
    reviewCount: 87,
    coverImage: "/tours/mongolias-khuvsgul-lake-txovdfqxgjp7je6r.jpg",
    gallery: ["/lake.jpg", "/enkhtsetseg-natsagdorj-Gy8OWkR_jMY-unsplash.jpg"],
    title: {
      mn: "Хөвсгөл нуурын адал явдалт аялал",
      en: "Khuvsgul Lake Adventure",
      ru: "Приключение на озере Хубсугул",
      zh: "库苏古尔湖探险之旅",
      ko: "홉스골 호수 어드벤처",
      ja: "フブスグル湖アドベンチャー",
    },
    summary: {
      mn: "“Монголын цэнхэр сувд”-ын эрэг дээр морь унаж, завиар аялж, цаатан малчидтай уулзана.",
      en: "Horse riding, boat trips, and reindeer herders at the “Blue Pearl of Mongolia”.",
      ru: "Конные прогулки, лодки и оленеводы-цаатаны у «Голубой жемчужины Монголии».",
      zh: "在“蒙古蓝珍珠”骑马、泛舟，拜访驯鹿牧民。",
      ko: "‘몽골의 푸른 진주’에서 승마, 보트 투어, 순록 유목민과의 만남.",
      ja: "「モンゴルの青い真珠」で乗馬、ボート、トナカイ遊牧民との出会い。",
    },
    destination: {
      mn: "Хөвсгөл, Монгол",
      en: "Khuvsgul, Mongolia",
      ru: "Хубсугул, Монголия",
      zh: "蒙古·库苏古尔",
      ko: "몽골 홉스골",
      ja: "モンゴル・フブスグル",
    },
    duration: nightsDays(4, 5),
    season: JUNE_SEPT,
    highlights: {
      mn: ["Хөвсгөл нуур", "Морин аялал", "Цаатан малчид"],
      en: ["Khuvsgul Lake", "Horse riding", "Tsaatan reindeer herders"],
      ru: ["Озеро Хубсугул", "Конные прогулки", "Оленеводы-цаатаны"],
      zh: ["库苏古尔湖", "骑马", "查坦驯鹿牧民"],
      ko: ["홉스골 호수", "승마", "차탕 순록 유목민"],
      ja: ["フブスグル湖", "乗馬", "ツァータンのトナカイ遊牧民"],
    },
  },
  {
    slug: "gobi-desert-expedition",
    category: "domestic",
    tags: ["popular", "special"],
    days: 7,
    priceFrom: 1200,
    currency: "USD",
    rating: 5.0,
    reviewCount: 124,
    coverImage: "/tours/360_F_287899895_wbOqOFdK60h4j6uizLBessWWsry5r9ue.jpg",
    gallery: ["/khosbayar-surenkhorloo-kpUPKFB13hg-unsplash.jpg", "/oooo.jpg"],
    title: {
      mn: "Говийн экспедиц",
      en: "Gobi Desert Expedition",
      ru: "Экспедиция по пустыне Гоби",
      zh: "戈壁沙漠探险",
      ko: "고비 사막 탐험",
      ja: "ゴビ砂漠エクスペディション",
    },
    summary: {
      mn: "Элсэн манхан, мөсөн хавцал, үлэг гүрвэлийн олдвор, оддын доорх гэрийн бааз.",
      en: "Sand dunes, an ice canyon, dinosaur fossil sites, and ger camps under the stars.",
      ru: "Песчаные дюны, ледяной каньон, места находок динозавров и юрты под звёздами.",
      zh: "沙丘、冰峡谷、恐龙化石遗址，以及星空下的蒙古包营地。",
      ko: "모래 언덕, 얼음 협곡, 공룡 화석지, 그리고 별빛 아래 게르 캠프.",
      ja: "砂丘、氷の渓谷、恐竜化石の地、そして星空の下のゲルキャンプ。",
    },
    destination: {
      mn: "Өмнөговь, Монгол",
      en: "Gobi Desert, Mongolia",
      ru: "Пустыня Гоби, Монголия",
      zh: "蒙古·戈壁沙漠",
      ko: "몽골 고비 사막",
      ja: "モンゴル・ゴビ砂漠",
    },
    duration: nightsDays(6, 7),
    season: {
      mn: "5–9 сар",
      en: "May–September",
      ru: "Май–сентябрь",
      zh: "5月–9月",
      ko: "5월–9월",
      ja: "5月〜9月",
    },
    highlights: {
      mn: ["Хонгорын элс", "Ёлын ам", "Баянзаг"],
      en: ["Khongoryn Els dunes", "Yolyn Am canyon", "Flaming Cliffs"],
      ru: ["Дюны Хонгорын-Элс", "Ущелье Ёлын-Ам", "Пылающие скалы"],
      zh: ["洪戈尔沙丘", "约勒峡谷", "火焰崖"],
      ko: ["홍고린 엘스 사구", "욜링암 협곡", "불타는 절벽"],
      ja: ["ホンゴル砂丘", "ヨリン・アム渓谷", "炎の崖"],
    },
  },
  {
    slug: "gobi-3-days",
    category: "domestic",
    tags: ["popular", "special"],
    days: 3,
    priceFrom: 2490000,
    currency: "MNT",
    coverImage: "/khosbayar-surenkhorloo-kpUPKFB13hg-unsplash.jpg",
    title: {
      mn: "Говийн 3 өдрийн аялал",
      en: "3-Day Gobi Desert Tour",
      ru: "Гоби за 3 дня",
      zh: "戈壁3日游",
      ko: "고비 사막 3일 투어",
      ja: "ゴビ砂漠3日間ツアー",
    },
    summary: {
      mn: "Хонгорын элс, Яргайтын хавцлаар аялах гайхалтай боломж.",
      en: "Khongor sand dunes and a canyon experience in a short trip.",
      ru: "Дюны Хонгор и каньоны — за короткую поездку.",
      zh: "短途行程，体验洪戈尔沙丘与峡谷风光。",
      ko: "짧은 일정으로 즐기는 홍고르 사구와 협곡.",
      ja: "短い日程でホンゴル砂丘と渓谷を体験。",
    },
    destination: {
      mn: "Өмнөговь аймаг, Монгол",
      en: "South Gobi, Mongolia",
      ru: "Южная Гоби, Монголия",
      zh: "蒙古·南戈壁",
      ko: "몽골 남고비",
      ja: "モンゴル・南ゴビ",
    },
    duration: nightsDays(2, 3),
    season: JUNE_SEPT,
    highlights: {
      mn: ["Хонгорын элсэн манхан", "Тэмээн сафари", "Одтой тэнгэр"],
      en: ["Khongor dunes", "Camel safari", "Starry skies"],
      ru: ["Дюны Хонгор", "Верблюжье сафари", "Звёздное небо"],
      zh: ["洪戈尔沙丘", "骆驼之旅", "璀璨星空"],
      ko: ["홍고르 사구", "낙타 사파리", "쏟아지는 별"],
      ja: ["ホンゴル砂丘", "ラクダサファリ", "満天の星"],
    },
  },
  {
    slug: "khuvsgul-lake-4-days",
    category: "domestic",
    tags: ["popular"],
    days: 4,
    priceFrom: 2950000,
    currency: "MNT",
    coverImage: "/lake.jpg",
    title: {
      mn: "Хөвсгөлд 4 өдөр амрах",
      en: "Khuvsgul 4-Day Retreat",
      ru: "Отдых на Хубсугуле, 4 дня",
      zh: "库苏古尔4日休闲游",
      ko: "홉스골 4일 휴식 여행",
      ja: "フブスグル4日間リトリート",
    },
    summary: {
      mn: "Цэнгэг нуур, морин аялал, завины аялал багтсан.",
      en: "Crystal-clear lake, horse riding, and a boat trip included.",
      ru: "Чистейшее озеро, конная прогулка и лодка включены.",
      zh: "清澈湖水，含骑马和游船。",
      ko: "맑은 호수, 승마와 보트 투어 포함.",
      ja: "澄んだ湖、乗馬とボートツアー付き。",
    },
    destination: {
      mn: "Хөвсгөл, Монгол",
      en: "Khuvsgul, Mongolia",
      ru: "Хубсугул, Монголия",
      zh: "蒙古·库苏古尔",
      ko: "몽골 홉스골",
      ja: "モンゴル・フブスグル",
    },
    duration: nightsDays(3, 4),
    season: {
      mn: "5–9 сар",
      en: "May–September",
      ru: "Май–сентябрь",
      zh: "5月–9月",
      ko: "5월–9월",
      ja: "5月〜9月",
    },
    highlights: {
      mn: ["Морин аялал", "Завины аялал", "Цэвэр агаарт амрах"],
      en: ["Horseback riding", "Boat trip", "Relax in nature"],
      ru: ["Конная прогулка", "Прогулка на лодке", "Отдых на природе"],
      zh: ["骑马", "游船", "亲近自然"],
      ko: ["승마", "보트 투어", "자연 속 휴식"],
      ja: ["乗馬", "ボートツアー", "自然の中でのんびり"],
    },
  },
  {
    slug: "terelj-day-trip",
    category: "domestic",
    tags: ["new"],
    days: 1,
    priceFrom: 189000,
    currency: "MNT",
    coverImage: "/tours/view-gorkhi-terelj-national-park-main-valley-autumn_724552-90.jpg",
    title: {
      mn: "Тэрэлж нэг өдрийн аялал",
      en: "Terelj National Park Day Trip",
      ru: "Однодневный тур в Тэрэлж",
      zh: "特日勒吉国家公园一日游",
      ko: "테를지 국립공원 당일 여행",
      ja: "テレルジ国立公園日帰りツアー",
    },
    summary: {
      mn: "Мэлхий хад, Чингис хааны хөшөө, морин аялал.",
      en: "Turtle Rock, the Chinggis Khaan statue, and horse riding.",
      ru: "Скала Черепаха, статуя Чингисхана и конная прогулка.",
      zh: "乌龟石、成吉思汗雕像和骑马体验。",
      ko: "거북바위, 칭기즈칸 동상, 승마 체험.",
      ja: "亀石、チンギス・ハーン像、乗馬体験。",
    },
    destination: {
      mn: "Тэрэлж, Төв аймаг",
      en: "Terelj, Mongolia",
      ru: "Тэрэлж, Монголия",
      zh: "蒙古·特日勒吉",
      ko: "몽골 테를지",
      ja: "モンゴル・テレルジ",
    },
    duration: DAY_TRIP,
    season: ALL_YEAR,
    highlights: {
      mn: ["Мэлхий хад", "Алхалтын маршрут", "Морин аялал"],
      en: ["Turtle Rock", "Hiking trail", "Horse riding"],
      ru: ["Скала Черепаха", "Пешая тропа", "Конная прогулка"],
      zh: ["乌龟石", "徒步路线", "骑马"],
      ko: ["거북바위", "하이킹 코스", "승마"],
      ja: ["亀石", "ハイキングコース", "乗馬"],
    },
  },
  {
    slug: "orkhon-valley-5-days",
    category: "domestic",
    tags: ["special"],
    days: 5,
    priceFrom: 3150000,
    currency: "MNT",
    coverImage: "/tours/HD-wallpaper-orkhon-waterfalls-mongolia-travel-scenery-waterfalls-nature.jpg",
    title: {
      mn: "Орхоны хөндийн 5 өдрийн аялал",
      en: "Orkhon Valley 5-Day Adventure",
      ru: "Долина Орхона за 5 дней",
      zh: "鄂尔浑河谷5日探险",
      ko: "오르홍 계곡 5일 어드벤처",
      ja: "オルホン渓谷5日間アドベンチャー",
    },
    summary: {
      mn: "Усан хүрхрээ, морин аялал, нүүдэлчдийн амьдрал.",
      en: "Waterfall, horse trekking, and nomadic life.",
      ru: "Водопад, конный поход и жизнь кочевников.",
      zh: "瀑布、骑马徒步与游牧生活。",
      ko: "폭포, 승마 트레킹, 유목민의 삶.",
      ja: "滝、乗馬トレッキング、遊牧民の暮らし。",
    },
    destination: {
      mn: "Өвөрхангай, Монгол",
      en: "Uvurkhangai, Mongolia",
      ru: "Уверхангай, Монголия",
      zh: "蒙古·前杭爱省",
      ko: "몽골 우부르항가이",
      ja: "モンゴル・ウブルハンガイ",
    },
    duration: nightsDays(4, 5),
    season: JUNE_SEPT,
    highlights: {
      mn: ["Орхоны хүрхрээ", "Морин аялал", "Гэр бааз"],
      en: ["Orkhon Waterfall", "Horse trek", "Ger camp"],
      ru: ["Водопад Орхон", "Конный поход", "Юрточный лагерь"],
      zh: ["鄂尔浑瀑布", "骑马徒步", "蒙古包营地"],
      ko: ["오르홍 폭포", "승마 트레킹", "게르 캠프"],
      ja: ["オルホン滝", "乗馬トレッキング", "ゲルキャンプ"],
    },
  },
  {
    slug: "khustain-park-1-day",
    category: "domestic",
    tags: ["new"],
    days: 1,
    priceFrom: 165000,
    currency: "MNT",
    coverImage: "/tours/sight_pic_big_2544.jpg",
    title: {
      mn: "Хустайн нуруу — тахь үзэх өдрийн аялал",
      en: "Khustai Park Wild Horse Day Trip",
      ru: "Хустайн-Нуруу: лошади Пржевальского",
      zh: "呼斯坦国家公园野马一日游",
      ko: "후스타이 국립공원 야생마 당일 여행",
      ja: "フスタイ国立公園・野生馬日帰りツアー",
    },
    summary: {
      mn: "Тахь адуу болон ховордсон зэрлэг амьтдыг байгальд нь үзнэ.",
      en: "See wild Przewalski's horses and protected wildlife in their habitat.",
      ru: "Лошади Пржевальского и редкие животные в естественной среде.",
      zh: "在自然栖息地观赏普氏野马和受保护的野生动物。",
      ko: "자연 서식지에서 프르제발스키 말과 보호 야생동물 관찰.",
      ja: "モウコノウマや保護された野生動物を自然の中で観察。",
    },
    destination: {
      mn: "Төв аймаг, Монгол",
      en: "Tuv Province, Mongolia",
      ru: "Центральный аймак, Монголия",
      zh: "蒙古·中央省",
      ko: "몽골 투브 아이막",
      ja: "モンゴル・トゥブ県",
    },
    duration: DAY_TRIP,
    season: ALL_YEAR,
    highlights: {
      mn: ["Зэрлэг тахь", "Фото аялал", "Богино алхалт"],
      en: ["Wild horses", "Photography spots", "Short hike"],
      ru: ["Дикие лошади", "Фотоместа", "Короткая прогулка"],
      zh: ["野马", "摄影点", "短途徒步"],
      ko: ["야생마", "포토 스팟", "가벼운 하이킹"],
      ja: ["野生馬", "撮影スポット", "軽いハイキング"],
    },
  },

  // ---------------------------------------------------------------------------
  // Abroad
  // ---------------------------------------------------------------------------
  {
    slug: "seoul-4-days",
    category: "outbound",
    tags: ["popular"],
    days: 4,
    priceFrom: 4590000,
    currency: "MNT",
    coverImage: "/tours/1.webp",
    title: {
      mn: "Сөүл хотын 4 өдөр",
      en: "4-Day Seoul City Tour",
      ru: "Сеул за 4 дня",
      zh: "首尔4日游",
      ko: "서울 4일 시티 투어",
      ja: "ソウル4日間シティツアー",
    },
    summary: {
      mn: "Шоппинг, кафе, соёлын аялал.",
      en: "Shopping, cafés, and culture.",
      ru: "Шопинг, кафе и культура.",
      zh: "购物、咖啡馆与文化体验。",
      ko: "쇼핑, 카페, 문화 체험.",
      ja: "ショッピング、カフェ、カルチャー体験。",
    },
    destination: {
      mn: "Сөүл, БНСУ",
      en: "Seoul, South Korea",
      ru: "Сеул, Южная Корея",
      zh: "韩国·首尔",
      ko: "대한민국 서울",
      ja: "韓国・ソウル",
    },
    duration: nightsDays(3, 4),
    season: ALL_YEAR,
    highlights: {
      mn: ["Мёндон", "Гванхвамун", "Шөнийн гудамж"],
      en: ["Myeongdong", "Gwanghwamun", "Night streets"],
      ru: ["Мёндон", "Кванхвамун", "Ночные улицы"],
      zh: ["明洞", "光化门", "夜市街头"],
      ko: ["명동", "광화문", "야경 거리"],
      ja: ["明洞", "光化門", "夜の街歩き"],
    },
  },
  {
    slug: "phuket-6-days",
    category: "outbound",
    tags: ["special"],
    days: 6,
    priceFrom: 5990000,
    currency: "MNT",
    coverImage: "/tours/premium_photo-1661962958462-9e52fda9954d.jpg",
    title: {
      mn: "Пукет далайн амралт 6 өдөр",
      en: "6-Day Phuket Beach Holiday",
      ru: "Пхукет: пляжный отдых 6 дней",
      zh: "普吉岛6日海滨度假",
      ko: "푸껫 6일 해변 휴가",
      ja: "プーケット6日間ビーチホリデー",
    },
    summary: {
      mn: "Цэнхэр далай, арал хоорондын аялал, тай массаж.",
      en: "Blue sea, island hopping, and Thai massage.",
      ru: "Лазурное море, острова и тайский массаж.",
      zh: "碧海蓝天、跳岛游和泰式按摩。",
      ko: "푸른 바다, 아일랜드 호핑, 타이 마사지.",
      ja: "青い海、アイランドホッピング、タイ古式マッサージ。",
    },
    destination: {
      mn: "Пукет, Тайланд",
      en: "Phuket, Thailand",
      ru: "Пхукет, Таиланд",
      zh: "泰国·普吉岛",
      ko: "태국 푸껫",
      ja: "タイ・プーケット",
    },
    duration: nightsDays(5, 6),
    season: {
      mn: "12–3 сар",
      en: "December–March",
      ru: "Декабрь–март",
      zh: "12月–3月",
      ko: "12월–3월",
      ja: "12月〜3月",
    },
    highlights: {
      mn: ["Арал хоорондын аялал", "Цагаан элстэй эрэг", "Далайн хоол"],
      en: ["Island hopping", "White-sand beaches", "Seafood"],
      ru: ["Острова", "Белоснежные пляжи", "Морепродукты"],
      zh: ["跳岛游", "白沙滩", "海鲜"],
      ko: ["아일랜드 호핑", "백사장", "해산물"],
      ja: ["アイランドホッピング", "白砂のビーチ", "シーフード"],
    },
  },
  {
    slug: "tokyo-5-days",
    category: "outbound",
    tags: ["popular"],
    days: 5,
    priceFrom: 8500000,
    currency: "MNT",
    coverImage: "/tours/aerial-view-tokyo-cityscape-with-fuji-mountain-japan_335224-148.avif",
    title: {
      mn: "Токио 5 өдрийн аялал",
      en: "Tokyo 5-Day Tour",
      ru: "Токио за 5 дней",
      zh: "东京5日游",
      ko: "도쿄 5일 투어",
      ja: "東京5日間ツアー",
    },
    summary: {
      mn: "Шибүяа, Акихабара, Сэнсөжи сүм.",
      en: "Shibuya, Akihabara, and Senso-ji Temple.",
      ru: "Сибуя, Акихабара и храм Сэнсо-дзи.",
      zh: "涩谷、秋叶原和浅草寺。",
      ko: "시부야, 아키하바라, 센소지.",
      ja: "渋谷、秋葉原、浅草寺。",
    },
    destination: {
      mn: "Токио, Япон",
      en: "Tokyo, Japan",
      ru: "Токио, Япония",
      zh: "日本·东京",
      ko: "일본 도쿄",
      ja: "日本・東京",
    },
    duration: nightsDays(4, 5),
    season: ALL_YEAR,
    highlights: {
      mn: ["Сэнсөжи сүм", "Шибүяагийн уулзвар", "Аниме гудамж"],
      en: ["Senso-ji Temple", "Shibuya Crossing", "Anime district"],
      ru: ["Храм Сэнсо-дзи", "Перекрёсток Сибуя", "Аниме-квартал"],
      zh: ["浅草寺", "涩谷十字路口", "动漫街区"],
      ko: ["센소지", "시부야 스크램블", "애니메이션 거리"],
      ja: ["浅草寺", "渋谷スクランブル交差点", "アニメの街"],
    },
  },
  {
    slug: "singapore-3-days",
    category: "outbound",
    tags: ["new"],
    days: 3,
    priceFrom: 7990000,
    currency: "MNT",
    coverImage: "/tours/35896-3840x2160-desktop-4k-singapore-background.jpg",
    title: {
      mn: "Сингапур 3 өдрийн аялал",
      en: "Singapore in 3 Days",
      ru: "Сингапур за 3 дня",
      zh: "新加坡3日游",
      ko: "싱가포르 3일 여행",
      ja: "シンガポール3日間",
    },
    summary: {
      mn: "Марина Бэй, Supertree Grove, Сентоза арал.",
      en: "Marina Bay, Supertree Grove, and Sentosa Island.",
      ru: "Марина-Бэй, Supertree Grove и остров Сентоза.",
      zh: "滨海湾、超级树丛和圣淘沙岛。",
      ko: "마리나 베이, 슈퍼트리 그로브, 센토사 섬.",
      ja: "マリーナベイ、スーパーツリー・グローブ、セントーサ島。",
    },
    destination: {
      mn: "Сингапур",
      en: "Singapore",
      ru: "Сингапур",
      zh: "新加坡",
      ko: "싱가포르",
      ja: "シンガポール",
    },
    duration: nightsDays(2, 3),
    season: ALL_YEAR,
    highlights: {
      mn: ["Сентоза арал", "Марина Бэй шоу"],
      en: ["Sentosa Island", "Marina Bay light show"],
      ru: ["Остров Сентоза", "Световое шоу Марина-Бэй"],
      zh: ["圣淘沙岛", "滨海湾灯光秀"],
      ko: ["센토사 섬", "마리나 베이 라이트 쇼"],
      ja: ["セントーサ島", "マリーナベイの光のショー"],
    },
  },
  {
    slug: "hongkong-4-days",
    category: "outbound",
    tags: ["special"],
    days: 4,
    priceFrom: 6890000,
    currency: "MNT",
    coverImage: "/tours/premium_photo-1664298006973-e98eb94d006c.jpg",
    title: {
      mn: "Хонконг 4 өдрийн аялал",
      en: "Hong Kong 4-Day Tour",
      ru: "Гонконг за 4 дня",
      zh: "香港4日游",
      ko: "홍콩 4일 투어",
      ja: "香港4日間ツアー",
    },
    summary: {
      mn: "Виктория Пик, Диснейлэнд, шоппинг.",
      en: "Victoria Peak, Disneyland, and shopping.",
      ru: "Пик Виктория, Диснейленд и шопинг.",
      zh: "太平山顶、迪士尼乐园和购物。",
      ko: "빅토리아 피크, 디즈니랜드, 쇼핑.",
      ja: "ビクトリア・ピーク、ディズニーランド、ショッピング。",
    },
    destination: {
      mn: "Хонконг",
      en: "Hong Kong",
      ru: "Гонконг",
      zh: "中国香港",
      ko: "홍콩",
      ja: "香港",
    },
    duration: nightsDays(3, 4),
    season: {
      mn: "10–4 сар",
      en: "October–April",
      ru: "Октябрь–апрель",
      zh: "10月–4月",
      ko: "10월–4월",
      ja: "10月〜4月",
    },
    highlights: {
      mn: ["Виктория Пик", "Диснейлэнд", "Боомтын үзэмж"],
      en: ["Victoria Peak", "Disneyland", "Harbour views"],
      ru: ["Пик Виктория", "Диснейленд", "Вид на гавань"],
      zh: ["太平山顶", "迪士尼乐园", "维港夜景"],
      ko: ["빅토리아 피크", "디즈니랜드", "항구 야경"],
      ja: ["ビクトリア・ピーク", "ディズニーランド", "港の夜景"],
    },
  },

  // ---------------------------------------------------------------------------
  // Custom
  // ---------------------------------------------------------------------------
  {
    slug: "corporate-teambuilding",
    category: "custom",
    tags: ["special"],
    days: 2,
    priceFrom: 0,
    currency: "MNT",
    coverImage: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1400",
    title: {
      mn: "Байгууллагын захиалгат аялал",
      en: "Corporate Teambuilding Retreat",
      ru: "Корпоративный тимбилдинг",
      zh: "企业团建之旅",
      ko: "기업 팀빌딩 리트릿",
      ja: "企業向けチームビルディング旅行",
    },
    summary: {
      mn: "Сургалт, аяллын хөтөлбөрийг байгууллагад тань тусгайлан зохионо.",
      en: "Fully customized team-building, training, and retreat planning.",
      ru: "Полностью индивидуальные тимбилдинг, тренинги и выездные программы.",
      zh: "完全定制的团建、培训与团队旅行规划。",
      ko: "팀빌딩, 교육, 워크숍 여행을 완전 맞춤으로 기획.",
      ja: "チームビルディング・研修・社員旅行を完全オーダーメイドで企画。",
    },
    destination: {
      mn: "Монгол / Гадаад",
      en: "Mongolia / International",
      ru: "Монголия / за рубежом",
      zh: "蒙古 / 海外",
      ko: "몽골 / 해외",
      ja: "モンゴル / 海外",
    },
    duration: {
      mn: "2+ өдөр",
      en: "2+ days",
      ru: "От 2 дней",
      zh: "2天起",
      ko: "2일 이상",
      ja: "2日間〜",
    },
    season: {
      mn: "Тохиролцоно",
      en: "Flexible",
      ru: "По договорённости",
      zh: "灵活安排",
      ko: "협의 가능",
      ja: "応相談",
    },
    highlights: {
      mn: ["Тимбилдинг", "Сургалт", "Бүрэн багц"],
      en: ["Teambuilding", "Training", "Full-package planning"],
      ru: ["Тимбилдинг", "Тренинги", "Организация под ключ"],
      zh: ["团队建设", "培训", "一站式策划"],
      ko: ["팀빌딩", "교육", "풀패키지 기획"],
      ja: ["チームビルディング", "研修", "フルパッケージ企画"],
    },
  },
];

// Rough rate used only to order mixed-currency tours by price; never shown to users.
const USD_TO_MNT_FOR_SORTING = 3500;

export const comparablePrice = (tour: Tour) =>
  tour.priceFrom === 0
    ? Number.POSITIVE_INFINITY
    : tour.currency === "USD"
      ? tour.priceFrom * USD_TO_MNT_FOR_SORTING
      : tour.priceFrom;

export const findTourBySlug = (slug: string | undefined): Tour | undefined =>
  TOURS.find((tour) => tour.slug === slug);

export const getTourDetails = (slug: string, lang: Lang): TourDetails | undefined => TOUR_DETAILS[slug]?.[lang];

// Search across every language so "Gobi", "Говь", and "戈壁" all find the same trips.
export const tourSearchText = (tour: Tour) =>
  [
    ...Object.values(tour.title),
    ...Object.values(tour.summary),
    ...Object.values(tour.destination),
    ...Object.values(tour.highlights).flat(),
  ]
    .join(" ")
    .toLowerCase();
