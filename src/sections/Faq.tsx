import { Button } from "performative-ui";
import { useCopy } from "../i18n/LanguageContext";
import type { OpenContact } from "../lib/contact";
import { SectionHead } from "./shared";

export function Faq({ onContact }: { onContact: OpenContact }) {
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
        <div className="faq__more">
          <span>{t.more}</span>
          <Button variant="ghost" onClick={() => onContact()}>
            {t.moreCta}
          </Button>
        </div>
      </div>
    </section>
  );
}
