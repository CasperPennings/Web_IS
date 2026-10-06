import { Button, EyebrowPill, NodeGraphBackground, WordRoll } from "performative-ui";
import { rollingTasks } from "../content/process";
import { AssistantChat } from "./AssistantChat";

export function Hero() {
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
          <EyebrowPill>For organisations drowning in admin</EyebrowPill>
          <h1>
            Let a digital assistant do the <WordRoll gradient words={rollingTasks} />
          </h1>
          <p className="hero__sub">
            Think of ChatGPT, but working inside the software you already use. It takes over the
            repetitive computer work, so your team gets hours back every week. No new systems, no
            technical knowledge needed.
          </p>
          <div className="hero__ctas">
            <Button as="a" href="#calculator" variant="glow" size="lg">
              Calculate what it saves
            </Button>
            <Button as="a" href="#how" variant="ghost" size="lg">
              How does it work?
            </Button>
          </div>
        </div>
        <AssistantChat />
      </div>
    </section>
  );
}
