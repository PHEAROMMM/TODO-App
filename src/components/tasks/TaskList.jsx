import { useMemo } from 'react'
import LedgerHead from './LedgerHead'
import TaskItem from './TaskItem'

export default function TaskList({ tasks, categories, onToggle, onDelete }) {
  const byId = useMemo(() => new Map(categories.map((c) => [c.id, c])), [categories])

  return (
    <div>
      <LedgerHead />
      <ul className="task-list">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            category={byId.get(task.categoryId)}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  )
}