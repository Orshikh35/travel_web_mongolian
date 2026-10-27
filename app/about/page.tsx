"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "../components/Button";
import SectionHeading from "../components/SectionHeading";
import { CarIcon, EagleIcon, GerIcon, GuideIcon } from "../components/Icons";
import { useLanguage } from "../context/LanguageContext";

const CREW_ICONS = [GuideIcon, CarIcon, GerIcon, EagleIcon];

const AboutPage = () => {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <div className="overflow-hidden pt-28 md:pt-32">
      <section className="pb-20 md:pb-28">
        <div className="container-shell grid gap-12 py-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <SectionHeading as="h1" eyebrow={a.eyebrow} title={a.title} description={a.description} />
            <ul className="mt-8 flex flex-wrap gap-2">
              {t.marquee.slice(0, 6).map((place) => (
                <li key={place} className="rounded-full bg-canvas px-4 py-2 text-sm font-semibold text-ink-soft">
                  {place}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/tour">{a.cta}</Button>
              <Button href="/contact" variant="outline">
                {a.ctaSecondary}
              </Button>
            </div>
          </div>

          <motion.div initial={{ opacity: 0, x: 32 }} animate={{ opacity: 1, x: 0 }} className="grid h-[460px] gap-3 md:h-[560px] md:grid-cols-[0.9fr_1.1fr]">
            <div className="relative overflow-hidden rounded-[28px]">
              <Image src="/images/eagle-hunter-rock.jpg" alt="" fill priority sizes="(min-width: 1024px) 25vw, 100vw" className="object-cover object-[40%_center]" />
            </div>
            <div className="hidden gap-3 md:grid">
              <div className="relative overflow-hidden rounded-[28px]">
                <Image src="/images/tavan-bogd-valley.jpg" alt="" fill sizes="25vw" className="object-cover" />
              </div>
              <div className="relative overflow-hidden rounded-[28px]">
                <Image src="/images/khoton-lake.jpg" alt="" fill sizes="25vw" className="object-cover" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-canvas">
        <div className="container-shell">
          <SectionHeading eyebrow={a.valuesEyebrow} title={a.valuesTitle} description={a.valuesDescription} />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {a.values.map((value, index) => (
              <motion.article
                key={value.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ delay: index * 0.08 }}
                className="premium-card p-7"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink font-display text-lg font-medium text-accent">0{index + 1}</span>
                <h3 className="mt-6 font-display text-xl font-medium tracking-[-0.03em] text-ink">{value.title}</h3>
                <p className="mt-3 text-[15px] leading-7 text-muted">{value.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-shell">
          <SectionHeading eyebrow={a.crewEyebrow} title={a.crewTitle} description={a.crewDescription} />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {a.crew.map((member, index) => {
              const Icon = CREW_ICONS[index % CREW_ICONS.length];
              return (
                <motion.article
                  key={member.role}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ delay: index * 0.06 }}
                  className="premium-card p-7"
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-brand to-ink text-accent">
                    <Icon className="h-8 w-8" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-medium tracking-[-0.03em] text-ink">{member.role}</h3>
                  <p className="mt-2 text-[15px] leading-7 text-muted">{member.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
