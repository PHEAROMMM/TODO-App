import { NO_CATEGORY } from '../../utils/constants'
import FilterGroup from '../ui/FilterGroup'
import FilterOption from '../ui/FilterOption'

export default function TaskCategoryFilter({ value, categories, onChange }) {
  return (
    <FilterGroup label="Category">
      <ul className="filter-list">
        <FilterOption active={value === ''} onClick={() => onChange('')}>
          All categories
        </FilterOption>
        {categories.map((c) => (
          <FilterOption key={c.id} active={value === c.id} onClick={() => onChange(c.id)}>
            {c.name}
          </FilterOption>
        ))}
        <FilterOption active={value === NO_CATEGORY} onClick={() => onChange(NO_CATEGORY)}>
          Uncategorized
        </FilterOption>
      </ul>
    </FilterGroup>
  )
}