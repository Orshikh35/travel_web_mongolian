"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { TOUR, chapterOf } from "../data/tour";
import Button from "./Button";
import { ArrowLeftIcon, ArrowRightIcon, PinIcon } from "./Icons";
import { StayIconView, TripIcon } from "./TripIcons";

const EASE = [0.22, 1, 0.36, 1] as const;

// Positions are projected from real coordinates (lon 87.55–90.25°E, lat 48.35–49.35°N) onto a 640×360 canvas,
// the same box as the relief image rendered from elevation data. Route lines follow the valleys roughly, not the exact roads.
const RELIEF = "/images/altai-relief.jpg";
type StopKey = "tavanBogd" | "glacier" | "khoton" | "waterfall" | "khurgan" | "ulaankhus" | "olgii";
const STOPS: Record<StopKey, { x: number; y: number; days: number[] }> = {
  glacier: { x: 58, y: 52, days: [2] },
  tavanBogd: { x: 82, y: 76, days: [1, 2] },
  khoton: { x: 178, y: 252, days: [3] },
  waterfall: { x: 192, y: 304, days: [3] },
  khurgan: { x: 250, y: 289, days: [3] },
  ulaankhus: { x: 448, y: 112, days: [4] },
  olgii: { x: 571, y: 137, days: [1, 5, 6, 7] },
};
const MAJOR: StopKey[] = ["olgii", "tavanBogd", "ulaankhus"];

// Where each label pill sits relative to its stop, so names don't cover the route or each other.
const LABELS: Record<StopKey, { dx: number; dy: number; anchor: "start" | "middle" | "end" }> = {
  glacier: { dx: 10, dy: -14, anchor: "start" },
  tavanBogd: { dx: 12, dy: 12, anchor: "start" },
  khoton: { dx: -12, dy: -12, anchor: "end" },
  waterfall: { dx: -12, dy: 12, anchor: "end" },
  khurgan: { dx: 12, dy: 12, anchor: "start" },
  ulaankhus: { dx: 0, dy: -20, anchor: "middle" },
  olgii: { dx: 0, dy: 24, anchor: "middle" },
};

// The stretch of road driven on each day, in order (Day 2 is the walk up to the glacier, Day 6 stays in Ölgii, Day 7 flies out east).
const DAY_PATHS: (string | null)[] = [
  "M571 137 C 530 122, 480 112, 448 112 C 410 100, 360 70, 310 58 C 240 48, 140 66, 82 76",
  "M82 76 L 58 52",
  "M82 76 C 96 130, 128 200, 152 234 C 165 246, 172 250, 178 252 C 186 270, 188 290, 192 304 C 212 300, 232 294, 250 289",
  "M250 289 C 290 280, 330 230, 360 190 S 420 130, 448 112",
  "M448 112 C 480 112, 530 122, 571 137",
  null,
  "M571 137 Q 604 104, 632 96",
];
const ROUTE = [DAY_PATHS[0], DAY_PATHS[2], DAY_PATHS[3]].join(" ");

// Rough text width for sizing label pills (CJK glyphs are about twice as wide).
const textWidth = (text: string, size: number) =>
  Array.from(text).reduce((sum, char) => sum + (char.codePointAt(0)! > 0x2e80 ? 1 : 0.58), 0) * size;

