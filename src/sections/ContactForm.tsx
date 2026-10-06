import { useId, useState } from "react";
import { Button } from "performative-ui";
import { site } from "../content/site";

/**
 * No backend yet: submitting opens the visitor's mail client with the
 * details prefilled. Swap `handleSubmit` for a fetch() to a form service later.
 */
export function ContactForm() {
  const id = useId();
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = [
      `Name: ${data.get("name")}`,
      `Company: ${data.get("company")}`,
      `Email: ${data.get("email")}`,
      `Program: ${data.get("system")}`,
      "",
      `${data.get("process")}`,
    ].join("\n");
    const subject = `Conversation request from ${data.get("company")}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__row">
        <label className="field" htmlFor={`${id}-name`}>
          Name
          <input id={`${id}-name`} name="name" required autoComplete="name" />
        </label>
        <label className="field" htmlFor={`${id}-company`}>
          Company
          <input id={`${id}-company`} name="company" required autoComplete="organization" />
        </label>
      </div>
      <div className="form__row">
        <label className="field" htmlFor={`${id}-email`}>
          Work email
          <input id={`${id}-email`} name="email" type="email" required autoComplete="email" />
        </label>
        <label className="field" htmlFor={`${id}-system`}>
          Which program is it about?
          <input id={`${id}-system`} name="system" placeholder="e.g. our accounting program" />
        </label>
      </div>
      <label className="field" htmlFor={`${id}-process`}>
        Which task takes up too much time?
        <textarea id={`${id}-process`} name="process" rows={4} required />
      </label>
      <Button type="submit" variant="glow" size="lg" block>
        Request a free conversation
      </Button>
      <p className="form__note" role="status">
        {sent
          ? "Your email app should have opened with the details filled in. Just press send."
          : "We reply within one business day. The first call is free."}
      </p>
    </form>
  );
}
