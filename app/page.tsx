"use client";

import Hero from "./components/Hero";
import Destinations from "./components/Destinations";
import ToursSlider from "./components/ToursSlider";
import Features from "./components/Features";
import Reviews from "./components/Reviews";
import Button from "./components/Button";
import { useLanguage } from "./context/LanguageContext";
import { TEXTS } from "./ui-texts";
import Image from "next/image";

export default function Home() {
  const { lang } = useLanguage();
  const t = TEXTS[lang];
  const readMoreCards = [
    {
      title: lang === "en" ? "When is the best time to visit Mongolia?" : "Монголд аялахад хамгийн тохиромжтой улирал хэзээ вэ?",
      description:
        lang === "en"
          ? "A simple guide to seasons, weather, road conditions, and what kind of experience each time of year gives you."
          : "Улирал, цаг агаар, замын нөхцөл, тухайн үе бүр ямар мэдрэмж өгөхийг энгийнээр тайлбарласан гарын авлага.",
    },
    {
      title: lang === "en" ? "How to choose between Gobi, Khuvsgul, and Terelj" : "Говь, Хөвсгөл, Тэрэлжээс алийг нь сонгох вэ?",
      description:
        lang === "en"
          ? "If you are not sure where to begin, this comparison helps you choose based on pace, scenery, and travel style."
          : "Хаашаа явахаа сайн мэдэхгүй байвал энэ харьцуулалт таны хэмнэл, сонирхол, аяллын хэв маягт тааруулж сонгоход тусална.",
    },
    {
      title: lang === "en" ? "What to prepare before a domestic trip" : "Дотоод аяллын өмнө юуг бэлдэх хэрэгтэй вэ?",
      description:
        lang === "en"
          ? "From clothing and footwear to road expectations and packing basics, here is what travelers usually forget."
          : "Хувцас, гутал, замын нөхцөл, авч явах зүйлсээс эхлээд хүмүүсийн хамгийн их мартдаг зүйлсийг энд нэгтгэлээ.",
    },
  ];

  return (
    <div className="overflow-hidden">
      <div>
        <Image
          src="/oo.jpg"
          alt="Mongolian mountain landscape"
          fill
          priority
          className="object-cover object-center"
        />
      </div>
      <Hero />
      <Destinations />

      <section className="section-padding">
        <div className="container-shell">
          <div className="mb-12 max-w-3xl">
            <span className="section-eyebrow">
              {lang === "en" ? "Read more" : "Дэлгэрэнгүй унших"}
            </span>
            <h2 className="section-title text-balance">
              {lang === "en"
                ? "Helpful reading before you choose your trip"
                : "Аяллаа сонгохоосоо өмнө уншвал хэрэгтэй мэдээллүүд"}
            </h2>
            <p className="section-copy mt-5 max-w-2xl">
              {lang === "en"
                ? "Short, useful articles for travelers who want to understand the route better before making a decision."
                : "Чиглэлээ илүү сайн ойлгож, өөрт тохирох аяллаа сонгоход туслах товч бөгөөд хэрэгтэй нийтлэлүүд."}
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {readMoreCards.map((card, index) => (
              <div
                key={card.title}
                className="premium-card flex h-full flex-col justify-between p-7 transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(16,35,29,0.08)]"
              >
                <div>
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f4f8f7] text-sm font-semibold text-[#0f766e]">
                    0{index + 1}
                  </div>
                  <h3 className="text-2xl font-semibold leading-tight tracking-[-0.03em] text-[#10231d]">
                    {card.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#4d5c56]">
                    {card.description}
                  </p>
                </div>

                <div className="mt-6 border-t border-[#10231d]/8 pt-4">
                  <span className="text-sm font-semibold text-[#0f766e]">
                    {lang === "en" ? "Read article →" : "Нийтлэл унших →"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ToursSlider />

      <section className="px-4 py-6 sm:px-6">
        <div className="container-shell">
          <div className="glass-panel-strong relative overflow-hidden rounded-[34px] px-6 py-10 sm:px-10 lg:px-14">
            <div className="ambient-orb gold -right-10 top-0 h-44 w-44" />
            <div className="ambient-orb teal -left-10 bottom-0 h-40 w-40" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-center">
              <div>
                <span className="section-eyebrow">
                  {lang === "en" ? "Private planning" : "Хувийн төлөвлөлт"}
                </span>
                <h2 className="section-title max-w-3xl text-balance">
                  {lang === "en"
                    ? "Need a trip that feels a little more personal?"
                    : "Илүү өөрт тань таарсан аялал хайж байна уу?"}
                </h2>
                <p className="section-copy mt-5 max-w-2xl">
                  {lang === "en"
                    ? "We also help with family trips, private journeys, company travel, and custom plans when you want something more specific."
                    : "Гэр бүлийн аялал, private trip, багийн аялал, эсвэл өөрт тохирсон custom төлөвлөгөө хэрэгтэй бол бид тусалж чадна."}
                </p>
              </div>
              <div className="grid gap-4">
                {[
                  lang === "en"
                    ? "A trip plan built around your pace, comfort, and what you want to see"
                    : "Таны хэмнэл, ая тух, үзэхийг хүссэн зүйлд таарсан төлөвлөлт",
                  lang === "en"
                    ? "Clear guidance on budget, timing, and what to prepare before the trip"
                    : "Төсөв, хугацаа, бэлтгэх зүйлсийн талаар ойлгомжтой зөвлөгөө",
                  lang === "en"
                    ? "Simple communication in both Mongolian and English"
                    : "Монгол, англи хэлээр ойлгомжтой харилцах боломж",
                ].map((item) => (
                  <div
                    key={item}
                    className="premium-card px-5 py-4 text-sm leading-7 text-[#4d5c56]"
                  >
                    {item}
                  </div>
                ))}
                <div className="pt-2">
                  <Button href="/contact" variant="primary">
                    {lang === "en"
                      ? "Ask about a custom trip"
                      : "Custom аяллын талаар асуух"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Features />
      <Reviews />

      <section className="px-4 py-8 sm:px-6">
        <div className="container-shell">
          <div className="relative overflow-hidden rounded-[34px] border border-[#10231d]/8">
            <Image
              src="/fadhil-abhimantra-PApkYMKjgHk-unsplash.jpg"
              alt="Travel updates banner"
              width={1600}
              height={900}
              className="h-[420px] w-full object-cover md:h-[520px]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,35,29,0.18)_0%,rgba(16,35,29,0.42)_100%)]" />

            <div className="absolute inset-0 flex items-center justify-center px-6 text-center text-white sm:px-10">
              <div className="max-w-4xl">
                <h2 className="text-balance text-4xl font-semibold leading-[1.08] tracking-[-0.05em] md:text-6xl">
                  {lang === "en"
                    ? "Fresh Travel Ideas for Your Next Beautiful Trip"
                    : "Дараагийн аялалдаа санаа авах шинэ, гоё чиглэлүүд"}
                </h2>
                <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/84 md:text-lg">
                  {lang === "en"
                    ? "Explore new routes, seasonal highlights, and helpful travel inspiration whenever you are ready to plan something special."
                    : "Шинэ чиглэл, улирлын онцлох аялал, хэрэгтэй санаануудыг нэг дороос харж дараагийн аяллаа илүү амархан төлөвлөөрэй."}
                </p>
                <div className="mt-8">
                  <Button
                    href="/tours"
                    variant="outline"
                    className="border-white/20 bg-orange-600/80 px-6 text-white hover:bg-white hover:text-[#10231d]"
                  >
                    {lang === "en" ? "See New Routes" : "Шинэ чиглэлүүд үзэх"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
