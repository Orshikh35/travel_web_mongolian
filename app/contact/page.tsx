"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "../components/Button";
import { useLanguage } from "../context/LanguageContext";
import { TEXTS } from "../ui-texts";

const ContactPage = () => {
  const { lang } = useLanguage();
  const t = TEXTS[lang].contact;

  return (
    <div className="overflow-hidden pt-28">
      <section className="section-padding">
        <div className="container-shell">
          <div className="mb-12 max-w-3xl">
            <span className="section-eyebrow">{t.eyebrow}</span>
            <h1 className="section-title text-balance">{t.title}</h1>
            <p className="section-copy mt-6">{t.description}</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-panel-strong rounded-[34px] p-6 sm:p-8"
            >
              <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[#10231d]">{t.formTitle}</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#5d6b65]">{t.formDescription}</p>

              <form className="mt-8 space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#10231d]">{t.fields.name}</label>
                    <input
                      type="text"
                      placeholder={t.fields.name}
                      className="w-full rounded-[18px] border border-[#10231d]/10 bg-white px-4 py-4 text-sm text-[#10231d] outline-none transition focus:border-[#0f766e]/45"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-[#10231d]">{t.fields.email}</label>
                    <input
                      type="email"
                      placeholder={t.fields.email}
                      className="w-full rounded-[18px] border border-[#10231d]/10 bg-white px-4 py-4 text-sm text-[#10231d] outline-none transition focus:border-[#0f766e]/45"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#10231d]">{t.fields.subject}</label>
                  <input
                    type="text"
                    placeholder={lang === "en" ? "Example: Family trip in July" : "Жишээ: 7 сард гэр бүлийн аялал"}
                    className="w-full rounded-[18px] border border-[#10231d]/10 bg-white px-4 py-4 text-sm text-[#10231d] outline-none transition focus:border-[#0f766e]/45"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#10231d]">{t.fields.message}</label>
                  <textarea
                    rows={7}
                    placeholder={
                      lang === "en"
                        ? "Tell us your dates, number of travelers, budget range, preferred destinations, and what kind of experience you want."
                        : "Огноо, аялагчдын тоо, төсөв, сонирхож буй чиглэл, хүсэж буй туршлагаа дэлгэрэнгүй бичнэ үү."
                    }
                    className="w-full rounded-[22px] border border-[#10231d]/10 bg-white px-4 py-4 text-sm text-[#10231d] outline-none transition focus:border-[#0f766e]/45"
                  />
                </div>

                <Button variant="primary" className="w-full justify-center sm:w-auto">
                  {t.button}
                </Button>
              </form>
            </motion.div>

            <div className="grid gap-5">
              {t.infoCards.map((card, index) => (
                <motion.article
                  key={card.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  className="premium-card p-7"
                >
                  <h3 className="text-xl font-semibold tracking-[-0.03em] text-[#10231d]">{card.title}</h3>
                  <div className="mt-4 space-y-2 text-sm leading-7 text-[#5d6b65]">
                    {card.lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </motion.article>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.24 }}
                className="glass-panel-strong rounded-[34px] p-7"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#0f766e]">
                  {lang === "en" ? "Planning note" : "Төлөвлөлтийн тэмдэглэл"}
                </p>
                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-[#10231d]">
                  {lang === "en" ? "The better your brief, the better the itinerary." : "Та илүү дэлгэрэнгүй бичих тусам маршрут илүү оновчтой болно."}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#5d6b65]">
                  {lang === "en"
                    ? "Include your travel dates, expected comfort level, traveler ages, and any must-have experiences so we can shape the strongest proposal quickly."
                    : "Аяллын огноо, ая тухын түвшин, насны бүтэц, заавал багтаах туршлагуудаа бичвэл бид илүү чанартай саналыг хурдан боловсруулна."}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
