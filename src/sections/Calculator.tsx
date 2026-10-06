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
        <SectionHead eyebrow="Savings calculator" title="Test it with your own numbers.">
          Enter what a workflow costs you today. The formula is shown below the result, and if the
          numbers don't work, this page will say so.
        </SectionHead>
        <div className="calc">
          <GlassCard>
            <div className="calc__fields">
              <NumberField label="Tasks per month" value={tasks} onChange={setTasks} />
              <NumberField label="Minutes per task" value={minutes} onChange={setMinutes} />
              <NumberField label="Loaded hourly cost (€)" value={rate} onChange={setRate} />
              <NumberField label="One-off build cost (€)" value={build} onChange={setBuild} step={500} />
              <NumberField label="Monthly run cost (€)" value={run} onChange={setRun} step={50} />
            </div>
            <div className="calc__label" id="share-label">
              How much of the task time gets automated?
            </div>
            <div className="calc__temp" role="group" aria-labelledby="share-label">
              <Temperature
                options={shareOptions}
                value={share}
                onChange={setShare}
                labelLow="Conservative"
                labelHigh="Optimistic"
              />
            </div>
            <p className="caption">
              Build and run costs are example assumptions until you have a quote.
            </p>
          </GlassCard>

          <GlassCard className="calc__out" aria-live="polite">
            <div>
              <div className="big-num">
                <StatCounter target={Math.round(r.hoursSavedPerMonth)} durationMs={600} /> <small>h / month</small>
              </div>
              <div className="out-label">hours returned to your team</div>
            </div>
            <div>
              <div className="big-num big-num--accent">
                <StatCounter
                  target={Math.round(r.netYearlySaving)}
                  durationMs={600}
                  format={(n) => eur.format(n)}
                />
              </div>
              <div className="out-label">net saving per year, after running costs</div>
            </div>
            <div>
              <div className="big-num">
                {r.paybackMonths === null ? "—" : r.paybackMonths.toFixed(1)}{" "}
                <small>months</small>
              </div>
              <div className="out-label">payback period on the build cost</div>
            </div>
            {longPayback ? (
              <div className="notice">
                With these inputs this workflow may not be worth automating. We'll tell you that in
                the review, before you spend on a build.
              </div>
            ) : null}
            <div className="formula">
              savings = tasks × minutes/60 × hourly cost × automation share − run cost
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
