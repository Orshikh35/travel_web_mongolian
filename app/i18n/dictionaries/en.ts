const en = {
  meta: {
    title: "Eagle Land Tours | Altai Mountains & Golden Eagle Festival, Mongolia",
    description:
      "A 7-day journey in Western Mongolia: Altai Tavan Bogd National Park, Potanin Glacier, Khoton and Khurgan lakes, a night with a Kazakh eagle hunter family and two days at the Golden Eagle Festival in Ölgii.",
  },
  common: {
    brand: "Eagle Land Tours",
    tagline: "Western Mongolia · Kazakh Altai",
    day: (n: number) => `Day ${n}`,
    daysRange: (from: number, to: number) => (from === to ? `Day ${from}` : `Days ${from}–${to}`),
    travelers: (n: number) => (n === 1 ? "1 traveler" : `${n} travelers`),
    from: "From",
    perPerson: "per person",
    onRequest: "Price on request",
    bookNow: "Book now",
    sending: "Sending…",
    errorGeneric: "Something went wrong. Please try again or contact us directly.",
    overnight: "Overnight",
    close: "Close",
    previous: "Previous",
    next: "Next",
  },
  language: {
    label: "Language",
    choose: "Choose language",
  },
  nav: {
    links: [
      { label: "Home", href: "/" },
      { label: "The program", href: "/tour" },
      { label: "About us", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
    cta: "Book now",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },

  // The 7-day program. Keep the same number of days and activities in every language:
  // icons and photos are matched to them by position (see app/data/tour.ts).
  tour: {
    name: "Altai & Golden Eagle Festival",
    duration: "7 days / 6 nights",
    startEnd: "Ölgii → Ölgii",
    season: "Early October",
    departures: {
      festival: "Golden Eagle Festival 2027",
      private: "Private trip, my own dates",
    },
    departureNote:
      "The festival is held every year in early October, usually over the first weekend. We confirm exact tour dates as soon as the festival dates are announced.",
    days: [
      {
        title: "Ölgii → Altai Tavan Bogd National Park",
        route: "Ölgii → Altai Tavan Bogd National Park",
        summary:
          "Meet your guide and driver in Ölgii and head west into the high Altai, where your ger camp waits beneath the snow peaks.",
        activities: [
          "Arrival in Ölgii",
          "Meet your local guide and driver",
          "Drive to Altai Tavan Bogd National Park",
          "Spectacular views of the Altai Mountains",
          "Check in at the ger camp",
          "Traditional dinner",
        ],
        overnight: "Ger camp",
        about: [
          {
            title: "About Altai Tavan Bogd National Park",
            text: [
              "Altai Tavan Bogd National Park is one of Mongolia's most remarkable natural treasures, in the far western corner of the country. It is home to Mongolia's highest peaks, including Khuiten Peak (4,374 m), along with glaciers, alpine valleys, crystal-clear rivers and diverse wildlife.",
              "The name “Tavan Bogd” means “Five Saints” and refers to the five majestic peaks that dominate the landscape. The region is also rich in archaeological and cultural heritage: ancient Turkic stone statues, petroglyphs and the traditional life of Kazakh nomadic families.",
            ],
          },
        ],
      },
      {
        title: "Potanin Glacier",
        route: "Ger camp ⇄ Potanin Glacier viewpoint",
        summary: "A full day at the foot of the Five Saints, walking up to the viewpoint over Mongolia's longest glacier.",
        activities: [
          "Breakfast at the camp",
          "Excursion to the Potanin Glacier viewpoint",
          "Photography stops along the way",
          "Panoramic views of the five sacred peaks",
          "Return to the camp",
          "Traditional dinner",
        ],
        overnight: "Ger camp",
        about: [
          {
            title: "About Potanin Glacier",
            text: [
              "Potanin Glacier is the longest glacier in Mongolia. Stretching for about 14 kilometres, it flows down from the foot of the magnificent Tavan Bogd peaks.",
              "It was named after the Russian explorer and geographer Grigory Potanin. Surrounded by snow-covered mountains and untouched wilderness, it is one of the most breathtaking landscapes in Mongolia and an important source of water for the rivers of western Mongolia.",
            ],
          },
        ],
      },
      {
        title: "Khoton Lake, Khurgan Lake & Baga Turgen Waterfall",
        route: "Tavan Bogd → Khoton & Khurgan lakes",
        summary: "Down from the glacier to two turquoise alpine lakes and a waterfall fed by Altai meltwater.",
        activities: [
          "Drive to Khoton and Khurgan lakes",
          "Explore the lakeside scenery",
          "Visit Baga Turgen Waterfall",
          "Photography and sightseeing",
          "Dinner at camp",
        ],
        overnight: "Camp by the lakes",
        about: [
          {
            title: "About Khoton & Khurgan lakes",
            text: [
              "Khoton and Khurgan are among the most beautiful alpine lakes in Mongolia. Formed by ancient glaciers, these freshwater lakes are surrounded by forested mountains and wide open valleys.",
              "The two lakes are joined by a short natural channel and support rich birdlife, including migratory species. Their turquoise water and dramatic mountain backdrop make them a highlight of any journey through the Mongolian Altai.",
            ],
          },
          {
            title: "About Baga Turgen Waterfall",
            text: [
              "Baga Turgen is one of the most scenic waterfalls in western Mongolia. Fed by glacial streams from the Altai, it cascades about 15 metres down rocky cliffs into a pristine valley — a wonderful place to photograph the untouched Altai wilderness.",
            ],
          },
        ],
      },
      {
        title: "Eagle Hunter Family Experience",
        route: "Lakes → Ulaankhus",
        summary: "Visit a Kazakh eagle hunter at home, meet his golden eagle and spend the night as the family's guest.",
        activities: [
          "Drive to Ulaankhus",
          "Visit the home of a Kazakh eagle hunter family",
          "Learn about eagle hunting traditions",
          "Meet and photograph a trained golden eagle",
          "Traditional Kazakh dinner and cultural evening",
        ],
        overnight: "With the eagle hunter family",
        about: [
          {
            title: "About Kazakh eagle hunters",
            text: [
              "Kazakh nomads have hunted with golden eagles for centuries, and it remains one of the most unique cultural traditions in the world. Eagle hunters, known as berkutchi, train female golden eagles to hunt foxes and other animals during the winter.",
              "This ancient partnership between hunter and eagle takes exceptional skill, patience and dedication.",
            ],
          },
          {
            title: "About the eagle hunter family",
            text: [
              "A night with an eagle hunter family is an authentic window into the daily life of Kazakh nomads. You will learn about their customs and hospitality, and about the close bond between a hunter and his eagle — often the most memorable part of the whole trip.",
            ],
          },
        ],
      },
      {
        title: "Golden Eagle Festival · Day 1",
        route: "Ulaankhus → festival grounds near Ölgii",
        summary: "The opening day: parades, eagle calling and Kazakh music at Western Mongolia's best-known festival.",
        activities: [
          "Opening ceremony",
          "Parade of eagle hunters",
          "Eagle calling competition",
          "Traditional Kazakh performances",
          "Handicraft exhibition",
        ],
        overnight: "Hotel in Ölgii",
        about: [
          {
            title: "About the Golden Eagle Festival",
            text: [
              "The Golden Eagle Festival is the most famous cultural event in western Mongolia. Held every year in Bayan-Ölgii Province, it celebrates the ancient tradition of eagle hunting and attracts visitors, photographers and filmmakers from around the world.",
              "The opening day features colourful parades, traditional music, cultural performances and competitions that showcase the skills of the eagle hunters and their birds.",
            ],
          },
        ],
      },
      {
        title: "Golden Eagle Festival · Day 2",
        route: "Festival grounds near Ölgii",
        summary: "Competition day: eagles against the clock, horseback games and the final awards.",
        activities: [
          "Eagle hunting competitions",
          "Traditional horseback games",
          "Awards ceremony",
          "Closing ceremony",
        ],
        overnight: "Hotel in Ölgii",
        about: [
          {
            title: "About the festival competitions",
            text: [
              "The second day is all about competition: eagle hunters show the speed, accuracy and discipline of their eagles.",
              "You can also watch traditional Kazakh horse games, archery and other cultural events. The festival ends with an awards ceremony honouring the most skilled eagle hunters.",
            ],
          },
        ],
      },
      {
        title: "Departure",
        route: "Ölgii → Ulaanbaatar",
        summary: "A last breakfast, a transfer to Ölgii airport and the flight back to Ulaanbaatar.",
        activities: ["Breakfast", "Airport transfer", "Flight to Ulaanbaatar"],
        overnight: "End of tour",
        about: [
          {
            title: "Until next time",
            text: ["Thank you for travelling with us! We hope to see you again in Mongolia."],
          },
        ],
      },
    ],
    highlights: [
      "Mongolia's highest peaks, the Tavan Bogd massif",
      "Potanin Glacier, the longest in Mongolia",
      "The alpine lakes of Khoton and Khurgan",
      "Baga Turgen Waterfall",
      "A night with a Kazakh eagle hunter family",
      "Both days of the Golden Eagle Festival",
    ],
    stays: [
      { nights: "3 nights", place: "Ger camps in Altai Tavan Bogd National Park" },
      { nights: "1 night", place: "With a Kazakh eagle hunter family in Ulaankhus" },
      { nights: "2 nights", place: "Hotel in Ölgii" },
    ],
    included: [
      "Airport pick-up and drop-off in Ölgii",
      "4×4 vehicle with an experienced driver",
      "English-speaking local guide",
      "6 nights' accommodation as listed",
      "All meals from Day 1 dinner to Day 7 breakfast",
      "National park fees and border-zone permit",
      "Golden Eagle Festival tickets for both days",
      "Visit and dinner with an eagle hunter family",
    ],
    excluded: [
      "International flights",
      "Domestic flights Ulaanbaatar ⇄ Ölgii (we can book them for you)",
      "Travel insurance",
      "Visa fees",
      "Optional horse hire at the glacier",
      "Drinks and personal expenses",
      "Tips for guide, driver and hosts",
    ],
    bring: [
      "Down jacket and warm layers",
      "Hat, gloves and a buff",
      "Sturdy walking boots",
      "Sunglasses and sunscreen",
      "Spare camera batteries",
      "Power bank",
      "Headlamp",
      "Personal medication",
      "Soft duffel bag",
    ],
  },

  hero: {
    eyebrow: "Western Mongolia · 7 days / 6 nights",
    title: "Altai Mountains & the *Golden Eagle* Festival",
    description:
      "Glaciers, alpine lakes, a night with a Kazakh eagle hunter family and two days at the Golden Eagle Festival — one week in Mongolia's wild far west.",
    primaryCta: "Reserve your place",
    secondaryCta: "See the 7-day program",
    facts: [
      { value: "7 days", label: "Ölgii to Ölgii" },
      { value: "4,374 m", label: "Khuiten, Mongolia's highest peak" },
      { value: "14 km", label: "Potanin Glacier" },
      { value: "2 days", label: "at the Golden Eagle Festival" },
    ],
  },
  marquee: [
    "Ölgii",
    "Altai Tavan Bogd",
    "Potanin Glacier",
    "Khuiten Peak",
    "Khoton Lake",
    "Khurgan Lake",
    "Baga Turgen Waterfall",
    "Ulaankhus",
    "Golden Eagle Festival",
  ],
  journey: {
    eyebrow: "One week, three worlds",
    inclusive: "All-inclusive",
    title: "From the glaciers of Tavan Bogd to the *eagle hunters'* festival",
    description:
      "The route loops out of Ölgii through Mongolia's highest mountains, down to its alpine lakes, and back through Kazakh eagle-hunting country in time for the festival.",
    chapters: [
      {
        title: "Peaks & glacier",
        description: "A ger camp beneath the Five Saints and a day walking up to the Potanin Glacier viewpoint.",
      },
      {
        title: "Lakes & waterfall",
        description: "Turquoise Khoton and Khurgan lakes and the Baga Turgen Waterfall, fed by Altai meltwater.",
      },
      {
        title: "Eagles & festival",
        description: "A night with a Kazakh eagle hunter family, then both days of the Golden Eagle Festival.",
      },
    ],
  },
  route: {
    eyebrow: "The route",
    explore: "Explore",
    title: "Seven days, *day by day*",
    description: "A loop from Ölgii into the high Altai and back. Pick a day to read the full plan.",
    mapLabel: "Route map of the 7-day tour",
    note: "Relief from elevation data · route lines are approximate",
    places: {
      olgii: "Ölgii",
      tavanBogd: "Tavan Bogd",
      glacier: "Potanin Glacier",
      khoton: "Khoton Lake",
      khurgan: "Khurgan Lake",
      waterfall: "Baga Turgen Waterfall",
      ulaankhus: "Ulaankhus",
    },
    cta: "Open the full program",
  },
  festival: {
    eyebrow: "The highlight",
    title: "Two days at the *Golden Eagle* Festival",
    description:
      "Every autumn, eagle hunters from across Bayan-Ölgii ride in to compete near Ölgii. You'll be there for the whole festival — from the opening parade to the final awards.",
    dayLabels: ["Opening day", "Competition day"],
    cta: "Book the festival tour",
  },
  why: {
    eyebrow: "Why this journey",
    title: "Nature, culture and *adventure* in one trip",
    items: [
      {
        title: "Breathtaking landscapes",
        description: "Snow peaks, glaciers, alpine lakes and wide open valleys — the Altai at its most dramatic.",
      },
      {
        title: "Unique eagle hunting heritage",
        description: "Meet a Kazakh eagle hunter and his golden eagle at home, then watch the best compete at the festival.",
      },
      {
        title: "Authentic nomadic hospitality",
        description: "Sleep in ger camps and a Kazakh family home, and share traditional meals along the way.",
      },
      {
        title: "A photographer's paradise",
        description: "Golden autumn light, festival costumes and eagles in flight — bring extra memory cards.",
      },
    ],
  },
  cards: {
    eyebrow: "Program cards",
    title: "The whole trip on *seven cards*",
    description: "Our day-by-day cards: open them, save them and share them with your travel companions.",
    open: (n: number) => `Open the Day ${n} card`,
    dialogLabel: "Program card",
    languageNote: "",
  },
  faq: {
    eyebrow: "Good to know",
    title: "Questions *before you book*",
    description: "Short, practical answers. Anything else — just ask us.",
    items: [
      {
        q: "When does the tour run?",
        a: "It is timed to the Golden Eagle Festival in Ölgii, held every year in early October, usually over the first weekend of the month. We confirm exact tour dates as soon as the festival dates are announced. Private trips on other dates are possible on request.",
      },
      {
        q: "How do I get to Ölgii?",
        a: "Domestic flights connect Ulaanbaatar and Ölgii. Seats sell out quickly in festival week, so book early — we are happy to arrange the flights for you.",
      },
      {
        q: "How cold will it be?",
        a: "Early October in the Altai is crisp. Sunny days can be pleasant, but nights fall well below freezing, especially in the mountains. Pack a down jacket, warm layers, a hat and gloves.",
      },
      {
        q: "How fit do I need to be?",
        a: "A normal level of fitness is enough. Expect long drives on unpaved roads and a walk to the Potanin Glacier viewpoint — no technical climbing.",
      },
      {
        q: "Where will we sleep?",
        a: "Three nights in ger camps, one night with an eagle hunter family in Ulaankhus and two nights in a hotel in Ölgii. Facilities in the mountains and at the family's home are simple.",
      },
      {
        q: "Do I need any permits?",
        a: "Altai Tavan Bogd lies in a border zone, so a border permit is required — we arrange it for you if you send a copy of your passport in advance. Visa rules depend on your nationality, so please check with the Mongolian embassy.",
      },
    ],
  },
  banner: {
    title: "Join us at the next *Golden Eagle* Festival",
    description:
      "Festival week fills up fast — flights and camps alike. Send a free booking request today; you only pay once we've confirmed everything with you.",
    cta: "Send a booking request",
  },
  footer: {
    description: "Journeys in Mongolia's Kazakh Altai — mountains, lakes, eagle hunters and the Golden Eagle Festival.",
    officeValue: "Ölgii, Bayan-Ölgii Province, Mongolia",
    contactTitle: "Contact",
    hours: "Mon–Sun 09:00–20:00",
    linksTitle: "Explore",
    links: [
      { label: "The 7-day program", href: "/tour" },
      { label: "About us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Book a trip", href: "/book" },
    ],
    newsletterTitle: "Festival news",
    newsletterDescription: "Festival dates and new departures, a few times a year.",
    newsletterPlaceholder: "Email address",
    newsletterButton: "Subscribe",
    newsletterSuccess: "Thanks! You're on the list.",
    copyright: "© 2026 Eagle Land Tours. All rights reserved.",
    backToTop: "Back to top",
    photoCredits: "Photo credits",
  },
  about: {
    eyebrow: "About Eagle Land Tours",
    title: "Your guides to Mongolia's *Kazakh Altai*",
    description:
      "We focus on one corner of Mongolia: the Altai Mountains of Bayan-Ölgii. Together with local guides, drivers, camp hosts and eagle hunter families, we show travellers this region the way it deserves to be seen.",
    valuesEyebrow: "How we travel",
    valuesTitle: "What matters to us on the road",
    valuesDescription: "A good trip here is about people as much as places — and about being honest on the details.",
    values: [
      {
        title: "Local people first",
        description: "Our guides, drivers and hosts are from the region, so you hear the Altai's stories from the people who live them.",
      },
      {
        title: "Respect for families and eagles",
        description: "Visits are arranged with the families in advance and on their terms. You arrive as a guest, not a spectator.",
      },
      {
        title: "Honest planning",
        description: "Clear information on roads, weather and comfort, so there are no surprises in the mountains.",
      },
    ],
    crewEyebrow: "Who you travel with",
    crewTitle: "Your team on the trip",
    crewDescription: "A small team looks after you from Ölgii airport to the last day of the festival.",
    crew: [
      {
        role: "Local guide",
        description: "An English-speaking guide from Bayan-Ölgii who runs the program, handles permits and translates.",
      },
      {
        role: "Driver",
        description: "An experienced 4×4 driver who knows the mountain tracks and river crossings.",
      },
      {
        role: "Camp hosts",
        description: "Ger camp teams who keep the stove warm and the dinners traditional.",
      },
      {
        role: "Eagle hunter family",
        description: "Your hosts for one night — and the heart of the whole trip.",
      },
    ],
    cta: "See the 7-day program",
    ctaSecondary: "Ask us a question",
  },
  contact: {
    eyebrow: "Contact us",
    title: "Questions about the trip? Message us",
    description: "Dates, flights, group size or a private departure — we reply within 24 hours.",
    formTitle: "Send a message",
    formDescription: "Tell us when you'd like to travel and how many of you there are.",
    fields: {
      name: "Full name",
      email: "Email",
      subject: "Subject",
      message: "Your message",
    },
    subjectPlaceholder: "Example: Festival tour for 2 people",
    messagePlaceholder: "Preferred dates, number of travelers, questions about flights, food or comfort…",
    button: "Send message",
    success: "Thank you! We received your message and will reply within 24 hours.",
    reachTitle: "Direct contact",
    reachNote: "WhatsApp available",
    hoursTitle: "Office hours",
    hoursLines: ["Monday – Sunday", "09:00 – 20:00"],
    officeTitle: "Where we are",
    officeLines: ["Ölgii, Bayan-Ölgii Province", "Meetings by appointment"],
    noteEyebrow: "Planning tip",
    noteTitle: "Book your Ölgii flights early",
    noteBody:
      "Festival week is the busiest time of the year in Ölgii. Send your request early so we can help you secure flights and camp places.",
  },
  tourPage: {
    eyebrow: "The program",
    intro:
      "Seven days through Altai Tavan Bogd National Park, the Khoton and Khurgan lakes, an eagle hunter family's home and the Golden Eagle Festival.",
    factLabels: {
      duration: "Duration",
      startEnd: "Start / finish",
      season: "When",
      stay: "Accommodation",
    },
    stayValue: "Ger camps, family stay, hotel",
    overviewTitle: "About this trip",
    overview: [
      "This journey takes you to Mongolia's far west, where the Altai Mountains meet the Kazakh culture of Bayan-Ölgii. The first days are spent in Altai Tavan Bogd National Park, at the foot of the country's highest peaks and its longest glacier.",
      "From there the route drops to the alpine lakes of Khoton and Khurgan and the Baga Turgen Waterfall, then heads to Ulaankhus for a night with a Kazakh eagle hunter family. The trip ends in Ölgii with both days of the Golden Eagle Festival.",
    ],
    highlightsTitle: "Highlights",
    jumpLabel: "Jump to a day",
    itineraryTitle: "Day-by-day program",
    planTitle: "Plan for the day",
    viewCard: "View day card",
    staysTitle: "Where you'll sleep",
    includedTitle: "Included",
    excludedTitle: "Not included",
    bringTitle: "What to bring",
    faqTitle: "Good to know",
    askTitle: "Still have a question?",
    askBody: "Write to us — we reply within 24 hours.",
    askCta: "Ask a question",
    sidebar: {
      departure: "Departure",
      date: "Preferred start date",
      travelers: "Travelers",
      decrease: "Remove a traveler",
      increase: "Add a traveler",
      request: "Request booking",
      note: "Free request — no payment today. We confirm availability first.",
    },
  },
  booking: {
    eyebrow: "Booking request",
    title: "Reserve your place",
    description:
      "Send your details and we'll confirm availability and the final price within 24 hours. No payment needed now.",
    contactTitle: "Your details",
    tripTitle: "Your trip",
    name: "Full name",
    email: "Email",
    phone: "Phone / WhatsApp",
    departure: "Departure",
    date: "Preferred start date",
    dateHint: "Only needed for a private trip.",
    travelers: "Number of travelers",
    notes: "Notes",
    notesPlaceholder: "Dietary needs, help with flights, single room, questions…",
    submit: "Send booking request",
    summaryTitle: "Summary",
    noPayment: "Free request — you only pay after we confirm everything with you.",
    steps: ["Send your request", "We confirm within 24h", "Pay & get ready to travel"],
  },
  confirmation: {
    title: "Request received!",
    description: "Thank you. Our team will contact you within 24 hours to confirm availability and details.",
    reference: "Reference",
    tour: "Tour",
    departure: "Departure",
    date: "Start date",
    travelers: "Travelers",
    nextTitle: "What happens next",
    next: [
      "We check availability for your departure.",
      "We email you the final program, price and flight options.",
      "Once you approve, we send payment details and a packing list.",
    ],
    backHome: "Back to home",
    backProgram: "Back to the program",
  },
  notFound: {
    title: "This page flew off the map",
    description: "The page you're looking for doesn't exist or has moved.",
    cta: "See the 7-day program",
  },
};

export default en;
