export const LANGS = ["mn", "en", "ru", "zh", "ko", "ja"] as const;

export type Lang = (typeof LANGS)[number];

export const DEFAULT_LANG: Lang = "en";
export const LANG_COOKIE = "lang";

export const LANG_META: Record<
  Lang,
  { native: string; english: string; short: string; htmlLang: string; locale: string }
> = {
  mn: { native: "Монгол", english: "Mongolian", short: "MN", htmlLang: "mn", locale: "mn-MN" },
  en: { native: "English", english: "English", short: "EN", htmlLang: "en", locale: "en-US" },
  ru: { native: "Русский", english: "Russian", short: "RU", htmlLang: "ru", locale: "ru-RU" },
  zh: { native: "中文", english: "Chinese", short: "中", htmlLang: "zh-CN", locale: "zh-CN" },
  ko: { native: "한국어", english: "Korean", short: "한", htmlLang: "ko", locale: "ko-KR" },
  ja: { native: "日本語", english: "Japanese", short: "日", htmlLang: "ja", locale: "ja-JP" },
};

export const isLang = (value: unknown): value is Lang =>
  typeof value === "string" && (LANGS as readonly string[]).includes(value);

// Picks the first supported language from an Accept-Language header, e.g. "ru-RU,ru;q=0.9,en;q=0.8".
export const detectLang = (acceptLanguage: string | null | undefined): Lang => {
  if (!acceptLanguage) return DEFAULT_LANG;

  const preferred = acceptLanguage
    .split(",")
    .map((part) => {
      const [tag, q] = part.trim().split(";q=");
      return { base: tag.toLowerCase().split("-")[0], q: q ? Number(q) : 1 };
    })
    .sort((a, b) => b.q - a.q);

  const match = preferred.find((entry) => isLang(entry.base));
  return match && isLang(match.base) ? match.base : DEFAULT_LANG;
};
