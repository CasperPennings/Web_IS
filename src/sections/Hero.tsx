import { useEffect, useState } from "react";
import { Button, EyebrowPill, NodeGraphBackground, WordRoll } from "performative-ui";
import { useLanguage } from "../i18n/LanguageContext";
import type { OpenContact } from "../lib/contact";
import { AssistantChat } from "./AssistantChat";

function usePrefersReducedMotion() {
  const query = "(prefers-reduced-motion: reduce)";
  const [reduced, setReduced] = useState(() => window.matchMedia?.(query).matches ?? false);
  useEffect(() => {
    const mq = window.matchMedia?.(query);
    if (!mq) return;
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

export function Hero({ onContact }: { onContact: OpenContact }) {
  const { lang, copy } = useLanguage();
  const t = copy.hero;
  const reducedMotion = usePrefersReducedMotion();
  return (
    <section className="hero" id="top">
      {reducedMotion ? null : (
        <NodeGraphBackground
          className="hero__bg"
          density={24}
          speed={0.25}
          colors={["#7c3aed", "#3b82f6", "#22d3ee"]}
          linkColor="#6d6df0"
          baseOpacity={0.4}
        />
      )}
      <div className="container hero__grid">
        <div>
          <EyebrowPill>{t.eyebrow}</EyebrowPill>
          <h1>
            {t.titleStart}{" "}
            {reducedMotion ? (
              <span className="hero__static-word">{t.rolling[0]}</span>
            ) : (
              <WordRoll key={lang} gradient words={t.rolling} intervalMs={3500} />
            )}
            {t.titleEnd ? <> {t.titleEnd}</> : null}
            <span className="sr-only">{t.seo}</span>
          </h1>
          <p className="hero__sub">{t.sub}</p>
          <div className="hero__ctas">
            <Button variant="glow" size="lg" onClick={() => onContact()}>
              {t.ctaPrimary}
            </Button>
            <Button as="a" href="#calculator" variant="ghost" size="lg">
              {t.ctaSecondary}
            </Button>
          </div>
          <p className="hero__founding">{t.founding}</p>
          <ul className="hero__proof">
            {t.proof.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
        <AssistantChat />
      </div>
    </section>
  );
}
