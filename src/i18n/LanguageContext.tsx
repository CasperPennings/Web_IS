import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { en } from "../content/en";
import { nl } from "../content/nl";
import type { Copy, Lang } from "./types";

const copies: Record<Lang, Copy> = { nl, en };
const STORAGE_KEY = "is-lang";

/** ?lang=en in the URL wins, then the visitor's earlier choice, then Dutch. */
function initialLang(): Lang {
  try {
    const fromUrl = new URLSearchParams(window.location.search).get("lang");
    if (fromUrl === "en" || fromUrl === "nl") return fromUrl;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "nl") return stored;
  } catch {
    // Storage can be blocked; fall through to the default.
  }
  return "nl";
}

interface LanguageState {
  lang: Lang;
  copy: Copy;
  setLang: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageState | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang);
  const copy = copies[lang];

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
      const url = new URL(window.location.href);
      if (next === "nl") url.searchParams.delete("lang");
      else url.searchParams.set("lang", next);
      window.history.replaceState(null, "", url);
    } catch {
      // Not critical: the choice just won't be remembered.
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = copy.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", copy.meta.description);
  }, [lang, copy]);

  const value = useMemo(() => ({ lang, copy, setLang }), [lang, copy, setLang]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside <LanguageProvider>");
  return ctx;
}

export function useCopy() {
  return useLanguage().copy;
}
