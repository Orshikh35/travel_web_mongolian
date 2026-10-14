"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { ArrowRightIcon, ChevronDownIcon, SearchIcon, StarIcon } from "./Icons";
import { CountUp, SplitText } from "./motion";

const CATEGORY_OPTIONS = ["all", "domestic", "outbound", "custom"] as const;
const EASE = [0.22, 1, 0.36, 1] as const;

const Hero = () => {
  const { t } = useLanguage();
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof CATEGORY_OPTIONS)[number]>("all");

  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  // Background drifts slower than the page, content lifts away and fades as you scroll past.
  const bgY = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["0%", "22%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, -140]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    const params = new URLSearchParams();
    if (query.trim()) params.set("q", query.trim());
    if (category !== "all") params.set("category", category);
    const search = params.toString();
    router.push(search ? `/tours?${search}` : "/tours");
  };

  const [experience, rating] = t.about.metrics;

  return (
    <section ref={sectionRef} className="relative isolate flex min-h-svh items-center overflow-hidden text-white">
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-20">
        <motion.div
          initial={{ scale: 1.18 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.8, ease: EASE }}
          className="absolute inset-0"
        >
          <Image src="/oo.jpg" alt="" fill priority sizes="100vw" className="object-cover object-center" />
        </motion.div>
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(9,22,18,0.6)_0%,rgba(9,22,18,0.3)_40%,rgba(9,22,18,0.85)_100%)]" />
      <div aria-hidden="true" className="pointer-events-none absolute top-1/4 -left-32 -z-10 h-96 w-96 animate-float rounded-full bg-sand/25 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 bottom-10 -z-10 h-112 w-112 animate-float-slow rounded-full bg-brand/30 blur-3xl" />

      {/* Floating glass badges on wide screens */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.1, ease: EASE }}
        className="absolute top-[38%] left-8 hidden xl:block 2xl:left-16"
      >
        <motion.div
          animate={reduce ? undefined : { y: [0, -12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 shadow-2xl backdrop-blur-xl"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sand">
            <StarIcon className="h-5 w-5" />
          </span>
          <span>
            <span className="block text-lg leading-none font-extrabold">{rating.value}</span>
            <span className="block text-xs text-white/75">{rating.label}</span>
          </span>
        </motion.div>
      </motion.div>
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.3, ease: EASE }}
        className="absolute top-[28%] right-8 hidden xl:block 2xl:right-16"
      >
        <motion.div
          animate={reduce ? undefined : { y: [0, 12, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="rounded-2xl border border-white/20 bg-white/10 px-5 py-3 shadow-2xl backdrop-blur-xl"
        >
          <span className="block text-2xl leading-none font-extrabold">{experience.value}</span>
          <span className="mt-1 block text-xs text-white/75">{experience.label}</span>
        </motion.div>
      </motion.div>

      <motion.div style={{ y: contentY, opacity: contentOpacity }} className="container-shell pt-32 pb-24 md:pt-40">
        <div className="mx-auto max-w-4xl text-center">
          <motion.p
            key={t.hero.eyebrow}
            initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold tracking-[0.06em] text-white/90 backdrop-blur-md md:text-sm"
          >
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sand opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-sand" />
            </span>
            {t.hero.eyebrow}
          </motion.p>

          <h1 className="mt-6 text-4xl leading-[1.04] font-extrabold tracking-[-0.045em] text-balance sm:text-5xl md:text-6xl xl:text-7xl">
            <SplitText text={t.hero.title} delay={0.25} onView={false} />
          </h1>

          <motion.p
            key={t.hero.description}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: EASE }}
            className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/85 md:text-lg"
          >
            {t.hero.description}
          </motion.p>
        </div>

        <motion.form
          onSubmit={handleSearch}
          role="search"
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.85, ease: EASE }}
          className="mx-auto mt-10 grid max-w-3xl gap-2 rounded-[28px] bg-white p-2 text-ink shadow-[0_30px_80px_rgba(0,0,0,0.35)] ring-1 ring-white/40 md:grid-cols-[1.4fr_1fr_auto] md:rounded-full"
        >
          <label className="flex items-center gap-3 rounded-full px-4 py-2 transition focus-within:bg-canvas md:pl-6">
            <SearchIcon className="h-5 w-5 shrink-0 text-brand" />
            <span className="flex-1">
              <span className="block text-[11px] font-bold tracking-[0.14em] text-faint uppercase">{t.hero.searchLabel}</span>
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={t.hero.searchPlaceholder}
                className="w-full bg-transparent text-[15px] font-semibold text-ink outline-none placeholder:font-medium placeholder:text-faint"
              />
            </span>
          </label>

          <label className="relative flex items-center rounded-full px-4 py-2 transition focus-within:bg-canvas md:border-l md:border-ink/8 md:pl-6">
            <span className="flex-1">
              <span className="block text-[11px] font-bold tracking-[0.14em] text-faint uppercase">{t.hero.categoryLabel}</span>
              <select
                value={category}
                onChange={(event) => setCategory(event.target.value as (typeof CATEGORY_OPTIONS)[number])}
                className="w-full cursor-pointer appearance-none bg-transparent pr-6 text-[15px] font-semibold text-ink outline-none"
              >
                {CATEGORY_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {t.common.categories[option]}
                  </option>
                ))}
              </select>
            </span>
            <ChevronDownIcon className="pointer-events-none absolute right-4 h-4 w-4 text-faint" />
          </label>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-sand px-7 py-4 text-[15px] font-bold text-white transition-colors hover:bg-sand-strong"
          >
            <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" aria-hidden="true" />
            <span className="relative">{t.hero.searchButton}</span>
            <ArrowRightIcon className="relative h-4 w-4 transition-transform group-hover:translate-x-1" />
          </motion.button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.05 }}
          className="mt-6 text-center"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-white/90 underline-offset-4 hover:text-white hover:underline"
          >
            {t.hero.secondaryCta}
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.15, ease: EASE }}
          className="mx-auto mt-14 grid max-w-2xl grid-cols-3 divide-x divide-white/15 rounded-3xl border border-white/15 bg-white/8 py-5 backdrop-blur-md"
        >
          {t.hero.stats.map((stat) => (
            <div key={stat.label} className="px-3 text-center">
              <CountUp value={stat.value} className="block text-2xl font-extrabold tracking-[-0.03em] md:text-3xl" />
              <p className="mt-1 text-xs text-white/75 md:text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block"
      >
        <span className="flex h-11 w-7 justify-center rounded-full border-2 border-white/50 pt-2">
          <span className="h-2 w-1 animate-scroll-cue rounded-full bg-white" />
        </span>
      </motion.div>
    </section>
  );
};

export default Hero;
