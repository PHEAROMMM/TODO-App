import CategoryTag from './CategoryTag'
import TaskDeleteButton from './TaskDeleteButton'
import TaskEditLink from './TaskEditLink'

// The quiet line under a task: category, then the two actions.
export default function TaskLine({ task, category, onDelete }) {
  return (
    <div className="task__line">
      {category && <CategoryTag category={category} />}
      <TaskEditLink task={task} />
      <TaskDeleteButton task={task} onDelete={onDelete} />
    </div>
  )
}