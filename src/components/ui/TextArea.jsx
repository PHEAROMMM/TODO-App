import { cx } from '../../utils/cx'

export default function TextArea({ className, rows = 4, ...rest}) {
    return <textarea rows={rows} className={cx('input', className)} {...rest} />
} 