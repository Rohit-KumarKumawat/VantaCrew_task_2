/**
 * Three stat cards: total prospects, active, and closed-won value.
 *
 * @param {{
 *   totalLeads: number,
 *   activeLeads: number,
 *   totalWonValue: number,
 *   wonCount: number
 * }} props
 */
export function StatsRow({ totalLeads, activeLeads, totalWonValue, wonCount }) {
  const closedWon =
    totalWonValue > 0
      ? "€" + totalWonValue.toLocaleString("en-IE")
      : wonCount;

  const stats = [
    { label: "Total prospects", value: totalLeads },
    { label: "Active",          value: activeLeads },
    { label: "Closed won",      value: closedWon },
  ];

  return (
    <div className="grid grid-cols-3 gap-3">
      {stats.map(({ label, value }) => (
        <div
          key={label}
          className="bg-white rounded-xl border border-slate-100 px-4 py-3"
        >
          <p className="text-xs text-slate-400 mb-0.5">{label}</p>
          <p className="text-xl font-bold text-slate-900">{value}</p>
        </div>
      ))}
    </div>
  );
}
