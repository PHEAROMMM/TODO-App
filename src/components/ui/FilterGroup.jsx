export default function FilterGroup({ label, children}) {
    return (
        <div className="filter-group" role="group" aria-label={label}>
            <h3>{label}</h3>
            {children}
        </div>
    )
}