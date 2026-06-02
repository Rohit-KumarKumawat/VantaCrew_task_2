import { useState, useEffect, useRef } from "react";
import { STAGES, EMPTY_FORM } from "../utils/stages";
/**
 * Reusable form for adding or editing a prospect.
 *
 * @param {{
 *   initial?: object,
 *   onSubmit: (form: object) => void,
 *   onCancel: () => void,
 *   submitLabel?: string
 * }} props
 */
export function ProspectForm({
  initial = EMPTY_FORM,
  onSubmit,
  onCancel,
  submitLabel = "Add prospect",
}) {
  const [form, setForm] = useState(initial);
  const firstRef = useRef(null);

  useEffect(() => {
    firstRef.current?.focus();
  }, []);

  const set = (key) => (e) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim()) return;
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        {/* Full name */}
        <div className="col-span-2">
          <label className="block text-xs font-medium text-slate-500 mb-1">
            Full name *
          </label>
          <input
            ref={firstRef}
            value={form.name}
            onChange={set("name")}
            required
            placeholder="Ada Lovelace"
            className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-violet-400 transition placeholder-slate-300"
          />
        </div>

        {/* Company */}
        <div>
          <label className="block text-xs font-medium text-slate-500 mb-1">
            Company
          </label>
          <input
            value={form.company}
            onChange={set("company")}
            placeholder="Acme Inc."
            className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-violet-400 transition placeholder-slate-300"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-medium text-slate-500 mb-1">
            Email
          </label>
          <input
            type="email"
            value={form.email}
            onChange={set("email")}
            placeholder="ada@acme.com"
            className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-violet-400 transition placeholder-slate-300"
          />
        </div>

        {/* Stage */}
        <div>
          <label className="block text-xs font-medium text-slate-500 mb-1">
            Stage
          </label>
          <select
            value={form.stage}
            onChange={set("stage")}
            className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-violet-400 transition"
          >
            {STAGES.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>

        {/* Deal value */}
        <div>
          <label className="block text-xs font-medium text-slate-500 mb-1">
            Deal value (€)
          </label>
          <input
            type="number"
            min="0"
            value={form.value}
            onChange={set("value")}
            placeholder="5000"
            className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-violet-400 transition placeholder-slate-300"
          />
        </div>

        {/* Notes */}
        <div className="col-span-2">
          <label className="block text-xs font-medium text-slate-500 mb-1">
            Notes
          </label>
          <textarea
            value={form.notes}
            onChange={set("notes")}
            placeholder="Context, next steps, source…"
            rows={2}
            className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-violet-400 transition placeholder-slate-300 resize-none"
          />
        </div>
      </div>

      <div className="flex gap-2 pt-1">
        <button
          type="submit"
          className="flex-1 bg-violet-600 hover:bg-violet-700 active:scale-[.98] text-white text-sm font-medium py-2 rounded-lg transition-all"
        >
          {submitLabel}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-sm text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
