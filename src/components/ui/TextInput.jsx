import { cx } from '../../utils/cx'

export default function TextInput({ className, type = 'text', ...rest}) {
    return <input type={type} className={cx('input', className)} {...rest} />
}