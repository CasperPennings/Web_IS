import { GlassCard, StatCounter } from "performative-ui";
import { useCopy } from "../i18n/LanguageContext";
import { ExampleTag, SectionHead } from "./shared";

export function Results() {
  const copy = useCopy();
  const t = copy.results;
  const int = new Intl.NumberFormat(copy.locale, { maximumFractionDigits: 0 });
  return (
    <section className="section section--soft" id="results">
      <div className="container">
        <SectionHead eyebrow={t.eyebrow} title={t.title}>
          {t.intro}
        </SectionHead>
        <div className="grid grid--4">
          {t.items.map((s) => (
            <GlassCard key={s.source}>
              <div className="big-num">
                {s.prefix ?? ""}
                <StatCounter target={s.value} durationMs={900} format={(n) => int.format(n)} />
                <small>{s.suffix}</small>
              </div>
              <div className="out-label">
                {s.label}
                {s.placeholder ? <ExampleTag /> : null}
              </div>
              <div className="stat__source">
                {t.sourcePrefix} {s.source}
              </div>
            </GlassCard>
          ))}
        </div>
        <p className="caption">{copy.common.examplesCaption}</p>
      </div>
    </section>
  );
}
