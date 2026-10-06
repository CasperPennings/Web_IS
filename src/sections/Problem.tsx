import { GlassCard } from "performative-ui";
import { problemPoints } from "../content/process";
import { SectionHead } from "./shared";

export function Problem() {
  return (
    <section className="section problem">
      <div className="container">
        <SectionHead eyebrow="The problem" title="Your systems hold the data. Your people carry it around.">
          Legacy software keeps businesses running, but it was never built to talk to anything
          else.
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
