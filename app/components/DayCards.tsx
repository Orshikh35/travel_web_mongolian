"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { TOUR } from "../data/tour";
import { ChevronLeftIcon, ChevronRightIcon, ExpandIcon, XIcon } from "./Icons";
import { SplitText } from "./motion";

// Full-screen viewer for the printed program cards, with keyboard support.
export const CardViewer = ({ index, onClose, onChange }: { index: number | null; onClose: () => void; onChange: (next: number) => void }) => {
  const { t } = useLanguage();
  const closeRef = useRef<HTMLButtonElement>(null);
  const count = TOUR.dayCards.length;
  const open = index !== null;

  const go = useCallback(
    (delta: number) => {
      if (index === null) return;
      onChange((index + delta + count) % count);
    },
    [count, index, onChange],
  );

  useEffect(() => {
    if (!open) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") go(1);
      if (event.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
      previouslyFocused?.focus();
    };
  }, [open, onClose, go]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={`${t.cards.dialogLabel} — ${t.common.day(index + 1)}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-[rgba(11,16,35,0.92)] p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <div className="absolute top-4 right-4 left-4 flex items-center justify-between text-white">
            <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold">
              {t.common.day(index + 1)} · {index + 1}/{count}
            </span>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label={t.common.close}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
            >
              <XIcon className="h-5 w-5" />
            </button>
          </div>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              go(-1);
            }}
            aria-label={t.common.previous}
            className="absolute left-3 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 md:left-8"
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="relative h-[min(82svh,900px)] w-full max-w-[600px]"
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={TOUR.dayCards[index]}
                alt={`${t.common.day(index + 1)} — ${t.tour.days[index].title}`}
                fill
                sizes="600px"
                className="object-contain"
              />
            </motion.div>
          </AnimatePresence>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              go(1);
            }}
            aria-label={t.common.next}
            className="absolute right-3 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 md:right-8"
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

// Left edge lines up with .container-shell (max-w-7xl + px-8) on wide screens.
const STRIP_PADDING = "max(1rem, calc((100% - 80rem) / 2 + 2rem))";

const DayCards = () => {
  const { t } = useLanguage();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="section-padding overflow-hidden">
      <div className="container-shell">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="section-eyebrow">{t.cards.eyebrow}</span>
            <h2 className="section-title">
              <SplitText text={t.cards.title} delay={0.1} />
            </h2>
            <p className="section-copy mt-5">
              {t.cards.description}
              {t.cards.languageNote ? <span className="mt-2 block text-sm font-semibold text-faint">{t.cards.languageNote}</span> : null}
            </p>
          </div>
        </div>
      </div>

      {/* Horizontal strip aligned with the page container on the left, bleeding off the right edge. */}
      <div className="mt-12">
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.07 }}
          style={{ paddingInline: STRIP_PADDING, scrollPaddingInline: STRIP_PADDING }}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto pt-2 pb-6 [scrollbar-width:thin]"
        >
          {TOUR.dayCards.map((src, index) => (
            <motion.li
              key={src}
              variants={{
                hidden: { opacity: 0, y: 40, rotate: index % 2 ? 2 : -2 },
                visible: { opacity: 1, y: 0, rotate: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
              }}
              className="shrink-0 snap-start"
            >
              <button
                type="button"
                onClick={() => setOpen(index)}
                aria-label={t.cards.open(index + 1)}
                className="group relative block w-[230px] overflow-hidden rounded-[28px] bg-canvas p-2 transition duration-500 hover:-translate-y-2 hover:shadow-lift sm:w-[260px]"
              >
                <span className="relative block aspect-[2/3]">
                  <Image src={src} alt="" fill sizes="260px" className="object-contain" />
                </span>
                <span className="absolute inset-0 flex items-end justify-end bg-linear-to-t from-ink/50 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink">
                    <ExpandIcon className="h-4 w-4" />
                  </span>
                </span>
              </button>
            </motion.li>
          ))}
        </motion.ul>
      </div>

      <CardViewer index={open} onClose={() => setOpen(null)} onChange={setOpen} />
    </section>
  );
};

export default DayCards;
