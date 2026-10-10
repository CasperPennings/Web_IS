/** What the visitor clicked before the contact dialog opened, so the request has context. */
export interface ContactContext {
  plan?: string;
  task?: string;
}

export type OpenContact = (context?: ContactContext) => void;
