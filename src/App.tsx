import { useState } from "react";
import { Popover } from "performative-ui";
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
import { Pricing } from "./sections/Pricing";
import { Problem } from "./sections/Problem";
import { Results } from "./sections/Results";
import { Safety } from "./sections/Safety";
import { WorksWith } from "./sections/WorksWith";

export function App() {
  const [contactOpen, setContactOpen] = useState(false);
  const openContact = () => setContactOpen(true);

  return (
    <>
      <Nav onContact={openContact} />
      <main>
        <Hero />
        <Problem />
        <BeforeAfterSection />
        <WorksWith />
        <HowItWorks />
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
        title="Start with a free conversation"
        closeLabel="Close"
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
