"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { TEXTS } from "../ui-texts";

const Hero = () => {
  const { lang } = useLanguage();
  const t = TEXTS[lang].hero;

  return (
          <div className="relative z-10 flex min-h-[calc(100vh-7rem)] flex-col items-center justify-center px-6 py-16 text-center text-white sm:px-10 mt-24">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl text-xs font-medium tracking-[0.08em] text-white/78 md:text-sm"
            >
              {t.eyebrow}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.1 }}
              className="mx-auto mt-6 max-w-5xl text-balance text-4xl font-semibold leading-[0.98] tracking-[-0.05em] text-white md:text-6xl xl:text-[5.3rem]"
            >
              {t.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.2 }}
              className="mx-auto mt-7 max-w-3xl text-base leading-8 text-white/84 md:text-lg"
            >
              {t.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.3 }}
              className="mt-9 inline-flex items-center rounded-full bg-white px-5 py-3 text-xs font-semibold tracking-[0.04em] text-[#10231d] md:text-sm"
            >
              {t.primaryCta}
            </motion.div>
          </div>
  );
};

export default Hero;
