import Section from '../ui/Section'
import CategoryBar from './CategoryBar'

export default function CategoryBreakdown({ rows }) {
  const visible = rows.filter((r) => r.total > 0)
  return (
    <Section title="By category">
      {visible.length === 0 ? (
        <p className="muted-text">Tasks filed under a category are counted here.</p>
      ) : (
        <ul className="category-bars">
          {visible.map((row) => (
            <CategoryBar key={row.id} row={row} />
          ))}
        </ul>
      )}
    </Section>
  )
}