import { cx } from '../../utils/cx'
import { isOverdue, relativeDue } from '../../utils/dates'
import { PRIORITY_LABELS } from '../../utils/constants'
import Button from '../ui/Button'
import LinkButton from '../ui/LinkButton'
import TextLink from '../ui/TextLink'

// The focal point of the dashboard. The h1 is the task itself, or the state when there is none.
export default function NextUp({ task, category, counts, onDone }) {
  if (counts.all === 0) {
    return (
      <section className="next-up">
        <p className="next-up__label">Next up</p>
        <h1>No tasks yet</h1>
        <p className="next-up__notes">Add the first deadline you need to keep track of.</p>
        <LinkButton to="/tasks/new">Add task</LinkButton>
      </section>
    )
  }

  if (!task) {
    return (
      <section className="next-up">
        <p className="next-up__label">Next up</p>
        <h1>Everything is done</h1>
        <p className="next-up__notes">
          {counts.completed} {counts.completed === 1 ? 'task' : 'tasks'} completed.
        </p>
        <LinkButton to="/tasks/new">Add task</LinkButton>
      </section>
    )
  }

  const overdue = isOverdue(task.due, task.done)

  return (
    <section className={cx('next-up', overdue && 'next-up--overdue')} aria-live="polite">
      <p className="next-up__label">
        <span>Next up</span>
        {overdue && <span className="next-up__flag">Overdue</span>}
        {task.due && <span>{relativeDue(task.due)}</span>}
      </p>
      <h1>{task.text}</h1>
      {task.notes && <p className="next-up__notes">{task.notes}</p>}
      <p className="next-up__facts">
        {category && <span>{category.name}</span>}
        <span>{PRIORITY_LABELS[task.priority]} priority</span>
      </p>
      <div className="next-up__actions">
        <Button onClick={() => onDone(task.id)}>Mark done</Button>
        <TextLink to={`/tasks/${task.id}/edit`}>Edit</TextLink>
      </div>
    </section>
  )
}