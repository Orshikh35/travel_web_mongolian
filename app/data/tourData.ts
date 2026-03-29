// Comprehensive tour data with bilingual support
export interface TourData {
    id: number;
    slug: string;
    title: { en: string; mn: string };
    location: { en: string; mn: string };
    price: number;
    rating: number;
    reviews: number;
    days: number;
    type: { en: string; mn: string };
    images: string[];
    description: { en: string; mn: string };
    highlights: { en: string[]; mn: string[] };
    itinerary: {
        day: number;
        title: { en: string; mn: string };
        desc: { en: string; mn: string };
        image?: string;
    }[];
    included: { en: string[]; mn: string[] };
    excluded: { en: string[]; mn: string[] };
    whatToBring: { en: string[]; mn: string[] };
    faq: { question: { en: string; mn: string }; answer: { en: string; mn: string } }[];
}

export const toursData: TourData[] = [
    {
        id: 1,
        slug: "khuvsgul-lake-adventure",
        title: {
            en: "Khuvsgul Lake Adventure",
            mn: "Хөвсгөл нуурын аялал"
        },
        location: {
            en: "Khuvsgul, Mongolia",
            mn: "Хөвсгөл, Монгол"
        },
        price: 850,
        rating: 4.9,
        reviews: 87,
        days: 5,
        type: {
            en: "Nature & Adventure",
            mn: "Байгаль & Адал явдал"
        },
        images: [
            "/tours/mongolias-khuvsgul-lake-txovdfqxgjp7je6r.jpg",
            "/lake.jpg",
            "/alexander-popovkin-DVi4jg0Okgg-unsplash.jpg"
        ],
        description: {
            en: "Explore the pristine beauty of Khuvsgul Lake, known as the 'Blue Pearl of Mongolia'. This 5-day adventure takes you through stunning landscapes, traditional nomadic culture, and crystal-clear waters.",
            mn: "Монголын 'Цэнхэр сувд' гэгддэг Хөвсгөл нуурын онцгой үзэсгэлэнг судлаарай. Энэхүү 5 хоногийн аялал нь гайхамшигт байгаль, уламжлалт нүүдэлчин соёл, болор цэнгэг усыг танд бэлэглэнэ."
        },
        highlights: {
            en: [
                "Visit the pristine Khuvsgul Lake",
                "Experience traditional nomadic lifestyle",
                "Horse riding through scenic valleys",
                "Camping under the stars",
                "Meet local Tsaatan reindeer herders",
                "Enjoy fresh local cuisine"
            ],
            mn: [
                "Онцгой цэвэр Хөвсгөл нуурт зочлох",
                "Уламжлалт нүүдэлчин амьдралтай танилцах",
                "Үзэсгэлэнт хөндийгөөр морь унах",
                "Оддын доор зусах",
                "Орон нутгийн цаатан малчидтай уулзах",
                "Орон нутгийн шинэхэн хоолоор амтлах"
            ]
        },
        itinerary: [
            {
                day: 1,
                title: {
                    en: "Arrival in Ulaanbaatar & Transfer",
                    mn: "Улаанбаатарт ирэх ба шилжих"
                },
                desc: {
                    en: "Arrive in Ulaanbaatar, meet your guide, and transfer to hotel. City orientation and welcome dinner.",
                    mn: "Улаанбаатарт ирж, хөтөчтэй уулзаж, зочид буудалд шилжинэ. Хотын танилцуулга болон угтах оройн зоог."
                },
                image: "/alexander-popovkin-9vqWj6abWBs-unsplash.jpg"
            },
            {
                day: 2,
                title: {
                    en: "Drive to Khuvsgul Lake",
                    mn: "Хөвсгөл нуур руу явах"
                },
                desc: {
                    en: "Scenic 8-hour drive through northern Mongolia. Stop at local villages and enjoy the changing landscapes. Arrive at lakeside camp in the evening.",
                    mn: "Хойд Монголоор дамжин үзэсгэлэнт 8 цагийн аялал. Орон нутгийн тосгонд зогсож, өөрчлөгдөж буй байгалийг үзэх. Орой нуурын эргийн баазад очих."
                },
                image: "/khosbayar-surenkhorloo-kpUPKFB13hg-unsplash.jpg"
            },
            {
                day: 3,
                title: {
                    en: "Lake Exploration & Horse Riding",
                    mn: "Нуур судлах ба морь унах"
                },
                desc: {
                    en: "Morning horse riding along the lakeshore. Afternoon boat trip on the crystal-clear waters. Evening campfire with traditional songs.",
                    mn: "Өглөө нуурын эрэг дагуу морь унах. Өдөр болор цэнгэг усаар завиар аялах. Орой галын дэргэд уламжлалт дуу дуулах."
                },
                image: "/lake.jpg"
            },
            {
                day: 4,
                title: {
                    en: "Visit Tsaatan Reindeer Herders",
                    mn: "Цаатан малчидтай уулзах"
                },
                desc: {
                    en: "Journey to meet the Tsaatan people and their reindeer. Learn about their unique culture and way of life. Return to camp for farewell dinner.",
                    mn: "Цаатан ард түмэн болон тэдний цаа буга руу аялах. Тэдний өвөрмөц соёл, амьдралын хэв маягийг судлах. Баазруу буцаж ирээд салах ёслолын оройн зоог."
                },
                image: "/tours/mongolias-khuvsgul-lake-txovdfqxgjp7je6r.jpg"
            },
            {
                day: 5,
                title: {
                    en: "Return to Ulaanbaatar",
                    mn: "Улаанбаатар руу буцах"
                },
                desc: {
                    en: "Morning at leisure by the lake. Drive back to Ulaanbaatar. Evening transfer to airport or hotel.",
                    mn: "Өглөө нуурын дэргэд чөлөөт цаг. Улаанбаатар руу буцах. Орой нисэх онгоцны буудал эсвэл зочид буудал руу шилжих."
                }
            }
        ],
        included: {
            en: [
                "All transportation (4WD vehicle)",
                "Professional English-speaking guide",
                "4 nights accommodation (hotel + ger camp)",
                "All meals during the tour",
                "Entrance fees to national parks",
                "Horse riding equipment",
                "Boat trip on Khuvsgul Lake"
            ],
            mn: [
                "Бүх тээвэр (4WD машин)",
                "Мэргэжлийн англи хэлтэй хөтөч",
                "4 шөнийн байр (зочид буудал + гэрийн бааз)",
                "Аяллын үеийн бүх хоол",
                "Үндэсний цэцэрлэгт хүрээлэнгийн нэвтрэх хураамж",
                "Морь унах хэрэгсэл",
                "Хөвсгөл нуур дээр завиар аялах"
            ]
        },
        excluded: {
            en: [
                "International flights",
                "Travel insurance",
                "Personal expenses",
                "Alcoholic beverages",
                "Tips for guide and driver"
            ],
            mn: [
                "Олон улсын нислэг",
                "Аяллын даатгал",
                "Хувийн зардал",
                "Согтууруулах ундаа",
                "Хөтөч, жолоочийн цайны мөнгө"
            ]
        },
        whatToBring: {
            en: [
                "Warm clothing (even in summer)",
                "Rain jacket",
                "Comfortable hiking boots",
                "Sunscreen and sunglasses",
                "Camera and extra batteries",
                "Personal medications",
                "Flashlight/headlamp"
            ],
            mn: [
                "Дулаан хувцас (зун ч гэсэн)",
                "Борооны куртка",
                "Тав тухтай явган аялалын гутал",
                "Нарны тос, нарны шил",
                "Камер болон нэмэлт батерей",
                "Хувийн эм",
                "Гар чийдэн"
            ]
        },
        faq: [
            {
                question: {
                    en: "What is the best time to visit?",
                    mn: "Хэзээ очих нь хамгийн сайн вэ?"
                },
                answer: {
                    en: "June to September offers the best weather. July and August are warmest but also busiest.",
                    mn: "6-9 дугаар сар хамгийн сайн цаг агаартай. 7, 8 дугаар сар хамгийн дулаан боловч хамгийн их хүн байдаг."
                }
            },
            {
                question: {
                    en: "Is this tour suitable for children?",
                    mn: "Энэ аялал хүүхдэд тохиромжтой юу?"
                },
                answer: {
                    en: "Yes, children 8+ are welcome. The tour can be adjusted for families.",
                    mn: "Тийм, 8+ насны хүүхдүүд тавтай морилно уу. Аялал гэр бүлд тохируулж болно."
                }
            }
        ]
    },
    {
        id: 2,
        slug: "gobi-desert-expedition",
        title: {
            en: "Gobi Desert Expedition",
            mn: "Говийн цөлийн экспедиц"
        },
        location: {
            en: "Gobi Desert, Mongolia",
            mn: "Говь, Монгол"
        },
        price: 1200,
        rating: 5.0,
        reviews: 124,
        days: 7,
        type: {
            en: "Adventure & Culture",
            mn: "Адал явдал & Соёл"
        },
        images: [
            "/tours/sight_pic_big_2544.jpg",
            "/fadhil-abhimantra-PApkYMKjgHk-unsplash.jpg",
            "/fadhil-abhimantra-qGpfKldqKq0-unsplash.jpg"
        ],
        description: {
            en: "Discover the vast Gobi Desert, home to stunning sand dunes, ancient dinosaur fossils, and unique wildlife. Experience nomadic culture and sleep under star-filled skies.",
            mn: "Гайхамшигтай элсэн манхан, эртний үлэг гүрвэлийн олдвор, өвөрмөц амьтдын орон болох өргөн уудам Говийн цөлийг нээж мэдээрэй. Нүүдэлчин соёлыг мэдэрч, оддын дор унтаарай."
        },
        highlights: {
            en: [
                "Climb the Khongoryn Els sand dunes",
                "Visit Flaming Cliffs (Bayanzag)",
                "Explore Yolyn Am ice canyon",
                "Camel riding experience",
                "Dinosaur fossil sites",
                "Traditional ger stays"
            ],
            mn: [
                "Хонгорын элсэн манханд авирах",
                "Баянзаг (Галт хад) үзэх",
                "Ёлын амын мөсөн хавцлыг судлах",
                "Тэмээ унах туршлага",
                "Үлэг гүрвэлийн олдворын газар",
                "Уламжлалт гэрт байрлах"
            ]
        },
        itinerary: [
            {
                day: 1,
                title: { en: "Ulaanbaatar to Baga Gazriin Chuluu", mn: "Улаанбаатараас Бага газрын чулуу" },
                desc: { en: "Drive south to Baga Gazriin Chuluu, a unique granite rock formation. Explore caves and ancient ruins.", mn: "Өвөрмөц боржин чулуун бүрэлдэхүүн болох Бага газрын чулуу руу урагш явах. Агуй, эртний туурь үзэх." }
            },
            {
                day: 2,
                title: { en: "Tsagaan Suvarga", mn: "Цагаан суварга" },
                desc: { en: "Visit the White Stupa, ancient seabed cliffs with stunning layered colors.", mn: "Гайхалтай давхаргат өнгөтэй эртний далайн ёроолын хад болох Цагаан суварга үзэх." }
            },
            {
                day: 3,
                title: { en: "Yolyn Am Ice Canyon", mn: "Ёлын амын мөсөн хавцал" },
                desc: { en: "Hike through the narrow ice canyon in the Gobi Gurvan Saikhan mountains.", mn: "Говь гурван сайхан уулын нарийн мөсөн хавцлаар явган аялах." }
            },
            {
                day: 4,
                title: { en: "Khongoryn Els Sand Dunes", mn: "Хонгорын элсэн манхан" },
                desc: { en: "Explore Mongolia's largest sand dunes. Camel riding and sunset views.", mn: "Монголын хамгийн том элсэн манханыг судлах. Тэмээ унаж, нар жаргах үзэгдэл." }
            },
            {
                day: 5,
                title: { en: "Bayanzag Flaming Cliffs", mn: "Баянзаг галт хад" },
                desc: { en: "Visit the famous dinosaur fossil site. Explore the red cliffs at sunset.", mn: "Алдартай үлэг гүрвэлийн олдворын газар үзэх. Нар жаргах үед улаан хадыг судлах." }
            },
            {
                day: 6,
                title: { en: "Ongi Monastery Ruins", mn: "Онгийн хийдийн туурь" },
                desc: { en: "Explore the ruins of this historic monastery by the Ongi River.", mn: "Онгийн голын дэргэдэх энэ түүхэн хийдийн туурийг судлах." }
            },
            {
                day: 7,
                title: { en: "Return to Ulaanbaatar", mn: "Улаанбаатар руу буцах" },
                desc: { en: "Drive back to the capital. Evening farewell dinner.", mn: "Нийслэл рүү буцах. Орой салах ёслолын оройн зоог." }
            }
        ],
        included: {
            en: ["All transportation", "English-speaking guide", "6 nights ger accommodation", "All meals", "Camel riding", "Park fees"],
            mn: ["Бүх тээвэр", "Англи хэлтэй хөтөч", "6 шөнийн гэрийн байр", "Бүх хоол", "Тэмээ унах", "Цэцэрлэгийн хураамж"]
        },
        excluded: {
            en: ["Flights", "Insurance", "Personal expenses", "Alcohol", "Tips"],
            mn: ["Нислэг", "Даатгал", "Хувийн зардал", "Согтууруулах ундаа", "Цайны мөнгө"]
        },
        whatToBring: {
            en: ["Sun protection", "Warm layers", "Hiking boots", "Camera", "Water bottle"],
            mn: ["Нарны хамгаалалт", "Дулаан хувцас", "Явган аялалын гутал", "Камер", "Усны сав"]
        },
        faq: [
            {
                question: { en: "How hot is the Gobi?", mn: "Говь ямар халуун вэ?" },
                answer: { en: "Summer days can reach 40°C, but nights are cool (10-15°C).", mn: "Зуны өдөр 40°C хүрч болох ч шөнө сэрүүн (10-15°C)." }
            }
        ]
    }
];
