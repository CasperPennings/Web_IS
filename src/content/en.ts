import type { Copy } from "../i18n/types";

export const en: Copy = {
  locale: "en-GB",
  meta: {
    title: "Intelligent Software – A digital assistant for your admin work",
    description:
      "A digital assistant that does the repetitive computer work in the software you already use. Your team gets hours back every week, with no new systems and no technical knowledge needed.",
  },
  common: {
    example: "Example",
    examplesCaption:
      "These are example figures, based on a typical invoice-processing task. Real customer results will replace them.",
    logoLabel: "Intelligent Software, home",
  },
  nav: {
    label: "Main",
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
    eyebrow: "For organisations drowning in admin",
    titleStart: "Let a digital assistant do the",
    rolling: ["data entry", "invoice checks", "absence records", "weekly reports", "copy-pasting"],
    titleEnd: "",
    sub: "Think of ChatGPT, but working inside the software you already use. It takes over the repetitive computer work, so your team gets hours back every week. No new systems, no technical knowledge needed.",
    ctaPrimary: "Calculate what it saves",
    ctaSecondary: "How does it work?",
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
        body: "The finance system, the HR system and the scheduling program each live on their own island. Your staff are the bridge between them.",
      },
      {
        title: "Replacing everything is not an option",
        body: "New software takes years, costs a fortune and means retraining everyone. You want the work to get lighter now, with the programs you already have.",
      },
    ],
  },
  beforeAfter: {
    eyebrow: "Before / after",
    title: "The same task, without the busywork.",
    intro: "An everyday example: processing supplier invoices.",
    beforeLabel: "Today, by hand",
    afterLabel: "With the assistant",
    before: [
      "Open each supplier invoice and type the amounts into the accounting program (~5 min each)",
      "Look up the matching order in another program to check it (~3 min)",
      "Typing errors only come to light at month-end",
    ],
    after: [
      "The assistant reads the invoices and enters them for you (seconds each)",
      "It checks each one against the order automatically",
      "Anything that doesn't match is set aside for a person to look at",
    ],
  },
  worksWith: {
    eyebrow: "Works with what you have",
    title: "Your programs stay. The busywork goes.",
    intro:
      "If a person can do it on a computer, step by step, the assistant can usually learn to do it too.",
    // Kinds of software, not brands: we don't claim compatibility we haven't proven.
    softwareKinds: [
      "Accounting software",
      "Student administration",
      "HR & payroll",
      "Scheduling & rosters",
      "Order & stock systems",
      "Excel spreadsheets",
      "Older desktop programs",
      "Email inboxes",
      "Customer records",
      "Web-based portals",
    ],
    tasks: [
      "Entering invoices",
      "Registering absences",
      "Processing enrolments",
      "Making the weekly report",
      "Updating staff records",
      "Checking orders",
      "Sorting incoming email",
      "Filling in forms",
      "Preparing quotes",
      "Year-end exports",
    ],
  },
  how: {
    eyebrow: "How it works",
    title: "Four simple steps. You decide after each one.",
    intro: "You see what it will save before you commit to anything.",
    steps: [
      {
        icon: "1",
        title: "A free conversation",
        body: "You tell us which tasks take up the most time. We listen, and say honestly whether we can help.",
      },
      {
        icon: "2",
        title: "We measure and calculate",
        body: "We look at how long the work takes today. You get a clear calculation of what it would save, before you spend anything on building.",
      },
      {
        icon: "3",
        title: "We connect and test",
        body: "We securely connect the assistant to your existing software. It works alongside your team for a few weeks, so you can see the results for yourself.",
      },
      {
        icon: "4",
        title: "It keeps running",
        body: "Once it works, it keeps working. We keep an eye on it, fix anything that comes up and help you add the next task.",
      },
    ],
  },
  calc: {
    eyebrow: "What would it save you?",
    title: "Fill in your own numbers.",
    intro:
      "Pick one task your team does often. Fill in roughly how much time it takes. The calculation is shown below the result, and if it isn't worth it, we'll say so.",
    tasks: "How often per month?",
    minutes: "Minutes each time?",
    rate: "Cost of an hour of work (€)",
    build: "One-time set-up cost (€)",
    run: "Monthly cost to keep it running (€)",
    shareQuestion: "How much of the work can the assistant take over?",
    low: "Careful estimate",
    high: "Optimistic estimate",
    footnote:
      "An hour of work includes employer costs (roughly salary × 1.3). The set-up and monthly costs are example amounts until you have a quote from us.",
    hoursUnit: "hours / month",
    hoursLabel: "back for your team, every month",
    yearLabel: "saved per year, after the monthly costs",
    monthsUnit: "months",
    paybackLabel: "until the set-up cost has earned itself back",
    notice:
      "With these numbers, this task is probably not worth automating. We'd tell you that in the first conversation, before you spend anything.",
    formula:
      "saving per month = times per month × minutes ÷ 60 × cost per hour × share taken over − monthly cost",
  },
  cases: {
    eyebrow: "Examples",
    title: "What this looks like in practice.",
    intro:
      "Made-up but realistic examples from schools, care and business. Real customer stories will replace them.",
    items: [
      {
        placeholder: true,
        client: "Secondary school, ~1,200 pupils",
        task: "Processing new enrolments",
        before: "The office typed every online enrolment form over into the student administration.",
        result: "Forms go in automatically; staff only check them",
      },
      {
        placeholder: true,
        client: "Wholesaler, ~80 employees",
        task: "Entering supplier invoices",
        before: "Two people spent most of their week typing invoices into the accounting program.",
        result: "About 5 minutes → seconds per invoice",
      },
      {
        placeholder: true,
        client: "Care organisation, ~250 employees",
        task: "Weekly staffing report",
        before: "Every Monday, a manager copied figures from three programs into one spreadsheet.",
        result: "The report is ready before the week starts",
      },
    ],
  },
  results: {
    eyebrow: "What it delivers",
    title: "Hours back. Fewer mistakes. Money you can count.",
    intro: "We show how every number is worked out, so you can judge it for yourself.",
    sourcePrefix: "How we got this:",
    items: [
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
    ],
  },
  safety: {
    eyebrow: "Is it safe?",
    title: "You stay in control. Always.",
    intro:
      "The most common worry we hear is “what if it does something it shouldn’t?” This is how we prevent that.",
    items: [
      {
        icon: "⌖",
        title: "It can only do what you allow",
        body: "We agree beforehand exactly which tasks the assistant may do. Everything else is simply impossible for it.",
      },
      {
        icon: "◐",
        title: "Looking first, changing later",
        body: "It starts by only reading information. It can only change things once you've said it may, and if you like, a person approves every change.",
      },
      {
        icon: "☰",
        title: "Everything is written down",
        body: "Every action is recorded: what it did, when and why. You can always check it.",
      },
      {
        icon: "⌂",
        title: "Your data stays with you",
        body: "The assistant works in your own systems. We don't collect your data elsewhere.",
      },
      {
        icon: "✓",
        title: "Tested before it's used",
        body: "Every task is first tried out on a test copy, not on your real administration.",
      },
      {
        icon: "⇄",
        title: "You're not tied to us",
        body: "It's built on an open, widely used standard. You own it, and another supplier could take it over.",
      },
    ],
  },
  pricing: {
    eyebrow: "What it costs",
    title: "Start small. Only continue if it pays off.",
    intro:
      "Fixed prices per step. After each step you decide, based on real numbers, whether to go on.",
    recommended: "Recommended start",
    priceTbd: "Price TBD",
    // Prices are placeholders: set real amounts before launch.
    plans: [
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
    ],
  },
  faq: {
    eyebrow: "Questions",
    title: "What people usually ask us.",
    items: [
      {
        q: "Do we need to know anything about AI?",
        a: "No. You tell us which work takes too much time; we take care of the technology. Your staff keep working in the programs they know.",
      },
      {
        q: "Do we have to replace our software?",
        a: "No, that's the whole point. The assistant works with the programs you already use, even older ones.",
      },
      {
        q: "Will people lose their jobs?",
        a: "That's your choice, but in practice it's usually about taking the boring, repetitive part out of someone's day, so they have time for the work that needs a person.",
      },
      {
        q: "What about privacy?",
        a: "The assistant works inside your own systems and only sees what it needs for the task. We go through privacy with you before we start, and put the agreements in writing.",
      },
      {
        q: "What if it doesn't pay off?",
        a: "Then we tell you in the quick scan, before you spend money on building anything. Not every task is worth automating.",
      },
      {
        q: "What does it cost to keep running?",
        a: "A fixed monthly support fee plus a small usage cost for the AI. For this kind of work that's usually a fraction of the hours it saves. Try your own numbers in the calculator above.",
      },
      {
        q: "What should I tell our IT person?",
        a: "That we build MCP servers: a secure, open standard (Model Context Protocol) for letting AI assistants use existing software through clearly defined actions, with permissions and a full log. We're happy to explain the details to them directly.",
      },
    ],
  },
  contact: {
    eyebrow: "Get in touch",
    title: "Start with a free conversation.",
    intro:
      "Tell us which task eats up the most time. We'll tell you honestly whether we can help, and what it would roughly save. No obligations, no technical talk.",
    emailPrompt: "Prefer email?",
    close: "Close",
  },
  form: {
    name: "Name",
    company: "Organisation",
    email: "Work email",
    program: "Which program is it about?",
    programPlaceholder: "e.g. our accounting program",
    task: "Which task takes up too much time?",
    submit: "Request a free conversation",
    note: "We reply within one business day. The first conversation is free.",
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
