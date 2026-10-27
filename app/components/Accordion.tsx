"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PlusIcon } from "./Icons";

type AccordionItem = { q: string; a: string };

export const Accordion = ({ items, idPrefix }: { items: AccordionItem[]; idPrefix: string }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const open = openIndex === index;
        const panelId = `${idPrefix}-panel-${index}`;
        return (
          <div key={item.q} className={`overflow-hidden rounded-[28px] transition-colors ${open ? "bg-ink text-white" : "bg-canvas text-ink"}`}>
            <h3>
              <button
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : index)}
                className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left font-display text-lg font-medium tracking-[-0.02em] md:px-8 md:py-6 md:text-xl"
              >
                {item.q}
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition ${
                    open ? "rotate-45 border-accent bg-accent text-white" : "border-ink/15 text-ink"
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
                  <p className="px-6 pb-6 text-[15px] leading-7 text-white/70 md:px-8 md:pr-20">{item.a}</p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
