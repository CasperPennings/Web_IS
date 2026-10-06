import { ChatBubble, TokenStream } from "performative-ui";
import { useLanguage } from "../i18n/LanguageContext";
import { useInView } from "../lib/useInView";

/** A short scripted conversation that shows what working with the assistant feels like. */
export function AssistantChat() {
  const { lang, copy } = useLanguage();
  const t = copy.chat;
  const [ref, inView] = useInView<HTMLDivElement>(0.3);
  return (
    <div className="chat" ref={ref}>
      <ChatBubble role="user">{t.question}</ChatBubble>
      <ChatBubble role="ai" agent={t.agent} thinking={t.thinking}>
        <span className="stream-sizer">
          <span className="stream-sizer__ghost" aria-hidden="true">
            {t.reply}
          </span>
          <span className="stream-sizer__live" aria-hidden="true">
            {/* keyed by language so switching restarts the stream */}
            {inView ? <TokenStream key={lang} text={t.reply} speedMs={[30, 70]} hideCaret /> : null}
          </span>
          <span className="sr-only">{t.reply}</span>
        </span>
      </ChatBubble>
      <p className="chat__caption">{t.caption}</p>
    </div>
  );
}
