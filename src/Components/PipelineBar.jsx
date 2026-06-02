import { STAGES, STAGE_STYLES } from "../utils/stages";

/**
 * Horizontal stacked bar showing proportion of leads per stage.
 *
 * @param {{ leads: object[] }} props
 */
export function PipelineBar({ leads }) {
  const total = leads.length || 1;

  return (
    <div className="flex gap-0.5 h-1.5 rounded-full overflow-hidden bg-slate-100">
      {STAGES.map((s) => {
        const count = leads.filter((l) => l.stage === s).length;
        const pct = (count / total) * 100;
        return pct > 0 ? (
          <div
            key={s}
            className={`${STAGE_STYLES[s].bar} transition-all duration-500`}
            style={{ width: `${pct}%` }}
            title={`${s}: ${count}`}
          />
        ) : null;
      })}
    </div>
  );
}
