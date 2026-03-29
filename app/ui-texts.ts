export type Lang = "mn" | "en";

export type UiTexts = {
  meta: {
    title: string;
    description: string;
  };
  navbar: {
    brand: string;
    links: { label: string; href: string }[];
    login: string;
    register: string;
    cta: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    stats: { value: string; label: string }[];
    floatingCards: { title: string; description: string }[];
  };
  destinations: {
    eyebrow: string;
    title: string;
    description: string;
  };
  tours: {
    eyebrow: string;
    title: string;
    subtitle: string;
    cta: string;
  };
  features: {
    eyebrow: string;
    title: string;
    description: string;
    items: { title: string; description: string }[];
  };
  reviews: {
    eyebrow: string;
    title: string;
    description: string;
  };
  newsletter: {
    title: string;
    description: string;
    placeholder: string;
    button: string;
    note: string;
  };
  footer: {
    description: string;
    officeTitle: string;
    officeValue: string;
    contactTitle: string;
    contactValue: string[];
    quickLinksTitle: string;
    quickLinks: { label: string; href: string }[];
    newsletterTitle: string;
    newsletterDescription: string;
    newsletterPlaceholder: string;
    newsletterButton: string;
    copyright: string;
  };
  about: {
    eyebrow: string;
    title: string;
    description: string;
    metrics: { value: string; label: string }[];
    valuesTitle: string;
    valuesDescription: string;
    values: { title: string; description: string }[];
    teamTitle: string;
    teamDescription: string;
    team: { name: string; role: string }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    formTitle: string;
    formDescription: string;
    fields: {
      name: string;
      email: string;
      subject: string;
      message: string;
    };
    button: string;
    infoCards: { title: string; lines: string[] }[];
  };
  tourPage: {
    eyebrow: string;
    title: string;
    description: string;
    searchPlaceholder: string;
    noResultTitle: string;
    noResultDescription: string;
    categories: Record<string, string>;
    startingFrom: string;
    viewDetails: string;
    days: string;
    trustedLabel: string;
  };
};

