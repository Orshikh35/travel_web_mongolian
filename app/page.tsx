"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const fadeUp = (d = 0) => ({
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: d },
  viewport: { once: true, amount: 0.3 },
});

const staggerParent = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.12 } },
  viewport: { once: true, amount: 0.2 },
};

const child = {
  initial: { opacity: 0, y: 28, scale: 0.98 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  transition: { duration: 0.55, ease: "easeOut" },
};

export default function Page() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="min-h-screen bg-[#0B0B0C] text-white overflow-x-hidden">
      {/* Navbar */}
      <motion.nav
        className={`fixed top-4 left-1/2 z-50 -translate-x-1/2 transition-all duration-500 backdrop-blur-md rounded-full px-8 py-2 flex justify-between items-center w-[90%] max-w-[1400px] ${
          scrolled
            ? "bg-white/10 border border-white/20"
            : "bg-black/20 border border-white/10"
        }`}
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <span
          className={`text-xl font-bold tracking-wider ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          МОНГОЛ АЯЛАЛ
        </span>

        <ul
          className={`hidden md:flex gap-10 text-[15px] font-medium ${
            scrolled ? "text-black" : "text-white/90"
          }`}
        >
          {["Гадаад аялал", "Дотоод аялал", "Мэдээлэл", "Холбоо барих"].map((t, i) => (
            <li key={i}>
              <a
                href="#"
                className={`transition ${
                  scrolled ? "hover:text-gray-600" : "hover:text-white"
                }`}
              >
                {t}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={`hidden md:inline-flex border rounded-full px-6 py-2.5 text-sm font-medium transition-all ${
            scrolled
              ? "border-gray-700 text-black hover:bg-gray-100"
              : "border-white/60 text-white hover:bg-white/10"
          }`}
        >
          Бүртгүүлэх
        </button>
      </motion.nav>

      {/* Hero */}
      <section className="relative h-screen w-full flex items-center justify-start">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('oo.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative z-10 max-w-[1400px] mx-auto px-12 md:px-20 w-full top-12"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/30 px-5 py-2 rounded-full mb-8"
          >
            <span className="text-xl">🏔️</span>
            <span className="text-[12px] font-medium">
              Монгол орны гайхамшигт газрууд
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] max-w-4xl">
            Монголын
            <br />
            <span className="text-white font-bold">Гоё Сайхныг Мэдэр</span>
          </h1>

          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(255,255,255,0.95)",
            }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="mt-10 bg-white text-black font-semibold px-8 py-3 rounded-full shadow-xl hover:shadow-4xl transition-all flex items-center gap-2 text-base"
          >
            Одоо аялах
            <span className="text-lg">→</span>
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-20 flex flex-wrap gap-6 max-w-3xl"
          >
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-4 max-w-[340px]">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 text-2xl">
                📸
              </div>
              <div>
                <p className="text-sm text-white/90 leading-relaxed">
                  Монголын үзэсгэлэнт газруудын бодит зургууд болон танилцуулга
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-4 max-w-[340px]">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 text-2xl">
                🎯
              </div>
              <div>
                <p className="text-sm text-white/90 leading-relaxed">
                  Монголчууд өөрсдийн оронд аялахад зориулсан найдвартай
                  мэдээлэл
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className="absolute right-8 md:right-12 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20">
          {[
            { icon: "📷", label: "Instagram" },
            { icon: "📘", label: "Facebook" },
            { icon: "▶️", label: "YouTube" },
          ].map((social, i) => (
            <motion.a
              key={i}
              href="#"
              whileHover={{
                scale: 1.15,
                backgroundColor: "rgba(255,255,255,0.35)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full w-12 h-12 flex items-center justify-center text-xl hover:bg-white/30 transition-all shadow-lg"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </section>

      {/* Hotels Section */}
      <section className="relative bg-gradient-to-b from-white to-gray-50 text-[#0E0F12] rounded-t-[40px] -mt-2 pt-20 pb-24">
        <div className="mx-auto max-w-[1300px] px-8 md:px-12">
          <motion.div {...fadeUp(0)} className="text-center mb-12 mt-8">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              Онцгой Буудал Болон Амралтын Газрууд
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Монголын хамгийн тав тухтай, үзэсгэлэнт газруудад байрладаг
              буудлууд
            </p>
          </motion.div>

          {/* Search Filters */}
          <motion.div
            {...fadeUp(0.1)}
            className="flex flex-wrap gap-4 justify-center items-center mb-12 bg-white  p-6 "
          >
            <div className="flex items-center gap-2 border border-gray-200 rounded-full px-5 py-3 min-w-[160px]">
              <span>📅</span>
              <select className="bg-transparent outline-none text-sm font-medium">
                <option>Огноо</option>
              </select>
            </div>
            <div className="flex items-center gap-2 border border-gray-200 rounded-full px-5 py-3 min-w-[160px]">
              <span>💰</span>
              <select className="bg-transparent outline-none text-sm font-medium">
                <option>Төсөв</option>
              </select>
            </div>
            <div className="flex items-center gap-2 border border-gray-200 rounded-full px-5 py-3 min-w-[160px]">
              <span>👤</span>
              <select className="bg-transparent outline-none text-sm font-medium">
                <option>Хүний тоо</option>
              </select>
            </div>
            <button className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition">
              Хайх
            </button>
          </motion.div>

          {/* Category Tabs */}
          <motion.div
            {...fadeUp(0.15)}
            className="flex flex-wrap gap-3 justify-center mb-12"
          >
            {[
              "Бүгд",
              "Амралтын газар",
              "Буудал",
              "Гэр бууц",
              "Хаус",
              "Зочид буудал",
            ].map((cat, i) => (
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

          {/* Hotel Cards */}
          <motion.div
            variants={staggerParent}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
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
            ].map((hotel, i) => (
              <motion.div key={i} variants={child}>
                <HotelCard {...hotel} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1300px] px-8 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
            <motion.div {...fadeUp(0)}>
              <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
                Монголоор Аялах Блог
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Энэ блог нь Монголын үзэсгэлэнт газруудын тухай гайхалтай
                зургууд, хувийн туршлага, орон нутгийн соёл, зан заншлын талаарх
                мэдээллийг агуулна.
              </p>
              <div className="flex gap-4">
                <button className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition">
                  Сануулга тавих
                </button>
                <button className="border-2 border-black text-black px-6 py-3 rounded-full font-medium hover:bg-black hover:text-white transition">
                  Дэлгэрэнгүй
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
            {/* Large Blog Card */}
            <motion.article variants={child} className="md:row-span-2">
              <div className="relative h-full rounded-3xl overflow-hidden shadow-xl group">
                <img
                  src="https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=1400&auto=format&fit=crop"
                  alt="Монгол соёл"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <span className="inline-block bg-white/20 backdrop-blur px-4 py-1 rounded-full text-xs font-semibold mb-4">
                    АЯЛАЛ
                  </span>
                  <h3 className="text-3xl font-bold mb-4">
                    Монголын Орон Нутгийн Соёл Уламжлал
                  </h3>
                  <div className="flex items-center gap-3">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
                      className="w-10 h-10 rounded-full object-cover"
                      alt="Зохиогч"
                    />
                    <div>
                      <p className="font-medium">Болд Батаа</p>
                      <p className="text-sm text-white/80">15 Хичээл 2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>

            {/* Small Blog Cards */}
            <motion.article variants={child}>
              <BlogCard
                image="https://images.unsplash.com/photo-1609137144813-7d9921338f24?q=80&w=1400&auto=format&fit=crop"
                title="Говийн Элсний Далайн Гоо Үзэсгэлэн"
                category="АЯЛАЛ"
              />
            </motion.article>

            <motion.article variants={child}>
              <BlogCard
                image="https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1400&auto=format&fit=crop"
                title="Хөвсгөл Нуурын Нарны Мандалт"
                category="АЯЛАЛ"
              />
            </motion.article>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white py-16">
        <div className="mx-auto max-w-[1300px] px-8 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
            <div>
              <h3 className="text-lg font-bold mb-6">Бидний Тухай</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Танилцуулга
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Блог
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Ажлын байр
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Галерей
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">Дэмжлэг</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Холбоо барих
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Онлайн чат
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Whatsapp
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Утасны төв
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">Түгээмэл асуулт</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Бүртгэл
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Захиалга
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Төлбөр
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Буцаалт
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">Мэдээлэл</h3>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                Аяллын гайхамшигт ертөнцөөс битгий хоцроорой - одоо бүртгүүлж,
                бидэнтэй хамт нээлтийн аялалд гарцгаая.
              </p>
              <div className="flex rounded-full bg-white/10 border border-white/20 p-2">
                <input
                  type="email"
                  placeholder="И-мэйл хаягаа оруулна уу"
                  className="flex-1 bg-transparent px-4 outline-none text-sm"
                />
                <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition">
                  Илгээх
                </button>
              </div>
              <div className="flex gap-3 mt-6">
                {["📷", "📘", "▶️"].map((icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-white/20 transition"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 text-center text-gray-400 text-sm">
            ©2024 Монгол Аялал, Бүх эрх хуулиар хамгаалагдсан
          </div>
        </div>
      </footer>
    </main>
  );
}

function HotelCard({
  name,
  location,
  price,
  rating,
  image,
}: {
  name: string;
  location: string;
  price: string;
  rating: string;
  image: string;
}) {
  return (
    <div className="relative rounded-3xl overflow-hidden shadow-xl group cursor-pointer">
      <img
        src={image}
        alt={name}
        className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      <div className="absolute top-5 right-5">
        <div className="bg-white/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1">
          <span className="text-yellow-500">⭐</span>
          <span className="text-sm font-bold text-black">{rating}</span>
        </div>
      </div>

      <div className="absolute bottom-6 left-6 right-6 text-white">
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <div className="flex items-center gap-2 text-sm mb-3">
          <span>📍</span>
          <span className="text-white/90">{location}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold">{price}</span>
          <span className="text-sm text-white/80">/ хоног</span>
        </div>
      </div>
    </div>
  );
}

function BlogCard({
  image,
  title,
  category,
}: {
  image: string;
  title: string;
  category: string;
}) {
  return (
    <div className="relative h-[300px] rounded-3xl overflow-hidden shadow-xl group cursor-pointer">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute bottom-6 left-6 right-6 text-white">
        <span className="inline-block bg-white/20 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold mb-3">
          {category}
        </span>
        <h4 className="text-xl font-bold leading-tight">{title}</h4>
      </div>
    </div>
  );
}
