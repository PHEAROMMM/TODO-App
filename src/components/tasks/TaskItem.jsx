import { cx } from '../../utils/cx'
import DueLabel from './DueLabel'
import PriorityMark from './PriorityMark'
import TaskCheckbox from './TaskCheckbox'
import TaskLine from './TaskLine'
import TaskNotes from './TaskNotes'
import TaskTitle from './TaskTitle'

// One ledger row. Columns: check | task | due | priority.
export default function TaskItem({ task, category, onToggle, onDelete }) {
  return (
    <li className={cx('task', task.done && 'is-done')}>
      <TaskCheckbox task={task} onToggle={onToggle} />
      <div className="task__body">
        <TaskTitle text={task.text} />
        <TaskNotes notes={task.notes} />
        <TaskLine task={task} category={category} onDelete={onDelete} />
      </div>
      <div className="task__due">
        <DueLabel due={task.due} done={task.done} />
      </div>
      <div className="task__priority">
        <PriorityMark priority={task.priority} />
      </div>
    </li>
  )
}