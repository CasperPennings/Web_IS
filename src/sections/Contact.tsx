import { NodeGraphBackground } from "performative-ui";
import { site } from "../content/site";
import { ContactForm } from "./ContactForm";
import { SectionHead } from "./shared";

export function Contact() {
  return (
    <section className="section contact" id="contact">
      <NodeGraphBackground
        className="contact__bg"
        density={30}
        speed={0.2}
        colors={["#7c3aed", "#3b82f6", "#22d3ee"]}
        linkColor="#6d6df0"
        baseOpacity={0.35}
      />
      <div className="container contact__inner">
        <SectionHead eyebrow="Get in touch" title="Start with a free conversation.">
          Tell us which task eats up the most time. We'll tell you honestly whether we can help, and
          what it would roughly save. No obligations, no technical talk. Prefer email?{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </SectionHead>
        <ContactForm />
      </div>
    </section>
  );
}
