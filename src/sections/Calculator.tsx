import { useEffect, useMemo, useRef, useState } from "react";
import { Button, GlassCard, StatCounter } from "performative-ui";
import { useCopy } from "../i18n/LanguageContext";
import { prices } from "../content/site";
import type { OpenContact } from "../lib/contact";
import { calculateRoi } from "../lib/roi";
import { SectionHead } from "./shared";

function useDebounced<T>(value: T, ms: number) {
  const [v, setV] = useState(value);
  useEffect(() => {
    const id = setTimeout(() => setV(value), ms);
    return () => clearTimeout(id);
  }, [value, ms]);
  return v;
}

const shareValues = ["0.3", "0.5", "0.7"];

function NumberField(props: {
  label: string;
  unit: string;
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
  step?: number;
}) {
  return (
    <label className="field">
      {props.label}
      <span className="field__wrap">
        <input
          type="number"
          inputMode="decimal"
          min={0}
          step={props.step ?? 1}
          placeholder={props.placeholder}
          value={props.value}
          onChange={(e) => props.onChange(e.target.value)}
        />
        <span className="field__suffix" aria-hidden="true">
          {props.unit}
        </span>
      </span>
    </label>
  );
}

export function Calculator({ onContact }: { onContact: OpenContact }) {
  const copy = useCopy();
  const t = copy.calc;
  const fmt = useMemo(
    () => ({
      eur: new Intl.NumberFormat(copy.locale, { style: "currency", currency: "EUR", maximumFractionDigits: 0 }),
      int: new Intl.NumberFormat(copy.locale, { maximumFractionDigits: 0 }),
      oneDecimal: new Intl.NumberFormat(copy.locale, { minimumFractionDigits: 1, maximumFractionDigits: 1 }),
    }),
    [copy.locale],
  );

  const [tasks, setTasks] = useState("1500");
  const [minutes, setMinutes] = useState("6");
  const [rate, setRate] = useState("45");
  const [share, setShare] = useState("0.5");
  const outRef = useRef<HTMLDivElement>(null);
  const [outVisible, setOutVisible] = useState(false);
  useEffect(() => {
    const el = outRef.current;
    if (!el || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(([e]) => setOutVisible(e.isIntersecting), { threshold: 0.25 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const r = calculateRoi({
    tasksPerMonth: Number(tasks),
    minutesPerTask: Number(minutes),
    hourlyCost: Number(rate),
    automationShare: Number(share),
    buildCost: prices.quickscan + prices.trial,
    monthlyRunCost: prices.support,
  });

  const longPayback = r.paybackMonths === null || r.paybackMonths > 12;
  const yearly = fmt.eur.format(Math.round(r.netYearlySaving));
  const payback = r.paybackMonths === null ? "—" : fmt.oneDecimal.format(r.paybackMonths);

  const announce = useDebounced(
    t.srSummary
      .replace("{hours}", fmt.int.format(Math.round(r.hoursSavedPerMonth)))
      .replace("{year}", yearly)
      .replace("{payback}", payback),
    800,
  );

  const discuss = () =>
    onContact({
      task: t.prefill
        .replace("{tasks}", fmt.int.format(Number(tasks) || 0))
        .replace("{minutes}", fmt.int.format(Number(minutes) || 0))
        .replace("{year}", yearly),
    });

  return (
    <section className="section" id="calculator">
      <div className="container">
        <SectionHead eyebrow={t.eyebrow} title={t.title}>
          {t.intro}
        </SectionHead>
        <div className="calc">
          <GlassCard>
            <div className="calc__fields">
              <NumberField label={t.tasks} unit={t.unitTimes} placeholder={t.tasksHint} value={tasks} onChange={setTasks} />
              <NumberField label={t.minutes} unit={t.unitMin} value={minutes} onChange={setMinutes} />
              <NumberField label={t.rate} unit={t.unitRate} value={rate} onChange={setRate} />
            </div>
            <fieldset className="segmented">
              <legend className="calc__label">{t.shareQuestion}</legend>
              <div className="segmented__options">
                {shareValues.map((v, i) => (
                  <label key={v} className={v === share ? "is-active" : undefined}>
                    <input
                      type="radio"
                      name="share"
                      value={v}
                      checked={v === share}
                      onChange={() => setShare(v)}
                    />
                    {t.shareOptions[i]}
                  </label>
                ))}
              </div>
            </fieldset>
            <p className="caption">{t.fixedLine}</p>
          </GlassCard>

          <GlassCard className="calc__out" ref={outRef}>
            <div>
              <div className="big-num">
                <StatCounter
                  target={Math.round(r.hoursSavedPerMonth)}
                  durationMs={600}
                  format={(n) => fmt.int.format(n)}
                />{" "}
                <small>{t.hoursUnit}</small>
              </div>
              <div className="out-label">{t.hoursLabel}</div>
            </div>
            <div>
              <div className="big-num big-num--accent">
                <StatCounter
                  target={Math.round(r.netYearlySaving)}
                  durationMs={600}
                  format={(n) => fmt.eur.format(n)}
                />
              </div>
              <div className="out-label">{t.yearLabel}</div>
            </div>
            <div>
              <div className="big-num">
                {payback} <small>{t.monthsUnit}</small>
              </div>
              <div className="out-label">{t.paybackLabel}</div>
            </div>
            {longPayback ? <div className="notice">{t.notice}</div> : <div className="notice notice--good">{t.promising}</div>}
            <div className="calc__cta">
              <Button variant="glow" onClick={discuss}>
                {t.cta}
              </Button>
              <span className="caption">{t.ctaNote}</span>
            </div>
            <details className="formula">
              <summary>{t.formulaTitle}</summary>
              <p>{t.formula}</p>
              <p>{t.footnote}</p>
            </details>
          </GlassCard>
        </div>
        <p className="sr-only" aria-live="polite">
          {announce}
        </p>
        <div className={`calc__sticky${outVisible ? " is-hidden" : ""}`} aria-hidden="true">
          <span>
            <strong>{yearly}</strong> {t.stickyYear}
          </span>
          <span>
            <strong>{payback}</strong> {t.stickyPayback}
          </span>
        </div>
      </div>
    </section>
  );
}
