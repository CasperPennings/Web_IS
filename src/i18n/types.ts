export type Lang = "nl" | "en";

export interface TextCard {
  icon?: string;
  title: string;
  body: string;
}

export interface ResultStat {
  /** Sample figure until real measurements exist. */
  placeholder: boolean;
  source: string;
  value: number;
  prefix?: string;
  suffix: string;
  label: string;
}

export interface CaseStudy {
  /** Fictional scenario until real case studies exist. */
  placeholder: boolean;
  client: string;
  task: string;
  before: string;
  result: string;
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
    platform: string;
    how: string;
    saves: string;
    examples: string;
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
  whyNow: {
    eyebrow: string;
    titleStart: string;
    titleHighlight: string;
    titleEnd: string;
    intro: string;
    points: TextCard[];
    closing: string;
  };
  platform: {
    eyebrow: string;
    title: string;
    intro: string;
    /** The three blocks of the diagram: your software, the platform, the AI assistant. */
    flow: { title: string; body: string }[];
    status: string;
    features: TextCard[];
    itNote: string;
  };
  problem: { eyebrow: string; title: string; intro: string; points: TextCard[] };
  beforeAfter: {
    eyebrow: string;
    title: string;
    intro: string;
    beforeLabel: string;
    afterLabel: string;
    before: string[];
    after: string[];
  };
  worksWith: { eyebrow: string; title: string; intro: string; softwareKinds: string[]; tasks: string[] };
  how: { eyebrow: string; title: string; intro: string; steps: TextCard[] };
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
  cases: { eyebrow: string; title: string; intro: string; items: CaseStudy[] };
  results: { eyebrow: string; title: string; intro: string; sourcePrefix: string; items: ResultStat[] };
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
    sent: string;
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
