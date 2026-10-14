import { LANG_META, Lang } from "../i18n/config";

export type Currency = "MNT" | "USD";

export const formatPrice = (amount: number, currency: Currency, lang: Lang) => {
  const locale = LANG_META[lang].locale;
  if (currency === "MNT") {
    return `${new Intl.NumberFormat(locale).format(amount)}₮`;
  }
  return new Intl.NumberFormat(locale, { style: "currency", currency, maximumFractionDigits: 0 }).format(amount);
};

// Accepts "YYYY-MM-DD" from <input type="date"> and formats it without timezone drift.
export const formatDate = (isoDate: string, lang: Lang) => {
  const [year, month, day] = isoDate.split("-").map(Number);
  if (!year || !month || !day) return isoDate;
  return new Intl.DateTimeFormat(LANG_META[lang].locale, { dateStyle: "long" }).format(
    new Date(year, month - 1, day),
  );
};

export const todayIso = () => {
  const now = new Date();
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
};
