import { useEffect, useState } from 'react'
import { reportStorageFailure } from '../utils/storageStatus'

export function useLocalStorage(key, initialValue, validate = () => true) {
  const [value, setValue] = useState(() => {
    try {
      const raw = window.localStorage.getItem(key)
      if (raw !== null) {
        const parsed = JSON.parse(raw)
        if (validate(parsed)) return parsed
      }
    } catch {
      // Unreadable or blocked storage: start from the default and warn.
      reportStorageFailure()
    }
    return typeof initialValue === 'function' ? initialValue() : initialValue
  })

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch {
      // Storage full or blocked: the app keeps working in memory, and the notice explains.
      reportStorageFailure()
    }
  }, [key, value])

  return [value, setValue]
}