"use client";

import React, { createContext, useContext, useSyncExternalStore } from "react";
import { Lang } from "../ui-texts";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const LANGUAGE_STORAGE_KEY = "language";
const listeners = new Set<() => void>();

const emitLanguageChange = () => {
  listeners.forEach((listener) => listener());
};

const readStoredLanguage = (): Lang => {
  if (typeof window === "undefined") {
    return "en";
  }

  const savedLang = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  return savedLang === "mn" || savedLang === "en" ? savedLang : "en";
};

const subscribe = (listener: () => void) => {
  listeners.add(listener);

  if (typeof window !== "undefined") {
    const handleStorage = (event: StorageEvent) => {
      if (event.key === LANGUAGE_STORAGE_KEY) {
        listener();
      }
    };

    window.addEventListener("storage", handleStorage);

    return () => {
      listeners.delete(listener);
      window.removeEventListener("storage", handleStorage);
    };
  }

  return () => {
    listeners.delete(listener);
  };
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const lang = useSyncExternalStore<Lang>(subscribe, readStoredLanguage, () => "en");

  const setLang = (newLang: Lang) => {
    if (typeof window === "undefined") return;

    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, newLang);
    emitLanguageChange();
  };

  const toggleLang = () => {
    setLang(lang === "en" ? "mn" : "en");
  };

  return <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};
