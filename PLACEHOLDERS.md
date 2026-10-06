# Placeholders to replace before launch

Everything below is sample content. It is shown on the page with an "Example" tag and
the caption *"Illustrative figures based on a typical invoice-processing task. Real customer
studies coming soon."* Run `npm run check:placeholders` to list what is left
(`-- --strict` exits with an error while any remain).

| File | What to replace |
|---|---|
| `src/content/results.ts` | The four headline figures. Set `placeholder: false` and write the real `source`. |
| `src/content/cases.ts` | The three fictional scenarios. Replace with real case studies (with permission). |
| `src/content/pricing.ts` | `from €X / €Y / €Z`. Set real prices. |
| `src/content/process.ts` | `beforeSteps` / `afterSteps` timings (≈5 min per invoice) once measured. |
| `src/content/site.ts` | `email` (hallo@intelligentsoftware.nl) and `registration` (KvK / VAT). |
| `src/sections/Calculator.tsx` | Default build cost (€12,000) and run cost (€400/month): use your real quote. |
| `src/sections/AssistantChat.tsx` | The example conversation in the hero (37 invoices, 2 set aside). |

Also needed before going live: a privacy policy, a contact form backend
(`src/sections/ContactForm.tsx` currently opens the visitor's mail app), and the Open Graph image.
