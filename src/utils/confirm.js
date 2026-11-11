// Asks the browser to confirm only when `enabled` is true.
export function confirmIf(enabled, message) {
  return !enabled || window.confirm(message)
}