import { Button } from "performative-ui";
import { Logo } from "./shared";

export function Nav({ onContact }: { onContact: () => void }) {
  return (
    <header className="nav">
      <div className="container nav__inner">
        <Logo />
        <nav className="nav__links" aria-label="Main">
          <a href="#how">How it works</a>
          <a href="#calculator">What it saves</a>
          <a href="#examples">Examples</a>
          <a href="#pricing">Costs</a>
          <a href="#faq">Questions</a>
        </nav>
        <Button className="nav__cta" size="sm" variant="glow" onClick={onContact}>
          <span className="nav__long">Free </span>conversation
        </Button>
      </div>
    </header>
  );
}
