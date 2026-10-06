import { ChatBubble, TokenStream } from "performative-ui";
import { useInView } from "../lib/useInView";

const reply =
  "Done. 37 invoices are entered and checked against the orders. 2 didn't match, so I've set them aside for you to look at.";

/** A short scripted conversation that shows what working with the assistant feels like. */
export function AssistantChat() {
  const [ref, inView] = useInView<HTMLDivElement>(0.3);
  return (
    <div className="chat" ref={ref}>
      <ChatBubble role="user">Can you process this week's supplier invoices?</ChatBubble>
      <ChatBubble role="ai" agent="Your assistant" thinking="working in the accounting program…">
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
      <p className="chat__caption">Example conversation</p>
    </div>
  );
}
