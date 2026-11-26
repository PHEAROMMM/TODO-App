import { Link } from 'react-router-dom'
import DueLabel from '../tasks/DueLabel'

export default function AfterRow({ task }) {
  return (
    <li className="after-row">
      <Link to={`/tasks/${task.id}/edit`} className="after-row__title" title={task.text}>
        {task.text}
      </Link>
      <DueLabel due={task.due} done={task.done} />
    </li>
  )
}