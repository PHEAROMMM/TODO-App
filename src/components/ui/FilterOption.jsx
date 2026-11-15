export default function FilterOption({ active, count, onClick, children}) {
    return(
        <li>
            <button
            type="button"
            className="filter-option"
            aria-pressed={active}
            onClick={onClick}
            title={typeof children === 'string' ? children : undefined}
        >
            <span className="filter-option__label">{children}</span>
            {count !== undefined && <span className="filter-option__count">{count}</span>}
        </button>
        </li>
    )
}