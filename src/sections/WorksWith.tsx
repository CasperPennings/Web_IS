import { SlippyWords } from "performative-ui";
import { useCopy } from "../i18n/LanguageContext";
import { SectionHead } from "./shared";

export function WorksWith() {
  const t = useCopy().worksWith;
  return (
    <section className="section section--soft" style={{ overflow: "hidden" }}>
      <div className="container">
        <SectionHead eyebrow={t.eyebrow} title={t.title}>
          {t.intro}
        </SectionHead>
      </div>
      <SlippyWords rows={[t.softwareKinds.concat(t.softwareKinds), t.tasks.concat(t.tasks)]} fade />
    </section>
  );
}
