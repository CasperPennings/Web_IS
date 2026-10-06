// All entries below are placeholders until real measurements exist.
export interface ResultStat {
  placeholder: boolean;
  source: string;
  value: number;
  prefix?: string;
  suffix: string;
  label: string;
}

export const results: ResultStat[] = [
  {
    placeholder: true,
    source: "800 invoices a month × 6 minutes, of which 60% is taken over",
    value: 48,
    suffix: " hours",
    label: "back for your team every month, for one task",
  },
  {
    placeholder: true,
    source: "typical number of typing errors before and after automatic checking",
    value: 80,
    prefix: "−",
    suffix: "%",
    label: "fewer typing errors",
  },
  {
    placeholder: true,
    source: "set-up cost compared with the monthly saving",
    value: 5,
    prefix: "~",
    suffix: " months",
    label: "until the investment has earned itself back",
  },
  {
    placeholder: true,
    source: "from first conversation to a working trial",
    value: 5,
    prefix: "~",
    suffix: " weeks",
    label: "before you see it working",
  },
];
