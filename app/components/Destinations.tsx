"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import SectionHeading from "./SectionHeading";
import { ArrowRightIcon } from "./Icons";

// Order matches t.destinations.items.
const DESTINATIONS = [
  {
    image: "/tours/mongolias-khuvsgul-lake-txovdfqxgjp7je6r.jpg",
    href: "/tours/khuvsgul-lake-adventure",
    layout: "md:col-span-2 lg:row-span-2",
  },
  {
    image: "/tours/360_F_287899895_wbOqOFdK60h4j6uizLBessWWsry5r9ue.jpg",
    href: "/tours/gobi-desert-expedition",
    layout: "md:col-span-2",
  },
  {
    image: "/tours/view-gorkhi-terelj-national-park-main-valley-autumn_724552-90.jpg",
    href: "/tours/terelj-day-trip",
    layout: "",
  },
  {
    image: "/tours/HD-wallpaper-orkhon-waterfalls-mongolia-travel-scenery-waterfalls-nature.jpg",
    href: "/tours/orkhon-valley-5-days",
    layout: "",
  },
];

const Destinations = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding">
      <div className="container-shell">
        <SectionHeading eyebrow={t.destinations.eyebrow} title={t.destinations.title} description={t.destinations.description} />

        <div className="mt-12 grid auto-rows-[320px] gap-5 md:grid-cols-2 lg:auto-rows-[300px] lg:grid-cols-4">
          {DESTINATIONS.map((destination, index) => {
            const copy = t.destinations.items[index];
            const large = index === 0;
            return (
              <motion.div
                key={destination.href}
                initial={{ opacity: 0, clipPath: "inset(14% 10% 14% 10% round 28px)" }}
                whileInView={{ opacity: 1, clipPath: "inset(0% 0% 0% 0% round 28px)" }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1.1, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={destination.layout}
              >
                <Link
                  href={destination.href}
                  className="group relative isolate flex h-full flex-col justify-end overflow-hidden rounded-[28px] p-6 text-white shadow-soft md:p-7"
                >
                  <motion.div
                    initial={{ scale: 1.3 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 -z-10"
                  >
                    <Image
                      src={destination.image}
                      alt={copy.name}
                      fill
                      sizes={large ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"}
                      className="object-cover transition duration-1000 ease-out group-hover:scale-110"
                    />
                  </motion.div>
                  <div className="absolute inset-0 -z-10 bg-linear-to-t from-ink/90 via-ink/25 to-transparent transition-opacity duration-500 group-hover:opacity-90" />

                  <span className="absolute top-5 left-5 rounded-full bg-white/92 px-3 py-1.5 text-[11px] font-bold tracking-[0.12em] text-brand-strong uppercase backdrop-blur">
                    {copy.tag}
                  </span>
                  <span aria-hidden="true" className="absolute top-4 right-5 text-4xl font-extrabold text-white/25 transition duration-500 group-hover:text-white/60">
                    0{index + 1}
                  </span>

                  <h3 className={`font-extrabold tracking-[-0.035em] ${large ? "text-3xl md:text-4xl" : "text-2xl"}`}>{copy.name}</h3>
                  <p className="mt-1.5 text-sm font-medium text-white/80">{copy.meta}</p>
                  {large ? (
                    <p className="mt-4 max-w-md text-[15px] leading-7 text-white/88">{copy.note}</p>
                  ) : (
                    // Smaller cards reveal their note on hover (desktop only; touch shows the essentials).
                    <div className="grid grid-rows-[0fr] transition-all duration-500 lg:group-hover:grid-rows-[1fr]">
                      <p className="overflow-hidden text-sm leading-6 text-white/85 opacity-0 transition-opacity duration-500 lg:group-hover:opacity-100">
                        <span className="block pt-3">{copy.note}</span>
                      </p>
                    </div>
                  )}
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-white">
                    <span className="bg-linear-to-r from-white to-white bg-size-[0%_2px] bg-bottom-left bg-no-repeat pb-0.5 transition-[background-size] duration-500 group-hover:bg-size-[100%_2px]">
                      {t.destinations.explore}
                    </span>
                    <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
