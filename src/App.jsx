// import { useState, useEffect, useRef } from "react";

// const STAGES = ["Lead", "Contacted", "Qualified", "Proposal", "Won", "Lost"];

// const STAGE_STYLES = {
//   Lead:      { bg: "bg-slate-100 text-slate-700",      dot: "bg-slate-400",      bar: "bg-slate-400" },
//   Contacted: { bg: "bg-blue-100 text-blue-700",        dot: "bg-blue-400",       bar: "bg-blue-400" },
//   Qualified: { bg: "bg-violet-100 text-violet-700",    dot: "bg-violet-500",     bar: "bg-violet-500" },
//   Proposal:  { bg: "bg-amber-100 text-amber-700",      dot: "bg-amber-400",      bar: "bg-amber-400" },
//   Won:       { bg: "bg-emerald-100 text-emerald-700",  dot: "bg-emerald-500",    bar: "bg-emerald-500" },
//   Lost:      { bg: "bg-rose-100 text-rose-700",        dot: "bg-rose-400",       bar: "bg-rose-400" },
// };

// const EMPTY_FORM = { name: "", company: "", email: "", stage: "Lead", value: "", notes: "" };

// function generateId() {
//   return Date.now().toString(36) + Math.random().toString(36).slice(2);
// }

// function loadFromStorage() {
//   try {
//     const raw = localStorage.getItem("vanta_leads");
//     return raw ? JSON.parse(raw) : [];
//   } catch {
//     return [];
//   }
// }

// function saveToStorage(leads) {
//   try {
//     localStorage.setItem("vanta_leads", JSON.stringify(leads));
//   } catch {}
// }

// function formatCurrency(val) {
//   const n = Number(val);
//   if (!val || isNaN(n)) return "—";
//   return "€" + n.toLocaleString("en-IE");
// }

// /* ── Modal ─────────────────────────────────────────────────────── */
// function Modal({ title, onClose, children }) {
//   useEffect(() => {
//     const handler = (e) => { if (e.key === "Escape") onClose(); };
//     window.addEventListener("keydown", handler);
//     return () => window.removeEventListener("keydown", handler);
//   }, [onClose]);

//   return (
//     <div
//       className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
//       onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
//     >
//       <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg animate-in fade-in slide-in-from-bottom-4 duration-200">
//         <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
//           <h2 className="text-base font-semibold text-slate-900 tracking-tight">{title}</h2>
//           <button
//             onClick={onClose}
//             className="w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors"
//             aria-label="Close"
//           >
//             <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
//               <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
//             </svg>
//           </button>
//         </div>
//         <div className="px-6 py-5">{children}</div>
//       </div>
//     </div>
//   );
// }

// /* ── ProspectForm ───────────────────────────────────────────────── */
// function ProspectForm({ initial = EMPTY_FORM, onSubmit, onCancel, submitLabel = "Add prospect" }) {
//   const [form, setForm] = useState(initial);
//   const firstRef = useRef(null);

//   useEffect(() => { firstRef.current?.focus(); }, []);

