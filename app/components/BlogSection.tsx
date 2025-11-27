"use client";

import { motion } from "framer-motion";
import { UiTexts } from "../ui-texts";
import BlogCard from "./BlogCard";

type Props = {
  texts: UiTexts["blog"];
  fadeUp: any;
  staggerParent: any;
  child: any;
};

export default function BlogSection({
  texts,
  fadeUp,
  staggerParent,
  child,
}: Props) {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1300px] px-8 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
          <motion.div {...fadeUp(0)}>
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
              {texts.title}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {texts.description}
            </p>

            <div className="flex gap-4">
              <button className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition">
                {texts.btn1}
              </button>
              <button className="border-2 border-black text-black px-6 py-3 rounded-full font-medium hover:bg-black hover:text-white transition">
                {texts.btn2}
              </button>
            </div>
          </motion.div>

          <motion.div {...fadeUp(0.1)} className="relative">
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 blur-3xl"></div>
          </motion.div>
        </div>

        {/* Blog Grid */}
        <motion.div
          variants={staggerParent}
          initial="initial"
          whileInView="whileInView"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Big main article */}
          <motion.article variants={child} className="md:row-span-2">
            <div className="relative h-full rounded-3xl overflow-hidden shadow-xl group">
              <img
                src="https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=1400&auto=format&fit=crop"
                alt={texts.mainTitle}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <span className="inline-block bg-white/20 backdrop-blur px-4 py-1 rounded-full text-xs font-semibold mb-4">
                  {texts.mainCategory}
                </span>
                <h3 className="text-3xl font-bold mb-4">{texts.mainTitle}</h3>

                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium">Болд Батаа</p>
                    <p className="text-sm text-white/80">2024</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>

          {/* Small Cards */}
          <motion.article variants={child}>
            <BlogCard
              image="https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=1400&auto=format&fit=crop"
              title="Говийн Элсний Далайн Гоо Үзэсгэлэн"
              category={texts.mainCategory}
            />
          </motion.article>

          <motion.article variants={child}>
            <BlogCard
              image="https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1400&auto=format&fit=crop"
              title="Хөвсгөл Нуурын Нарны Мандалт"
              category={texts.mainCategory}
            />
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
}
