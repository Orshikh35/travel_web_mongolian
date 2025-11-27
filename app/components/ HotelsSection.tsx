"use client";

import { motion } from "framer-motion";
import HotelCard from "./HotelCard";
import { UiTexts } from "../ui-texts";

type Props = {
  texts: UiTexts["hotels"];
  fadeUp: any;
  staggerParent: any;
  child: any;
};

export default function HotelsSection({
  texts,
  fadeUp,
  staggerParent,
  child,
}: Props) {
  const hotels = [
    {
      name: "Хөвсгөл Далай Амралтын Газар",
      location: "Хөвсгөл аймаг, Монгол",
      price: "₮280,000",
      rating: "4.9",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1400&auto=format&fit=crop",
    },
    {
      name: "Говь Эрдэнэ Гэр Бууц",
      location: "Өмнөговь, Монгол",
      price: "₮195,000",
      rating: "4.8",
      image:
        "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=1400&auto=format&fit=crop",
    },
    {
      name: "Тэрэлж Парк Резорт",
      location: "Төв аймаг, Монгол",
      price: "₮320,000",
      rating: "4.9",
      image:
        "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1400&auto=format&fit=crop",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 text-[#0E0F12] rounded-t-[40px] -mt-2 pt-20 pb-24">
      <div className="mx-auto max-w-[1300px] px-8 md:px-12">
        {/* Title */}
        <motion.div {...fadeUp(0)} className="text-center mb-12 mt-8">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">{texts.title}</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {texts.subtitle}
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          {...fadeUp(0.1)}
          className="flex flex-wrap gap-4 justify-center items-center mb-12 bg-white p-6 rounded-2xl"
        >
          <Filter icon="📅" label={texts.date} />
          <Filter icon="💰" label={texts.budget} />
          <Filter icon="👤" label={texts.people} />

          <button className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition">
            {texts.search}
          </button>
        </motion.div>

        {/* Categories */}
        <motion.div
          {...fadeUp(0.15)}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          {texts.categories.map((cat, i) => (
            <button
              key={i}
              className={`px-6 py-2.5 rounded-full font-medium transition ${
                i === 0
                  ? "bg-black text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={staggerParent}
          initial="initial"
          whileInView="whileInView"
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {hotels.map((hotel, i) => (
            <motion.div key={i} variants={child}>
              <HotelCard {...hotel} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Filter({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="flex items-center gap-2 border border-gray-200 rounded-full px-5 py-3 min-w-[160px]">
      <span>{icon}</span>
      <select className="bg-transparent outline-none text-sm font-medium">
        <option>{label}</option>
      </select>
    </div>
  );
}