//   const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!form.name.trim()) return;
//     onSubmit(form);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4">
//       <div className="grid grid-cols-2 gap-3">
//         <div className="col-span-2">
//           <label className="block text-xs font-medium text-slate-500 mb-1">Full name *</label>
//           <input
//             ref={firstRef}
//             value={form.name}
//             onChange={set("name")}
//             required
//             placeholder="Ada Lovelace"
//             className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-violet-400 transition placeholder-slate-300"
//           />
//         </div>
//         <div>
//           <label className="block text-xs font-medium text-slate-500 mb-1">Company</label>
//           <input
//             value={form.company}
//             onChange={set("company")}
//             placeholder="Acme Inc."
//             className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-violet-400 transition placeholder-slate-300"
//           />
//         </div>
//         <div>
//           <label className="block text-xs font-medium text-slate-500 mb-1">Email</label>
//           <input
//             type="email"
//             value={form.email}
//             onChange={set("email")}
//             placeholder="ada@acme.com"
//             className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-violet-400 transition placeholder-slate-300"
//           />
//         </div>
//         <div>
//           <label className="block text-xs font-medium text-slate-500 mb-1">Stage</label>
//           <select
//             value={form.stage}
//             onChange={set("stage")}
//             className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-violet-400 transition"
//           >
//             {STAGES.map((s) => <option key={s}>{s}</option>)}
//           </select>
//         </div>
//         <div>
//           <label className="block text-xs font-medium text-slate-500 mb-1">Deal value (€)</label>
//           <input
//             type="number"
//             min="0"
//             value={form.value}
//             onChange={set("value")}
//             placeholder="5000"
//             className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-violet-400 transition placeholder-slate-300"
//           />
//         </div>
//         <div className="col-span-2">
//           <label className="block text-xs font-medium text-slate-500 mb-1">Notes</label>
//           <textarea
//             value={form.notes}
//             onChange={set("notes")}
//             placeholder="Context, next steps, source…"
//             rows={2}
//             className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-violet-400 transition placeholder-slate-300 resize-none"
//           />
//         </div>
//       </div>
//       <div className="flex gap-2 pt-1">
//         <button
//           type="submit"
//           className="flex-1 bg-violet-600 hover:bg-violet-700 active:scale-[.98] text-white text-sm font-medium py-2 rounded-lg transition-all"
//         >
//           {submitLabel}
//         </button>
//         <button
//           type="button"
//           onClick={onCancel}
//           className="px-4 py-2 text-sm text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
//         >
//           Cancel
//         </button>
//       </div>
//     </form>
//   );
// }

// /* ── DeleteConfirm ──────────────────────────────────────────────── */
// function DeleteConfirm({ prospect, onConfirm, onCancel }) {
//   return (
//     <div className="space-y-4">
//       <p className="text-sm text-slate-600">
//         Remove <span className="font-semibold text-slate-900">{prospect.name}</span>
//         {prospect.company ? ` · ${prospect.company}` : ""} from your pipeline? This cannot be undone.
//       </p>
//       <div className="flex gap-2">
//         <button
//           onClick={onConfirm}
//           className="flex-1 bg-rose-600 hover:bg-rose-700 active:scale-[.98] text-white text-sm font-medium py-2 rounded-lg transition-all"
//         >
//           Delete
//         </button>
//         <button
//           onClick={onCancel}
//           className="px-4 py-2 text-sm text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
//         >
//           Cancel
//         </button>
//       </div>
//     </div>
//   );
// }

// /* ── StageCounter ───────────────────────────────────────────────── */
// function StageCounter({ leads, activeFilter, onFilter }) {
//   const counts = STAGES.reduce((acc, s) => {
//     acc[s] = leads.filter((l) => l.stage === s).length;
//     return acc;
//   }, {});
//   const total = leads.length;

//   return (
//     <div className="flex flex-wrap gap-2">
//       <button
//         onClick={() => onFilter(null)}
//         className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
//           activeFilter === null
//             ? "bg-slate-900 text-white border-slate-900"
//             : "bg-white text-slate-600 border-slate-200 hover:border-slate-300"
//         }`}
//       >
//         All <span className="opacity-70">{total}</span>
//       </button>
//       {STAGES.map((s) => (
//         <button
//           key={s}
//           onClick={() => onFilter(activeFilter === s ? null : s)}
//           className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
//             activeFilter === s
//               ? `${STAGE_STYLES[s].bg} border-transparent ring-2 ring-offset-1 ring-violet-400`
//               : "bg-white text-slate-600 border-slate-200 hover:border-slate-300"
//           }`}
//         >
//           <span className={`w-1.5 h-1.5 rounded-full ${STAGE_STYLES[s].dot}`} />
//           {s} <span className="opacity-60">{counts[s]}</span>
//         </button>
//       ))}
//     </div>
//   );
// }

