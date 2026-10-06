import { GlassCard } from "performative-ui";
import { useCopy } from "../i18n/LanguageContext";
import { SectionHead } from "./shared";

export function Safety() {
  const t = useCopy().safety;
  return (
    <section className="section section--soft">
      <div className="container">
        <SectionHead eyebrow={t.eyebrow} title={t.title}>
          {t.intro}
        </SectionHead>
        <div className="grid grid--3">
          {t.items.map((s) => (
            <GlassCard key={s.title}>
              <GlassCard.Icon>{s.icon}</GlassCard.Icon>
              <GlassCard.Title>{s.title}</GlassCard.Title>
              <GlassCard.Body>{s.body}</GlassCard.Body>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
