import { site } from "../content/site";
import { useCopy } from "../i18n/LanguageContext";
import { ContactForm } from "./ContactForm";
import { SectionHead } from "./shared";

export function Contact() {
  const t = useCopy().contact;
  return (
    <section className="section contact" id="contact">
      <div className="container contact__inner">
        <SectionHead eyebrow={t.eyebrow} title={t.title}>
          {t.intro} {t.emailPrompt} <a href={`mailto:${site.email}`}>{site.email}</a>
        </SectionHead>
        <ContactForm />
      </div>
    </section>
  );
}
