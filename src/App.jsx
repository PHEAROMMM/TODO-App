import { useTodosContext } from './hooks/useTodosContext'

export default function App() {
  const { tasks, addTask } = useTodosContext()
  return (
    <main style={{ padding: 24 }}>
      <h1>Todo Lists</h1>
      <p>{tasks.length} tasks</p>
      <button onClick={() => addTask({ text: 'Test task' })}>Add test task</button>
    </main>
  )
}