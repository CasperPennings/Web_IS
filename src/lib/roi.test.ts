import { describe, expect, it } from "vitest";
import { calculateRoi } from "./roi";

const base = {
  tasksPerMonth: 800,
  minutesPerTask: 6,
  hourlyCost: 45,
  automationShare: 0.5,
  buildCost: 12000,
  monthlyRunCost: 400,
};

describe("calculateRoi", () => {
  it("computes hours, net saving and payback", () => {
    const r = calculateRoi(base);
    expect(r.hoursSavedPerMonth).toBeCloseTo(40);
    expect(r.netMonthlySaving).toBeCloseTo(1400);
    expect(r.netYearlySaving).toBeCloseTo(16800);
    expect(r.paybackMonths).toBeCloseTo(12000 / 1400);
  });

  it("returns no payback when running costs exceed the saving", () => {
    const r = calculateRoi({ ...base, tasksPerMonth: 50 });
    expect(r.netMonthlySaving).toBeLessThan(0);
    expect(r.paybackMonths).toBeNull();
  });

  it("ignores negative and non-finite inputs and caps the share at 100%", () => {
    const r = calculateRoi({ ...base, tasksPerMonth: -5, automationShare: 3 });
    expect(r.hoursSavedPerMonth).toBe(0);
    const capped = calculateRoi({ ...base, automationShare: 3 });
    expect(capped.hoursSavedPerMonth).toBeCloseTo(80);
    expect(calculateRoi({ ...base, minutesPerTask: NaN }).hoursSavedPerMonth).toBe(0);
  });
});
