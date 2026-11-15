import { Link } from 'react-router-dom'

export default function NavBrand({onNavigate}) {
    return (
        <Link to="/" className="nav-brand" onClick={onNavigate}>
            Todo Lists
        </Link>
    )
}