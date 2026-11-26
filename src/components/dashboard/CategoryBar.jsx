import { Link } from 'react-router-dom'
import ProgressBar from '../ui/ProgressBar'

export default function CategoryBar({ row }) {
  const percent = row.total === 0 ? 0 : Math.round((row.done / row.total) * 100)
  return (
    <li>
      <Link to={`/tasks?category=${row.id}`} className="category-bar">
        <span className="category-bar__name" title={row.name}>
          {row.name}
        </span>
        <span className="category-bar__count">
          {row.done}/{row.total}
        </span>
        <ProgressBar value={percent} label={`${row.name} progress`} />
      </Link>
    </li>
  )
}