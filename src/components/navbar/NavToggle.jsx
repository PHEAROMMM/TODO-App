export default function NavToggle({ open, onToggle, controls}) {
    return (
        <button
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aira-controls={controls}
            onClick={onToggle}
            >
                {open ? 'Close' : 'Menu'}
            </button>
    )
}