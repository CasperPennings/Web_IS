import { Button, EyebrowPill, MockIDE, NodeGraphBackground, WordRoll } from "performative-ui";
import type { IdeToken } from "performative-ui";
import { rollingSystems } from "../content/process";

const toolDefinition: IdeToken[] = [
  { c: "server", cls: "key" },
  { c: "." },
  { c: "tool", cls: "fn" },
  { c: "(\n  " },
  { c: '"create_order"', cls: "str" },
  { c: ",\n  " },
  { c: '"Create a sales order in the ERP"', cls: "str" },
  { c: ",\n  { " },
  { c: "customer", cls: "key" },
  { c: ": string, " },
  { c: "lines", cls: "key" },
  { c: ": OrderLine[] },\n  " },
  { c: "async", cls: "key" },
  { c: " (args) => {\n    " },
  { c: "await", cls: "key" },
  { c: " erp." },
  { c: "validate", cls: "fn" },
  { c: "(args);\n    " },
  { c: "return", cls: "key" },
  { c: " erp.orders." },
  { c: "create", cls: "fn" },
  { c: "(args); " },
  { c: "// audited", cls: "com" },
  { c: "\n  }\n);" },
];

export function Hero() {
  return (
    <section className="hero" id="top">
      <NodeGraphBackground
        className="hero__bg"
        density={40}
        speed={0.25}
        colors={["#7c3aed", "#3b82f6", "#22d3ee"]}
        linkColor="#6d6df0"
        baseOpacity={0.4}
      />
      <div className="container hero__grid">
        <div>
          <EyebrowPill>MCP bridge servers for legacy software</EyebrowPill>
          <h1>
            Let AI agents do the work in your <WordRoll gradient words={rollingSystems} />
          </h1>
          <p className="hero__sub">
            We build MCP servers that give AI agents safe, audited access to your ERP, AS/400 and
            desktop software. The repetitive work gets automated, and nothing has to be replaced.
          </p>
          <div className="hero__ctas">
            <Button as="a" href="#calculator" variant="glow" size="lg">
              Calculate your savings
            </Button>
            <Button as="a" href="#how" variant="ghost" size="lg">
              See how it works
            </Button>
          </div>
        </div>
        <MockIDE filename="orders.mcp.ts" tokens={toolDefinition} thinkingLabel={false} />
      </div>
    </section>
  );
}
