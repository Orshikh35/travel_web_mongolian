"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import SectionHeading from "./SectionHeading";
import { PlusIcon } from "./Icons";

type AccordionItem = { q: string; a: string };

export const Accordion = ({ items, idPrefix }: { items: AccordionItem[]; idPrefix: string }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-ink/8 overflow-hidden rounded-[28px] border border-ink/8 bg-white shadow-soft">
      {items.map((item, index) => {
        const open = openIndex === index;
        const panelId = `${idPrefix}-panel-${index}`;
        return (
          <div key={item.q}>
            <h3>
              <button
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : index)}
                className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left text-base font-bold text-ink transition hover:bg-canvas md:px-8 md:py-6 md:text-lg"
              >
                {item.q}
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition ${
                    open ? "rotate-45 border-brand bg-brand text-white" : "border-ink/12 text-ink"
                  }`}
                >
                  <PlusIcon className="h-4 w-4" />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {open ? (
                <motion.div
                  id={panelId}
                  role="region"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 text-[15px] leading-7 text-muted md:px-8 md:pr-20">{item.a}</p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

const TravelTips = () => {
  const { t, lang } = useLanguage();

  return (
    <section className="section-padding">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <SectionHeading eyebrow={t.tips.eyebrow} title={t.tips.title} description={t.tips.description} className="lg:sticky lg:top-32 lg:self-start" />
        {/* Remount on language change so the open item resets cleanly. */}
        <Accordion key={lang} items={t.tips.items} idPrefix="tips" />
      </div>
    </section>
  );
};

export default TravelTips;
