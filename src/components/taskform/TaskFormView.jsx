import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSettings } from '../../hooks/useSettings'
import { useTodosContext } from '../../hooks/useTodosContext'
import CategoryField from './CategoryField'
import DueDateField from './DueDateField'
import FormActions from './FormActions'
import NotesField from './NotesField'
import PriorityField from './PriorityField'
import TitleField from './TitleField'

// Handles both "new" (no task) and "edit" (task given).
export default function TaskFormView({ task }) {
  const navigate = useNavigate()
  const { addTask, updateTask, categories } = useTodosContext()
  const { settings } = useSettings()
  const isEdit = Boolean(task)

  const [text, setText] = useState(task?.text ?? '')
  const [notes, setNotes] = useState(task?.notes ?? '')
  const [priority, setPriority] = useState(task?.priority ?? settings.defaultPriority)
  const [due, setDue] = useState(task?.due ?? '')
  const [categoryId, setCategoryId] = useState(task?.categoryId ?? '')
  const [error, setError] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!text.trim()) {
      setError('Give the task a title.')
      return
    }
    const data = { text, notes, priority, due, categoryId }
    if (isEdit) updateTask(task.id, data)
    else addTask(data)
    navigate('/tasks')
  }

  function handleTitleChange(value) {
    setText(value)
    if (error) setError('')
  }

  return (
    <form className="task-form" onSubmit={handleSubmit} noValidate>
      <TitleField value={text} onChange={handleTitleChange} error={error} />
      <NotesField value={notes} onChange={setNotes} />
      <PriorityField value={priority} onChange={setPriority} />
      <div className="form-row">
        <DueDateField value={due} onChange={setDue} />
        <CategoryField value={categoryId} categories={categories} onChange={setCategoryId} />
      </div>
      <FormActions submitLabel="Save task" cancelTo="/tasks" />
    </form>
  )
}