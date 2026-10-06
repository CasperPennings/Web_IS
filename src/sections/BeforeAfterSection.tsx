import { BeforeAfter } from "performative-ui";
import { afterSteps, beforeSteps } from "../content/process";
import { examplesCaption } from "../content/site";
import { ExampleTag, SectionHead } from "./shared";

export function BeforeAfterSection() {
  return (
    <section className="section section--soft">
      <div className="container">
        <SectionHead eyebrow="Before / after" title="The same order, minutes instead of busywork.">
          One concrete workflow, step by step. <ExampleTag />
        </SectionHead>
        <BeforeAfter
          before={beforeSteps}
          after={afterSteps}
          beforeLabel="Manual today"
          afterLabel="Agent + MCP bridge"
          brand="Intelligent Software"
        />
        <p className="caption">{examplesCaption}</p>
      </div>
    </section>
  );
}
