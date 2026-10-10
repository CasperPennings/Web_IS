import { useMemo, useState } from "react";
import { Button, GlassCard, StatCounter } from "performative-ui";
import { useCopy } from "../i18n/LanguageContext";
import { prices } from "../content/site";
import type { OpenContact } from "../lib/contact";
import { calculateRoi } from "../lib/roi";
import { SectionHead } from "./shared";

const shareValues = ["0.3", "0.5", "0.7"];

function NumberField(props: {
  label: string;
  unit: string;
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

  const [tasks, setTasks] = useState("1100");
  const [minutes, setMinutes] = useState("6");
  const [rate, setRate] = useState("45");
  const [share, setShare] = useState("0.5");

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
              <NumberField label={t.tasks} unit={t.unitTimes} value={tasks} onChange={setTasks} />
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
            <p className="caption">{t.footnote}</p>
          </GlassCard>

          <GlassCard className="calc__out" aria-live="polite">
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
            {longPayback ? <div className="notice">{t.notice}</div> : null}
            <div className="calc__cta">
              <Button variant="glow" onClick={discuss}>
                {t.cta}
              </Button>
              <span className="caption">{t.ctaNote}</span>
            </div>
            <div className="formula">{t.formula}</div>
          </GlassCard>
        </div>
        <div className="calc__sticky" aria-hidden="true">
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
