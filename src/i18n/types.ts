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
  common: { example: string; examplesCaption: string; logoLabel: string };
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
    build: string;
    run: string;
    shareQuestion: string;
    low: string;
    high: string;
    footnote: string;
    hoursUnit: string;
    hoursLabel: string;
    yearLabel: string;
    monthsUnit: string;
    paybackLabel: string;
    notice: string;
    formula: string;
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
  faq: { eyebrow: string; title: string; items: { q: string; a: string }[] };
  contact: { eyebrow: string; title: string; intro: string; emailPrompt: string; close: string };
  form: {
    name: string;
    company: string;
    email: string;
    program: string;
    programPlaceholder: string;
    task: string;
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
    /** Placeholder until the real KvK / VAT numbers are known. */
    registration: string;
  };
}
