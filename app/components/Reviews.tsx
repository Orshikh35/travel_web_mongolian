"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import SectionHeading from "./SectionHeading";
import { StarIcon } from "./Icons";
import { SpotlightCard } from "./motion";

// Initials stay the same in every language; order matches t.reviews.items.
const INITIALS = ["SJ", "MC", "EB"];

const Reviews = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding relative overflow-hidden bg-canvas">
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 animate-float rounded-full bg-sand/15 blur-3xl" />
      <div className="container-shell relative">
        <SectionHeading eyebrow={t.reviews.eyebrow} title={t.reviews.title} description={t.reviews.description} />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {t.reviews.items.map((review, index) => (
            <motion.div
              key={INITIALS[index]}
              initial={{ opacity: 0, y: 50, rotate: index === 1 ? 0 : index === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className={`h-full ${index === 1 ? "lg:translate-y-8" : ""}`}
            >
              <SpotlightCard className="premium-card h-full p-7 transition-shadow duration-500 hover:shadow-lift" color="rgba(199,118,43,0.14)">
                <figure className="flex h-full flex-col">
                  <span aria-hidden="true" className="absolute -top-6 right-5 font-serif text-[120px] leading-none text-sand/15">
                    ”
                  </span>
                  <div className="flex gap-0.5 text-sand" role="img" aria-label="5 / 5">
                    {Array.from({ length: 5 }).map((_, star) => (
                      <motion.span
                        key={star}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 400, damping: 15, delay: 0.3 + index * 0.12 + star * 0.07 }}
                      >
                        <StarIcon className="h-4 w-4" />
                      </motion.span>
                    ))}
                  </div>
                  <blockquote className="mt-5 flex-1 text-[15px] leading-8 text-ink-soft">“{review.content}”</blockquote>
                  <figcaption className="mt-6 flex items-center gap-4 border-t border-ink/8 pt-5">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-br from-brand to-brand-strong text-sm font-bold text-white">
                      {INITIALS[index]}
                    </span>
                    <span>
                      <span className="block font-bold text-ink">{review.name}</span>
                      <span className="block text-sm text-muted">{review.role}</span>
                    </span>
                  </figcaption>
                </figure>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
