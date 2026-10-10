import type { Copy } from "../i18n/types";
import { prices, site } from "./site";

const P = site.platform;
const eur = (n: number) =>
  new Intl.NumberFormat("en-GB", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);
const foundingTrial = prices.trial * (1 - prices.foundingDiscount);

export const en: Copy = {
  locale: "en-GB",
  meta: {
    title: `Intelligent Software – Step into the AI revolution with ${P}`,
    description: `An AI assistant that does the repetitive computer work in the software you already use. ${P} connects your existing programs to AI, safely. Fixed prices, measure first, build second.`,
  },
  common: {
    example: "Example",
    examplesCaption:
      "These are example figures, based on a typical invoice-processing task. Real customer results will replace them.",
    logoLabel: "Intelligent Software, home",
  },
  nav: {
    label: "Main",
    approach: "How we work",
    saves: "What it saves",
    costs: "Costs",
    questions: "Questions",
    cta: "Free conversation",
    ctaShort: "Contact",
    langLabel: "Language",
  },
  hero: {
    eyebrow: "Your chance to step into the AI revolution",
    titleStart: "Let AI do the",
    rolling: ["data entry", "invoice checks", "absence records", "weekly reports", "copy-pasting"],
    titleEnd: "",
    sub: `With ${P} we connect your existing software, safely, to an AI assistant that takes over repetitive computer work. You know up front what the automation saves, and you stay in control.`,
    ctaPrimary: "Book a free intro call",
    ctaSecondary: "Calculate what it saves",
    proof: ["Works with your current software", "Fixed prices", "Measure first, build second"],
  },
  chat: {
    question: "Can you process this week's supplier invoices?",
    agent: "Your assistant",
    thinking: "working in the accounting program…",
    reply:
      "Done. 37 invoices are entered and checked against the orders. 2 didn't match, so I've set them aside for you to look at.",
    caption: "Example conversation",
  },
  problem: {
    eyebrow: "Sound familiar?",
    title: "Your people spend hours being the link between programs.",
    intro:
      "Most organisations run on software that works fine, but was never made to work together. So people fill the gaps by hand.",
    points: [
      {
        title: "Typing the same thing twice",
        body: "Information arrives by email or on paper, and someone types it over into your administration software. Every day, by hand.",
      },
      {
        title: "Programs that don't talk to each other",
        body: "The finance system, the HR system and the order program each live on their own island. Your staff are the bridge between them.",
      },
      {
        title: "Replacing everything is not an option",
        body: "New software takes years, costs a fortune and means retraining everyone. You want the work to get lighter now, with the programs you already have.",
      },
    ],
  },
  approach: {
    eyebrow: "How we work",
    title: "Discover, connect, automate. And better every round.",
    intro:
      "We start with one task and build from there. After go-live the cycle starts again: what shows up in daily use makes the system better every round.",
    steps: [
      {
        icon: "analyze",
        title: "1. Discover where the time goes",
        body: "We measure the volume of work in your systems and an employee shows how a task is done. You get a calculation per task of what automating it saves, and an honest no if it doesn't pay.",
      },
      {
        icon: "swap",
        title: "2. Connect your software",
        body: `With ${P} we connect your existing software to an AI assistant, safely, including older programs. The assistant can only do what you approve in advance, and we test everything on a copy of your system first.`,
      },
      {
        icon: "grow",
        title: "3. Automate, with you in control",
        body: "The assistant takes over the work, first for a few weeks alongside your team. Every action is logged and a person always approves irreversible steps.",
      },
    ],
    loop: {
      title: "Then: learn and improve",
      body: "A mistake, a new supplier or a wish from your team goes back to step 1. We turn it into a test first and then improve the integration. That way the system gets more reliable every round and takes over more work.",
    },
    diagram: {
      label: "Cycle: discover, connect, automate, and back to the start through what daily use teaches",
      nodes: ["Discover", "Connect", "Automate"],
      center: P,
      centerSub: "better every round",
      feedback: "Learning from use",
    },
  },
  calc: {
    eyebrow: "What does it save you?",
    title: "Fill in your own numbers.",
    intro:
      "Pick one task your team does often and roughly fill in how long it takes. The calculation is shown below the result, and if it isn't worth it, we say so.",
    tasks: "How often does the task happen per month? (e.g. number of invoices)",
    minutes: "Minutes each time",
    rate: "Hourly cost of an employee, incl. employer costs",
    unitTimes: "× per month",
    unitMin: "min",
    unitRate: "€ / hour",
    shareQuestion: "How much of the work can the assistant take over?",
    shareOptions: ["Cautious · 30%", "Average · 50%", "Optimistic · 70%"],
    fixedLine: `Calculated with our fixed prices: one-off ${eur(prices.quickscan)} quickscan + ${eur(prices.trial)} trial, then ${eur(prices.support)} a month. Excl. VAT.`,
    cta: "Discuss this calculation in a free call",
    ctaNote: "We'll check it together with your real numbers.",
    prefill: "A task that happens about {tasks} times a month, {minutes} minutes each time. The calculator showed a saving of {year} a year.",
    stickyYear: "a year",
    stickyPayback: "months payback",
    footnote: "The hourly cost includes employer costs (roughly salary × 1.3). Payback counts from the moment the assistant goes live.",
    hoursUnit: "hours / month",
    hoursLabel: "back for your team, every month",
    yearLabel: "saved per year, after the monthly cost",
    monthsUnit: "months",
    paybackLabel: "to earn back the one-off cost",
    notice:
      "With these numbers payback takes more than a year, so automating this task is probably not worth it. We would tell you the same in the first conversation, before you spend anything.",
    formula:
      "monthly saving = times per month × minutes ÷ 60 × cost per hour × share taken over − monthly cost",
  },
  safety: {
    eyebrow: "Is it safe?",
    title: "You stay in control. Always.",
    intro:
      "The worry we hear most: “what if it does something it shouldn't?” This is how we prevent that.",
    items: [
      {
        icon: "filter",
        title: "It only does what you allow",
        body: "We agree in writing exactly which actions the assistant may take. Anything else, it simply can't do.",
      },
      {
        icon: "power",
        title: "An off switch and a log",
        body: "Every action is logged, and you can stop the assistant yourself at any moment, without having to call us.",
      },
      {
        icon: "lock",
        title: "Your data stays yours",
        body: "We sign a data processing agreement, work in your own environment or in the EU, and your data is never used to train AI.",
      },
      {
        icon: "guarantee",
        title: "No result, no risk",
        body: "If the trial misses the agreed error rate, we fix it at our own cost first. If it still falls short, you can stop and get the second instalment back.",
      },
    ],
  },
  pricing: {
    eyebrow: "What it costs",
    title: "Start small. Only continue if it pays.",
    intro: "Fixed prices per step. After each step you decide, based on real numbers, whether to continue.",
    recommended: "Start here",
    priceTbd: "Price to follow",
    plans: [
      {
        placeholder: false,
        tier: "Step 1 · Quickscan",
        amount: eur(prices.quickscan),
        blurb: "Step 1: we find out which tasks are worth automating, and what that saves you.",
        features: [
          "1–2 weeks, fixed price",
          "Measured in your systems, plus a task demo",
          "A clear savings calculation per task",
          "An honest “no” if it doesn't pay",
        ],
        cta: "Start with the quickscan",
        featured: true,
      },
      {
        placeholder: false,
        tier: "Step 2 · Trial on one task",
        amount: eur(prices.trial),
        blurb: "Steps 2 and 3 for one task: integrated, automated and measured.",
        features: [
          "8–10 weeks, fixed price",
          "Built and tested on a copy of your system",
          "3–4 weeks running alongside your team",
          "A before-and-after report",
          "50% at the start, 50% on completion",
        ],
        cta: "Ask about the trial",
      },
      {
        placeholder: false,
        tier: "Then · Support",
        amount: eur(prices.support),
        unit: "/month",
        blurb: "The improvement cycle: we keep it running and keep making it better.",
        features: [
          "Monitoring, maintenance and fixes",
          "AI usage included up to an agreed cap",
          "Up to two built tasks running",
          "Continuous improvement based on feedback",
          "A savings overview every quarter",
          "Minimum 12 months, 3 months' notice",
        ],
        cta: "Ask a question",
      },
    ],
    addon: `Building an extra task costs ${eur(prices.addon)} per task.`,
    vatNote: "All prices exclude VAT.",
    founding: {
      label: "For the first three customers",
      title: `Trial for ${eur(foundingTrial)} instead of ${eur(prices.trial)}`,
      body: `The first three customers get ${prices.foundingDiscount * 100}% off the trial. In return we write a case study together, we may mention your name, and you introduce us to two companies in your network.`,
      cta: "Ask about a founding place",
    },
  },
  faq: {
    eyebrow: "Questions",
    title: "What people usually ask us.",
    more: "Is your question not here?",
    moreCta: "Ask it in a free call",
    items: [
      {
        q: `What exactly is ${P}?`,
        a: `${P} is our platform that connects your existing software to an AI assistant. It decides what the assistant may do, asks a person for approval where needed and records everything. You hardly notice it: your team asks the assistant for something, and the work happens in the programs you already have.`,
      },
      {
        q: "What is agentic AI, and isn't it just hype?",
        a: "Agentic AI is AI that doesn't just answer, but carries out steps itself, such as entering an invoice or checking an order. There is a lot of hype around AI, which is why we start with one task and measure what it saves. You pay for hours you can check, not for promises.",
      },
      {
        q: "Do we have to replace our software?",
        a: "No, that's the whole point. The assistant works with the programs you already use, including older ones.",
      },
      {
        q: "Will jobs disappear?",
        a: "That's your choice, but in practice it's the dull, repetitive part of someone's day. The time freed up goes to work that really needs a person, or a vacancy doesn't need refilling. The quickscan calculates both.",
      },
      {
        q: "What about privacy?",
        a: "The assistant only sees what it needs for the task. We sign a data processing agreement up front, use AI services with EU processing and a ban on training with your data, and put every agreement in writing.",
      },
      {
        q: "What if it doesn't pay off?",
        a: "Then we say so in the quickscan, before you spend money on building. Not every task is worth automating. You do pay for the quickscan: that honest answer is exactly what you buy.",
      },
      {
        q: "Are we tied to you afterwards?",
        a: "No. What we set up for you (the agreements, permissions and tests) is yours, and you get a perpetual licence to use the delivered software and have another party manage it. Support runs for at least 12 months, then with 3 months' notice.",
      },
      {
        q: "What should I tell our IT person?",
        a: `That ${P} uses MCP servers: an open standard (Model Context Protocol) that lets AI assistants use existing software through clearly scoped actions, with permissions, approval and a full audit log. We are happy to work with your IT supplier and explain the details directly.`,
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Step in, with a free conversation.",
    intro:
      "Tell us which task eats the most time. We'll say honestly whether we can help and roughly what it would save. No obligations, no technical talk.",
    emailPrompt: "Prefer email?",
    close: "Close",
  },
  form: {
    name: "Name",
    company: "Organisation",
    email: "Work email",
    program: "Which program is it about?",
    programPlaceholder: "e.g. Exact, AFAS",
    phone: "Phone (optional, if you prefer a call)",
    task: "Which task takes too much time? (optional)",
    taskPlaceholder: "e.g. retyping supplier invoices into Exact, ±1,000 a month",
    interest: "You are interested in:",
    closeLabel: "Close",
    submit: "Request a free conversation",
    note: "We reply within one working day. The conversation is free.",
    sending: "Sending…",
    sent: "Thank you, your request has been sent. We will get back to you within one working day.",
    sentMail: "Your email app should have opened with the details filled in. Just press send.",
    error: "Sending didn't work. Please try again, or email us at",
    mailSubject: "Conversation request from",
  },
  footer: {
    service: "The service",
    more: "More",
    contact: "Contact",
    contactLink: "Contact",
  },
};
