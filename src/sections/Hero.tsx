import { Button, EyebrowPill, NodeGraphBackground, WordRoll } from "performative-ui";
import { useLanguage } from "../i18n/LanguageContext";
import { AssistantChat } from "./AssistantChat";

export function Hero() {
  const { lang, copy } = useLanguage();
  const t = copy.hero;
  return (
    <section className="hero" id="top">
      <NodeGraphBackground
        className="hero__bg"
        density={40}
        speed={0.25}
        colors={["#7c3aed", "#3b82f6", "#22d3ee"]}
        linkColor="#6d6df0"
        baseOpacity={0.4}
      />
      <div className="container hero__grid">
        <div>
          <EyebrowPill>{t.eyebrow}</EyebrowPill>
          <h1>
            {t.titleStart} <WordRoll key={lang} gradient words={t.rolling} />
            {t.titleEnd ? <> {t.titleEnd}</> : null}
          </h1>
          <p className="hero__sub">{t.sub}</p>
          <div className="hero__ctas">
            <Button as="a" href="#calculator" variant="glow" size="lg">
              {t.ctaPrimary}
            </Button>
            <Button as="a" href="#platform" variant="ghost" size="lg">
              {t.ctaSecondary}
            </Button>
          </div>
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
