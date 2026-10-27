"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { TOUR } from "../data/tour";
import { ArrowLeftIcon, ArrowRightIcon, PlusIcon } from "./Icons";
import { SplitText } from "./motion";

// One photo per promise, in the order of `why.items`.
const IMAGES = ["/images/potanin-glacier-wide.jpg", "/images/eagle-hunters-trio.jpg", "/images/ger-camp.jpg", "/images/festival-river-crossing.jpg"];

// Left edge lines up with .container-shell (max-w-7xl + px-8) on wide screens.
const STRIP_PADDING = "max(1rem, calc((100% - 80rem) / 2 + 2rem))";

const Photo = ({ src, index, title, description }: { src: string; index: number; title: string; description: string }) => (
  <motion.figure
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.8, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    className="group"
  >
    <div className="relative aspect-[4/5] overflow-hidden rounded-[32px]">
      <Image
        src={src}
        alt=""
        fill
        sizes="320px"
        style={{ objectPosition: TOUR.imageFocus[src] }}
        className="object-cover transition duration-[1.2s] ease-out group-hover:scale-105"
      />
    </div>
    <figcaption className="mt-4 px-1">
      <h3 className="font-display text-xl font-medium tracking-[-0.03em] text-ink">{title}</h3>
      <p className="mt-1.5 text-sm leading-6 text-muted">{description}</p>
    </figcaption>
  </motion.figure>
);

// A staggered strip of photos, one per reason to come, with the heading tucked into the second column.
const Features = () => {
  const { t } = useLanguage();
  const items = t.why.items;
  const stripRef = useRef<HTMLDivElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  const updateEdges = () => {
    const strip = stripRef.current;
    if (!strip) return;
    setEdges({ start: strip.scrollLeft < 8, end: strip.scrollLeft + strip.clientWidth > strip.scrollWidth - 8 });
  };
  useEffect(updateEdges, []);

  const scrollBy = (dir: 1 | -1) => stripRef.current?.scrollBy({ left: dir * 340, behavior: "smooth" });

  const photo = (index: number) => (
    <Photo src={IMAGES[index % IMAGES.length]} index={index} title={items[index].title} description={items[index].description} />
  );

  const arrowClass =
    "flex h-12 w-12 items-center justify-center rounded-full border-[1.5px] border-ink text-ink transition hover:bg-ink hover:text-white disabled:pointer-events-none disabled:border-ink/15 disabled:text-ink/20";

  return (
    <section className="section-padding overflow-hidden">
      {/* On phones the heading sits above the strip; from md up it lives in the second column. */}
      <div className="container-shell mb-8 md:hidden">
        <p className="text-[11px] font-semibold tracking-[0.08em] text-faint uppercase">{t.why.eyebrow}</p>
        <h2 className="mt-3 font-display text-3xl leading-[1.02] font-medium tracking-[-0.045em] text-balance text-ink">
          <SplitText text={t.why.title} />
        </h2>
      </div>
      <div
        ref={stripRef}
        onScroll={updateEdges}
        style={{ paddingInline: STRIP_PADDING, scrollPaddingInline: STRIP_PADDING }}
        className="flex snap-x snap-mandatory items-start gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <div className="w-[78vw] max-w-[320px] shrink-0 snap-start">
          {photo(0)}
          <div className="mt-6 hidden justify-end gap-3 md:flex">
            <button type="button" onClick={() => scrollBy(-1)} disabled={edges.start} aria-label={t.common.previous} className={arrowClass}>
              <ArrowLeftIcon className="h-5 w-5" />
            </button>
            <button type="button" onClick={() => scrollBy(1)} disabled={edges.end} aria-label={t.common.next} className={arrowClass}>
              <ArrowRightIcon className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="w-[78vw] max-w-[320px] shrink-0 snap-start">
          <div className="mb-8 hidden items-start justify-between gap-4 md:flex">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.08em] text-faint uppercase">{t.why.eyebrow}</p>
              <h2 className="mt-3 font-display text-3xl leading-[1.02] font-medium tracking-[-0.045em] text-balance text-ink md:text-4xl">
                <SplitText text={t.why.title} />
              </h2>
            </div>
            <Link
              href="/tour"
              aria-label={t.route.cta}
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-white transition hover:rotate-90 hover:bg-accent-strong"
            >
              <PlusIcon className="h-5 w-5" />
            </Link>
          </div>
          {photo(1)}
        </div>

        <div className="w-[78vw] max-w-[320px] shrink-0 snap-start">{photo(2)}</div>
        <div className="w-[78vw] max-w-[320px] shrink-0 snap-start md:mt-36">{photo(3)}</div>
        {items.slice(4).map((_, extra) => (
          <div key={extra} className="w-[78vw] max-w-[320px] shrink-0 snap-start">
            {photo(extra + 4)}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
