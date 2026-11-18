import TextButton from '../ui/TextButton'

export default function TaskBulkActions({ counts, onToggleAll, onClearCompleted }) {
  const allDone = counts.all > 0 && counts.completed === counts.all
  return (
    <div className="bulk-actions">
      <TextButton onClick={onToggleAll}>{allDone ? 'Mark all active' : 'Mark all done'}</TextButton>
      <TextButton tone="danger" onClick={onClearCompleted} disabled={counts.completed === 0}>
        Clear completed ({counts.completed})
      </TextButton>
    </div>
  )
}