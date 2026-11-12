import { useCallback, useMemo } from 'react'
import { useCategories } from '../hooks/useCategories'
import { useTasks } from '../hooks/useTasks'
import { TodosContext } from './TodosContext'

export default function TodosProvider({ children }) {
  const taskApi = useTasks()
  const categoryApi = useCategories()

  const { unsetCategory, replaceTasks } = taskApi
  const { deleteCategory, resetCategories } = categoryApi

  // Removing a category must not leave tasks pointing at it.
  const removeCategory = useCallback(
    (id) => {
      deleteCategory(id)
      unsetCategory(id)
    },
    [deleteCategory, unsetCategory],
  )

  const resetAll = useCallback(() => {
    replaceTasks([])
    resetCategories()
  }, [replaceTasks, resetCategories])

  const value = useMemo(
    () => ({ ...taskApi, ...categoryApi, removeCategory, resetAll }),
    [taskApi, categoryApi, removeCategory, resetAll],
  )

  return <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
}