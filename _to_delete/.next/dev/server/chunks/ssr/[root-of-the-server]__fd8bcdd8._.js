module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/app/context/LanguageContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageProvider",
    ()=>LanguageProvider,
    "useLanguage",
    ()=>useLanguage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const LANGUAGE_STORAGE_KEY = "language";
const listeners = new Set();
const emitLanguageChange = ()=>{
    listeners.forEach((listener)=>listener());
};
const readStoredLanguage = ()=>{
    if ("TURBOPACK compile-time truthy", 1) {
        return "en";
    }
    //TURBOPACK unreachable
    ;
    const savedLang = undefined;
};
const subscribe = (listener)=>{
    listeners.add(listener);
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return ()=>{
        listeners.delete(listener);
    };
};
const LanguageProvider = ({ children })=>{
    const lang = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(subscribe, readStoredLanguage, ()=>"en");
    const setLang = (newLang)=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
    };
    const toggleLang = ()=>{
        setLang(lang === "en" ? "mn" : "en");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
        value: {
            lang,
            setLang,
            toggleLang
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/app/context/LanguageContext.tsx",
        lineNumber: 67,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
const useLanguage = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within LanguageProvider");
    }
    return context;
};
}),
"[project]/app/components/LanguageSwitcher.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/context/LanguageContext.tsx [app-ssr] (ecmascript)");
"use client";
;
;
const LanguageSwitcher = ({ dark = false })=>{
    const { lang, toggleLang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: toggleLang,
        type: "button",
        "aria-label": "Switch language",
        className: `inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm font-semibold transition ${dark ? "border-white/18 bg-white/10 text-white hover:bg-white/16" : "border-[#10231d]/12 bg-white text-[#10231d] hover:bg-[#f8f4ed]"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-base leading-none",
                children: lang === "en" ? "🇬🇧" : "🇲🇳"
            }, void 0, false, {
                fileName: "[project]/app/components/LanguageSwitcher.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: lang === "en" ? "EN" : "MN"
            }, void 0, false, {
                fileName: "[project]/app/components/LanguageSwitcher.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/LanguageSwitcher.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = LanguageSwitcher;
}),
"[project]/app/ui-texts.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TEXTS",
    ()=>TEXTS,
    "getText",
    ()=>getText
]);
const TEXTS = {
    mn: {
        meta: {
            title: "Nomad Horizon | Аяллаа тайван, итгэлтэй төлөвлөе",
            description: "Монгол болон гадаад аяллын талаар ойлгомжтой, цэгцтэй, итгэлтэй мэдээлэл авах аяллын веб."
        },
        navbar: {
            brand: "Nomad Horizon",
            links: [
                {
                    label: "Нүүр",
                    href: "/"
                },
                {
                    label: "Аяллууд",
                    href: "/tours"
                },
                {
                    label: "Бидний тухай",
                    href: "/about"
                },
                {
                    label: "Холбоо барих",
                    href: "/contact"
                }
            ],
            login: "Нэвтрэх",
            register: "Бүртгүүлэх",
            cta: "Захиалга эхлүүлэх"
        },
        hero: {
            eyebrow: "Монголын үзэсгэлэнт газрууд, аяллын санаа, хэрэгтэй мэдээлэл нэг дор",
            title: "Аяллаа илүү ойлгомжтой, илүү итгэлтэйгээр сонго",
            description: "Ямар газар үзэх, хэд хоног явах, хэнд тохирох, юуг анхаарах гээд хэрэгтэй бүх мэдээллийг энгийн байдлаар хүргэж байна.",
            primaryCta: "Аяллын мэдээлэл үзэх",
            secondaryCta: "Зөвлөхтэй холбогдох",
            stats: [
                {
                    value: "98%",
                    label: "Эерэг сэтгэгдэл"
                },
                {
                    value: "24/7",
                    label: "Холбогдох боломж"
                },
                {
                    value: "120+",
                    label: "Судалж үзэх маршрут"
                }
            ],
            floatingCards: [
                {
                    title: "Tailor-made itineraries",
                    description: "Таны төсөв, хугацаа, сонирхолд яг таарсан маршрут."
                },
                {
                    title: "Trusted local partners",
                    description: "Шалгарсан бааз, хөтөч, тээврийн сүлжээ."
                }
            ]
        },
        destinations: {
            eyebrow: "Онцлох газрууд",
            title: "Хүмүүс хамгийн их сонирхдог чиглэлүүд",
            description: "Амралт, адал явдал, гэр бүлийн аялал, зураг авалт гээд өөр өөр зорилгод тохирох газруудыг эндээс үзээрэй."
        },
        tours: {
            eyebrow: "Санал болгох аяллууд",
            title: "Олон хүн сонгодог аяллууд",
            subtitle: "Чиглэл, үргэлжлэх хугацаа, онцлог, үнийг нь харьцуулж үзэхэд амар байхаар нэгтгэлээ.",
            cta: "Бүх аялал харах"
        },
        features: {
            eyebrow: "Яагаад хүмүүс биднийг сонгодог вэ",
            title: "Аяллын мэдээллийг ойлгомжтой, найдвартай хүргэнэ",
            description: "Аялал гэдэг зүгээр нэг гоё зураг биш. Хүн бүрт хэрэгтэй бодит мэдээлэл, зөв тайлбар, найдвартай харилцаа хэрэгтэй.",
            items: [
                {
                    title: "Тодорхой маршрут",
                    description: "Хэд хоног, ямар дарааллаар явах, юу үзэхийг ойлгоход амар байдлаар танилцуулна."
                },
                {
                    title: "Хэрэгтэй зөвлөгөө",
                    description: "Гэр бүл, найзууд, баг хамт олон гээд хэнд тохирохыг энгийн хэлээр тайлбарлана."
                },
                {
                    title: "Ил тод мэдээлэл",
                    description: "Юу багтах, юуг тусад нь тооцох, ямар зүйлсийг урьдчилж мэдэх хэрэгтэйг тодорхой хэлж өгнө."
                },
                {
                    title: "Хурдан холбоо",
                    description: "Асуух зүйл гарвал хаана, хэнтэй холбогдохоо ойлгомжтой харах боломжтой."
                }
            ]
        },
        reviews: {
            eyebrow: "Үйлчлүүлэгчдийн сэтгэгдэл",
            title: "Бидэнтэй аялсан хүмүүсийн бодит сэтгэгдэл",
            description: "Ихэнх хүмүүсийн хувьд хамгийн чухал нь ойлгомжтой харилцаа, найдвартай зохион байгуулалт, тайван мэдрэмж байдаг."
        },
        newsletter: {
            title: "Шинэ аяллын мэдээллээ авч байгаарай",
            description: "Шинэ чиглэл, аяллын санал, улирлын онцлох мэдээллийг и-мэйлээр хүлээж аваарай.",
            placeholder: "И-мэйл хаягаа оруулна уу",
            button: "Бүртгүүлэх",
            note: "Хэт их мессеж биш, хэрэгтэй мэдээлэл л илгээнэ."
        },
        footer: {
            description: "Nomad Horizon бол аяллын мэдээллийг ойлгомжтой, дулаан, хүний хэлээр хүргэхийг зорьдог аяллын баг.",
            officeTitle: "Оффис",
            officeValue: "Улаанбаатар, Сүхбаатар дүүрэг, Сөүлийн гудамж 18",
            contactTitle: "Холбоо барих",
            contactValue: [
                "hello@nomadhorizon.mn",
                "+976 7711 2288",
                "Mon-Sun 09:00-21:00"
            ],
            quickLinksTitle: "Хурдан холбоос",
            quickLinks: [
                {
                    label: "Аяллын багцууд",
                    href: "/tours"
                },
                {
                    label: "Бидний тухай",
                    href: "/about"
                },
                {
                    label: "Холбоо барих",
                    href: "/contact"
                },
                {
                    label: "Аяллын зөвлөгөө",
                    href: "/contact"
                }
            ],
            newsletterTitle: "Мэдээлэлтэй бай",
            newsletterDescription: "Шинэ аялал, шинэ чиглэл, хэрэгтэй саналуудыг эхэлж аваарай.",
            newsletterPlaceholder: "Имэйл",
            newsletterButton: "Бүртгүүлэх",
            copyright: "© 2026 Nomad Horizon. Бүх эрх хамгаалагдсан."
        },
        about: {
            eyebrow: "Nomad Horizon-ийн тухай",
            title: "Аяллыг илүү ойлгомжтой, ойр байдлаар хүргэхийг хүсдэг баг",
            description: "Бидний хувьд аялал гэдэг зөвхөн очих газар биш. Хүн тухайн газраа ойлгож, итгэлтэй сонгож, тайван аялж чаддаг байх нь чухал.",
            metrics: [
                {
                    value: "12+",
                    label: "жилийн туршлага"
                },
                {
                    value: "4.9/5",
                    label: "дундаж үнэлгээ"
                },
                {
                    value: "38",
                    label: "байнгын түнш маршрут"
                }
            ],
            valuesTitle: "Бидний зарчим",
            valuesDescription: "Сайхан харагдах нь хангалтгүй. Хэрэглэгчид ойлгомжтой, үнэн, хэрэгтэй мэдээлэл харах ёстой гэж бид үздэг.",
            values: [
                {
                    title: "Хүнд ойр харилцаа",
                    description: "Хүн бүрийн хэрэгцээ өөр учраас бид аяллыг хэт ерөнхий биш, илүү бодит байдлаар тайлбарлахыг хичээдэг."
                },
                {
                    title: "Бодит мэдээлэл",
                    description: "Очих газрын улирал, онцлог, нөхцөл, уур амьсгалыг хэрэгтэй өнцгөөс нь танилцуулна."
                },
                {
                    title: "Нягт анхаарал",
                    description: "Жижиг detail хүртэл анхаарснаар хэрэглэгч илүү итгэлтэй шийдвэр гаргадаг гэж бид боддог."
                }
            ],
            teamTitle: "Энэ ажлыг хийж байгаа хүмүүс",
            teamDescription: "Бид аялал, хэрэглэгчийн туршлага, контент, харилцааг нэг баг болж хамтдаа хариуцдаг.",
            team: [
                {
                    name: "Ариун-Эрдэнэ",
                    role: "Lead Travel Curator"
                },
                {
                    name: "Төгөлдөр",
                    role: "Operations & Logistics"
                },
                {
                    name: "Номин",
                    role: "Guest Experience Advisor"
                },
                {
                    name: "Тэлмэн",
                    role: "Destination Specialist"
                }
            ]
        },
        contact: {
            eyebrow: "Холбоо барих",
            title: "Асуух зүйл байвал бидэнтэй шууд холбогдоорой",
            description: "Гэр бүлийн аялал, найз нөхдийн trip, багийн аялал эсвэл зүгээр л мэдээлэл асуух бол чөлөөтэй бичээрэй. Бид ойлгомжтой хариу өгнө.",
            formTitle: "Мессеж илгээх",
            formDescription: "Юу сонирхож байгаагаа, хэдийд явах талаар бодож байгаагаа бичээд үлдээгээрэй. Бид аль болох ойлгомжтой зөвлөгөө өгнө.",
            fields: {
                name: "Нэр",
                email: "И-мэйл",
                subject: "Гарчиг",
                message: "Аяллын дэлгэрэнгүй хүсэлт"
            },
            button: "Хүсэлт илгээх",
            infoCards: [
                {
                    title: "Шууд холбоо",
                    lines: [
                        "hello@nomadhorizon.mn",
                        "+976 7711 2288",
                        "WhatsApp / WeChat available"
                    ]
                },
                {
                    title: "Оффисын цаг",
                    lines: [
                        "Даваа - Ням",
                        "09:00 - 21:00",
                        "Яаралтай тусламж 24/7"
                    ]
                },
                {
                    title: "Оффис байршил",
                    lines: [
                        "Ulaanbaatar downtown",
                        "Private consultation by appointment",
                        "On-site travel briefing available"
                    ]
                }
            ]
        },
        tourPage: {
            eyebrow: "Аяллын сан",
            title: "Өөрт тохирох аяллаа амархан олоорой",
            description: "Чиглэл, хугацаа, онцлог, төсөв зэргээр нь харьцуулж үзээд өөрт тохирох аяллаа сонгоорой.",
            searchPlaceholder: "Чиглэл, аяллын нэр, улс, онцлох үгээр хайх...",
            noResultTitle: "Илэрц олдсонгүй",
            noResultDescription: "Өөр түлхүүр үгээр хайж үзэх эсвэл бидэнтэй холбогдоод тохирсон санал авч болно.",
            categories: {
                all: "Бүгд",
                domestic: "Дотоод",
                outbound: "Гадаад",
                custom: "Захиалгат"
            },
            startingFrom: "Эхлэх үнэ",
            viewDetails: "Дэлгэрэнгүй үзэх",
            days: "хоног",
            trustedLabel: "Баталгаажсан багц"
        }
    },
    en: {
        meta: {
            title: "Nomad Horizon | Travel made simpler and more trustworthy",
            description: "A clear and trustworthy travel website with simple explanations, helpful route details, and a friendlier way to explore Mongolia."
        },
        navbar: {
            brand: "Nomad Horizon",
            links: [
                {
                    label: "Home",
                    href: "/"
                },
                {
                    label: "Tours",
                    href: "/tours"
                },
                {
                    label: "About",
                    href: "/about"
                },
                {
                    label: "Contact",
                    href: "/contact"
                }
            ],
            login: "Log in",
            register: "Create account",
            cta: "Start booking"
        },
        hero: {
            eyebrow: "Beautiful places, helpful travel ideas, and clear information in one place",
            title: "Choose your trip with more clarity and more confidence",
            description: "We share the kind of travel information people actually need: where to go, how long to stay, what to expect, and which trip feels right for them.",
            primaryCta: "Explore travel info",
            secondaryCta: "Talk to an advisor",
            stats: [
                {
                    value: "98%",
                    label: "positive feedback"
                },
                {
                    value: "24/7",
                    label: "easy to reach"
                },
                {
                    value: "120+",
                    label: "routes to explore"
                }
            ],
            floatingCards: [
                {
                    title: "Tailor-made itineraries",
                    description: "Trips designed around your timing, budget, and travel style."
                },
                {
                    title: "Trusted local partners",
                    description: "Reliable camps, guides, hotels, and transport on every route."
                }
            ]
        },
        destinations: {
            eyebrow: "Highlighted destinations",
            title: "Places travelers ask about the most",
            description: "From quiet nature escapes to photo-friendly routes and family trips, these are the places people most often want to explore."
        },
        tours: {
            eyebrow: "Recommended trips",
            title: "Trips people come back to again and again",
            subtitle: "Compare route style, duration, highlights, and pricing in a way that feels simple and easy to follow.",
            cta: "View all tours"
        },
        features: {
            eyebrow: "Why people trust us",
            title: "Travel information that feels clear, calm, and reliable",
            description: "A travel website should not feel confusing. It should help people understand their options, feel comfortable, and make decisions with confidence.",
            items: [
                {
                    title: "Clear routes",
                    description: "We explain where the trip goes, how long it takes, and what kind of experience it offers."
                },
                {
                    title: "Helpful guidance",
                    description: "Whether you are traveling as a couple, a family, or a group, the information is written to be easy to relate to."
                },
                {
                    title: "Honest details",
                    description: "We try to make expectations simple by showing what matters most in plain language."
                },
                {
                    title: "Easy contact",
                    description: "If someone has a question, they should know exactly where to go and who to ask."
                }
            ]
        },
        reviews: {
            eyebrow: "Guest feedback",
            title: "What travelers genuinely say after the trip",
            description: "The feedback we value most is simple: people felt informed, comfortable, and looked after."
        },
        newsletter: {
            title: "Stay updated on new trips and ideas",
            description: "Get helpful travel ideas, route updates, and seasonal highlights in your inbox.",
            placeholder: "Enter your email",
            button: "Subscribe",
            note: "No spam, just useful updates from time to time."
        },
        footer: {
            description: "Nomad Horizon is a travel team that believes good travel information should feel simple, warm, and trustworthy.",
            officeTitle: "Office",
            officeValue: "18 Seoul Street, Sukhbaatar District, Ulaanbaatar",
            contactTitle: "Contact",
            contactValue: [
                "hello@nomadhorizon.mn",
                "+976 7711 2288",
                "Mon-Sun 09:00-21:00"
            ],
            quickLinksTitle: "Quick links",
            quickLinks: [
                {
                    label: "Tour collection",
                    href: "/tours"
                },
                {
                    label: "About us",
                    href: "/about"
                },
                {
                    label: "Contact",
                    href: "/contact"
                },
                {
                    label: "Travel advice",
                    href: "/contact"
                }
            ],
            newsletterTitle: "Stay informed",
            newsletterDescription: "Be the first to hear about new routes, useful travel ideas, and fresh updates.",
            newsletterPlaceholder: "Email address",
            newsletterButton: "Subscribe",
            copyright: "© 2026 Nomad Horizon. All rights reserved."
        },
        about: {
            eyebrow: "About Nomad Horizon",
            title: "A team that wants travel to feel easier to understand",
            description: "To us, travel is not just about getting from one place to another. It should feel clear, comfortable, and worth looking forward to.",
            metrics: [
                {
                    value: "12+",
                    label: "years of experience"
                },
                {
                    value: "4.9/5",
                    label: "average guest rating"
                },
                {
                    value: "38",
                    label: "trusted route partners"
                }
            ],
            valuesTitle: "What guides our work",
            valuesDescription: "Good design matters, but clear communication, honest details, and human warmth matter even more.",
            values: [
                {
                    title: "Human first",
                    description: "People feel more comfortable when information sounds real, useful, and easy to follow."
                },
                {
                    title: "Real context",
                    description: "We try to explain places with the practical detail travelers actually want to know."
                },
                {
                    title: "Care in the details",
                    description: "Small details create trust, so we pay attention to the things people often worry about."
                }
            ],
            teamTitle: "The people behind the work",
            teamDescription: "We work across travel planning, content, coordination, and guest support to make the experience feel more human.",
            team: [
                {
                    name: "Ariun-Erdene",
                    role: "Lead Travel Curator"
                },
                {
                    name: "Tuguldur",
                    role: "Operations & Logistics"
                },
                {
                    name: "Nomin",
                    role: "Guest Experience Advisor"
                },
                {
                    name: "Telmen",
                    role: "Destination Specialist"
                }
            ]
        },
        contact: {
            eyebrow: "Contact us",
            title: "If you have a question, just message us",
            description: "Whether you are planning a family trip, a group tour, or simply comparing options, we are happy to help with clear answers.",
            formTitle: "Send a message",
            formDescription: "Tell us what kind of trip you have in mind and we will reply with practical, easy-to-understand guidance.",
            fields: {
                name: "Full name",
                email: "Email",
                subject: "Subject",
                message: "Travel details"
            },
            button: "Send inquiry",
            infoCards: [
                {
                    title: "Direct contact",
                    lines: [
                        "hello@nomadhorizon.mn",
                        "+976 7711 2288",
                        "WhatsApp / WeChat available"
                    ]
                },
                {
                    title: "Office hours",
                    lines: [
                        "Monday - Sunday",
                        "09:00 - 21:00",
                        "Emergency support 24/7"
                    ]
                },
                {
                    title: "Consultation space",
                    lines: [
                        "Ulaanbaatar downtown",
                        "Private meetings by appointment",
                        "On-site travel briefing available"
                    ]
                }
            ]
        },
        tourPage: {
            eyebrow: "Tour library",
            title: "Find a trip that feels right for you",
            description: "Browse trips by destination, duration, and style to see what fits you best.",
            searchPlaceholder: "Search by destination, tour name, country, or keyword...",
            noResultTitle: "No matching trips found",
            noResultDescription: "Try a different search, or contact us and we will help you find something that fits.",
            categories: {
                all: "All",
                domestic: "Domestic",
                outbound: "Outbound",
                custom: "Custom"
            },
            startingFrom: "Starting from",
            viewDetails: "View details",
            days: "days",
            trustedLabel: "Verified package"
        }
    }
};
const getText = (lang, key)=>TEXTS[lang][key];
}),
"[project]/app/components/Navbar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$LanguageSwitcher$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/LanguageSwitcher.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/context/LanguageContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ui$2d$texts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/ui-texts.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
const Navbar = ()=>{
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const { lang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const t = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ui$2d$texts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXTS"][lang];
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto flex w-full max-w-7xl items-center justify-between rounded-full border border-white/18 bg-black/28 px-5 py-4 text-white shadow-[0_18px_50px_rgba(0,0,0,0.24)] backdrop-blur-xl sm:px-7 lg:relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex h-9 w-9 items-center justify-center rounded-full bg-white/12 text-sm font-semibold text-white",
                                children: "◌"
                            }, void 0, false, {
                                fileName: "[project]/app/components/Navbar.tsx",
                                lineNumber: 21,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden sm:block",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-base font-semibold tracking-[-0.02em]",
                                    children: t.navbar.brand
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Navbar.tsx",
                                    lineNumber: 25,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/components/Navbar.tsx",
                                lineNumber: 24,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Navbar.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "hidden items-center gap-2 rounded-full border border-white/14 bg-white/8 px-2 py-2 lg:absolute lg:left-1/2 lg:flex lg:-translate-x-1/2",
                        children: t.navbar.links.map((link)=>{
                            const active = pathname === link.href;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: link.href,
                                className: `rounded-full px-5 py-2.5 text-sm font-medium tracking-[-0.01em] transition ${active ? "bg-white text-[#10231d]" : "text-white/88 hover:bg-white/10 hover:text-white"}`,
                                children: link.label
                            }, `${link.href}-${link.label}`, false, {
                                fileName: "[project]/app/components/Navbar.tsx",
                                lineNumber: 33,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0));
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/components/Navbar.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden items-center gap-3 lg:flex",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$LanguageSwitcher$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            dark: true
                        }, void 0, false, {
                            fileName: "[project]/app/components/Navbar.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/components/Navbar.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/16 bg-white/8 text-white lg:hidden",
                        onClick: ()=>setIsOpen((current)=>!current),
                        "aria-label": "Open menu",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "relative h-4 w-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `absolute left-0 top-0 h-0.5 w-5 rounded-full bg-white transition ${isOpen ? "translate-y-[7px] rotate-45" : ""}`
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Navbar.tsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-white transition ${isOpen ? "opacity-0" : ""}`
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Navbar.tsx",
                                    lineNumber: 64,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `absolute left-0 top-[14px] h-0.5 w-5 rounded-full bg-white transition ${isOpen ? "-translate-y-[7px] -rotate-45" : ""}`
                                }, void 0, false, {
                                    fileName: "[project]/app/components/Navbar.tsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/Navbar.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/components/Navbar.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Navbar.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: -18
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        y: -18
                    },
                    className: "mx-auto mt-3 w-full max-w-7xl rounded-[28px] border border-white/16 bg-[#10231d]/92 p-5 shadow-[0_24px_70px_rgba(16,35,29,0.28)] backdrop-blur-xl lg:hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-4 flex justify-end",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$LanguageSwitcher$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                dark: true
                            }, void 0, false, {
                                fileName: "[project]/app/components/Navbar.tsx",
                                lineNumber: 87,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/app/components/Navbar.tsx",
                            lineNumber: 86,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "flex flex-col gap-2",
                            children: t.navbar.links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: link.href,
                                    className: `rounded-2xl px-4 py-3 text-sm ${pathname === link.href ? "bg-white text-[#10231d]" : "text-white/84"}`,
                                    onClick: ()=>setIsOpen(false),
                                    children: link.label
                                }, `${link.href}-${link.label}`, false, {
                                    fileName: "[project]/app/components/Navbar.tsx",
                                    lineNumber: 91,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/app/components/Navbar.tsx",
                            lineNumber: 89,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/Navbar.tsx",
                    lineNumber: 80,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : null
            }, void 0, false, {
                fileName: "[project]/app/components/Navbar.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Navbar.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Navbar;
}),
"[project]/app/components/Button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
const Button = ({ children, variant = "primary", size = "md", href, isLoading, leftIcon, rightIcon, className = "", disabled, ...props })=>{
    const baseStyles = "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60";
    const variants = {
        primary: "bg-[#10231d] text-white shadow-[0_18px_44px_rgba(16,35,29,0.18)] hover:-translate-y-0.5 hover:bg-[#0b1814] focus:ring-[#10231d]",
        secondary: "bg-[#c7762b] text-white shadow-[0_18px_44px_rgba(199,118,43,0.22)] hover:-translate-y-0.5 hover:bg-[#b5661f] focus:ring-[#c7762b]",
        outline: "border border-[#10231d]/14 bg-white/75 text-[#10231d] hover:border-[#0f766e]/35 hover:bg-white focus:ring-[#0f766e]",
        ghost: "bg-transparent text-[#10231d] hover:bg-white/65 focus:ring-[#10231d]"
    };
    const sizes = {
        sm: "px-4 py-2.5 text-sm",
        md: "px-6 py-3.5 text-sm sm:text-base",
        lg: "px-8 py-4 text-base sm:text-lg"
    };
    const content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "h-4 w-4 animate-spin",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    className: "opacity-25",
                    cx: "12",
                    cy: "12",
                    r: "10",
                    stroke: "currentColor",
                    strokeWidth: "4"
                }, void 0, false, {
                    fileName: "[project]/app/components/Button.tsx",
                    lineNumber: 58,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    className: "opacity-75",
                    fill: "currentColor",
                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4Zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647Z"
                }, void 0, false, {
                    fileName: "[project]/app/components/Button.tsx",
                    lineNumber: 59,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Button.tsx",
            lineNumber: 52,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                leftIcon,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: children
                }, void 0, false, {
                    fileName: "[project]/app/components/Button.tsx",
                    lineNumber: 68,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                rightIcon
            ]
        }, void 0, true)
    }, void 0, false);
    const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
    if (href) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            href: href,
            className: classes,
            children: content
        }, void 0, false, {
            fileName: "[project]/app/components/Button.tsx",
            lineNumber: 79,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
        whileTap: {
            scale: 0.98
        },
        className: classes,
        disabled: disabled || isLoading,
        ...props,
        children: content
    }, void 0, false, {
        fileName: "[project]/app/components/Button.tsx",
        lineNumber: 86,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Button;
}),
"[project]/app/components/footer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/context/LanguageContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ui$2d$texts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/ui-texts.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Button.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const Footer = ()=>{
    const { lang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const t = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ui$2d$texts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXTS"][lang].footer;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "bg-white px-4 py-16 text-[#10231d] sm:px-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-shell relative",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-8 rounded-[32px] border border-[#10231d]/8 bg-white p-8 shadow-[0_24px_80px_rgba(16,35,29,0.06)] lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-5 flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#c7762b] via-[#e9b679] to-[#0f766e] text-sm font-bold text-white",
                                            children: "NH"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/footer.tsx",
                                            lineNumber: 19,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs uppercase tracking-[0.32em] text-[#5d6b65]",
                                                    children: "Travel Studio"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/footer.tsx",
                                                    lineNumber: 23,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-semibold",
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ui$2d$texts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEXTS"][lang].navbar.brand
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/footer.tsx",
                                                    lineNumber: 24,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/footer.tsx",
                                            lineNumber: 22,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/footer.tsx",
                                    lineNumber: 18,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "max-w-md text-sm leading-7 text-[#5d6b65]",
                                    children: t.description
                                }, void 0, false, {
                                    fileName: "[project]/app/components/footer.tsx",
                                    lineNumber: 27,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/footer.tsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#5d6b65]",
                                    children: t.officeTitle
                                }, void 0, false, {
                                    fileName: "[project]/app/components/footer.tsx",
                                    lineNumber: 31,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm leading-7 text-[#35514a]",
                                    children: t.officeValue
                                }, void 0, false, {
                                    fileName: "[project]/app/components/footer.tsx",
                                    lineNumber: 32,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "mb-4 mt-8 text-sm font-semibold uppercase tracking-[0.24em] text-[#5d6b65]",
                                    children: t.contactTitle
                                }, void 0, false, {
                                    fileName: "[project]/app/components/footer.tsx",
                                    lineNumber: 33,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2 text-sm text-[#35514a]",
                                    children: t.contactValue.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: item
                                        }, item, false, {
                                            fileName: "[project]/app/components/footer.tsx",
                                            lineNumber: 36,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/app/components/footer.tsx",
                                    lineNumber: 34,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/footer.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#5d6b65]",
                                    children: t.quickLinksTitle
                                }, void 0, false, {
                                    fileName: "[project]/app/components/footer.tsx",
                                    lineNumber: 42,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: t.quickLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: link.href,
                                            className: "block text-sm text-[#35514a] transition hover:text-[#10231d]",
                                            children: link.label
                                        }, `${link.href}-${link.label}`, false, {
                                            fileName: "[project]/app/components/footer.tsx",
                                            lineNumber: 45,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/app/components/footer.tsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/footer.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#5d6b65]",
                                    children: t.newsletterTitle
                                }, void 0, false, {
                                    fileName: "[project]/app/components/footer.tsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mb-5 text-sm leading-7 text-[#5d6b65]",
                                    children: t.newsletterDescription
                                }, void 0, false, {
                                    fileName: "[project]/app/components/footer.tsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "email",
                                            placeholder: t.newsletterPlaceholder,
                                            className: "w-full rounded-2xl border border-[#10231d]/10 bg-[#fbfcfc] px-4 py-3 text-sm text-[#10231d] placeholder:text-[#7a8882] outline-none transition focus:border-[#0f766e]/30"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/footer.tsx",
                                            lineNumber: 60,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            variant: "secondary",
                                            className: "w-full justify-center",
                                            children: t.newsletterButton
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/footer.tsx",
                                            lineNumber: 65,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/footer.tsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/footer.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/footer.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 flex flex-col gap-3 px-2 text-sm text-[#7a8882] md:flex-row md:items-center md:justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: t.copyright
                        }, void 0, false, {
                            fileName: "[project]/app/components/footer.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Designed for confident travel planning across Mongolia and international routes."
                        }, void 0, false, {
                            fileName: "[project]/app/components/footer.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/footer.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/footer.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/components/footer.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Footer;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__fd8bcdd8._.js.map