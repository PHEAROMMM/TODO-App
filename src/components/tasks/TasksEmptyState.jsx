import Button from '../ui/Button'
import EmptyState from '../ui/EmptyState'
import LinkButton from '../ui/LinkButton'

export default function TasksEmptyState({ hasAny, onClearFilters }) {
  if (!hasAny) {
    return (
      <EmptyState title="No tasks yet" message="Add the first deadline you need to keep track of.">
        <LinkButton to="/tasks/new">Add task</LinkButton>
      </EmptyState>
    )
  }
  return (
    <EmptyState title="Nothing matches" message="No task fits the current search or filters.">
      <Button variant="outline" onClick={onClearFilters}>
        Clear filters
      </Button>
    </EmptyState>
  )
}