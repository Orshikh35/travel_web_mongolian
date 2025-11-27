export type Lang = "mn" | "en";

type NavbarTexts = {
  brand: string;
  links: string[];
  cta: string;
};

type HeroTexts = {
  badge: string;
  badgeSub: string;
  titleLine1: string;
  titleLine2: string;
  cta: string;
  feature1: string;
  feature2: string;
};

type HotelsTexts = {
  title: string;
  subtitle: string;
  date: string;
  budget: string;
  people: string;
  search: string;
  categories: string[];
};

type BlogTexts = {
  title: string;
  description: string;
  mainTitle: string;
  mainCategory: string;
  btn1: string;
  btn2: string;
};

type FooterTexts = {
  aboutTitle: string;
  supportTitle: string;
  faqTitle: string;
  infoTitle: string;
  newsletterPlaceholder: string;
  newsletterButton: string;
  copyright: string;
};

export type UiTexts = {
  navbar: NavbarTexts;
  hero: HeroTexts;
  hotels: HotelsTexts;
  blog: BlogTexts;
  footer: FooterTexts;
};

export const TEXTS: Record<Lang, UiTexts> = {
  mn: {
    navbar: {
      brand: "МОНГОЛ АЯЛАЛ",
      links: ["Гадаад аялал", "Дотоод аялал", "Мэдээлэл", "Холбоо барих"],
      cta: "Бүртгүүлэх",
    },
    hero: {
      badge: "🏔️",
      badgeSub: "Монгол орны гайхамшигт газрууд",
      titleLine1: "Монголын",
      titleLine2: "Гоё Сайхныг Мэдэр",
      cta: "Одоо аялах",
      feature1: "Монголын үзэсгэлэнт газруудын бодит зургууд болон танилцуулга",
      feature2:
        "Монголчууд өөрсдийн оронд аялахад зориулсан найдвартай мэдээлэл",
    },
    hotels: {
      title: "Онцгой Буудал Болон Амралтын Газрууд",
      subtitle: "Монголын хамгийн тав тухтай, үзэсгэлэнт газруудад байрладаг буудлууд",
      date: "Огноо",
      budget: "Төсөв",
      people: "Хүний тоо",
      search: "Хайх",
      categories: ["Бүгд", "Амралтын газар", "Буудал", "Гэр бууц", "Хаус", "Зочид буудал"],
    },
    blog: {
      title: "МОНГОЛООР АЯЛАХ БЛОГ",
      description:
        "Энэ блог нь Монголын үзэсгэлэнт газруудын тухай гайхалтай зургууд, хувийн туршлага, орон нутгийн соёл, зан заншлын талаарх мэдээллийг агуулна.",
      mainTitle: "Монголын Орон Нутгийн Соёл Уламжлал",
      mainCategory: "АЯЛАЛ",
      btn1: "Сануулга тавих",
      btn2: "Дэлгэрэнгүй",
    },
    footer: {
      aboutTitle: "Бидний Тухай",
      supportTitle: "Дэмжлэг",
      faqTitle: "Түгээмэл асуулт",
      infoTitle: "Мэдээлэл",
      newsletterPlaceholder: "И-мэйл хаягаа оруулна уу",
      newsletterButton: "Илгээх",
      copyright: "©2024 Монгол Аялал, Бүх эрх хуулиар хамгаалагдсан",
    },
  },

  // 🇬🇧 English хувилбар (одоо бол хөтөч дээрх текстүүдийг шууд утгаар орчуулж байна)
  en: {
    navbar: {
      brand: "Mongol Ayalal",
      links: ["International", "Domestic", "Info", "Contact"],
      cta: "Sign up",
    },
    hero: {
      badge: "🏔️",
      badgeSub: "Breathtaking destinations of Mongolia",
      titleLine1: "Discover",
      titleLine2: "The Beauty of Mongolia",
      cta: "Start your trip",
      feature1: "Real photos and introductions of the most beautiful places",
      feature2: "Reliable information for Mongolians traveling in Mongolia",
    },
    hotels: {
      title: "Featured Hotels & Resorts",
      subtitle:
        "Comfortable stays located in the most scenic places of Mongolia",
      date: "Date",
      budget: "Budget",
      people: "Guests",
      search: "Search",
      categories: ["All", "Resort", "Hotel", "Ger Camp", "House", "Guest House"],
    },
    blog: {
      title: "Travel Mongolia Blog",
      description:
        "Stories, photos and local culture from the most beautiful places around Mongolia.",
      mainTitle: "Local Culture & Traditions",
      mainCategory: "TRAVEL",
      btn1: "Set reminder",
      btn2: "Read more",
    },
    footer: {
      aboutTitle: "About us",
      supportTitle: "Support",
      faqTitle: "FAQ",
      infoTitle: "Info",
      newsletterPlaceholder: "Enter your email",
      newsletterButton: "Send",
      copyright: "©2024 Mongol Ayalal, All rights reserved.",
    },
  },
};
