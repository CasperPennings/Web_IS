import { Fragment } from "react";
import { GlassCard, GradientText, StatusDot } from "performative-ui";
import { useCopy } from "../i18n/LanguageContext";
import { Icon } from "./Icon";
import { SectionHead } from "./shared";

export function Platform() {
  const t = useCopy().platform;
  return (
    <section className="section" id="platform">
      <div className="container">
        <SectionHead eyebrow={t.eyebrow} title={t.title}>
          {t.intro}
        </SectionHead>

        <div className="bridge" role="list">
          {t.flow.map((node, i) => (
            <Fragment key={node.title}>
              {i > 0 ? <div className="bridge__link" aria-hidden="true" /> : null}
              <div role="listitem" className={i === 1 ? "bridge__node bridge__node--core" : "bridge__node"}>
                <div className="bridge__title">
                  {i === 1 ? <GradientText>{node.title}</GradientText> : node.title}
                </div>
                <p>{node.body}</p>
                {i === 1 ? (
                  <span className="bridge__status">
                    <StatusDot color="#a3e635" /> {t.status}
                  </span>
                ) : null}
              </div>
            </Fragment>
          ))}
        </div>

        <div className="grid grid--3">
          {t.features.map((f) => (
            <GlassCard key={f.title}>
              <GlassCard.Icon>
                <Icon name={f.icon} />
              </GlassCard.Icon>
              <GlassCard.Title>{f.title}</GlassCard.Title>
              <GlassCard.Body>{f.body}</GlassCard.Body>
            </GlassCard>
          ))}
        </div>
        <p className="caption">{t.itNote}</p>
      </div>
    </section>
  );
}
