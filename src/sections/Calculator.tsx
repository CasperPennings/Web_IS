import { useMemo, useState } from "react";
import { GlassCard, StatCounter, Temperature } from "performative-ui";
import { useCopy } from "../i18n/LanguageContext";
import { calculateRoi } from "../lib/roi";
import { SectionHead } from "./shared";

const shareOptions = [
  { key: "0.3", label: "30%", color: "#d4920a" },
  { key: "0.5", label: "50%", color: "#3b82f6" },
  { key: "0.7", label: "70%", color: "#22d3ee" },
];

function NumberField(props: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  step?: number;
}) {
  return (
    <label className="field">
      {props.label}
      <input
        type="number"
        inputMode="decimal"
        min={0}
        step={props.step ?? 1}
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
      />
    </label>
  );
}

export function Calculator() {
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

  const [tasks, setTasks] = useState("800");
  const [minutes, setMinutes] = useState("6");
  const [rate, setRate] = useState("45");
  const [share, setShare] = useState("0.5");
  const [build, setBuild] = useState("12000");
  const [run, setRun] = useState("400");

  const r = calculateRoi({
    tasksPerMonth: Number(tasks),
    minutesPerTask: Number(minutes),
    hourlyCost: Number(rate),
    automationShare: Number(share),
    buildCost: Number(build),
    monthlyRunCost: Number(run),
  });

  const longPayback = r.paybackMonths === null || r.paybackMonths > 12;

  return (
    <section className="section" id="calculator">
      <div className="container">
        <SectionHead eyebrow={t.eyebrow} title={t.title}>
          {t.intro}
        </SectionHead>
        <div className="calc">
          <GlassCard>
            <div className="calc__fields">
              <NumberField label={t.tasks} value={tasks} onChange={setTasks} />
              <NumberField label={t.minutes} value={minutes} onChange={setMinutes} />
              <NumberField label={t.rate} value={rate} onChange={setRate} />
              <NumberField label={t.build} value={build} onChange={setBuild} step={500} />
              <NumberField label={t.run} value={run} onChange={setRun} step={50} />
            </div>
            <div className="calc__label" id="share-label">
              {t.shareQuestion}
            </div>
            <div className="calc__temp" role="group" aria-labelledby="share-label">
              <Temperature
                options={shareOptions}
                value={share}
                onChange={setShare}
                labelLow={t.low}
                labelHigh={t.high}
              />
            </div>
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
                {r.paybackMonths === null ? "—" : fmt.oneDecimal.format(r.paybackMonths)}{" "}
                <small>{t.monthsUnit}</small>
              </div>
              <div className="out-label">{t.paybackLabel}</div>
            </div>
            {longPayback ? <div className="notice">{t.notice}</div> : null}
            <div className="formula">{t.formula}</div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
