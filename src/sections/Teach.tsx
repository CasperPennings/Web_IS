import { GlassCard } from "performative-ui";
import { useCopy } from "../i18n/LanguageContext";
import { Icon } from "./Icon";
import { SectionHead } from "./shared";

export function Teach() {
  const t = useCopy().teach;
  return (
    <section className="section" id="teach">
      <div className="container">
        <SectionHead eyebrow={t.eyebrow} title={t.title}>
          {t.intro}
        </SectionHead>
        <div className="grid grid--3">
          {t.steps.map((s) => (
            <GlassCard key={s.title} glowOnHover>
              <GlassCard.Icon>
                <Icon name={s.icon} />
              </GlassCard.Icon>
              <GlassCard.Title>{s.title}</GlassCard.Title>
              <GlassCard.Body>{s.body}</GlassCard.Body>
            </GlassCard>
          ))}
        </div>
        <p className="caption">{t.note}</p>
      </div>
    </section>
  );
}
