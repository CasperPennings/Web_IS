/** Language-independent site details. Text lives in ./nl.ts and ./en.ts. */
export const site = {
  name: "Intelligent Software",
  /** Name of the platform that connects existing software to AI assistants. Change it here only. */
  platform: "Pontis",
  domain: "intelligentsoftware.nl",
  url: "https://intelligentsoftware.nl/",
  email: "contact@intelligentsoftware.nl",
  /**
   * Formspree form ID (the part after https://formspree.io/f/). When empty, the
   * contact form falls back to opening the visitor's mail app.
   */
  formspreeId: "mnpjdvwo",
};

/** Prices from the business plan, in euro excluding VAT. */
export const prices = {
  quickscan: 3500,
  trial: 15000,
  support: 900,
  addon: 6000,
  /** Founding customers: the first three trials. */
  foundingDiscount: 0.25,
};
