import { GlassCard } from "performative-ui";
import { problemPoints } from "../content/process";
import { SectionHead } from "./shared";

export function Problem() {
  return (
    <section className="section problem">
      <div className="container">
        <SectionHead eyebrow="Sound familiar?" title="Your people spend hours being the link between programs.">
          Most organisations run on software that works fine, but was never made to work
          together. So people fill the gaps by hand.
        </SectionHead>
        <div className="grid grid--3">
          {problemPoints.map((p) => (
            <GlassCard key={p.title}>
              <GlassCard.Title>{p.title}</GlassCard.Title>
              <GlassCard.Body>{p.body}</GlassCard.Body>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
