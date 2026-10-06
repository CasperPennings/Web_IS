# Plan: single-page website for Inteligent Software

**Goal:** A one-page site that explains what Inteligent Software builds, which is MCP
(Model Context Protocol) bridge servers that let AI agents operate legacy software. The
page should make the value concrete and checkable: hours saved, errors avoided, and
payback time, each with a stated basis. No hype, no invented numbers.

> **Check before building:** the company name is written "inteligent software" (one "l").
> Confirm whether that is the intended brand spelling or a typo for "Intelligent". The
> name appears in the wordmark footer, the page title and the meta tags.

---

## 1. Component library: performative-ui, used seriously

`performative-ui` (v0.7.0, MIT, React 18/19) provides polished, modern landing-page
components. Its authors present it with a tongue-in-cheek tone, and some **default
texts and props** reflect that ("AI is writing…", "Maybe later", "Trusted by", the
"ludicrous" tier). We use the components for their quality, and we **always pass our own
text and props**, so none of the defaults reach the page.

**Rules for using it seriously**
- Always override default labels. Never ship a default string such as `"AI is writing…"`, `"Maybe later"`, `"Cheaper"`/`"Faster"` or `"Trusted by"`.
- Motion should support the content, never compete with it. Use at most one animated background per viewport, slow speeds, and respect `prefers-reduced-motion` (built in).
- Theme everything through the `--pui-*` tokens (section 2), so every component shares one calm brand palette instead of the default neon.
- Every number shown in a component (`StatCounter`, `PricingCard`) comes from a real source.

**Component map**

| Section | Components | Serious configuration |
|---|---|---|
| Nav / announcement | `StickyBanner`, `Button` | Banner only for real news (for example "New case study: order intake at X"), with `hideSparkle`. |
| Hero | `EyebrowPill`, `GradientText`, `WordRoll`, `Button`, `NodeGraphBackground` | `WordRoll` cycles through the systems you bridge ("ERP", "AS/400", "desktop apps", "Excel macros"). The node graph is the "connecting systems" metaphor: low `density` (~40), slow `speed`, brand `colors`, subtle `baseOpacity`. |
| Live demo | `ChatBubble`, `TokenStream`, `MockIDE` | A user asks the agent, the agent calls a real MCP tool (shown in `MockIDE`), and the result comes back. `thinking="calling create_order…"` and `thinkingLabel={false}`, with no fake "reasoning". |
| Systems we connect | `LogoRow` *or* `SlippyWords` | `heading="Works with"` and text nodes for system *types* or platforms (SAP, AS/400 / IBM i, Exact, AFAS, Oracle, MS Access, mainframe terminals). Label it as compatibility, not as clients. `SlippyWords` rows can also list automated tasks ("Order intake", "Invoice matching", …). |
| Before / After | `BeforeAfter` | The core of the pitch: manual steps with times next to the automated flow. |
| How it works | `GlassCard` ×4 | `glowOnHover`, numbered `.Icon`s. |
| Savings calculator | `Temperature`, `StatCounter`, `GlassCard` | `Temperature` becomes the **automation-share selector**: custom `options` Conservative 30% / Realistic 50% / Strong 70% with flat brand colours (no `ludicrous`), `labelLow="Conservative"`, `labelHigh="Optimistic"`. Results are shown with `StatCounter`. |
| Measured results | `StatCounter`, `StatusDot` | Real figures with a source line under each. `StatusDot` marks "in production since …". |
| Use cases | `GlassCard` grid, `StatusDot` | System, task, measured result and time in production. |
| Safety and control | `GlassCard`, `MockIDE` | Optional: a short snippet of the audit log or a scoped-permission config. |
| Engagement | `PricingCard` ×3 (`featured` on Pilot) | Real prices or "from €X". |
| Contact | `Popover` + `Button`, or an inline form | The `Popover` opens **only on click** (no `timer`), with `closeOnEscape`, `closeOnBackdrop` and `closeLabel="Close"`. |
| Footer | `BigBack` | `company="Inteligent Software"`, `gradient` optional. |

**Not used**, because they don't fit this message: `WaitlistForm` (it's a service, not a
product launch), `ChatFAB` (no live chat behind it), `PromptHero`/`Prompt` (they suggest
a self-serve product), and `WibblingSpinner`, `Sparkle`/`FloatingSparkles`, `QuestText`,
`Goldeneye`, `AsciiHero`, `Aurora` and `Rotator` (decorative; `WordRoll` and the node
graph already provide the motion). Any of these can be added later if a section calls for it.

---

## 2. Tech stack and setup

