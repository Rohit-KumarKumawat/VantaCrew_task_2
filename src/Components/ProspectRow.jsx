import { STAGE_STYLES } from "../utils/stages";
import { formatCurrency } from "../utils/formatCurrency";

/**
 * Single row card for a prospect in the list.
 *
 * @param {{
 *   prospect: object,
 *   onEdit: (prospect: object) => void,
 *   onDelete: (prospect: object) => void
 * }} props
 */
export function ProspectRow({ prospect, onEdit, onDelete }) {
  const style = STAGE_STYLES[prospect.stage];

  const initials = prospect.name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div className="group flex items-center gap-3 px-4 py-3 bg-white rounded-xl border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all">
      {/* Avatar */}
      <div className="w-9 h-9 rounded-full bg-violet-100 text-violet-700 flex items-center justify-center text-xs font-bold shrink-0 select-none">
        {initials}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm font-semibold text-slate-900 truncate">
            {prospect.name}
          </span>
          {prospect.company && (
            <span className="text-xs text-slate-400 truncate">
              {prospect.company}
            </span>
          )}
        </div>
        {prospect.email && (
          <p className="text-xs text-slate-400 truncate">{prospect.email}</p>
        )}
      </div>

      {/* Stage badge */}
      <span
        className={`hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium ${style.bg} shrink-0`}
      >
        <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />
        {prospect.stage}
      </span>

      {/* Value */}
      <span className="hidden md:block text-sm font-medium text-slate-700 w-20 text-right shrink-0">
        {formatCurrency(prospect.value)}
      </span>

      {/* Actions */}
      <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
        <button
          onClick={() => onEdit(prospect)}
          className="w-7 h-7 rounded-lg flex items-center justify-center text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors"
          aria-label="Edit"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M10.5 1.5L12.5 3.5L4.5 11.5H2.5V9.5L10.5 1.5Z"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          onClick={() => onDelete(prospect)}
          className="w-7 h-7 rounded-lg flex items-center justify-center text-slate-400 hover:bg-rose-50 hover:text-rose-500 transition-colors"
          aria-label="Delete"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M2 3.5h10M5 3.5V2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v1M5.5 6v4M8.5 6v4M3 3.5l.5 8a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5l.5-8"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
