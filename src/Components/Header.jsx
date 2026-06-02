/**
 * Sticky top header with logo, search input, and Add button.
 *
 * @param {{
 *   search: string,
 *   onSearchChange: (val: string) => void,
 *   onAddClick: () => void
 * }} props
 */
export function Header({ search, onSearchChange, onAddClick }) {
  return (
    <header className="bg-white border-b border-slate-100 sticky top-0 z-30">
      <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-violet-600 flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M2 10.5L5 7.5L7.5 10L10.5 6L12 7.5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <rect
                x="1.5" y="1.5" width="11" height="11" rx="1.5"
                stroke="white"
                strokeWidth="1.3"
              />
            </svg>
          </div>
          <span className="text-sm font-bold text-slate-900 tracking-tight">
            LeadTracker
          </span>
        </div>

        {/* Search */}
        <div className="flex-1 max-w-xs">
          <div className="relative">
            <svg
              className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-300"
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
            >
              <circle cx="5.5" cy="5.5" r="4" stroke="currentColor" strokeWidth="1.3" />
              <path d="M8.5 8.5L11 11" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
            <input
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search prospects…"
              className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-violet-400 transition placeholder-slate-300"
            />
          </div>
        </div>

        {/* Add button */}
        <button
          onClick={onAddClick}
          className="flex items-center gap-1.5 bg-violet-600 hover:bg-violet-700 active:scale-[.98] text-white text-xs font-medium px-3 py-1.5 rounded-lg transition-all"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 2v8M2 6h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
          Add
        </button>
      </div>
    </header>
  );
}
