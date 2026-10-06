import { GlassCard, StatusDot } from "performative-ui";
import { cases } from "../content/cases";
import { ExampleTag, SectionHead } from "./shared";

export function Cases() {
  return (
    <section className="section" id="examples">
      <div className="container">
        <SectionHead eyebrow="Examples" title="What this looks like in practice.">
          Made-up but realistic examples from schools, care and business. Real customer stories
          will replace them.
        </SectionHead>
        <div className="grid grid--3">
          {cases.map((c) => (
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
