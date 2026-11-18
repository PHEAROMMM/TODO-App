import TextButton from '../ui/TextButton'

export default function TaskDeleteButton({ task, onDelete }) {
  return (
    <TextButton tone="danger" aria-label={`Delete "${task.text}"`} onClick={() => onDelete(task)}>
      Delete
    </TextButton>
  )
}