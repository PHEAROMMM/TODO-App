import { cx } from '../../utils/cx'


// `children` lets callers add leading <option>s (e.g. "All categories").
export default function SelectInput({ options, className, children, ...rest}) {
    return (
        <select className={cx('input', 'input--select', className)} {...rest}>
            {children}
            {options.map((o) => (
                <option key={o.value} value={o.value}>
                    {o.label}
                </option>
            ))}
        </select>
    )
}