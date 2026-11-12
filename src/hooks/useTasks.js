import { useCallback } from 'react'
import { STORAGE_KEYS } from '../utils/constants'
import { createId } from '../utils/id'
import { useLocalStorage } from './useLocalStorage'

export function useTasks() {
  const [tasks, setTasks] = useLocalStorage(STORAGE_KEYS.tasks, [], Array.isArray)

  const addTask = useCallback(
    ({ text, notes = '', priority = 'medium', due = '', categoryId = '' }) => {
      const trimmed = text.trim()
      if (!trimmed) return
      const task = {
        id: createId(),
        text: trimmed,
        notes: notes.trim(),
        done: false,
        priority,
        due,
        categoryId,
        createdAt: Date.now(),
      }
      setTasks((prev) => [task, ...prev])
    },
    [setTasks],
  )

  const updateTask = useCallback(
    (id, changes) => {
      setTasks((prev) =>
        prev.map((t) => {
          if (t.id !== id) return t
          const next = { ...t, ...changes }
          if ('text' in changes) next.text = (changes.text || '').trim() || t.text
          if ('notes' in changes) next.notes = (changes.notes || '').trim()
          return next
        }),
      )
    },
    [setTasks],
  )

  const toggleTask = useCallback(
    (id) => setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))),
    [setTasks],
  )

  const deleteTask = useCallback(
    (id) => setTasks((prev) => prev.filter((t) => t.id !== id)),
    [setTasks],
  )

  const clearCompleted = useCallback(
    () => setTasks((prev) => prev.filter((t) => !t.done)),
    [setTasks],
  )

  const toggleAll = useCallback(
    () =>
      setTasks((prev) => {
        const allDone = prev.length > 0 && prev.every((t) => t.done)
        return prev.map((t) => ({ ...t, done: !allDone }))
      }),
    [setTasks],
  )

  const unsetCategory = useCallback(
    (categoryId) =>
      setTasks((prev) => prev.map((t) => (t.categoryId === categoryId ? { ...t, categoryId: '' } : t))),
    [setTasks],
  )

  const replaceTasks = useCallback((list) => setTasks(list), [setTasks])

  return {
    tasks,
    addTask,
    updateTask,
    toggleTask,
    deleteTask,
    clearCompleted,
    toggleAll,
    unsetCategory,
    replaceTasks,
  }
}