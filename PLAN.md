# Plan: single-page website for Intelligent Software

**Goal:** A one-page site that explains what Intelligent Software builds, which is MCP
(Model Context Protocol) bridge servers that let AI agents operate legacy software. The
page should make the value concrete and checkable: hours saved, errors avoided, and
payback time, each with a stated basis. The look should be bold, the claims honest.

- **Company:** Intelligent Software
- **Domain:** https://intelligentsoftware.nl/ (canonical URL, Open Graph `og:url`, `Organization` JSON-LD)
- **Status:** no client numbers or client names yet, so the page launches with
  **clearly managed placeholders** (see section 2b).

## 0. Audience and tone (revised)

The site is for **directors and managers of medium-sized organisations that don't use AI
yet**, for example a school director, the head of a care organisation or the owner of a
wholesale business. They are not technical, so the site must be understandable without
any IT knowledge.

- **Plain words only.** Use "digital assistant" rather than agent or MCP server, "your
  existing software" rather than legacy system/ERP/API, "everything is written down"
  rather than audit log, and "earned back in X months" rather than payback period.
- **One familiar reference point:** "Think of ChatGPT, but working inside the software you already use."
- **Examples from their world:** invoices, absence records, pupil enrolments, staff schedules and weekly reports.
- **Software named by kind** ("accounting software", "student administration"), not by
  brand, so we don't claim compatibility we haven't proven.
- **No code on the page.** The hero shows an example conversation with the assistant
  instead. The term "MCP" appears only in one FAQ answer, "What should I tell our IT person?"
- **Reassurance up front:** "You stay in control", "you decide after each step", and an honest "no" if it doesn't pay off.

**Language:** Dutch is the default and English is selectable. The Dutch uses the informal
"je", which fits the startup tone. Numbers and currency follow each language's format
(`€ 16.800` / `€16,800`).

The sections below still describe the component choices. Where their example copy uses
technical terms, the plain-language rules above take precedence.

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
| Footer | `BigBack` | `company="Intelligent Software"`, `gradient` optional. |

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
  - Fill them with the brand palette from section 2a.
  - The library supports `data-theme="light"` and `prefers-reduced-motion`. **Dark is the default** (startup look),
    with a light theme available that follows the visitor's system setting.
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

### 2a. Brand: a bold, fast-moving startup

The direction: a young company that changes how work gets done. Confident, energetic and
technical, but still trustworthy for operations managers and IT leads.

**Name and wordmark**
- Wordmark: `intelligent software` in lowercase, set in a geometric grotesk, with the
  "i" dots (or a small connector glyph, `⟷` / `◆–◆`) in the gradient. The connector is a
  nod to "bridge" and doubles as the favicon.
- Tagline: **"Your legacy software, finally on autopilot."**
  Alternatives: "Old systems. New workforce." or "Bridging legacy software and AI agents."

**Palette (dark default)**

| Token | Value | Use |
|---|---|---|
| `--pui-bg` | `#0B0B14` | Page background (near-black with a blue cast) |
| `--pui-bg-soft` / `--pui-bg-elev` | `#12121F` / `#1A1A2B` | Sections, cards |
| `--pui-fg` / `--pui-fg-dim` / `--pui-fg-mute` | `#F4F4FB` / `#B4B4CC` / `#7A7A96` | Text |
| `--pui-border` | `#2A2A40` | Lines |
| `--pui-grad-from` | `#7C3AED` (electric violet) | Gradient start |
| `--pui-grad-mid` | `#3B82F6` (signal blue) | Gradient middle |
| `--pui-grad-to` | `#22D3EE` (cyan) | Gradient end: "connected", "live" |
| accent | `#A3E635` (lime) | Success states, `StatusDot`, savings figures. Used sparingly. |
| `--pui-glow` | violet at about 35% alpha | Card hover glow |

The light theme uses the same gradient on `#FAFAFC`, with text at `#0B0B14`.
Check contrast to WCAG AA: gradient text only at large sizes, body text always solid.

