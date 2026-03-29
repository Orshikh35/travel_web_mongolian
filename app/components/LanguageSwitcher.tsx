"use client";

import React from "react";
import { useLanguage } from "../context/LanguageContext";

type Props = {
  dark?: boolean;
};

const LanguageSwitcher = ({ dark = false }: Props) => {
  const { lang, toggleLang } = useLanguage();

  return (
    <button
      onClick={toggleLang}
      type="button"
      aria-label="Switch language"
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm font-semibold transition ${
        dark
          ? "border-white/18 bg-white/10 text-white hover:bg-white/16"
          : "border-[#10231d]/12 bg-white text-[#10231d] hover:bg-[#f8f4ed]"
      }`}
    >
      <span className="text-base leading-none">{lang === "en" ? "🇬🇧" : "🇲🇳"}</span>
      <span>{lang === "en" ? "EN" : "MN"}</span>
    </button>
  );
};

export default LanguageSwitcher;
