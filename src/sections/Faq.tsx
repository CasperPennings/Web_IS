import { useCopy } from "../i18n/LanguageContext";
import { SectionHead } from "./shared";

export function Faq() {
  const t = useCopy().faq;
  return (
    <section className="section section--soft" id="faq">
      <div className="container">
        <SectionHead eyebrow={t.eyebrow} title={t.title} />
        <div className="faq">
          {t.items.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
