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
| `chat` | The example conversation in the hero (37 invoices, 2 set aside). |
| `pricing.founding` | Remove or change once the three founding places are taken. |
| `safety.items` (last item), `faq` (lock-in answer) | The parallel-run guarantee and the licence terms: have a lawyer confirm the contract wording. |
| `approach.loop`, `safety.items` | The improvement-cycle promise (feedback turned into tests, then improved) and the trial guarantee: confirm with a lawyer and put them in the contracts. |
| `footer.registration` | KvK / btw numbers. |

Outside the language files:

| File | What to replace |
|---|---|
| `src/content/site.ts` | `email` (hallo@intelligentsoftware.nl). Check the `platform` name for trademarks before launch. |

Also needed before going live: a privacy policy, a contact form backend
(`src/sections/ContactForm.tsx` currently opens the visitor's mail app), and the Open Graph image.
