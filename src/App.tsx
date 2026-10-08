import { useState } from "react";
import { Popover } from "performative-ui";
import { useCopy } from "./i18n/LanguageContext";
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
  const t = useCopy().contact;
  const [contactOpen, setContactOpen] = useState(false);
  const openContact = () => setContactOpen(true);

  return (
    <>
      <Nav onContact={openContact} />
      <main>
        <Hero />
        <Problem />
        <Approach />
        <Calculator />
        <Safety />
        <Pricing onContact={openContact} />
        <Faq />
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
          <ContactForm />
        </div>
      </Popover>
    </>
  );
}
