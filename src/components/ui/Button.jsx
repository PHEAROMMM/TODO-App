import { cx } from '../../utils/cx'

// variant: primary (the one filled action per screen) | outline | danger (outlined red)
export default function Button({
    variant = 'primary', type = 'button', className, ...rest }) {
        return <button type={type} className={cx('btn', `btn--${variant}`, className)} {...rest}/>
}