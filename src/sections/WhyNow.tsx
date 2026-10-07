import { GlassCard, GradientText } from "performative-ui";
import { useCopy } from "../i18n/LanguageContext";
import { SectionHead } from "./shared";

export function WhyNow() {
  const t = useCopy().whyNow;
  return (
    <section className="section section--soft why-now" id="why-now">
      <div className="container">
        <SectionHead
          eyebrow={t.eyebrow}
          title={
            <>
              {t.titleStart} <GradientText>{t.titleHighlight}</GradientText> {t.titleEnd}
            </>
          }
        >
          {t.intro}
        </SectionHead>
        <div className="grid grid--4">
          {t.points.map((p) => (
            <GlassCard key={p.title} glowOnHover>
              <div className="why-now__num">{p.icon}</div>
              <GlassCard.Title>{p.title}</GlassCard.Title>
              <GlassCard.Body>{p.body}</GlassCard.Body>
            </GlassCard>
          ))}
        </div>
        <p className="why-now__closing">{t.closing}</p>
      </div>
    </section>
  );
}
