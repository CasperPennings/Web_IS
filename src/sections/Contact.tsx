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
        <SectionHead eyebrow="Get started" title="Book a process review.">
          Tell us which workflow eats the most hours. We'll measure it, build the business case and
          tell you honestly whether it's worth automating. Prefer email?{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </SectionHead>
        <ContactForm />
      </div>
    </section>
  );
}
