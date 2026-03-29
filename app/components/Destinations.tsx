"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { TEXTS } from "../ui-texts";

const destinations = [
  {
    image: "/tours/mongolias-khuvsgul-lake-txovdfqxgjp7je6r.jpg",
    name: { en: "Khuvsgul Lake", mn: "Хөвсгөл нуур" },
    meta: { en: "Luxury camp, lake cruise, horse trekking", mn: "Luxury camp, завины аялал, морин маршрут" },
    note: {
      en: "Best for travelers who want calm water, clean air, and a slower, more peaceful rhythm.",
      mn: "Тайван амралт, цэвэр агаар, нуурын дэргэд удаан хэмнэлтэй аялал хүсдэг хүмүүст хамгийн тохиромжтой.",
    },
    tag: { en: "Relax & Nature", mn: "Амралт & Байгаль" },
  },
  {
    image: "/tours/sight_pic_big_2544.jpg",
    name: { en: "South Gobi", mn: "Өмнөговь" },
    meta: { en: "Dunes, camel safari, canyon landscapes", mn: "Элсэн манхан, тэмээн аялал, хавцал" },
    note: {
      en: "A favorite for travelers who want dramatic scenery, big open space, and strong adventure energy.",
      mn: "Сүртэй байгаль, өргөн уудам орчин, адал явдалтай мэдрэмж хүсдэг хүмүүст хамгийн их таалагддаг чиглэл.",
    },
    tag: { en: "Adventure Pick", mn: "Адал явдлын сонголт" },
  },
  {
    image: "/tours/view-gorkhi-terelj-national-park-main-valley-autumn_724552-90.jpg",
    name: { en: "Terelj", mn: "Тэрэлж" },
    meta: { en: "Fast getaway, family-friendly, easy access", mn: "Амралтын escape, гэр бүлд ээлтэй, ойрхон" },
    note: {
      en: "Perfect when you want a shorter trip that still feels fresh, scenic, and easy to organize.",
      mn: "Богино хугацаанд явчихаад ч байгаль мэдэрмээр, зохион байгуулахад амархан аялал хайж байвал яг тохирно.",
    },
    tag: { en: "Weekend Choice", mn: "Амралтын өдрийн сонголт" },
  },
  {
    image: "/tours/HD-wallpaper-orkhon-waterfalls-mongolia-travel-scenery-waterfalls-nature.jpg",
    name: { en: "Orkhon Valley", mn: "Орхоны хөндий" },
    meta: { en: "Culture, waterfall, nomadic immersion", mn: "Соёл, хүрхрээ, нүүдэлчдийн туршлага" },
    note: {
      en: "A rich route for people who want both scenery and a stronger sense of local life and culture.",
      mn: "Байгаль үзэхээс гадна нүүдэлчдийн ахуй, соёлыг илүү гүн мэдрэхийг хүсдэг хүмүүст их таалагддаг.",
    },
    tag: { en: "Culture & Landscape", mn: "Соёл & Байгаль" },
  },
];

const Destinations = () => {
  const { lang } = useLanguage();
  const t = TEXTS[lang].destinations;

  return (
    <section className="section-padding">
      <div className="container-shell">
        <div className="mb-12 max-w-3xl">
          <span className="section-eyebrow">{t.eyebrow}</span>
          <h2 className="section-title text-balance">{t.title}</h2>
          <p className="section-copy mt-5 max-w-2xl">{t.description}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {destinations.map((destination, index) => (
            <motion.article
              key={destination.name.en}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: index * 0.08 }}
              className="group premium-card overflow-hidden transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_70px_rgba(16,35,29,0.10)]"
            >
              <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
              <div className="relative h-80 overflow-hidden lg:h-full lg:min-h-[420px]">
                <Image
                  src={destination.image}
                  alt={destination.name[lang]}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#10231d]/66 via-[#10231d]/12 to-transparent" />
                <div className="absolute left-5 right-5 top-5 flex items-start justify-between gap-3">
                  <span className="rounded-full bg-white px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0f766e] shadow-[0_10px_24px_rgba(16,35,29,0.12)]">
                    {destination.tag[lang]}
                  </span>
                  <span className="rounded-full border border-white/24 bg-black/18 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                    0{index + 1}
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <h3 className="text-3xl font-semibold tracking-[-0.04em]">{destination.name[lang]}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/82">{destination.meta[lang]}</p>
                </div>
              </div>

              <div className="flex flex-col justify-between p-6 lg:p-7">
                <div>
                  <div className="mb-4 inline-flex rounded-full bg-[#f4f8f7] px-3 py-1.5 text-xs font-semibold text-[#0f766e]">
                    {lang === "en" ? "Popular choice" : "Их сонирхдог сонголт"}
                  </div>
                  <p className="text-sm leading-7 text-[#4d5c56] lg:text-[15px]">{destination.note[lang]}</p>
                </div>
                <div className="mt-6 flex items-center justify-between border-t border-[#10231d]/8 pt-4">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7a8882]">
                    {lang === "en" ? "Explore route" : "Чиглэлтэй танилцах"}
                  </span>
                  <span className="text-sm font-semibold text-[#0f766e]">
                    {lang === "en" ? "Read more →" : "Унших →"}
                  </span>
                </div>
              </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
