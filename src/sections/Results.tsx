import { GlassCard, StatCounter } from "performative-ui";
import { results } from "../content/results";
import { examplesCaption } from "../content/site";
import { ExampleTag, SectionHead } from "./shared";

export function Results() {
  return (
    <section className="section section--soft" id="results">
      <div className="container">
        <SectionHead eyebrow="Results" title="Hours back. Fewer errors. A payback you can calculate.">
          Every figure comes with the basis it was derived from.
        </SectionHead>
        <div className="grid grid--4">
          {results.map((s) => (
            <GlassCard key={s.label}>
              <div className="big-num">
                {s.prefix ?? ""}
                <StatCounter target={s.value} durationMs={900} />
                <small>{s.suffix}</small>
              </div>
              <div className="out-label">
                {s.label}
                {s.placeholder ? <ExampleTag /> : null}
              </div>
              <div className="stat__source">Basis: {s.source}</div>
            </GlassCard>
          ))}
        </div>
        <p className="caption">{examplesCaption}</p>
      </div>
    </section>
  );
}
