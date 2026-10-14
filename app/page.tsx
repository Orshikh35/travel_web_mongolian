"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Hero from "./components/Hero";
import Destinations from "./components/Destinations";
import FeaturedTours from "./components/FeaturedTours";
import TravelTips from "./components/TravelTips";
import Features from "./components/Features";
import Reviews from "./components/Reviews";
import Button from "./components/Button";
import { CheckIcon } from "./components/Icons";
import { Marquee, SplitText, useParallax } from "./components/motion";
import { useLanguage } from "./context/LanguageContext";
import { TOURS } from "./data/tours";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Home() {
  const { lang, t } = useLanguage();
  const bannerRef = useRef<HTMLDivElement>(null);
  const bannerY = useParallax(bannerRef, 70);
  const marqueeItems = Array.from(new Set(TOURS.map((tour) => tour.title[lang])));

  return (
    <div className="overflow-hidden">
      <Hero />

      <div className="border-y border-ink/8 bg-ink py-5 text-lg font-bold tracking-[-0.02em] text-white/90 md:text-xl">
        <Marquee items={marqueeItems} />
      </div>

      <Destinations />
      <FeaturedTours />
      <TravelTips />

      <section>
        <div className="container-shell">
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1, ease: EASE }}
            className="relative isolate grid gap-10 overflow-hidden rounded-[36px] bg-brand-strong px-6 py-12 text-white sm:px-10 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-14 lg:py-16"
          >
            <div className="pointer-events-none absolute -top-24 -right-24 -z-10 h-80 w-80 animate-float rounded-full bg-sand/30 blur-3xl" aria-hidden="true" />
            <div className="pointer-events-none absolute -bottom-32 -left-20 -z-10 h-96 w-96 animate-float-slow rounded-full bg-brand/60 blur-3xl" aria-hidden="true" />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07] bg-[radial-gradient(white_1px,transparent_1px)] bg-size-[22px_22px]"
            />
            <div>
              <span className="inline-flex rounded-full border border-white/20 px-4 py-2 text-xs font-semibold tracking-[0.2em] text-white/80 uppercase">
                {t.custom.eyebrow}
              </span>
              <h2 className="mt-5 text-3xl leading-tight font-bold tracking-[-0.035em] text-balance sm:text-4xl md:text-5xl">
                <SplitText text={t.custom.title} delay={0.2} />
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-white/80 md:text-lg">{t.custom.description}</p>
            </div>
            <div>
              <ul className="space-y-3">
                {t.custom.points.map((point, index) => (
                  <motion.li
                    key={point}
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.7, delay: 0.3 + index * 0.12, ease: EASE }}
                    whileHover={{ x: 6 }}
                    className="flex gap-3 rounded-2xl border border-white/10 bg-white/8 px-5 py-4 text-[15px] leading-7 text-white/90 backdrop-blur-sm transition-colors hover:bg-white/12"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sand">
                      <CheckIcon className="h-3.5 w-3.5" />
                    </span>
                    {point}
                  </motion.li>
                ))}
              </ul>
              <Button href="/contact" variant="light" className="mt-6">
                {t.custom.cta}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Features />
      <Reviews />

      <section className="section-padding">
        <div className="container-shell">
          <div ref={bannerRef} className="relative isolate overflow-hidden rounded-[36px]">
            <motion.div style={{ y: bannerY }} className="absolute -inset-y-24 inset-x-0 -z-20">
              <Image src="/oooo.jpg" alt="" fill sizes="(min-width: 1280px) 1280px, 100vw" className="object-cover" />
            </motion.div>
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(9,22,18,0.25)_0%,rgba(9,22,18,0.7)_100%)]" />
            <div className="flex min-h-[440px] flex-col items-center justify-center px-6 py-16 text-center text-white sm:px-10 md:min-h-[520px]">
              <h2 className="max-w-3xl text-3xl leading-[1.08] font-extrabold tracking-[-0.045em] text-balance md:text-6xl">
                <SplitText text={t.banner.title} />
              </h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/85 md:text-lg"
              >
                {t.banner.description}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, damping: 16, delay: 0.6 }}
              >
                <Button href="/tours" variant="secondary" size="lg" className="mt-8">
                  {t.banner.cta}
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
