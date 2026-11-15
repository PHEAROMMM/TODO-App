export default function Checkbox({ checked, onChange, label}) {
    return (
        <span className="check">
            <input
            type="checkbox"
            className="check__input"
            checked={checked}
            onChange={onChange}
            aria-label={label}
            />
            <span className="check__box" aria-hidden="true" />
        </span>
    )
}