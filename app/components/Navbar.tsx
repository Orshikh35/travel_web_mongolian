// app/components/Navbar.tsx
"use client";

import { motion } from "framer-motion";
import { Lang, UiTexts } from "../ui-texts";

type Props = {
  scrolled: boolean;
  lang: Lang;
  onLangChange: (lang: Lang) => void;
  texts: UiTexts["navbar"];
  onNavClick: (index: number) => void;
  onBookClick: () => void;
  onBrandClick: () => void; // 🔹 ШИНЭ
  forceDark?: boolean;
};

export default function Navbar({
  scrolled,
  lang,
  onLangChange,
  texts,
  onNavClick,
  onBookClick,
  onBrandClick,
  forceDark = false,
}: Props) {
  const isDark = forceDark || scrolled;

  return (
    <motion.nav
      className={`fixed top-4 left-1/2 z-50 -translate-x-1/2 transition-all duration-500 backdrop-blur-md rounded-full px-8 py-2 flex justify-between items-center w-[90%] max-w-[1400px] ${
        scrolled
          ? "bg-white/10 border border-white/20"
          : "bg-black/20 border border-white/10"
      }`}
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <button
        type="button"
        onClick={onBrandClick}
        className={`text-xl font-bold tracking-wider ${
          scrolled ? "text-black" : "text-white"
        }`}
      >
        {texts.brand}
      </button>

      {/* ... доош нь хэвээр нь ... */}
      <ul
        className={`hidden md:flex gap-10 text-[15px] font-medium ${
          scrolled ? "text-black" : "text-white/90"
        }`}
      >
        {texts.links.map((t, i) => (
          <li key={t}>
            <button
              type="button"
              onClick={() => onNavClick(i)}
              className={`transition ${
                scrolled ? "hover:text-gray-600" : "hover:text-white"
              }`}
            >
              {t}
            </button>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4">
        {/* Language switch ... */}

        <button
          onClick={onBookClick}
          className={`hidden md:inline-flex border rounded-full px-6 py-2.5 text-sm font-medium transition-all ${
            scrolled
              ? "border-gray-700 text-black hover:bg-gray-100"
              : "border-white/60 text-white hover:bg:white/10"
          }`}
        >
          {texts.cta}
        </button>
      </div>
    </motion.nav>
  );
}
