import { useCallback, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'

const DEFAULTS = { status: 'all', sort: 'newest', category: '', q: '' }

// Task list filters live in the URL, so views can be linked to (e.g. from the dashboard).
export function useTaskFilters() {
  const [params, setParams] = useSearchParams()

  const filters = useMemo(
    () => ({
      status: params.get('status') || DEFAULTS.status,
      sort: params.get('sort') || DEFAULTS.sort,
      category: params.get('category') || DEFAULTS.category,
      q: params.get('q') || DEFAULTS.q,
    }),
    [params],
  )

  const setFilter = useCallback(
    (key, value) => {
      setParams(
        (prev) => {
          const next = new URLSearchParams(prev)
          if (!value || value === DEFAULTS[key]) next.delete(key)
          else next.set(key, value)
          return next
        },
        { replace: true },
      )
    },
    [setParams],
  )

  const clearFilters = useCallback(() => setParams({}, { replace: true }), [setParams])

  const isFiltered =
    filters.status !== DEFAULTS.status || filters.category !== DEFAULTS.category || filters.q !== ''

  return { filters, setFilter, clearFilters, isFiltered }
}