**Typography**
- Headings: **Space Grotesk** (or Satoshi or General Sans), 600–700, tight letter-spacing, large sizes (`clamp(2.5rem, 6vw, 5rem)` for the H1).
- Body: **Inter** 400/500.
- Code and tool names: **JetBrains Mono** (`--pui-font-mono`), used in `MockIDE` and inline tool names such as `create_order`.

**Visual language**
- Gradients on key words only (the `WordRoll` systems, one stat, the CTA), not on everything.
- `NodeGraphBackground` in violet and cyan nodes as the recurring "bridge" motif. Reuse it faintly behind the final CTA.
- Glass cards with a soft violet glow on hover; rounded `--pui-radius` of 16–20 px.
- Bold claims stay specific ("Hours back every week"), never vague ("10x your business").

### 2b. Placeholder strategy (no real numbers or clients yet)

The page launches with sample content, handled so it can never pass for a real claim:

1. **One source of truth.** All figures, clients, quotes and prices live in `src/content/*.ts`,
   and each item has `placeholder: true` plus a `source` field.
2. **Visible label.** Anything with `placeholder: true` renders a small "Example" tag, and the
   section gets a caption: *"Illustrative figures based on a typical order-intake workflow.
   Real case studies coming soon."*
3. **Plausible, conservative values.** Placeholders are derived from the calculator formula
   with modest inputs (for example 800 orders/month × 6 min × 60% automated ≈ 48 h/month)
   rather than spectacular numbers.
4. **Fictional clients that are clearly fictional.** Names such as "Bakker Logistiek BV
   (example)" or "A mid-size wholesaler", with no logos of real companies. In the "Works with"
   row, platform names (SAP, IBM i, Exact, AFAS) are fine, because they describe compatibility.
5. **Swap-out checklist.** A `PLACEHOLDERS.md` lists every placeholder. A script
   (`npm run check:placeholders`) prints what remains and can be made to fail the
   production build once you decide that real data is required.

Current placeholder set:

| Where | Placeholder |
|---|---|
| Measured results | "~48 h/month returned per workflow", "−80% re-keying errors", "Payback in ~4–6 months", "Pilot live in 4–6 weeks" |
| Before / After timings | 6 min → 20 s per order; 2 min stock check → automatic |
| Case studies (3) | Example wholesaler (order intake, ERP), example accounting firm (invoice matching), example manufacturer (production reports from IBM i) |
| Testimonial (optional) | One quote marked "Example quote" |
| Pricing | Process review "from €X", Pilot "from €Y", Production "from €Z/month", literal `€X`-style tokens until set |
| Contact | `hallo@intelligentsoftware.nl`, KvK/VAT "to be added" |

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

`brand="with Intelligent Software"`. Add a footnote: *"Example timings from [client/pilot], measured over N weeks."*

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

> ⚠️ For now these are placeholders (section 2b), shown with the "Example" tag and the
> "illustrative figures" caption until real measurements replace them.

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
`company="Intelligent Software"`, link columns (Product, Company, Legal), and a KvK/VAT
number and address for B2B trust.

---

## 4. Copy principles (to keep it honest)

1. Every number has a source line, or an "Example" label while placeholders are in use (section 2b).
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

## 6. Settled and still open

**Settled:** name "Intelligent Software", domain intelligentsoftware.nl, a bold startup
brand (section 2a), and placeholder numbers, clients and prices (section 2b).

**Still open (not blocking; there are defaults):**
- Language: defaults to **English**, with all copy kept in `src/content` so a Dutch (`/nl`)
  version is easy to add given the .nl audience.
- A real logo, if you have one; otherwise we use the wordmark from section 2a.
- Contact email or phone, KvK/VAT number and a privacy policy before going live.
- Real metrics, clients and prices as they come in: replace the items listed in `PLACEHOLDERS.md`.
