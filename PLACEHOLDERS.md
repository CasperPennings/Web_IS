# Placeholders to replace before launch

Everything below is sample content. It is shown on the page with a "Voorbeeld" / "Example"
tag and a caption saying the figures are illustrative. Run `npm run check:placeholders`
to list what is left (`-- --strict` exits with an error while any remain).

All text exists twice, in **`src/content/nl.ts`** (Dutch, the default) and
**`src/content/en.ts`** (English). Update both files: they share one structure (`src/i18n/types.ts`),
so TypeScript reports anything missing from either.

| Where (in both nl.ts and en.ts) | What to replace |
|---|---|
| `results.items` | The four headline figures. Set `placeholder: false` and write the real `source`. |
| `cases.items` | The three fictional scenarios. Replace with real customer stories (with permission). |
| `pricing.plans` | `vanaf €X / €Y / €Z`. Set real prices. |
| `beforeAfter.before` / `after` | The ~5 minutes per invoice timings, once measured. |
| `chat` | The example conversation in the hero (37 invoices, 2 set aside). |
| `footer.registration` | KvK / btw numbers. |

Outside the language files:

| File | What to replace |
|---|---|
| `src/content/site.ts` | `email` (hallo@intelligentsoftware.nl). |
| `src/sections/Calculator.tsx` | Default set-up cost (€12,000) and monthly cost (€400): use your real quote. |

Also needed before going live: a privacy policy, a contact form backend
(`src/sections/ContactForm.tsx` currently opens the visitor's mail app), and the Open Graph image.
