"use client";

import Button from "./components/Button";
import { CompassIcon } from "./components/Icons";
import { useLanguage } from "./context/LanguageContext";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="flex min-h-screen items-center justify-center bg-canvas px-4 pt-28 pb-16 text-center">
      <div className="max-w-md">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white text-brand shadow-soft">
          <CompassIcon className="h-8 w-8" />
        </span>
        <p className="mt-6 text-sm font-bold tracking-[0.2em] text-faint">404</p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-[-0.035em] text-ink">{t.notFound.title}</h1>
        <p className="mt-3 text-[15px] leading-7 text-muted">{t.notFound.description}</p>
        <Button href="/tours" className="mt-8">
          {t.notFound.cta}
        </Button>
      </div>
    </div>
  );
}
