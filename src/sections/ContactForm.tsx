import { useId, useState } from "react";
import { Button } from "performative-ui";
import { site } from "../content/site";
import { useCopy } from "../i18n/LanguageContext";

/**
 * No backend yet: submitting opens the visitor's mail client with the
 * details prefilled. Swap `handleSubmit` for a fetch() to a form service later.
 */
export function ContactForm() {
  const t = useCopy().form;
  const id = useId();
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = [
      `${t.name}: ${data.get("name")}`,
      `${t.company}: ${data.get("company")}`,
      `${t.email}: ${data.get("email")}`,
      `${t.program} ${data.get("system")}`,
      "",
      `${data.get("process")}`,
    ].join("\n");
    const subject = `${t.mailSubject} ${data.get("company")}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__row">
        <label className="field" htmlFor={`${id}-name`}>
          {t.name}
          <input id={`${id}-name`} name="name" required autoComplete="name" />
        </label>
        <label className="field" htmlFor={`${id}-company`}>
          {t.company}
          <input id={`${id}-company`} name="company" required autoComplete="organization" />
        </label>
      </div>
      <div className="form__row">
        <label className="field" htmlFor={`${id}-email`}>
          {t.email}
          <input id={`${id}-email`} name="email" type="email" required autoComplete="email" />
        </label>
        <label className="field" htmlFor={`${id}-system`}>
          {t.program}
          <input id={`${id}-system`} name="system" placeholder={t.programPlaceholder} />
        </label>
      </div>
      <label className="field" htmlFor={`${id}-process`}>
        {t.task}
        <textarea id={`${id}-process`} name="process" rows={4} required />
      </label>
      <Button type="submit" variant="glow" size="lg" block>
        {t.submit}
      </Button>
      <p className="form__note" role="status">
        {sent ? t.sent : t.note}
      </p>
    </form>
  );
}
