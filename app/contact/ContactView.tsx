"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Button from "../components/Button";
import SectionHeading from "../components/SectionHeading";
import { CheckIcon, ChatIcon, ClockIcon, PinIcon } from "../components/Icons";
import { useLanguage } from "../context/LanguageContext";
import { findTourBySlug } from "../data/tours";
import { postJson, SubmitStatus } from "../lib/postJson";

const INFO_ICONS = [ChatIcon, ClockIcon, PinIcon];

const ContactView = () => {
  const { lang, t } = useLanguage();
  const c = t.contact;
  const searchParams = useSearchParams();
  const [form, setForm] = useState(() => ({
    name: "",
    email: "",
    // Arriving from a tour page's "Ask a question" pre-fills the subject.
    subject: findTourBySlug(searchParams.get("tour") ?? undefined)?.title[lang] ?? "",
    message: "",
  }));
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const update = (key: keyof typeof form) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((current) => ({ ...current, [key]: event.target.value }));

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus("sending");
    const result = await postJson("/api/contact", { type: "contact", ...form, lang });
    setStatus(result ? "success" : "error");
  };

  return (
    <div className="pt-28 pb-24 md:pt-32">
      <div className="container-shell">
        <SectionHeading as="h1" eyebrow={c.eyebrow} title={c.title} description={c.description} className="py-8" />

        <div className="mt-6 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="premium-card p-6 sm:p-8 md:p-10">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  role="status"
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex min-h-[420px] flex-col items-center justify-center text-center"
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand text-white">
                    <CheckIcon className="h-8 w-8" />
                  </span>
                  <p className="mt-6 max-w-sm text-lg leading-8 font-semibold text-ink">{c.success}</p>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={handleSubmit} exit={{ opacity: 0 }}>
                  <h2 className="text-2xl font-bold tracking-[-0.03em] text-ink">{c.formTitle}</h2>
                  <p className="mt-2 max-w-2xl text-[15px] leading-7 text-muted">{c.formDescription}</p>

                  <div className="mt-8 grid gap-5 md:grid-cols-2">
                    <div>
                      <label htmlFor="contact-name" className="field-label">
                        {c.fields.name}
                      </label>
                      <input id="contact-name" required autoComplete="name" value={form.name} onChange={update("name")} className="field-input" />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="field-label">
                        {c.fields.email}
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        autoComplete="email"
                        value={form.email}
                        onChange={update("email")}
                        className="field-input"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="contact-subject" className="field-label">
                        {c.fields.subject}
                      </label>
                      <input
                        id="contact-subject"
                        value={form.subject}
                        onChange={update("subject")}
                        placeholder={c.subjectPlaceholder}
                        className="field-input"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="contact-message" className="field-label">
                        {c.fields.message}
                      </label>
                      <textarea
                        id="contact-message"
                        required
                        rows={6}
                        value={form.message}
                        onChange={update("message")}
                        placeholder={c.messagePlaceholder}
                        className="field-input resize-y"
                      />
                    </div>
                  </div>

                  {status === "error" ? (
                    <p role="alert" className="mt-5 rounded-2xl border border-sand/30 bg-sand-soft px-5 py-4 text-sm font-semibold text-sand-strong">
                      {t.common.errorGeneric}
                    </p>
                  ) : null}

                  <Button type="submit" variant="primary" isLoading={status === "sending"} className="mt-6 w-full sm:w-auto">
                    {status === "sending" ? t.common.sending : c.button}
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          <div className="grid content-start gap-5">
            {c.infoCards.map((card, index) => {
              const Icon = INFO_ICONS[index % INFO_ICONS.length];
              return (
                <motion.article
                  key={card.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + index * 0.08 }}
                  className="premium-card flex gap-5 p-6"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-soft text-brand">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-ink">{card.title}</h3>
                    <div className="mt-2 space-y-1 text-[15px] leading-7 text-muted">
                      {card.lines.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                  </div>
                </motion.article>
              );
            })}

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.32 }}
              className="rounded-[28px] bg-ink p-7 text-white"
            >
              <p className="text-xs font-bold tracking-[0.2em] text-sand uppercase">{c.noteEyebrow}</p>
              <h3 className="mt-3 text-xl leading-snug font-bold">{c.noteTitle}</h3>
              <p className="mt-3 text-sm leading-7 text-white/70">{c.noteBody}</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactView;
