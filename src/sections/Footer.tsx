import { BigBack } from "performative-ui";
import { site } from "../content/site";

export function Footer() {
  return (
    <BigBack
      company="Intelligent Software"
      columns={[
        {
          heading: "Product",
          links: [
            { label: "How it works", href: "#how" },
            { label: "Savings calculator", href: "#calculator" },
            { label: "Pricing", href: "#pricing" },
          ],
        },
        {
          heading: "Company",
          links: [
            { label: "Results", href: "#results" },
            { label: "FAQ", href: "#faq" },
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
