import { GlassCard, StatCounter } from "performative-ui";
import { results } from "../content/results";
import { examplesCaption } from "../content/site";
import { ExampleTag, SectionHead } from "./shared";

export function Results() {
  return (
    <section className="section section--soft" id="results">
      <div className="container">
        <SectionHead eyebrow="What it delivers" title="Hours back. Fewer mistakes. Money you can count.">
          We show how every number is worked out, so you can judge it for yourself.
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
              <div className="stat__source">How we got this: {s.source}</div>
            </GlassCard>
          ))}
        </div>
        <p className="caption">{examplesCaption}</p>
      </div>
    </section>
  );
}
