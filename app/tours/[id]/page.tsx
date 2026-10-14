"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Button from "../../components/Button";
import TourCard from "../../components/TourCard";
import { Accordion } from "../../components/TravelTips";
import { SplitText, useParallax } from "../../components/motion";
import {
  ArrowLeftIcon,
  CheckIcon,
  ClockIcon,
  CompassIcon,
  MinusIcon,
  PinIcon,
  PlusIcon,
  StarIcon,
  SunIcon,
  XIcon,
} from "../../components/Icons";
import { useLanguage } from "../../context/LanguageContext";
import { TOURS, findTourBySlug, getTourDetails } from "../../data/tours";
import { ITINERARY_IMAGES } from "../../data/tour-details";
import { formatPrice, todayIso } from "../../lib/format";

type TabKey = "overview" | "itinerary" | "included" | "faq";
const TABS: TabKey[] = ["overview", "itinerary", "included", "faq"];
const MAX_TRAVELERS = 20;

const TourDetailPage = () => {
  const params = useParams<{ id: string }>();
  const { lang, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<TabKey>("overview");
  const [date, setDate] = useState("");
  const [travelers, setTravelers] = useState(2);
  const heroRef = useRef<HTMLElement>(null);
  const heroY = useParallax(heroRef, 90);

  const tour = findTourBySlug(params.id);
  if (!tour) notFound();

  const details = getTourDetails(tour.slug, lang);
  const itineraryImages = ITINERARY_IMAGES[tour.slug] ?? [];
  const hasPrice = tour.priceFrom > 0;
  const gallery = [tour.coverImage, ...(tour.gallery ?? [])];
  const related = TOURS.filter((item) => item.category === tour.category && item.slug !== tour.slug).slice(0, 3);
  const td = t.tourDetail;

  const bookingParams = new URLSearchParams({ tour: tour.slug, travelers: String(travelers) });
  if (date) bookingParams.set("date", date);
  const bookingHref = `/book?${bookingParams.toString()}`;

  const facts = [
    { icon: ClockIcon, label: td.facts.duration, value: tour.duration[lang] },
    { icon: SunIcon, label: td.facts.season, value: tour.season[lang] },
    { icon: PinIcon, label: td.facts.destination, value: tour.destination[lang] },
    { icon: CompassIcon, label: td.facts.type, value: t.common.categories[tour.category] },
  ];

  const handleTabKeyDown = (event: React.KeyboardEvent, index: number) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const next = (index + (event.key === "ArrowRight" ? 1 : -1) + TABS.length) % TABS.length;
    setActiveTab(TABS[next]);
    document.getElementById(`tab-${TABS[next]}`)?.focus();
  };

  return (
    <div className="pb-24 lg:pb-0">
      {/* Hero */}
      <section ref={heroRef} className="relative isolate flex min-h-[72svh] items-end overflow-hidden text-white">
        <motion.div style={{ y: heroY }} className="absolute -inset-y-24 inset-x-0 -z-20">
          <motion.div
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image src={tour.coverImage} alt={tour.title[lang]} fill priority sizes="100vw" className="object-cover" />
          </motion.div>
        </motion.div>
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(9,22,18,0.45)_0%,rgba(9,22,18,0.15)_35%,rgba(9,22,18,0.85)_100%)]" />
        <div className="container-shell pt-32 pb-12 md:pb-16">
          <Link
            href="/tours"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur-md transition hover:bg-white/20"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            {td.back}
          </Link>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-full bg-white/92 px-3 py-1.5 text-xs font-bold text-brand-strong">
              {t.common.categories[tour.category]}
            </span>
            {tour.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-sand px-3 py-1.5 text-xs font-bold text-white">
                {t.common.tags[tag]}
              </span>
            ))}
          </div>
          <h1 className="mt-4 max-w-4xl text-4xl leading-[1.05] font-extrabold tracking-[-0.045em] text-balance md:text-6xl">
            <SplitText text={tour.title[lang]} delay={0.15} onView={false} />
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-semibold text-white/90 md:text-base">
            <span className="flex items-center gap-2">
              <PinIcon className="h-5 w-5" />
              {tour.destination[lang]}
            </span>
            <span className="flex items-center gap-2">
              <ClockIcon className="h-5 w-5" />
              {tour.duration[lang]}
            </span>
            {tour.rating ? (
              <span className="flex items-center gap-1.5">
                <StarIcon className="h-5 w-5 text-sand" />
                {tour.rating.toFixed(1)}
                {tour.reviewCount ? <span className="font-medium text-white/70">({t.common.reviews(tour.reviewCount)})</span> : null}
              </span>
            ) : null}
          </div>
        </div>
      </section>

      <div className="container-shell py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_380px] lg:gap-14">
          {/* Main content */}
          <div className="min-w-0">
            <dl className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {facts.map(({ icon: Icon, label, value }, index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="rounded-3xl bg-canvas p-4 transition-colors hover:bg-brand-soft"
                >
                  <Icon className="h-5 w-5 text-brand" />
                  <dt className="mt-3 text-xs font-semibold text-faint">{label}</dt>
                  <dd className="mt-1 text-sm font-bold text-ink">{value}</dd>
                </motion.div>
              ))}
            </dl>

            {details ? (
              <div role="tablist" aria-label={tour.title[lang]} className="mt-10 flex gap-1 overflow-x-auto border-b border-ink/10">
                {TABS.map((tab, index) => {
                  const active = activeTab === tab;
                  return (
                    <button
                      key={tab}
                      id={`tab-${tab}`}
                      role="tab"
                      type="button"
                      aria-selected={active}
                      aria-controls={`panel-${tab}`}
                      tabIndex={active ? 0 : -1}
                      onClick={() => setActiveTab(tab)}
                      onKeyDown={(event) => handleTabKeyDown(event, index)}
                      className={`relative shrink-0 px-4 py-4 text-sm font-bold whitespace-nowrap transition md:px-5 md:text-[15px] ${
                        active ? "text-ink" : "text-faint hover:text-ink-soft"
                      }`}
                    >
                      {td.tabs[tab]}
                      {active ? <motion.span layoutId="tab-underline" className="absolute inset-x-3 -bottom-px h-[3px] rounded-full bg-brand" /> : null}
                    </button>
                  );
                })}
              </div>
            ) : null}

            <AnimatePresence mode="wait">
              <motion.div
                key={details ? activeTab : "overview"}
                id={details ? `panel-${activeTab}` : undefined}
                role={details ? "tabpanel" : undefined}
                aria-labelledby={details ? `tab-${activeTab}` : undefined}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="mt-8"
              >
                {(!details || activeTab === "overview") && (
                  <div>
                    <h2 className="text-2xl font-bold tracking-[-0.03em] text-ink">{td.about}</h2>
                    <p className="mt-4 text-base leading-8 text-muted md:text-lg">{details?.description ?? tour.summary[lang]}</p>

                    <h3 className="mt-10 text-xl font-bold text-ink">{td.highlights}</h3>
                    <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                      {tour.highlights[lang].map((highlight) => (
                        <li key={highlight} className="flex items-center gap-3 rounded-2xl border border-ink/8 px-4 py-3.5 text-[15px] font-semibold text-ink-soft">
                          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
                            <CheckIcon className="h-4 w-4" />
                          </span>
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    {gallery.length > 1 ? (
                      <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3">
                        {gallery.map((src, index) => (
                          <div key={src} className={`relative overflow-hidden rounded-3xl ${index === 0 ? "col-span-2 aspect-video md:row-span-2 md:aspect-auto" : "aspect-4/3"}`}>
                            <Image src={src} alt="" fill sizes="(min-width: 768px) 33vw, 50vw" className="object-cover transition duration-700 hover:scale-110" />
                          </div>
                        ))}
                      </div>
                    ) : null}

                    {!details ? (
                      <div className="mt-10 rounded-3xl bg-brand-soft p-6 md:p-7">
                        <p className="text-[15px] leading-7 text-ink-soft">{td.detailsOnRequest}</p>
                        <Button href={`/contact?tour=${tour.slug}`} variant="outline" size="sm" className="mt-4">
                          {td.askQuestion}
                        </Button>
                      </div>
                    ) : null}
                  </div>
                )}

                {details && activeTab === "itinerary" && (
                  <ol className="relative space-y-8 border-l-2 border-ink/8 pl-8">
                    {details.itinerary.map((item, index) => (
                      <li key={item.title} className="relative">
                        <span className="absolute top-0 -left-[45px] flex h-8 w-8 items-center justify-center rounded-full bg-brand text-xs font-bold text-white ring-4 ring-white">
                          {index + 1}
                        </span>
                        <p className="text-xs font-bold tracking-[0.16em] text-brand uppercase">{td.day(index + 1)}</p>
                        <h3 className="mt-1 text-lg font-bold text-ink">{item.title}</h3>
                        <p className="mt-2 text-[15px] leading-7 text-muted">{item.desc}</p>
                        {itineraryImages[index] ? (
                          <div className="relative mt-4 aspect-video max-w-xl overflow-hidden rounded-3xl">
                            <Image src={itineraryImages[index]} alt={item.title} fill sizes="(min-width: 768px) 576px, 100vw" className="object-cover" />
                          </div>
                        ) : null}
                      </li>
                    ))}
                  </ol>
                )}

                {details && activeTab === "included" && (
                  <div>
                    <div className="grid gap-5 md:grid-cols-2">
                      <div className="rounded-3xl border border-ink/8 p-6">
                        <h3 className="text-lg font-bold text-brand-strong">{td.included}</h3>
                        <ul className="mt-4 space-y-3">
                          {details.included.map((item) => (
                            <li key={item} className="flex gap-3 text-[15px] text-ink-soft">
                              <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="rounded-3xl border border-ink/8 p-6">
                        <h3 className="text-lg font-bold text-sand-strong">{td.excluded}</h3>
                        <ul className="mt-4 space-y-3">
                          {details.excluded.map((item) => (
                            <li key={item} className="flex gap-3 text-[15px] text-ink-soft">
                              <XIcon className="mt-0.5 h-5 w-5 shrink-0 text-sand" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="mt-5 rounded-3xl bg-canvas p-6">
                      <h3 className="text-lg font-bold text-ink">{td.bring}</h3>
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {details.bring.map((item) => (
                          <li key={item} className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink-soft">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {details && activeTab === "faq" && (
                  <div>
                    {details.faq.length ? <Accordion key={lang} items={details.faq} idPrefix="tour-faq" /> : null}
                    <div className="mt-6 flex flex-col items-start gap-4 rounded-3xl bg-brand-soft p-6 sm:flex-row sm:items-center sm:justify-between">
                      <p className="text-[15px] leading-7 text-ink-soft">{td.noFaq}</p>
                      <Button href={`/contact?tour=${tour.slug}`} variant="outline" size="sm">
                        {td.askQuestion}
                      </Button>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Booking card */}
          <aside id="booking" className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[28px] border border-ink/8 bg-white p-6 shadow-lift">
              {hasPrice ? (
                <p>
                  <span className="block text-sm font-semibold text-faint">{t.common.from}</span>
                  <span className="text-3xl font-extrabold tracking-[-0.03em] text-ink">
                    {formatPrice(tour.priceFrom, tour.currency, lang)}
                  </span>
                  <span className="ml-1.5 text-sm text-faint">/ {t.common.perPerson}</span>
                </p>
              ) : (
                <p className="text-2xl font-extrabold text-ink">{t.common.onRequest}</p>
              )}

              <div className="mt-6 space-y-4">
                <div>
                  <label htmlFor="tour-date" className="field-label">
                    {td.sidebar.date}
                  </label>
                  <input
                    id="tour-date"
                    type="date"
                    min={todayIso()}
                    // Server and browser may disagree on "today" across timezones.
                    suppressHydrationWarning
                    value={date}
                    onChange={(event) => setDate(event.target.value)}
                    className="field-input"
                  />
                </div>
                <div>
                  <span className="field-label" id="travelers-label">
                    {td.sidebar.travelers}
                  </span>
                  <div className="flex items-center justify-between rounded-2xl border border-ink/12 p-1.5" role="group" aria-labelledby="travelers-label">
                    <button
                      type="button"
                      onClick={() => setTravelers((n) => Math.max(1, n - 1))}
                      disabled={travelers <= 1}
                      aria-label={td.sidebar.decrease}
                      className="flex h-10 w-10 items-center justify-center rounded-xl bg-canvas text-ink transition hover:bg-ink/8 disabled:opacity-40"
                    >
                      <MinusIcon className="h-4 w-4" />
                    </button>
                    <span className="text-[15px] font-bold text-ink" aria-live="polite">
                      {t.common.travelers(travelers)}
                    </span>
                    <button
                      type="button"
                      onClick={() => setTravelers((n) => Math.min(MAX_TRAVELERS, n + 1))}
                      disabled={travelers >= MAX_TRAVELERS}
                      aria-label={td.sidebar.increase}
                      className="flex h-10 w-10 items-center justify-center rounded-xl bg-canvas text-ink transition hover:bg-ink/8 disabled:opacity-40"
                    >
                      <PlusIcon className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              {hasPrice ? (
                <div className="mt-6 flex items-center justify-between border-t border-ink/8 pt-5">
                  <span className="text-sm font-semibold text-muted">{td.sidebar.total}</span>
                  <span className="text-xl font-extrabold text-ink">{formatPrice(tour.priceFrom * travelers, tour.currency, lang)}</span>
                </div>
              ) : null}

              <Button href={bookingHref} variant="secondary" size="lg" className="mt-6 w-full">
                {td.sidebar.request}
              </Button>
              <p className="mt-4 text-center text-xs leading-5 text-faint">{td.sidebar.note}</p>
            </div>
          </aside>
        </div>

        {related.length ? (
          <section className="mt-20 border-t border-ink/8 pt-14">
            <h2 className="text-2xl font-bold tracking-[-0.03em] text-ink md:text-3xl">{td.related}</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {related.map((item, index) => (
                <TourCard key={item.slug} tour={item} index={index} />
              ))}
            </div>
          </section>
        ) : null}
      </div>

      {/* Mobile booking bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink/8 bg-white/95 px-4 py-3 backdrop-blur-xl lg:hidden">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4">
          <div className="min-w-0">
            {hasPrice ? (
              <>
                <p className="text-xs font-semibold text-faint">{t.common.from}</p>
                <p className="truncate text-lg font-extrabold text-ink">{formatPrice(tour.priceFrom, tour.currency, lang)}</p>
              </>
            ) : (
              <p className="font-bold text-ink">{t.common.onRequest}</p>
            )}
          </div>
          <Button href={bookingHref} variant="secondary">
            {t.common.bookNow}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TourDetailPage;
