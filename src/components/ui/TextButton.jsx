import { cx } from '../../utils/cx'

// A small underlined word-button for secondary actions (Edit, Delete, Clear).
export default function TextButton({ tone = 'default', className, ...rest}) {
    return (
        <button
        type="button"
        className={cx('text-btn', tone === 'danger' && 'text-btn--danger', className)}
        {...rest}
        />
    )
}