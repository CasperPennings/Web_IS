import { Button } from "performative-ui";
import { Logo } from "./shared";

export function Nav({ onContact }: { onContact: () => void }) {
  return (
    <header className="nav">
      <div className="container nav__inner">
        <Logo />
        <nav className="nav__links" aria-label="Main">
          <a href="#how">How it works</a>
          <a href="#calculator">Savings</a>
          <a href="#results">Results</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
        </nav>
        <Button className="nav__cta" size="sm" variant="glow" onClick={onContact}>
          Book a <span className="nav__long">process </span>review
        </Button>
      </div>
    </header>
  );
}
