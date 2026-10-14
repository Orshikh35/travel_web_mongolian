"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "../components/Button";
import SectionHeading from "../components/SectionHeading";
import { useLanguage } from "../context/LanguageContext";

const AboutPage = () => {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <div className="overflow-hidden pt-28 md:pt-32">
      <section className="pb-20 md:pb-28">
        <div className="container-shell grid gap-12 py-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <SectionHeading as="h1" eyebrow={a.eyebrow} title={a.title} description={a.description} />
            <div className="mt-10 grid grid-cols-3 gap-3">
              {a.metrics.map((metric) => (
                <div key={metric.label} className="rounded-3xl bg-canvas p-5">
                  <p className="text-2xl font-extrabold tracking-[-0.03em] text-ink md:text-3xl">{metric.value}</p>
                  <p className="mt-1 text-xs leading-5 text-muted md:text-sm">{metric.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/tours">{t.featured.cta}</Button>
              <Button href="/contact" variant="outline">
                {t.hero.secondaryCta}
              </Button>
            </div>
          </div>

          <motion.div initial={{ opacity: 0, x: 32 }} animate={{ opacity: 1, x: 0 }} className="grid h-[460px] gap-3 md:h-[560px] md:grid-cols-[0.9fr_1.1fr]">
            <div className="relative overflow-hidden rounded-[28px]">
              <Image src="/enkhtsetseg-natsagdorj-Gy8OWkR_jMY-unsplash.jpg" alt="" fill priority sizes="(min-width: 1024px) 25vw, 100vw" className="object-cover" />
            </div>
            <div className="hidden gap-3 md:grid">
              <div className="relative overflow-hidden rounded-[28px]">
                <Image src="/alexander-popovkin-9vqWj6abWBs-unsplash.jpg" alt="" fill sizes="25vw" className="object-cover" />
              </div>
              <div className="relative overflow-hidden rounded-[28px]">
                <Image src="/fadhil-abhimantra-qGpfKldqKq0-unsplash.jpg" alt="" fill sizes="25vw" className="object-cover" />
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
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink text-sm font-bold text-white">0{index + 1}</span>
                <h3 className="mt-6 text-xl font-bold tracking-[-0.025em] text-ink">{value.title}</h3>
                <p className="mt-3 text-[15px] leading-7 text-muted">{value.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-shell">
          <SectionHeading eyebrow={a.teamEyebrow} title={a.teamTitle} description={a.teamDescription} />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {a.team.map((member, index) => (
              <motion.article
                key={member.role}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ delay: index * 0.06 }}
                className="premium-card p-7 text-center"
              >
                <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-linear-to-br from-ink to-brand text-2xl font-bold text-white">
                  {Array.from(member.name)[0]}
                </span>
                <h3 className="mt-5 text-lg font-bold text-ink">{member.name}</h3>
                <p className="mt-1 text-sm font-semibold text-sand-strong">{member.role}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
