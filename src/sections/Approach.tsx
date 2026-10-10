import { GlassCard, GradientText } from "performative-ui";
import { useCopy } from "../i18n/LanguageContext";
import { Icon } from "./Icon";
import { SectionHead } from "./shared";

// Geometry of the cycle diagram (SVG user units).
const CX = 240;
const CY = 235;
const R = 150;
const NODE_R = 44;
const NODE_ANGLES = [-90, 30, 150]; // clockwise from the top
const GAP = 22; // degrees kept free around each node for the arrows

const point = (deg: number, r = R) => {
  const rad = (deg * Math.PI) / 180;
  return { x: CX + r * Math.cos(rad), y: CY + r * Math.sin(rad) };
};

const arc = (from: number, to: number) => {
  const a = point(from + GAP);
  const b = point(to - GAP);
  return `M ${a.x.toFixed(1)} ${a.y.toFixed(1)} A ${R} ${R} 0 0 1 ${b.x.toFixed(1)} ${b.y.toFixed(1)}`;
};

function CycleDiagram() {
  const t = useCopy().approach.diagram;
  // Inside the circle, next to the dashed feedback arc; two lines so it never crosses the arc.
  const feedbackLabel = point(225, R - 55);
  const [fbFirst, ...fbRest] = t.feedback.split(" ");
  return (
    <svg className="cycle" viewBox="0 0 480 400" role="img" aria-label={t.label}>
      <defs>
        <marker id="cycle-arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 z" className="cycle__arrowhead" />
        </marker>
        <marker id="cycle-arrow-feedback" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 z" className="cycle__arrowhead cycle__arrowhead--feedback" />
        </marker>
      </defs>

      <path d={arc(NODE_ANGLES[0], NODE_ANGLES[1])} className="cycle__arc" markerEnd="url(#cycle-arrow)" />
      <path d={arc(NODE_ANGLES[1], NODE_ANGLES[2])} className="cycle__arc" markerEnd="url(#cycle-arrow)" />
      <path
        d={arc(NODE_ANGLES[2], NODE_ANGLES[0] + 360)}
        className="cycle__arc cycle__arc--feedback"
        markerEnd="url(#cycle-arrow-feedback)"
      />
      <text x={feedbackLabel.x} y={feedbackLabel.y} textAnchor="middle" className="cycle__feedback">
        <tspan x={feedbackLabel.x}>{fbFirst}</tspan>
        <tspan x={feedbackLabel.x} dy="16">
          {fbRest.join(" ")}
        </tspan>
      </text>

      {NODE_ANGLES.map((deg, i) => {
        const p = point(deg);
        const labelY = i === 0 ? p.y - NODE_R - 14 : p.y + NODE_R + 26;
        return (
          <g key={deg}>
            <circle cx={p.x} cy={p.y} r={NODE_R} className="cycle__node" />
            <text x={p.x} y={p.y + 11} textAnchor="middle" className="cycle__num">
              {i + 1}
            </text>
            <text x={p.x} y={labelY} textAnchor="middle" className="cycle__label">
              {t.nodes[i]}
            </text>
          </g>
        );
      })}

      <text x={CX} y={CY + 4} textAnchor="middle" className="cycle__center">
        {t.center}
      </text>
      <text x={CX} y={CY + 28} textAnchor="middle" className="cycle__center-sub">
        {t.centerSub}
      </text>
    </svg>
  );
}

export function Approach() {
  const t = useCopy().approach;
  return (
    <section className="section section--soft" id="approach">
      <div className="container">
        <SectionHead eyebrow={t.eyebrow} title={t.title}>
          {t.intro}
        </SectionHead>
        <div className="approach">
          <div className="approach__diagram">
            <CycleDiagram />
          </div>
          <div className="approach__steps">
            {t.steps.map((s) => (
              <GlassCard key={s.title}>
                <GlassCard.Icon>
                  <Icon name={s.icon} />
                </GlassCard.Icon>
                <GlassCard.Title>{s.title}</GlassCard.Title>
                <GlassCard.Body>{s.body}</GlassCard.Body>
              </GlassCard>
            ))}
            <div className="approach__loop">
              <h3>
                <span aria-hidden="true">
                  <GradientText>↻</GradientText>
                </span>{" "}
                {t.loop.title}
              </h3>
              <p>{t.loop.body}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
