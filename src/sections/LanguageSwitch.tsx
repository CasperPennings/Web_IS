import { useLanguage } from "../i18n/LanguageContext";
import type { Lang } from "../i18n/types";

const options: { lang: Lang; label: string; name: string }[] = [
  { lang: "nl", label: "NL", name: "Nederlands" },
  { lang: "en", label: "EN", name: "English" },
];

export function LanguageSwitch() {
  const { lang, setLang, copy } = useLanguage();
  return (
    <div className="lang-switch" role="group" aria-label={copy.nav.langLabel}>
      {options.map((o) => (
        <button
          key={o.lang}
          type="button"
          lang={o.lang}
          aria-pressed={lang === o.lang}
          aria-label={o.name}
          onClick={() => setLang(o.lang)}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
