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
    platform: P,
    how: "How it works",
    saves: "What it saves",
    examples: "Examples",
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
    sub: `AI can now do more than talk: it can carry out work. With ${P} we connect your existing software, safely, to an AI assistant that takes over the repetitive computer work. Your team gets hours back every week, and you see what it saves before you commit.`,
    ctaPrimary: "Calculate what it saves",
    ctaSecondary: `What is ${P}?`,
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
  whyNow: {
    eyebrow: "Why now",
    titleStart: "The",
    titleHighlight: "AI revolution",
    titleEnd: "has started. This is your moment to step in.",
    intro:
      "Until recently AI could mostly write text and answer questions. Now an AI assistant can get to work itself: looking up, entering and checking data in the programs you already use. It is called agentic AI, and it is changing how office work gets done.",
    points: [
      {
        icon: "01",
        title: "AI now does the work itself",
        body: "ChatGPT tells you how to book an invoice. An AI assistant reads the invoice, finds the order and books it, while you keep an eye on it.",
      },
      {
        icon: "02",
        title: "No longer only for big companies",
        body: `Large companies have their own IT teams to build this. With ${P} a mid-sized organisation can do it too, without in-house developers and without new software.`,
      },
      {
        icon: "03",
        title: "Start now, stay ahead",
        body: "Every task you hand over gives hours back every month, and your team learns to work with AI now instead of catching up in a few years.",
      },
      {
        icon: "04",
        title: "Without a gamble",
        body: "You start with one task, at a fixed price, and we measure what it saves. If it isn't worth it, we tell you before you invest.",
      },
    ],
    closing: "No hype, just results: hours back that you can check yourself.",
  },
  platform: {
    eyebrow: "The platform",
    title: `${P}: the bridge between your software and AI.`,
    intro: `${P} (Latin for "of the bridge") is our platform that connects your existing programs to an AI assistant, safely, even when they are old or don't talk to each other. You replace nothing: the assistant works in the software your team already knows.`,
    flow: [
      { title: "Your software", body: "Accounting, ERP, student records, Excel, older programs too" },
      { title: P, body: "Lets through only agreed actions, asks for approval and records everything" },
      { title: "AI assistant", body: "Understands your team's request and carries out the steps" },
    ],
    status: "connected",
    features: [
      {
        icon: "swap",
        title: "Works with old and new",
        body: "It works through an integration, directly in the database or, when nothing else works, through the screen, just like a member of staff. So older programs work too.",
      },
      {
        icon: "grow",
        title: "Grows with you",
        body: "Start with one task. Once it works, add the next one without starting over.",
      },
      {
        icon: "test",
        title: "Tested on a copy first",
        body: "We test every new task on a copy of your system first, never straight on your real records.",
      },
      {
        icon: "blocks",
        title: "Reusable building blocks",
        body: "We reuse every connection we build, so each next task is faster to deliver and more reliable.",
      },
      {
        icon: "layers",
        title: "Not dependent on one AI",
        body: `${P} works with AI models from several providers. If one gets more expensive or worse, we switch.`,
      },
      {
        icon: "open",
        title: "Open standard",
        body: `${P} is built on an open, widely used standard, so you are not tied to us either.`,
      },
    ],
    itNote: `For your IT person: ${P} is built on the Model Context Protocol (MCP), the open standard that lets AI models use software through clearly scoped tools. It has per-action permissions, human approval for irreversible changes and a full audit log, and runs in your own environment or in an EU region you choose.`,
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
  beforeAfter: {
    eyebrow: "Before / after",
    title: "The same task, without the hassle.",
    intro: "An everyday example: processing supplier invoices at a wholesaler.",
    beforeLabel: "Today, by hand",
    afterLabel: "With the assistant",
    before: [
      "Open each invoice and type the amounts into the accounting program (~4 min each)",
      "Look up the matching order in another program to check it (~2 min)",
      "Typing errors only surface at month-end",
    ],
    after: [
      "The assistant reads the invoices and enters them for you (seconds each)",
      "It checks every invoice against the order automatically",
      "Anything that doesn't match is set aside for a person to look at",
    ],
  },
  worksWith: {
    eyebrow: "Works with what you have",
    title: "Your programs stay. The hassle goes.",
    intro: "If a person can do it step by step on a computer, the assistant can usually learn it too.",
    // Kinds of software, not brands: we don't promise integrations we haven't proven yet.
    softwareKinds: [
      "Accounting software",
      "ERP & order systems",
      "Stock management",
      "HR & payroll",
      "Planning & rosters",
      "Student records",
      "Excel files",
      "Older programs",
      "Mailboxes",
      "Online portals",
    ],
    tasks: [
      "Entering invoices",
      "Checking orders",
      "Transferring orders",
      "Weekly reports",
      "Updating staff records",
      "Recording absences",
      "Sorting incoming mail",
      "Filling in forms",
      "Preparing quotes",
      "Processing enrolments",
    ],
  },
  how: {
    eyebrow: "How it works",
    title: "Four steps. You decide after each one.",
    intro: "You see what it delivers before you are tied to anything.",
    steps: [
      {
        icon: "1",
        title: "A free conversation",
        body: "A half-hour call. You tell us which task takes the most time; we tell you honestly whether we can help.",
      },
      {
        icon: "2",
        title: "Quickscan (1–2 weeks)",
        body: "We measure how long the work takes today and calculate what automating it saves, before you spend anything on building.",
      },
      {
        icon: "3",
        title: "Trial on one task (8–10 weeks)",
        body: "We build and test the assistant on a copy of your system. Then it works alongside your team for 3–4 weeks, and we measure the result.",
      },
      {
        icon: "4",
        title: "It keeps running",
        body: "If it works, we keep an eye on it, fix problems and help you with the next task.",
      },
    ],
  },
  calc: {
    eyebrow: "What does it save you?",
    title: "Fill in your own numbers.",
    intro:
      "Pick one task your team does often and roughly fill in how long it takes. The calculation is shown below the result, and if it isn't worth it, we say so.",
    tasks: "How often per month?",
    minutes: "Minutes each time?",
    rate: "Cost of one hour of work (€)",
    build: "One-off cost: quickscan + trial (€)",
    run: "Monthly support (€)",
    shareQuestion: "How much of the work can the assistant take over?",
    low: "Cautious estimate",
    high: "Optimistic estimate",
    footnote: `An hour of work includes employer costs (roughly salary × 1.3). The one-off cost is the quickscan (${eur(prices.quickscan)}) plus the trial (${eur(prices.trial)}); the monthly cost is support, including AI usage up to an agreed cap. All excluding VAT. Payback counts from the moment the assistant goes live.`,
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
  cases: {
    eyebrow: "Examples",
    title: "What it looks like in practice.",
    intro:
      "Made-up but realistic examples. Real customer stories will replace them once our first customers are live.",
    items: [
      {
        placeholder: true,
        client: "Wholesaler, ~150 staff",
        task: "Entering supplier invoices",
        before: "Two people spent most of their week typing in and checking over 1,000 invoices a month.",
        result: "From about 6 minutes to a check of seconds per invoice",
      },
      {
        placeholder: true,
        client: "Distributor, ~120 staff",
        task: "Transferring orders from email",
        before: "Orders arrived as PDFs and were typed into the order system by hand.",
        result: "Orders are ready in the system; a member of staff only approves them",
      },
      {
        placeholder: true,
        client: "Secondary school, ~1,200 pupils",
        task: "Processing new enrolments",
        before: "The office retyped every online enrolment form into the student records system.",
        result: "Forms go in automatically; staff only check them",
      },
    ],
  },
  results: {
    eyebrow: "What it delivers",
    title: "Hours back. Money you can check.",
    intro: "We show how every number is calculated, so you can judge it yourself.",
    sourcePrefix: "How we get there:",
    items: [
      {
        placeholder: true,
        source: "1,100 invoices a month × 6 minutes, half of it taken over",
        value: 55,
        suffix: " hours",
        label: "back for your team every month, for one task",
      },
      {
        placeholder: true,
        source: `55 hours × €45 an hour, minus ${eur(prices.support)} support, × 12 months`,
        value: 18900,
        prefix: "€",
        suffix: "",
        label: "net saving per year",
      },
      {
        placeholder: true,
        source: `${eur(prices.quickscan + prices.trial)} one-off ÷ €1,575 net saving a month`,
        value: 12,
        prefix: "~",
        suffix: " months",
        label: "to earn back the investment",
      },
      {
        placeholder: true,
        source: "4–6 weeks to build and test, then 3–4 weeks alongside your team",
        value: 10,
        prefix: "≤",
        suffix: " weeks",
        label: "from the start of the trial to a measured result",
      },
    ],
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
        icon: "eye",
        title: "Look first, change later",
        body: "It starts by only reading data. Changes are switched on only when you agree, and a person always approves irreversible steps.",
      },
      {
        icon: "log",
        title: "Everything is recorded",
        body: "Every action is logged: what it did, when and why. You can always check it.",
      },
      {
        icon: "power",
        title: "You hold the off switch",
        body: "You can stop the assistant yourself at any moment, without having to call us.",
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
    recommended: "Measured result",
    priceTbd: "Price to follow",
    plans: [
      {
        placeholder: false,
        tier: "Quickscan",
        amount: eur(prices.quickscan),
        blurb: "We find out which tasks are worth automating, and what that saves you.",
        features: [
          "1–2 weeks, fixed price",
          "Measured on how your team works today",
          "A clear savings calculation per task",
          "An honest “no” if it doesn't pay",
        ],
        cta: "Start with a scan",
      },
      {
        placeholder: false,
        tier: "Trial on one task",
        amount: eur(prices.trial),
        blurb: "One task automated in your own software, with a measured result.",
        features: [
          "8–10 weeks, fixed price",
          "Built and tested on a copy of your system",
          "3–4 weeks running alongside your team",
          "A before-and-after report",
          "50% at the start, 50% on completion",
        ],
        cta: "Plan a trial",
        featured: true,
      },
      {
        placeholder: false,
        tier: "Ongoing support",
        amount: eur(prices.support),
        unit: "/month",
        blurb: "We keep it running and help you with the next task.",
        features: [
          "Monitoring, maintenance and fixes",
          "AI usage included up to an agreed cap",
          "Up to two built tasks running",
          "A savings overview every quarter",
          "Minimum 12 months, 3 months' notice",
        ],
        cta: "Get in touch",
      },
    ],
    addon: `Building an extra task costs ${eur(prices.addon)} per task.`,
    vatNote: "All prices exclude VAT.",
    founding: {
      label: "Founding customers",
      title: `The first three trials at ${prices.foundingDiscount * 100}% off`,
      body: `Be one of our first three customers: your trial costs ${eur(foundingTrial)} instead of ${eur(prices.trial)}. In return we write a case study together, we may mention your name, and you introduce us to two companies you know.`,
      cta: "Ask about a founding place",
    },
  },
  faq: {
    eyebrow: "Questions",
    title: "What people usually ask us.",
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
        q: "Do we need to know anything about AI?",
        a: "No. You tell us which work takes too much time; we handle the technology. Your staff keep working in the programs they know, and we give a short training.",
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
        q: "Does the assistant make decisions about people?",
        a: "No. We don't build assistants that decide about individuals, such as job applications, appraisals or admissions. It does administrative work within fixed agreements.",
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
    programPlaceholder: "e.g. our accounting software",
    task: "Which task takes too much time?",
    submit: "Request a free conversation",
    note: "We reply within one working day. The conversation is free.",
    sent: "Your email app should have opened with the details filled in. Just press send.",
    mailSubject: "Conversation request from",
  },
  footer: {
    service: "The service",
    more: "More",
    contact: "Contact",
    contactLink: "Contact",
    registration: "KvK / VAT: to be added",
  },
};
