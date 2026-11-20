import { useParams } from 'react-router-dom'
import PageLayout from '../components/layout/PageLayout'
import TaskFormView from '../components/taskform/TaskFormView'
import EmptyState from '../components/ui/EmptyState'
import LinkButton from '../components/ui/LinkButton'
import PageHeader from '../components/ui/PageHeader'
import { useTodosContext } from '../hooks/useTodosContext'

export default function TaskForm() {
  const { id } = useParams()
  const { tasks } = useTodosContext()
  const task = id ? tasks.find((t) => t.id === id) : undefined

  if (id && !task) {
    return (
      <PageLayout>
        <EmptyState title="Task not found" message="It may have been deleted.">
          <LinkButton to="/tasks" variant="outline">
            Back to tasks
          </LinkButton>
        </EmptyState>
      </PageLayout>
    )
  }

  return (
    <PageLayout>
      <PageHeader title={task ? 'Edit task' : 'New task'} />
      <TaskFormView key={task?.id ?? 'new'} task={task} />
    </PageLayout>
  )
}