import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSettings } from '../../hooks/useSettings'
import { confirmIf } from '../../utils/confirm'
import TextButton from '../ui/TextButton'
import CategoryForm from './CategoryForm'

export default function CategoryItem({ category, taskCount, onUpdate, onDelete }) {
  const [editing, setEditing] = useState(false)
  const { settings } = useSettings()

  function handleUpdate(values) {
    const error = onUpdate(category.id, values)
    if (!error) setEditing(false)
    return error
  }

  function handleDelete() {
    const note =
      taskCount > 0
        ? ` Its ${taskCount} ${taskCount === 1 ? 'task' : 'tasks'} will become uncategorized.`
        : ''
    // Always ask when tasks are affected; otherwise follow the setting.
    if (confirmIf(taskCount > 0 || settings.confirmDelete, `Delete "${category.name}"?${note}`)) {
      onDelete(category.id)
    }
  }

  if (editing) {
    return (
      <li className="category-item category-item--editing">
        <CategoryForm
          initial={category}
          submitLabel="Save"
          onSubmit={handleUpdate}
          onCancel={() => setEditing(false)}
          idPrefix={`edit-${category.id}`}
        />
      </li>
    )
  }

  return (
    <li className="category-item">
      <Link to={`/tasks?category=${category.id}`} className="category-item__name" title={category.name}>
        {category.name}
      </Link>
      <span className="category-item__count">
        {taskCount} {taskCount === 1 ? 'task' : 'tasks'}
      </span>
      <TextButton aria-label={`Rename ${category.name}`} onClick={() => setEditing(true)}>
        Rename
      </TextButton>
      <TextButton tone="danger" aria-label={`Delete ${category.name}`} onClick={handleDelete}>
        Delete
      </TextButton>
    </li>
  )
}