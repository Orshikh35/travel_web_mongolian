// app/ui-texts.ts
export type Lang = "mn" | "en";

export type UiTexts = {
  navbar: {
    brand: string;
    links: string[]; // [Гадаад, Дотоод, Мэдээлэл, Холбоо барих]
    cta: string;
  };
  hero: {
    badge: string;
    badgeSub: string;
    titleLine1: string;
    titleLine2: string;
    cta: string;
    feature1: string;
    feature2: string;
  };
  tours: {
    title: string;
    subtitle: string;
    filters: {
      dateAny: string;
      dateThisWeek: string;
      dateThisMonth: string;
      dateNextMonth: string;
      budgetAll: string;
      budgetLow: string;
      budgetMid: string;
      budgetHigh: string;
      peopleAll: string;
      people12: string;
      people34: string;
      people5plus: string;
      searchPlaceholder: string;
    };
    categories: string[]; // [Бүгд, Дотоод..., ... ]
    badgeNew: string;
    badgePopular: string;
    badgeSpecial: string;
    noResult: string;
  };
  blog: {
    title: string;
    description: string;
    btn1: string;
    btn2: string;
    mainTitle: string;
    mainCategory: string;
  };
  footer: {
    aboutTitle: string;
    supportTitle: string;
    faqTitle: string;
    infoTitle: string;
    newsletterPlaceholder: string;
    newsletterButton: string;
    copyright: string;
  };
};

export const TEXTS: Record<Lang, UiTexts> = {
  mn: {
    navbar: {
      brand: "МОНГОЛ АЯЛАЛ",
      links: ["Гадаад аялал", "Дотоод аялал", "Мэдээлэл", "Холбоо барих"],
      cta: "Аялал захиалах",
    },
    hero: {
      badge: "🏔️",
      badgeSub: "Монгол орны гайхамшигт газрууд",
      titleLine1: "Монголын",
      titleLine2: "Гоё сайхныг мэдэр",
      cta: "Одоо аялах",
      feature1:
        "Монголын үзэсгэлэнт газруудын бодит зургууд болон танилцуулга.",
      feature2:
        "Монголчууд болон жуулчдад зориулсан найдвартай, шинэчлэгдсэн аяллын мэдээлэл.",
    },
    tours: {
      title: "Онцгой аяллын багцууд",
      subtitle:
        "Дотоод, гадаадын хамгийн түгээмэл чиглэлүүд, онцгой хөтөлбөрүүдийг эндээс сонгоорой.",
      filters: {
        dateAny: "Огноо харгалзахгүй",
        dateThisWeek: "Энэ 7 хоног",
        dateThisMonth: "Энэ сар",
        dateNextMonth: "Дараагийн сар",
        budgetAll: "Бүх төсөв",
        budgetLow: "₂,000,000₮ хүртэл",
        budgetMid: "₂,000,000₮ - ₄,000,000₮",
        budgetHigh: "₄,000,000₮+",
        peopleAll: "Хэчнээн ч байж болно",
        people12: "1 - 2 хүн",
        people34: "3 - 4 хүн",
        people5plus: "5 ба түүнээс дээш",
        searchPlaceholder: "Чиглэл, улс, аяллын нэрээр хайх...",
      },
      categories: [
        "Бүгд",
        "Дотоод аялал",
        "Гадаад аялал",
        "Захиалгат аялал",
      ],
      badgeNew: "Шинэ",
      badgePopular: "Хамгийн их захиалсан",
      badgeSpecial: "Онцгой",
      noResult:
        "Таны сонгосон шүүлтүүрт тохирох аялал одоогоор алга байна. Шүүлтүүрээ өөрчлөөд дахин оролдоорой.",
    },
    blog: {
      title: "МОНГОЛООР АЯЛАХ БЛОГ",
      description:
        "Монголын үзэсгэлэнт газруудын тухай хувийн туршлага, зөвлөгөө, аяллын түүхийг эндээс уншаарай.",
      btn1: "Сануулга тавих",
      btn2: "Дэлгэрэнгүй",
      mainTitle: "Монголын орон нутгийн соёл, уламжлал",
      mainCategory: "АЯЛАЛ",
    },
    footer: {
      aboutTitle: "Бидний тухай",
      supportTitle: "Дэмжлэг",
      faqTitle: "Түгээмэл асуулт",
      infoTitle: "Мэдээлэл",
      newsletterPlaceholder: "И-мэйл хаягаа оруулна уу",
      newsletterButton: "Илгээх",
      copyright: "©2024 Монгол Аялал, Бүх эрх хуулиар хамгаалагдсан",
    },
  },
  en: {
    navbar: {
      brand: "MONGOL TRAVEL",
      links: ["Outbound Tours", "Domestic Tours", "Blog & Info", "Contact"],
      cta: "Book a Tour",
    },
    hero: {
      badge: "🏔️",
      badgeSub: "Discover the wonders of Mongolia",
      titleLine1: "Experience",
      titleLine2: "The Beauty of Mongolia",
      cta: "Start your journey",
      feature1:
        "Real photos and curated stories from the most beautiful places in Mongolia.",
      feature2:
        "Trusted and up-to-date travel information for locals and international guests.",
    },
    tours: {
      title: "Featured tour packages",
      subtitle:
        "Explore our most popular domestic, outbound and custom-made tour programs.",
      filters: {
        dateAny: "Any date",
        dateThisWeek: "This week",
        dateThisMonth: "This month",
        dateNextMonth: "Next month",
        budgetAll: "Any budget",
        budgetLow: "Up to 2,000,000₮",
        budgetMid: "2,000,000₮ - 4,000,000₮",
        budgetHigh: "4,000,000₮+",
        peopleAll: "Any group size",
        people12: "1 - 2 guests",
        people34: "3 - 4 guests",
        people5plus: "5+ guests",
        searchPlaceholder: "Search by country, destination, or tour name...",
      },
      categories: ["All", "Domestic", "Outbound", "Custom tours"],
      badgeNew: "New",
      badgePopular: "Best seller",
      badgeSpecial: "Special",
      noResult:
        "No tours match your filters yet. Try changing your filters and search again.",
    },
    blog: {
      title: "TRAVEL BLOG",
      description:
        "Stories, tips and cultural insights from real journeys across Mongolia.",
      btn1: "Get reminders",
      btn2: "Read more",
      mainTitle: "Local culture and traditions in Mongolia",
      mainCategory: "TRAVEL",
    },
    footer: {
      aboutTitle: "About us",
      supportTitle: "Support",
      faqTitle: "FAQ",
      infoTitle: "Stay updated",
      newsletterPlaceholder: "Enter your email",
      newsletterButton: "Subscribe",
      copyright: "©2024 Mongol Travel, All rights reserved",
    },
  },
};
