"use client";

import { motion } from "framer-motion";
import { UiTexts } from "../ui-texts";

type Props = {
  texts: UiTexts["hero"];
  onCtaClick: () => void;
};

export default function HeroSection({ texts, onCtaClick }: Props) {
  return (
    <section className="relative flex min-h-screen items-center justify-start">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 mx-auto w-full max-w-7xl px-8 pt-20 text-white"
      >
        <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur-xl">
          {texts.eyebrow}
        </div>

        <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-tight tracking-[-0.04em] md:text-7xl">
          {texts.title}
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 md:text-lg">{texts.description}</p>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          onClick={onCtaClick}
          className="mt-8 rounded-full bg-white px-6 py-3 text-sm font-medium text-[#10231d]"
        >
          {texts.primaryCta}
        </motion.button>
      </motion.div>
    </section>
  );
}
