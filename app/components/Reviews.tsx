"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { TEXTS } from "../ui-texts";

const reviews = {
  en: [
    {
      name: "Sarah Johnson",
      role: "Luxury traveler, UK",
      content:
        "The itinerary felt polished from the first email. Every transfer, stay, and activity ran with the kind of confidence you normally only get from high-end agencies.",
      initials: "SJ",
    },
    {
      name: "Michael Chen",
      role: "Corporate group organizer",
      content:
        "We needed a Mongolia program for a mixed international team. They handled logistics, pacing, and communication brilliantly, which made our job easy.",
      initials: "MC",
    },
    {
      name: "Enkhjin B.",
      role: "Domestic family traveler",
      content:
        "The team listened carefully and built a route that worked for elders and kids at the same time. The experience felt safe, beautiful, and genuinely thoughtful.",
      initials: "EB",
    },
  ],
  mn: [
    {
      name: "Сара Жонсон",
      role: "Luxury аялагч, Их Британи",
      content:
        "Эхний имэйлээс эхлээд л маш цэгцтэй, мэргэжлийн санагдсан. Унаа, буудал, activity бүр нь premium agency шиг найдвартай зохион байгуулалттай байсан.",
      initials: "SJ",
    },
    {
      name: "Майкл Чен",
      role: "Corporate group зохион байгуулагч",
      content:
        "Олон улсын багийнхаа аяллыг зохион байгуулахад логистик, харилцаа, цагийн менежментийг маш сайн хийсэн. Бидний ачааллыг үнэхээр хөнгөлсөн.",
      initials: "MC",
    },
    {
      name: "Энхжин Б.",
      role: "Гэр бүлийн аялагч",
      content:
        "Ахмад настай хүн, хүүхэдтэйгээ хамт аялсан ч маршрут маш зөв таарсан. Аюулгүй, тухтай, бас үнэхээр халамжтай баг байсан.",
      initials: "EB",
    },
  ],
} as const;

const Reviews = () => {
  const { lang } = useLanguage();
  const t = TEXTS[lang].reviews;

  return (
    <section className="section-padding">
      <div className="container-shell">
        <div className="mb-12 max-w-3xl">
          <span className="section-eyebrow">{t.eyebrow}</span>
          <h2 className="section-title text-balance">{t.title}</h2>
          <p className="section-copy mt-5">{t.description}</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {reviews[lang].map((review, index) => (
            <motion.article
              key={review.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: index * 0.08 }}
              className="premium-card h-full p-7 transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(16,35,29,0.09)]"
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f4f8f7] text-sm font-semibold text-[#0f766e]">
                  {review.initials}
                </div>
                <div>
                  <h3 className="font-semibold text-[#10231d]">{review.name}</h3>
                  <p className="text-sm text-[#5d6b65]">{review.role}</p>
                </div>
              </div>
              <p className="rounded-[22px] bg-[#fbfcfc] px-4 py-4 text-sm leading-8 text-[#4d5c56]">“{review.content}”</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
