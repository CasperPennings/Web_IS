import type { ReactNode } from "react";
import { EyebrowPill } from "performative-ui";
import { useCopy } from "../i18n/LanguageContext";

export function ExampleTag({ label }: { label?: string }) {
  const t = useCopy();
  return <span className="example-tag">{label ?? t.common.example}</span>;
}

export function SectionHead({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className="section-head">
      <EyebrowPill>{eyebrow}</EyebrowPill>
      <h2>{title}</h2>
      {children ? <p>{children}</p> : null}
    </div>
  );
}

export function Logo() {
  const t = useCopy();
  return (
    <a className="wordmark" href="#top" aria-label={t.common.logoLabel}>
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <defs>
          <linearGradient id="logo-g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#7C3AED" />
            <stop offset=".5" stopColor="#3B82F6" />
            <stop offset="1" stopColor="#22D3EE" />
          </linearGradient>
        </defs>
        <path
          d="M10 32h44M10 32l10-10M10 32l10 10M54 32l-10-10M54 32l-10 10"
          stroke="url(#logo-g)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
      <span className="wordmark__text">intelligent software</span>
    </a>
  );
}