const RouteSection = () => {
  const { t } = useLanguage();
  const reduce = useReducedMotion();
  const days = t.tour.days;
  const [selected, setSelected] = useState(1);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const day = days[selected - 1];
  const chapter = chapterOf(selected);

  const select = (n: number, focus = false) => {
    const next = Math.max(1, Math.min(days.length, n));
    setSelected(next);
    const tab = tabRefs.current[next - 1];
    if (focus) tab?.focus();
    // Keep the chosen tab visible in the scrollable row on phones.
    tab?.scrollIntoView({ block: "nearest", inline: "nearest", behavior: reduce ? "auto" : "smooth" });
  };

  const isLit = (key: StopKey) => STOPS[key].days.includes(selected);
  // Clicking a stop on the map jumps to the first day spent there.
  const stopDay = (key: StopKey) => STOPS[key].days[0];

  return (
    <section className="pb-20 md:pb-28">
      <div className="container-shell">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="max-w-2xl font-display text-2xl leading-snug font-medium tracking-[-0.03em] text-ink md:text-3xl"
          >
            {t.route.description}
          </motion.p>
          <Button href="/tour" variant="outline" className="shrink-0 self-start md:self-auto" rightIcon={<ArrowRightIcon className="h-4 w-4" />}>
            {t.route.cta}
          </Button>
        </div>

        {/* Day picker */}
        <div
          role="tablist"
          aria-label={t.tourPage.jumpLabel}
          className="-mx-4 mt-10 flex snap-x gap-2 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:mx-0 sm:px-0 lg:grid lg:grid-cols-7 lg:overflow-visible [&::-webkit-scrollbar]:hidden"
          onKeyDown={(event) => {
            if (event.key === "ArrowRight") select(selected + 1, true);
            if (event.key === "ArrowLeft") select(selected - 1, true);
          }}
        >
          {days.map((_, index) => {
            const n = index + 1;
            const active = n === selected;
            return (
              <button
                key={n}
                ref={(node) => {
                  tabRefs.current[index] = node;
                }}
                type="button"
                role="tab"
                id={`route-tab-${n}`}
                aria-selected={active}
                aria-controls="route-panel"
                tabIndex={active ? 0 : -1}
                onClick={() => select(n)}
                className={`relative flex shrink-0 snap-start items-center justify-center rounded-full px-5 py-3.5 text-sm font-medium whitespace-nowrap transition-colors ${
                  active ? "text-white" : "bg-canvas text-ink hover:bg-ink/8"
                }`}
              >
                {active ? (
                  <motion.span
                    layoutId="route-tab-pill"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    className="absolute inset-0 rounded-full bg-ink"
                    aria-hidden="true"
                  />
                ) : null}
                <span className="relative flex items-center gap-2">
                  {/* Days already covered get a small tick of colour. */}
                  <span
                    aria-hidden="true"
                    className={`h-1.5 w-1.5 rounded-full transition-colors ${active || n < selected ? "bg-accent" : "bg-ink/20"}`}
                  />
                  {t.common.day(n)}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-[1.35fr_1fr] lg:items-start">
          {/* Map */}
          <motion.figure
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: EASE }}
            className="relative flex flex-col gap-4 overflow-hidden rounded-[36px] bg-ink p-2.5 sm:p-4 lg:sticky lg:top-28"
          >
            <svg viewBox="0 0 640 360" role="img" aria-label={t.route.mapLabel} className="relative block h-auto w-full">
              <defs>
                <clipPath id="relief-clip">
                  <rect width="640" height="360" rx="22" />
                </clipPath>
                <radialGradient id="relief-vignette" cx="50%" cy="45%" r="75%">
                  <stop offset="55%" stopColor="#0b1023" stopOpacity="0" />
                  <stop offset="100%" stopColor="#0b1023" stopOpacity="0.75" />
                </radialGradient>
                <filter id="route-glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" />
                </filter>
              </defs>

              {/* Relief rendered from elevation data: snow on the Tavan Bogd massif, the lakes in blue. */}
              <g clipPath="url(#relief-clip)">
                <image href={RELIEF} width="640" height="360" preserveAspectRatio="none" />
                <rect width="640" height="360" fill="url(#relief-vignette)" />
              </g>

              {/* North arrow */}
              <g transform="translate(610 30)" aria-hidden="true">
                <circle r="14" fill="rgba(11,16,35,0.6)" stroke="rgba(255,255,255,0.2)" />
                <path d="M0 -8 L5 5 L0 2 L-5 5 Z" fill="#ffffff" />
              </g>

              {/* Whole loop, faint */}
              <path d={ROUTE} fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 5" />

              {/* Days already travelled */}
              {DAY_PATHS.slice(0, selected - 1).map((d, index) =>
                d ? <path key={index} d={d} fill="none" stroke="#6aa3ff" strokeOpacity="0.8" strokeWidth="2.5" strokeLinecap="round" /> : null,
              )}

              {/* Today's stretch, drawn in when the day changes */}
              {DAY_PATHS[selected - 1] ? (
                <g key={selected}>
                  <path d={DAY_PATHS[selected - 1]!} fill="none" stroke="#2f7bf6" strokeWidth="8" strokeLinecap="round" filter="url(#route-glow)" />
                  <motion.path
                    d={DAY_PATHS[selected - 1]!}
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: reduce ? 1 : 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.1, ease: "easeInOut" }}
                  />
                </g>
              ) : null}

              {/* Flight out on the last day */}
              {selected === days.length ? (
                <g transform="translate(632 96) rotate(-30)" aria-hidden="true">
                  <path d="M-7 -2 L4 -2 L9 0 L4 2 L-7 2 Z M-2 -2 L-5 -8 L-2 -8 L3 -2 Z M-2 2 L-5 8 L-2 8 L3 2 Z" fill="#ffffff" />
                </g>
              ) : null}

              {/* Stops with label pills */}
              {(Object.keys(STOPS) as StopKey[]).map((key) => {
                const stop = STOPS[key];
                const label = LABELS[key];
                const lit = isLit(key);
                const major = MAJOR.includes(key);
                const name = t.route.places[key];
                const size = major ? 12 : 10.5;
                const width = textWidth(name, size) + 16;
                const height = major ? 22 : 19;
                const cx = stop.x + label.dx;
                const cy = stop.y + label.dy;
                const left = label.anchor === "start" ? cx : label.anchor === "end" ? cx - width : cx - width / 2;
                return (
                  <g key={key} onClick={() => select(stopDay(key))} className="cursor-pointer">
                    {lit ? (
                      <circle cx={stop.x} cy={stop.y} r="14" fill="#2f7bf6" fillOpacity="0.35">
                        <animate attributeName="r" values="8;18;8" dur="1.8s" repeatCount="indefinite" />
                        <animate attributeName="fill-opacity" values="0.45;0.1;0.45" dur="1.8s" repeatCount="indefinite" />
                      </circle>
                    ) : null}
                    {/* Larger invisible hit area for taps */}
                    <circle cx={stop.x} cy={stop.y} r="16" fill="transparent" />
                    <circle
                      cx={stop.x}
                      cy={stop.y}
                      r={major ? 6 : 4.5}
                      fill={lit ? "#2f7bf6" : "#ffffff"}
                      stroke={lit ? "#ffffff" : "#0b1023"}
                      strokeWidth={lit ? 2.5 : 2}
                      style={{ transition: "fill .25s, stroke .25s" }}
                    />
                    <rect
                      x={left}
                      y={cy - height / 2}
                      width={width}
                      height={height}
                      rx={height / 2}
                      fill={lit ? "#2f7bf6" : "rgba(11,16,35,0.78)"}
                      stroke={lit ? "none" : "rgba(255,255,255,0.18)"}
                      style={{ transition: "fill .25s" }}
                    />
                    <text
                      x={left + width / 2}
                      y={cy + size * 0.36}
                      textAnchor="middle"
                      fontSize={size}
                      fontWeight={major ? 600 : 500}
                      fill={lit ? "#ffffff" : "rgba(255,255,255,0.88)"}
                    >
                      {name}
                    </text>
                  </g>
                );
              })}

              {/* Start / finish flag at Ölgii */}
              <g transform="translate(571 137)" aria-hidden="true">
                <path d="M0 -6 V-26" stroke="#fff" strokeWidth="1.8" />
                <path d="M0 -26 H14 L10 -21.5 L14 -17 H0 Z" fill="#ffffff" />
              </g>
            </svg>
            <figcaption className="relative flex items-center justify-between gap-4 px-2 text-xs font-medium text-white/55">
              <span className="min-w-0 truncate">{t.route.note}</span>
              <span className="flex shrink-0 items-center gap-2 whitespace-nowrap text-white/70">
                <span className="h-0.5 w-5 rounded-full bg-white" aria-hidden="true" />
                {t.common.day(selected)}
              </span>
            </figcaption>

            {/* Filmstrip of the seven days; the tabs above are the accessible way to switch, so these stay out of the tab order. */}
            <div className="relative grid grid-cols-7 gap-1.5 sm:gap-2">
              {TOUR.dayImages.map((src, index) => {
                const n = index + 1;
                const active = n === selected;
                return (
                  <button
                    key={n}
                    type="button"
                    tabIndex={-1}
                    aria-hidden="true"
                    onClick={() => select(n)}
                    className={`group relative aspect-square overflow-hidden rounded-xl transition duration-300 sm:rounded-2xl ${
                      active ? "ring-2 ring-accent ring-offset-2 ring-offset-ink" : "opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={src}
                      alt=""
                      fill
                      sizes="96px"
                      className="object-cover transition duration-500 group-hover:scale-110"
                      style={{ objectPosition: TOUR.imageFocus[src] }}
                    />
                    <span className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                    <span className="absolute bottom-1 left-1.5 font-display text-xs font-medium text-white sm:bottom-1.5 sm:left-2 sm:text-sm">{n}</span>
                    {n < selected ? <span className="absolute top-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-accent" /> : null}
                  </button>
                );
              })}
            </div>
          </motion.figure>

          {/* Selected day */}
          <div
            id="route-panel"
            role="tabpanel"
            aria-labelledby={`route-tab-${selected}`}
            className="relative flex min-h-[460px] flex-col overflow-hidden rounded-[36px] bg-canvas p-3"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={selected}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: reduce ? 0 : 0.3, ease: EASE }}
                className="flex flex-1 flex-col"
              >
                {/* Photo of the day, with the day and chapter floating on it */}
                <div className="relative h-52 overflow-hidden rounded-[28px] sm:h-60">
                  <motion.div
                    initial={{ scale: reduce ? 1 : 1.08 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.2, ease: EASE }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={TOUR.dayImages[selected - 1]}
                      alt={day.title}
                      fill
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      className="object-cover"
                      style={{ objectPosition: TOUR.imageFocus[TOUR.dayImages[selected - 1]] }}
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-transparent" />
                  <div className="absolute inset-x-3 bottom-3 flex flex-wrap items-center gap-2 text-xs font-semibold">
                    <span className="rounded-full bg-accent px-3 py-1.5 text-white">{t.common.day(selected)}</span>
                    {chapter >= 0 ? <span className="glass rounded-full px-3 py-1.5 text-white">{t.journey.chapters[chapter].title}</span> : null}
                  </div>
                </div>

                <div className="flex flex-1 flex-col px-3 pt-5 pb-3 md:px-5">
                <h3 className="font-display text-3xl leading-[1.05] font-medium tracking-[-0.04em] text-balance text-ink">{day.title}</h3>
                <p className="mt-3 flex items-start gap-2 text-sm font-medium text-muted">
                  <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {day.route}
                </p>
                <p className="mt-4 text-[15px] leading-7 text-ink-soft">{day.summary}</p>

                <p className="mt-6 text-[11px] font-semibold tracking-[0.08em] text-faint uppercase">{t.tourPage.planTitle}</p>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {day.activities.map((activity, i) => (
                    <li key={activity} className="flex items-center gap-3 rounded-2xl bg-white px-3 py-2.5 text-sm text-ink">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-white">
                        <TripIcon name={TOUR.dayIcons[selected - 1][i]} className="h-4 w-4" />
                      </span>
                      <span className="leading-snug">{activity}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-6">
                  <span className="flex items-center gap-2 text-sm text-muted">
                    <StayIconView name={TOUR.stayIcons[selected - 1]} className="h-4 w-4 shrink-0 text-ink" />
                    {t.common.overnight}: <span className="font-semibold text-ink">{day.overnight}</span>
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => select(selected - 1)}
                      disabled={selected === 1}
                      aria-label={t.common.previous}
                      className="flex h-11 w-11 items-center justify-center rounded-full border-[1.5px] border-ink text-ink transition hover:bg-ink hover:text-white disabled:pointer-events-none disabled:border-ink/15 disabled:text-ink/20"
                    >
                      <ArrowLeftIcon className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => select(selected + 1)}
                      disabled={selected === days.length}
                      aria-label={t.common.next}
                      className="flex h-11 w-11 items-center justify-center rounded-full border-[1.5px] border-ink text-ink transition hover:bg-ink hover:text-white disabled:pointer-events-none disabled:border-ink/15 disabled:text-ink/20"
                    >
                      <ArrowRightIcon className="h-4 w-4" />
                    </button>
                    <Link
                      href={`/tour#day-${selected}`}
                      className="ml-1 inline-flex h-11 items-center rounded-full bg-ink px-5 text-sm font-medium text-white transition hover:bg-accent"
                    >
                      {t.route.explore}
                    </Link>
                  </div>
                </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RouteSection;
