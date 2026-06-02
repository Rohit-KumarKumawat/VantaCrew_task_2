import { ProspectRow } from "./ProspectRow";

/**
 * Renders the filtered list of prospects or an appropriate empty state.
 *
 * @param {{
 *   filtered: object[],
 *   totalLeads: number,
 *   onEdit: (prospect: object) => void,
 *   onDelete: (prospect: object) => void,
 *   onAddClick: () => void
 * }} props
 */
export function ProspectList({ filtered, totalLeads, onEdit, onDelete, onAddClick }) {
  if (filtered.length === 0) {
    return (
      <div className="text-center py-16">
        {totalLeads === 0 ? (
          <>
            <div className="w-12 h-12 rounded-2xl bg-violet-100 flex items-center justify-center mx-auto mb-3">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path
                  d="M11 3v18M3 11h18"
                  stroke="#7c3aed"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <p className="text-sm font-medium text-slate-700 mb-1">
              No prospects yet
            </p>
            <p className="text-xs text-slate-400 mb-4">
              Add your first prospect to get started
            </p>
            <button
              onClick={onAddClick}
              className="inline-flex items-center gap-1.5 bg-violet-600 hover:bg-violet-700 text-white text-sm px-4 py-2 rounded-lg transition-colors"
            >
              Add prospect
            </button>
          </>
        ) : (
          <>
            <p className="text-sm font-medium text-slate-600 mb-1">No results</p>
            <p className="text-xs text-slate-400">
              Try a different search or filter
            </p>
          </>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {filtered.map((p) => (
        <ProspectRow
          key={p.id}
          prospect={p}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
