export const STAGES = ["Lead", "Contacted", "Qualified", "Proposal", "Won", "Lost"];

export const STAGE_STYLES = {
  Lead:      { bg: "bg-slate-100 text-slate-700",     dot: "bg-slate-400",   bar: "bg-slate-400" },
  Contacted: { bg: "bg-blue-100 text-blue-700",       dot: "bg-blue-400",    bar: "bg-blue-400" },
  Qualified: { bg: "bg-violet-100 text-violet-700",   dot: "bg-violet-500",  bar: "bg-violet-500" },
  Proposal:  { bg: "bg-amber-100 text-amber-700",     dot: "bg-amber-400",   bar: "bg-amber-400" },
  Won:       { bg: "bg-emerald-100 text-emerald-700", dot: "bg-emerald-500", bar: "bg-emerald-500" },
  Lost:      { bg: "bg-rose-100 text-rose-700",       dot: "bg-rose-400",    bar: "bg-rose-400" },
};

export const EMPTY_FORM = {
  name: "",
  company: "",
  email: "",
  stage: "Lead",
  value: "",
  notes: "",
};
