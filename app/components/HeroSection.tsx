// app/components/HeroSection.tsx
"use client";

import { motion } from "framer-motion";
import { UiTexts } from "../ui-texts";

type Props = {
  texts: UiTexts["hero"];
  onCtaClick: () => void;
};

export default function HeroSection({ texts, onCtaClick }: Props) {
  return (
    <section className="relative h-screen w-full flex items-center justify-start">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('oo.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative z-10 max-w-[1400px] mx-auto px-12 md:px-20 w-full top-12"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/30 px-5 py-2 rounded-full mb-8"
        >
          <span className="text-xl">{texts.badge}</span>
          <span className="text-[12px] font-medium">{texts.badgeSub}</span>
        </motion.div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] max-w-4xl">
          {texts.titleLine1}
          <br />
          <span className="text-white font-bold">{texts.titleLine2}</span>
        </h1>

        {/* CTA Button */}
        <motion.button
          whileHover={{
            scale: 1.05,
            backgroundColor: "rgba(255,255,255,0.95)",
          }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="mt-10 bg-white text-black font-semibold px-8 py-3 rounded-full shadow-xl hover:shadow-4xl transition-all flex items-center gap-2 text-base"
          onClick={onCtaClick}
        >
          {texts.cta} <span className="text-lg">→</span>
        </motion.button>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-20 flex flex-wrap gap-6 max-w-3xl"
        >
          <Feature icon="📸" text={texts.feature1} />
          <Feature icon="🎯" text={texts.feature2} />
        </motion.div>
      </motion.div>
    </section>
  );
}

function Feature({ icon, text }: { icon: string; text: string }) {
  return (
    <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-4 max-w-[340px]">
      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 text-2xl">
        {icon}
      </div>
      <p className="text-sm text-white/90 leading-relaxed">{text}</p>
    </div>
  );
}
