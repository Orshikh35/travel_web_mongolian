"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Lang, TEXTS } from "../ui-texts";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import BlogSection from "../components/BlogSection";
import HotelsSection from "../components/ HotelsSection";
import Footer from "../components/footer";

const fadeUp = (d = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: d },
  viewport: { once: true, amount: 0.3 },
});

const staggerParent = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.12 } },
  viewport: { once: true, amount: 0.2 },
};

const child = {
  initial: { opacity: 0, y: 28, scale: 0.98 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  transition: { duration: 0.55, ease: "easeOut" },
};

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<Lang>("mn");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const texts = TEXTS[lang];

  return (
    <main className="min-h-screen bg-[#0B0B0C] text-white overflow-x-hidden">
      <Navbar
        scrolled={scrolled}
        lang={lang}
        onLangChange={setLang}
        texts={texts.navbar}
      />

      <HeroSection texts={texts.hero} />

      <HotelsSection
        texts={texts.hotels}
        fadeUp={fadeUp}
        staggerParent={staggerParent}
        child={child}
      />

      <BlogSection
        texts={texts.blog}
        fadeUp={fadeUp}
        staggerParent={staggerParent}
        child={child}
      />

      <Footer texts={texts.footer} />
    </main>
  );
}
