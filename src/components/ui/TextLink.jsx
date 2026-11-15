import { Link } from 'react-router-dom'
import { cx } from '../../utils/cx'

export default function TextLink({ to, className, ...rest}) { 
    return <Link to={to} className={cx('text-btn', className)} {...rest} />
}