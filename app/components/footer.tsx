"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { postJson, SubmitStatus } from "../lib/postJson";
import LanguageSwitcher from "./LanguageSwitcher";
import { BrandMark } from "./Navbar";
import { ArrowRightIcon, CheckIcon, MailIcon, PhoneIcon, PinIcon } from "./Icons";

const EASE = [0.22, 1, 0.36, 1] as const;
const WORDMARK = "NOMAD HORIZON";

const column = {
  hidden: { opacity: 0, y: 30 },
  visible: (index: number) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: index * 0.1, ease: EASE } }),
};

const Footer = () => {
  const { lang, t } = useLanguage();
  const f = t.footer;
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const handleSubscribe = async (event: React.FormEvent) => {
    event.preventDefault();
    setStatus("sending");
    const result = await postJson("/api/contact", { type: "newsletter", email, lang });
    setStatus(result ? "success" : "error");
    if (result) setEmail("");
  };

  const columnProps = (index: number) => ({
    variants: column,
    custom: index,
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, amount: 0.3 },
  });

  return (
    <footer className="relative isolate overflow-hidden bg-ink text-white">
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 left-1/4 -z-10 h-[30rem] w-[30rem] animate-float rounded-full bg-brand/40 blur-[120px]" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-96 w-96 animate-float-slow rounded-full bg-sand/25 blur-[120px]" />

      <div className="container-shell pt-16 md:pt-24">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.9fr_0.7fr_1.1fr]">
          <motion.div {...columnProps(0)}>
            <Link href="/" className="group inline-flex items-center gap-3">
              <BrandMark className="h-12 w-12 transition-transform duration-700 group-hover:rotate-[360deg]" />
              <span className="text-xl font-bold tracking-[-0.02em]">{t.common.brand}</span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/65">{f.description}</p>
            <div className="mt-6">
              <LanguageSwitcher tone="onDark" placement="up" />
            </div>
          </motion.div>

          <motion.div {...columnProps(1)}>
            <h2 className="text-xs font-bold tracking-[0.2em] text-white/45 uppercase">{f.contactTitle}</h2>
            <ul className="mt-5 space-y-3.5 text-sm text-white/80">
              <li className="flex gap-3">
                <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-sand" />
                {f.officeValue}
              </li>
              <li>
                <a href="mailto:hello@nomadhorizon.mn" className="group flex gap-3 transition-colors hover:text-white">
                  <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-sand transition-transform group-hover:-rotate-12" />
                  hello@nomadhorizon.mn
                </a>
              </li>
              <li>
                <a href="tel:+97677112288" className="group flex gap-3 transition-colors hover:text-white">
                  <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-sand transition-transform group-hover:rotate-12" />
                  +976 7711 2288
                </a>
              </li>
              <li className="pl-7 text-white/55">{f.hours}</li>
            </ul>
          </motion.div>

          <motion.div {...columnProps(2)}>
            <h2 className="text-xs font-bold tracking-[0.2em] text-white/45 uppercase">{f.linksTitle}</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {f.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="group inline-flex items-center gap-2 text-white/80 transition-colors hover:text-white">
                    <ArrowRightIcon className="h-3.5 w-0 -translate-x-2 text-sand opacity-0 transition-all duration-300 group-hover:w-3.5 group-hover:translate-x-0 group-hover:opacity-100" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div {...columnProps(3)}>
            <h2 className="text-xs font-bold tracking-[0.2em] text-white/45 uppercase">{f.newsletterTitle}</h2>
            <p className="mt-5 text-sm leading-7 text-white/65">{f.newsletterDescription}</p>
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.p
                  key="success"
                  role="status"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="mt-5 flex items-center gap-2 rounded-2xl bg-white/8 px-4 py-3.5 text-sm font-semibold text-white"
                >
                  <CheckIcon className="h-4 w-4 text-sand" />
                  {f.newsletterSuccess}
                </motion.p>
              ) : (
                <motion.form
                  key="form"
                  exit={{ opacity: 0, scale: 0.95 }}
                  onSubmit={handleSubscribe}
                  className="mt-5 flex gap-2 rounded-full border border-white/15 bg-white/5 p-1.5 transition-colors focus-within:border-white/40 focus-within:bg-white/8"
                >
                  <label htmlFor="footer-newsletter" className="sr-only">
                    {f.newsletterPlaceholder}
                  </label>
                  <input
                    id="footer-newsletter"
                    type="email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder={f.newsletterPlaceholder}
                    className="min-w-0 flex-1 bg-transparent px-4 text-sm text-white outline-none placeholder:text-white/45"
                  />
                  <motion.button
                    type="submit"
                    whileTap={{ scale: 0.95 }}
                    disabled={status === "sending"}
                    className="rounded-full bg-sand px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-sand-strong disabled:opacity-60"
                  >
                    {status === "sending" ? t.common.sending : f.newsletterButton}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
            {status === "error" ? (
              <p role="alert" className="mt-3 text-sm text-[#f3b6a0]">
                {t.common.errorGeneric}
              </p>
            ) : null}
          </motion.div>
        </div>

        <div className="mt-14 flex items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/45">
          <span>{f.copyright}</span>
          <motion.button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.92 }}
            aria-label={f.backToTop}
            className="group flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 font-semibold text-white/70 transition-colors hover:border-white/40 hover:text-white"
          >
            <span className="hidden sm:inline">{f.backToTop}</span>
            <ArrowRightIcon className="h-4 w-4 -rotate-90 transition-transform group-hover:-translate-y-0.5" />
          </motion.button>
        </div>
      </div>

      {/* Oversized wordmark rising letter by letter */}
      <div aria-hidden="true" className="mt-6 overflow-hidden select-none">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ staggerChildren: 0.045 }}
          className="flex justify-center text-[12.5vw] leading-[0.8] font-extrabold tracking-[-0.06em] whitespace-pre text-transparent"
        >
          {Array.from(WORDMARK).map((letter, index) => (
            <motion.span
              key={index}
              variants={{ hidden: { y: "100%", opacity: 0 }, visible: { y: "0%", opacity: 1, transition: { duration: 0.9, ease: EASE } } }}
              className="inline-block bg-linear-to-b from-white/30 to-white/0 bg-clip-text"
            >
              {letter}
            </motion.span>
          ))}
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
