export default function CategoryTag({ category }) {
  return (
    <span className="cat-tag" title={category.name}>
      {category.name}
    </span>
  )
}