import { PricingCard } from "performative-ui";
import { useCopy } from "../i18n/LanguageContext";
import { ExampleTag, SectionHead } from "./shared";

export function Pricing({ onContact }: { onContact: () => void }) {
  const t = useCopy().pricing;
  return (
    <section className="section" id="pricing">
      <div className="container">
        <SectionHead eyebrow={t.eyebrow} title={t.title}>
          {t.intro}
        </SectionHead>
        <div className="grid grid--3">
          {t.plans.map((p) => (
            <PricingCard key={p.tier} featured={p.featured}>
              {p.featured ? <PricingCard.Flag>{t.recommended}</PricingCard.Flag> : null}
              <PricingCard.Tier>
                {p.tier}
                {p.placeholder ? <ExampleTag label={t.priceTbd} /> : null}
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
