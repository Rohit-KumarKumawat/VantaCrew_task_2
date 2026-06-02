import { STAGES, STAGE_STYLES } from "../utils/stages";

/**
 * Filter pill bar showing counts per pipeline stage.
 *
 * @param {{
 *   leads: object[],
 *   activeFilter: string | null,
 *   onFilter: (stage: string | null) => void
 * }} props
 */
export function StageCounter({ leads, activeFilter, onFilter }) {
  const counts = STAGES.reduce((acc, s) => {
    acc[s] = leads.filter((l) => l.stage === s).length;
    return acc;
  }, {});

  return (
    <div className="flex flex-wrap gap-2">
      {/* All */}
      <button
        onClick={() => onFilter(null)}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
          activeFilter === null
            ? "bg-slate-900 text-white border-slate-900"
            : "bg-white text-slate-600 border-slate-200 hover:border-slate-300"
        }`}
      >
        All <span className="opacity-70">{leads.length}</span>
      </button>

      {/* Per stage */}
      {STAGES.map((s) => (
        <button
          key={s}
          onClick={() => onFilter(activeFilter === s ? null : s)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
            activeFilter === s
              ? `${STAGE_STYLES[s].bg} border-transparent ring-2 ring-offset-1 ring-violet-400`
              : "bg-white text-slate-600 border-slate-200 hover:border-slate-300"
          }`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${STAGE_STYLES[s].dot}`} />
          {s} <span className="opacity-60">{counts[s]}</span>
        </button>
      ))}
    </div>
  );
}
