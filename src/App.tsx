import { useState } from "react";
import { Popover } from "performative-ui";
import { useCopy } from "./i18n/LanguageContext";
import type { ContactContext, OpenContact } from "./lib/contact";
import { Approach } from "./sections/Approach";
import { Calculator } from "./sections/Calculator";
import { Contact } from "./sections/Contact";
import { ContactForm } from "./sections/ContactForm";
import { Faq } from "./sections/Faq";
import { Footer } from "./sections/Footer";
import { Hero } from "./sections/Hero";
import { Nav } from "./sections/Nav";
import { Pricing } from "./sections/Pricing";
import { Problem } from "./sections/Problem";
import { Safety } from "./sections/Safety";

export function App() {
  const copy = useCopy();
  const t = copy.contact;
  const [contactOpen, setContactOpen] = useState(false);
  const [context, setContext] = useState<ContactContext>({});
  // Each opening gets a fresh form, prefilled with what the visitor clicked.
  const [formKey, setFormKey] = useState(0);
  const openContact: OpenContact = (ctx = {}) => {
    setContext(ctx);
    setFormKey((k) => k + 1);
    setContactOpen(true);
  };

  return (
    <>
      <a className="skip-link" href="#main">
        {copy.common.skip}
      </a>
      <Nav onContact={openContact} />
      <main id="main">
        <Hero onContact={openContact} />
        <Problem />
        <Approach />
        <Calculator onContact={openContact} />
        <Safety />
        <Pricing onContact={openContact} />
        <Faq onContact={openContact} />
        <Contact />
      </main>
      <Footer />
      <Popover
        open={contactOpen}
        onOpenChange={setContactOpen}
        title={t.title}
        closeLabel={t.close}
        closeOnEscape
        closeOnBackdrop
      >
        <div className="popover-body">
          <button
            type="button"
            className="popover-x"
            aria-label={copy.form.closeLabel}
            onClick={() => setContactOpen(false)}
          >
            ×
          </button>
          <ContactForm key={formKey} plan={context.plan} task={context.task} />
        </div>
      </Popover>
    </>
  );
}
