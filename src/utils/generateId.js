/**
 * Generates a unique ID using timestamp + random string.
 *
 * @returns {string}
 */
export function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2);
}
