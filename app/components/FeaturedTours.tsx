"use client";

import React from "react";
import Button from "./Button";
import SectionHeading from "./SectionHeading";
import TourCard from "./TourCard";
import { useLanguage } from "../context/LanguageContext";
import { TOURS } from "../data/tours";

const FEATURED_SLUGS = ["khuvsgul-lake-adventure", "gobi-desert-expedition", "terelj-day-trip"];

const FeaturedTours = () => {
  const { t } = useLanguage();
  const featured = FEATURED_SLUGS.map((slug) => TOURS.find((tour) => tour.slug === slug)).filter((tour) => tour !== undefined);

  return (
    <section className="section-padding bg-canvas">
      <div className="container-shell">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading eyebrow={t.featured.eyebrow} title={t.featured.title} description={t.featured.subtitle} />
          <Button href="/tours" variant="outline" className="self-start lg:self-auto">
            {t.featured.cta}
          </Button>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((tour, index) => (
            <TourCard key={tour.slug} tour={tour} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTours;
