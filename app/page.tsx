// app/home/page.tsx
"use client";

import { useEffect, useState } from "react";
import { Lang, TEXTS } from "./ui-texts";
import { TourCategory } from "./data/tours";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ToursSection from "./components/ToursSection";
import BlogSection from "./components/BlogSection";
import Footer from "./components/footer";
import BookTourPage from "./book/page";

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

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<Lang>("mn");
  const [navCategory, setNavCategory] = useState<TourCategory | "all">("all");
  const [hasAnimatedTours, setHasAnimatedTours] = useState(false);

  // энэ state чинь Booking Page рүү шилжихэд хэрэглэгдэнэ
  const [handleSubmit, setHandleSubmit] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const texts = TEXTS[lang];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleNavClick = (index: number) => {
    // 0: гадаад, 1: дотоод, 2: блог, 3: холбоо барих
    if (index === 0) {
      setNavCategory("outbound");
      scrollTo("tours");
    } else if (index === 1) {
      setNavCategory("domestic");
      scrollTo("tours");
    } else if (index === 2) {
      scrollTo("blog");
    } else if (index === 3) {
      scrollTo("footer");
    }
  };

  const handleBookClick = () => {
    setHandleSubmit(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBrandClick = () => {
    setHandleSubmit(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  return (
    <main className="min-h-screen bg-[#0B0B0C] text-white overflow-x-hidden">
      <Navbar
        scrolled={scrolled}
        lang={lang}
        onLangChange={setLang}
        texts={texts.navbar}
        onNavClick={handleNavClick}
        onBookClick={handleBookClick} // 🔹 ШИНЭ
        onBrandClick={handleBrandClick}
      />

      {!handleSubmit ? (
        <>
          <section id="hero">
            <HeroSection
              texts={texts.hero}
              onCtaClick={() => scrollTo("tours")}
            />
          </section>

          <section id="tours">
            <ToursSection
              texts={texts.tours}
              fadeUp={fadeUp}
              staggerParent={staggerParent}
              child={child}
              lang={lang}
              defaultCategory={navCategory}
              hasAnimatedTours={hasAnimatedTours}
              onAnimated={() => setHasAnimatedTours(true)}
            />
          </section>

          <section id="blog">
            <BlogSection
              texts={texts.blog}
              fadeUp={fadeUp}
              staggerParent={staggerParent}
              child={child}
            />
          </section>

          <section id="footer">
            <Footer texts={texts.footer} />
          </section>
        </>
      ) : (
        <BookTourPage/>
      )}
    </main>
  );
}
