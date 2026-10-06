import { GlassCard } from "performative-ui";
import { safety } from "../content/process";
import { SectionHead } from "./shared";

export function Safety() {
  return (
    <section className="section section--soft">
      <div className="container">
        <SectionHead eyebrow="Is it safe?" title="You stay in control. Always.">
          The most common worry we hear is “what if it does something it shouldn’t?” This is how we prevent that.
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
