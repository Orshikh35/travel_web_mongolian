"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import SectionHeading from "./SectionHeading";
import { ChatIcon, MapIcon, ShieldIcon, SparkIcon } from "./Icons";
import { SpotlightCard } from "./motion";

const ICONS = [MapIcon, SparkIcon, ShieldIcon, ChatIcon];

const Features = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding">
      <div className="container-shell">
        <SectionHeading eyebrow={t.features.eyebrow} title={t.features.title} description={t.features.description} />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {t.features.items.map((item, index) => {
            const Icon = ICONS[index % ICONS.length];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
                className="h-full"
              >
                <SpotlightCard className="premium-card group h-full p-7 transition-shadow duration-500 hover:shadow-lift">
                  <span aria-hidden="true" className="absolute -top-3 right-4 text-7xl font-extrabold text-ink/4 transition-colors duration-500 group-hover:text-brand/10">
                    0{index + 1}
                  </span>
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-soft text-brand transition duration-500 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-brand group-hover:text-white">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold tracking-[-0.025em] text-ink">{item.title}</h3>
                  <p className="mt-3 text-[15px] leading-7 text-muted">{item.description}</p>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
