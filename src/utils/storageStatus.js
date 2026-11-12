// Tracks whether browser storage works, so the UI can warn instead of silently losing data.
let failed = false
const listeners = new Set()

export function reportStorageFailure() {
  if (failed) return
  failed = true
  listeners.forEach((l) => l())
}

export function subscribeStorageStatus(listener) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

export function getStorageFailed() {
  return failed
}