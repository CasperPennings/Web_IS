import { GlassCard } from "performative-ui";
import { useCopy } from "../i18n/LanguageContext";
import { SectionHead } from "./shared";

export function Problem() {
  const t = useCopy().problem;
  return (
    <section className="section problem">
      <div className="container">
        <SectionHead eyebrow={t.eyebrow} title={t.title}>
          {t.intro}
        </SectionHead>
        <div className="grid grid--3">
          {t.points.map((p) => (
            <GlassCard key={p.title}>
              <GlassCard.Title>{p.title}</GlassCard.Title>
              <GlassCard.Body>{p.body}</GlassCard.Body>
            </GlassCard>
          ))}
        </div>
        <div className="problem__now">
          <p className="problem__cost">{t.cost}</p>
          <p>{t.whyNow}</p>
        </div>
      </div>
    </section>
  );
}
