import { NavLink } from 'react-router-dom'


// The label gets its own box so the current-page line can sit right under the word.
export default function NavItem({ to, label, end, onNavigate}) {
    return (
        <li>
            <NavLink to={to} end={end} onClick={onNavigate} className="nav-item">
                <span className="nav-item__label">{label}</span>
            </NavLink>
        </li>
    )
}