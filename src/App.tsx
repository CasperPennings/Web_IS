import { useState } from "react";
import { Popover } from "performative-ui";
import { useCopy } from "./i18n/LanguageContext";
import { BeforeAfterSection } from "./sections/BeforeAfterSection";
import { Calculator } from "./sections/Calculator";
import { Cases } from "./sections/Cases";
import { Contact } from "./sections/Contact";
import { ContactForm } from "./sections/ContactForm";
import { Faq } from "./sections/Faq";
import { Footer } from "./sections/Footer";
import { Hero } from "./sections/Hero";
import { HowItWorks } from "./sections/HowItWorks";
import { Nav } from "./sections/Nav";
import { Platform } from "./sections/Platform";
import { Pricing } from "./sections/Pricing";
import { Problem } from "./sections/Problem";
import { Results } from "./sections/Results";
import { Safety } from "./sections/Safety";
import { WhyNow } from "./sections/WhyNow";
import { Workday } from "./sections/Workday";
import { WorksWith } from "./sections/WorksWith";

export function App() {
  const t = useCopy().contact;
  const [contactOpen, setContactOpen] = useState(false);
  const openContact = () => setContactOpen(true);

  return (
    <>
      <Nav onContact={openContact} />
      <main>
        <Hero />
        <WhyNow />
        <Problem />
        <BeforeAfterSection />
        <Platform />
        <WorksWith />
        <HowItWorks />
        <Workday />
        <Calculator />
        <Cases />
        <Results />
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
