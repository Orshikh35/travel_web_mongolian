"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "../components/Button";
import { Accordion } from "../components/Accordion";
import { CardViewer } from "../components/DayCards";
import { SplitText, useParallax } from "../components/motion";
import {
  CalendarIcon,
  ChevronDownIcon,
  CheckIcon,
  ClockIcon,
  ExpandIcon,
  GerIcon,
  MinusIcon,
  PinIcon,
  PlusIcon,
  XIcon,
} from "../components/Icons";
import { StayIconView, TripIcon } from "../components/TripIcons";
import { useLanguage } from "../context/LanguageContext";
import { DEPARTURES, DepartureKey, TOUR } from "../data/tour";
import { formatPrice, todayIso } from "../lib/format";

const EASE = [0.22, 1, 0.36, 1] as const;
const STAY_GROUP_ICONS = ["ger", "home", "hotel"] as const;

const TourPage = () => {
  const { lang, t } = useLanguage();
  const tp = t.tourPage;
  const [departure, setDeparture] = useState<DepartureKey>("festival");
  const [date, setDate] = useState("");
  const [travelers, setTravelers] = useState(2);
  const [card, setCard] = useState<number | null>(null);
  const heroRef = useRef<HTMLElement>(null);
  const heroY = useParallax(heroRef, 90);

  const hasPrice = TOUR.priceFrom > 0;
  const bookingParams = new URLSearchParams({ departure, travelers: String(travelers) });
  if (departure === "private" && date) bookingParams.set("date", date);
  const bookingHref = `/book?${bookingParams.toString()}`;

  const facts = [
    { icon: ClockIcon, label: tp.factLabels.duration, value: t.tour.duration },
    { icon: PinIcon, label: tp.factLabels.startEnd, value: t.tour.startEnd },
    { icon: CalendarIcon, label: tp.factLabels.season, value: t.tour.season },
    { icon: GerIcon, label: tp.factLabels.stay, value: tp.stayValue },
  ];

  return (
    <div className="pb-24 lg:pb-0">
      {/* Hero */}
      <section ref={heroRef} className="p-2 sm:p-3">
        <div className="relative isolate flex min-h-[78svh] items-end overflow-hidden rounded-[28px] text-white sm:rounded-[40px]">
        <motion.div style={{ y: heroY }} className="absolute -inset-y-24 inset-x-0 -z-20">
          <motion.div
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.4, ease: EASE }}
            className="absolute inset-0"
          >
            <Image src={TOUR.programImage} alt="" fill priority sizes="100vw" className="object-cover" />
          </motion.div>
        </motion.div>
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(11,16,35,0.5)_0%,rgba(11,16,35,0.15)_35%,rgba(11,16,35,0.88)_100%)]" />
        <div className="container-shell pt-32 pb-12 md:pb-16">
          <span className="glass inline-flex items-center rounded-full px-5 py-2.5 text-[11px] font-semibold tracking-[0.08em] uppercase">
            {tp.eyebrow}
          </span>
          <h1 className="display-title mt-5 max-w-5xl text-5xl md:text-7xl">
            <SplitText text={t.tour.name} delay={0.15} onView={false} />
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
            className="mt-5 max-w-2xl text-base leading-8 text-white/85 md:text-lg"
          >
            {tp.intro}
          </motion.p>
          <div className="mt-6 flex flex-wrap items-center gap-2 text-sm font-medium text-white/90">
            <span className="glass flex items-center gap-2 rounded-full px-4 py-2">
              <ClockIcon className="h-5 w-5" />
              {t.tour.duration}
            </span>
            <span className="glass flex items-center gap-2 rounded-full px-4 py-2">
              <PinIcon className="h-5 w-5" />
              {t.tour.startEnd}
            </span>
            <span className="glass flex items-center gap-2 rounded-full px-4 py-2">
              <CalendarIcon className="h-5 w-5" />
              {t.tour.season}
            </span>
          </div>
        </div>
        </div>
      </section>

      <div className="container-shell py-12 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_360px] lg:gap-14">
          {/* Main content */}
          <div className="min-w-0">
            <dl className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {facts.map(({ icon: Icon, label, value }, index) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.08 }}
                  className="flex flex-col-reverse justify-end rounded-3xl bg-canvas p-4"
                >
                  <dd className="mt-1 text-sm font-bold text-ink">{value}</dd>
                  <dt className="text-xs font-semibold text-faint">{label}</dt>
                  <Icon className="mb-3 h-5 w-5 text-brand" />
                </motion.div>
              ))}
            </dl>

            {/* Overview */}
            <section className="mt-12">
              <h2 className="font-display text-3xl font-medium tracking-[-0.03em] text-ink">{tp.overviewTitle}</h2>
              <div className="mt-4 space-y-4 text-base leading-8 text-muted md:text-lg">
                {tp.overview.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <h3 className="mt-10 text-xl font-bold text-ink">{tp.highlightsTitle}</h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {t.tour.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-center gap-3 rounded-2xl border border-ink/8 px-4 py-3.5 text-[15px] font-semibold text-ink-soft">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent-strong">
                      <CheckIcon className="h-4 w-4" />
                    </span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </section>

            {/* Itinerary */}
            <section className="mt-16">
              <h2 className="font-display text-3xl font-medium tracking-[-0.03em] text-ink">{tp.itineraryTitle}</h2>
              <nav aria-label={tp.jumpLabel} className="mt-5 flex gap-2 overflow-x-auto pb-1">
                {t.tour.days.map((day, index) => (
                  <a
                    key={day.title}
                    href={`#day-${index + 1}`}
                    className="shrink-0 rounded-full border border-ink/10 px-4 py-2 text-sm font-semibold text-ink-soft transition hover:border-accent hover:bg-accent-soft hover:text-ink"
                  >
                    {t.common.day(index + 1)}
                  </a>
                ))}
              </nav>

              <ol className="mt-8 space-y-6">
                {t.tour.days.map((day, index) => {
                  const n = index + 1;
                  return (
                    <motion.li
                      key={day.title}
                      id={`day-${n}`}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.15 }}
                      transition={{ duration: 0.8, ease: EASE }}
                      className="premium-card overflow-hidden"
                    >
                      <article className="grid md:grid-cols-[0.95fr_1.05fr]">
                        <div className="relative min-h-[240px] md:min-h-full">
                          <Image src={TOUR.dayImages[index]} alt={day.title} fill sizes="(min-width: 1024px) 380px, (min-width: 768px) 45vw, 100vw" className="object-cover" />
                          <span className="absolute top-4 left-4 rounded-xl bg-ink px-3.5 py-2 font-display text-lg leading-none font-medium tracking-[-0.03em] text-white shadow-lift">
                            {t.common.day(n)}
                          </span>
                          <button
                            type="button"
                            onClick={() => setCard(index)}
                            className="absolute right-4 bottom-4 inline-flex items-center gap-2 rounded-full bg-white/92 px-3.5 py-2 text-xs font-bold text-ink shadow-soft backdrop-blur transition hover:bg-white"
                          >
                            <ExpandIcon className="h-3.5 w-3.5" />
                            {tp.viewCard}
                          </button>
                        </div>

                        <div className="p-6 md:p-7">
                          <p className="flex items-center gap-2 text-xs font-bold tracking-[0.08em] text-accent-strong uppercase">
                            <PinIcon className="h-4 w-4 shrink-0" />
                            {day.route}
                          </p>
                          <h3 className="mt-2 font-display text-2xl leading-tight font-medium tracking-[-0.03em] text-ink md:text-[1.7rem]">
                            {day.title}
                          </h3>
                          <p className="mt-3 text-[15px] leading-7 text-muted">{day.summary}</p>

                          <h4 className="mt-6 text-xs font-bold tracking-[0.16em] text-faint uppercase">{tp.planTitle}</h4>
                          <ul className="mt-3 space-y-2">
                            {day.activities.map((activity, i) => (
                              <li key={activity} className="flex items-center gap-3 text-[15px] font-medium text-ink-soft">
                                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-white">
                                  <TripIcon name={TOUR.dayIcons[index][i]} className="h-4 w-4" />
                                </span>
                                {activity}
                              </li>
                            ))}
                          </ul>

                          <p className="mt-6 inline-flex items-center gap-2.5 rounded-xl bg-brand-strong px-4 py-2.5 text-sm font-bold text-white">
                            <StayIconView name={TOUR.stayIcons[index]} className="h-4 w-4 text-accent" />
                            <span className="font-medium text-white/70">{t.common.overnight}:</span>
                            {day.overnight}
                          </p>
                        </div>
                      </article>

                      <div className="grid gap-px border-t border-ink/8 bg-ink/8 md:grid-cols-[repeat(auto-fit,minmax(0,1fr))]">
                        {day.about.map((block) => (
                          <div key={block.title} className="bg-canvas p-6 md:p-7">
                            <h4 className="flex items-center gap-2 font-display text-lg font-medium tracking-[-0.03em] text-ink">
                              <PinIcon className="h-4 w-4 shrink-0 text-accent" />
                              {block.title}
                            </h4>
                            <div className="mt-3 space-y-3 text-[15px] leading-7 text-muted">
                              {block.text.map((paragraph) => (
                                <p key={paragraph}>{paragraph}</p>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.li>
                  );
                })}
              </ol>
            </section>

            {/* Accommodation */}
            <section className="mt-16">
              <h2 className="font-display text-3xl font-medium tracking-[-0.03em] text-ink">{tp.staysTitle}</h2>
              <ul className="mt-6 grid gap-4 sm:grid-cols-3">
                {t.tour.stays.map((stay, index) => (
                  <li key={stay.place} className="rounded-3xl border border-ink/8 p-5">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-ink text-accent">
                      <StayIconView name={STAY_GROUP_ICONS[index]} className="h-5 w-5" />
                    </span>
                    <p className="mt-4 font-display text-xl font-medium tracking-[-0.03em] text-ink">{stay.nights}</p>
                    <p className="mt-1 text-[15px] leading-6 text-muted">{stay.place}</p>
                  </li>
                ))}
              </ul>
            </section>

            {/* Included / excluded */}
            <section className="mt-16">
              <div className="grid gap-5 md:grid-cols-2">
                <div className="rounded-3xl border border-ink/8 p-6">
                  <h2 className="font-display text-2xl font-medium tracking-[-0.03em] text-brand">{tp.includedTitle}</h2>
                  <ul className="mt-4 space-y-3">
                    {t.tour.included.map((item) => (
                      <li key={item} className="flex gap-3 text-[15px] leading-6 text-ink-soft">
                        <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-3xl border border-ink/8 p-6">
                  <h2 className="font-display text-2xl font-medium tracking-[-0.03em] text-accent-strong">{tp.excludedTitle}</h2>
                  <ul className="mt-4 space-y-3">
                    {t.tour.excluded.map((item) => (
                      <li key={item} className="flex gap-3 text-[15px] leading-6 text-ink-soft">
                        <XIcon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-5 rounded-3xl bg-canvas p-6">
                <h2 className="text-lg font-bold text-ink">{tp.bringTitle}</h2>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {t.tour.bring.map((item) => (
                    <li key={item} className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink-soft">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* FAQ */}
            <section className="mt-16">
              <h2 className="font-display text-3xl font-medium tracking-[-0.03em] text-ink">{tp.faqTitle}</h2>
              <div className="mt-6">
                <Accordion key={lang} items={t.faq.items} idPrefix="tour-faq" />
              </div>
              <div className="mt-6 flex flex-col items-start gap-4 rounded-3xl bg-brand-soft p-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-bold text-ink">{tp.askTitle}</p>
                  <p className="mt-1 text-[15px] leading-7 text-ink-soft">{tp.askBody}</p>
                </div>
                <Button href="/contact" variant="outline" size="sm">
                  {tp.askCta}
                </Button>
              </div>
            </section>
          </div>

          {/* Booking card */}
          <aside id="booking" className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[28px] border border-ink/8 bg-white p-6 shadow-lift">
              {hasPrice ? (
                <p>
                  <span className="block text-sm font-semibold text-faint">{t.common.from}</span>
                  <span className="font-display text-4xl font-medium text-ink">{formatPrice(TOUR.priceFrom, TOUR.currency, lang)}</span>
                  <span className="ml-1.5 text-sm text-faint">/ {t.common.perPerson}</span>
                </p>
              ) : (
                <p className="font-display text-3xl font-medium tracking-[-0.03em] text-ink">{t.common.onRequest}</p>
              )}
              <p className="mt-2 text-sm font-semibold text-muted">
                {t.tour.name} · {t.tour.duration}
              </p>

              <div className="mt-6 space-y-4">
                <div>
                  <label htmlFor="tour-departure" className="field-label">
                    {tp.sidebar.departure}
                  </label>
                  <div className="relative">
                    <select
                      id="tour-departure"
                      value={departure}
                      onChange={(event) => setDeparture(event.target.value as DepartureKey)}
                      className="field-input cursor-pointer appearance-none pr-11"
                    >
                      {DEPARTURES.map((key) => (
                        <option key={key} value={key}>
                          {t.tour.departures[key]}
                        </option>
                      ))}
                    </select>
                    <ChevronDownIcon className="pointer-events-none absolute top-1/2 right-4 h-4 w-4 -translate-y-1/2 text-faint" />
                  </div>
                  {departure === "festival" ? <p className="mt-2 text-xs leading-5 text-faint">{t.tour.departureNote}</p> : null}
                </div>

                {departure === "private" ? (
                  <div>
                    <label htmlFor="tour-date" className="field-label">
                      {tp.sidebar.date}
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
                ) : null}

                <div>
                  <span className="field-label" id="travelers-label">
                    {tp.sidebar.travelers}
                  </span>
                  <div className="flex items-center justify-between rounded-2xl border border-ink/12 p-1.5" role="group" aria-labelledby="travelers-label">
                    <button
                      type="button"
                      onClick={() => setTravelers((n) => Math.max(1, n - 1))}
                      disabled={travelers <= 1}
                      aria-label={tp.sidebar.decrease}
                      className="flex h-10 w-10 items-center justify-center rounded-xl bg-canvas text-ink transition hover:bg-ink/8 disabled:opacity-40"
                    >
                      <MinusIcon className="h-4 w-4" />
                    </button>
                    <span className="text-[15px] font-bold text-ink" aria-live="polite">
                      {t.common.travelers(travelers)}
                    </span>
                    <button
                      type="button"
                      onClick={() => setTravelers((n) => Math.min(TOUR.maxTravelers, n + 1))}
                      disabled={travelers >= TOUR.maxTravelers}
                      aria-label={tp.sidebar.increase}
                      className="flex h-10 w-10 items-center justify-center rounded-xl bg-canvas text-ink transition hover:bg-ink/8 disabled:opacity-40"
                    >
                      <PlusIcon className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              <Button href={bookingHref} variant="secondary" size="lg" className="mt-6 w-full">
                {tp.sidebar.request}
              </Button>
              <p className="mt-4 text-center text-xs leading-5 text-faint">{tp.sidebar.note}</p>
            </div>
          </aside>
        </div>
      </div>

      {/* Mobile booking bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink/8 bg-white/95 px-4 py-3 backdrop-blur-xl lg:hidden">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4">
          <div className="min-w-0">
            {hasPrice ? (
              <>
                <p className="text-xs font-semibold text-faint">{t.common.from}</p>
                <p className="truncate text-lg font-extrabold text-ink">{formatPrice(TOUR.priceFrom, TOUR.currency, lang)}</p>
              </>
            ) : (
              <>
                <p className="truncate text-xs font-semibold text-faint">{t.tour.duration}</p>
                <p className="truncate font-bold text-ink">{t.common.onRequest}</p>
              </>
            )}
          </div>
          <Button href={bookingHref} variant="secondary">
            {tp.sidebar.request}
          </Button>
        </div>
      </div>

      <CardViewer index={card} onClose={() => setCard(null)} onChange={setCard} />
    </div>
  );
};

export default TourPage;
