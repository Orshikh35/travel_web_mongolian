"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { LANGS, LANG_META, Lang } from "../i18n/config";
import { CheckIcon, ChevronDownIcon, GlobeIcon } from "./Icons";

type Props = {
  // "onDark" for transparent headers over photos.
  tone?: "onDark" | "onLight";
  placement?: "down" | "up";
};

const LanguageSwitcher = ({ tone = "onLight", placement = "down" }: Props) => {
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const optionRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const handlePointer = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", handlePointer);
    optionRefs.current[LANGS.indexOf(lang)]?.focus();
    return () => document.removeEventListener("pointerdown", handlePointer);
  }, [open, lang]);

  const choose = (next: Lang) => {
    setLang(next);
    setOpen(false);
    triggerRef.current?.focus();
  };

  const handleMenuKeyDown = (event: React.KeyboardEvent) => {
    const current = optionRefs.current.findIndex((el) => el === document.activeElement);
    if (event.key === "Escape") {
      setOpen(false);
      triggerRef.current?.focus();
    } else if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      const delta = event.key === "ArrowDown" ? 1 : -1;
      optionRefs.current[(current + delta + LANGS.length) % LANGS.length]?.focus();
    } else if (event.key === "Home" || event.key === "End") {
      event.preventDefault();
      optionRefs.current[event.key === "Home" ? 0 : LANGS.length - 1]?.focus();
    } else if (event.key === "Tab") {
      setOpen(false);
    }
  };

  const triggerTone =
    tone === "onDark"
      ? "border-white/25 bg-white/10 text-white hover:bg-white/20"
      : "border-ink/12 bg-white text-ink hover:border-brand/40";

  return (
    <div ref={rootRef} className="relative">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((value) => !value)}
        onKeyDown={(event) => {
          if (event.key === "ArrowDown" || event.key === "ArrowUp") {
            event.preventDefault();
            setOpen(true);
          }
        }}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={`${t.language.choose}: ${LANG_META[lang].native}`}
        className={`inline-flex h-11 items-center gap-2 rounded-full border px-3.5 text-sm font-semibold backdrop-blur-md transition ${triggerTone}`}
      >
        <GlobeIcon className="h-[18px] w-[18px]" />
        <span>{LANG_META[lang].native}</span>
        <ChevronDownIcon className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            id={menuId}
            role="menu"
            aria-label={t.language.choose}
            onKeyDown={handleMenuKeyDown}
            initial={{ opacity: 0, y: placement === "down" ? -6 : 6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: placement === "down" ? -6 : 6, scale: 0.98 }}
            transition={{ duration: 0.16 }}
            className={`absolute right-0 z-50 w-60 overflow-hidden rounded-3xl border border-ink/8 bg-white p-2 text-ink shadow-[0_24px_60px_rgba(16,35,29,0.18)] ${
              placement === "down" ? "top-full mt-2 origin-top-right" : "bottom-full mb-2 origin-bottom-right"
            }`}
          >
            <p className="px-3 pt-2 pb-2 text-[11px] font-semibold tracking-[0.18em] text-faint uppercase">{t.language.label}</p>
            {LANGS.map((code, index) => {
              const active = code === lang;
              return (
                <button
                  key={code}
                  ref={(el) => {
                    optionRefs.current[index] = el;
                  }}
                  type="button"
                  role="menuitemradio"
                  aria-checked={active}
                  lang={LANG_META[code].htmlLang}
                  onClick={() => choose(code)}
                  className={`flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-left text-sm transition outline-none focus-visible:bg-brand-soft ${
                    active ? "bg-brand-soft text-brand-strong" : "hover:bg-canvas"
                  }`}
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-canvas text-xs font-bold text-ink-soft">
                    {LANG_META[code].short}
                  </span>
                  <span className="flex-1">
                    <span className="block font-semibold">{LANG_META[code].native}</span>
                    <span className="block text-xs text-faint">{LANG_META[code].english}</span>
                  </span>
                  {active ? <CheckIcon className="h-4 w-4 text-brand" /> : null}
                </button>
              );
            })}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

// Flat grid of languages for the mobile menu, where a nested dropdown would feel cramped.
export const LanguageGrid = ({ onSelect }: { onSelect?: () => void }) => {
  const { lang, setLang, t } = useLanguage();

  return (
    <div role="group" aria-label={t.language.choose} className="grid grid-cols-3 gap-2">
      {LANGS.map((code) => {
        const active = code === lang;
        return (
          <button
            key={code}
            type="button"
            lang={LANG_META[code].htmlLang}
            aria-pressed={active}
            onClick={() => {
              setLang(code);
              onSelect?.();
            }}
            className={`rounded-2xl px-2 py-3 text-sm font-semibold transition ${
              active ? "bg-white text-ink" : "bg-white/8 text-white/85 hover:bg-white/15"
            }`}
          >
            {LANG_META[code].native}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher;
