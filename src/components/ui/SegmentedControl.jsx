export default function SegmentedControl({ options, value, onChange, label}) {
    return (
        <div className="segmented" role="radiogroup" aria-label={label}>
            {options.map((o) => (
                <button
                key={o.value}
                type="button"
                role="radio"
                aria-checked={value === o.value}
                className="segmented__btn"
                onClick={() => onChange(o.value)}
                >
                {o.label}
                </button>
            ))}
        </div>
    )
}