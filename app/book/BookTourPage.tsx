"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";

export default function BookTourPage() {
  const searchParams = useSearchParams();
  const lang = (searchParams.get("lang") as "mn" | "en") || "mn";

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const res = await fetch("/api/book", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, phone, email, date, notes }),
    });

    const data = await res.json();
    if (data.success) setSuccess(true);
  };

  return (
    <main className="relative min-h-screen text-white px-6 md:px-10 pt-24 pb-20 overflow-hidden">
      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/bg.jpg')" }}
      />

      {/* GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

      <div className="max-w-4xl mx-auto relative z-10">
        <h1 className="text-4xl font-bold mb-6 drop-shadow-lg">
          {lang === "mn" ? "Аялал захиалах" : "Book This Tour"}
        </h1>

        {/* SUCCESS */}
        {success && (
          <div className="bg-green-500/90 backdrop-blur-xl text-white px-6 py-4 rounded-xl mb-6 shadow-xl">
            🎉 Таны захиалга амжилттай илгээлээ!
          </div>
        )}

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="
            bg-white/20 
            backdrop-blur-2xl 
            border border-white/30 
            rounded-2xl 
            p-8 
            space-y-6 
            shadow-[0_8px_32px_0_rgba(0,0,0,0.25)]
          "
        >
          {/* Name */}
          <div>
            <label className="block text-sm text-white/90 mb-2">Нэр / Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full bg-white/30 text-black font-medium border border-white/50 px-4 py-3 rounded-xl placeholder-gray-600 backdrop-blur-sm outline-none"
              placeholder="Таны нэр"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm text-white/90 mb-2">
              Утасны дугаар / Phone
            </label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full bg-white/30 text-black font-medium border border-white/50 px-4 py-3 rounded-xl placeholder-gray-600 backdrop-blur-sm outline-none"
              placeholder="+976 99112233"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-white/90 mb-2">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="w-full bg-white/30 text-black font-medium border border-white/50 px-4 py-3 rounded-xl placeholder-gray-600 backdrop-blur-sm outline-none"
              placeholder="you@example.com"
            />
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm text-white/90 mb-2">
              Аялах огноо / Travel Date
            </label>
            <input
              type="date"
              value={date}
              required
              onChange={(e) => setDate(e.target.value)}
              className="w-full bg-white/30 text-black font-medium border border-white/50 px-4 py-3 rounded-xl outline-none backdrop-blur-sm"
            />
          </div>

          {/* Notes */}
          <div>
            <label className="block text-sm text-white/90 mb-2">
              Нэмэлт тайлбар / Notes
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={4}
              className="w-full bg-white/30 text-black font-medium border border-white/50 px-4 py-3 rounded-xl placeholder-gray-600 backdrop-blur-sm outline-none"
              placeholder="Та нэмэлт мэдээллээ бичнэ үү..."
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="
              w-full 
              bg-white 
              text-black 
              py-4 
              rounded-xl 
              font-semibold 
              text-lg 
              hover:bg-gray-200 
              transition 
              shadow-xl
            "
          >
            Илгээх / Submit
          </button>
        </form>
      </div>
    </main>
  );
}
