export interface RoiInputs {
  tasksPerMonth: number;
  minutesPerTask: number;
  hourlyCost: number;
  /** Fraction of the task time that gets automated, 0–1. */
  automationShare: number;
  buildCost: number;
  monthlyRunCost: number;
}

export interface RoiResult {
  hoursSavedPerMonth: number;
  netMonthlySaving: number;
  netYearlySaving: number;
  /** Months until the build cost is earned back; null if it never is. */
  paybackMonths: number | null;
}

const nonNegative = (n: number) => (Number.isFinite(n) && n > 0 ? n : 0);

/**
 * savings = tasks × minutes/60 × hourly cost × automation share − run cost
 */
export function calculateRoi(input: RoiInputs): RoiResult {
  const share = Math.min(nonNegative(input.automationShare), 1);
  const hoursSavedPerMonth =
    (nonNegative(input.tasksPerMonth) * nonNegative(input.minutesPerTask)) / 60 * share;
  const grossMonthlySaving = hoursSavedPerMonth * nonNegative(input.hourlyCost);
  const netMonthlySaving = grossMonthlySaving - nonNegative(input.monthlyRunCost);
  const buildCost = nonNegative(input.buildCost);
  return {
    hoursSavedPerMonth,
    netMonthlySaving,
    netYearlySaving: netMonthlySaving * 12,
    paybackMonths: netMonthlySaving > 0 ? buildCost / netMonthlySaving : null,
  };
}
