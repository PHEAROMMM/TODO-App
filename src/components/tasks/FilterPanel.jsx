import { useState } from 'react'
import { cx } from '../../utils/cx'

const BODY_ID = 'task-filters'

// Always visible on wide screens. On narrow screens it collapses behind one button so the
// task list, not the filters, is what you see first.
export default function FilterPanel({ activeCount = 0, children }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="filter-panel">
      <button
        type="button"
        className="filter-toggle"
        aria-expanded={open}
        aria-controls={BODY_ID}
        onClick={() => setOpen((o) => !o)}
      >
        <span>{open ? 'Hide filters' : 'Filters'}</span>
        {activeCount > 0 && <span className="filter-toggle__count">{activeCount} on</span>}
      </button>
      <div id={BODY_ID} className={cx('filter-panel__body', !open && 'is-collapsed')}>
        {children}
      </div>
    </div>
  )
}