import { cx } from '../../utils/cx'

export default function Toggle({ checked, onChange, id, label}) {
    return (
        <button
            type="button"
            id={id}
            role="switch"
            aria-checked={checked}
            aria-label={label}
            className={cx('toggle', checked && 'is-on')}
            onClick={() => onChange(!checked)}
            >
                <span className="toggle__thumb" />
            </button>
    )
}