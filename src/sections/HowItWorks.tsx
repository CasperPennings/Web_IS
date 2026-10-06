import { GlassCard } from "performative-ui";
import { steps } from "../content/process";
import { SectionHead } from "./shared";

export function HowItWorks() {
  return (
    <section className="section" id="how">
      <div className="container">
        <SectionHead eyebrow="How it works" title="Measure first. Automate second. Scale third.">
          You see the numbers before you commit to a build.
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
