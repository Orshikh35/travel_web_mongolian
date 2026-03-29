"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "../context/LanguageContext";
import { TEXTS } from "../ui-texts";
import Button from "./Button";

const Footer = () => {
  const { lang } = useLanguage();
  const t = TEXTS[lang].footer;

  return (
    <footer className="bg-white px-4 py-16 text-[#10231d] sm:px-6">
      <div className="container-shell relative">
        <div className="grid gap-8 rounded-[32px] border border-[#10231d]/8 bg-white p-8 shadow-[0_24px_80px_rgba(16,35,29,0.06)] lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#c7762b] via-[#e9b679] to-[#0f766e] text-sm font-bold text-white">
                NH
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-[#5d6b65]">Travel Studio</p>
                <h3 className="text-xl font-semibold">{TEXTS[lang].navbar.brand}</h3>
              </div>
            </div>
            <p className="max-w-md text-sm leading-7 text-[#5d6b65]">{t.description}</p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#5d6b65]">{t.officeTitle}</h4>
            <p className="text-sm leading-7 text-[#35514a]">{t.officeValue}</p>
            <h4 className="mb-4 mt-8 text-sm font-semibold uppercase tracking-[0.24em] text-[#5d6b65]">{t.contactTitle}</h4>
            <div className="space-y-2 text-sm text-[#35514a]">
              {t.contactValue.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#5d6b65]">{t.quickLinksTitle}</h4>
            <div className="space-y-3">
              {t.quickLinks.map((link) => (
                <Link
                  key={`${link.href}-${link.label}`}
                  href={link.href}
                  className="block text-sm text-[#35514a] transition hover:text-[#10231d]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#5d6b65]">{t.newsletterTitle}</h4>
            <p className="mb-5 text-sm leading-7 text-[#5d6b65]">{t.newsletterDescription}</p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder={t.newsletterPlaceholder}
                className="w-full rounded-2xl border border-[#10231d]/10 bg-[#fbfcfc] px-4 py-3 text-sm text-[#10231d] placeholder:text-[#7a8882] outline-none transition focus:border-[#0f766e]/30"
              />
              <Button variant="secondary" className="w-full justify-center">
                {t.newsletterButton}
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 px-2 text-sm text-[#7a8882] md:flex-row md:items-center md:justify-between">
          <p>{t.copyright}</p>
          <p>Designed for confident travel planning across Mongolia and international routes.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
