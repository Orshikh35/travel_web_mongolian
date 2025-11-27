// app/components/ToursSection.tsx
"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import TourCard from "./TourCard";
import { Lang, UiTexts } from "../ui-texts";
import { TOURS, Tour, TourCategory } from "../data/tours";
import { useRouter } from "next/navigation";

type Props = {
  texts: UiTexts["tours"];
  fadeUp: any;
  staggerParent: any;
  child: any;
  lang: Lang;
  defaultCategory?: TourCategory | "all";

  // 👇 Нэмэлт prop-ууд
  hasAnimatedTours?: boolean;
  onAnimated?: () => void;
};

type BudgetFilter = "all" | "low" | "mid" | "high";
type PeopleFilter = "all" | "1-2" | "3-4" | "5+";
type DateFilter = "any" | "this-week" | "this-month" | "next-month";

export default function ToursSection({
  texts,
  fadeUp,
  staggerParent,
  child,
  lang,
  defaultCategory = "all",
  hasAnimatedTours = false,
  onAnimated,
}: Props) {
  const router = useRouter();

  const [selectedCategory, setSelectedCategory] = useState<
    TourCategory | "all"
  >(defaultCategory);
  const [budget, setBudget] = useState<BudgetFilter>("all");
  const [people, setPeople] = useState<PeopleFilter>("all");
  const [date, setDate] = useState<DateFilter>("any");
  const [search, setSearch] = useState<string>("");

  const categoryKeys: (TourCategory | "all")[] = [
    "all", // Бүгд
    "domestic",
    "outbound",
    "custom",
  ];

  const filteredTours = useMemo(() => {
    return TOURS.filter((t) => {
      if (selectedCategory !== "all" && t.category !== selectedCategory) {
        return false;
      }

      if (budget !== "all") {
        if (budget === "low" && t.priceFrom > 2_000_000) return false;
        if (
          budget === "mid" &&
          (t.priceFrom < 2_000_000 || t.priceFrom > 4_000_000)
        )
          return false;
        if (budget === "high" && t.priceFrom < 4_000_000) return false;
      }

      if (people !== "all") {
        if (people === "1-2" && t.durationDays > 3) return false;
        if (people === "3-4" && (t.durationDays < 3 || t.durationDays > 6))
          return false;
        if (people === "5+" && t.durationDays < 5) return false;
      }

      if (search.trim().length > 0) {
        const query = search.toLowerCase();
        const haystack = (
          t.title.mn +
          t.title.en +
          t.destination.mn +
          t.destination.en +
          t.shortDescription.mn +
          t.shortDescription.en
        ).toLowerCase();

        if (!haystack.includes(query)) return false;
      }

      // date одоогоор бодитоор filter хийхгүй
      return true;
    });
  }, [selectedCategory, budget, people, date, search]);

  const onCardClick = (tour: Tour) => {
    router.push(`/tours/${tour.slug}?lang=${lang}`);
  };

  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 text-[#0E0F12] rounded-t-[40px] -mt-2 pt-20 pb-24">
      <div className="mx-auto max-w-[1300px] px-8 md:px-12">
        {/* Title */}
        <motion.div {...fadeUp(0)} className="text-center mb-12 mt-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {texts.title}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {texts.subtitle}
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          {...fadeUp(0.1)}
          className="flex flex-wrap gap-4 justify-center items-center mb-6 bg-white p-6 rounded-2xl"
        >
          {/* Огноо */}
          <div className="flex items-center gap-2 border border-gray-200 rounded-full px-5 py-3 min-w-[200px]">
            <span>📅</span>
            <select
              className="bg-transparent outline-none text-sm font-medium w-full"
              value={date}
              onChange={(e) => setDate(e.target.value as DateFilter)}
            >
              <option value="any">{texts.filters.dateAny}</option>
              <option value="this-week">{texts.filters.dateThisWeek}</option>
              <option value="this-month">{texts.filters.dateThisMonth}</option>
              <option value="next-month">{texts.filters.dateNextMonth}</option>
            </select>
          </div>

          {/* Төсөв */}
          <div className="flex items-center gap-2 border border-gray-200 rounded-full px-5 py-3 min-w-[220px]">
            <span>💰</span>
            <select
              className="bg-transparent outline-none text-sm font-medium w-full"
              value={budget}
              onChange={(e) => setBudget(e.target.value as BudgetFilter)}
            >
              <option value="all">{texts.filters.budgetAll}</option>
              <option value="low">{texts.filters.budgetLow}</option>
              <option value="mid">{texts.filters.budgetMid}</option>
              <option value="high">{texts.filters.budgetHigh}</option>
            </select>
          </div>

          {/* Хүний тоо */}
          <div className="flex items-center gap-2 border border-gray-200 rounded-full px-5 py-3 min-w-[200px]">
            <span>👤</span>
            <select
              className="bg-transparent outline-none text-sm font-medium w/full"
              value={people}
              onChange={(e) => setPeople(e.target.value as PeopleFilter)}
            >
              <option value="all">{texts.filters.peopleAll}</option>
              <option value="1-2">{texts.filters.people12}</option>
              <option value="3-4">{texts.filters.people34}</option>
              <option value="5+">{texts.filters.people5plus}</option>
            </select>
          </div>
        </motion.div>

        {/* Search */}
        <motion.div {...fadeUp(0.15)} className="flex justify-center mb-10">
          <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-5 py-3 w-full max-w-xl">
            <span>🔍</span>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={texts.filters.searchPlaceholder}
              className="bg-transparent outline-none text-sm flex-1"
            />
          </div>
        </motion.div>

        {/* Categories */}
        <motion.div
          {...fadeUp(0.18)}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          {texts.categories.map((catLabel, i) => {
            const key = categoryKeys[i] ?? "all";
            const active = selectedCategory === key;
            return (
              <button
                key={catLabel}
                type="button"
                onClick={() => setSelectedCategory(key)}
                className={`px-6 py-2.5 rounded-full font-medium transition ${
                  active
                    ? "bg-black text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {catLabel}
              </button>
            );
          })}
        </motion.div>

        {/* Cards – зөвхөн НЭГ удаа анимейт хийх логик */}
        <motion.div
          variants={staggerParent}
          initial={hasAnimatedTours ? false : "initial"}
          whileInView={hasAnimatedTours ? undefined : "whileInView"}
          animate={hasAnimatedTours ? "whileInView" : undefined}
          viewport={hasAnimatedTours ? undefined : { once: true }}
          onViewportEnter={() => {
            if (!hasAnimatedTours) {
              onAnimated?.();
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredTours.map((tour) => (
            <motion.div key={tour.slug} variants={child}>
              <TourCard
                tour={tour}
                lang={lang}
                onClick={() => onCardClick(tour)}
                badgeTexts={{
                  new: texts.badgeNew,
                  popular: texts.badgePopular,
                  special: texts.badgeSpecial,
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {filteredTours.length === 0 && (
          <div className="mt-12 text-center text-gray-500 text-sm max-w-xl mx-auto">
            {texts.noResult}
          </div>
        )}
      </div>
    </section>
  );
}
