import { useState } from 'react'
import { cx } from '../../utils/cx'
import NavBrand from './NavBrand'
import NavLinks from './NavLinks'
import NavToggle from './NavToggle'

const MENU_ID = 'nav-menu'

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const close = () => setOpen(false)

    return (
        <header className="nav">
            <nav className="nav__inner" aria-label="Main">
                <NavBrand onNavigate={close} />
                <NavToggle open={open} onToggle={() => setOpen((o) => !o)} controls={MENU_ID} />
                    <div id={MENU_ID} className={cx('nav__menu', open && 'is-open')}>
                          <NavLinks onNavigate={close} />
                          </div>  
            </nav>
        </header>
    )
}