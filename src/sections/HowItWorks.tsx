import { GlassCard } from "performative-ui";
import { useCopy } from "../i18n/LanguageContext";
import { SectionHead } from "./shared";

export function HowItWorks() {
  const t = useCopy().how;
  return (
    <section className="section" id="how">
      <div className="container">
        <SectionHead eyebrow={t.eyebrow} title={t.title}>
          {t.intro}
        </SectionHead>
        <div className="grid grid--4">
          {t.steps.map((s) => (
            <GlassCard key={s.title} glowOnHover>
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
