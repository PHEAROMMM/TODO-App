import Checkbox from '../ui/Checkbox'

export default function TaskCheckbox({ task, onToggle }) {
  return (
    <Checkbox
      checked={task.done}
      onChange={() => onToggle(task.id)}
      label={`Mark "${task.text}" as ${task.done ? 'not done' : 'done'}`}
    />
  )
}