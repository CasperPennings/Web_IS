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
    tier: "Quick scan",
    amount: "from €X",
    blurb: "We work out which tasks are worth automating, and what that would save you.",
    features: [
      "1–2 weeks, fixed price",
      "Based on how your team works today",
      "A clear savings calculation per task",
      "An honest “no” if it isn't worth it",
    ],
    cta: "Start with a scan",
  },
  {
    placeholder: true,
    tier: "Trial on one task",
    amount: "from €Y",
    blurb: "One task automated, fixed scope, results measured.",
    features: [
      "Connected to your own software",
      "Clear limits on what it may do",
      "Runs alongside your team",
      "A before-and-after report",
    ],
    cta: "Plan a trial",
    featured: true,
  },
  {
    placeholder: true,
    tier: "Ongoing support",
    amount: "from €Z",
    unit: "/month",
    blurb: "We keep it running, and add new tasks when you're ready.",
    features: [
      "We keep an eye on it for you",
      "Fixed response times when something's wrong",
      "New tasks added step by step",
      "A savings overview every quarter",
    ],
    cta: "Talk to us",
  },
];
