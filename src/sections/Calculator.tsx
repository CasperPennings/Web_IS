import { useState } from "react";
import { GlassCard, StatCounter, Temperature } from "performative-ui";
import { calculateRoi } from "../lib/roi";
import { SectionHead } from "./shared";

const eur = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
});

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
        <SectionHead eyebrow="What would it save you?" title="Fill in your own numbers.">
          Pick one task your team does often. Fill in roughly how much time it takes. The calculation
          is shown below the result, and if it isn't worth it, we'll say so.
        </SectionHead>
        <div className="calc">
          <GlassCard>
            <div className="calc__fields">
              <NumberField label="How often per month?" value={tasks} onChange={setTasks} />
              <NumberField label="Minutes each time?" value={minutes} onChange={setMinutes} />
              <NumberField label="Cost of an hour of work (€)" value={rate} onChange={setRate} />
              <NumberField label="One-time set-up cost (€)" value={build} onChange={setBuild} step={500} />
              <NumberField label="Monthly cost to keep it running (€)" value={run} onChange={setRun} step={50} />
            </div>
            <div className="calc__label" id="share-label">
              How much of the work can the assistant take over?
            </div>
            <div className="calc__temp" role="group" aria-labelledby="share-label">
              <Temperature
                options={shareOptions}
                value={share}
                onChange={setShare}
                labelLow="Careful estimate"
                labelHigh="Optimistic estimate"
              />
            </div>
            <p className="caption">
              An hour of work includes employer costs (roughly salary × 1.3). The set-up and monthly
              costs are example amounts until you have a quote from us.
            </p>
          </GlassCard>

          <GlassCard className="calc__out" aria-live="polite">
            <div>
              <div className="big-num">
                <StatCounter target={Math.round(r.hoursSavedPerMonth)} durationMs={600} /> <small>hours / month</small>
              </div>
              <div className="out-label">back for your team, every month</div>
            </div>
            <div>
              <div className="big-num big-num--accent">
                <StatCounter
                  target={Math.round(r.netYearlySaving)}
                  durationMs={600}
                  format={(n) => eur.format(n)}
                />
              </div>
              <div className="out-label">saved per year, after the monthly costs</div>
            </div>
            <div>
              <div className="big-num">
                {r.paybackMonths === null ? "—" : r.paybackMonths.toFixed(1)}{" "}
                <small>months</small>
              </div>
              <div className="out-label">until the set-up cost has earned itself back</div>
            </div>
            {longPayback ? (
              <div className="notice">
                With these numbers, this task is probably not worth automating. We'd tell you that in
                the first conversation, before you spend anything.
              </div>
            ) : null}
            <div className="formula">
              saving per month = times per month × minutes ÷ 60 × cost per hour × share taken over −
              monthly cost
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
