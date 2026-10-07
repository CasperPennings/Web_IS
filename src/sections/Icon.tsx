/**
 * Line icons drawn as inline SVG. Unicode symbols looked fine on desktop but
 * several (for example the power symbol) are missing from phone fonts.
 */
const paths = {
  swap: "M7 7h13M16 3l4 4-4 4M17 17H4M8 13l-4 4 4 4",
  grow: "M3 17l6-6 4 4 8-8M15 7h6v6",
  test: "M9 3h6M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3M7.5 15h9",
  blocks: "M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z",
  layers: "M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5",
  open: "M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0-18zM3 12h18M12 3c3.5 3.5 3.5 14.5 0 18M12 3c-3.5 3.5-3.5 14.5 0 18",
  filter: "M3 5h18l-7 8v6l-4 2v-8z",
  eye: "M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12zM12 9a3 3 0 1 0 0 6a3 3 0 1 0 0-6z",
  log: "M8 6h13M8 12h13M8 18h13M3.5 6h.01M3.5 12h.01M3.5 18h.01",
  power: "M12 3v9M6.3 6.3a8 8 0 1 0 11.4 0",
  lock: "M5 11h14v10H5zM8 11V7a4 4 0 0 1 8 0v4",
  record: "M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0-18zM12 9a3 3 0 1 0 0 6a3 3 0 1 0 0-6z",
  analyze: "M10 3a7 7 0 1 0 0 14a7 7 0 1 0 0-14zM21 21l-5.5-5.5M7 12v-2M10 12V8M13 12v-3",
  design: "M4 20l4-1 11-11-3-3L5 16l-1 4zM14 6l3 3",
  guarantee: "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3zM9 12l2 2 4-4",
} as const;

export type IconName = keyof typeof paths;

/** Renders a named line icon; any other value (such as a step number) is shown as text. */
export function Icon({ name }: { name?: string }) {
  if (!name) return null;
  const d = (paths as Record<string, string>)[name];
  if (!d) return <>{name}</>;
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  );
}
