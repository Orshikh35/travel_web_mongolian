const en = {
  meta: {
    title: "Nomad Horizon | Travel made simpler and more trustworthy",
    description:
      "Clear, trustworthy trips across Mongolia and beyond — honest route details, local guides, and planning help in your language.",
  },
  common: {
    brand: "Nomad Horizon",
    days: (n: number) => (n === 1 ? "1 day" : `${n} days`),
    travelers: (n: number) => (n === 1 ? "1 traveler" : `${n} travelers`),
    reviews: (n: number) => `${n} reviews`,
    from: "From",
    perPerson: "per person",
    onRequest: "Price on request",
    bookNow: "Book now",
    sending: "Sending…",
    errorGeneric: "Something went wrong. Please try again or contact us directly.",
    tags: { popular: "Popular", new: "New", special: "Special" },
    categories: { all: "All trips", domestic: "Mongolia", outbound: "Abroad", custom: "Custom" },
  },
  language: {
    label: "Language",
    choose: "Choose language",
  },
  nav: {
    links: [
      { label: "Home", href: "/" },
      { label: "Tours", href: "/tours" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
    cta: "Plan a trip",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  hero: {
    eyebrow: "Mongolia & beyond · trips planned by local experts",
    title: "Travel with more clarity and more confidence",
    description:
      "Where to go, how long to stay, what to expect — we share the information travelers actually need, then plan the trip with you.",
    searchLabel: "Where do you want to go?",
    searchPlaceholder: "Gobi, Khuvsgul, Tokyo…",
    categoryLabel: "Trip type",
    searchButton: "Search trips",
    secondaryCta: "Talk to an advisor",
    stats: [
      { value: "98%", label: "positive feedback" },
      { value: "24/7", label: "easy to reach" },
      { value: "120+", label: "routes explored" },
    ],
  },
  destinations: {
    eyebrow: "Highlighted destinations",
    title: "Places travelers ask about the most",
    description:
      "From quiet nature escapes to photo-friendly routes and family trips, these are the places people most often want to explore.",
    explore: "Explore this route",
    items: [
      {
        name: "Khuvsgul Lake",
        meta: "Lakeside camps, boat trips, horse trekking",
        note: "For travelers who want calm water, clean air, and a slower, more peaceful rhythm.",
        tag: "Relax & nature",
      },
      {
        name: "South Gobi",
        meta: "Dunes, camel safari, canyon landscapes",
        note: "Dramatic scenery, big open space, and real adventure energy.",
        tag: "Adventure pick",
      },
      {
        name: "Terelj",
        meta: "Quick getaway, family-friendly, easy access",
        note: "A short trip that still feels fresh, scenic, and easy to organize.",
        tag: "Weekend choice",
      },
      {
        name: "Orkhon Valley",
        meta: "Culture, waterfall, nomadic life",
        note: "Scenery plus a stronger sense of local life and culture.",
        tag: "Culture & landscape",
      },
    ],
  },
  featured: {
    eyebrow: "Recommended trips",
    title: "Trips people come back to again and again",
    subtitle: "Compare route, duration, highlights, and price at a glance.",
    cta: "View all tours",
  },
  tips: {
    eyebrow: "Before you go",
    title: "Helpful answers before you choose your trip",
    description: "Short, practical answers to the questions travelers ask us most.",
    items: [
      {
        q: "When is the best time to visit Mongolia?",
        a: "June to September is the main season: warm days, green steppe, and open roads. July brings the Naadam festival. Spring and autumn are quieter and cheaper but cooler, and winter trips (Terelj, Khuvsgul ice) are magical if you pack for −20°C.",
      },
      {
        q: "Gobi, Khuvsgul, or Terelj — which should I choose?",
        a: "Choose the Gobi for dunes, canyons, and big adventure (5–7 days). Choose Khuvsgul for lakes, forests, and a slower pace (4–5 days). Choose Terelj if you only have a day or a weekend — it's about 1.5 hours from Ulaanbaatar.",
      },
      {
        q: "What should I pack for a trip in Mongolia?",
        a: "Layers above all: nights are cold even in summer. Bring a windproof jacket, comfortable walking shoes, sunscreen, sunglasses, a power bank, and any personal medicine. Roads can be bumpy, so a soft bag beats a hard suitcase.",
      },
      {
        q: "Do I need a visa?",
        a: "Many nationalities can visit Mongolia visa-free for 30 days or more — rules change, so check with the Mongolian embassy for your passport. We'll send you an up-to-date checklist once you book.",
      },
    ],
  },
  custom: {
    eyebrow: "Private planning",
    title: "Want a trip that feels a little more personal?",
    description:
      "Family trips, private journeys, company travel, or a fully custom route — tell us what you have in mind and we'll shape it with you.",
    points: [
      "A plan built around your pace, comfort, and what you want to see",
      "Clear guidance on budget, timing, and what to prepare",
      "Support in Mongolian, English, Russian, Chinese, Korean, and Japanese",
    ],
    cta: "Ask about a custom trip",
  },
  features: {
    eyebrow: "Why people trust us",
    title: "Travel information that feels clear, calm, and reliable",
    description:
      "A travel website shouldn't feel confusing. It should help you understand your options and decide with confidence.",
    items: [
      {
        title: "Clear routes",
        description: "Where the trip goes, how long it takes, and what kind of experience it offers.",
      },
      {
        title: "Helpful guidance",
        description: "Couple, family, or group — advice written so it's easy to relate to.",
      },
      {
        title: "Honest details",
        description: "What's included, what isn't, and what to know in advance, in plain language.",
      },
      {
        title: "Easy contact",
        description: "Questions? You always know where to go and who to ask.",
      },
    ],
  },
  reviews: {
    eyebrow: "Guest feedback",
    title: "What travelers say after the trip",
    description: "The feedback we value most is simple: people felt informed, comfortable, and looked after.",
    items: [
      {
        name: "Sarah Johnson",
        role: "Traveler from the UK",
        content:
          "The itinerary felt polished from the first email. Every transfer, stay, and activity ran with real confidence.",
      },
      {
        name: "Michael Chen",
        role: "Corporate group organizer",
        content:
          "We needed a Mongolia program for a mixed international team. They handled logistics, pacing, and communication brilliantly.",
      },
      {
        name: "Enkhjin B.",
        role: "Family traveler",
        content:
          "They built a route that worked for grandparents and kids at the same time. Safe, beautiful, and genuinely thoughtful.",
      },
    ],
  },
  banner: {
    title: "Fresh ideas for your next beautiful trip",
    description: "New routes, seasonal highlights, and travel inspiration — whenever you're ready to plan something special.",
    cta: "See all routes",
  },
  footer: {
    description:
      "A travel team that believes good travel information should feel simple, warm, and trustworthy.",
    officeValue: "18 Seoul Street, Sukhbaatar District, Ulaanbaatar",
    contactTitle: "Contact",
    hours: "Mon–Sun 09:00–21:00",
    linksTitle: "Explore",
    links: [
      { label: "All tours", href: "/tours" },
      { label: "About us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Book a trip", href: "/book" },
    ],
    newsletterTitle: "Stay informed",
    newsletterDescription: "New routes and seasonal ideas, a few times a year.",
    newsletterPlaceholder: "Email address",
    newsletterButton: "Subscribe",
    newsletterSuccess: "Thanks! You're on the list.",
    copyright: "© 2026 Nomad Horizon. All rights reserved.",
    backToTop: "Back to top",
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
    valuesEyebrow: "Our principles",
    valuesTitle: "What guides our work",
    valuesDescription:
      "Good design matters, but clear communication, honest details, and human warmth matter even more.",
    values: [
      {
        title: "Human first",
        description: "People feel more comfortable when information sounds real, useful, and easy to follow.",
      },
      {
        title: "Real context",
        description: "We explain places with the practical detail travelers actually want to know.",
      },
      {
        title: "Care in the details",
        description: "Small details create trust, so we pay attention to the things people often worry about.",
      },
    ],
    teamEyebrow: "Our team",
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
    title: "Have a question? Just message us",
    description:
      "Planning a family trip, a group tour, or simply comparing options — we're happy to help with clear answers.",
    formTitle: "Send a message",
    formDescription: "Tell us what kind of trip you have in mind and we'll reply with practical guidance.",
    fields: {
      name: "Full name",
      email: "Email",
      subject: "Subject",
      message: "Travel details",
    },
    subjectPlaceholder: "Example: Family trip in July",
    messagePlaceholder:
      "Your dates, number of travelers, budget range, preferred destinations, and the experience you want.",
    button: "Send inquiry",
    success: "Thank you! We received your message and will reply within 24 hours.",
    infoCards: [
      {
        title: "Direct contact",
        lines: ["hello@nomadhorizon.mn", "+976 7711 2288", "WhatsApp / WeChat available"],
      },
      {
        title: "Office hours",
        lines: ["Monday – Sunday", "09:00 – 21:00", "Emergency support 24/7"],
      },
      {
        title: "Visit us",
        lines: ["Ulaanbaatar downtown", "Private meetings by appointment"],
      },
    ],
    noteEyebrow: "Planning note",
    noteTitle: "The better your brief, the better the itinerary.",
    noteBody:
      "Include your travel dates, comfort level, travelers' ages, and any must-have experiences so we can shape the strongest proposal quickly.",
  },
  toursPage: {
    eyebrow: "Tour library",
    title: "Find a trip that feels right for you",
    description: "Browse by destination, duration, and style to see what fits you best.",
    searchLabel: "Search tours",
    searchPlaceholder: "Search by destination, tour name, or keyword…",
    sortLabel: "Sort by",
    sort: {
      recommended: "Recommended",
      priceLow: "Price: low to high",
      priceHigh: "Price: high to low",
      duration: "Duration: shortest first",
    },
    results: (n: number) => (n === 1 ? "1 trip found" : `${n} trips found`),
    clear: "Clear filters",
    noResultTitle: "No matching trips found",
    noResultDescription: "Try a different search, or contact us and we'll help you find something that fits.",
    noResultCta: "Ask an advisor",
  },
  tourDetail: {
    back: "All tours",
    tabs: { overview: "Overview", itinerary: "Itinerary", included: "What's included", faq: "FAQ" },
    about: "About this trip",
    highlights: "Highlights",
    facts: { duration: "Duration", season: "Best season", destination: "Destination", type: "Trip type" },
    day: (n: number) => `Day ${n}`,
    included: "Included",
    excluded: "Not included",
    bring: "What to bring",
    detailsOnRequest:
      "We tailor the day-by-day plan to your dates and group. Send a request and we'll share the full itinerary within 24 hours.",
    noFaq: "Have a question about this trip? Our advisors reply within 24 hours.",
    askQuestion: "Ask a question",
    sidebar: {
      date: "Travel date",
      travelers: "Travelers",
      decrease: "Remove a traveler",
      increase: "Add a traveler",
      total: "Estimated total",
      request: "Request booking",
      note: "No payment today. We confirm availability first.",
    },
    related: "You might also like",
  },
  booking: {
    eyebrow: "Booking request",
    title: "Reserve your trip",
    description: "Send your details and we'll confirm availability and the final price within 24 hours. No payment needed now.",
    contactTitle: "Your details",
    tripTitle: "Your trip",
    name: "Full name",
    email: "Email",
    phone: "Phone / WhatsApp",
    tour: "Tour",
    selectTour: "Select a tour",
    date: "Preferred date",
    travelers: "Number of travelers",
    notes: "Notes",
    notesPlaceholder: "Dietary needs, ages of children, room preferences, questions…",
    submit: "Send booking request",
    summaryTitle: "Summary",
    estTotal: "Estimated total",
    noPayment: "Free request — you only pay after we confirm everything with you.",
    steps: ["Send your request", "We confirm within 24h", "Pay & get ready to travel"],
  },
  confirmation: {
    title: "Request received!",
    description: "Thank you. Our team will contact you within 24 hours to confirm availability and details.",
    reference: "Reference",
    tour: "Tour",
    date: "Date",
    travelers: "Travelers",
    nextTitle: "What happens next",
    next: [
      "An advisor reviews your request and checks availability.",
      "We email you the final itinerary and price.",
      "Once you approve, we'll send payment details.",
    ],
    backHome: "Back to home",
    browse: "Browse more tours",
  },
  auth: {
    login: {
      title: "Welcome back",
      subtitle: "Log in to your account to continue.",
      email: "Email",
      password: "Password",
      forgot: "Forgot password?",
      submit: "Log in",
      noAccount: "Don't have an account?",
      switch: "Sign up",
    },
    register: {
      title: "Create an account",
      subtitle: "Join us to start your adventure.",
      firstName: "First name",
      lastName: "Last name",
      email: "Email",
      password: "Password",
      agree: "I agree to the Terms of Service and Privacy Policy.",
      submit: "Sign up",
      haveAccount: "Already have an account?",
      switch: "Log in",
    },
  },
  notFound: {
    title: "This page wandered off the map",
    description: "The page you're looking for doesn't exist or has moved.",
    cta: "Browse tours",
  },
};

export default en;
