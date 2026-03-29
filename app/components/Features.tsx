"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { TEXTS } from "../ui-texts";

const icons = [
  <svg key="map" className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 01.553-.894L9 2l6 3 5.447-2.724A1 1 0 0121 3.17v10.764a1 1 0 01-.553.894L15 18l-6 2z" />
  </svg>,
  <svg key="spark" className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 3l1.912 5.813L20 10.5l-4.688 3.188L16.875 20 12 16.875 7.125 20l1.563-6.313L4 10.5l6.088-1.687L12 3z" />
  </svg>,
  <svg key="wallet" className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-2m0-6h4v6h-4a3 3 0 110-6z" />
  </svg>,
  <svg key="shield" className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 3l7 4v5c0 4.971-3.582 8.847-7 9.963C8.582 20.847 5 16.971 5 12V7l7-4z" />
  </svg>,
];

const Features = () => {
  const { lang } = useLanguage();
  const t = TEXTS[lang].features;

  return (
    <section className="section-padding">
      <div className="container-shell">
        <div className="mb-12 max-w-3xl">
          <span className="section-eyebrow">{t.eyebrow}</span>
          <h2 className="section-title text-balance">{t.title}</h2>
          <p className="section-copy mt-5">{t.description}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {t.items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: index * 0.08 }}
              className="premium-card p-7 transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(16,35,29,0.09)]"
            >
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f4f8f7] text-[#0f766e]">
                {icons[index]}
              </div>
              <h3 className="text-xl font-semibold tracking-[-0.03em] text-[#10231d]">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-[#5d6b65]">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
