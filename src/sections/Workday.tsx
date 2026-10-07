import { GlassCard } from "performative-ui";
import { useCopy } from "../i18n/LanguageContext";
import { Icon } from "./Icon";
import { SectionHead } from "./shared";

export function Workday() {
  const t = useCopy().workday;
  return (
    <section className="section section--soft" id="quickscan">
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
        <div className="workday__privacy">
          <h3>{t.privacyTitle}</h3>
          <ul>
            {t.privacy.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
