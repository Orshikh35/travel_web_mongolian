"use client";

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { MotionConfig } from "framer-motion";
import { LANG_COOKIE, LANG_META, Lang } from "../i18n/config";
import { DICTIONARIES, Dictionary } from "../i18n/dictionaries";

interface LanguageContextType {
  lang: Lang;
  t: Dictionary;
  setLang: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

type Props = {
  // Resolved on the server from the cookie or Accept-Language, so the first render is already in the right language.
  initialLang: Lang;
  children: React.ReactNode;
};

export const LanguageProvider = ({ initialLang, children }: Props) => {
  const [lang, setLangState] = useState<Lang>(initialLang);
  const t = DICTIONARIES[lang];

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    document.cookie = `${LANG_COOKIE}=${next}; path=/; max-age=31536000; samesite=lax`;
  }, []);

  useEffect(() => {
    document.documentElement.lang = LANG_META[lang].htmlLang;
    document.title = t.meta.title;
  }, [lang, t]);

  const value = useMemo(() => ({ lang, t, setLang }), [lang, t, setLang]);

  return (
    <LanguageContext.Provider value={value}>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
