import { PRIORITY_OPTIONS } from '../../utils/constants'
import SegmentedControl from '../ui/SegmentedControl'

export default function PriorityField({ value, onChange }) {
  return (
    <div className="field">
      <span className="field__label" id="priority-label">
        Priority
      </span>
      <SegmentedControl label="Priority" options={PRIORITY_OPTIONS} value={value} onChange={onChange} />
    </div>
  )
}