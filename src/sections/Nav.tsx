import { Button } from "performative-ui";
import { useCopy } from "../i18n/LanguageContext";
import { LanguageSwitch } from "./LanguageSwitch";
import { Logo } from "./shared";

export function Nav({ onContact }: { onContact: () => void }) {
  const t = useCopy().nav;
  return (
    <header className="nav">
      <div className="container nav__inner">
        <Logo />
        <nav className="nav__links" aria-label={t.label}>
          <a href="#platform">{t.platform}</a>
          <a href="#how">{t.how}</a>
          <a href="#calculator">{t.saves}</a>
          <a href="#pricing">{t.costs}</a>
          <a href="#faq">{t.questions}</a>
        </nav>
        <LanguageSwitch />
        <Button className="nav__cta" size="sm" variant="glow" onClick={onContact}>
          <span className="nav__long">{t.cta}</span>
          <span className="nav__short">{t.ctaShort}</span>
        </Button>
      </div>
    </header>
  );
}