// /* ── ProspectRow ────────────────────────────────────────────────── */
// function ProspectRow({ prospect, onEdit, onDelete }) {
//   const style = STAGE_STYLES[prospect.stage];

//   return (
//     <div className="group flex items-center gap-3 px-4 py-3 bg-white rounded-xl border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all">
//       {/* Avatar */}
//       <div className="w-9 h-9 rounded-full bg-violet-100 text-violet-700 flex items-center justify-center text-xs font-bold shrink-0 select-none">
//         {prospect.name.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase()}
//       </div>

//       {/* Info */}
//       <div className="flex-1 min-w-0">
//         <div className="flex items-center gap-2 flex-wrap">
//           <span className="text-sm font-semibold text-slate-900 truncate">{prospect.name}</span>
//           {prospect.company && (
//             <span className="text-xs text-slate-400 truncate">{prospect.company}</span>
//           )}
//         </div>
//         {prospect.email && (
//           <p className="text-xs text-slate-400 truncate">{prospect.email}</p>
//         )}
//       </div>

//       {/* Stage badge */}
//       <span className={`hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium ${style.bg} shrink-0`}>
//         <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />
//         {prospect.stage}
//       </span>

//       {/* Value */}
//       <span className="hidden md:block text-sm font-medium text-slate-700 w-20 text-right shrink-0">
//         {formatCurrency(prospect.value)}
//       </span>

//       {/* Actions */}
//       <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
//         <button
//           onClick={() => onEdit(prospect)}
//           className="w-7 h-7 rounded-lg flex items-center justify-center text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors"
//           aria-label="Edit"
//         >
//           <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
//             <path d="M10.5 1.5L12.5 3.5L4.5 11.5H2.5V9.5L10.5 1.5Z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
//           </svg>
//         </button>
//         <button
//           onClick={() => onDelete(prospect)}
//           className="w-7 h-7 rounded-lg flex items-center justify-center text-slate-400 hover:bg-rose-50 hover:text-rose-500 transition-colors"
//           aria-label="Delete"
//         >
//           <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
//             <path d="M2 3.5h10M5 3.5V2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v1M5.5 6v4M8.5 6v4M3 3.5l.5 8a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5l.5-8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
//           </svg>
//         </button>
//       </div>
//     </div>
//   );
// }

// /* ── PipelineBar ────────────────────────────────────────────────── */
// function PipelineBar({ leads }) {
//   const total = leads.length || 1;
//   return (
//     <div className="flex gap-0.5 h-1.5 rounded-full overflow-hidden bg-slate-100">
//       {STAGES.map((s) => {
//         const count = leads.filter((l) => l.stage === s).length;
//         const pct = (count / total) * 100;
//         return pct > 0 ? (
//           <div
//             key={s}
//             className={`${STAGE_STYLES[s].bar} transition-all duration-500`}
//             style={{ width: `${pct}%` }}
//             title={`${s}: ${count}`}
//           />
//         ) : null;
//       })}
//     </div>
//   );
// }

// /* ── App ────────────────────────────────────────────────────────── */
// export default function App() {
//   const [leads, setLeads] = useState(loadFromStorage);
//   const [filter, setFilter] = useState(null);
//   const [search, setSearch] = useState("");
//   const [modal, setModal] = useState(null); // null | "add" | { type: "edit"|"delete", prospect }

//   useEffect(() => { saveToStorage(leads); }, [leads]);

//   const addLead = (form) => {
//     setLeads((prev) => [{ ...form, id: generateId(), createdAt: Date.now() }, ...prev]);
//     setModal(null);
//   };

//   const editLead = (form) => {
//     setLeads((prev) => prev.map((l) => (l.id === modal.prospect.id ? { ...l, ...form } : l)));
//     setModal(null);
//   };

