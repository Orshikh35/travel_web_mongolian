"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { TOUR } from "../data/tour";
import Button from "./Button";
import { ArrowRightIcon } from "./Icons";
import { SplitText } from "./motion";

const EASE = [0.22, 1, 0.36, 1] as const;

const Hero = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  // Background drifts slower than the page, content lifts away and fades as you scroll past.
  const bgY = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["0%", "20%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, -120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section ref={sectionRef} className="p-2 sm:p-3">
      <div className="relative isolate flex min-h-[calc(100svh-1rem)] items-end overflow-hidden rounded-[28px] text-white sm:min-h-[calc(100svh-1.5rem)] sm:rounded-[40px]">
        <motion.div style={{ y: bgY }} className="absolute inset-0 -z-20">
          <motion.div
            initial={{ scale: 1.14 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.8, ease: EASE }}
            className="absolute inset-0"
          >
            {/* The eagle hunter stands on the right of the photo; keep him in frame on narrow screens. */}
            <Image
              src={TOUR.heroImage}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-[82%_center] md:object-center"
            />
          </motion.div>
        </motion.div>
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(11,16,35,0.45)_0%,rgba(11,16,35,0.05)_35%,rgba(11,16,35,0.2)_60%,rgba(11,16,35,0.85)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(11,16,35,0.6)_0%,rgba(11,16,35,0.25)_45%,rgba(11,16,35,0)_70%)]" />

        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="container-shell flex flex-col gap-10 pt-36 pb-8 md:pb-12 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-3xl">
            <motion.p
              key={t.hero.eyebrow}
              initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8 }}
              className="glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[11px] font-semibold tracking-[0.08em] text-white uppercase md:text-xs"
            >
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              {t.hero.eyebrow}
            </motion.p>

            <h1 className="display-title mt-6 text-[2.75rem] drop-shadow-[0_4px_30px_rgba(0,0,0,0.3)] sm:text-6xl md:text-7xl xl:text-[5.5rem]">
              <SplitText text={t.hero.title} delay={0.25} onView={false} />
            </h1>

            <motion.p
              key={t.hero.description}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: EASE }}
              className="mt-6 max-w-xl text-base leading-7 text-white/85 md:text-lg md:leading-8"
            >
              {t.hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.85, ease: EASE }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <Button href="/book" variant="light" size="lg" rightIcon={<ArrowRightIcon className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />}>
                {t.hero.primaryCta}
              </Button>
              <Link
                href="/tour"
                className="glass inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-medium text-white transition hover:bg-white/25"
              >
                {t.hero.secondaryCta}
              </Link>
            </motion.div>
          </div>

          {/* Next departure, as a frosted card in the corner. */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.1, ease: EASE }}
            className="glass w-full max-w-sm rounded-[28px] p-5 lg:w-80"
          >
            <p className="text-[11px] font-semibold tracking-[0.08em] text-white/70 uppercase">{t.tour.departures.festival}</p>
            <p className="mt-2 font-display text-2xl leading-tight font-medium tracking-[-0.03em]">{t.tour.name}</p>
            <div className="mt-4 flex items-center justify-between gap-3">
              <div className="flex flex-wrap gap-2 text-xs font-medium">
                <span className="rounded-full bg-white/15 px-3 py-1.5">{t.tour.duration}</span>
                <span className="rounded-full bg-white/15 px-3 py-1.5">{t.tour.season}</span>
              </div>
              <Link
                href="/tour"
                aria-label={t.hero.secondaryCta}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-ink transition hover:bg-accent hover:text-white"
              >
                <ArrowRightIcon className="h-4 w-4 -rotate-45" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
