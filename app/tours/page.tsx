"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { TEXTS } from "../ui-texts";
import { TOURS, TourCategory } from "../data/tours";

type FilterKey = "all" | TourCategory;

const ToursPage = () => {
  const { lang } = useLanguage();
  const t = TEXTS[lang].tourPage;
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<FilterKey>("all");

  const categories: FilterKey[] = ["all", "domestic", "outbound", "custom"];

  const filteredTours = useMemo(() => {
    return TOURS.filter((tour) => {
      const matchesCategory = activeCategory === "all" || tour.category === activeCategory;
      const query = search.toLowerCase();
      const haystack = [
        tour.title[lang],
        tour.shortDescription[lang],
        tour.destination[lang],
        ...tour.highlights[lang],
      ]
        .join(" ")
        .toLowerCase();

      return matchesCategory && haystack.includes(query);
    });
  }, [activeCategory, lang, search]);

  return (
    <div className="overflow-hidden pt-28">
      <section className="section-padding">
        <div className="container-shell">
          <div className="mb-12 max-w-3xl">
            <span className="section-eyebrow">{t.eyebrow}</span>
            <h1 className="section-title text-balance">{t.title}</h1>
            <p className="section-copy mt-6">{t.description}</p>
          </div>

          <div className="glass-panel-strong rounded-[34px] p-5 sm:p-6">
            <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="relative">
                <input
                  type="text"
                  placeholder={t.searchPlaceholder}
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  className="w-full rounded-[20px] border border-[#10231d]/10 bg-white px-5 py-4 pr-12 text-sm text-[#10231d] outline-none transition focus:border-[#0f766e]/45"
                />
                <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#5d6b65]">⌕</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`rounded-full px-4 py-3 text-sm font-medium transition ${
                      activeCategory === category
                        ? "bg-[#10231d] text-white shadow-[0_18px_34px_rgba(16,35,29,0.16)]"
                        : "bg-white text-[#10231d]/72 hover:bg-white/80"
                    }`}
                  >
                    {t.categories[category]}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {filteredTours.length ? (
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredTours.map((tour, index) => (
                <motion.article
                  key={tour.slug}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.04 }}
                  className="premium-card overflow-hidden"
                >
                  <div className="relative h-72">
                    <Image src={tour.coverImage} alt={tour.title[lang]} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#10231d]/80 via-transparent to-transparent" />
                    <div className="absolute left-5 top-5 rounded-full bg-white/84 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#0f766e]">
                      {t.trustedLabel}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="mb-4 flex items-center justify-between gap-4 text-sm text-[#5d6b65]">
                      <span>{tour.destination[lang]}</span>
                      <span>{tour.durationDays} {t.days}</span>
                    </div>

                    <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[#10231d]">{tour.title[lang]}</h2>
                    <p className="mt-3 text-sm leading-7 text-[#5d6b65]">{tour.shortDescription[lang]}</p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {tour.highlights[lang].slice(0, 3).map((highlight) => (
                        <span
                          key={highlight}
                          className="rounded-full bg-[#f6eee4] px-3 py-2 text-xs font-medium text-[#9a5c21]"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex items-end justify-between border-t border-[#10231d]/8 pt-5">
                      <div>
                        <p className="text-xs uppercase tracking-[0.22em] text-[#5d6b65]">{t.startingFrom}</p>
                        <p className="mt-2 text-2xl font-semibold text-[#10231d]">
                          {tour.priceFrom.toLocaleString()}₮
                        </p>
                      </div>
                      <Link href={`/tours/${tour.slug}`} className="text-sm font-semibold text-[#0f766e]">
                        {t.viewDetails} →
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="mt-10 premium-card p-10 text-center">
              <h2 className="text-2xl font-semibold text-[#10231d]">{t.noResultTitle}</h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#5d6b65]">{t.noResultDescription}</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ToursPage;
