import { cx } from '../../utils/cx'

export default function DateInput({ className, ...rest}) {
    return <input type="date" className={cx('input', className)} {...rest} />
}