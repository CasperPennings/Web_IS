import { GlassCard } from "performative-ui";
import { safety } from "../content/process";
import { SectionHead } from "./shared";

export function Safety() {
  return (
    <section className="section section--soft">
      <div className="container">
        <SectionHead eyebrow="Safety & control" title="Will an AI break our core system? Not by design.">
          The bridge decides what the agent may do. You keep control and the paper trail.
        </SectionHead>
        <div className="grid grid--3">
          {safety.map((s) => (
            <GlassCard key={s.title}>
              <GlassCard.Icon>{s.icon}</GlassCard.Icon>
              <GlassCard.Title>{s.title}</GlassCard.Title>
              <GlassCard.Body>{s.body}</GlassCard.Body>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
