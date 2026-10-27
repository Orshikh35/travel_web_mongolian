import type { Currency } from "../lib/format";

// Everything about the 7-day program that does not change between languages.
// The words themselves (day titles, activities, FAQ…) live in app/i18n/dictionaries under `tour`.

export type DepartureKey = "festival" | "private";
export const DEPARTURES: DepartureKey[] = ["festival", "private"];
export const isDeparture = (value: unknown): value is DepartureKey =>
  typeof value === "string" && (DEPARTURES as string[]).includes(value);

export type ActivityIcon =
  | "plane"
  | "pin"
  | "guide"
  | "car"
  | "mountain"
  | "ger"
  | "dinner"
  | "breakfast"
  | "hike"
  | "camera"
  | "return"
  | "lake"
  | "waterfall"
  | "home"
  | "book"
  | "eagle"
  | "ceremony"
  | "horse"
  | "music"
  | "craft"
  | "trophy"
  | "flag";

export type StayIcon = "ger" | "home" | "hotel" | "plane";

export const TOUR = {
  slug: "altai-golden-eagle-festival",
  days: 7,
  nights: 6,
  // 0 = "Price on request". Set a number (per person) once the price is final.
  priceFrom: 0,
  currency: "USD" as Currency,
  maxTravelers: 16,

  heroImage: "/images/eagle-hunter-altai.jpg",
  festivalImage: "/images/festival-riders.jpg",
  programImage: "/images/potanin-glacier-wide.jpg",
  bannerImage: "/images/ger-night-sky.jpg",

  // One entry per day, in order. Icons must line up with `tour.days[i].activities` in every dictionary.
  dayImages: [
    "/images/tavan-bogd-valley.jpg",
    "/images/potanin-glacier.jpg",
    "/images/khoton-lake.jpg",
    "/images/eagle-hunter-rock.jpg",
    "/images/festival-river-riders.jpg",
    "/images/festival-eagle-landing.jpg",
    "/images/ger-night-sky.jpg",
  ],
  // Where to anchor photos whose subject is off-centre when they are cropped into tall cards.
  imageFocus: {
    "/images/eagle-hunter-altai.jpg": "84% 72%",
    "/images/eagle-hunter-rock.jpg": "40% 60%",
    "/images/potanin-glacier.jpg": "45% 70%",
    "/images/festival-eagle-landing.jpg": "62% 60%",
    "/images/khoton-lake.jpg": "62% 50%",
  } as Record<string, string>,
  // The printed program cards (English), one per day.
  dayCards: [
    "/program/day-1.webp",
    "/program/day-2.webp",
    "/program/day-3.webp",
    "/program/day-4.webp",
    "/program/day-5.webp",
    "/program/day-6.webp",
    "/program/day-7.webp",
  ],
  dayIcons: [
    ["plane", "guide", "car", "mountain", "ger", "dinner"],
    ["breakfast", "hike", "camera", "mountain", "return", "dinner"],
    ["car", "lake", "waterfall", "camera", "dinner"],
    ["car", "home", "book", "eagle", "dinner"],
    ["ceremony", "horse", "eagle", "music", "craft"],
    ["eagle", "horse", "trophy", "flag"],
    ["breakfast", "car", "plane"],
  ] satisfies ActivityIcon[][],
  stayIcons: ["ger", "ger", "ger", "home", "hotel", "hotel", "plane"] satisfies StayIcon[],
  // Which chapter of the journey each day belongs to (used for the colour of the day badge).
  chapters: [
    { from: 1, to: 2, image: "/images/potanin-glacier-wide.jpg" },
    { from: 3, to: 3, image: "/images/khoton-lake-wide.jpg" },
    { from: 4, to: 6, image: "/images/festival-eagle.jpg" },
  ],
} as const;

// Chapter a day belongs to (index into TOUR.chapters), or -1 for the departure day.
export const chapterOf = (day: number) => TOUR.chapters.findIndex((chapter) => day >= chapter.from && day <= chapter.to);

/*
  Photo credits live in app/data/photos.ts (shown in the footer). ger-camp.jpg and ger-night-sky.jpg come from the
  project's earlier image set. Swap in the company's own photos any time — just keep the file names or update the paths above.
*/
