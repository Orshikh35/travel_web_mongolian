import type { Metadata } from "next";
import { cookies, headers } from "next/headers";
import { Inter, Inter_Tight, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import { LanguageProvider } from "./context/LanguageContext";
import { LANG_COOKIE, LANG_META, Lang, detectLang, isLang } from "./i18n/config";
import { DICTIONARIES } from "./i18n/dictionaries";

const inter = Inter({
  subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext"],
  variable: "--font-inter",
  display: "swap",
});

// Tightly tracked grotesk for headlines and big numbers.
const interTight = Inter_Tight({
  subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-inter-tight",
  display: "swap",
});

// Serif italic for the emphasised words in headlines.
const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["600", "700"],
  style: ["italic"],
  variable: "--font-playfair",
  display: "swap",
});

// Saved choice first, then the browser's preferred language.
const resolveLang = async (): Promise<Lang> => {
  const saved = (await cookies()).get(LANG_COOKIE)?.value;
  if (isLang(saved)) return saved;
  return detectLang((await headers()).get("accept-language"));
};

export async function generateMetadata(): Promise<Metadata> {
  const { meta } = DICTIONARIES[await resolveLang()];
  return {
    title: meta.title,
    description: meta.description,
    openGraph: { title: meta.title, description: meta.description, images: ["/images/eagle-hunter-altai.jpg"] },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const lang = await resolveLang();

  return (
    <html lang={LANG_META[lang].htmlLang} className={`${inter.variable} ${interTight.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <LanguageProvider initialLang={lang}>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
