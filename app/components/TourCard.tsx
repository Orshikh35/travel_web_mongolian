"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { Tour } from "../data/tours";
import { formatPrice } from "../lib/format";
import { ArrowRightIcon, ClockIcon, PinIcon, StarIcon } from "./Icons";
import { useTilt } from "./motion";

const TAG_STYLES = {
  popular: "bg-sand text-white",
  new: "bg-brand text-white",
  special: "bg-white text-ink",
} as const;

type Props = {
  tour: Tour;
  index?: number;
  // In filterable grids, cards animate out and glide to their new position instead of jumping.
  inGrid?: boolean;
};

const TourCard = ({ tour, index = 0, inGrid = false }: Props) => {
  const { lang, t } = useLanguage();
  const { rotateX, rotateY, shine, handlers } = useTilt(5);
  const tag = tour.tags[0];
  const entry = inGrid
    ? { animate: { opacity: 1, y: 0, scale: 1 } }
    : { whileInView: { opacity: 1, y: 0, scale: 1 }, viewport: { once: true, amount: 0.2 } };

  return (
    <motion.article
      layout={inGrid}
      initial={{ opacity: 0, y: 40, scale: 0.97 }}
      {...entry}
      exit={{ opacity: 0, scale: 0.92, transition: { duration: 0.2 } }}
      transition={{ duration: 0.6, delay: Math.min(index, 6) * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="h-full perspective-distant"
    >
      <motion.div
        {...handlers}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
        className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-ink/8 bg-white shadow-soft transition-shadow duration-500 hover:shadow-lift"
      >
        <div className="relative aspect-4/3 overflow-hidden">
          <Image
            src={tour.coverImage}
            alt={tour.title[lang]}
            fill
            sizes="(min-width: 1280px) 400px, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition duration-1200 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-linear-to-t from-ink/60 via-transparent to-transparent" />
          <div className="absolute inset-x-4 top-4 flex items-start justify-between gap-2">
            <span className="rounded-full bg-white/92 px-3 py-1.5 text-xs font-bold text-brand-strong backdrop-blur">
              {t.common.categories[tour.category]}
            </span>
            {tag ? (
              <span className={`rounded-full px-3 py-1.5 text-xs font-bold shadow-sm ${TAG_STYLES[tag]}`}>{t.common.tags[tag]}</span>
            ) : null}
          </div>
          <div className="absolute inset-x-4 bottom-4 flex translate-y-1 items-center gap-4 text-sm font-semibold text-white transition duration-500 group-hover:translate-y-0">
            <span className="flex min-w-0 items-center gap-1.5">
              <PinIcon className="h-4 w-4 shrink-0" />
              <span className="truncate">{tour.destination[lang]}</span>
            </span>
            <span className="flex shrink-0 items-center gap-1.5">
              <ClockIcon className="h-4 w-4" />
              {tour.duration[lang]}
            </span>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-xl leading-snug font-bold tracking-[-0.025em] text-ink transition-colors group-hover:text-brand-strong">
            <Link href={`/tours/${tour.slug}`} className="after:absolute after:inset-0 after:z-10 after:content-[''] focus-visible:outline-none">
              {tour.title[lang]}
            </Link>
          </h3>
          <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted">{tour.summary[lang]}</p>

          <ul className="mt-4 flex flex-wrap gap-2">
            {tour.highlights[lang].slice(0, 3).map((highlight) => (
              <li key={highlight} className="rounded-full bg-sand-soft px-3 py-1.5 text-xs font-semibold text-sand-strong">
                {highlight}
              </li>
            ))}
          </ul>

          <div className="mt-auto flex items-end justify-between gap-4 border-t border-ink/8 pt-5">
            <div>
              {tour.priceFrom > 0 ? (
                <>
                  <p className="text-xs font-semibold text-faint">{t.common.from}</p>
                  <p className="mt-0.5 text-xl font-extrabold tracking-[-0.02em] text-ink">
                    {formatPrice(tour.priceFrom, tour.currency, lang)}
                    <span className="ml-1 text-xs font-medium text-faint">/ {t.common.perPerson}</span>
                  </p>
                </>
              ) : (
                <p className="text-base font-bold text-ink">{t.common.onRequest}</p>
              )}
              {tour.rating ? (
                <p className="mt-1.5 flex items-center gap-1 text-xs font-semibold text-ink-soft">
                  <StarIcon className="h-3.5 w-3.5 text-sand" />
                  {tour.rating.toFixed(1)}
                  {tour.reviewCount ? <span className="font-medium text-faint">· {t.common.reviews(tour.reviewCount)}</span> : null}
                </p>
              ) : null}
            </div>
            <span
              aria-hidden="true"
              className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-ink text-white transition-colors duration-300 group-hover:bg-brand"
            >
              <ArrowRightIcon className="h-4 w-4 transition duration-300 group-hover:translate-x-8" />
              <ArrowRightIcon className="absolute h-4 w-4 -translate-x-8 transition duration-300 group-hover:translate-x-0" />
            </span>
          </div>
        </div>

        {/* Light sheen that follows the pointer */}
        <motion.div
          aria-hidden="true"
          style={{ background: shine }}
          className="pointer-events-none absolute inset-0 opacity-0 mix-blend-soft-light transition-opacity duration-500 group-hover:opacity-100"
        />
      </motion.div>
    </motion.article>
  );
};

export default TourCard;
