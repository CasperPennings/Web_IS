import { GlassCard } from "performative-ui";
import { steps } from "../content/process";
import { SectionHead } from "./shared";

export function HowItWorks() {
  return (
    <section className="section" id="how">
      <div className="container">
        <SectionHead eyebrow="How it works" title="Four simple steps. You decide after each one.">
          You see what it will save before you commit to anything.
        </SectionHead>
        <div className="grid grid--4">
          {steps.map((s) => (
            <GlassCard key={s.title} glowOnHover>
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
