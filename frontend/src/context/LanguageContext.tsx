import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Language } from "../types";

interface ContextValue {
  language: Language;
  isRTL: boolean;
  toggleLanguage: () => void;
  t: (en: string, ar: string) => string;
}

const LanguageContext = createContext<ContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const [language, setLanguage] = useState<Language>((localStorage.getItem("aah_lang") as Language) || "en");

  useEffect(() => {
    localStorage.setItem("aah_lang", language);
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      isRTL: language === "ar",
      toggleLanguage: () => setLanguage((prev) => (prev === "en" ? "ar" : "en")),
      t: (en: string, ar: string) => (language === "ar" ? ar : en)
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): ContextValue {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used in LanguageProvider");
  return context;
}