- **Vite + React 19 + TypeScript**, built as a static single page (no router).
- `npm i performative-ui`, then `import "performative-ui/styles.css"` once in `main.tsx`.
- **Theming:** override the `--pui-*` tokens in `src/theme.css`:
  - `--pui-bg`, `--pui-bg-soft`, `--pui-bg-elev`, `--pui-fg`, `--pui-fg-dim`, `--pui-fg-mute`, `--pui-border`
  - Set `--pui-grad-from`, `--pui-grad-mid` and `--pui-grad-to` to a narrow, sober brand range (for example deep blue to teal) instead of the default neon.
  - Lower `--pui-glow` and `--pui-glow-strong` close to transparent.
  - `--pui-font-sans`: a neutral face such as Inter.
  - The library supports `data-theme="light"` and `prefers-reduced-motion`. Respect both, with light as the default for a B2B audience.
- **Content in data files** (`src/content/*.ts`) so that numbers and case studies can be
  updated without touching layout, and so every figure sits next to its source.
- Deploy as static files (Vercel, Netlify or GitHub Pages).

```
src/
  main.tsx, App.tsx, theme.css
  content/   hero.ts, process.ts, results.ts, cases.ts, pricing.ts, faq.ts
  sections/  Nav, Hero, LiveDemo, WorksWith, Problem, BeforeAfterSection, HowItWorks, RoiCalculator,
             Results, UseCases, Safety, Engagement, Faq, Contact, Footer
```

---

## 3. Page structure (top to bottom)

### 3.1 Nav (sticky, minimal)
Wordmark · How it works · Results · Pricing · FAQ · **[Book a 30-min process review]** (`Button`)
Optional `StickyBanner` above it, only when there is real news (a new case study or event).

### 3.2 Hero
- `EyebrowPill`: "MCP bridge servers for legacy software"
- **H1:** "Let AI agents do the work in your `WordRoll`[ERP · AS/400 · desktop apps · Excel macros]."
  Use `WordRoll` with `gradient` for the system names. Optionally, a `GradientText` phrase in the subhead.
- **Subhead:** "We build MCP servers that give AI agents safe, audited access to your ERP,
  AS/400, desktop and on-prem applications, with no rip-and-replace."
- CTAs: `Button` "Calculate your savings" (scrolls to the calculator) and a secondary
  "See how it works".
- Background: `NodeGraphBackground` (sparse, slow, brand colours) as a visual for "connecting systems".
- Visual (right column): `MockIDE` with a short, realistic MCP tool definition
  (for example `create_purchase_order` on a legacy ERP), with `thinkingLabel={false}`.

### 3.2b See it work (`ChatBubble` + `TokenStream`)
A short, scripted conversation that shows a real flow:
1. `ChatBubble role="user"`: "Enter the order from Bakker BV's email into the ERP."
2. `ChatBubble` (AI, `agent="Order agent"`, `thinking="calling create_order…"`): the answer streams in with
   `TokenStream`: "Order 48213 created: 12 lines, stock checked, delivery date 14 Oct. Logged in the audit trail."
3. A caption under it: "Real tool calls, scoped permissions, every step logged."

### 3.2c Works with (`LogoRow` or `SlippyWords`)
`heading="Works with"`, using text nodes for platforms and system types. If you use
`SlippyWords`, put a row of systems and a row of automated tasks in opposite directions,
with `fade` on. Present it as compatibility, not as a client list.

### 3.3 The problem (plain text, 3 short points)
Legacy systems hold the business-critical data but have no modern API. So people re-key
data, copy between screens and run the same checks every day. That costs time, causes
errors and keeps skilled staff on clerical work. *No component needed; whitespace is enough.*

### 3.4 Before / After (`BeforeAfter`, core section)
One concrete workflow, written as steps with times:

| Before (manual) | After (agent + MCP bridge) |
|---|---|
| Open the order email and re-type it into the ERP (~6 min) | Agent reads the order and calls `create_order` (~20 s) |
| Check stock in a second screen (~2 min) | `check_stock` runs as part of the same flow |
| Fix typos later during invoicing | Validation happens before the write, and every action is logged |

`brand="with Inteligent Software"`. Add a footnote: *"Example timings from [client/pilot], measured over N weeks."*

### 3.5 How it works (3–4 `GlassCard`s)
1. **Process review (1–2 weeks):** we map the workflows and measure the current time per task.
2. **Bridge build:** an MCP server exposes specific, scoped tools for your system (API, database, terminal/screen or UI automation, whichever is safest).
3. **Pilot on one workflow:** run it next to the manual process and measure.
4. **Production and handover:** monitoring, audit log, documentation and your team trained.

### 3.6 Savings calculator (custom logic built from library components)
The section that best supports "real returns, not promises", because **visitors enter
their own numbers**:
- Inputs: tasks per month, minutes per task, loaded hourly cost, a one-off build cost and a monthly run cost
  (plain number inputs inside a `GlassCard`).
