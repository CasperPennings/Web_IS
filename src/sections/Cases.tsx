import { GlassCard, StatusDot } from "performative-ui";
import { cases } from "../content/cases";
import { ExampleTag, SectionHead } from "./shared";

export function Cases() {
  return (
    <section className="section">
      <div className="container">
        <SectionHead eyebrow="Use cases" title="Typical workflows we automate.">
          Fictional example scenarios. Real case studies will replace them as projects go live.
        </SectionHead>
        <div className="grid grid--3">
          {cases.map((c) => (
            <GlassCard key={c.client} glowOnHover>
              <div className="case__meta">
                <StatusDot static color="var(--pui-fg-mute)" />
                {c.client}
                {c.placeholder ? <ExampleTag label="Example scenario" /> : null}
              </div>
              <GlassCard.Title>{c.task}</GlassCard.Title>
              <GlassCard.Body>System: {c.system}</GlassCard.Body>
              <div className="case__result">{c.result}</div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
