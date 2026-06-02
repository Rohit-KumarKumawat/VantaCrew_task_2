/**
 * Formats a numeric value as a Euro currency string.
 * Returns "—" for empty or invalid values.
 *
 * @param {string|number} val
 * @returns {string}
 */
export function formatCurrency(val) {
  const n = Number(val);
  if (!val || isNaN(n)) return "—";
  return "€" + n.toLocaleString("en-IE");
}
