"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { TOUR, chapterOf } from "../data/tour";
import SectionHeading from "./SectionHeading";
import { ArrowLeftIcon, ArrowRightIcon } from "./Icons";

// Cards further than this from the centre are hidden.
const VISIBLE_SIDE = 2;

const ArrowButton = ({ dir, disabled, onClick, label }: { dir: "prev" | "next"; disabled: boolean; onClick: () => void; label: string }) => (
  <button
    type="button"
    onClick={onClick}
    disabled={disabled}
    aria-label={label}
    className="flex h-14 w-14 items-center justify-center rounded-full border-[1.5px] border-ink text-ink transition hover:bg-ink hover:text-white disabled:pointer-events-none disabled:border-ink/15 disabled:text-ink/20"
  >
    {dir === "prev" ? <ArrowLeftIcon className="h-5 w-5" /> : <ArrowRightIcon className="h-5 w-5" />}
  </button>
);

// The seven days as a fanned deck of photo cards; the centre card is the one in focus.
const DayCarousel = () => {
  const { t } = useLanguage();
  const reduce = useReducedMotion();
  const days = t.tour.days;
  // Open on the middle day so the deck fans out to both sides.
  const [active, setActive] = useState(Math.floor(days.length / 2));
  const go = (next: number) => setActive(Math.max(0, Math.min(days.length - 1, next)));

  return (
    <section className="overflow-hidden pt-20 pb-16 md:pt-28 md:pb-20">
      <div className="container-shell">
        <SectionHeading eyebrow={t.route.eyebrow} title={t.route.title} align="center" />
      </div>

      <motion.div
        role="region"
        aria-roledescription="carousel"
        aria-label={t.route.title.replaceAll("*", "")}
        onPanEnd={(_, info) => {
          if (Math.abs(info.offset.x) > 50) go(active + (info.offset.x < 0 ? 1 : -1));
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") go(active + 1);
          if (event.key === "ArrowLeft") go(active - 1);
        }}
        style={{ touchAction: "pan-y" }}
        className="relative mx-auto mt-12 h-[480px] max-w-[1200px] [--step:min(46vw,220px)] md:mt-16 md:h-[520px] md:[--step:250px]"
      >
        {days.map((day, index) => {
          const offset = index - active;
          const distance = Math.abs(offset);
          const isActive = offset === 0;
          const chapter = chapterOf(index + 1);
          return (
            <article
              key={index}
              aria-hidden={!isActive}
              style={{
                zIndex: 10 - distance,
                opacity: distance > VISIBLE_SIDE ? 0 : 1,
                transform: `translateX(calc(-50% + ${offset} * var(--step))) scale(${1 - distance * 0.1})`,
                transition: reduce ? "none" : "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s",
              }}
              className={`absolute top-0 left-1/2 h-[480px] w-[min(80vw,320px)] overflow-hidden rounded-[36px] bg-ink text-white shadow-lift md:h-[520px] md:w-[340px] ${
                distance > VISIBLE_SIDE ? "pointer-events-none" : ""
              }`}
            >
              {/* Crisp photo on top, the same photo blurred underneath the copy. */}
              <Image src={TOUR.dayImages[index]} alt="" fill sizes="340px" className="scale-125 object-cover blur-2xl" />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute inset-x-0 top-0 h-[58%] [mask-image:linear-gradient(to_bottom,black_70%,transparent)]">
                <Image
                  src={TOUR.dayImages[index]}
                  alt=""
                  fill
                  sizes="340px"
                  className="object-cover"
                  style={{ objectPosition: TOUR.imageFocus[TOUR.dayImages[index]] }}
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 flex flex-col p-4 pt-0">
                <div className="flex items-start justify-between gap-3 px-1">
                  <h3 className="line-clamp-2 font-display text-[1.6rem] leading-[1.05] font-medium tracking-[-0.04em]">{day.title}</h3>
                  <span className="mt-1 shrink-0 rounded-full bg-ink px-3 py-1 text-xs font-semibold">{t.common.day(index + 1)}</span>
                </div>
                <p className="mt-3 line-clamp-3 px-1 text-sm leading-5 text-white/80">{day.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2 px-1 text-xs font-medium">
                  {chapter >= 0 ? <span className="rounded-full bg-white/15 px-3 py-1.5">{t.journey.chapters[chapter].title}</span> : null}
                  <span className="rounded-full bg-white/15 px-3 py-1.5">{day.overnight}</span>
                </div>
                <Link
                  href={`/tour#day-${index + 1}`}
                  tabIndex={isActive ? 0 : -1}
                  className="mt-4 flex items-center justify-center rounded-full bg-white py-3.5 text-base font-medium text-ink transition hover:bg-accent hover:text-white"
                >
                  {t.route.explore}
                </Link>
              </div>
              {/* Side cards: a tap brings them to the centre. */}
              {!isActive ? (
                <button
                  type="button"
                  tabIndex={-1}
                  onClick={() => go(index)}
                  aria-label={t.common.day(index + 1)}
                  className="absolute inset-0 bg-white/0 transition hover:bg-white/10"
                />
              ) : null}
            </article>
          );
        })}
      </motion.div>

      <div className="mt-10 flex items-center justify-center gap-6 md:gap-12">
        <ArrowButton dir="prev" disabled={active === 0} onClick={() => go(active - 1)} label={t.common.previous} />
        <Link href="/tour" className="group inline-flex items-center gap-2 text-lg font-medium text-ink md:text-xl">
          {t.route.cta}
        </Link>
        <ArrowButton dir="next" disabled={active === days.length - 1} onClick={() => go(active + 1)} label={t.common.next} />
      </div>
      <p className="sr-only" aria-live="polite">
        {`${t.common.day(active + 1)} — ${days[active].title}`}
      </p>
    </section>
  );
};

export default DayCarousel;
