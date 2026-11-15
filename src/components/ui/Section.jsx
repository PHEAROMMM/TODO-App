import { cx } from '../../utils/cx'

// A ruled block with a heading. Replaces cards: structure comes from the rule, not a box.

export default function Section({ title, action, tone, className, children}) {
    return (
        <section className={cx('section', tone === 'danger' && 'section--danger', className)}>
            {(title || action) && (
                <header className="section__header">
                    <h2>{title}</h2>
                    {action}
                </header>
            )}
            {children}
        </section>
    )
}