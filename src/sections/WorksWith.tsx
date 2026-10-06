import { SlippyWords } from "performative-ui";
import { softwareKinds, tasks } from "../content/process";
import { SectionHead } from "./shared";

export function WorksWith() {
  return (
    <section className="section section--soft" style={{ overflow: "hidden" }}>
      <div className="container">
        <SectionHead eyebrow="Works with what you have" title="Your programs stay. The busywork goes.">
          If a person can do it on a computer, step by step, the assistant can usually learn to do
          it too.
        </SectionHead>
      </div>
      <SlippyWords rows={[softwareKinds.concat(softwareKinds), tasks.concat(tasks)]} fade />
    </section>
  );
}
