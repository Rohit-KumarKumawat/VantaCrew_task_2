/**
 * Confirmation dialog content for deleting a prospect.
 *
 * @param {{
 *   prospect: object,
 *   onConfirm: () => void,
 *   onCancel: () => void
 * }} props
 */
export function DeleteConfirm({ prospect, onConfirm, onCancel }) {
  return (
    <div className="space-y-4">
      <p className="text-sm text-slate-600">
        Remove{" "}
        <span className="font-semibold text-slate-900">{prospect.name}</span>
        {prospect.company ? ` · ${prospect.company}` : ""} from your pipeline?
        This cannot be undone.
      </p>
      <div className="flex gap-2">
        <button
          onClick={onConfirm}
          className="flex-1 bg-rose-600 hover:bg-rose-700 active:scale-[.98] text-white text-sm font-medium py-2 rounded-lg transition-all"
        >
          Delete
        </button>
        <button
          onClick={onCancel}
          className="px-4 py-2 text-sm text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
