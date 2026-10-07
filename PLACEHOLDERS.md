# Placeholders to replace before launch

Everything below is sample content. It is shown on the page with a "Voorbeeld" / "Example"
tag and a caption saying the figures are illustrative. Run `npm run check:placeholders`
to list what is left (`-- --strict` exits with an error while any remain).

All text exists twice, in **`src/content/nl.ts`** (Dutch, the default) and
**`src/content/en.ts`** (English). Update both files: they share one structure (`src/i18n/types.ts`),
so TypeScript reports anything missing from either.

Prices and the platform name are set once in **`src/content/site.ts`** (`prices`, `platform`)
and flow into the pricing cards, the calculator defaults, the founding-customer offer and the copy.
They follow the business plan: quickscan €3,500, trial €15,000, support €900 a month,
add-on task €6,000, 25% off the first three trials, all excluding VAT.

| Where (in both nl.ts and en.ts) | What to replace |
|---|---|
| `results.items` | The four headline figures (worked example: 1,100 invoices × 6 min, half automated). Replace with measured results. |
| `cases.items` | The three fictional scenarios. Replace with real customer stories (with permission). |
| `beforeAfter.before` / `after` | The ~4 + ~2 minutes per invoice timings, once measured. |
| `chat` | The example conversation in the hero (37 invoices, 2 set aside). |
| `pricing.founding` | Remove or change once the three founding places are taken. |
| `safety.items` (last item), `faq` (lock-in answer) | The parallel-run guarantee and the licence terms: have a lawyer confirm the contract wording. |
| `workday.privacy`, `faq` (employees watched) | The Pontis Scan promises (no full-day recording, results per task, optional program logging, deletion after the quickscan): confirm with a privacy lawyer and a DPIA. |
| `teach.note`, `teach.steps`, `faq` (Pontis Teach) | The Pontis Teach promises (fixes live within 10 working days, recordings deleted 90 days after the improvement, never used to train AI): confirm they can be met and put them in the support contract. |
| `footer.registration` | KvK / btw numbers. |

Outside the language files:

| File | What to replace |
|---|---|
| `src/content/site.ts` | `email` (hallo@intelligentsoftware.nl). Check the `platform` name for trademarks before launch. |

Also needed before going live: a privacy policy, a contact form backend
(`src/sections/ContactForm.tsx` currently opens the visitor's mail app), and the Open Graph image.
