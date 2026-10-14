"use client";

import React, { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import Button from "../components/Button";
import SectionHeading from "../components/SectionHeading";
import TourCard from "../components/TourCard";
import { ChevronDownIcon, CompassIcon, SearchIcon, XIcon } from "../components/Icons";
import { useLanguage } from "../context/LanguageContext";
import { TOURS, TourCategory, comparablePrice, tourSearchText } from "../data/tours";

type FilterKey = "all" | TourCategory;
type SortKey = "recommended" | "priceLow" | "priceHigh" | "duration";

const CATEGORIES: FilterKey[] = ["all", "domestic", "outbound", "custom"];
const SORTS: SortKey[] = ["recommended", "priceLow", "priceHigh", "duration"];

const asCategory = (value: string | null): FilterKey => (CATEGORIES.includes(value as FilterKey) ? (value as FilterKey) : "all");
const asSort = (value: string | null): SortKey => (SORTS.includes(value as SortKey) ? (value as SortKey) : "recommended");

const ToursView = () => {
  const { t } = useLanguage();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(() => searchParams.get("q") ?? "");
  const [category, setCategory] = useState<FilterKey>(() => asCategory(searchParams.get("category")));
  const [sort, setSort] = useState<SortKey>(() => asSort(searchParams.get("sort")));

  // Keep the URL shareable without triggering a navigation on every keystroke.
  const syncUrl = (next: { q?: string; category?: FilterKey; sort?: SortKey }) => {
    const state = { q: search, category, sort, ...next };
    const params = new URLSearchParams();
    if (state.q.trim()) params.set("q", state.q.trim());
    if (state.category !== "all") params.set("category", state.category);
    if (state.sort !== "recommended") params.set("sort", state.sort);
    const query = params.toString();
    window.history.replaceState(null, "", query ? `?${query}` : window.location.pathname);
  };

  const updateSearch = (value: string) => {
    setSearch(value);
    syncUrl({ q: value });
  };
  const updateCategory = (value: FilterKey) => {
    setCategory(value);
    syncUrl({ category: value });
  };
  const updateSort = (value: SortKey) => {
    setSort(value);
    syncUrl({ sort: value });
  };
  const clearAll = () => {
    setSearch("");
    setCategory("all");
    setSort("recommended");
    window.history.replaceState(null, "", window.location.pathname);
  };

  const query = search.trim().toLowerCase();
  const matchingSearch = useMemo(
    () => (query ? TOURS.filter((tour) => tourSearchText(tour).includes(query)) : TOURS),
    [query],
  );

  const counts = useMemo(() => {
    const result: Record<FilterKey, number> = { all: matchingSearch.length, domestic: 0, outbound: 0, custom: 0 };
    matchingSearch.forEach((tour) => (result[tour.category] += 1));
    return result;
  }, [matchingSearch]);

  const results = useMemo(() => {
    const filtered = category === "all" ? matchingSearch : matchingSearch.filter((tour) => tour.category === category);
    if (sort === "recommended") return filtered;
    return [...filtered].sort((a, b) => {
      if (sort === "duration") return a.days - b.days;
      const priceA = comparablePrice(a);
      const priceB = comparablePrice(b);
      // Price-on-request tours always go last, whichever direction we sort.
      if (priceA === Infinity || priceB === Infinity) return priceA === priceB ? 0 : priceA === Infinity ? 1 : -1;
      return sort === "priceLow" ? priceA - priceB : priceB - priceA;
    });
  }, [matchingSearch, category, sort]);

  const hasFilters = Boolean(query) || category !== "all" || sort !== "recommended";

  return (
    <div className="pt-28 md:pt-32">
      <section className="pb-24">
        <div className="container-shell">
          <SectionHeading as="h1" eyebrow={t.toursPage.eyebrow} title={t.toursPage.title} description={t.toursPage.description} className="py-8" />

          <div className="sticky top-24 z-30 mt-6 rounded-[28px] border border-ink/8 bg-white/95 p-3 shadow-soft backdrop-blur-xl md:p-4">
            <div className="grid gap-3 lg:grid-cols-[1fr_auto] lg:items-center">
              <label className="relative block">
                <span className="sr-only">{t.toursPage.searchLabel}</span>
                <SearchIcon className="pointer-events-none absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-faint" />
                <input
                  type="search"
                  value={search}
                  onChange={(event) => updateSearch(event.target.value)}
                  placeholder={t.toursPage.searchPlaceholder}
                  className="field-input rounded-full! pr-11 pl-12"
                />
                {search ? (
                  <button
                    type="button"
                    onClick={() => updateSearch("")}
                    aria-label={t.toursPage.clear}
                    className="absolute top-1/2 right-3 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-canvas text-muted hover:text-ink"
                  >
                    <XIcon className="h-3.5 w-3.5" />
                  </button>
                ) : null}
              </label>

              <label className="relative flex items-center">
                <span className="sr-only">{t.toursPage.sortLabel}</span>
                <select
                  value={sort}
                  onChange={(event) => updateSort(event.target.value as SortKey)}
                  className="field-input cursor-pointer appearance-none rounded-full! pr-11 font-semibold lg:w-64"
                >
                  {SORTS.map((option) => (
                    <option key={option} value={option}>
                      {t.toursPage.sortLabel}: {t.toursPage.sort[option]}
                    </option>
                  ))}
                </select>
                <ChevronDownIcon className="pointer-events-none absolute right-4 h-4 w-4 text-faint" />
              </label>
            </div>

            <LayoutGroup id="tour-categories">
            <div className="mt-3 -mx-1 flex gap-2 overflow-x-auto px-1 pb-1" role="group" aria-label={t.hero.categoryLabel}>
              {CATEGORIES.map((option) => {
                const active = category === option;
                return (
                  <button
                    key={option}
                    type="button"
                    aria-pressed={active}
                    onClick={() => updateCategory(option)}
                    className={`relative flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors ${
                      active ? "text-white" : "bg-canvas text-ink-soft hover:bg-ink/8"
                    }`}
                  >
                    {active ? (
                      <motion.span
                        layoutId="active-category"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                        className="absolute inset-0 rounded-full bg-ink"
                        aria-hidden="true"
                      />
                    ) : null}
                    <span className="relative">{t.common.categories[option]}</span>
                    <span className={`relative rounded-full px-2 py-0.5 text-xs ${active ? "bg-white/15" : "bg-white text-faint"}`}>{counts[option]}</span>
                  </button>
                );
              })}
            </div>
            </LayoutGroup>
          </div>

          <div className="mt-8 flex items-center justify-between gap-4" aria-live="polite">
            <p className="text-sm font-semibold text-muted">{t.toursPage.results(results.length)}</p>
            {hasFilters ? (
              <button type="button" onClick={clearAll} className="text-sm font-semibold text-brand hover:text-brand-strong">
                {t.toursPage.clear}
              </button>
            ) : null}
          </div>

          {results.length ? (
            <motion.div layout className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {results.map((tour, index) => (
                  <TourCard key={tour.slug} tour={tour} index={index} inGrid />
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-6 flex flex-col items-center rounded-[28px] border border-dashed border-ink/15 bg-canvas px-6 py-16 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-brand shadow-soft">
                <CompassIcon className="h-7 w-7" />
              </span>
              <h2 className="mt-5 text-2xl font-bold text-ink">{t.toursPage.noResultTitle}</h2>
              <p className="mx-auto mt-3 max-w-xl text-[15px] leading-7 text-muted">{t.toursPage.noResultDescription}</p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Button variant="outline" onClick={clearAll}>
                  {t.toursPage.clear}
                </Button>
                <Button href="/contact">{t.toursPage.noResultCta}</Button>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ToursView;
