export type TourCategory = "domestic" | "outbound" | "custom";
export type Lang = "mn" | "en";

export type Tour = {
  slug: string;
  category: TourCategory;
  tags: ("new" | "popular" | "special")[];
  title: { mn: string; en: string };
  shortDescription: { mn: string; en: string };
  durationDays: number;
  durationText: { mn: string; en: string };
  priceFrom: number;
  destination: { mn: string; en: string };
  coverImage: string;
  season: { mn: string; en: string };
  highlights: { mn: string[]; en: string[] };
};

export const TOURS: Tour[] = [
  // -----------------------------------------------------
  // 🇲🇳 **ДОТООД АЯЛАЛУУД**
  // -----------------------------------------------------

  {
    slug: "gobi-3-days",
    category: "domestic",
    tags: ["popular", "special"],
    title: { mn: "Говийн 3 өдрийн аялал", en: "3-Day Gobi Desert Tour" },
    shortDescription: {
      mn: "Хонгорын элс, Яргайтын хавцлаар аялах гайхалтай боломж.",
      en: "Khongor Sand Dunes and canyon experience.",
    },
    durationDays: 3,
    durationText: { mn: "2 шөнө / 3 өдөр", en: "2 nights / 3 days" },
    priceFrom: 2490000,
    destination: { mn: "Өмнөговь аймаг, Монгол", en: "South Gobi, Mongolia" },
    coverImage:
      "/tours/360_F_287899895_wbOqOFdK60h4j6uizLBessWWsry5r9ue.jpg",
    season: { mn: "6–9 сар", en: "June–September" },
    highlights: {
      mn: ["Хонгорын элсэн манхан", "Тэмээн сафари", "Одтой тэнгэр"],
      en: ["Khongor Dunes", "Camel Safari", "Starry sky view"],
    },
  },

  {
    slug: "khuvsgul-lake-4-days",
    category: "domestic",
    tags: ["popular"],
    title: { mn: "Хөвсгөл 4 өдрийн амралт", en: "Khuvsgul 4-Day Retreat" },
    shortDescription: {
      mn: "Цэнгэг нуур, морин аялал, завины аялал багтсан.",
      en: "Clear lake, horse riding, boat trip included.",
    },
    durationDays: 4,
    durationText: { mn: "3 шөнө / 4 өдөр", en: "3 nights / 4 days" },
    priceFrom: 2950000,
    destination: { mn: "Хөвсгөл, Монгол", en: "Khuvsgul, Mongolia" },
    coverImage:
      "/tours/mongolias-khuvsgul-lake-txovdfqxgjp7je6r.jpg",
    season: { mn: "5–9 сар", en: "May–September" },
    highlights: {
      mn: ["Морин аялал", "Завины аялал", "Цэвэр агаарт амрах"],
      en: ["Horseback riding", "Boat trip", "Relax in nature"],
    },
  },

  {
    slug: "terelj-day-trip",
    category: "domestic",
    tags: ["new"],
    title: {
      mn: "Тэрэлж нэг өдрийн аялал",
      en: "Terelj National Park Day Trip",
    },
    shortDescription: {
      mn: "Мэлхий хад, Чингис хааны хөшөө, морин аялал.",
      en: "Turtle Rock, Chinggis Statue, horse riding.",
    },
    durationDays: 1,
    durationText: { mn: "Өдөрлөг аялал", en: "Day tour" },
    priceFrom: 189000,
    destination: { mn: "Төв аймаг, Монгол", en: "Terelj, Mongolia" },
    coverImage:
      "/tours/view-gorkhi-terelj-national-park-main-valley-autumn_724552-90.jpg",
    season: { mn: "Жил бүр", en: "All year round" },
    highlights: {
      mn: ["Мэлхий хад", "Алхалтын маршрут", "Морин аялал"],
      en: ["Turtle Rock", "Hiking route", "Horse riding"],
    },
  },

  {
    slug: "orkhon-valley-5-days",
    category: "domestic",
    tags: ["special"],
    title: {
      mn: "Орхоны хөндийн 5 өдрийн аялал",
      en: "Orkhon Valley 5-Day Adventure",
    },
    shortDescription: {
      mn: "Усан хүрхрээ, морин аялал, нүүдэлчдийн амьдрал.",
      en: "Waterfall, horse trek & nomadic lifestyle.",
    },
    durationDays: 5,
    durationText: { mn: "4 шөнө / 5 өдөр", en: "4 nights / 5 days" },
    priceFrom: 3150000,
    destination: { mn: "Өвөрхангай, Монгол", en: "Uvurkhangai, Mongolia" },
    coverImage:
      "/tours/HD-wallpaper-orkhon-waterfalls-mongolia-travel-scenery-waterfalls-nature.jpg",
    season: { mn: "6–9 сар", en: "June–September" },
    highlights: {
      mn: ["Орхоны хүрхрээ", "Морин аялал", "Гэр кемп"],
      en: ["Orkhon Waterfall", "Horse trek", "Ger camp"],
    },
  },

  {
    slug: "khustain-park-1-day",
    category: "domestic",
    tags: ["new"],
    title: {
      mn: "Хустайн байгалийн цогцолборт нэг өдрийн аялал",
      en: "Khustai Park Wild Horse Day Trip",
    },
    shortDescription: {
      mn: "Тахь адуу, зэрлэг амьтдын ховордсон төрөл зүйл.",
      en: "Wild horses & protected wildlife species.",
    },
    durationDays: 1,
    durationText: { mn: "Өдөрлөг аялал", en: "1-Day Trip" },
    priceFrom: 165000,
    destination: { mn: "Төв аймаг", en: "Tuv Province" },
    coverImage:
      "/tours/sight_pic_big_2544.jpg",
    season: { mn: "Жил бүр", en: "Year-round" },
    highlights: {
      mn: ["Зэрлэг тахь харах", "Фотограф аялал", "Богино алхалт"],
      en: ["See wild horses", "Photography spots", "Short hiking"],
    },
  },

  // -----------------------------------------------------
  // ✈️ **ГАДААД АЯЛАЛУУД**
  // -----------------------------------------------------

  {
    slug: "seoul-4-days",
    category: "outbound",
    tags: ["popular"],
    title: { mn: "Сөүл хотын 4 өдөр", en: "4-Day Seoul Tour" },
    shortDescription: {
      mn: "Шоппинг, кафе, соёлын аялал.",
      en: "Shopping, cafés & cultural experience.",
    },
    durationDays: 4,
    durationText: { mn: "3 шөнө / 4 өдөр", en: "3 nights / 4 days" },
    priceFrom: 4590000,
    destination: { mn: "Сөүл, БНСУ", en: "Seoul, Korea" },
    coverImage:
      "/tours/1.webp",
    season: { mn: "Жил бүр", en: "All year" },
    highlights: {
      mn: ["Мёндон", "Гванхвамун", "Гудамж хонгор"],
      en: ["Myeongdong", "Gwanghwamun", "Night streets"],
    },
  },

  {
    slug: "phuket-6-days",
    category: "outbound",
    tags: ["special"],
    title: {
      mn: "Пукет далайн амралт 6 өдөр",
      en: "6-Day Phuket Beach Holiday",
    },
    shortDescription: {
      mn: "Цэнхэр далай, арал хоорондын аялал, тай массаж.",
      en: "Blue sea, island tours, Thai massage.",
    },
    durationDays: 6,
    durationText: { mn: "5 шөнө / 6 өдөр", en: "5 nights / 6 days" },
    priceFrom: 5990000,
    destination: { mn: "Тайланд", en: "Thailand" },
    coverImage:
      "/tours/premium_photo-1661962958462-9e52fda9954d.jpg",
    season: { mn: "12–3 сар", en: "Dec–Mar" },
    highlights: {
      mn: ["Арал хоорондын аялал", "Цагаан элстэй эрэг", "Далайн хоол"],
      en: ["Island hopping", "White beaches", "Seafood"],
    },
  },

  {
    slug: "tokyo-5-days",
    category: "outbound",
    tags: ["popular"],
    title: { mn: "Токио 5 өдрийн аялал", en: "Tokyo 5-Day Tour" },
    shortDescription: {
      mn: "Шибүя, Акихабара, Сэнсөжи сүм.",
      en: "Shibuya, Akihabara, Sensoji Temple.",
    },
    durationDays: 5,
    durationText: { mn: "4 шөнө / 5 өдөр", en: "4 nights / 5 days" },
    priceFrom: 8500000,
    destination: { mn: "Япон", en: "Japan" },
    coverImage:
      "/tours/aerial-view-tokyo-cityscape-with-fuji-mountain-japan_335224-148.avif",
    season: { mn: "Жил бүр", en: "All year" },
    highlights: {
      mn: ["Сэнсөжи сүм", "Шибүя кроссинг", "Аниме гудамж"],
      en: ["Sensoji Temple", "Shibuya Crossing", "Anime street"],
    },
  },

  {
    slug: "singapore-3-days",
    category: "outbound",
    tags: ["new"],
    title: { mn: "Сингапур 3 өдрийн аялал", en: "Singapore 3 Days" },
    shortDescription: {
      mn: "Marina Bay, Supertree Grove.",
      en: "Marina Bay, Supertree Grove.",
    },
    durationDays: 3,
    durationText: { mn: "2 шөнө / 3 өдөр", en: "2 nights / 3 days" },
    priceFrom: 7990000,
    destination: { mn: "Сингапур", en: "Singapore" },
    coverImage:
      "/tours/35896-3840x2160-desktop-4k-singapore-background.jpg",
    season: { mn: "Жил бүхэнд", en: "All year" },
    highlights: {
      mn: ["Sentosa арал", "Marina Bay шоу"],
      en: ["Sentosa Island", "Marina Bay show"],
    },
  },

  {
    slug: "hongkong-4-days",
    category: "outbound",
    tags: ["special"],
    title: { mn: "Хонгконг 4 өдрийн аялал", en: "Hong Kong 4-Day Tour" },
    shortDescription: {
      mn: "Виктория Пик, Диснейлэнд, шоппинг.",
      en: "Victoria Peak, Disneyland, shopping.",
    },
    durationDays: 4,
    durationText: { mn: "3 шөнө / 4 өдөр", en: "3 nights / 4 days" },
    priceFrom: 6890000,
    destination: { mn: "Хонгконг", en: "Hong Kong" },
    coverImage:
      "/tours/premium_photo-1664298006973-e98eb94d006c.jpg",
    season: { mn: "10–4 сар", en: "Oct–Apr" },
    highlights: {
      mn: ["Виктория Пик", "Диснейлэнд", "Далайн боомт"],
      en: ["Victoria Peak", "Disneyland", "Harbor view"],
    },
  },

  // -----------------------------------------------------
  // 🏢 **ЗАХИАЛГАТ / CUSTOM АЯЛАЛУУД**
  // -----------------------------------------------------

  {
    slug: "corporate-teambuilding",
    category: "custom",
    tags: ["special"],
    title: {
      mn: "Байгууллагын захиалгат аялал",
      en: "Corporate Teambuilding Retreat",
    },
    shortDescription: {
      mn: "Сургалт, аяллын хөтөлбөрийг байгууллагад тусгайлан зохионо.",
      en: "Fully customized team-building and retreat planning.",
    },
    durationDays: 2,
    durationText: { mn: "2+ өдрөөс", en: "From 2+ days" },
    priceFrom: 0,
    destination: {
      mn: "Монгол / Гадаад",
      en: "Mongolia / International",
    },
    coverImage:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1400",
    season: { mn: "Тохиролцоно", en: "Flexible" },
    highlights: {
      mn: ["Тимбилдинг", "Сургалт", "Багц зохиох"],
      en: ["Teambuilding", "Training", "Full-package planning"],
    },
  },
];

export function findTourBySlug(slug: string): Tour | undefined {
  return TOURS.find((t) => t.slug === slug);
}
