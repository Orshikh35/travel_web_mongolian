"use client";

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import LanguageSwitcher, { LanguageGrid } from "./LanguageSwitcher";
import Button from "./Button";
import { useLanguage } from "../context/LanguageContext";

const subscribeToScroll = (callback: () => void) => {
  window.addEventListener("scroll", callback, { passive: true });
  return () => window.removeEventListener("scroll", callback);
};

export const BrandMark = ({ className = "h-10 w-10" }: { className?: string }) => (
  <span
    className={`flex shrink-0 items-center justify-center rounded-full bg-linear-to-br from-sand via-[#e9b679] to-brand text-[13px] font-extrabold text-white ${className}`}
  >
    NH
  </span>
);

const Navbar = () => {
  const pathname = usePathname();
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const scrolled = useSyncExternalStore(subscribeToScroll, () => window.scrollY > 24, () => false);
  const [hidden, setHidden] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });

  // Tuck the header away while reading down the page, bring it back as soon as the user scrolls up.
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setHidden(latest > previous && latest > 240);
  });

  // Pages that open with a full-bleed photo get a transparent header until the user scrolls.
  const overHero = pathname === "/" || (pathname.startsWith("/tours/") && pathname.split("/").length === 3);
  const solid = !overHero || scrolled || isOpen;

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
    <motion.div
      aria-hidden="true"
      style={{ scaleX: progress }}
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-linear-to-r from-sand via-[#e9b679] to-brand"
    />
    <motion.header
      animate={{ y: hidden && !isOpen ? "-130%" : "0%" }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6"
    >
      <div
        className={`mx-auto flex w-full max-w-7xl items-center justify-between gap-4 rounded-full border px-4 py-3 transition-all duration-300 sm:px-5 lg:relative ${
          solid
            ? "border-ink/8 bg-white/90 text-ink shadow-[0_18px_50px_rgba(16,35,29,0.10)] backdrop-blur-xl"
            : "border-white/18 bg-black/20 text-white backdrop-blur-md"
        }`}
      >
        <Link href="/" className="group flex items-center gap-3" onClick={() => setIsOpen(false)}>
          <BrandMark className="h-10 w-10 transition-transform duration-500 group-hover:rotate-[360deg]" />
          <span className="text-base font-bold tracking-[-0.02em]">{t.common.brand}</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:absolute lg:left-1/2 lg:flex lg:-translate-x-1/2">
          {t.nav.links.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`relative rounded-full px-4 py-2.5 text-sm font-semibold transition-colors ${
                  active
                    ? solid
                      ? "text-white"
                      : "text-ink"
                    : solid
                      ? "text-ink-soft hover:bg-ink/5 hover:text-ink"
                      : "text-white/85 hover:bg-white/12 hover:text-white"
                }`}
              >
                {active ? (
                  <motion.span
                    layoutId="nav-active-pill"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    className={`absolute inset-0 rounded-full ${solid ? "bg-ink" : "bg-white"}`}
                    aria-hidden="true"
                  />
                ) : null}
                <span className="relative">{link.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <LanguageSwitcher tone={solid ? "onLight" : "onDark"} />
          <Button href="/contact" variant={solid ? "primary" : "light"} size="sm" className="h-11">
            {t.nav.cta}
          </Button>
        </div>

        <button
          type="button"
          className={`inline-flex h-11 w-11 items-center justify-center rounded-full border lg:hidden ${
            solid ? "border-ink/12 bg-white" : "border-white/20 bg-white/10"
          }`}
          onClick={() => setIsOpen((current) => !current)}
          aria-label={isOpen ? t.nav.closeMenu : t.nav.openMenu}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <span className="relative h-4 w-5" aria-hidden="true">
            <span
              className={`absolute top-0 left-0 h-0.5 w-5 rounded-full bg-current transition ${
                isOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute top-[7px] left-0 h-0.5 w-5 rounded-full bg-current transition ${isOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`absolute top-3.5 left-0 h-0.5 w-5 rounded-full bg-current transition ${
                isOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-3 max-h-[calc(100dvh-6rem)] w-full max-w-7xl overflow-y-auto rounded-[28px] border border-white/10 bg-ink p-5 text-white shadow-[0_24px_70px_rgba(16,35,29,0.35)] lg:hidden"
          >
            <nav className="flex flex-col gap-1">
              {t.nav.links.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={`block rounded-2xl px-4 py-3.5 text-base font-semibold ${
                      isActive(link.href) ? "bg-white text-ink" : "text-white/85 hover:bg-white/8"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="mt-5 border-t border-white/10 pt-5">
              <p className="mb-3 px-1 text-xs font-semibold tracking-[0.18em] text-white/50 uppercase">{t.language.label}</p>
              <LanguageGrid />
            </div>
            <div className="mt-5" onClick={() => setIsOpen(false)}>
              <Button href="/contact" variant="secondary" className="w-full">
                {t.nav.cta}
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
    </>
  );
};

export default Navbar;
