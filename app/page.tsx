"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Hero from "./components/Hero";
import AboutBento from "./components/AboutBento";
import DayCarousel from "./components/DayCarousel";
import RouteSection from "./components/RouteSection";
import Features from "./components/Features";
import DayCards from "./components/DayCards";
import SectionHeading from "./components/SectionHeading";
import Button from "./components/Button";
import { Accordion } from "./components/Accordion";
import { ArrowRightIcon } from "./components/Icons";
import { TripIcon } from "./components/TripIcons";
import { Marquee, SplitText, useParallax } from "./components/motion";
import { useLanguage } from "./context/LanguageContext";
import { TOUR } from "./data/tour";

const EASE = [0.22, 1, 0.36, 1] as const;
const FESTIVAL_DAYS = [4, 5]; // zero-based: Day 5 and Day 6

export default function Home() {
  const { lang, t } = useLanguage();
  const festivalRef = useRef<HTMLDivElement>(null);
  const festivalY = useParallax(festivalRef, 50);
  const bannerRef = useRef<HTMLDivElement>(null);
  const bannerY = useParallax(bannerRef, 70);

  return (
    <div className="overflow-hidden">
      <Hero />

      <div className="py-6 font-display text-2xl font-medium tracking-[-0.03em] text-ink/80 md:text-3xl">
        <Marquee items={t.marquee} />
      </div>

      <AboutBento />
      <DayCarousel />
      <RouteSection />

      {/* Golden Eagle Festival */}
      <section className="px-2 sm:px-3">
        <div className="relative isolate overflow-hidden rounded-[28px] bg-ink py-16 text-white sm:rounded-[40px] md:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute -top-40 -right-32 -z-10 h-[28rem] w-[28rem] animate-float rounded-full bg-accent/25 blur-3xl" />
        <div className="container-shell grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <div ref={festivalRef} className="relative h-[380px] overflow-hidden rounded-[32px] sm:h-[480px] lg:h-[620px]">
            <motion.div style={{ y: festivalY }} className="absolute -inset-y-16 inset-x-0">
              <Image src={TOUR.festivalImage} alt={t.tour.days[4].title} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </motion.div>
          </div>

          <div>
            <span className="inline-flex items-center rounded-full bg-white/10 px-6 py-3 text-[11px] font-semibold tracking-[0.08em] text-white uppercase">
              {t.festival.eyebrow}
            </span>
            <h2 className="display-title mt-5 text-4xl sm:text-5xl md:text-6xl">
              <SplitText text={t.festival.title} delay={0.1} />
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/75 md:text-lg">{t.festival.description}</p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {FESTIVAL_DAYS.map((dayIndex, column) => (
                <motion.div
                  key={dayIndex}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, delay: column * 0.12, ease: EASE }}
                  className="rounded-[28px] bg-white/6 p-5"
                >
                  <span className="inline-flex rounded-full bg-accent px-3 py-1 text-xs font-semibold">{t.common.day(dayIndex + 1)}</span>
                  <h3 className="mt-3 font-display text-2xl font-medium tracking-[-0.03em]">{t.festival.dayLabels[column]}</h3>
                  <ul className="mt-4 space-y-2.5">
                    {t.tour.days[dayIndex].activities.map((activity, i) => (
                      <li key={activity} className="flex items-center gap-3 text-[15px] text-white/85">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-white">
                          <TripIcon name={TOUR.dayIcons[dayIndex][i]} className="h-4 w-4" />
                        </span>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <Button href="/book" variant="secondary" size="lg" className="mt-9" rightIcon={<ArrowRightIcon className="h-4 w-4" />}>
              {t.festival.cta}
            </Button>
          </div>
        </div>
        </div>
      </section>

      <Features />
      <DayCards />

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHeading eyebrow={t.faq.eyebrow} title={t.faq.title} description={t.faq.description} className="lg:sticky lg:top-32 lg:self-start" />
          {/* Remount on language change so the open item resets cleanly. */}
          <Accordion key={lang} items={t.faq.items} idPrefix="faq" />
        </div>
      </section>

      {/* Closing banner */}
      <section className="section-padding">
        <div className="container-shell">
          <div ref={bannerRef} className="relative isolate overflow-hidden rounded-[40px]">
            <motion.div style={{ y: bannerY }} className="absolute -inset-y-24 inset-x-0 -z-20">
              <Image src={TOUR.bannerImage} alt="" fill sizes="(min-width: 1280px) 1280px, 100vw" className="object-cover" />
            </motion.div>
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(11,16,35,0.3)_0%,rgba(11,16,35,0.8)_100%)]" />
            <div className="flex min-h-[440px] flex-col items-center justify-center px-6 py-16 text-center text-white sm:px-10 md:min-h-[520px]">
              <h2 className="display-title max-w-4xl text-4xl md:text-6xl">
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
                <Button href="/book" variant="light" size="lg" className="mt-8">
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
