// app/components/TourCard.tsx
"use client";
import Image from "next/image";
import { Lang } from "../ui-texts";
import { Tour } from "../data/tours";

type Props = {
  tour: Tour;
  lang: Lang;
  onClick: () => void;
  badgeTexts: {
    new: string;
    popular: string;
    special: string;
  };
};

export default function TourCard({ tour, lang, onClick, badgeTexts }: Props) {
  const { title, destination, durationText, priceFrom, coverImage, tags } =
    tour;

  const tagLabel =
    tags[0] === "new"
      ? badgeTexts.new
      : tags[0] === "popular"
      ? badgeTexts.popular
      : tags[0] === "special"
      ? badgeTexts.special
      : "";

  return (
    <button
      type="button"
      onClick={onClick}
      className="relative rounded-3xl overflow-hidden shadow-xl group cursor-pointer text-left w-full"
    >
      <Image
        src={tour.coverImage}
        alt={tour.title[lang]}
        width={600}
        height={600}
        className="w-full h-[360px] object-cover group-hover:scale-105 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Badge + duration */}
      <div className="absolute top-4 left-4 flex gap-2">
        {tagLabel && (
          <span className="bg-white/90 text-xs font-semibold px-3 py-1 rounded-full text-black">
            {tagLabel}
          </span>
        )}
        <span className="bg-black/70 text-xs font-medium px-3 py-1 rounded-full text-white/90">
          {durationText[lang]}
        </span>
      </div>

      <div className="absolute bottom-5 left-5 right-5 text-white">
        <h3 className="text-2xl font-bold mb-2 line-clamp-2">{title[lang]}</h3>

        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-2 text-sm">
            <span>📍</span>
            <span className="text-white/90 line-clamp-1">
              {destination[lang]}
            </span>
          </div>

          <div className="flex items-center justify-between">
            {/* <div>
            <span className="text-xl md:text-2xl font-bold">
              ₮{priceFrom.toLocaleString("mn-MN")}
            </span>
            <span className="text-xs text-white/80 ml-2">
              {lang === "mn" ? "эхлэх үнэ / хүн" : "from / person"}
            </span>
          </div> */}

            <span className="text-sm bg-white/15 px-3 py-1 rounded-full border border-white/20">
              {lang === "mn" ? "Дэлгэрэнгүй →" : "View details →"}
            </span>
          </div>
        </div>
      </div>
    </button>
  );
}
