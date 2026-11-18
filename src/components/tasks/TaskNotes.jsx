export default function TaskNotes({ notes }) {
  if (!notes) return null
  return <p className="task__notes">{notes}</p>
}