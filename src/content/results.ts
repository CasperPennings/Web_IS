// All entries below are placeholders until real measurements exist.
export interface ResultStat {
  placeholder: boolean;
  source: string;
  value: number;
  decimals?: number;
  prefix?: string;
  suffix: string;
  label: string;
}

export const results: ResultStat[] = [
  {
    placeholder: true,
    source: "Calculator: 800 orders/month × 6 min × 60% automated",
    value: 48,
    suffix: " h",
    label: "returned to the team per month, per workflow",
  },
  {
    placeholder: true,
    source: "Example: typical re-keying error rate before vs after validation",
    value: 80,
    prefix: "−",
    suffix: "%",
    label: "re-keying errors",
  },
  {
    placeholder: true,
    source: "Example: build cost vs net monthly saving",
    value: 5,
    prefix: "~",
    suffix: " months",
    label: "typical payback period",
  },
  {
    placeholder: true,
    source: "Example: process review to pilot in production",
    value: 5,
    prefix: "~",
    suffix: " weeks",
    label: "from kick-off to a live pilot",
  },
];
