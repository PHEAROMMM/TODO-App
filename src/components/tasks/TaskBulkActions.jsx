import TextButton from '../ui/TextButton'

export default function TaskBulkActions({ counts, visibleCounts, onToggleAll, onClearCompleted }) {
  const allDone = visibleCounts.all > 0 && visibleCounts.completed === visibleCounts.all
  return (
    <div className="bulk-actions">
      <TextButton onClick={onToggleAll} disabled={visibleCounts.all === 0}>
        {allDone ? 'Mark all active' : 'Mark all done'}
      </TextButton>
      <TextButton tone="danger" onClick={onClearCompleted} disabled={counts.completed === 0}>
        Clear completed ({counts.completed})
      </TextButton>
    </div>
  )
}