//   const deleteLead = () => {
//     setLeads((prev) => prev.filter((l) => l.id !== modal.prospect.id));
//     setModal(null);
//   };

//   const filtered = leads.filter((l) => {
//     const matchStage = filter === null || l.stage === filter;
//     const q = search.toLowerCase();
//     const matchSearch = !q || [l.name, l.company, l.email, l.notes].some((v) => (v || "").toLowerCase().includes(q));
//     return matchStage && matchSearch;
//   });

//   const totalValue = leads
//     .filter((l) => l.stage === "Won")
//     .reduce((sum, l) => sum + (Number(l.value) || 0), 0);

//   return (
//     <div className="min-h-screen bg-slate-50 font-sans">
//       {/* Header */}
//       <header className="bg-white border-b border-slate-100 sticky top-0 z-30">
//         <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
//           <div className="flex items-center gap-2.5">
//             <div className="w-7 h-7 rounded-lg bg-violet-600 flex items-center justify-center">
//               <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
//                 <path d="M2 10.5L5 7.5L7.5 10L10.5 6L12 7.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//                 <rect x="1.5" y="1.5" width="11" height="11" rx="1.5" stroke="white" strokeWidth="1.3"/>
//               </svg>
//             </div>
//             <span className="text-sm font-bold text-slate-900 tracking-tight">LeadTracker</span>
//           </div>

//           <div className="flex-1 max-w-xs">
//             <div className="relative">
//               <svg className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-300" width="13" height="13" viewBox="0 0 13 13" fill="none">
//                 <circle cx="5.5" cy="5.5" r="4" stroke="currentColor" strokeWidth="1.3"/>
//                 <path d="M8.5 8.5L11 11" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
//               </svg>
//               <input
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 placeholder="Search prospects…"
//                 className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-violet-400 transition placeholder-slate-300"
//               />
//             </div>
//           </div>

//           <button
//             onClick={() => setModal("add")}
//             className="flex items-center gap-1.5 bg-violet-600 hover:bg-violet-700 active:scale-[.98] text-white text-xs font-medium px-3 py-1.5 rounded-lg transition-all"
//           >
//             <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
//               <path d="M6 2v8M2 6h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
//             </svg>
//             Add
//           </button>
//         </div>
//       </header>

//       <main className="max-w-3xl mx-auto px-4 py-6 space-y-5">
//         {/* Stats row */}
//         <div className="grid grid-cols-3 gap-3">
//           {[
//             { label: "Total prospects", value: leads.length },
//             { label: "Active", value: leads.filter((l) => !["Won","Lost"].includes(l.stage)).length },
//             { label: "Closed won", value: totalValue > 0 ? "€" + totalValue.toLocaleString("en-IE") : leads.filter((l) => l.stage === "Won").length },
//           ].map(({ label, value }) => (
//             <div key={label} className="bg-white rounded-xl border border-slate-100 px-4 py-3">
//               <p className="text-xs text-slate-400 mb-0.5">{label}</p>
//               <p className="text-xl font-bold text-slate-900">{value}</p>
//             </div>
//           ))}
//         </div>

//         {/* Pipeline bar */}
//         {leads.length > 0 && (
//           <div className="bg-white rounded-xl border border-slate-100 px-4 py-3 space-y-2">
//             <div className="flex justify-between items-center">
//               <span className="text-xs font-medium text-slate-500">Pipeline</span>
//               <span className="text-xs text-slate-400">{leads.length} prospects</span>
//             </div>
//             <PipelineBar leads={leads} />
//             <div className="flex flex-wrap gap-x-3 gap-y-1">
//               {STAGES.map((s) => {
//                 const count = leads.filter((l) => l.stage === s).length;
//                 return count > 0 ? (
//                   <span key={s} className="flex items-center gap-1 text-xs text-slate-400">
//                     <span className={`w-1.5 h-1.5 rounded-full ${STAGE_STYLES[s].dot}`} />
//                     {s} · {count}
//                   </span>
//                 ) : null;
//               })}
//             </div>
//           </div>
//         )}

