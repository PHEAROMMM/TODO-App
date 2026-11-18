import { cx } from '../../utils/cx'
import { PRIORITY_LABELS } from '../../utils/constants'

// Only High gets the ochre flag; the word is always present so colour is never the only signal.
export default function PriorityMark({ priority }) {
  return <span className={cx('priority', `priority--${priority}`)}>{PRIORITY_LABELS[priority]}</span>
}