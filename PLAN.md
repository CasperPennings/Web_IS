# Plan: single-page website for Inteligent Software

**Goal:** A one-page site that explains what Inteligent Software builds, which is MCP
(Model Context Protocol) bridge servers that let AI agents operate legacy software. The
page should make the value concrete and checkable: hours saved, errors avoided, and
payback time, each with a stated basis. No hype, no invented numbers.

> **Check before building:** the company name is written "inteligent software" (one "l").
> Confirm whether that is the intended brand spelling or a typo for "Intelligent". The
> name appears in the wordmark footer, the page title and the meta tags.

---

## 1. A caveat about the component library

`performative-ui` (v0.7.0, MIT, React 18/19) is a **parody** library. Its own description
is *"AI-native React components that signal how oversubscribed your funding round is."*
The components work and look polished, but many are built to imitate AI-startup hype
(fake logo walls, vanity counters, screen-takeover popups, waitlists).

That is the opposite of the "real returns, no fake promises" message. So the plan
**uses only the components that carry real content well, and tones them down**:

| Use | Component | Why / how |
|---|---|---|
| ✅ | `BeforeAfter` (+ `.Before/.After/.Arrow`) | The core of the pitch: today's manual process next to the automated one. |
| ✅ | `GlassCard` (+ `.Icon/.Title/.Body/.Link`) | Cards for "How it works", use cases and guarantees. Use `glowOnHover` only, no `breathing`. |
| ✅ | `MockIDE` | Shows a real MCP tool definition or call against a legacy system. Set `thinkingLabel={false}` and `loop={false}`. |
| ✅ | `StatCounter` / `useCounter` | **Only** for measured figures from real projects, each with a footnote giving its source. |
| ✅ | `PricingCard` (+ subparts) | Engagement models (Pilot / Production / Managed) with plain, fixed scopes. |
| ✅ | `EyebrowPill` | Small section labels ("How it works", "Measured results"). |
| ✅ | `Button` | Calls to action. |
| ✅ | `StatusDot` (`static`) | Marks "in production" next to case studies. Not used as a decorative "live" pulse. |
| ✅ | `BigBack` | Footer with the company wordmark and contact and legal links. Keep `gradient` off. |
| ⚠️ | `Aurora` | Optional hero background only. Use `static` with low-saturation brand colours, or leave it out. |
| ⚠️ | `GradientText` | At most one phrase in the hero. |
| ⚠️ | `LogoRow` | Only with real clients who have given written permission. Otherwise leave it out. |
| ❌ | `LogoMarquee`, `CommunityBadge`, `StickyBanner` | Social-proof theatre. |
| ❌ | `Popover` (auto `timer`), `ChatFAB`, `WaitlistForm` | Pushy or misleading for a B2B service. Use a normal contact form instead. |
| ❌ | `PromptHero`, `Prompt`, `Temperature`, `WibblingSpinner`, `TokenStream`, `Rotator`, `WordRoll`, `SlippyWords`, `Sparkle`, `FloatingSparkles`, `Goldeneye`, `AsciiHero`, `NodeGraphBackground`, `QuestText` | Hype signals that add motion without adding information. |

If the parody styling still shows through after theming, a fallback is to keep the same
page structure and swap the components for a neutral library such as shadcn/ui. The
content plan below does not depend on the library.

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
  sections/  Nav, Hero, Problem, BeforeAfterSection, HowItWorks, RoiCalculator,
             Results, UseCases, Safety, Engagement, Faq, Contact, Footer
```

---

## 3. Page structure (top to bottom)

### 3.1 Nav (sticky, minimal)
Wordmark · How it works · Results · Pricing · FAQ · **[Book a 30-min process review]** (`Button`)

### 3.2 Hero
- `EyebrowPill`: "MCP bridge servers for legacy software"
- **H1:** "Let AI agents do the work in the systems you already run."
  Put one phrase in `GradientText`, or none.
- **Subhead:** "We build MCP servers that give AI agents safe, audited access to your ERP,
  AS/400, desktop and on-prem applications, with no rip-and-replace."
- CTAs: `Button` "Calculate your savings" (scrolls to the calculator) and a secondary
  "See how it works".
- Visual: a `MockIDE` with a short, real-looking MCP tool definition
  (for example `create_purchase_order` on a legacy ERP), not an "AI is writing…" animation.

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

### 3.6 ROI calculator (custom component, no library equivalent)
The section that best supports "real returns, not promises", because **visitors enter
their own numbers**:
- Inputs: tasks per month, minutes per task, loaded hourly cost, expected automation share
  (default a conservative 50–70%, adjustable), plus a one-off build cost and a monthly run cost.
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
A plain form (name, company, email, the system you use, the process you want to automate)
with a `Button` submit. Copy: "We reply within one business day. The first review call is free."

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
3. Build the `RoiCalculator` with unit tests for the formula (Vitest).
4. Add Results, Cases, Safety, Engagement, FAQ and Contact.
5. Contact form backend: Formspree, a Netlify Forms or Vercel function, or a mailto fallback.
6. Polish: responsive down to 360 px, light and dark themes, reduced motion, keyboard
   navigation, alt text, a Lighthouse score of 90 or more on every metric.
7. SEO: title, meta description, Open Graph image, `Organization` JSON-LD.
8. Deploy and add privacy-friendly analytics (Plausible) to track CTA clicks and calculator use.

## 6. Inputs needed from you

- Confirm the company name spelling and send a logo and brand colours.
- Real project metrics with permission to publish (anonymised is fine).
- Client names or logos you are allowed to show (otherwise none are shown).
- Pricing, or "from" figures, for the engagement models.
- Contact details, KvK/VAT number, privacy policy.
- Which language(s): English, Dutch, or both.
