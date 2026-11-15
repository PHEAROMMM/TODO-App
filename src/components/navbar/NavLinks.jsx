import NavItem from "./NavItem"
import { NAV_ITEMS } from "./navItems"

export default function NavLinks({ onNavigate }) {
    return (
        <ul className="nav-links">
            {NAV_ITEMS.map((item) => (
                <NavItem key={item.to} {...item} onNavigate={onNavigate} />
            ))}
        </ul>
    )
}