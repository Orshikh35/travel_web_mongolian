"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import Button from "../../components/Button";
import { CheckIcon } from "../../components/Icons";
import { useLanguage } from "../../context/LanguageContext";
import { isDeparture } from "../../data/tour";
import { formatDate } from "../../lib/format";

const ConfirmationView = () => {
  const { lang, t } = useLanguage();
  const c = t.confirmation;
  const searchParams = useSearchParams();
  const reference = searchParams.get("ref");
  const departure = searchParams.get("departure");
  const date = searchParams.get("date");
  const travelers = Number(searchParams.get("travelers"));

  const rows = [
    reference ? { label: c.reference, value: reference, mono: true } : null,
    { label: c.tour, value: `${t.tour.name} · ${t.tour.duration}` },
    isDeparture(departure) ? { label: c.departure, value: t.tour.departures[departure] } : null,
    date ? { label: c.date, value: formatDate(date, lang) } : null,
    travelers > 0 ? { label: c.travelers, value: t.common.travelers(travelers) } : null,
  ].filter((row) => row !== null);

  return (
    <div className="flex min-h-screen items-center bg-canvas pt-32 pb-20">
      <div className="container-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="premium-card mx-auto max-w-2xl p-8 text-center md:p-12"
        >
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.15 }}
            className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-accent text-white shadow-[0_18px_40px_rgba(195,138,44,0.35)]"
          >
            <CheckIcon className="h-10 w-10" />
          </motion.div>

          <h1 className="display-title mt-6 text-4xl text-ink md:text-5xl">{c.title}</h1>
          <p className="mx-auto mt-3 max-w-md text-[15px] leading-7 text-muted">{c.description}</p>

          <dl className="mt-8 space-y-3 rounded-3xl bg-canvas p-6 text-left">
            {rows.map((row) => (
              <div key={row.label} className="flex justify-between gap-6 text-sm">
                <dt className="text-muted">{row.label}</dt>
                <dd className={`text-right font-bold text-ink ${"mono" in row ? "font-mono" : ""}`}>{row.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 text-left">
            <h2 className="text-sm font-bold text-ink">{c.nextTitle}</h2>
            <ol className="mt-4 space-y-3">
              {c.next.map((step, index) => (
                <li key={step} className="flex gap-3 text-sm leading-6 text-ink-soft">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-soft text-xs font-bold text-accent-strong">
                    {index + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/tour" variant="primary">
              {c.backProgram}
            </Button>
            <Button href="/" variant="outline">
              {c.backHome}
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default function ConfirmationPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-canvas" />}>
      <ConfirmationView />
    </Suspense>
  );
}
