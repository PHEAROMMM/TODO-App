import SearchInput from '../ui/SearchInput'
import TaskCategoryFilter from './TaskCategoryFilter'
import TaskSortSelect from './TaskSortSelect'
import TaskStatusFilter from './TaskStatusFilter'

export default function TaskFilterRail({ filters, setFilter, counts, categories }) {
  return (
    <>
      <SearchInput
        value={filters.q}
        onChange={(v) => setFilter('q', v)}
        placeholder="Search tasks and notes"
        label="Search tasks"
      />
      <TaskStatusFilter value={filters.status} counts={counts} onChange={(v) => setFilter('status', v)} />
      <TaskCategoryFilter
        value={filters.category}
        categories={categories}
        onChange={(v) => setFilter('category', v)}
      />
      <TaskSortSelect value={filters.sort} onChange={(v) => setFilter('sort', v)} />
    </>
  )
}