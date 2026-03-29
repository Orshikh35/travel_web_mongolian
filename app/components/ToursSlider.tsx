"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "./Button";
import { useLanguage } from "../context/LanguageContext";
import { TEXTS } from "../ui-texts";
import { toursData } from "../data/tourData";

const ToursSlider = () => {
  const { lang } = useLanguage();
  const t = TEXTS[lang].tours;
  const featuredTours = toursData.slice(0, 3);

  return (
    <section className="section-padding">
      <div className="container-shell">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <span className="section-eyebrow">{t.eyebrow}</span>
            <h2 className="section-title text-balance">{t.title}</h2>
            <p className="section-copy mt-5">{t.subtitle}</p>
          </div>
          <Button href="/tours" variant="outline">
            {t.cta}
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {featuredTours.map((tour, index) => (
            <motion.article
              key={tour.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.08 }}
            className="premium-card group overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(16,35,29,0.10)]"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={tour.images[0]}
                  alt={tour.title[lang]}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#10231d]/28 via-transparent to-transparent" />
                <div className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#0f766e] shadow-[0_8px_24px_rgba(16,35,29,0.10)]">
                  {tour.type[lang]}
                </div>
              </div>

              <div className="p-6">
                <div className="mb-5 flex items-center justify-between gap-3 text-sm text-[#5d6b65]">
                  <span className="font-medium text-[#35514a]">{tour.location[lang]}</span>
                  <span>
                    {tour.days} {lang === "en" ? "days" : "хоног"}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold tracking-[-0.03em] text-[#10231d]">{tour.title[lang]}</h3>
                <p className="mt-3 text-sm leading-7 text-[#5d6b65]">{tour.description[lang]}</p>

                <div className="mt-6 flex items-center justify-between rounded-[22px] bg-[#fbfcfc] px-4 py-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-[#5d6b65]">
                      {lang === "en" ? "Starting from" : "Эхлэх үнэ"}
                    </p>
                    <p className="mt-2 text-2xl font-semibold text-[#10231d]">${tour.price}</p>
                  </div>
                  <div className="rounded-full bg-[#f6eee4] px-4 py-2 text-sm font-semibold text-[#c7762b]">
                    {tour.rating} / 5.0
                  </div>
                </div>

                <Link
                  href={`/tours/${tour.id}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#0f766e]"
                >
                  {lang === "en" ? "See full itinerary" : "Маршрут харах"}
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToursSlider;
