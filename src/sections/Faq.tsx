import { faq } from "../content/faq";
import { SectionHead } from "./shared";

export function Faq() {
  return (
    <section className="section section--soft" id="faq">
      <div className="container">
        <SectionHead eyebrow="FAQ" title="Questions we get asked." />
        <div className="faq">
          {faq.map((item) => (
            <details key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