//         {/* Filters */}
//         <StageCounter leads={leads} activeFilter={filter} onFilter={setFilter} />

//         {/* List */}
//         <div className="space-y-2">
//           {filtered.length === 0 ? (
//             <div className="text-center py-16">
//               {leads.length === 0 ? (
//                 <>
//                   <div className="w-12 h-12 rounded-2xl bg-violet-100 flex items-center justify-center mx-auto mb-3">
//                     <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
//                       <path d="M11 3v18M3 11h18" stroke="#7c3aed" strokeWidth="1.8" strokeLinecap="round"/>
//                     </svg>
//                   </div>
//                   <p className="text-sm font-medium text-slate-700 mb-1">No prospects yet</p>
//                   <p className="text-xs text-slate-400 mb-4">Add your first prospect to get started</p>
//                   <button
//                     onClick={() => setModal("add")}
//                     className="inline-flex items-center gap-1.5 bg-violet-600 hover:bg-violet-700 text-white text-sm px-4 py-2 rounded-lg transition-colors"
//                   >
//                     Add prospect
//                   </button>
//                 </>
//               ) : (
//                 <>
//                   <p className="text-sm font-medium text-slate-600 mb-1">No results</p>
//                   <p className="text-xs text-slate-400">Try a different search or filter</p>
//                 </>
//               )}
//             </div>
//           ) : (
//             filtered.map((p) => (
//               <ProspectRow
//                 key={p.id}
//                 prospect={p}
//                 onEdit={(pr) => setModal({ type: "edit", prospect: pr })}
//                 onDelete={(pr) => setModal({ type: "delete", prospect: pr })}
//               />
//             ))
//           )}
//         </div>

//         {filtered.length > 0 && (
//           <p className="text-center text-xs text-slate-300">
//             {filtered.length} of {leads.length} prospect{leads.length !== 1 ? "s" : ""}
//           </p>
//         )}
//       </main>

//       {/* Modals */}
//       {modal === "add" && (
//         <Modal title="New prospect" onClose={() => setModal(null)}>
//           <ProspectForm onSubmit={addLead} onCancel={() => setModal(null)} submitLabel="Add prospect" />
//         </Modal>
//       )}

//       {modal?.type === "edit" && (
//         <Modal title="Edit prospect" onClose={() => setModal(null)}>
//           <ProspectForm
//             initial={modal.prospect}
//             onSubmit={editLead}
//             onCancel={() => setModal(null)}
//             submitLabel="Save changes"
//           />
//         </Modal>
//       )}

//       {modal?.type === "delete" && (
//         <Modal title="Delete prospect?" onClose={() => setModal(null)}>
//           <DeleteConfirm
//             prospect={modal.prospect}
//             onConfirm={deleteLead}
//             onCancel={() => setModal(null)}
//           />
//         </Modal>
//       )}
//     </div>
//   );
// }
// -----------------------------------------------------------------------------------------------------
import { useState } from "react";

// Hooks
import { useLeads } from "./utils/useLeads";

// Constants
import { STAGES, STAGE_STYLES } from "./utils/stages";

// Components
import { Header }        from "./Components/Header";
import { StatsRow }      from "./Components/StatsRow";
import { PipelineBar }   from "./Components/PipelineBar"
import { StageCounter }  from "./Components/StageCounter";
import { ProspectList }  from "./Components/ProspectList";
import { Modal }         from "./Components/Modal";
import { ProspectForm }  from "./Components/ProspectForm";
import { DeleteConfirm } from "./Components/DeleteConfirm";

/**
 * Root application component.
 * Owns UI state (filter, search, modal) and wires CRUD handlers from useLeads.
 */
