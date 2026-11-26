import { useMemo } from 'react'
import CategoryItem from './CategoryItem'

export default function CategoryList({ categories, tasks, onUpdate, onDelete }) {
  const counts = useMemo(() => {
    const map = new Map()
    for (const t of tasks) map.set(t.categoryId, (map.get(t.categoryId) || 0) + 1)
    return map
  }, [tasks])

  if (categories.length === 0) {
    return <p className="muted-text">No categories yet. Add one to start grouping tasks.</p>
  }

  return (
    <ul className="category-list">
      {categories.map((c) => (
        <CategoryItem
          key={c.id}
          category={c}
          taskCount={counts.get(c.id) || 0}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </ul>
  )
}