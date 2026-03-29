"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { TEXTS } from "../ui-texts";

const AboutPage = () => {
  const { lang } = useLanguage();
  const t = TEXTS[lang].about;

  return (
    <div className="overflow-hidden pt-28">
      <section className="section-padding">
        <div className="container-shell grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <span className="section-eyebrow">{t.eyebrow}</span>
            <h1 className="section-title max-w-4xl text-balance">{t.title}</h1>
            <p className="section-copy mt-6 max-w-2xl">{t.description}</p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {t.metrics.map((metric) => (
                <div key={metric.label} className="premium-card p-5">
                  <div className="text-3xl font-semibold text-[#10231d]">{metric.value}</div>
                  <p className="mt-2 text-sm text-[#5d6b65]">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-panel-strong relative overflow-hidden rounded-[36px] p-4"
          >
            <div className="grid h-[560px] gap-4 md:grid-cols-[0.9fr_1.1fr]">
              <div className="relative overflow-hidden rounded-[26px]">
                <Image src="/enkhtsetseg-natsagdorj-Gy8OWkR_jMY-unsplash.jpg" alt="Nomadic experience" fill className="object-cover" />
              </div>
              <div className="grid gap-4">
                <div className="relative overflow-hidden rounded-[26px]">
                  <Image src="/alexander-popovkin-9vqWj6abWBs-unsplash.jpg" alt="Travel planning" fill className="object-cover" />
                </div>
                <div className="relative overflow-hidden rounded-[26px]">
                  <Image
                    src="/khosbayar-surenkhorloo-kpUPKFB13hg-unsplash.jpg"
                    alt="Mongolian landscape"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-shell">
          <div className="mb-12 max-w-3xl">
            <span className="section-eyebrow">{lang === "en" ? "Our principles" : "Бидний зарчим"}</span>
            <h2 className="section-title">{t.valuesTitle}</h2>
            <p className="section-copy mt-5">{t.valuesDescription}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {t.values.map((value, index) => (
              <motion.article
                key={value.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ delay: index * 0.08 }}
                className="premium-card p-7"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#10231d] text-sm font-semibold text-white">
                  0{index + 1}
                </div>
                <h3 className="text-2xl font-semibold tracking-[-0.03em] text-[#10231d]">{value.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#5d6b65]">{value.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-shell">
          <div className="mb-12 max-w-3xl">
            <span className="section-eyebrow">{lang === "en" ? "Our team" : "Манай баг"}</span>
            <h2 className="section-title">{t.teamTitle}</h2>
            <p className="section-copy mt-5">{t.teamDescription}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {t.team.map((member, index) => (
              <motion.article
                key={member.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ delay: index * 0.06 }}
                className="premium-card p-7 text-center"
              >
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-[#10231d] to-[#0f766e] text-2xl font-semibold text-white">
                  {member.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <h3 className="mt-5 text-xl font-semibold text-[#10231d]">{member.name}</h3>
                <p className="mt-2 text-sm text-[#c7762b]">{member.role}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
