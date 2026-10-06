// Fictional example scenarios. Replace with real case studies when available.
export interface CaseStudy {
  placeholder: boolean;
  client: string;
  system: string;
  task: string;
  result: string;
}

export const cases: CaseStudy[] = [
  {
    placeholder: true,
    client: "Example wholesaler",
    system: "ERP without API",
    task: "Order intake from email",
    result: "~6 min → ~20 s per order",
  },
  {
    placeholder: true,
    client: "Example accounting firm",
    system: "Desktop bookkeeping software",
    task: "Invoice matching",
    result: "Manual matching reduced by ~70%",
  },
  {
    placeholder: true,
    client: "Example manufacturer",
    system: "IBM i (AS/400)",
    task: "Daily production reports",
    result: "Report ready before the shift starts",
  },
];
