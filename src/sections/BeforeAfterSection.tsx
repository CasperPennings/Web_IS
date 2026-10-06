import { BeforeAfter } from "performative-ui";
import { useCopy } from "../i18n/LanguageContext";
import { ExampleTag, SectionHead } from "./shared";

export function BeforeAfterSection() {
  const copy = useCopy();
  const t = copy.beforeAfter;
  return (
    <section className="section section--soft">
      <div className="container">
        <SectionHead eyebrow={t.eyebrow} title={t.title}>
          {t.intro} <ExampleTag />
        </SectionHead>
        <BeforeAfter
          before={t.before}
          after={t.after}
          beforeLabel={t.beforeLabel}
          afterLabel={t.afterLabel}
          brand="Intelligent Software"
        />
        <p className="caption">{copy.common.examplesCaption}</p>
      </div>
    </section>
  );
}
