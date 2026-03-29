"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "../context/LanguageContext";
import { TEXTS } from "../ui-texts";

const Navbar = () => {
  const pathname = usePathname();
  const { lang } = useLanguage();
  const t = TEXTS[lang];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between rounded-full border border-white/18 bg-black/28 px-5 py-4 text-white shadow-[0_18px_50px_rgba(0,0,0,0.24)] backdrop-blur-xl sm:px-7 lg:relative">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/12 text-sm font-semibold text-white">
            ◌
          </span>
          <div className="hidden sm:block">
            <div className="text-base font-semibold tracking-[-0.02em]">{t.navbar.brand}</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 rounded-full border border-white/14 bg-white/8 px-2 py-2 lg:absolute lg:left-1/2 lg:flex lg:-translate-x-1/2">
          {t.navbar.links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={`${link.href}-${link.label}`}
                href={link.href}
                className={`rounded-full px-5 py-2.5 text-sm font-medium tracking-[-0.01em] transition ${
                  active
                    ? "bg-white text-[#10231d]"
                    : "text-white/88 hover:bg-white/10 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher dark />
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/16 bg-white/8 text-white lg:hidden"
          onClick={() => setIsOpen((current) => !current)}
          aria-label="Open menu"
        >
          <span className="relative h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-white transition ${
                isOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-white transition ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] h-0.5 w-5 rounded-full bg-white transition ${
                isOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            className="mx-auto mt-3 w-full max-w-7xl rounded-[28px] border border-white/16 bg-[#10231d]/92 p-5 shadow-[0_24px_70px_rgba(16,35,29,0.28)] backdrop-blur-xl lg:hidden"
          >
            <div className="mb-4 flex justify-end">
              <LanguageSwitcher dark />
            </div>
            <nav className="flex flex-col gap-2">
              {t.navbar.links.map((link) => (
                <Link
                  key={`${link.href}-${link.label}`}
                  href={link.href}
                  className={`rounded-2xl px-4 py-3 text-sm ${
                    pathname === link.href ? "bg-white text-[#10231d]" : "text-white/84"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
