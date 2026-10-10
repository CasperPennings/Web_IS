export type Lang = "nl" | "en";

export interface TextCard {
  icon?: string;
  title: string;
  body: string;
}

export interface Plan {
  /** Price not yet set. */
  placeholder: boolean;
  tier: string;
  amount: string;
  unit?: string;
  blurb: string;
  features: string[];
  cta: string;
  featured?: boolean;
}

/** Every piece of text on the page. Both languages must fill all of it. */
export interface Copy {
  /** Used for number and currency formatting. */
  locale: string;
  meta: { title: string; description: string };
  common: { example: string; examplesCaption: string; logoLabel: string; skip: string };
  nav: {
    label: string;
    approach: string;
    saves: string;
    costs: string;
    questions: string;
    /** Call-to-action button: full label on wide screens, short one on phones. */
    cta: string;
    ctaShort: string;
    langLabel: string;
  };
  hero: {
    eyebrow: string;
    titleStart: string;
    rolling: string[];
    titleEnd: string;
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
    /** Short reassurances under the buttons. */
    proof: string[];
  };
  chat: { question: string; agent: string; thinking: string; reply: string; caption: string };
  problem: { eyebrow: string; title: string; intro: string; points: TextCard[] };
  /** The three-step approach and the improvement cycle drawn beside it. */
  approach: {
    eyebrow: string;
    title: string;
    intro: string;
    steps: TextCard[];
    loop: { title: string; body: string };
    diagram: { label: string; nodes: string[]; center: string; centerSub: string; feedback: string };
  };
  calc: {
    eyebrow: string;
    title: string;
    intro: string;
    tasks: string;
    minutes: string;
    rate: string;
    /** Short units shown inside the input fields. */
    unitTimes: string;
    unitMin: string;
    unitRate: string;
    shareQuestion: string;
    /** Three options: cautious, average, optimistic (30 / 50 / 70%). */
    shareOptions: string[];
    /** Read-only line with the fixed prices used in the calculation. */
    fixedLine: string;
    cta: string;
    ctaNote: string;
    /** Prefilled task text for the contact form; {tasks}, {minutes} and {year} are replaced. */
    prefill: string;
    stickyYear: string;
    stickyPayback: string;
    footnote: string;
    hoursUnit: string;
    hoursLabel: string;
    yearLabel: string;
    monthsUnit: string;
    paybackLabel: string;
    notice: string;
    formula: string;
    formulaTitle: string;
    srSummary: string;
    tasksHint: string;
  };
  safety: { eyebrow: string; title: string; intro: string; items: TextCard[] };
  pricing: {
    eyebrow: string;
    title: string;
    intro: string;
    recommended: string;
    priceTbd: string;
    plans: Plan[];
    addon: string;
    vatNote: string;
    founding: { label: string; title: string; body: string; cta: string };
  };
  faq: { eyebrow: string; title: string; items: { q: string; a: string }[]; more: string; moreCta: string };
  contact: {
    eyebrow: string;
    title: string;
    intro: string;
    emailPrompt: string;
    close: string;
    nextTitle: string;
    next: string[];
  };
  form: {
    name: string;
    company: string;
    email: string;
    program: string;
    programPlaceholder: string;
    phone: string;
    task: string;
    taskPlaceholder: string;
    /** Shown above the form when a specific plan was clicked. */
    interest: string;
    closeLabel: string;
    requiredNote: string;
    submit: string;
    note: string;
    sending: string;
    sent: string;
    /** Shown when the form falls back to the visitor's mail app. */
    sentMail: string;
    /** Shown when sending fails; the email address is appended. */
    error: string;
    mailSubject: string;
  };
  footer: {
    service: string;
    more: string;
    contact: string;
    contactLink: string;
  };
}