- Automation share is set with `Temperature`: custom `options`
  `[{key:"30",label:"Conservative · 30%"},{key:"50",label:"Realistic · 50%"},{key:"70",label:"Strong · 70%"}]`,
  flat brand colours, `labelLow="Conservative"`, `labelHigh="Optimistic"`, default `"50"`.
- Outputs: hours saved per month, € saved per year, **payback period in months**.
- Show the formula openly below the result:
  `savings = tasks × minutes/60 × hourly cost × automation share − run cost`.
- Use `StatCounter` to animate the output numbers (it respects reduced motion).
- Show a note when the payback period is longer than about 12 months: "This workflow may not
  be worth automating; we'll tell you that in the review." Saying no when the numbers don't
  work is part of the credibility.

### 3.7 Measured results (`StatCounter` + footnotes)
Three to four figures from **real** projects, each with a source line, for example:
- "**1,240 h/yr** returned to the order desk · Manufacturing client, 2025, 6-month measurement"
- "**−82%** data-entry corrections · invoice reconciliation pilot, 3 months"
- "**4.5 months** median payback across N production deployments"

> ⚠️ **Placeholder rule:** until real figures exist, this section shows nothing, or only
> pilot-stage figures labelled as such. Never ship with invented numbers.

### 3.8 Use cases / case studies (`GlassCard` grid, `StatusDot static` marks "in production")
For example: order intake into the ERP, invoice matching, HR onboarding in an HR system
that has no API, and reporting pulled from a green-screen system. Each card gives the
system, the task, the measured result and how long it has been in production.

### 3.9 Safety and control (`GlassCard`s)
Addresses the main objection: "will an AI break our core system?"
- Scoped tools only: the agent can do only what the MCP server exposes.
- Read-only by default; writes need explicit enabling and, optionally, human approval.
- Full audit log of every tool call.
- Runs on-prem or in your VPC, and your data stays with you.
- Works with any MCP-capable client or model, so there is no lock-in.

### 3.10 Engagement models (`PricingCard` × 3)
- **Process review:** fixed price, 1–2 weeks, delivers a business case per workflow.
- **Pilot** (`featured`): one workflow, a fixed scope and a measured result.
- **Production and support:** monthly fee with monitoring, updates and SLA.

Show real prices or "from €X". Leave out fake strike-through prices and "most popular" badges.

### 3.11 FAQ (simple accordion; native `<details>`/`<summary>` is fine)
What is MCP? · Which systems do you support? · What if our system has no API? ·
What does it cost to run? · What if automation doesn't pay off? · Who owns the code?

### 3.12 Contact
A form (name, company, email, the system you use, the process you want to automate)
with a `Button` submit. It sits inline at the bottom of the page and also opens in a `Popover` from the nav CTA
(click only: no `timer`, `closeOnEscape`, `closeOnBackdrop`, `closeLabel="Close"`). Copy: "We reply within one business day. The first review call is free."

### 3.13 Footer (`BigBack`)
`company="Inteligent Software"`, link columns (Product, Company, Legal), and a KvK/VAT
number and address for B2B trust.

---

## 4. Copy principles (to keep it honest)

1. Every number has a source line, or it doesn't go on the page.
2. Use ranges and "typically" instead of absolute guarantees, and explain what drives the variance.
3. Say what you *don't* automate (judgement calls, exceptions) and that people stay in the loop.
4. Lead with the outcome in hours and euros, and keep jargon such as "AI-native" or "agentic" out.
5. One clear call to action, repeated: "Book a process review."

---

## 5. Build steps

1. Scaffold Vite + React + TS, install `performative-ui`, add `theme.css` token overrides.
2. Build the static sections with content in `src/content/*` (start with Hero, BeforeAfter, HowItWorks, Footer).
3. Build the savings calculator (`RoiCalculator`) with unit tests for the formula (Vitest).
4. Add Results, Cases, Safety, Engagement, FAQ and Contact.
5. Contact form backend: Formspree, a Netlify Forms or Vercel function, or a mailto fallback.
6. Polish: responsive down to 360 px, light and dark themes, reduced motion, keyboard
   navigation, alt text, a Lighthouse score of 90 or more on every metric.
7. Check that no library default string (for example "AI is writing…", "Maybe later" or "Trusted by") is rendered.
8. SEO: title, meta description, Open Graph image, `Organization` JSON-LD.
9. Deploy and add privacy-friendly analytics (Plausible) to track CTA clicks and calculator use.

## 6. Inputs needed from you

- Confirm the company name spelling and send a logo and brand colours.
- Real project metrics with permission to publish (anonymised is fine).
- Client names or logos you are allowed to show (otherwise none are shown).
- Pricing, or "from" figures, for the engagement models.
- Contact details, KvK/VAT number, privacy policy.
- Which language(s): English, Dutch, or both.
