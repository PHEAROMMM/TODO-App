import TextLink from '../ui/TextLink'

export default function TaskEditLink({ task }) {
  return (
    <TextLink to={`/tasks/${task.id}/edit`} aria-label={`Edit "${task.text}"`}>
      Edit
    </TextLink>
  )
}