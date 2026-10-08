import { useId, useState } from "react";
import { Button } from "performative-ui";
import { site } from "../content/site";
import { useCopy } from "../i18n/LanguageContext";

type Status = "idle" | "sending" | "sent" | "sentMail" | "error";

/**
 * Sends the request to Formspree when `site.formspreeId` is set; otherwise
 * opens the visitor's mail app with the details prefilled.
 */
export function ContactForm() {
  const t = useCopy().form;
  const id = useId();
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const subject = `${t.mailSubject} ${data.get("company")}`;

    if (!site.formspreeId) {
      const body = [
        `${t.name}: ${data.get("name")}`,
        `${t.company}: ${data.get("company")}`,
        `${t.email}: ${data.get("email")}`,
        `${t.program} ${data.get("system")}`,
        "",
        `${data.get("process")}`,
      ].join("\n");
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setStatus("sentMail");
      return;
    }

    data.set("_subject", subject);
    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${site.formspreeId}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(`Formspree responded ${res.status}`);
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  const message =
    status === "sending" ? t.sending
    : status === "sent" ? t.sent
    : status === "sentMail" ? t.sentMail
    : status === "error" ? (
      <>
        {t.error} <a href={`mailto:${site.email}`}>{site.email}</a>.
      </>
    )
    : t.note;

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
      {/* Spam trap: people never see or fill this field; Formspree drops submissions that do. */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="sr-only" aria-hidden="true" />
      <Button type="submit" variant="glow" size="lg" block disabled={status === "sending"}>
        {t.submit}
      </Button>
      <p className={status === "error" ? "form__note form__note--error" : "form__note"} role="status">
        {message}
      </p>
    </form>
  );
}
