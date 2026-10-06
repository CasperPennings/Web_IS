import { PricingCard } from "performative-ui";
import { plans } from "../content/pricing";
import { ExampleTag, SectionHead } from "./shared";

export function Pricing({ onContact }: { onContact: () => void }) {
  return (
    <section className="section" id="pricing">
      <div className="container">
        <SectionHead eyebrow="Engagement" title="Start small. Pay for measured results.">
          Fixed scopes at each step, so you decide to continue based on numbers.
        </SectionHead>
        <div className="grid grid--3">
          {plans.map((p) => (
            <PricingCard key={p.tier} featured={p.featured}>
              {p.featured ? <PricingCard.Flag>Recommended start</PricingCard.Flag> : null}
              <PricingCard.Tier>
                {p.tier}
                {p.placeholder ? <ExampleTag label="Price TBD" /> : null}
              </PricingCard.Tier>
              <PricingCard.Amount unit={p.unit}>{p.amount}</PricingCard.Amount>
              <PricingCard.Blurb>{p.blurb}</PricingCard.Blurb>
              <PricingCard.Features>
                {p.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </PricingCard.Features>
              <PricingCard.CTA
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  onContact();
                }}
              >
                {p.cta}
              </PricingCard.CTA>
            </PricingCard>
          ))}
        </div>
      </div>
    </section>
  );
}
