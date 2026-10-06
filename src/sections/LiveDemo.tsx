import { ChatBubble, TokenStream } from "performative-ui";
import { useInView } from "../lib/useInView";
import { SectionHead } from "./shared";

const reply =
  "Order 48213 created: 12 lines, stock checked, delivery date 14 Oct. Logged in the audit trail.";

export function LiveDemo() {
  const [ref, inView] = useInView<HTMLDivElement>();
  return (
    <section className="section">
      <div className="container">
        <SectionHead eyebrow="See it work" title="One request. Real tool calls. Every step logged.">
          The agent doesn't click around blindly. It calls the tools your bridge exposes, and
          nothing else.
        </SectionHead>
        <div className="demo" ref={ref}>
          <ChatBubble role="user">Enter the order from Bakker BV's email into the ERP.</ChatBubble>
          <ChatBubble role="ai" agent="Order agent" thinking="calling create_order…">
            <span className="stream-sizer">
              <span className="stream-sizer__ghost" aria-hidden="true">
                {reply}
              </span>
              <span className="stream-sizer__live" aria-hidden="true">
                {inView ? <TokenStream text={reply} speedMs={[30, 70]} hideCaret /> : null}
              </span>
              <span className="sr-only">{reply}</span>
            </span>
          </ChatBubble>
        </div>
        <p className="caption" style={{ textAlign: "center" }}>
          Illustrative example. Customer and order number are fictional.
        </p>
      </div>
    </section>
  );
}
