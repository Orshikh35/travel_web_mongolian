"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { TOUR } from "../data/tour";
import { ArrowRightIcon, FlagIcon } from "./Icons";
import { CountUp, Emphasis } from "./motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const rise = (index: number) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.8, delay: index * 0.1, ease: EASE },
});

// How many activities each chapter of the journey packs in — drawn as a row of dots.
const chapterActivities = (from: number, to: number, days: { activities: string[] }[]) =>
  days.slice(from - 1, to).reduce((sum, day) => sum + day.activities.length, 0);

const AboutBento = () => {
  const { t } = useLanguage();
  const chapters = TOUR.chapters.map((chapter, index) => ({
    ...chapter,
    title: t.journey.chapters[index].title,
    count: chapterActivities(chapter.from, chapter.to, t.tour.days),
  }));

  return (
    <section className="section-padding">
      <div className="container-shell">
        <div className="grid gap-6 md:grid-cols-2 md:gap-10">
          <motion.span {...rise(0)} className="section-eyebrow self-start justify-self-start">
            {t.journey.eyebrow}
          </motion.span>
          <motion.p {...rise(1)} className="font-display text-xl leading-snug font-medium tracking-[-0.02em] text-ink md:text-2xl">
            {t.journey.description}
          </motion.p>
        </div>

        <div className="mt-12 grid gap-4 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
          {/* Dark card */}
          <motion.div {...rise(0)} className="flex min-h-[320px] flex-col justify-between gap-8 rounded-[36px] bg-ink p-6 text-white md:p-7">
            <div className="flex items-center justify-between gap-4">
              <FlagIcon className="h-7 w-7" />
              <span className="flex items-center gap-2.5 text-xs text-white/70">
                {t.journey.inclusive}
                <span aria-hidden="true" className="flex h-5 w-9 items-center justify-end rounded-full bg-accent p-0.5">
                  <span className="h-4 w-4 rounded-full bg-white" />
                </span>
              </span>
            </div>
            <p className="font-display text-2xl leading-[1.2] font-medium tracking-[-0.03em] md:text-[1.75rem]">
              <Emphasis text={t.journey.title} />
            </p>
            <Link
              href="/book?departure=private"
              className="flex items-center justify-center rounded-full bg-white/10 px-6 py-4 text-base font-medium transition hover:bg-white hover:text-ink"
            >
              {t.tour.departures.private}
            </Link>
          </motion.div>

          {/* Photo card */}
          <motion.div {...rise(1)}>
            <Link
              href="/tour#day-5"
              className="group relative isolate flex h-full min-h-[320px] flex-col overflow-hidden rounded-[36px] p-3"
            >
              <Image
                src={TOUR.chapters[2].image}
                alt=""
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="-z-10 object-cover transition duration-[1.2s] ease-out group-hover:scale-105"
              />
              <span className="glass flex items-center justify-center rounded-full px-6 py-4 text-base font-medium text-white">
                {t.festival.eyebrow}
              </span>
              <span className="mt-auto ml-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-ink transition group-hover:bg-accent group-hover:text-white">
                <ArrowRightIcon className="h-4 w-4 -rotate-45" />
              </span>
            </Link>
          </motion.div>

          {/* Light card with the shape of the week */}
          <motion.div {...rise(2)} className="flex min-h-[320px] flex-col rounded-[36px] bg-canvas p-6 md:col-span-2 md:p-8 lg:col-span-1">
            <p className="font-display text-5xl leading-none font-medium tracking-[-0.05em] text-ink">{t.hero.facts[0].value}</p>
            <p className="mt-2 text-sm font-medium text-ink">{t.tour.startEnd}</p>
            <p className="mt-5 text-sm leading-6 text-faint">{t.route.description}</p>
            <ul className="mt-auto space-y-4 pt-6">
              {chapters.map((chapter) => (
                <li key={chapter.title} className="text-sm">
                  <span className="flex items-baseline justify-between gap-3">
                    <span className="font-medium text-ink">{chapter.title}</span>
                    <span className="text-xs whitespace-nowrap text-muted">{t.common.daysRange(chapter.from, chapter.to)}</span>
                  </span>
                  <motion.span
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ staggerChildren: 0.04 }}
                    className="mt-2 flex flex-wrap gap-1.5"
                    aria-hidden="true"
                  >
                    {Array.from({ length: chapter.count }, (_, index) => (
                      <motion.span
                        key={index}
                        variants={{ hidden: { scale: 0 }, visible: { scale: 1 } }}
                        className="h-2.5 w-2.5 rounded-full bg-accent"
                      />
                    ))}
                  </motion.span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Key numbers */}
        <dl className="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 md:mt-24 md:grid-cols-4">
          {t.hero.facts.map((fact, index) => (
            <motion.div key={fact.label} {...rise(index)} className="flex flex-col-reverse items-center text-center">
              <dt className="mt-2 max-w-[14rem] text-sm leading-5 text-faint">{fact.label}</dt>
              <dd className="font-display text-4xl leading-none font-medium tracking-[-0.05em] text-ink sm:text-5xl md:text-6xl">
                <CountUp value={fact.value} />
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default AboutBento;