export const TEXTS: Record<Lang, UiTexts> = {
  mn: {
    meta: {
      title: "Nomad Horizon | Аяллаа тайван, итгэлтэй төлөвлөе",
      description:
        "Монгол болон гадаад аяллын талаар ойлгомжтой, цэгцтэй, итгэлтэй мэдээлэл авах аяллын веб.",
    },
    navbar: {
      brand: "Nomad Horizon",
      links: [
        { label: "Нүүр", href: "/" },
        { label: "Аяллууд", href: "/tours" },
        { label: "Бидний тухай", href: "/about" },
        { label: "Холбоо барих", href: "/contact" },
      ],
      login: "Нэвтрэх",
      register: "Бүртгүүлэх",
      cta: "Захиалга эхлүүлэх",
    },
    hero: {
      eyebrow: "Монголын үзэсгэлэнт газрууд, аяллын санаа, хэрэгтэй мэдээлэл нэг дор",
      title: "Аяллаа илүү ойлгомжтой, илүү итгэлтэйгээр сонго",
      description:
        "Ямар газар үзэх, хэд хоног явах, хэнд тохирох, юуг анхаарах гээд хэрэгтэй бүх мэдээллийг энгийн байдлаар хүргэж байна.",
      primaryCta: "Аяллын мэдээлэл үзэх",
      secondaryCta: "Зөвлөхтэй холбогдох",
      stats: [
        { value: "98%", label: "Эерэг сэтгэгдэл" },
        { value: "24/7", label: "Холбогдох боломж" },
        { value: "120+", label: "Судалж үзэх маршрут" },
      ],
      floatingCards: [
        {
          title: "Tailor-made itineraries",
          description: "Таны төсөв, хугацаа, сонирхолд яг таарсан маршрут.",
        },
        {
          title: "Trusted local partners",
          description: "Шалгарсан бааз, хөтөч, тээврийн сүлжээ.",
        },
      ],
    },
    destinations: {
      eyebrow: "Онцлох газрууд",
      title: "Хүмүүс хамгийн их сонирхдог чиглэлүүд",
      description:
        "Амралт, адал явдал, гэр бүлийн аялал, зураг авалт гээд өөр өөр зорилгод тохирох газруудыг эндээс үзээрэй.",
    },
    tours: {
      eyebrow: "Санал болгох аяллууд",
      title: "Олон хүн сонгодог аяллууд",
      subtitle:
        "Чиглэл, үргэлжлэх хугацаа, онцлог, үнийг нь харьцуулж үзэхэд амар байхаар нэгтгэлээ.",
      cta: "Бүх аялал харах",
    },
    features: {
      eyebrow: "Яагаад хүмүүс биднийг сонгодог вэ",
      title: "Аяллын мэдээллийг ойлгомжтой, найдвартай хүргэнэ",
      description:
        "Аялал гэдэг зүгээр нэг гоё зураг биш. Хүн бүрт хэрэгтэй бодит мэдээлэл, зөв тайлбар, найдвартай харилцаа хэрэгтэй.",
      items: [
        {
          title: "Тодорхой маршрут",
          description:
            "Хэд хоног, ямар дарааллаар явах, юу үзэхийг ойлгоход амар байдлаар танилцуулна.",
        },
        {
          title: "Хэрэгтэй зөвлөгөө",
          description:
            "Гэр бүл, найзууд, баг хамт олон гээд хэнд тохирохыг энгийн хэлээр тайлбарлана.",
        },
        {
          title: "Ил тод мэдээлэл",
          description:
            "Юу багтах, юуг тусад нь тооцох, ямар зүйлсийг урьдчилж мэдэх хэрэгтэйг тодорхой хэлж өгнө.",
        },
        {
          title: "Хурдан холбоо",
          description:
            "Асуух зүйл гарвал хаана, хэнтэй холбогдохоо ойлгомжтой харах боломжтой.",
        },
      ],
    },
    reviews: {
      eyebrow: "Үйлчлүүлэгчдийн сэтгэгдэл",
      title: "Бидэнтэй аялсан хүмүүсийн бодит сэтгэгдэл",
      description:
        "Ихэнх хүмүүсийн хувьд хамгийн чухал нь ойлгомжтой харилцаа, найдвартай зохион байгуулалт, тайван мэдрэмж байдаг.",
    },
    newsletter: {
      title: "Шинэ аяллын мэдээллээ авч байгаарай",
      description:
        "Шинэ чиглэл, аяллын санал, улирлын онцлох мэдээллийг и-мэйлээр хүлээж аваарай.",
      placeholder: "И-мэйл хаягаа оруулна уу",
      button: "Бүртгүүлэх",
      note: "Хэт их мессеж биш, хэрэгтэй мэдээлэл л илгээнэ.",
    },
    footer: {
      description:
        "Nomad Horizon бол аяллын мэдээллийг ойлгомжтой, дулаан, хүний хэлээр хүргэхийг зорьдог аяллын баг.",
      officeTitle: "Оффис",
      officeValue: "Улаанбаатар, Сүхбаатар дүүрэг, Сөүлийн гудамж 18",
      contactTitle: "Холбоо барих",
      contactValue: ["hello@nomadhorizon.mn", "+976 7711 2288", "Mon-Sun 09:00-21:00"],
      quickLinksTitle: "Хурдан холбоос",
      quickLinks: [
        { label: "Аяллын багцууд", href: "/tours" },
        { label: "Бидний тухай", href: "/about" },
        { label: "Холбоо барих", href: "/contact" },
        { label: "Аяллын зөвлөгөө", href: "/contact" },
      ],
      newsletterTitle: "Мэдээлэлтэй бай",
      newsletterDescription:
        "Шинэ аялал, шинэ чиглэл, хэрэгтэй саналуудыг эхэлж аваарай.",
      newsletterPlaceholder: "Имэйл",
      newsletterButton: "Бүртгүүлэх",
      copyright: "© 2026 Nomad Horizon. Бүх эрх хамгаалагдсан.",
    },
    about: {
      eyebrow: "Nomad Horizon-ийн тухай",
      title: "Аяллыг илүү ойлгомжтой, ойр байдлаар хүргэхийг хүсдэг баг",
      description:
        "Бидний хувьд аялал гэдэг зөвхөн очих газар биш. Хүн тухайн газраа ойлгож, итгэлтэй сонгож, тайван аялж чаддаг байх нь чухал.",
      metrics: [
        { value: "12+", label: "жилийн туршлага" },
        { value: "4.9/5", label: "дундаж үнэлгээ" },
        { value: "38", label: "байнгын түнш маршрут" },
      ],
      valuesTitle: "Бидний зарчим",
      valuesDescription:
        "Сайхан харагдах нь хангалтгүй. Хэрэглэгчид ойлгомжтой, үнэн, хэрэгтэй мэдээлэл харах ёстой гэж бид үздэг.",
      values: [
        {
          title: "Хүнд ойр харилцаа",
          description:
            "Хүн бүрийн хэрэгцээ өөр учраас бид аяллыг хэт ерөнхий биш, илүү бодит байдлаар тайлбарлахыг хичээдэг.",
        },
        {
          title: "Бодит мэдээлэл",
          description:
            "Очих газрын улирал, онцлог, нөхцөл, уур амьсгалыг хэрэгтэй өнцгөөс нь танилцуулна.",
        },
        {
          title: "Нягт анхаарал",
          description:
            "Жижиг detail хүртэл анхаарснаар хэрэглэгч илүү итгэлтэй шийдвэр гаргадаг гэж бид боддог.",
        },
      ],
      teamTitle: "Энэ ажлыг хийж байгаа хүмүүс",
      teamDescription:
        "Бид аялал, хэрэглэгчийн туршлага, контент, харилцааг нэг баг болж хамтдаа хариуцдаг.",
      team: [
        { name: "Ариун-Эрдэнэ", role: "Lead Travel Curator" },
        { name: "Төгөлдөр", role: "Operations & Logistics" },
        { name: "Номин", role: "Guest Experience Advisor" },
        { name: "Тэлмэн", role: "Destination Specialist" },
      ],
    },
    contact: {
      eyebrow: "Холбоо барих",
      title: "Асуух зүйл байвал бидэнтэй шууд холбогдоорой",
      description:
        "Гэр бүлийн аялал, найз нөхдийн trip, багийн аялал эсвэл зүгээр л мэдээлэл асуух бол чөлөөтэй бичээрэй. Бид ойлгомжтой хариу өгнө.",
      formTitle: "Мессеж илгээх",
      formDescription:
        "Юу сонирхож байгаагаа, хэдийд явах талаар бодож байгаагаа бичээд үлдээгээрэй. Бид аль болох ойлгомжтой зөвлөгөө өгнө.",
      fields: {
        name: "Нэр",
        email: "И-мэйл",
        subject: "Гарчиг",
        message: "Аяллын дэлгэрэнгүй хүсэлт",
      },
      button: "Хүсэлт илгээх",
      infoCards: [
        {
          title: "Шууд холбоо",
          lines: ["hello@nomadhorizon.mn", "+976 7711 2288", "WhatsApp / WeChat available"],
        },
        {
          title: "Оффисын цаг",
          lines: ["Даваа - Ням", "09:00 - 21:00", "Яаралтай тусламж 24/7"],
        },
        {
          title: "Оффис байршил",
          lines: ["Ulaanbaatar downtown", "Private consultation by appointment", "On-site travel briefing available"],
        },
      ],
    },
    tourPage: {
      eyebrow: "Аяллын сан",
      title: "Өөрт тохирох аяллаа амархан олоорой",
      description:
        "Чиглэл, хугацаа, онцлог, төсөв зэргээр нь харьцуулж үзээд өөрт тохирох аяллаа сонгоорой.",
      searchPlaceholder: "Чиглэл, аяллын нэр, улс, онцлох үгээр хайх...",
      noResultTitle: "Илэрц олдсонгүй",
      noResultDescription:
        "Өөр түлхүүр үгээр хайж үзэх эсвэл бидэнтэй холбогдоод тохирсон санал авч болно.",
      categories: {
        all: "Бүгд",
        domestic: "Дотоод",
        outbound: "Гадаад",
        custom: "Захиалгат",
      },
      startingFrom: "Эхлэх үнэ",
      viewDetails: "Дэлгэрэнгүй үзэх",
      days: "хоног",
      trustedLabel: "Баталгаажсан багц",
    },
  },
  en: {
    meta: {
      title: "Nomad Horizon | Travel made simpler and more trustworthy",
      description:
        "A clear and trustworthy travel website with simple explanations, helpful route details, and a friendlier way to explore Mongolia.",
    },
    navbar: {
      brand: "Nomad Horizon",
      links: [
        { label: "Home", href: "/" },
        { label: "Tours", href: "/tours" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
      ],
      login: "Log in",
      register: "Create account",
      cta: "Start booking",
    },
    hero: {
      eyebrow: "Beautiful places, helpful travel ideas, and clear information in one place",
      title: "Choose your trip with more clarity and more confidence",
      description:
        "We share the kind of travel information people actually need: where to go, how long to stay, what to expect, and which trip feels right for them.",
      primaryCta: "Explore travel info",
      secondaryCta: "Talk to an advisor",
      stats: [
        { value: "98%", label: "positive feedback" },
        { value: "24/7", label: "easy to reach" },
        { value: "120+", label: "routes to explore" },
      ],
      floatingCards: [
        {
          title: "Tailor-made itineraries",
          description: "Trips designed around your timing, budget, and travel style.",
        },
        {
          title: "Trusted local partners",
          description: "Reliable camps, guides, hotels, and transport on every route.",
        },
      ],
    },
    destinations: {
      eyebrow: "Highlighted destinations",
      title: "Places travelers ask about the most",
      description:
        "From quiet nature escapes to photo-friendly routes and family trips, these are the places people most often want to explore.",
    },
    tours: {
      eyebrow: "Recommended trips",
      title: "Trips people come back to again and again",
      subtitle:
        "Compare route style, duration, highlights, and pricing in a way that feels simple and easy to follow.",
      cta: "View all tours",
    },
    features: {
      eyebrow: "Why people trust us",
      title: "Travel information that feels clear, calm, and reliable",
      description:
        "A travel website should not feel confusing. It should help people understand their options, feel comfortable, and make decisions with confidence.",
      items: [
        {
          title: "Clear routes",
          description:
            "We explain where the trip goes, how long it takes, and what kind of experience it offers.",
        },
        {
          title: "Helpful guidance",
          description:
            "Whether you are traveling as a couple, a family, or a group, the information is written to be easy to relate to.",
        },
        {
          title: "Honest details",
          description:
            "We try to make expectations simple by showing what matters most in plain language.",
        },
        {
          title: "Easy contact",
          description:
            "If someone has a question, they should know exactly where to go and who to ask.",
        },
      ],
    },
    reviews: {
      eyebrow: "Guest feedback",
      title: "What travelers genuinely say after the trip",
      description:
        "The feedback we value most is simple: people felt informed, comfortable, and looked after.",
    },
    newsletter: {
      title: "Stay updated on new trips and ideas",
      description:
        "Get helpful travel ideas, route updates, and seasonal highlights in your inbox.",
      placeholder: "Enter your email",
      button: "Subscribe",
      note: "No spam, just useful updates from time to time.",
    },
    footer: {
      description:
        "Nomad Horizon is a travel team that believes good travel information should feel simple, warm, and trustworthy.",
      officeTitle: "Office",
      officeValue: "18 Seoul Street, Sukhbaatar District, Ulaanbaatar",
      contactTitle: "Contact",
      contactValue: ["hello@nomadhorizon.mn", "+976 7711 2288", "Mon-Sun 09:00-21:00"],
      quickLinksTitle: "Quick links",
      quickLinks: [
        { label: "Tour collection", href: "/tours" },
        { label: "About us", href: "/about" },
        { label: "Contact", href: "/contact" },
        { label: "Travel advice", href: "/contact" },
      ],
      newsletterTitle: "Stay informed",
      newsletterDescription:
        "Be the first to hear about new routes, useful travel ideas, and fresh updates.",
      newsletterPlaceholder: "Email address",
      newsletterButton: "Subscribe",
      copyright: "© 2026 Nomad Horizon. All rights reserved.",
    },
    about: {
      eyebrow: "About Nomad Horizon",
      title: "A team that wants travel to feel easier to understand",
      description:
        "To us, travel is not just about getting from one place to another. It should feel clear, comfortable, and worth looking forward to.",
      metrics: [
        { value: "12+", label: "years of experience" },
        { value: "4.9/5", label: "average guest rating" },
        { value: "38", label: "trusted route partners" },
      ],
      valuesTitle: "What guides our work",
      valuesDescription:
        "Good design matters, but clear communication, honest details, and human warmth matter even more.",
      values: [
        {
          title: "Human first",
          description:
            "People feel more comfortable when information sounds real, useful, and easy to follow.",
        },
        {
          title: "Real context",
          description:
            "We try to explain places with the practical detail travelers actually want to know.",
        },
        {
          title: "Care in the details",
          description:
            "Small details create trust, so we pay attention to the things people often worry about.",
        },
      ],
      teamTitle: "The people behind the work",
      teamDescription:
        "We work across travel planning, content, coordination, and guest support to make the experience feel more human.",
      team: [
        { name: "Ariun-Erdene", role: "Lead Travel Curator" },
        { name: "Tuguldur", role: "Operations & Logistics" },
        { name: "Nomin", role: "Guest Experience Advisor" },
        { name: "Telmen", role: "Destination Specialist" },
      ],
    },
    contact: {
      eyebrow: "Contact us",
      title: "If you have a question, just message us",
      description:
        "Whether you are planning a family trip, a group tour, or simply comparing options, we are happy to help with clear answers.",
      formTitle: "Send a message",
      formDescription:
        "Tell us what kind of trip you have in mind and we will reply with practical, easy-to-understand guidance.",
      fields: {
        name: "Full name",
        email: "Email",
        subject: "Subject",
        message: "Travel details",
      },
      button: "Send inquiry",
      infoCards: [
        {
          title: "Direct contact",
          lines: ["hello@nomadhorizon.mn", "+976 7711 2288", "WhatsApp / WeChat available"],
        },
        {
          title: "Office hours",
          lines: ["Monday - Sunday", "09:00 - 21:00", "Emergency support 24/7"],
        },
        {
          title: "Consultation space",
          lines: ["Ulaanbaatar downtown", "Private meetings by appointment", "On-site travel briefing available"],
        },
      ],
    },
    tourPage: {
      eyebrow: "Tour library",
      title: "Find a trip that feels right for you",
      description:
        "Browse trips by destination, duration, and style to see what fits you best.",
      searchPlaceholder: "Search by destination, tour name, country, or keyword...",
      noResultTitle: "No matching trips found",
      noResultDescription:
        "Try a different search, or contact us and we will help you find something that fits.",
      categories: {
        all: "All",
        domestic: "Domestic",
        outbound: "Outbound",
        custom: "Custom",
      },
      startingFrom: "Starting from",
      viewDetails: "View details",
      days: "days",
      trustedLabel: "Verified package",
    },
  },
};

export const getText = <K extends keyof UiTexts>(lang: Lang, key: K): UiTexts[K] =>
  TEXTS[lang][key];
