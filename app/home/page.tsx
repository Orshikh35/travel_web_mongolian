// app/tours/[slug]/page.tsx
"use client";

import { findTourBySlug } from "@/app/data/tours";
import { Lang, TEXTS } from "@/app/ui-texts";
import { useSearchParams, useParams, useRouter } from "next/navigation";

export default function TourDetailPage() {
  const params = useParams<{ slug: string }>();
  const searchParams = useSearchParams();
  const router = useRouter();

  const slug = params.slug;
  const langParam = (searchParams.get("lang") as Lang) || "mn";
  const lang: Lang = langParam === "en" ? "en" : "mn";

  const tour = findTourBySlug(slug);

  if (!tour) {
    return (
      <main className="min-h-screen bg-[#0B0B0C] text-white flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-xl">
            {lang === "mn"
              ? "Энэ аялал олдсонгүй."
              : "This tour could not be found."}
          </p>
          <button
            onClick={() => router.push("/home")}
            className="px-5 py-2 rounded-full bg-white text-black text-sm font-medium"
          >
            {lang === "mn" ? "Нүүр хуудас руу буцах" : "Back to homepage"}
          </button>
        </div>
      </main>
    );
  }

  const texts = TEXTS[lang];

  return (
    <main className="min-h-screen bg-[#0B0B0C] text-white">
      <div className="relative h-[420px] w-full overflow-hidden">
        <img
          src={tour.coverImage}
          alt={tour.title[lang]}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute top-6 left-6">
          <button
            onClick={() => router.back()}
            className="bg-white/15 border border-white/30 rounded-full px-4 py-2 text-sm backdrop-blur hover:bg-white/25 transition"
          >
            ← {lang === "mn" ? "Буцах" : "Back"}
          </button>
        </div>
        <div className="absolute bottom-10 left-6 right-6 max-w-5xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
            {tour.title[lang]}
          </h1>
          <p className="text-sm md:text-base text-white/80 max-w-2xl">
            {tour.shortDescription[lang]}
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm">
            <span className="bg-white/15 border border-white/25 rounded-full px-4 py-1">
              📍 {tour.destination[lang]}
            </span>
            <span className="bg-white/15 border border-white/25 rounded-full px-4 py-1">
              ⏱ {tour.durationText[lang]}
            </span>
            <span className="bg-white/15 border border-white/25 rounded-full px-4 py-1">
              ₮{tour.priceFrom.toLocaleString("mn-MN")}{" "}
              {lang === "mn" ? "/ хүнээс" : "/ person"}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-[1100px] mx-auto px-6 md:px-10 py-12 grid md:grid-cols-[2fr,1fr] gap-10">
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            {lang === "mn" ? "Аяллын онцлох зүйлс" : "Tour highlights"}
          </h2>
          <ul className="space-y-3 text-sm md:text-base text-gray-100">
            {tour.highlights[lang].map((h) => (
              <li key={h} className="flex gap-3 items-start">
                <span className="mt-1">•</span>
                <span>{h}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-semibold mt-10 mb-4">
            {lang === "mn" ? "Ерөнхий мэдээлэл" : "General information"}
          </h2>
          <div className="space-y-2 text-sm md:text-base text-gray-200">
            <p>
              <strong>
                {lang === "mn" ? "Улирал: " : "Season: "}
              </strong>
              {tour.season[lang]}
            </p>
            <p>
              <strong>
                {lang === "mn" ? "Ангилал: " : "Category: "}
              </strong>
              {tour.category === "domestic"
                ? lang === "mn"
                  ? "Дотоод аялал"
                  : "Domestic"
                : tour.category === "outbound"
                ? lang === "mn"
                  ? "Гадаад аялал"
                  : "Outbound"
                : lang === "mn"
                ? "Захиалгат аялал"
                : "Custom tour"}
            </p>
            <p className="text-xs text-gray-400 mt-4">
              {lang === "mn"
                ? "Энэ хуудас нь жишиг аяллын мэдээлэл бөгөөд бодит үнэ, хуваарь, суудлын үлдэгдлийг манай менежертэй холбогдож баталгаажуулна уу."
                : "This page shows demo tour information. For real pricing, dates and availability, please contact the tour manager."}
            </p>
          </div>
        </div>

        <aside className="bg-white/5 border border-white/10 rounded-3xl p-6 h-fit">
          <h3 className="text-xl font-semibold mb-3">
            {lang === "mn" ? "Аялал захиалах" : "Book this tour"}
          </h3>
          <p className="text-sm text-gray-200 mb-4">
            {lang === "mn"
              ? "Таны хүссэн огноо, хүний тоо, онцгой хүсэлтийг илгээгээрэй. Бид танд дэлгэрэнгүй санал илгээнэ."
              : "Send your preferred dates, group size and special requests. We’ll send you a detailed offer."}
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert(
                lang === "mn"
                  ? "Demo горим: Мэйл илгээх хэсгийг backend-тэй холбох боломжтой."
                  : "Demo: Here you could connect this form to your backend."
              );
            }}
            className="space-y-3 text-sm"
          >
            <input
              required
              type="text"
              placeholder={lang === "mn" ? "Нэр" : "Name"}
              className="w-full rounded-xl bg-black/30 border border-white/10 px-3 py-2 outline-none"
            />
            <input
              required
              type="email"
              placeholder="Email"
              className="w-full rounded-xl bg-black/30 border border-white/10 px-3 py-2 outline-none"
            />
            <input
              type="text"
              placeholder={
                lang === "mn" ? "Утас (сонголтоор)" : "Phone (optional)"
              }
              className="w-full rounded-xl bg-black/30 border border-white/10 px-3 py-2 outline-none"
            />
            <textarea
              rows={3}
              placeholder={
                lang === "mn"
                  ? "Огноо, хүний тоо, онцгой хүсэлт…"
                  : "Dates, group size, special requests…"
              }
              className="w-full rounded-xl bg-black/30 border border-white/10 px-3 py-2 outline-none resize-none"
            />
            <button
              type="submit"
              className="w-full bg-white text-black rounded-full py-2.5 font-medium hover:bg-gray-200 transition"
            >
              {texts.navbar.cta}
            </button>
          </form>
        </aside>
      </div>
    </main>
  );
}
