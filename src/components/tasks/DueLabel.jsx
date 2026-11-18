import { cx } from '../../utils/cx'
import { isOverdue, relativeDue } from '../../utils/dates'

// Overdue is shown with a word as well as colour.
export default function DueLabel({ due, done }) {
  if (!due) return <span className="due due--none">No date</span>
  const overdue = isOverdue(due, done)
  return (
    <span className={cx('due', overdue && 'due--overdue')}>
      {overdue && <span>Overdue</span>}
      <span>{relativeDue(due)}</span>
    </span>
  )
}