// Prices are placeholders: set real amounts (or "from €…") before launch.
export interface Plan {
  placeholder: boolean;
  tier: string;
  amount: string;
  unit?: string;
  blurb: string;
  features: string[];
  cta: string;
  featured?: boolean;
}

export const plans: Plan[] = [
  {
    placeholder: true,
    tier: "Process review",
    amount: "from €X",
    blurb: "A fixed-price review that ends in a business case per workflow.",
    features: [
      "1–2 weeks",
      "Time per task measured on your data",
      "Payback estimate per workflow",
      "Honest advice if it doesn't pay off",
    ],
    cta: "Book a review",
  },
  {
    placeholder: true,
    tier: "Pilot",
    amount: "from €Y",
    blurb: "One workflow, fixed scope, measured result.",
    features: [
      "MCP bridge for one system",
      "Scoped tools + audit log",
      "Runs next to the manual process",
      "Before/after report",
    ],
    cta: "Plan a pilot",
    featured: true,
  },
  {
    placeholder: true,
    tier: "Production & support",
    amount: "from €Z",
    unit: "/mo",
    blurb: "Keep it running, and keep extending it.",
    features: ["Monitoring and updates", "SLA with response times", "New tools and workflows", "Quarterly savings report"],
    cta: "Talk to us",
  },
];
