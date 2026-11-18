import { useMemo } from 'react'
import PageLayout from '../components/layout/PageLayout'
import FilterPanel from '../components/tasks/FilterPanel'
import TaskBulkActions from '../components/tasks/TaskBulkActions'
import TaskFilterRail from '../components/tasks/TaskFilterRail'
import TaskList from '../components/tasks/TaskList'
import TasksEmptyState from '../components/tasks/TasksEmptyState'
import LinkButton from '../components/ui/LinkButton'
import PageHeader from '../components/ui/PageHeader'
import { useDeleteTask } from '../hooks/useDeleteTask'
import { useSettings } from '../hooks/useSettings'
import { useTaskFilters } from '../hooks/useTaskFilters'
import { useTodosContext } from '../hooks/useTodosContext'
import { confirmIf } from '../utils/confirm'
import { countByStatus, filterTasks, sortTasks } from '../utils/tasks'

export default function Tasks() {
  const { tasks, categories, toggleTask, toggleAll, clearCompleted } = useTodosContext()
  const { settings } = useSettings()
  const { filters, setFilter, clearFilters } = useTaskFilters()
  const deleteTask = useDeleteTask()

  const counts = useMemo(() => countByStatus(tasks), [tasks])
  const visible = useMemo(
    () =>
      sortTasks(
        filterTasks(tasks, { status: filters.status, category: filters.category, query: filters.q }),
        filters.sort,
      ),
    [tasks, filters],
  )
  const activeFilters = [filters.status !== 'all', filters.category !== '', filters.q !== ''].filter(
    Boolean,
  ).length

  function handleClearCompleted() {
    const n = counts.completed
    if (confirmIf(settings.confirmDelete, `Remove ${n} completed ${n === 1 ? 'task' : 'tasks'}?`)) {
      clearCompleted()
    }
  }

  // With no tasks at all there is nothing to filter: one empty state, one action.
  if (tasks.length === 0) {
    return (
      <PageLayout>
        <PageHeader title="Tasks" />
        <TasksEmptyState hasAny={false} />
      </PageLayout>
    )
  }

  return (
    <div className="stack">
      {/* The title sits above the grid so it is the first thing on a phone, before the filters. */}
      <PageHeader title="Tasks" subtitle={`Showing ${visible.length} of ${tasks.length}`}>
        <LinkButton to="/tasks/new">New task</LinkButton>
      </PageHeader>

      <PageLayout
        railSide="left"
        railFirst
        railLabel="Filters"
        rail={
          <FilterPanel activeCount={activeFilters}>
            <TaskFilterRail
              filters={filters}
              setFilter={setFilter}
              counts={counts}
              categories={categories}
            />
          </FilterPanel>
        }
      >
        {visible.length > 0 ? (
          <TaskList tasks={visible} categories={categories} onToggle={toggleTask} onDelete={deleteTask} />
        ) : (
          <TasksEmptyState hasAny onClearFilters={clearFilters} />
        )}
        <TaskBulkActions counts={counts} onToggleAll={toggleAll} onClearCompleted={handleClearCompleted} />
      </PageLayout>
    </div>
  )
}