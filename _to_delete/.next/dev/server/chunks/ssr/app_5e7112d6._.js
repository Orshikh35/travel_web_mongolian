module.exports = [
"[project]/app/data/tours.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TOURS",
    ()=>TOURS,
    "findTourBySlug",
    ()=>findTourBySlug
]);
const TOURS = [
    // -----------------------------------------------------
    // 🇲🇳 **ДОТООД АЯЛАЛУУД**
    // -----------------------------------------------------
    {
        slug: "gobi-3-days",
        category: "domestic",
        tags: [
            "popular",
            "special"
        ],
        title: {
            mn: "Говийн 3 өдрийн аялал",
            en: "3-Day Gobi Desert Tour"
        },
        shortDescription: {
            mn: "Хонгорын элс, Яргайтын хавцлаар аялах гайхалтай боломж.",
            en: "Khongor Sand Dunes and canyon experience."
        },
        durationDays: 3,
        durationText: {
            mn: "2 шөнө / 3 өдөр",
            en: "2 nights / 3 days"
        },
        priceFrom: 2490000,
        destination: {
            mn: "Өмнөговь аймаг, Монгол",
            en: "South Gobi, Mongolia"
        },
        coverImage: "/tours/360_F_287899895_wbOqOFdK60h4j6uizLBessWWsry5r9ue.jpg",
        season: {
            mn: "6–9 сар",
            en: "June–September"
        },
        highlights: {
            mn: [
                "Хонгорын элсэн манхан",
                "Тэмээн сафари",
                "Одтой тэнгэр"
            ],
            en: [
                "Khongor Dunes",
                "Camel Safari",
                "Starry sky view"
            ]
        }
    },
    {
        slug: "khuvsgul-lake-4-days",
        category: "domestic",
        tags: [
            "popular"
        ],
        title: {
            mn: "Хөвсгөл 4 өдрийн амралт",
            en: "Khuvsgul 4-Day Retreat"
        },
        shortDescription: {
            mn: "Цэнгэг нуур, морин аялал, завины аялал багтсан.",
            en: "Clear lake, horse riding, boat trip included."
        },
        durationDays: 4,
        durationText: {
            mn: "3 шөнө / 4 өдөр",
            en: "3 nights / 4 days"
        },
        priceFrom: 2950000,
        destination: {
            mn: "Хөвсгөл, Монгол",
            en: "Khuvsgul, Mongolia"
        },
        coverImage: "/tours/mongolias-khuvsgul-lake-txovdfqxgjp7je6r.jpg",
        season: {
            mn: "5–9 сар",
            en: "May–September"
        },
        highlights: {
            mn: [
                "Морин аялал",
                "Завины аялал",
                "Цэвэр агаарт амрах"
            ],
            en: [
                "Horseback riding",
                "Boat trip",
                "Relax in nature"
            ]
        }
    },
    {
        slug: "terelj-day-trip",
        category: "domestic",
        tags: [
            "new"
        ],
        title: {
            mn: "Тэрэлж нэг өдрийн аялал",
            en: "Terelj National Park Day Trip"
        },
        shortDescription: {
            mn: "Мэлхий хад, Чингис хааны хөшөө, морин аялал.",
            en: "Turtle Rock, Chinggis Statue, horse riding."
        },
        durationDays: 1,
        durationText: {
            mn: "Өдөрлөг аялал",
            en: "Day tour"
        },
        priceFrom: 189000,
        destination: {
            mn: "Төв аймаг, Монгол",
            en: "Terelj, Mongolia"
        },
        coverImage: "/tours/view-gorkhi-terelj-national-park-main-valley-autumn_724552-90.jpg",
        season: {
            mn: "Жил бүр",
            en: "All year round"
        },
        highlights: {
            mn: [
                "Мэлхий хад",
                "Алхалтын маршрут",
                "Морин аялал"
            ],
            en: [
                "Turtle Rock",
                "Hiking route",
                "Horse riding"
            ]
        }
    },
    {
        slug: "orkhon-valley-5-days",
        category: "domestic",
        tags: [
            "special"
        ],
        title: {
            mn: "Орхоны хөндийн 5 өдрийн аялал",
            en: "Orkhon Valley 5-Day Adventure"
        },
        shortDescription: {
            mn: "Усан хүрхрээ, морин аялал, нүүдэлчдийн амьдрал.",
            en: "Waterfall, horse trek & nomadic lifestyle."
        },
        durationDays: 5,
        durationText: {
            mn: "4 шөнө / 5 өдөр",
            en: "4 nights / 5 days"
        },
        priceFrom: 3150000,
        destination: {
            mn: "Өвөрхангай, Монгол",
            en: "Uvurkhangai, Mongolia"
        },
        coverImage: "/tours/HD-wallpaper-orkhon-waterfalls-mongolia-travel-scenery-waterfalls-nature.jpg",
        season: {
            mn: "6–9 сар",
            en: "June–September"
        },
        highlights: {
            mn: [
                "Орхоны хүрхрээ",
                "Морин аялал",
                "Гэр кемп"
            ],
            en: [
                "Orkhon Waterfall",
                "Horse trek",
                "Ger camp"
            ]
        }
    },
    {
        slug: "khustain-park-1-day",
        category: "domestic",
        tags: [
            "new"
        ],
        title: {
            mn: "Хустайн байгалийн цогцолборт нэг өдрийн аялал",
            en: "Khustai Park Wild Horse Day Trip"
        },
        shortDescription: {
            mn: "Тахь адуу, зэрлэг амьтдын ховордсон төрөл зүйл.",
            en: "Wild horses & protected wildlife species."
        },
        durationDays: 1,
        durationText: {
            mn: "Өдөрлөг аялал",
            en: "1-Day Trip"
        },
        priceFrom: 165000,
        destination: {
            mn: "Төв аймаг",
            en: "Tuv Province"
        },
        coverImage: "/tours/sight_pic_big_2544.jpg",
        season: {
            mn: "Жил бүр",
            en: "Year-round"
        },
        highlights: {
            mn: [
                "Зэрлэг тахь харах",
                "Фотограф аялал",
                "Богино алхалт"
            ],
            en: [
                "See wild horses",
                "Photography spots",
                "Short hiking"
            ]
        }
    },
    // -----------------------------------------------------
    // ✈️ **ГАДААД АЯЛАЛУУД**
    // -----------------------------------------------------
    {
        slug: "seoul-4-days",
        category: "outbound",
        tags: [
            "popular"
        ],
        title: {
            mn: "Сөүл хотын 4 өдөр",
            en: "4-Day Seoul Tour"
        },
        shortDescription: {
            mn: "Шоппинг, кафе, соёлын аялал.",
            en: "Shopping, cafés & cultural experience."
        },
        durationDays: 4,
        durationText: {
            mn: "3 шөнө / 4 өдөр",
            en: "3 nights / 4 days"
        },
        priceFrom: 4590000,
        destination: {
            mn: "Сөүл, БНСУ",
            en: "Seoul, Korea"
        },
        coverImage: "/tours/1.webp",
        season: {
            mn: "Жил бүр",
            en: "All year"
        },
        highlights: {
            mn: [
                "Мёндон",
                "Гванхвамун",
                "Гудамж хонгор"
            ],
            en: [
                "Myeongdong",
                "Gwanghwamun",
                "Night streets"
            ]
        }
    },
    {
        slug: "phuket-6-days",
        category: "outbound",
        tags: [
            "special"
        ],
        title: {
            mn: "Пукет далайн амралт 6 өдөр",
            en: "6-Day Phuket Beach Holiday"
        },
        shortDescription: {
            mn: "Цэнхэр далай, арал хоорондын аялал, тай массаж.",
            en: "Blue sea, island tours, Thai massage."
        },
        durationDays: 6,
        durationText: {
            mn: "5 шөнө / 6 өдөр",
            en: "5 nights / 6 days"
        },
        priceFrom: 5990000,
        destination: {
            mn: "Тайланд",
            en: "Thailand"
        },
        coverImage: "/tours/premium_photo-1661962958462-9e52fda9954d.jpg",
        season: {
            mn: "12–3 сар",
            en: "Dec–Mar"
        },
        highlights: {
            mn: [
                "Арал хоорондын аялал",
                "Цагаан элстэй эрэг",
                "Далайн хоол"
            ],
            en: [
                "Island hopping",
                "White beaches",
                "Seafood"
            ]
        }
    },
    {
        slug: "tokyo-5-days",
        category: "outbound",
        tags: [
            "popular"
        ],
        title: {
            mn: "Токио 5 өдрийн аялал",
            en: "Tokyo 5-Day Tour"
        },
        shortDescription: {
            mn: "Шибүя, Акихабара, Сэнсөжи сүм.",
            en: "Shibuya, Akihabara, Sensoji Temple."
        },
        durationDays: 5,
        durationText: {
            mn: "4 шөнө / 5 өдөр",
            en: "4 nights / 5 days"
        },
        priceFrom: 8500000,
        destination: {
            mn: "Япон",
            en: "Japan"
        },
        coverImage: "/tours/aerial-view-tokyo-cityscape-with-fuji-mountain-japan_335224-148.avif",
        season: {
            mn: "Жил бүр",
            en: "All year"
        },
        highlights: {
            mn: [
                "Сэнсөжи сүм",
                "Шибүя кроссинг",
                "Аниме гудамж"
            ],
            en: [
                "Sensoji Temple",
                "Shibuya Crossing",
                "Anime street"
            ]
        }
    },
    {
        slug: "singapore-3-days",
        category: "outbound",
        tags: [
            "new"
        ],
        title: {
            mn: "Сингапур 3 өдрийн аялал",
            en: "Singapore 3 Days"
        },
        shortDescription: {
            mn: "Marina Bay, Supertree Grove.",
            en: "Marina Bay, Supertree Grove."
        },
        durationDays: 3,
        durationText: {
            mn: "2 шөнө / 3 өдөр",
            en: "2 nights / 3 days"
        },
        priceFrom: 7990000,
        destination: {
            mn: "Сингапур",
            en: "Singapore"
        },
        coverImage: "/tours/35896-3840x2160-desktop-4k-singapore-background.jpg",
        season: {
            mn: "Жил бүхэнд",
            en: "All year"
        },
        highlights: {
            mn: [
                "Sentosa арал",
                "Marina Bay шоу"
            ],
            en: [
                "Sentosa Island",
                "Marina Bay show"
            ]
        }
    },
    {
        slug: "hongkong-4-days",
        category: "outbound",
        tags: [
            "special"
        ],
        title: {
            mn: "Хонгконг 4 өдрийн аялал",
            en: "Hong Kong 4-Day Tour"
        },
        shortDescription: {
            mn: "Виктория Пик, Диснейлэнд, шоппинг.",
            en: "Victoria Peak, Disneyland, shopping."
        },
        durationDays: 4,
        durationText: {
            mn: "3 шөнө / 4 өдөр",
            en: "3 nights / 4 days"
        },
        priceFrom: 6890000,
        destination: {
            mn: "Хонгконг",
            en: "Hong Kong"
        },
        coverImage: "/tours/premium_photo-1664298006973-e98eb94d006c.jpg",
        season: {
            mn: "10–4 сар",
            en: "Oct–Apr"
        },
        highlights: {
            mn: [
                "Виктория Пик",
                "Диснейлэнд",
                "Далайн боомт"
            ],
            en: [
                "Victoria Peak",
                "Disneyland",
                "Harbor view"
            ]
        }
    },
    // -----------------------------------------------------
    // 🏢 **ЗАХИАЛГАТ / CUSTOM АЯЛАЛУУД**
    // -----------------------------------------------------
    {
        slug: "corporate-teambuilding",
        category: "custom",
        tags: [
            "special"
        ],
        title: {
            mn: "Байгууллагын захиалгат аялал",
            en: "Corporate Teambuilding Retreat"
        },
        shortDescription: {
            mn: "Сургалт, аяллын хөтөлбөрийг байгууллагад тусгайлан зохионо.",
            en: "Fully customized team-building and retreat planning."
        },
        durationDays: 2,
        durationText: {
            mn: "2+ өдрөөс",
            en: "From 2+ days"
        },
        priceFrom: 0,
        destination: {
            mn: "Монгол / Гадаад",
            en: "Mongolia / International"
        },
        coverImage: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1400",
        season: {
            mn: "Тохиролцоно",
            en: "Flexible"
        },
        highlights: {
            mn: [
                "Тимбилдинг",
                "Сургалт",
                "Багц зохиох"
            ],
            en: [
                "Teambuilding",
                "Training",
                "Full-package planning"
            ]
        }
    }
];
function findTourBySlug(slug) {
    return TOURS.find((t)=>t.slug === slug);
}
}),
"[project]/app/tours/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/context/LanguageContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ui$2d$texts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/ui-texts.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$tours$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/data/tours.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
const ToursPage = ()=>{
    const { lang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const t = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ui$2d$texts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXTS"][lang].tourPage;
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("all");
    const categories = [
        "all",
        "domestic",
        "outbound",
        "custom"
    ];
    const filteredTours = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$2f$tours$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TOURS"].filter((tour)=>{
            const matchesCategory = activeCategory === "all" || tour.category === activeCategory;
            const query = search.toLowerCase();
            const haystack = [
                tour.title[lang],
                tour.shortDescription[lang],
                tour.destination[lang],
                ...tour.highlights[lang]
            ].join(" ").toLowerCase();
            return matchesCategory && haystack.includes(query);
        });
    }, [
        activeCategory,
        lang,
        search
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "overflow-hidden pt-28",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "section-padding",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container-shell",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-12 max-w-3xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "section-eyebrow",
                                children: t.eyebrow
                            }, void 0, false, {
                                fileName: "[project]/app/tours/page.tsx",
                                lineNumber: 43,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "section-title text-balance",
                                children: t.title
                            }, void 0, false, {
                                fileName: "[project]/app/tours/page.tsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "section-copy mt-6",
                                children: t.description
                            }, void 0, false, {
                                fileName: "[project]/app/tours/page.tsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/tours/page.tsx",
                        lineNumber: 42,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glass-panel-strong rounded-[34px] p-5 sm:p-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: t.searchPlaceholder,
                                            value: search,
                                            onChange: (event)=>setSearch(event.target.value),
                                            className: "w-full rounded-[20px] border border-[#10231d]/10 bg-white px-5 py-4 pr-12 text-sm text-[#10231d] outline-none transition focus:border-[#0f766e]/45"
                                        }, void 0, false, {
                                            fileName: "[project]/app/tours/page.tsx",
                                            lineNumber: 51,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#5d6b65]",
                                            children: "⌕"
                                        }, void 0, false, {
                                            fileName: "[project]/app/tours/page.tsx",
                                            lineNumber: 58,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/tours/page.tsx",
                                    lineNumber: 50,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-2",
                                    children: categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>setActiveCategory(category),
                                            className: `rounded-full px-4 py-3 text-sm font-medium transition ${activeCategory === category ? "bg-[#10231d] text-white shadow-[0_18px_34px_rgba(16,35,29,0.16)]" : "bg-white text-[#10231d]/72 hover:bg-white/80"}`,
                                            children: t.categories[category]
                                        }, category, false, {
                                            fileName: "[project]/app/tours/page.tsx",
                                            lineNumber: 63,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/app/tours/page.tsx",
                                    lineNumber: 61,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/tours/page.tsx",
                            lineNumber: 49,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/tours/page.tsx",
                        lineNumber: 48,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    filteredTours.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3",
                        children: filteredTours.map((tour, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].article, {
                                initial: {
                                    opacity: 0,
                                    y: 24
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    delay: index * 0.04
                                },
                                className: "premium-card overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative h-72",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                src: tour.coverImage,
                                                alt: tour.title[lang],
                                                fill: true,
                                                className: "object-cover"
                                            }, void 0, false, {
                                                fileName: "[project]/app/tours/page.tsx",
                                                lineNumber: 91,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-gradient-to-t from-[#10231d]/80 via-transparent to-transparent"
                                            }, void 0, false, {
                                                fileName: "[project]/app/tours/page.tsx",
                                                lineNumber: 92,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute left-5 top-5 rounded-full bg-white/84 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#0f766e]",
                                                children: t.trustedLabel
                                            }, void 0, false, {
                                                fileName: "[project]/app/tours/page.tsx",
                                                lineNumber: 93,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/tours/page.tsx",
                                        lineNumber: 90,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-4 flex items-center justify-between gap-4 text-sm text-[#5d6b65]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: tour.destination[lang]
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/tours/page.tsx",
                                                        lineNumber: 100,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            tour.durationDays,
                                                            " ",
                                                            t.days
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/tours/page.tsx",
                                                        lineNumber: 101,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/tours/page.tsx",
                                                lineNumber: 99,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-2xl font-semibold tracking-[-0.03em] text-[#10231d]",
                                                children: tour.title[lang]
                                            }, void 0, false, {
                                                fileName: "[project]/app/tours/page.tsx",
                                                lineNumber: 104,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-3 text-sm leading-7 text-[#5d6b65]",
                                                children: tour.shortDescription[lang]
                                            }, void 0, false, {
                                                fileName: "[project]/app/tours/page.tsx",
                                                lineNumber: 105,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-5 flex flex-wrap gap-2",
                                                children: tour.highlights[lang].slice(0, 3).map((highlight)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "rounded-full bg-[#f6eee4] px-3 py-2 text-xs font-medium text-[#9a5c21]",
                                                        children: highlight
                                                    }, highlight, false, {
                                                        fileName: "[project]/app/tours/page.tsx",
                                                        lineNumber: 109,
                                                        columnNumber: 25
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/app/tours/page.tsx",
                                                lineNumber: 107,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-6 flex items-end justify-between border-t border-[#10231d]/8 pt-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs uppercase tracking-[0.22em] text-[#5d6b65]",
                                                                children: t.startingFrom
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/tours/page.tsx",
                                                                lineNumber: 120,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mt-2 text-2xl font-semibold text-[#10231d]",
                                                                children: [
                                                                    tour.priceFrom.toLocaleString(),
                                                                    "₮"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/tours/page.tsx",
                                                                lineNumber: 121,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/tours/page.tsx",
                                                        lineNumber: 119,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: `/tours/${tour.slug}`,
                                                        className: "text-sm font-semibold text-[#0f766e]",
                                                        children: [
                                                            t.viewDetails,
                                                            " →"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/tours/page.tsx",
                                                        lineNumber: 125,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/tours/page.tsx",
                                                lineNumber: 118,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/tours/page.tsx",
                                        lineNumber: 98,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, tour.slug, true, {
                                fileName: "[project]/app/tours/page.tsx",
                                lineNumber: 83,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/app/tours/page.tsx",
                        lineNumber: 81,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-10 premium-card p-10 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-semibold text-[#10231d]",
                                children: t.noResultTitle
                            }, void 0, false, {
                                fileName: "[project]/app/tours/page.tsx",
                                lineNumber: 135,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#5d6b65]",
                                children: t.noResultDescription
                            }, void 0, false, {
                                fileName: "[project]/app/tours/page.tsx",
                                lineNumber: 136,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/tours/page.tsx",
                        lineNumber: 134,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/tours/page.tsx",
                lineNumber: 41,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/tours/page.tsx",
            lineNumber: 40,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/tours/page.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ToursPage;
}),
];

//# sourceMappingURL=app_5e7112d6._.js.map