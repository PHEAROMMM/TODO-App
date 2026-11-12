import { useCallback } from 'react'
import { confirmIf } from '../utils/confirm'
import { useSettings } from './useSettings'
import { useTodosContext } from './useTodosContext'

// Returns a function that deletes a task, asking first when the setting is on.
export function useDeleteTask() {
  const { deleteTask } = useTodosContext()
  const { settings } = useSettings()
  const { confirmDelete } = settings

  return useCallback(
    (task) => {
      if (confirmIf(confirmDelete, `Delete "${task.text}"?`)) deleteTask(task.id)
    },
    [deleteTask, confirmDelete],
  )
}