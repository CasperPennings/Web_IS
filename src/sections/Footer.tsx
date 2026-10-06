import { BigBack } from "performative-ui";
import { site } from "../content/site";

export function Footer() {
  return (
    <BigBack
      company="Intelligent Software"
      columns={[
        {
          heading: "The service",
          links: [
            { label: "How it works", href: "#how" },
            { label: "What it saves", href: "#calculator" },
            { label: "Costs", href: "#pricing" },
          ],
        },
        {
          heading: "More",
          links: [
            { label: "Examples", href: "#examples" },
            { label: "Questions", href: "#faq" },
            { label: "Contact", href: "#contact" },
          ],
        },
        {
          heading: "Contact",
          links: [{ label: site.email, href: `mailto:${site.email}` }, { label: site.registration }],
        },
      ]}
      copyright={`© ${new Date().getFullYear()} Intelligent Software · ${site.domain}`}
    />
  );
}
