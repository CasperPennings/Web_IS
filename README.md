# Intelligent Software: website

Single-page site for https://intelligentsoftware.nl/, built with Vite, React 19, TypeScript and
[performative-ui](https://www.npmjs.com/package/performative-ui) components.
The design and content plan is in [PLAN.md](PLAN.md).

```bash
npm install
npm run dev          # local dev server
npm test             # savings-calculator logic
npm run build        # typecheck + production build into dist/
npm run check:placeholders
```

- Content (copy, figures, prices) lives in `src/content/`, sections in `src/sections/`.
- Brand tokens override the library's `--pui-*` variables in `src/theme.css`. Dark is the default,
  and light follows the visitor's system setting.
- Sample content is tracked in [PLACEHOLDERS.md](PLACEHOLDERS.md).
