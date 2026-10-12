'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Lang = "FR" | "EN";

interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
}

const LangContext = createContext<LangContextType>({
  lang: "EN",
  setLang: () => {},
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("EN");

  useEffect(() => {
    if (typeof window !== "undefined" && window.navigator) {
      const isFrCA = window.navigator.language === "fr-CA" || 
                     (window.navigator.languages && window.navigator.languages.includes("fr-CA"));
      if (isFrCA) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setLang("FR");
      }
    }
  }, []);

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}

export function translate<T>(obj: { FR: T; EN: T } | undefined, lang: Lang): T {
  if (!obj) {
    throw new Error("Translation object is undefined");
  }
  return lang === "FR" ? obj.FR : obj.EN;
}


