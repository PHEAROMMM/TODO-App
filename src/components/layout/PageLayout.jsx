import { cx } from '../../utils/cx'

// 12-column grid. With a rail: main = 8 columns, rail = 4, on the side given by `railSide`.
// Without a rail the main column is centred (columns 3-10) so the page is symmetric.
// On narrow screens everything stacks; `railFirst` puts the rail above the main column.
export default function PageLayout({
    rail,
    railSide = 'right',
    railFirst = false,
    railLabel,
    children,
}) {
    return (
        <div className={cx('grid', rail && railSide === 'left' && 'grid--rail-left')}>
            <div className={cx('grid__main', !rail && 'grid__main--solo')}>{children}</div>
            {rail && (
                <aside className={cx('grid__rail', railFirst && 'grid__rail--first')} aria-label={railLabel}>
                    {rail}
                </aside>
            )}
        </div>
    )
}