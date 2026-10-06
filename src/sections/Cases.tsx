import { GlassCard, StatusDot } from "performative-ui";
import { useCopy } from "../i18n/LanguageContext";
import { ExampleTag, SectionHead } from "./shared";

export function Cases() {
  const t = useCopy().cases;
  return (
    <section className="section" id="examples">
      <div className="container">
        <SectionHead eyebrow={t.eyebrow} title={t.title}>
          {t.intro}
        </SectionHead>
        <div className="grid grid--3">
          {t.items.map((c) => (
            <GlassCard key={c.client} glowOnHover>
              <div className="case__meta">
                <StatusDot static color="var(--pui-fg-mute)" />
                {c.client}
                {c.placeholder ? <ExampleTag /> : null}
              </div>
              <GlassCard.Title>{c.task}</GlassCard.Title>
              <GlassCard.Body>{c.before}</GlassCard.Body>
              <div className="case__result">{c.result}</div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
