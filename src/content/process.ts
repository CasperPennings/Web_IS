export const problemPoints = [
  {
    title: "No API, so people are the API",
    body: "Your ERP, AS/400 or desktop tool holds the business-critical data, but the only way in is a screen. Staff copy between systems all day.",
  },
  {
    title: "The same checks, every day",
    body: "Re-keying orders, matching invoices, pulling the weekly report. Predictable work that eats hours and still produces typos.",
  },
  {
    title: "Replacing it is a multi-year project",
    body: "Rip-and-replace is expensive and risky. You need the work automated now, on the systems you already run.",
  },
];

export const beforeSteps = [
  "Open the order email and re-type it into the ERP (~6 min)",
  "Check stock on a second screen (~2 min)",
  "Typos are found later, during invoicing",
];

export const afterSteps = [
  "Agent reads the order and calls create_order (~20 s)",
  "check_stock runs as part of the same flow",
  "Validated before it is written, every action logged",
];

export const steps = [
  {
    icon: "1",
    title: "Process review",
    body: "1–2 weeks. We map the workflows and measure how long each task takes today, so the business case is based on your numbers.",
  },
  {
    icon: "2",
    title: "Bridge build",
    body: "We build an MCP server that exposes specific, scoped tools for your system: via API, database, terminal or UI automation, whichever is safest.",
  },
  {
    icon: "3",
    title: "Pilot one workflow",
    body: "The agent runs next to the manual process. We compare time, errors and exceptions, and only then scale up.",
  },
  {
    icon: "4",
    title: "Production & handover",
    body: "Monitoring, audit log, documentation and training for your team. You own the integration.",
  },
];

export const safety = [
  {
    icon: "⌖",
    title: "Scoped tools only",
    body: "The agent can do only what the MCP server exposes. No tool, no access.",
  },
  {
    icon: "◐",
    title: "Read-only by default",
    body: "Writes are enabled per tool, with optional human approval for sensitive actions.",
  },
  {
    icon: "☰",
    title: "Full audit log",
    body: "Every tool call is recorded: who, what, when, with which parameters.",
  },
  {
    icon: "⌂",
    title: "Your infrastructure",
    body: "Runs on-prem or in your own cloud. Your data stays where it is.",
  },
  {
    icon: "✓",
    title: "Tested before it ships",
    body: "Every tool is tried against a test copy of your system before it goes near production.",
  },
  {
    icon: "⇄",
    title: "No lock-in",
    body: "MCP is an open standard. Works with any MCP-capable client or model.",
  },
];

export const systems = [
  "SAP",
  "IBM i / AS/400",
  "Exact",
  "AFAS",
  "Oracle E-Business Suite",
  "Microsoft Access",
  "Mainframe terminals",
  "Windows desktop apps",
  "Excel macros",
  "Delphi applications",
];

export const tasks = [
  "Order intake",
  "Invoice matching",
  "Master-data updates",
  "Weekly reporting",
  "Employee onboarding",
  "Stock reconciliation",
  "Email triage",
  "Data migration checks",
  "Quote preparation",
  "Compliance exports",
];

export const rollingSystems = ["ERP", "AS/400", "desktop apps", "Excel macros", "mainframes"];
