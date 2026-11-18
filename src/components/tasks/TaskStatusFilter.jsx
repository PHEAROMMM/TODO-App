import { STATUS_FILTERS } from '../../utils/constants'
import FilterGroup from '../ui/FilterGroup'
import FilterOption from '../ui/FilterOption'

export default function TaskStatusFilter({ value, counts, onChange }) {
  return (
    <FilterGroup label="Show">
      <ul className="filter-list">
        {STATUS_FILTERS.map((f) => (
          <FilterOption
            key={f.value}
            active={value === f.value}
            count={counts[f.value]}
            onClick={() => onChange(f.value)}
          >
            {f.label}
          </FilterOption>
        ))}
      </ul>
    </FilterGroup>
  )
}