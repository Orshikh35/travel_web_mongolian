import type { Metadata } from "next";
import { cookies, headers } from "next/headers";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import { LanguageProvider } from "./context/LanguageContext";
import { LANG_COOKIE, LANG_META, Lang, detectLang, isLang } from "./i18n/config";
import { DICTIONARIES } from "./i18n/dictionaries";

const manrope = Manrope({
  subsets: ["latin", "latin-ext", "cyrillic", "cyrillic-ext"],
  variable: "--font-manrope",
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
  return { title: meta.title, description: meta.description };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const lang = await resolveLang();

  return (
    <html lang={LANG_META[lang].htmlLang} className={manrope.variable}>
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
