import { Link } from 'react-router-dom'
import { cx } from '../../utils/cx'

export default function LinkButton({ to, 
    variant = 'primary', className, ...rest}) { 
    return <Link to={to} className={cx('btn', `btn--${variant}`, className)} {...rest}/>
}