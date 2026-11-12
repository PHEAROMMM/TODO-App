import { useCallback } from 'react'
import { DEFAULT_CATEGORIES, STORAGE_KEYS } from '../utils/constants'
import { createId } from '../utils/id'
import { useLocalStorage } from './useLocalStorage'

function validate(name, categories, ignoreId) {
  const trimmed = name.trim()
  if (!trimmed) return 'Give the category a name.'
  const clash = categories.some(
    (c) => c.id !== ignoreId && c.name.toLowerCase() === trimmed.toLowerCase(),
  )
  return clash ? 'A category with that name already exists.' : ''
}

// addCategory / updateCategory return an error message, or '' on success.
export function useCategories() {
  const [categories, setCategories] = useLocalStorage(
    STORAGE_KEYS.categories,
    DEFAULT_CATEGORIES,
    Array.isArray,
  )

  const addCategory = useCallback(
    ({ name }) => {
      const error = validate(name, categories)
      if (error) return error
      setCategories((prev) => [...prev, { id: createId(), name: name.trim() }])
      return ''
    },
    [categories, setCategories],
  )

  const updateCategory = useCallback(
    (id, { name }) => {
      const error = validate(name, categories, id)
      if (error) return error
      setCategories((prev) => prev.map((c) => (c.id === id ? { ...c, name: name.trim() } : c)))
      return ''
    },
    [categories, setCategories],
  )

  const deleteCategory = useCallback(
    (id) => setCategories((prev) => prev.filter((c) => c.id !== id)),
    [setCategories],
  )

  const replaceCategories = useCallback((list) => setCategories(list), [setCategories])

  const resetCategories = useCallback(() => setCategories(DEFAULT_CATEGORIES), [setCategories])

  return {
    categories,
    addCategory,
    updateCategory,
    deleteCategory,
    replaceCategories,
    resetCategories,
  }
}