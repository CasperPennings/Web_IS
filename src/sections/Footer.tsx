import { BigBack } from "performative-ui";
import { site } from "../content/site";
import { useCopy } from "../i18n/LanguageContext";

export function Footer() {
  const copy = useCopy();
  const t = copy.footer;
  const nav = copy.nav;
  return (
    <BigBack
      company="Intelligent Software"
      columns={[
        {
          heading: t.service,
          links: [
            { label: nav.platform, href: "#platform" },
            { label: nav.how, href: "#how" },
            { label: nav.saves, href: "#calculator" },
            { label: nav.costs, href: "#pricing" },
          ],
        },
        {
          heading: t.more,
          links: [
            { label: nav.examples, href: "#examples" },
            { label: nav.questions, href: "#faq" },
            { label: t.contactLink, href: "#contact" },
          ],
        },
        {
          heading: t.contact,
          links: [{ label: site.email, href: `mailto:${site.email}` }, { label: t.registration }],
        },
      ]}
      copyright={`© ${new Date().getFullYear()} Intelligent Software · ${site.domain}`}
    />
  );
}