export default function App() {
  const { leads, addLead, editLead, deleteLead, totalWonValue } = useLeads();

  const [filter, setFilter] = useState(null);
  const [search, setSearch] = useState("");
  // modal: null | "add" | { type: "edit" | "delete", prospect: object }
  const [modal, setModal] = useState(null);

  // ── CRUD wrappers that also close the modal ──────────────────────
  const handleAdd = (form) => {
    addLead(form);
    setModal(null);
  };

  const handleEdit = (form) => {
    editLead(modal.prospect.id, form);
    setModal(null);
  };

  const handleDelete = () => {
    deleteLead(modal.prospect.id);
    setModal(null);
  };

  // ── Derived data ─────────────────────────────────────────────────
  const filtered = leads.filter((l) => {
    const matchStage = filter === null || l.stage === filter;
    const q = search.toLowerCase();
    const matchSearch =
      !q ||
      [l.name, l.company, l.email, l.notes].some((v) =>
        (v || "").toLowerCase().includes(q)
      );
    return matchStage && matchSearch;
  });

  const activeLeads = leads.filter(
    (l) => !["Won", "Lost"].includes(l.stage)
  ).length;

  const wonCount = leads.filter((l) => l.stage === "Won").length;

  // ── Render ───────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Header
        search={search}
        onSearchChange={setSearch}
        onAddClick={() => setModal("add")}
      />

      <main className="max-w-3xl mx-auto px-4 py-6 space-y-5">
        <StatsRow
          totalLeads={leads.length}
          activeLeads={activeLeads}
          totalWonValue={totalWonValue}
          wonCount={wonCount}
        />

        {leads.length > 0 && (
          <div className="bg-white rounded-xl border border-slate-100 px-4 py-3 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xs font-medium text-slate-500">Pipeline</span>
              <span className="text-xs text-slate-400">{leads.length} prospects</span>
            </div>
            <PipelineBar leads={leads} />
            <div className="flex flex-wrap gap-x-3 gap-y-1">
              {STAGES.map((s) => {
                const count = leads.filter((l) => l.stage === s).length;
                return count > 0 ? (
                  <span key={s} className="flex items-center gap-1 text-xs text-slate-400">
                    <span className={`w-1.5 h-1.5 rounded-full ${STAGE_STYLES[s].dot}`} />
                    {s} · {count}
                  </span>
                ) : null;
              })}
            </div>
          </div>
        )}

        <StageCounter leads={leads} activeFilter={filter} onFilter={setFilter} />

        <ProspectList
          filtered={filtered}
          totalLeads={leads.length}
          onEdit={(p) => setModal({ type: "edit", prospect: p })}
          onDelete={(p) => setModal({ type: "delete", prospect: p })}
          onAddClick={() => setModal("add")}
        />

        {filtered.length > 0 && (
          <p className="text-center text-xs text-slate-300">
            {filtered.length} of {leads.length} prospect
            {leads.length !== 1 ? "s" : ""}
          </p>
        )}
      </main>

      {/* ── Modals ─────────────────────────────────────────────── */}
      {modal === "add" && (
        <Modal title="New prospect" onClose={() => setModal(null)}>
          <ProspectForm
            onSubmit={handleAdd}
            onCancel={() => setModal(null)}
            submitLabel="Add prospect"
          />
        </Modal>
      )}

      {modal?.type === "edit" && (
        <Modal title="Edit prospect" onClose={() => setModal(null)}>
          <ProspectForm
            initial={modal.prospect}
            onSubmit={handleEdit}
            onCancel={() => setModal(null)}
            submitLabel="Save changes"
          />
        </Modal>
      )}

      {modal?.type === "delete" && (
        <Modal title="Delete prospect?" onClose={() => setModal(null)}>
          <DeleteConfirm
            prospect={modal.prospect}
            onConfirm={handleDelete}
            onCancel={() => setModal(null)}
          />
        </Modal>
      )}
    </div>
  );
}
