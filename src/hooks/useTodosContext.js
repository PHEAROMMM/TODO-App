import { useContext } from 'react'
import { TodosContext } from '../context/TodosContext'

export function useTodosContext() {
  const ctx = useContext(TodosContext)
  if (!ctx) throw new Error('useTodosContext must be used inside <TodosProvider>')
  return ctx
}