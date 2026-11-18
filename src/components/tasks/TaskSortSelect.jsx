import { SORT_OPTIONS } from '../../utils/constants'
import FilterGroup from '../ui/FilterGroup'
import SelectInput from '../ui/SelectInput'

export default function TaskSortSelect({ value, onChange }) {
  return (
    <FilterGroup label="Sort by">
      <SelectInput
        aria-label="Sort tasks"
        value={value}
        options={SORT_OPTIONS}
        onChange={(e) => onChange(e.target.value)}
      />
    </FilterGroup>
  )
}