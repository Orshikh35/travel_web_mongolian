"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
type FooterProps = {
    texts: {
      aboutTitle: string;
      supportTitle: string;
      faqTitle: string;
      infoTitle: string;
      newsletterPlaceholder: string;
      newsletterButton: string;
      copyright: string;
    };
  };
export default function Footer({ texts }: FooterProps) {

  const [lang, setLang] = useState<"mn" | "en">("mn");

  const t = {
    mn: {
      company: "Компани",
      tours: "Аялалууд",
      contact: "Холбоо барих",
      about: "Бидний тухай",
      blog: "Блог",
      domestic: "Дотоод аялал",
      outbound: "Гадаад аялал",
      custom: "Захиалгат аялал",
      rights: "Бүх эрх хуулиар хамгаалагдсан.",
    },
    en: {
      company: "Company",
      tours: "Tours",
      contact: "Contact",
      about: "About us",
      blog: "Blog",
      domestic: "Domestic Tours",
      outbound: "Outbound Tours",
      custom: "Custom Tours",
      rights: "All rights reserved.",
    },
  };

  const tr = t[lang];

  return (
    <footer className="bg-[#0a0a0a] text-white pt-14 pb-8 px-6 mt-16 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* LOGO + LANG SWITCH */}
        <div>
          <Image 
            src="/logo-white.png" 
            width={140} 
            height={40} 
            alt="Logo"
            className="mb-3"
          />

          <p className="text-gray-400 text-sm mb-6">
            Explore Mongolia and the world with unforgettable tour experiences.
          </p>

          <div className="flex gap-2">
            <button
              onClick={() => setLang("mn")}
              className={`px-3 py-1 rounded text-sm ${
                lang === "mn" ? "bg-white text-black" : "bg-neutral-700"
              }`}
            >
              MN
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-3 py-1 rounded text-sm ${
                lang === "en" ? "bg-white text-black" : "bg-neutral-700"
              }`}
            >
              EN
            </button>
          </div>
        </div>

        {/* COMPANY */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">{tr.company}</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><Link href="/about" className="hover:text-white">{tr.about}</Link></li>
            <li><Link href="/blog" className="hover:text-white">{tr.blog}</Link></li>
            <li><Link href="/contact" className="hover:text-white">{tr.contact}</Link></li>
          </ul>
        </div>

        {/* TOURS */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">{tr.tours}</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><Link href="/tours/domestic" className="hover:text-white">{tr.domestic}</Link></li>
            <li><Link href="/tours/outbound" className="hover:text-white">{tr.outbound}</Link></li>
            <li><Link href="/tours/custom" className="hover:text-white">{tr.custom}</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">{tr.contact}</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>📞 +976 9911-2233</li>
            <li>✉️ travel@yourcompany.mn</li>
            <li>📍 Улаанбаатар, Монгол</li>
          </ul>

          <div className="flex gap-4 mt-4">
            <Link href="https://facebook.com">
              <Image src="/icons/facebook.svg" width={22} height={22} alt="fb" />
            </Link>
            <Link href="https://instagram.com">
              <Image src="/icons/instagram.svg" width={22} height={22} alt="ig" />
            </Link>
            <Link href="https://youtube.com">
              <Image src="/icons/youtube.svg" width={22} height={22} alt="yt" />
            </Link>
          </div>
        </div>

      </div>

      {/* BOTTOM COPYRIGHT */}
      <div className="mt-12 text-center text-gray-500 text-sm border-t border-neutral-800 pt-6">
        © {new Date().getFullYear()} Travel Co. {tr.rights}
      </div>
    </footer>
  );
}
