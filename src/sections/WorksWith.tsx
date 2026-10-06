import { SlippyWords } from "performative-ui";
import { systems, tasks } from "../content/process";
import { SectionHead } from "./shared";

export function WorksWith() {
  return (
    <section className="section section--soft" style={{ overflow: "hidden" }}>
      <div className="container">
        <SectionHead eyebrow="Works with" title="The systems you run, and the work you want gone.">
          Compatibility, not a client list. If a person can operate it, we can build a bridge to
          it.
        </SectionHead>
      </div>
      <SlippyWords rows={[systems.concat(systems), tasks.concat(tasks)]} fade />
    </section>
  );
}
